/* Home page – fills the data-driven sections */
(function () {
  // Statistics strip
  document.getElementById('stats-grid').innerHTML = UNIVERSITY_STATS.map(function (s) {
    return '<div class="stat"><p class="stat-value">' + s.value + '</p><p class="stat-label">' + s.label + '</p></div>';
  }).join('');

  // Featured programs (first 3 flagged as featured)
  const featuredPrograms = PROGRAMS_DATA.filter(function (p) { return p.featured; }).slice(0, 3);
  document.getElementById('featured-programs').innerHTML = featuredPrograms.map(renderProgramCard).join('');

  // Latest news (first 3)
  document.getElementById('featured-news').innerHTML = NEWS_DATA.slice(0, 3).map(renderNewsCard).join('');

  // Upcoming events (first 2)
  document.getElementById('upcoming-events').innerHTML = EVENTS_DATA.slice(0, 2).map(renderEventCard).join('');
})();
