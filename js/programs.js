/* Programs page – search + faculty / level / mode filters */
(function () {
  const FACULTIES = [
    'All',
    'Computing & Data Science',
    'Business & Management',
    'Engineering & Technology',
    'Health & Medical Sciences',
    'Arts & Humanities',
    'Environmental Sciences'
  ];

  const state = {
    search: new URLSearchParams(window.location.search).get('search') || '',
    faculty: 'All',
    level: 'All',
    mode: 'All'
  };

  const searchInput = document.getElementById('program-search');
  const clearSearchBtn = document.getElementById('program-search-clear');
  const levelSelect = document.getElementById('filter-level');
  const modeSelect = document.getElementById('filter-mode');
  const tabs = document.getElementById('faculty-tabs');
  const grid = document.getElementById('programs-grid');
  const empty = document.getElementById('programs-empty');
  const count = document.getElementById('results-count');
  const resetBtn = document.getElementById('reset-filters');

  searchInput.value = state.search;

  // Faculty tab buttons
  tabs.innerHTML = FACULTIES.map(function (f) {
    return '<button type="button" class="filter-tab" data-faculty="' + escapeHtml(f) + '">' + escapeHtml(f) + '</button>';
  }).join('');

  function isFiltered() {
    return state.search || state.faculty !== 'All' || state.level !== 'All' || state.mode !== 'All';
  }

  function render() {
    const q = state.search.toLowerCase();
    const filtered = PROGRAMS_DATA.filter(function (p) {
      const matchesSearch = p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.faculty.toLowerCase().includes(q);
      const matchesFaculty = state.faculty === 'All' || p.faculty === state.faculty;
      const matchesLevel = state.level === 'All' || p.level === state.level;
      const matchesMode = state.mode === 'All' || p.deliveryMode === state.mode;
      return matchesSearch && matchesFaculty && matchesLevel && matchesMode;
    });

    tabs.querySelectorAll('.filter-tab').forEach(function (b) {
      b.classList.toggle('active', b.dataset.faculty === state.faculty);
    });
    clearSearchBtn.classList.toggle('hidden', !state.search);
    resetBtn.classList.toggle('hidden', !isFiltered());
    count.textContent = filtered.length;

    if (!filtered.length) {
      grid.innerHTML = '';
      grid.classList.add('hidden');
      empty.classList.remove('hidden');
    } else {
      empty.classList.add('hidden');
      grid.classList.remove('hidden');
      grid.innerHTML = filtered.map(renderProgramCard).join('');
    }
  }

  function resetAll() {
    state.search = '';
    state.faculty = 'All';
    state.level = 'All';
    state.mode = 'All';
    searchInput.value = '';
    levelSelect.value = 'All';
    modeSelect.value = 'All';
    render();
  }

  searchInput.addEventListener('input', function () { state.search = searchInput.value; render(); });
  clearSearchBtn.addEventListener('click', function () { state.search = ''; searchInput.value = ''; render(); searchInput.focus(); });
  levelSelect.addEventListener('change', function () { state.level = levelSelect.value; render(); });
  modeSelect.addEventListener('change', function () { state.mode = modeSelect.value; render(); });
  tabs.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-faculty]');
    if (btn) { state.faculty = btn.dataset.faculty; render(); }
  });
  resetBtn.addEventListener('click', resetAll);
  document.getElementById('clear-filters').addEventListener('click', resetAll);

  render();
})();
