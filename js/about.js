/* About page – timeline + leadership cards */
(function () {
  document.getElementById('timeline').innerHTML = TIMELINE_MILESTONES.map(function (m) {
    return '<div class="timeline-item">' +
      '<div class="timeline-dot"></div>' +
      '<div class="timeline-year">' + m.year + '</div>' +
      '<div class="timeline-card">' +
        '<h3>' + escapeHtml(m.title) + '</h3>' +
        '<p>' + escapeHtml(m.desc) + '</p>' +
      '</div>' +
    '</div>';
  }).join('');

  document.getElementById('leadership-grid').innerHTML = LEADERSHIP_DATA.map(function (m) {
    return '<div class="leader-card">' +
      '<div class="photo"><img src="' + m.image + '" alt="' + escapeHtml(m.name) + '" referrerpolicy="no-referrer" loading="lazy"></div>' +
      '<div class="body">' +
        '<span class="dept-tag">' + escapeHtml(m.department) + '</span>' +
        '<h3>' + escapeHtml(m.name) + '</h3>' +
        '<p class="role">' + escapeHtml(m.role) + '</p>' +
        '<p class="bio line-clamp-3">' + escapeHtml(m.bio) + '</p>' +
        '<a href="mailto:' + m.email + '" class="email">' + icon('mail', 'ic ic-35') + ' ' + m.email + '</a>' +
      '</div>' +
    '</div>';
  }).join('');
})();
