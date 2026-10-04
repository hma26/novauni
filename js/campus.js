/* Campus page – facilities, housing (with room-plan modal), clubs */
(function () {
  document.getElementById('facilities-grid').innerHTML = FACILITIES_DATA.map(function (f) {
    return '<div class="facility-card">' +
      '<div>' +
        '<div class="photo">' +
          '<img src="' + f.image + '" alt="' + escapeHtml(f.name) + '" referrerpolicy="no-referrer" loading="lazy">' +
          '<span class="tag">' + escapeHtml(f.category) + '</span>' +
        '</div>' +
        '<div class="body">' +
          '<h3>' + escapeHtml(f.name) + '</h3>' +
          '<p class="desc">' + escapeHtml(f.description) + '</p>' +
          '<div class="highlights">' +
            f.highlights.map(function (h) { return '<span class="chip">✓ ' + escapeHtml(h) + '</span>'; }).join('') +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="foot">' +
        '<span>' + icon('clock', 'ic ic-35 ic-time') + ' ' + escapeHtml(f.hours) + '</span>' +
        '<span>' + icon('map-pin', 'ic ic-35 ic-loc') + ' ' + escapeHtml(f.location) + '</span>' +
      '</div>' +
    '</div>';
  }).join('');

  document.getElementById('housing-grid').innerHTML = HOUSING_OPTIONS.map(function (h) {
    return '<div class="housing-card">' +
      '<div>' +
        '<div class="photo">' +
          '<img src="' + h.image + '" alt="' + escapeHtml(h.name) + '" referrerpolicy="no-referrer" loading="lazy">' +
          '<span class="tag tag-emerald">' + formatMoney(h.pricePerSemester) + ' / Semester</span>' +
        '</div>' +
        '<div class="body">' +
          '<h3>' + escapeHtml(h.name) + '</h3>' +
          '<p class="type">' + escapeHtml(h.type) + ' • ' + escapeHtml(h.occupancy) + '</p>' +
          '<ul class="amenities">' +
            h.amenities.map(function (a) { return '<li>' + icon('check', 'ic ic-35') + '<span>' + escapeHtml(a) + '</span></li>'; }).join('') +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="foot">' +
        '<button type="button" class="btn btn-navy-gold btn-xs btn-block" data-housing="' + h.id + '"><span>Inspect Room Plan</span>' + icon('arrow-right', 'ic ic-35') + '</button>' +
      '</div>' +
    '</div>';
  }).join('');

  document.getElementById('clubs-grid').innerHTML = STUDENT_CLUBS.map(function (c) {
    return '<div class="club-card">' +
      '<div>' +
        '<span class="dept-tag">' + escapeHtml(c.category) + '</span>' +
        '<h3>' + escapeHtml(c.name) + '</h3>' +
        '<p>' + escapeHtml(c.members) + '</p>' +
      '</div>' +
      icon('users', 'ic ic-6') +
    '</div>';
  }).join('');

  // Housing inspection modal
  document.getElementById('housing-grid').addEventListener('click', function (e) {
    const btn = e.target.closest('[data-housing]');
    if (!btn) return;
    const h = HOUSING_OPTIONS.find(function (x) { return x.id === btn.dataset.housing; });
    if (!h) return;

    openModal(
      '<div class="modal modal-md modal-cream">' +
        '<button type="button" class="modal-close" data-close aria-label="Close">' + icon('x', 'ic ic-5') + '</button>' +
        '<div class="modal-body">' +
          '<h3 class="title">' + escapeHtml(h.name) + '</h3>' +
          '<img class="housing-modal-img" src="' + h.image + '" alt="' + escapeHtml(h.name) + '" referrerpolicy="no-referrer">' +
          '<div class="housing-modal-info">' +
            '<p><strong>Housing Type:</strong> ' + escapeHtml(h.type) + '</p>' +
            '<p><strong>Pricing:</strong> ' + formatMoney(h.pricePerSemester) + ' per semester</p>' +
            '<p><strong>Occupancy:</strong> ' + escapeHtml(h.occupancy) + '</p>' +
            '<p class="sub">Included Utilities &amp; Amenities:</p>' +
            '<ul>' + h.amenities.map(function (a) { return '<li>• ' + escapeHtml(a) + '</li>'; }).join('') + '</ul>' +
          '</div>' +
          '<button type="button" class="btn btn-navy-gold btn-xs btn-block" data-close>Close Plan</button>' +
        '</div>' +
      '</div>'
    );
  });
})();

/* ---------- Campus photo gallery slider ----------------------------------- */
(function () {
  const track = document.getElementById('gallery-track');
  const dots = document.getElementById('gallery-dots');
  const thumbs = document.getElementById('gallery-thumbs');
  const gallery = document.getElementById('campus-gallery');
  if (!track) return;

  let index = 0;
  const total = GALLERY_DATA.length;

  track.innerHTML = GALLERY_DATA.map(function (g, i) {
    return '<figure class="gallery-slide" role="group" aria-roledescription="slide" aria-label="' + (i + 1) + ' of ' + total + '">' +
      '<img src="' + g.src + '" alt="' + escapeHtml(g.caption) + '" width="800" height="533" loading="' + (i === 0 ? 'eager' : 'lazy') + '">' +
      '<figcaption>' + escapeHtml(g.caption) + '</figcaption>' +
    '</figure>';
  }).join('');

  dots.innerHTML = GALLERY_DATA.map(function (g, i) {
    return '<button type="button" class="gallery-dot" role="tab" data-index="' + i + '" aria-label="Go to photo ' + (i + 1) + '"></button>';
  }).join('');

  thumbs.innerHTML = GALLERY_DATA.map(function (g, i) {
    return '<button type="button" class="gallery-thumb" data-index="' + i + '" aria-label="Show photo ' + (i + 1) + ': ' + escapeHtml(g.caption) + '">' +
      '<img src="' + g.src + '" alt="" width="200" height="133" loading="lazy"></button>';
  }).join('');

  function goTo(i) {
    index = (i + total) % total;
    track.style.transform = 'translateX(-' + index * 100 + '%)';
    dots.querySelectorAll('.gallery-dot').forEach(function (d, n) {
      d.classList.toggle('active', n === index);
      d.setAttribute('aria-selected', n === index ? 'true' : 'false');
    });
    thumbs.querySelectorAll('.gallery-thumb').forEach(function (t, n) { t.classList.toggle('active', n === index); });
  }

  document.getElementById('gallery-prev').addEventListener('click', function () { goTo(index - 1); });
  document.getElementById('gallery-next').addEventListener('click', function () { goTo(index + 1); });
  dots.addEventListener('click', function (e) {
    const d = e.target.closest('[data-index]');
    if (d) goTo(Number(d.dataset.index));
  });
  thumbs.addEventListener('click', function (e) {
    const t = e.target.closest('[data-index]');
    if (t) goTo(Number(t.dataset.index));
  });

  // Keyboard: left/right arrows when the gallery has focus
  gallery.setAttribute('tabindex', '0');
  gallery.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); }
  });

  // Touch swipe
  let startX = null;
  track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', function (e) {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) goTo(dx < 0 ? index + 1 : index - 1);
    startX = null;
  });

  goTo(0);
})();
