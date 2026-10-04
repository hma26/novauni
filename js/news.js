/* News page – category filter + search, plus the full events list */
(function () {
  const categories = document.getElementById('news-categories');
  const searchInput = document.getElementById('news-search');
  const grid = document.getElementById('news-grid');
  const empty = document.getElementById('news-empty');
  let category = 'All';

  function render() {
    const q = searchInput.value.toLowerCase();
    const filtered = NEWS_DATA.filter(function (n) {
      const matchesCategory = category === 'All' || n.category === category;
      const matchesSearch = n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
    grid.innerHTML = filtered.map(renderNewsCard).join('');
    empty.classList.toggle('hidden', filtered.length > 0);
  }

  categories.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-category]');
    if (!btn) return;
    category = btn.dataset.category;
    categories.querySelectorAll('.filter-tab').forEach(function (b) { b.classList.toggle('active', b === btn); });
    render();
  });
  searchInput.addEventListener('input', render);

  render();
  document.getElementById('events-list').innerHTML = EVENTS_DATA.map(renderEventCard).join('');
})();
