/* Admissions page – tuition calculator, scholarships, FAQ accordion */
(function () {
  /* ---------- Tuition calculator ---------------------------------------- */
  const calc = { degree: 'Undergraduate', residency: 'Out-of-State', housing: 'Shared', meal: 'Unlimited' };
  const BOOKS_AND_FEES = 1400;

  function tuitionBase() {
    let base = 18000;
    if (calc.degree === 'Graduate') base = 22000;
    if (calc.degree === 'Doctorate') base = 35000;
    if (calc.degree === 'Executive') base = 28000;
    if (calc.residency === 'In-State') base *= 0.65;
    if (calc.residency === 'International') base *= 1.15;
    return Math.round(base);
  }
  function housingCost() {
    if (calc.housing === 'Studio') return 8400;   // per year (2 semesters)
    if (calc.housing === 'Shared') return 5700;
    return 0;
  }
  function mealCost() {
    if (calc.meal === 'Unlimited') return 3800;
    if (calc.meal === 'Partial') return 2200;
    return 0;
  }

  function updateCalc() {
    const tuition = tuitionBase();
    const housing = housingCost();
    const meal = mealCost();
    document.getElementById('calc-degree-label').textContent = calc.degree;
    document.getElementById('calc-housing-label').textContent = calc.housing;
    document.getElementById('calc-meal-label').textContent = calc.meal;
    document.getElementById('calc-tuition').textContent = formatMoney(tuition);
    document.getElementById('calc-housing').textContent = formatMoney(housing);
    document.getElementById('calc-meal').textContent = formatMoney(meal);
    document.getElementById('calc-books').textContent = formatMoney(BOOKS_AND_FEES);
    document.getElementById('calc-total').textContent = formatMoney(tuition + housing + meal + BOOKS_AND_FEES);
  }

  document.querySelectorAll('[data-calc]').forEach(function (group) {
    group.addEventListener('click', function (e) {
      const btn = e.target.closest('.option-btn');
      if (!btn) return;
      calc[group.dataset.calc] = btn.dataset.value;
      group.querySelectorAll('.option-btn').forEach(function (b) { b.classList.toggle('active', b === btn); });
      updateCalc();
    });
  });
  updateCalc();

  /* ---------- Scholarships ---------------------------------------------- */
  document.getElementById('scholarships-grid').innerHTML = SCHOLARSHIPS_DATA.map(function (s) {
    return '<div class="scholarship-card">' +
      '<div class="top">' +
        '<span class="pill pill-amber">' + escapeHtml(s.category) + '</span>' +
        '<span class="deadline">Deadline: ' + escapeHtml(s.deadline) + '</span>' +
      '</div>' +
      '<h3>' + escapeHtml(s.name) + '</h3>' +
      '<p class="amount">' + escapeHtml(s.amount) + '</p>' +
      '<p class="elig"><strong>Eligibility:</strong> ' + escapeHtml(s.eligibility) + '</p>' +
    '</div>';
  }).join('');

  /* ---------- FAQ accordion --------------------------------------------- */
  const faqList = document.getElementById('faq-list');
  const faqFilters = document.getElementById('faq-filters');
  let faqCategory = 'All';
  let openIndex = 0;

  function renderFaq() {
    const items = FAQ_DATA.filter(function (f) { return faqCategory === 'All' || f.category === faqCategory; });
    faqList.innerHTML = items.map(function (f, i) {
      const open = openIndex === i;
      return '<div class="faq-item' + (open ? ' open' : '') + '" data-index="' + i + '">' +
        '<button type="button" class="faq-q" aria-expanded="' + open + '">' +
          '<span>' + escapeHtml(f.question) + '</span>' +
          icon(open ? 'chevron-up' : 'chevron-down', 'ic ic-5') +
        '</button>' +
        '<div class="faq-a">' + escapeHtml(f.answer) + '</div>' +
      '</div>';
    }).join('');
  }

  faqList.addEventListener('click', function (e) {
    const q = e.target.closest('.faq-q');
    if (!q) return;
    const idx = Number(q.parentElement.dataset.index);
    openIndex = openIndex === idx ? null : idx;
    renderFaq();
  });

  faqFilters.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-category]');
    if (!btn) return;
    faqCategory = btn.dataset.category;
    openIndex = 0;
    faqFilters.querySelectorAll('.filter-tab').forEach(function (b) { b.classList.toggle('active', b === btn); });
    renderFaq();
  });

  renderFaq();
})();
