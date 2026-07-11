/**
 * UrbanHub Premium CRM - Invoices Management Module
 * Robust Vanilla JavaScript State Engine, Chart.js Analytics, and Interactive Controllers.
 */

// Global Invoice Store State
let invoicesData = [
  {
    id: "INV-2026-001",
    customer: "Arthur Pendragon",
    email: "arthur@pendragon.co.uk",
    property: "Avala Tower Penthouse",
    agent: "Sarah Jenkins",
    issueDate: "2026-06-15",
    dueDate: "2026-07-15",
    type: "Property Sale",
    amount: 1250000.00,
    tax: 62500.00,
    paidAmount: 1250000.00,
    balance: 0.00,
    status: "Paid",
    method: "Bank Transfer",
    history: [
      { date: "2026-06-15", action: "Invoice Created", details: "Issued by Sarah Jenkins" },
      { date: "2026-06-20", action: "Full Payment Received", details: "Wire Transfer Ref #TXN-9021-P" }
    ]
  },
  {
    id: "INV-2026-002",
    customer: "Eleanor Vance",
    email: "eleanor.vance@gmail.com",
    property: "Signature Tower - Unit 105",
    agent: "Marcus Brody",
    issueDate: "2026-07-01",
    dueDate: "2026-08-01",
    type: "Rental",
    amount: 4500.00,
    tax: 225.00,
    paidAmount: 4500.00,
    balance: 0.00,
    status: "Paid",
    method: "Credit Card",
    history: [
      { date: "2026-07-01", action: "Invoice Created", details: "Monthly rental billing automated" },
      { date: "2026-07-02", action: "Payment Authorized", details: "Stripe Charge ch_8921B" }
    ]
  },
  {
    id: "INV-2026-003",
    customer: "Maximilian Sterling",
    email: "m.sterling@sterlingholdings.com",
    property: "Waterfront Villa",
    agent: "Sarah Jenkins",
    issueDate: "2026-07-05",
    dueDate: "2026-07-20",
    type: "Booking",
    amount: 12000.00,
    tax: 600.00,
    paidAmount: 4000.00,
    balance: 8600.00,
    status: "Partially Paid",
    method: "Bank Transfer",
    history: [
      { date: "2026-07-05", action: "Invoice Created", details: "Issued for Summer Rental Booking" },
      { date: "2026-07-06", action: "Deposit Payment Received", details: "Partial Payment of $4,000.00 received" }
    ]
  },
  {
    id: "INV-2026-004",
    customer: "Garrison Thorne",
    email: "gthorne@thornecorp.com",
    property: "Metropolitan Plaza - Suite 40B",
    agent: "Elena Rostova",
    issueDate: "2026-07-08",
    dueDate: "2026-08-08",
    type: "Commission",
    amount: 8500.00,
    tax: 425.00,
    paidAmount: 0.00,
    balance: 8925.00,
    status: "Pending",
    method: "Direct Deposit",
    history: [
      { date: "2026-07-08", action: "Invoice Created", details: "Commission fee for lease agreement" }
    ]
  },
  {
    id: "INV-2026-005",
    customer: "Sienna Brooks",
    email: "sienna@sunsetdesigns.io",
    property: "Sunset Heights Estate",
    agent: "Marcus Brody",
    issueDate: "2026-05-10",
    dueDate: "2026-06-10",
    type: "Maintenance",
    amount: 1800.00,
    tax: 90.00,
    paidAmount: 0.00,
    balance: 1890.00,
    status: "Overdue",
    method: "PayPal",
    history: [
      { date: "2026-05-10", action: "Invoice Created", details: "Pool and garden repair charges" },
      { date: "2026-06-11", action: "Payment Overdue Warning", details: "System automated notification sent" }
    ]
  },
  {
    id: "INV-2026-006",
    customer: "Julian Mercer",
    email: "mercer.j@outlook.com",
    property: "Green Valley Residence",
    agent: "Elena Rostova",
    issueDate: "2026-07-10",
    dueDate: "2026-07-25",
    type: "Utility",
    amount: 450.00,
    tax: 22.50,
    paidAmount: 0.00,
    balance: 472.50,
    status: "Draft",
    method: "Credit Card",
    history: [
      { date: "2026-07-10", action: "Invoice Created as Draft", details: "Draft for monthly HVAC charges" }
    ]
  },
  {
    id: "INV-2026-007",
    customer: "Diana Prince",
    email: "diana@themyscira.org",
    property: "The Heights Office Suite",
    agent: "Sarah Jenkins",
    issueDate: "2026-06-01",
    dueDate: "2026-07-01",
    type: "Security Deposit",
    amount: 5000.00,
    tax: 0.00,
    paidAmount: 5000.00,
    balance: 0.00,
    status: "Paid",
    method: "Bank Transfer",
    history: [
      { date: "2026-06-01", action: "Invoice Created", details: "Security deposit hold fee" },
      { date: "2026-06-02", action: "Payment Confirmed", details: "Full hold deposit completed" }
    ]
  },
  {
    id: "INV-2026-008",
    customer: "Bruce Wayne",
    email: "bruce@wayneenterprises.com",
    property: "Wayne Manor Gatehouse",
    agent: "Marcus Brody",
    issueDate: "2026-06-20",
    dueDate: "2026-07-05",
    type: "Refund",
    amount: 2500.00,
    tax: 0.00,
    paidAmount: 2500.00,
    balance: 0.00,
    status: "Refunded",
    method: "Bank Transfer",
    history: [
      { date: "2026-06-20", action: "Invoice Issued", details: "Original security hold invoice" },
      { date: "2026-07-06", action: "Refund Executed", details: "Hold refund approved and processed" }
    ]
  },
  {
    id: "INV-2026-009",
    customer: "Clark Kent",
    email: "ckent@dailyplanet.com",
    property: "Metropolis Tower Unit 3",
    agent: "Elena Rostova",
    issueDate: "2026-05-01",
    dueDate: "2026-06-01",
    type: "Rental",
    amount: 3200.00,
    tax: 160.00,
    paidAmount: 0.00,
    balance: 3360.00,
    status: "Cancelled",
    method: "Credit Card",
    history: [
      { date: "2026-05-01", action: "Invoice Created", details: "Monthly lease charges" },
      { date: "2026-05-15", action: "Invoice Cancelled", details: "Tenant lease terminated by mutual agreement" }
    ]
  }
];

// Active filters state
let activeFilters = {
  search: "",
  invoiceNumber: "",
  customer: "",
  property: "",
  agent: "",
  type: "",
  status: "",
  method: "",
  dateStart: "",
  dateEnd: "",
  minAmount: "",
  maxAmount: ""
};

// Chart instances
let revenueChart = null;
let statusChart = null;
let collectionChart = null;
let trendChart = null;

// Selected invoice for actions
let selectedInvoiceId = null;

// DOM Content Loading entry point
document.addEventListener("DOMContentLoaded", () => {
  initInvoicesApp();
});

function initInvoicesApp() {
  // Sync the tables, cards, and charts
  renderAll();

  // Register interactive DOM event listeners
  registerEventListeners();

  // Handle Dynamic greeting on invoice page
  updateDynamicGreeting();
}

function updateDynamicGreeting() {
  const greetingEl = document.getElementById("dynamic-greeting");
  if (greetingEl) {
    const hours = new Date().getHours();
    let greet = "Good morning";
    if (hours >= 12 && hours < 17) greet = "Good afternoon";
    else if (hours >= 17) greet = "Good evening";
    greetingEl.textContent = `${greet}, Sarah Jenkins`;
  }
  const dateEl = document.getElementById("dynamic-date");
  if (dateEl) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = new Date().toLocaleDateString('en-US', options);
  }
}

// Global Refresh handler
function refreshInvoices() {
  const tableContainer = document.getElementById("table-container-overlay");
  if (tableContainer) {
    tableContainer.classList.add("loading-active");
  }
  
  setTimeout(() => {
    if (tableContainer) tableContainer.classList.remove("loading-active");
    showToast("System Re-synchronised", "Successfully pulled latest records from billing servers.", "success");
    renderAll();
  }, 750);
}

// Reset all filters
function resetFilters() {
  document.getElementById("search-invoice-input").value = "";
  
  // Clear advanced filter inputs
  const fields = ["filter-id", "filter-customer", "filter-property", "filter-agent", "filter-type", "filter-status", "filter-method", "filter-date-start", "filter-date-end", "filter-amount-min", "filter-amount-max"];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  activeFilters = {
    search: "", invoiceNumber: "", customer: "", property: "", agent: "",
    type: "", status: "", method: "", dateStart: "", dateEnd: "", minAmount: "", maxAmount: ""
  };

  showToast("Filters Cleared", "Displaying all active records.", "info");
  renderAll();
}

function registerEventListeners() {
  // Global search typing listener with debounce/instant feel
  const searchInput = document.getElementById("search-invoice-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeFilters.search = e.target.value.trim().toLowerCase();
      renderAll();
    });
  }

  // Advanced filters apply button
  const applyFiltersBtn = document.getElementById("apply-filters-btn");
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener("click", () => {
      activeFilters.invoiceNumber = document.getElementById("filter-id").value.trim().toLowerCase();
      activeFilters.customer = document.getElementById("filter-customer").value.trim().toLowerCase();
      activeFilters.property = document.getElementById("filter-property").value.trim().toLowerCase();
      activeFilters.agent = document.getElementById("filter-agent").value.trim().toLowerCase();
      activeFilters.type = document.getElementById("filter-type").value;
      activeFilters.status = document.getElementById("filter-status").value;
      activeFilters.method = document.getElementById("filter-method").value;
      activeFilters.dateStart = document.getElementById("filter-date-start").value;
      activeFilters.dateEnd = document.getElementById("filter-date-end").value;
      activeFilters.minAmount = document.getElementById("filter-amount-min").value;
      activeFilters.maxAmount = document.getElementById("filter-amount-max").value;

      renderAll();
      showToast("Filters Applied", "Filtered billing results are displayed.", "success");
    });
  }

  // Quick reset inside advanced filters
  const resetFiltersBtn = document.getElementById("reset-filters-btn");
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", resetFilters);
  }

  // Create Invoice Save button
  const saveInvoiceForm = document.getElementById("create-invoice-form");
  if (saveInvoiceForm) {
    saveInvoiceForm.addEventListener("submit", (e) => {
      e.preventDefault();
      saveInvoice();
    });
  }

  // Listen to system theme change events to automatically redrawing charts
  window.addEventListener("themeChanged", () => {
    renderCharts(getFilteredInvoices());
  });
}

function getFilteredInvoices() {
  return invoicesData.filter(inv => {
    // 1. Global Search (matches ID, customer, property, or agent)
    if (activeFilters.search) {
      const q = activeFilters.search;
      const match = inv.id.toLowerCase().includes(q) ||
                    inv.customer.toLowerCase().includes(q) ||
                    inv.property.toLowerCase().includes(q) ||
                    inv.agent.toLowerCase().includes(q);
      if (!match) return false;
    }

    // 2. Exact Invoice ID
    if (activeFilters.invoiceNumber && !inv.id.toLowerCase().includes(activeFilters.invoiceNumber)) return false;

    // 3. Customer name
    if (activeFilters.customer && !inv.customer.toLowerCase().includes(activeFilters.customer)) return false;

    // 4. Property
    if (activeFilters.property && !inv.property.toLowerCase().includes(activeFilters.property)) return false;

    // 5. Agent
    if (activeFilters.agent && !inv.agent.toLowerCase().includes(activeFilters.agent)) return false;

    // 6. Invoice Type
    if (activeFilters.type && inv.type !== activeFilters.type) return false;

    // 7. Status
    if (activeFilters.status && inv.status !== activeFilters.status) return false;

    // 8. Payment Method
    if (activeFilters.method && inv.method !== activeFilters.method) return false;

    // 9. Dates
    if (activeFilters.dateStart && inv.issueDate < activeFilters.dateStart) return false;
    if (activeFilters.dateEnd && inv.issueDate > activeFilters.dateEnd) return false;

    // 10. Amounts
    const totalWithTax = inv.amount + inv.tax;
    if (activeFilters.minAmount && totalWithTax < parseFloat(activeFilters.minAmount)) return false;
    if (activeFilters.maxAmount && totalWithTax > parseFloat(activeFilters.maxAmount)) return false;

    return true;
  });
}

function renderAll() {
  const filtered = getFilteredInvoices();
  renderStatistics(filtered);
  renderInvoiceTable(filtered);
  renderCharts(filtered);
  renderOutstandingPayments(invoicesData);
  renderRecentPayments(invoicesData);
  renderPaymentHistoryTimeline(invoicesData);
}

function renderStatistics(filteredList) {
  // We compute stats based on whole data or filtered?
  // Let's compute based on whole data for accuracy, but we can also reflect current results dynamically.
  // To keep it extremely reactive, let's calculate based on whole dataset so KPIs stay solid,
  // and show a badge of "Showing X of Y" on the table.
  const dataset = invoicesData;

  const totalInvoices = dataset.length;
  const paidCount = dataset.filter(i => i.status === "Paid").length;
  const pendingCount = dataset.filter(i => i.status === "Pending").length;
  const overdueCount = dataset.filter(i => i.status === "Overdue").length;
  const draftCount = dataset.filter(i => i.status === "Draft").length;
  const cancelledCount = dataset.filter(i => i.status === "Cancelled").length;
  const refundedCount = dataset.filter(i => i.status === "Refunded").length;

  // Monthly Revenue sum (of paid amounts)
  const monthlyRevenue = dataset
    .filter(i => i.status === "Paid" || i.status === "Partially Paid")
    .reduce((sum, i) => sum + i.paidAmount, 0);

  // Outstanding Amount sum (of balances for Pending and Overdue)
  const outstandingAmount = dataset
    .filter(i => i.status === "Pending" || i.status === "Overdue" || i.status === "Partially Paid")
    .reduce((sum, i) => sum + i.balance, 0);

  // Update DOM values
  animateCounter("stat-total", totalInvoices);
  animateCounter("stat-paid", paidCount);
  animateCounter("stat-pending", pendingCount);
  animateCounter("stat-overdue", overdueCount);
  animateCounter("stat-draft", draftCount);
  animateCounter("stat-cancelled", cancelledCount);
  animateCounter("stat-refunded", refundedCount);

  // Currencies with formatting
  animateCurrencyCounter("stat-revenue", monthlyRevenue);
  animateCurrencyCounter("stat-outstanding", outstandingAmount);
}

function animateCounter(id, targetValue) {
  const el = document.getElementById(id);
  if (!el) return;
  
  let current = 0;
  const duration = 400; // ms
  const stepTime = 20;
  const steps = duration / stepTime;
  const increment = targetValue / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current >= targetValue) {
      el.textContent = targetValue;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, stepTime);
}

function animateCurrencyCounter(id, targetValue) {
  const el = document.getElementById(id);
  if (!el) return;

  let current = 0;
  const duration = 400;
  const stepTime = 20;
  const steps = duration / stepTime;
  const increment = targetValue / steps;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });

  const timer = setInterval(() => {
    current += increment;
    if (current >= targetValue) {
      el.textContent = formatter.format(targetValue);
      clearInterval(timer);
    } else {
      el.textContent = formatter.format(Math.floor(current));
    }
  }, stepTime);
}

function getStatusBadgeClass(status) {
  switch (status) {
    case "Paid": return "bg-success";
    case "Pending": return "bg-warning";
    case "Partially Paid": return "badge-partial-uh"; // Custom orange
    case "Overdue": return "bg-danger";
    case "Draft": return "badge-draft-uh"; // Custom grey
    case "Cancelled": return "badge-cancelled-uh";
    case "Refunded": return "badge-refunded-uh";
    default: return "bg-secondary";
  }
}

function getTypeBadgeIcon(type) {
  switch (type) {
    case "Property Sale": return "bi-house-heart";
    case "Rental": return "bi-house-door";
    case "Booking": return "bi-calendar-check";
    case "Commission": return "bi-percent";
    case "Maintenance": return "bi-tools";
    case "Utility": return "bi-lightning-charge";
    case "Security Deposit": return "bi-shield-check";
    case "Refund": return "bi-arrow-left-right";
    default: return "bi-file-earmark-text";
  }
}

function renderInvoiceTable(filteredInvoices) {
  const tbody = document.getElementById("invoice-table-body");
  const countBadge = document.getElementById("invoice-count-badge");
  const tableContainer = document.getElementById("table-container-overlay");

  if (countBadge) {
    countBadge.textContent = `Showing ${filteredInvoices.length} of ${invoicesData.length} Invoices`;
  }

  if (!tbody) return;

  // Render Empty State or Table Content
  if (filteredInvoices.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="13" class="text-center py-5">
          <div class="empty-state-container" data-aos="zoom-in">
            <div class="empty-state-icon text-muted mb-3">
              <i class="bi bi-receipt-cutoff" style="font-size: 3.5rem; opacity: 0.5;"></i>
            </div>
            <h5 class="fw-semibold font-title">No Invoices Found</h5>
            <p class="text-muted text-center max-w-md mx-auto" style="font-size: 0.85rem;">
              We couldn't find any billing records matching your selected search keywords or advanced filter configurations.
            </p>
            <button class="btn btn-secondary btn-sm mt-2 rounded-3" onclick="resetFilters()">
              <i class="bi bi-x-circle me-1"></i> Clear Filters
            </button>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  tbody.innerHTML = filteredInvoices.map((inv, index) => {
    const total = inv.amount + inv.tax;
    const badgeClass = getStatusBadgeClass(inv.status);
    const typeIcon = getTypeBadgeIcon(inv.type);
    
    return `
      <tr class="align-middle border-bottom border-light-subtle clickable-row" data-aos="fade-up" data-aos-delay="${index * 20}">
        <td>
          <span class="fw-bold text-primary font-mono">${inv.id}</span>
        </td>
        <td>
          <div class="d-flex flex-column">
            <span class="fw-semibold text-main font-title" style="font-size: 0.85rem;">${inv.customer}</span>
            <span class="text-muted" style="font-size: 0.725rem;">${inv.email}</span>
          </div>
        </td>
        <td>
          <div class="text-truncate" style="max-width: 160px; font-size: 0.825rem;" title="${inv.property}">
            <i class="bi bi-building me-1 text-muted"></i>${inv.property}
          </div>
        </td>
        <td style="font-size: 0.825rem;">${inv.agent}</td>
        <td class="font-mono text-muted" style="font-size: 0.75rem;">${inv.issueDate}</td>
        <td class="font-mono text-muted" style="font-size: 0.75rem;">${inv.dueDate}</td>
        <td>
          <span class="badge bg-light text-dark d-inline-flex align-items-center gap-1" style="font-size: 0.7rem; border: 1px solid var(--uh-border-color);">
            <i class="bi ${typeIcon}"></i> ${inv.type}
          </span>
        </td>
        <td class="fw-semibold text-main font-mono text-end" style="font-size: 0.825rem;">${formatter.format(inv.amount)}</td>
        <td class="text-muted font-mono text-end" style="font-size: 0.75rem;">${formatter.format(inv.tax)}</td>
        <td class="fw-medium text-success font-mono text-end" style="font-size: 0.825rem;">${formatter.format(inv.paidAmount)}</td>
        <td class="fw-bold ${inv.balance > 0 ? 'text-danger' : 'text-muted'} font-mono text-end" style="font-size: 0.825rem;">${formatter.format(inv.balance)}</td>
        <td>
          <span class="badge ${badgeClass}">${inv.status}</span>
        </td>
        <td>
          <div class="dropdown">
            <button class="btn btn-sm btn-icon-only border-0 text-muted" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-three-dots-vertical"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-premium shadow-lg">
              <li>
                <button class="dropdown-item d-flex align-items-center gap-2" onclick="previewInvoice('${inv.id}')">
                  <i class="bi bi-eye text-primary"></i> View Details
                </button>
              </li>
              <li>
                <button class="dropdown-item d-flex align-items-center gap-2" onclick="editInvoice('${inv.id}')">
                  <i class="bi bi-pencil text-warning"></i> Edit Invoice
                </button>
              </li>
              <li>
                <button class="dropdown-item d-flex align-items-center gap-2" onclick="duplicateInvoice('${inv.id}')">
                  <i class="bi bi-files text-info"></i> Duplicate
                </button>
              </li>
              <li>
                <button class="dropdown-item d-flex align-items-center gap-2" onclick="viewPaymentHistory('${inv.id}')">
                  <i class="bi bi-clock-history text-secondary"></i> Payment Timeline
                </button>
              </li>
              <li>
                <button class="dropdown-item d-flex align-items-center gap-2" onclick="emailInvoice('${inv.id}')">
                  <i class="bi bi-envelope text-success"></i> Email Invoice
                </button>
              </li>
              <li>
                <button class="dropdown-item d-flex align-items-center gap-2" onclick="triggerDownload('${inv.id}')">
                  <i class="bi bi-file-earmark-pdf text-danger"></i> Download PDF
                </button>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <button class="dropdown-item text-danger d-flex align-items-center gap-2" onclick="confirmDelete('${inv.id}')">
                  <i class="bi bi-trash"></i> Delete Record
                </button>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function renderOutstandingPayments(dataset) {
  const container = document.getElementById("outstanding-payments-container");
  if (!container) return;

  const out = dataset.filter(i => (i.status === "Pending" || i.status === "Overdue" || i.status === "Partially Paid") && i.balance > 0);
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  if (out.length === 0) {
    container.innerHTML = `
      <div class="text-center py-4 text-muted" style="font-size: 0.8rem;">
        <i class="bi bi-check-circle-fill text-success d-block mb-1 fs-4"></i>
        No outstanding payments due.
      </div>
    `;
    return;
  }

  container.innerHTML = out.slice(0, 3).map(inv => {
    const isOverdue = inv.status === "Overdue";
    return `
      <div class="outstanding-item d-flex align-items-center justify-content-between p-2 mb-2 rounded-3 border border-light-subtle bg-body-tertiary">
        <div class="d-flex align-items-center gap-2">
          <div class="stat-icon-wrapper ${isOverdue ? 'bg-danger-subtle text-danger' : 'bg-warning-subtle text-warning'} d-flex align-items-center justify-content-center rounded-3" style="width: 32px; height: 32px;">
            <i class="bi bi-exclamation-triangle"></i>
          </div>
          <div>
            <h6 class="mb-0 fw-bold font-title text-main" style="font-size: 0.775rem;">${inv.customer}</h6>
            <span class="text-muted font-mono" style="font-size: 0.675rem;">Due: ${inv.dueDate} | ${inv.id}</span>
          </div>
        </div>
        <div class="text-end">
          <span class="d-block fw-bold font-mono text-danger" style="font-size: 0.8rem;">${formatter.format(inv.balance)}</span>
          <button class="btn btn-sm btn-link p-0 text-primary fw-semibold" style="font-size: 0.7rem;" onclick="previewInvoice('${inv.id}')">Collect</button>
        </div>
      </div>
    `;
  }).join("");
}

function renderRecentPayments(dataset) {
  const container = document.getElementById("recent-payments-container");
  if (!container) return;

  const paids = dataset.filter(i => (i.status === "Paid" || i.status === "Partially Paid") && i.paidAmount > 0);
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  if (paids.length === 0) {
    container.innerHTML = `
      <div class="text-center py-4 text-muted" style="font-size: 0.8rem;">
        No recent payments logged.
      </div>
    `;
    return;
  }

  container.innerHTML = paids.slice(0, 3).map(inv => {
    return `
      <div class="recent-payment-item d-flex align-items-center justify-content-between p-2 mb-2 rounded-3 border border-light-subtle bg-body-tertiary">
        <div class="d-flex align-items-center gap-2">
          <div class="stat-icon-wrapper bg-success-subtle text-success d-flex align-items-center justify-content-center rounded-3" style="width: 32px; height: 32px;">
            <i class="bi bi-wallet2"></i>
          </div>
          <div>
            <h6 class="mb-0 fw-bold font-title text-main" style="font-size: 0.775rem;">${inv.customer}</h6>
            <span class="text-muted font-mono" style="font-size: 0.675rem;">${inv.method} | ${inv.id}</span>
          </div>
        </div>
        <div class="text-end">
          <span class="d-block fw-bold font-mono text-success" style="font-size: 0.8rem;">+${formatter.format(inv.paidAmount)}</span>
          <span class="text-muted font-mono" style="font-size: 0.65rem;">Cleared</span>
        </div>
      </div>
    `;
  }).join("");
}

function renderPaymentHistoryTimeline(dataset) {
  const container = document.getElementById("payment-timeline-container");
  if (!container) return;

  // Assemble all history events from all invoices
  let events = [];
  dataset.forEach(inv => {
    if (inv.history) {
      inv.history.forEach(hist => {
        events.push({
          id: inv.id,
          customer: inv.customer,
          ...hist
        });
      });
    }
  });

  // Sort events by date descending
  events.sort((a, b) => b.date.localeCompare(a.date));

  if (events.length === 0) {
    container.innerHTML = `<p class="text-center text-muted" style="font-size: 0.8rem;">No payment timeline logs available.</p>`;
    return;
  }

  container.innerHTML = events.slice(0, 4).map(ev => {
    return `
      <div class="timeline-item d-flex gap-2 pb-3 position-relative">
        <div class="timeline-line"></div>
        <div class="timeline-dot bg-primary text-white d-flex align-items-center justify-content-center" style="width: 20px; height: 20px; border-radius: 50%; font-size: 0.55rem; z-index: 2;">
          <i class="bi bi-check-lg"></i>
        </div>
        <div style="font-size: 0.75rem; flex: 1;">
          <div class="d-flex justify-content-between">
            <strong class="text-main">${ev.action}</strong>
            <span class="text-muted font-mono text-end" style="font-size: 0.65rem;">${ev.date}</span>
          </div>
          <span class="text-muted d-block" style="font-size: 0.7rem;">${ev.customer} (${ev.id})</span>
          <span class="text-muted d-block" style="font-size: 0.675rem; font-style: italic;">${ev.details}</span>
        </div>
      </div>
    `;
  }).join("");
}

// Draw/Redraw Charts dynamically with modern styles
function renderCharts(filtered) {
  const isDark = document.documentElement.getAttribute("data-bs-theme") !== "light";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)";
  const textColor = isDark ? "#A0AEC0" : "#4A5568";

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: textColor, font: { family: "Inter", size: 10 } }
      }
    },
    scales: {
      x: { grid: { color: gridColor }, ticks: { color: textColor, font: { size: 9 } } },
      y: { grid: { color: gridColor }, ticks: { color: textColor, font: { size: 9 } } }
    }
  };

  // --- 1. Monthly Revenue Chart (Bar) ---
  const revenueCtx = document.getElementById("revenueChart");
  if (revenueCtx) {
    if (revenueChart) revenueChart.destroy();

    // Map month totals
    const months = ["May", "Jun", "Jul"];
    const sums = [0, 0, 0]; // Index maps to May, Jun, Jul

    filtered.forEach(i => {
      if (i.status === "Paid" || i.status === "Partially Paid") {
        const month = i.issueDate.split("-")[1];
        if (month === "05") sums[0] += i.paidAmount;
        else if (month === "06") sums[1] += i.paidAmount;
        else if (month === "07") sums[2] += i.paidAmount;
      }
    });

    revenueChart = new Chart(revenueCtx, {
      type: 'bar',
      data: {
        labels: months,
        datasets: [{
          label: 'Collected Revenue ($)',
          data: sums,
          backgroundColor: 'rgba(59, 130, 246, 0.75)',
          borderColor: 'rgb(59, 130, 246)',
          borderWidth: 1.5,
          borderRadius: 6
        }]
      },
      options: chartOptions
    });
  }

  // --- 2. Collection Rate (Doughnut) ---
  const collectionCtx = document.getElementById("collectionChart");
  if (collectionCtx) {
    if (collectionChart) collectionChart.destroy();

    const totalPaid = filtered.reduce((sum, i) => sum + i.paidAmount, 0);
    const totalOutstanding = filtered.reduce((sum, i) => sum + i.balance, 0);

    collectionChart = new Chart(collectionCtx, {
      type: 'doughnut',
      data: {
        labels: ['Collected', 'Outstanding'],
        datasets: [{
          data: [totalPaid, totalOutstanding],
          backgroundColor: ['#10B981', '#EF4444'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { color: textColor, font: { size: 9 } } }
        }
      }
    });
  }

  // --- 3. Outstanding Amount (Line) ---
  const trendCtx = document.getElementById("trendChart");
  if (trendCtx) {
    if (trendChart) trendChart.destroy();

    const months = ["May", "Jun", "Jul"];
    const outstandingSums = [0, 0, 0];

    filtered.forEach(i => {
      const month = i.issueDate.split("-")[1];
      let mIdx = -1;
      if (month === "05") mIdx = 0;
      else if (month === "06") mIdx = 1;
      else if (month === "07") mIdx = 2;

      if (mIdx !== -1 && (i.status === "Pending" || i.status === "Overdue" || i.status === "Partially Paid")) {
        outstandingSums[mIdx] += i.balance;
      }
    });

    trendChart = new Chart(trendCtx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [{
          label: 'Outstanding ($)',
          data: outstandingSums,
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          borderColor: '#EF4444',
          borderWidth: 2.5,
          tension: 0.35,
          fill: true
        }]
      },
      options: chartOptions
    });
  }

  // --- 4. Payment Status Distribution (Pie) ---
  const statusCtx = document.getElementById("statusChart");
  if (statusCtx) {
    if (statusChart) statusChart.destroy();

    const statusCounts = {};
    filtered.forEach(i => {
      statusCounts[i.status] = (statusCounts[i.status] || 0) + 1;
    });

    const labels = Object.keys(statusCounts);
    const data = Object.values(statusCounts);
    const colors = labels.map(lbl => {
      if (lbl === "Paid") return '#10B981';
      if (lbl === "Pending") return '#F59E0B';
      if (lbl === "Overdue") return '#EF4444';
      if (lbl === "Draft") return '#94A3B8';
      if (lbl === "Cancelled") return '#64748B';
      if (lbl === "Refunded") return '#3B82F6';
      return '#8B5CF6';
    });

    statusChart = new Chart(statusCtx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: colors,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { color: textColor, font: { size: 9 } } }
        }
      }
    });
  }
}

// Modal Form: Show Create Invoice
function openCreateInvoiceModal() {
  selectedInvoiceId = null;
  document.getElementById("create-invoice-modal-title").textContent = "Create Premium Invoice";
  document.getElementById("create-invoice-form").reset();
  
  // Set default issue date and due date
  const today = new Date().toISOString().split('T')[0];
  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  const nextMonthStr = nextMonth.toISOString().split('T')[0];

  document.getElementById("inv-issue-date").value = today;
  document.getElementById("inv-due-date").value = nextMonthStr;

  const modal = new bootstrap.Modal(document.getElementById("createInvoiceModal"));
  modal.show();
}

// Modal Form: Edit Invoice loader
function editInvoice(id) {
  const inv = invoicesData.find(i => i.id === id);
  if (!inv) return;

  selectedInvoiceId = id;
  document.getElementById("create-invoice-modal-title").textContent = `Edit Invoice ${id}`;
  
  // Map value to form fields
  document.getElementById("inv-customer").value = inv.customer;
  document.getElementById("inv-email").value = inv.email;
  document.getElementById("inv-property").value = inv.property;
  document.getElementById("inv-agent").value = inv.agent;
  document.getElementById("inv-issue-date").value = inv.issueDate;
  document.getElementById("inv-due-date").value = inv.dueDate;
  document.getElementById("inv-type").value = inv.type;
  document.getElementById("inv-amount").value = inv.amount;
  document.getElementById("inv-tax").value = inv.tax;
  document.getElementById("inv-paid-amount").value = inv.paidAmount;
  document.getElementById("inv-status").value = inv.status;
  document.getElementById("inv-method").value = inv.method;

  const modal = new bootstrap.Modal(document.getElementById("createInvoiceModal"));
  modal.show();
}

// Save or Update Invoice state handler
function saveInvoice() {
  const customer = document.getElementById("inv-customer").value.trim();
  const email = document.getElementById("inv-email").value.trim();
  const property = document.getElementById("inv-property").value.trim();
  const agent = document.getElementById("inv-agent").value;
  const issueDate = document.getElementById("inv-issue-date").value;
  const dueDate = document.getElementById("inv-due-date").value;
  const type = document.getElementById("inv-type").value;
  const amount = parseFloat(document.getElementById("inv-amount").value || "0");
  const tax = parseFloat(document.getElementById("inv-tax").value || "0");
  const paidAmount = parseFloat(document.getElementById("inv-paid-amount").value || "0");
  const status = document.getElementById("inv-status").value;
  const method = document.getElementById("inv-method").value;

  const total = amount + tax;
  const balance = Math.max(0, total - paidAmount);

  if (selectedInvoiceId) {
    // Mode: Update Existing
    const idx = invoicesData.findIndex(i => i.id === selectedInvoiceId);
    if (idx !== -1) {
      invoicesData[idx] = {
        ...invoicesData[idx],
        customer, email, property, agent, issueDate, dueDate, type,
        amount, tax, paidAmount, balance, status, method
      };
      
      // Append update history log
      invoicesData[idx].history.push({
        date: new Date().toISOString().split('T')[0],
        action: "Invoice Amended",
        details: `Adjusted totals and status changed to ${status}.`
      });

      showToast("Invoice Updated", `Invoice ${selectedInvoiceId} updated successfully.`, "success");
    }
  } else {
    // Mode: Create New
    const newId = `INV-2026-0${invoicesData.length + 1}`;
    const newInvoice = {
      id: newId,
      customer, email, property, agent, issueDate, dueDate, type,
      amount, tax, paidAmount, balance, status, method,
      history: [
        { date: issueDate, action: "Invoice Drafted", details: "Initial draft generated in system" }
      ]
    };

    if (status !== "Draft") {
      newInvoice.history.push({
        date: new Date().toISOString().split('T')[0],
        action: "Invoice Activated",
        details: `Status set to ${status}. Billed to ${customer}.`
      });
    }

    invoicesData.unshift(newInvoice);
    showToast("Invoice Created", `Invoice ${newId} drafted successfully.`, "success");
  }

  // Dismiss modal
  const modalEl = document.getElementById("createInvoiceModal");
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();

  renderAll();
}

// Duplicate invoice quick action
function duplicateInvoice(id) {
  const inv = invoicesData.find(i => i.id === id);
  if (!inv) return;

  const newId = `INV-2026-0${invoicesData.length + 1}`;
  const duplicated = {
    ...JSON.parse(JSON.stringify(inv)),
    id: newId,
    issueDate: new Date().toISOString().split('T')[0],
    history: [
      { date: new Date().toISOString().split('T')[0], action: "Duplicated Record", details: `Cloned from ${id}` }
    ]
  };

  invoicesData.unshift(duplicated);
  showToast("Record Duplicated", `Cloned ${id} to new invoice ${newId}.`, "success");
  renderAll();
}

// Preview Modal popup
function previewInvoice(id) {
  const inv = invoicesData.find(i => i.id === id);
  if (!inv) return;

  selectedInvoiceId = id;

  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const total = inv.amount + inv.tax;

  // Set Preview Modal Elements
  document.getElementById("prev-title-id").textContent = inv.id;
  document.getElementById("prev-status").className = `badge ${getStatusBadgeClass(inv.status)}`;
  document.getElementById("prev-status").textContent = inv.status;
  document.getElementById("prev-customer-name").textContent = inv.customer;
  document.getElementById("prev-customer-email").textContent = inv.email;
  document.getElementById("prev-property").textContent = inv.property;
  document.getElementById("prev-agent").textContent = inv.agent;
  document.getElementById("prev-issue-date").textContent = inv.issueDate;
  document.getElementById("prev-due-date").textContent = inv.dueDate;
  document.getElementById("prev-method").textContent = inv.method;

  // Itemized table row
  const rowHtml = `
    <tr>
      <td>
        <span class="fw-semibold text-main">${inv.type} Professional Fees</span>
        <p class="text-muted mb-0" style="font-size: 0.7rem;">Contractual real estate services rendered for ${inv.property}.</p>
      </td>
      <td class="text-end font-mono">${formatter.format(inv.amount)}</td>
      <td class="text-end font-mono">${formatter.format(inv.tax)}</td>
      <td class="text-end fw-bold font-mono">${formatter.format(total)}</td>
    </tr>
  `;
  document.getElementById("prev-items-tbody").innerHTML = rowHtml;

  // Summaries
  document.getElementById("prev-subtotal").textContent = formatter.format(inv.amount);
  document.getElementById("prev-tax").textContent = formatter.format(inv.tax);
  document.getElementById("prev-total").textContent = formatter.format(total);
  document.getElementById("prev-paid").textContent = formatter.format(inv.paidAmount);
  document.getElementById("prev-balance").textContent = formatter.format(inv.balance);

  // Show / Hide Pay Now button based on status
  const payBtn = document.getElementById("prev-pay-btn");
  if (payBtn) {
    if (inv.status === "Pending" || inv.status === "Overdue" || inv.status === "Partially Paid") {
      payBtn.classList.remove("d-none");
    } else {
      payBtn.classList.add("d-none");
    }
  }

  const modal = new bootstrap.Modal(document.getElementById("invoicePreviewModal"));
  modal.show();
}

// Timeline Modal popup
function viewPaymentHistory(id) {
  const inv = invoicesData.find(i => i.id === id);
  if (!inv) return;

  selectedInvoiceId = id;
  document.getElementById("hist-modal-title").textContent = `Payment History & Timeline: ${id}`;

  const container = document.getElementById("modal-payment-history-timeline");
  if (!container) return;

  if (!inv.history || inv.history.length === 0) {
    container.innerHTML = `<p class="text-center text-muted">No audit trail available for this invoice.</p>`;
  } else {
    container.innerHTML = inv.history.map(ev => {
      return `
        <div class="timeline-item d-flex gap-3 pb-3 position-relative">
          <div class="timeline-line" style="top: 20px;"></div>
          <div class="timeline-dot bg-success text-white d-flex align-items-center justify-content-center" style="width: 24px; height: 24px; border-radius: 50%; font-size: 0.65rem; z-index: 2;">
            <i class="bi bi-clock"></i>
          </div>
          <div style="font-size: 0.8rem; flex: 1;">
            <div class="d-flex justify-content-between">
              <strong class="text-main" style="font-size: 0.85rem;">${ev.action}</strong>
              <span class="text-muted font-mono" style="font-size: 0.725rem;">${ev.date}</span>
            </div>
            <p class="text-muted mb-0" style="font-size: 0.775rem;">${ev.details}</p>
          </div>
        </div>
      `;
    }).join("");
  }

  const modal = new bootstrap.Modal(document.getElementById("paymentHistoryModal"));
  modal.show();
}

// Delete trigger
function confirmDelete(id) {
  selectedInvoiceId = id;
  document.getElementById("delete-inv-id-span").textContent = id;
  const modal = new bootstrap.Modal(document.getElementById("deleteConfirmModal"));
  modal.show();
}

function executeDelete() {
  if (!selectedInvoiceId) return;

  const idx = invoicesData.findIndex(i => i.id === selectedInvoiceId);
  if (idx !== -1) {
    invoicesData.splice(idx, 1);
    showToast("Invoice Deleted", `Record ${selectedInvoiceId} purged from the system.`, "danger");
    renderAll();
  }

  const modalEl = document.getElementById("deleteConfirmModal");
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();
}

// Payment trigger inside preview
function processPayment() {
  if (!selectedInvoiceId) return;

  const idx = invoicesData.findIndex(i => i.id === selectedInvoiceId);
  if (idx !== -1) {
    const inv = invoicesData[idx];
    const total = inv.amount + inv.tax;
    
    inv.paidAmount = total;
    inv.balance = 0;
    inv.status = "Paid";
    inv.history.push({
      date: new Date().toISOString().split('T')[0],
      action: "Instant Digital Payment",
      details: "Cleared via secure client portal."
    });

    showToast("Payment Successful", `Cleared balance of ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)} for ${inv.id}!`, "success");

    // Re-render and re-preview
    renderAll();

    const previewModalEl = document.getElementById("invoicePreviewModal");
    const previewModal = bootstrap.Modal.getInstance(previewModalEl);
    if (previewModal) previewModal.hide();

    setTimeout(() => {
      previewInvoice(selectedInvoiceId);
    }, 350);
  }
}

// Print invoice mockup directly from UI
function printInvoice() {
  const printContent = document.getElementById("invoice-print-area").innerHTML;
  const originalContent = document.body.innerHTML;

  // We open window.print() but to be iframe-safe and non-disruptive, we'll open a clean window and trigger print,
  // or apply print classes.
  // Standard CSS-based printing works better on frames, but a custom printable element wrapper is cleanest!
  window.print();
}

// Simulation utilities: PDF download & email invoice
function triggerDownload(id) {
  showToast("Compiling PDF Report...", "Generating cryptographic secure digital copy...", "info");
  setTimeout(() => {
    showToast("PDF Downloaded", `Saved report_${id}.pdf to your storage.`, "success");
  }, 1200);
}

function emailInvoice(id) {
  const inv = invoicesData.find(i => i.id === id);
  if (!inv) return;

  const recipient = prompt(`Send Invoice ${id} to customer email?`, inv.email);
  if (recipient) {
    showToast("Queuing Mail Servers", `Transmitting invoice envelope to ${recipient}...`, "info");
    setTimeout(() => {
      showToast("Email Transmitted", `Invoice ${id} delivered successfully to ${recipient}.`, "success");
    }, 1500);
  }
}

function triggerBulkExport(format) {
  showToast(`Initiating Export`, `Packing invoice tables into secure ${format} structures...`, "info");
  setTimeout(() => {
    showToast("Export Completed", `Successfully exported ${invoicesData.length} entries to UrbanHub_${format.toUpperCase()}_Report.${format.toLowerCase()}`, "success");
  }, 1000);
}

// Modern Toast notification system
function showToast(title, body, type = "success") {
  const container = document.getElementById("toast-container-uh");
  if (!container) return;

  const toastId = `toast-${Date.now()}`;
  let bgClass = "bg-primary";
  let icon = "bi-info-circle";

  if (type === "success") {
    bgClass = "bg-success";
    icon = "bi-check-circle";
  } else if (type === "danger") {
    bgClass = "bg-danger";
    icon = "bi-exclamation-octagon";
  } else if (type === "warning") {
    bgClass = "bg-warning text-dark";
    icon = "bi-exclamation-triangle";
  }

  const toastHtml = `
    <div id="${toastId}" class="toast align-items-center text-white ${bgClass} border-0 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="4000">
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2">
          <i class="bi ${icon} fs-5"></i>
          <div>
            <strong class="d-block text-white" style="font-size: 0.85rem;">${title}</strong>
            <span style="font-size: 0.775rem; opacity: 0.9;">${body}</span>
          </div>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", toastHtml);
  
  const el = document.getElementById(toastId);
  const toast = new bootstrap.Toast(el);
  toast.show();

  // Clean up DOM after hide
  el.addEventListener("hidden.bs.toast", () => {
    el.remove();
  });
}
