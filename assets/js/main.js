/**
 * Premium Real Estate Dashboard - Framework JS
 * UrbanHub Concepts & Framework Core
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- AOS ANIMATION INITIALIZATION ---
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quad'
    });
  }

  // --- LOCAL STORAGE THEME ENGINE ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update theme toggle icon
    if (theme === 'light') {
      if (themeIcon) themeIcon.className = 'bi bi-moon-stars';
      if (themeToggleBtn) themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
    } else {
      if (themeIcon) themeIcon.className = 'bi bi-sun';
      if (themeToggleBtn) themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
    }

    // Dispatch custom event so charts can react
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });

    const loadedTheme = document.documentElement.getAttribute('data-bs-theme') || 'dark';
    applyTheme(loadedTheme);
  }

  // --- COLLAPSIBLE SIDEBAR TRANSITIONS & NAVIGATION ---
  const sidebarWrapper = document.getElementById('sidebar-wrapper');
  const sidebarToggleBtn = document.getElementById('sidebar-toggle');
  const sidebarOverlay = document.getElementById('sidebar-overlay');

  // Set tooltip content for all menu links
  document.querySelectorAll('.sidebar-menu-link').forEach(link => {
    const textSpan = link.querySelector('span');
    if (textSpan && !link.hasAttribute('data-tooltip')) {
      link.setAttribute('data-tooltip', textSpan.textContent.trim());
    }
  });

  // Restore sidebar state from LocalStorage on load
  const restoreSidebarState = () => {
    const savedSidebar = localStorage.getItem('sidebarCollapsed');
    if (savedSidebar === 'true') {
      document.body.classList.add('sidebar-collapsed');
    } else if (savedSidebar === 'false') {
      document.body.classList.remove('sidebar-collapsed');
    } else {
      // Default: Collapsed on tablet (between 992px and 1200px), expanded on desktop (>=1200px)
      if (window.innerWidth >= 992 && window.innerWidth < 1200) {
        document.body.classList.add('sidebar-collapsed');
      } else {
        document.body.classList.remove('sidebar-collapsed');
      }
    }
  };

  restoreSidebarState();

  if (sidebarToggleBtn && sidebarWrapper) {
    sidebarToggleBtn.addEventListener('click', () => {
      if (window.innerWidth >= 992) {
        const isCollapsed = document.body.classList.toggle('sidebar-collapsed');
        localStorage.setItem('sidebarCollapsed', isCollapsed ? 'true' : 'false');
      } else {
        sidebarWrapper.classList.toggle('mobile-show');
        if (sidebarOverlay) {
          sidebarOverlay.classList.toggle('active');
        }
      }
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => {
      sidebarWrapper.classList.remove('mobile-show');
      sidebarOverlay.classList.remove('active');
    });
  }

  // Handle ESC key to close sidebar on mobile
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebarWrapper && sidebarWrapper.classList.contains('mobile-show')) {
      sidebarWrapper.classList.remove('mobile-show');
      if (sidebarOverlay) {
        sidebarOverlay.classList.remove('active');
      }
    }
  });

  // --- DYNAMIC WELCOME BANNER GREETING & DATE ---
  const dynamicGreeting = document.getElementById('dynamic-greeting');
  const dynamicDate = document.getElementById('dynamic-date');
  if (dynamicGreeting) {
    const hour = new Date().getHours();
    let greeting = 'Good evening';
    if (hour < 12) {
      greeting = 'Good morning';
    } else if (hour < 18) {
      greeting = 'Good afternoon';
    }
    dynamicGreeting.textContent = `${greeting}, Sarah Jenkins`;
  }
  if (dynamicDate) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dynamicDate.textContent = new Date().toLocaleDateString('en-US', options);
  }

  // --- ANIMATED COUNTERS ENGINE ---
  const animatedCounters = document.querySelectorAll('.animate-counter-uh');
  animatedCounters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const isCurrency = counter.getAttribute('data-currency') === 'true';
    const isPercent = counter.getAttribute('data-percent') === 'true';
    const speed = 1500; // Total duration in ms
    const increment = target / (speed / 16); // 60 FPS
    
    let current = 0;
    const updateCounter = () => {
      current += increment;
      if (current >= target) {
        counter.textContent = formatValue(target, isCurrency, isPercent);
      } else {
        counter.textContent = formatValue(Math.ceil(current), isCurrency, isPercent);
        requestAnimationFrame(updateCounter);
      }
    };
    
    function formatValue(val, curr, perc) {
      if (curr) {
        if (val >= 1000) {
          return '$' + (val / 1000).toFixed(1) + 'K';
        }
        return '$' + val;
      }
      if (perc) {
        return val.toFixed(1) + '%';
      }
      return val.toLocaleString();
    }
    
    updateCounter();
  });

  // --- CIRCULAR PROGRESS INITIALIZER ---
  const circularProgresses = document.querySelectorAll('.circular-progress-uh');
  circularProgresses.forEach(progress => {
    const targetPercent = parseFloat(progress.getAttribute('data-percent-val'));
    progress.style.setProperty('--progress', `${targetPercent * 3.6}deg`);
  });

  // --- PREMIUM CHART.JS IMPLEMENTATION ---
  let analyticsChartInstance = null;
  let distributionChartInstance = null;
  let demandSparklineInstance = null;
  let rentalSparklineInstance = null;
  let salesSparklineInstance = null;

  function renderCharts(theme) {
    const isDark = theme === 'dark';
    
    // Theme-dependent colors
    const textColor = isDark ? '#8E9BAE' : '#64748B';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
    const primaryColor = isDark ? '#D4AF37' : '#B8860B'; // Gold
    const secondaryColor = isDark ? '#10B981' : '#10B981'; // Green
    const accentColor = isDark ? '#3B82F6' : '#2563EB'; // Blue
    const warningColor = isDark ? '#F59E0B' : '#D97706'; // Amber

    // 1. Revenue Analytics (Large Area Chart - Monthly, Yearly, Income vs Expense)
    const analyticsCtx = document.getElementById('analyticsChart');
    if (analyticsCtx) {
      if (analyticsChartInstance) analyticsChartInstance.destroy();
      analyticsChartInstance = new Chart(analyticsCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Gross Income ($K)',
              data: [110, 125, 115, 145, 150, 168, 172, 169, 185, 192, 210, 225],
              borderColor: primaryColor,
              backgroundColor: isDark ? 'rgba(212, 175, 55, 0.04)' : 'rgba(184, 134, 11, 0.04)',
              borderWidth: 3,
              tension: 0.4,
              fill: true,
              pointBackgroundColor: primaryColor,
              pointHoverRadius: 7
            },
            {
              label: 'Operating Expenses ($K)',
              data: [45, 48, 50, 42, 55, 60, 58, 62, 55, 63, 68, 70],
              borderColor: accentColor,
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderDash: [5, 5],
              tension: 0.4,
              pointBackgroundColor: accentColor,
              pointHoverRadius: 5
            },
            {
              label: 'Net Revenue ($K)',
              data: [65, 77, 65, 103, 95, 108, 114, 107, 130, 129, 142, 155],
              borderColor: secondaryColor,
              backgroundColor: 'transparent',
              borderWidth: 2,
              tension: 0.4,
              pointBackgroundColor: secondaryColor,
              pointHoverRadius: 5
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                color: textColor,
                font: {
                  family: 'Plus Jakarta Sans',
                  size: 11,
                  weight: '500'
                },
                boxWidth: 15,
                usePointStyle: true,
                pointStyle: 'circle'
              }
            },
            tooltip: {
              padding: 12,
              backgroundColor: isDark ? '#111114' : '#FFFFFF',
              titleColor: isDark ? '#FFFFFF' : '#0F172A',
              bodyColor: textColor,
              borderColor: gridColor,
              borderWidth: 1,
              titleFont: { family: 'Plus Jakarta Sans', weight: 'bold' },
              bodyFont: { family: 'Inter' }
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: textColor,
                font: { family: 'Inter', size: 10 }
              }
            },
            y: {
              grid: {
                color: gridColor
              },
              ticks: {
                color: textColor,
                font: { family: 'Inter', size: 10 }
              }
            }
          }
        }
      });
    }

    // 2. Property Status Distribution (Pie / Doughnut Chart: House, Apartment, Villa, Commercial, Land)
    const distributionCtx = document.getElementById('distributionChart');
    if (distributionCtx) {
      if (distributionChartInstance) distributionChartInstance.destroy();
      distributionChartInstance = new Chart(distributionCtx, {
        type: 'doughnut',
        data: {
          labels: ['Apartment', 'Villa', 'House', 'Commercial', 'Land'],
          datasets: [{
            data: [42, 28, 15, 10, 5],
            backgroundColor: [
              primaryColor,
              secondaryColor,
              accentColor,
              warningColor,
              isDark ? '#475569' : '#94A3B8'
            ],
            borderWidth: isDark ? 2 : 1,
            borderColor: isDark ? '#111114' : '#FFFFFF',
            hoverOffset: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: textColor,
                font: { family: 'Inter', size: 11 },
                boxWidth: 8,
                padding: 10,
                usePointStyle: true,
                pointStyle: 'circle'
              }
            },
            tooltip: {
              padding: 10,
              backgroundColor: isDark ? '#111114' : '#FFFFFF',
              titleColor: isDark ? '#FFFFFF' : '#0F172A',
              bodyColor: textColor,
              borderColor: gridColor,
              borderWidth: 1
            }
          },
          cutout: '72%'
        }
      });
    }

    // 3. Sparklines for Mini Market Overview
    const sparklineConfig = (data, color) => ({
      type: 'line',
      data: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [{
          data: data,
          borderColor: color,
          backgroundColor: 'transparent',
          borderWidth: 2.5,
          pointRadius: 0,
          pointHoverRadius: 4,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: true } },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });

    const demandCtx = document.getElementById('demandSparkline');
    if (demandCtx) {
      if (demandSparklineInstance) demandSparklineInstance.destroy();
      demandSparklineInstance = new Chart(demandCtx, sparklineConfig([65, 72, 68, 85, 82, 90, 94], primaryColor));
    }

    const rentalCtx = document.getElementById('rentalSparkline');
    if (rentalCtx) {
      if (rentalSparklineInstance) rentalSparklineInstance.destroy();
      rentalSparklineInstance = new Chart(rentalCtx, sparklineConfig([48, 52, 50, 58, 62, 60, 64], secondaryColor));
    }

    const salesCtx = document.getElementById('salesSparkline');
    if (salesCtx) {
      if (salesSparklineInstance) salesSparklineInstance.destroy();
      salesSparklineInstance = new Chart(salesCtx, sparklineConfig([80, 78, 82, 85, 89, 87, 92], accentColor));
    }
  }

  // Initial charts draw
  const initialTheme = document.documentElement.getAttribute('data-bs-theme') || 'dark';
  if (typeof Chart !== 'undefined') {
    renderCharts(initialTheme);
  }

  window.addEventListener('themeChanged', (e) => {
    if (typeof Chart !== 'undefined') {
      renderCharts(e.detail.theme);
    }
  });

  // --- RECENT PROPERTIES SEARCH AND PAGINATION ENGINE ---
  const propSearchInput = document.getElementById('property-table-search');
  const propTableBody = document.getElementById('property-table-body');
  
  if (propSearchInput && propTableBody) {
    propSearchInput.addEventListener('input', () => {
      const query = propSearchInput.value.toLowerCase().trim();
      const rows = propTableBody.getElementsByTagName('tr');
      
      Array.from(rows).forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(query)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }

  const paginationLinks = document.querySelectorAll('.page-link-premium');
  paginationLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      paginationLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      // Simulate pagination page transition with a subtle card list fade
      if (propTableBody) {
        propTableBody.style.opacity = '0.3';
        setTimeout(() => {
          propTableBody.style.opacity = '1';
        }, 200);
      }
    });
  });

  // --- NOTIFICATIONS MARK ALL READ & CLEAR BADGES ---
  const markAllReadBtn = document.getElementById('mark-all-read-btn');
  const notificationBadges = document.querySelectorAll('.header-btn-badge');
  const unreadCountElement = document.getElementById('unread-notif-count');
  const notificationItems = document.querySelectorAll('.notification-item-premium');

  if (markAllReadBtn) {
    markAllReadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove all header badges
      notificationBadges.forEach(badge => badge.remove());
      
      // Update badge counts to zero
      if (unreadCountElement) {
        unreadCountElement.textContent = '0 Unread';
        unreadCountElement.className = 'badge bg-secondary-subtle text-secondary';
      }
      
      // Remove 'unread' styles/highlights from items
      notificationItems.forEach(item => {
        item.classList.remove('unread-item-highlight');
        const unreadDot = item.querySelector('.unread-indicator-dot');
        if (unreadDot) unreadDot.remove();
      });

      // Show temporary beautiful Toast indicator
      showDynamicToast('All notifications marked as read successfully.');
    });
  }

  // --- QUICK ACTIONS HUB NOTIFICATIONS ---
  const quickActionCards = document.querySelectorAll('.quick-action-card-uh');
  quickActionCards.forEach(card => {
    card.addEventListener('click', () => {
      const actionName = card.querySelector('.font-title').textContent;
      showDynamicToast(`Action Triggered: Preparing form wizard for "${actionName}"`);
    });
  });

  // --- DYNAMIC TOAST UTILITY ---
  function showDynamicToast(message) {
    // Create modern notification toast on the fly
    let toastContainer = document.getElementById('uh-toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'uh-toast-container';
      toastContainer.className = 'position-fixed bottom-0 end-0 p-4';
      toastContainer.style.zIndex = '9999';
      document.body.appendChild(toastContainer);
    }
    
    const toast = document.createElement('div');
    toast.className = 'uh-card p-3 d-flex align-items-center gap-3 border-primary shadow-lg mb-2';
    toast.style.minWidth = '300px';
    toast.style.background = 'var(--uh-bg-card)';
    toast.style.border = '1px solid var(--uh-primary)';
    toast.style.animation = 'toastFadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    
    toast.innerHTML = `
      <div class="stat-icon-wrapper bg-primary text-white" style="width: 32px; height: 32px; font-size: 0.9rem;">
        <i class="bi bi-info-circle-fill"></i>
      </div>
      <div class="flex-grow-1">
        <span class="fw-semibold d-block" style="font-size: 0.85rem; color: var(--uh-text-main);">System Update</span>
        <p class="text-muted mb-0" style="font-size: 0.775rem;">${message}</p>
      </div>
      <button class="btn-close btn-close-white" style="font-size: 0.7rem; filter: var(--bs-theme, invert(1));" onclick="this.parentElement.remove()"></button>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.4s ease';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  // CSS for Toast animation
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @keyframes toastFadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .unread-item-highlight {
      background-color: rgba(var(--uh-primary-rgb), 0.03) !important;
    }
  `;
  document.head.appendChild(styleEl);
});
