/* ==========================================================================
   NOVA University – shared site script
   Renders the announcement bar, navbar, footer and global modals, and
   provides the card renderers used by the individual pages.
   Requires: data.js, icons.js (loaded before this file)
   ========================================================================== */

/* ROOT is "" on index.html and "../" on pages inside /pages */
const ROOT = document.body.dataset.root || '';
const CURRENT_PAGE = document.body.dataset.page || 'home';

const NAV_LINKS = [
  { name: 'Home', page: 'home', href: ROOT + 'index.html' },
  { name: 'About', page: 'about', href: ROOT + 'pages/about.html' },
  { name: 'Programs', page: 'programs', href: ROOT + 'pages/programs.html' },
  { name: 'Admissions', page: 'admissions', href: ROOT + 'pages/admissions.html' },
  { name: 'Campus Life', page: 'campus', href: ROOT + 'pages/campus.html' },
  { name: 'News & Events', page: 'news', href: ROOT + 'pages/news.html' },
  { name: 'Contact', page: 'contact', href: ROOT + 'pages/contact.html' }
];

/** Resolve a page key ("programs") to a URL that works from the current file. */
function pageUrl(page, query) {
  const link = NAV_LINKS.find(function (l) { return l.page === page; });
  return (link ? link.href : ROOT + 'index.html') + (query || '');
}

/** Escape text before inserting it into innerHTML. */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatMoney(n) {
  return '$' + Number(n).toLocaleString('en-US');
}

/* ==========================================================================
   ANNOUNCEMENT BAR + NAVBAR
   ========================================================================== */
function renderHeader() {
  const mount = document.getElementById('site-header');
  if (!mount) return;

  const desktopLinks = NAV_LINKS.map(function (l) {
    return '<a href="' + l.href + '" class="nav-link' + (l.page === CURRENT_PAGE ? ' active' : '') + '">' + l.name + '</a>';
  }).join('');

  const mobileLinks = NAV_LINKS.map(function (l) {
    return '<a href="' + l.href + '" class="mobile-link' + (l.page === CURRENT_PAGE ? ' active' : '') + '">' +
      '<span>' + l.name + '</span>' + icon('chevron-right', 'ic ic-4') + '</a>';
  }).join('');

  mount.innerHTML =
    '<div class="announce">' +
      '<div class="container">' +
        '<div class="announce-left">' +
          '<span class="announce-badge">' + icon('sparkles', 'ic ic-3') + ' Admissions Open</span>' +
          '<span class="announce-text">Applications for <strong>Fall 2026 Academic Year</strong> are officially open!</span>' +
          '<a href="' + pageUrl('admissions') + '" class="announce-link">Apply by Sept 15 ' + icon('arrow-right', 'ic ic-3') + '</a>' +
        '</div>' +
        '<div class="announce-right">' +
          '<a href="tel:+18005556682">' + icon('phone', 'ic ic-3 text-amber') + ' +1 (800) 555-NOVA</a>' +
          '<a href="mailto:admissions@nova.edu">' + icon('mail', 'ic ic-3 text-amber') + ' admissions@nova.edu</a>' +
          '<span class="sep">|</span>' +
          '<span class="announce-status">Campus Status: <span>● Normal Ops</span></span>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<header class="navbar">' +
      '<div class="container">' +
        '<div class="navbar-inner">' +
          '<a href="' + pageUrl('home') + '" class="brand">' +
            '<img src="' + ROOT + 'logo.png" alt="NOVA University logo" class="brand-logo">' +
            '<div>' +
              '<span class="brand-name">NOVA<span>UNIVERSITY</span></span>' +
              '<span class="brand-tagline">Excellence • Innovation • Leadership</span>' +
            '</div>' +
          '</a>' +

          '<nav class="nav-links">' + desktopLinks + '</nav>' +

          '<div class="nav-actions">' +
            '<button type="button" class="btn-search" data-action="open-search" title="Search (Ctrl+K)">' +
              icon('search', 'ic ic-35') + '<span>Search</span><kbd>Ctrl K</kbd>' +
            '</button>' +
            '<button type="button" class="btn btn-navy btn-apply" data-action="open-apply">' +
              icon('send', 'ic ic-4') + '<span>Apply<span class="xl-only"> Now</span></span>' +
            '</button>' +
          '</div>' +

          '<div class="nav-mobile-actions">' +
            '<button type="button" class="icon-btn" data-action="open-search" aria-label="Search">' + icon('search', 'ic ic-5') + '</button>' +
            '<button type="button" class="icon-btn" id="mobile-menu-toggle" aria-label="Toggle Menu" aria-expanded="false">' +
              '<span class="ic-menu">' + icon('menu', 'ic ic-6') + '</span>' +
              '<span class="ic-close hidden">' + icon('x', 'ic ic-6') + '</span>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="mobile-menu" id="mobile-menu">' +
        '<div class="mobile-menu-links">' + mobileLinks + '</div>' +
        '<div class="mobile-menu-footer">' +
          '<button type="button" class="btn btn-navy-gold" data-action="open-apply">' + icon('send', 'ic ic-4') + ' Apply for Fall 2026</button>' +
        '</div>' +
      '</div>' +
    '</header>';

  // Mobile menu toggle
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  toggle.addEventListener('click', function () {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.querySelector('.ic-menu').classList.toggle('hidden', open);
    toggle.querySelector('.ic-close').classList.toggle('hidden', !open);
  });
}

/* ==========================================================================
   FOOTER
   ========================================================================== */
function renderFooter() {
  const mount = document.getElementById('site-footer');
  if (!mount) return;

  mount.innerHTML =
    '<footer class="footer">' +
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div class="footer-brand">' +
            '<a href="' + pageUrl('home') + '" class="brand">' +
              '<img src="' + ROOT + 'logo.png" alt="NOVA University logo" class="brand-logo">' +
              '<span class="brand-name">NOVA<span>UNIVERSITY</span></span>' +
            '</a>' +
            '<p>Empowering global leaders through academic excellence, interdisciplinary scientific research, and innovative student life since 1974.</p>' +
            '<div class="footer-contact">' +
              '<div>' + icon('map-pin', 'ic ic-4') + '<span>100 University Boulevard, Tech Innovation Park, NY 10001</span></div>' +
              '<div>' + icon('phone', 'ic ic-4') + '<span>Admissions: +1 (800) 555-NOVA (6682)</span></div>' +
              '<div>' + icon('mail', 'ic ic-4') + '<span>info@nova.edu • admissions@nova.edu</span></div>' +
            '</div>' +
          '</div>' +

          '<div>' +
            '<h3>Faculties</h3>' +
            '<ul class="footer-list">' +
              '<li><a href="' + pageUrl('programs') + '">Computing &amp; AI</a></li>' +
              '<li><a href="' + pageUrl('programs') + '">Business &amp; Innovation</a></li>' +
              '<li><a href="' + pageUrl('programs') + '">Engineering &amp; Tech</a></li>' +
              '<li><a href="' + pageUrl('programs') + '">Medicine &amp; Health</a></li>' +
              '<li><a href="' + pageUrl('programs') + '">Arts &amp; Media Design</a></li>' +
              '<li><a href="' + pageUrl('programs') + '">Environmental Science</a></li>' +
            '</ul>' +
          '</div>' +

          '<div>' +
            '<h3>Quick Links</h3>' +
            '<ul class="footer-list">' +
              '<li><a href="' + pageUrl('about') + '">About NOVA &amp; Mission</a></li>' +
              '<li><a href="' + pageUrl('admissions') + '">Admissions &amp; Tuition</a></li>' +
              '<li><a href="' + pageUrl('admissions') + '">Scholarship Finder</a></li>' +
              '<li><a href="' + pageUrl('campus') + '">Dormitories &amp; Dining</a></li>' +
              '<li><a href="' + pageUrl('news') + '">Research News &amp; Events</a></li>' +
              '<li><a href="' + pageUrl('contact') + '">Directory &amp; Office Hours</a></li>' +
            '</ul>' +
          '</div>' +

          '<div class="footer-news">' +
            '<h3>Stay Connected</h3>' +
            '<p>Subscribe to NOVA’s weekly research updates, campus news, and deadline alerts.</p>' +
            '<form id="newsletter-form">' +
              '<input type="email" required placeholder="Enter your email address" aria-label="Email address">' +
              '<button type="submit">' + icon('send', 'ic ic-35') + ' Subscribe</button>' +
            '</form>' +
          '</div>' +
        '</div>' +

        '<div class="footer-safety">' +
          '<div>' + icon('shield-alert', 'ic ic-5 ic-shield') + '<span><strong>Campus Safety Hotline:</strong> +1 (800) 555-SAFE (24/7 Dispatch)</span></div>' +
          '<div class="right">' +
            '<span>' + icon('globe', 'ic ic-35') + ' English (US)</span>' +
            '<a href="' + pageUrl('contact') + '">Campus Security Portal</a>' +
          '</div>' +
        '</div>' +

        '<div class="footer-bottom">' +
          '<p>© ' + new Date().getFullYear() + ' NOVA University. All rights reserved. Accredited by MSCHE.</p>' +
          '<div>' +
            '<a href="' + ROOT + 'pages/policies.html#privacy">Privacy Policy</a>' +
            '<a href="' + ROOT + 'pages/policies.html#title-ix">Title IX Compliance</a>' +
            '<a href="' + ROOT + 'pages/policies.html#accessibility">Accessibility Statement</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</footer>';

  // Newsletter subscribe (front-end only)
  const form = document.getElementById('newsletter-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.outerHTML =
      '<div class="footer-subscribed">' + icon('check', 'ic ic-4') +
      '<span>Thank you for subscribing! Check your inbox.</span></div>';
  });
}

/* ==========================================================================
   MODAL SYSTEM
   ========================================================================== */
const modalStack = [];

/** Open a modal; `html` is the markup for the .modal box itself. */
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function openModal(html, opts) {
  opts = opts || {};
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop' + (opts.top ? ' top' : '');
  backdrop.innerHTML = html;
  backdrop._returnFocus = document.activeElement;

  const box = backdrop.querySelector('.modal');
  if (box) {
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    const heading = box.querySelector('h2, h3');
    if (heading) {
      if (!heading.id) heading.id = 'modal-title-' + Date.now();
      box.setAttribute('aria-labelledby', heading.id);
    }
  }

  // Keep Tab focus inside the open dialog
  backdrop.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    const items = Array.prototype.slice.call(backdrop.querySelectorAll(FOCUSABLE))
      .filter(function (el) { return el.offsetParent !== null; });
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) closeModal(backdrop);
  });
  backdrop.querySelectorAll('[data-close]').forEach(function (btn) {
    btn.addEventListener('click', function () { closeModal(backdrop); });
  });
  document.body.appendChild(backdrop);
  document.body.classList.add('modal-open');
  modalStack.push(backdrop);
  renderIcons(backdrop);
  const focusEl = backdrop.querySelector('[autofocus]') || backdrop.querySelector(FOCUSABLE);
  if (focusEl) focusEl.focus();
  return backdrop;
}

function closeModal(backdrop) {
  const i = modalStack.indexOf(backdrop);
  if (i > -1) modalStack.splice(i, 1);
  backdrop.remove();
  if (!modalStack.length) document.body.classList.remove('modal-open');
  // Return keyboard focus to the element that opened the dialog
  if (backdrop._returnFocus && document.contains(backdrop._returnFocus)) backdrop._returnFocus.focus();
}

function closeTopModal() {
  if (modalStack.length) closeModal(modalStack[modalStack.length - 1]);
}

/* ---------- Apply modal -------------------------------------------------- */
function openApplyModal(preselectedProgramTitle) {
  const options = PROGRAMS_DATA.map(function (p) {
    const selected = p.title === preselectedProgramTitle ? ' selected' : '';
    return '<option value="' + escapeHtml(p.title) + '"' + selected + '>' + escapeHtml(p.title) + ' (' + escapeHtml(p.faculty) + ')</option>';
  }).join('');

  const html =
    '<div class="modal modal-cream">' +
      '<div class="modal-header">' +
        '<button type="button" class="modal-close" data-close aria-label="Close">' + icon('x', 'ic ic-5') + '</button>' +
        '<div class="modal-header-row">' +
          '<div class="modal-header-icon">' + icon('graduation-cap', 'ic ic-6') + '</div>' +
          '<div>' +
            '<h3>NOVA Admissions Application</h3>' +
            '<p>Start your undergraduate or graduate journey for 2026/2027</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="modal-body">' +
        '<form class="apply-form space-y-4">' +
          '<div class="form-grid">' +
            '<div>' +
              '<label class="form-label" for="ap-name">' + icon('user', 'ic ic-35') + ' Full Name *</label>' +
              '<input class="input" id="ap-name" name="fullName" type="text" required minlength="2" maxlength="80" autocomplete="name" placeholder="e.g. Eleanor Vance">' +
            '</div>' +
            '<div>' +
              '<label class="form-label" for="ap-email">' + icon('mail', 'ic ic-35') + ' Email Address *</label>' +
              '<input class="input" id="ap-email" name="email" type="email" required autocomplete="email" placeholder="eleanor@example.com">' +
            '</div>' +
          '</div>' +
          '<div class="form-grid">' +
            '<div>' +
              '<label class="form-label" for="ap-phone">' + icon('phone', 'ic ic-35') + ' Phone Number</label>' +
              '<input class="input" id="ap-phone" name="phone" type="tel" autocomplete="tel" pattern="[+0-9() -]{7,20}" title="Digits, spaces, brackets and + only" placeholder="+1 (555) 019-2831">' +
            '</div>' +
            '<div>' +
              '<label class="form-label" for="ap-status">Status / Origin</label>' +
              '<select class="select" id="ap-status" name="citizenship">' +
                '<option>Domestic Student</option>' +
                '<option>International Student</option>' +
                '<option>Transfer Student</option>' +
              '</select>' +
            '</div>' +
          '</div>' +
          '<div>' +
            '<label class="form-label" for="ap-program">' + icon('book-open', 'ic ic-35') + ' Desired Academic Program *</label>' +
            '<select class="select" id="ap-program" name="programTitle" required>' + options + '</select>' +
          '</div>' +
          '<div class="form-grid">' +
            '<div>' +
              '<label class="form-label" for="ap-level">Study Level</label>' +
              '<select class="select" id="ap-level" name="degreeLevel">' +
                '<option value="Undergraduate">Undergraduate (Bachelor)</option>' +
                '<option value="Graduate">Graduate (Master)</option>' +
                '<option value="Doctorate">Doctorate (Ph.D. / M.D.)</option>' +
                '<option value="Certificate">Executive Certificate</option>' +
              '</select>' +
            '</div>' +
            '<div>' +
              '<label class="form-label" for="ap-term">Intended Term</label>' +
              '<select class="select" id="ap-term" name="startSemester">' +
                '<option value="Fall 2026">Fall 2026 (September)</option>' +
                '<option value="Spring 2027">Spring 2027 (January)</option>' +
                '<option value="Summer 2027">Summer 2027 (June)</option>' +
              '</select>' +
            '</div>' +
          '</div>' +
          '<div>' +
            '<label class="form-label" for="ap-notes">Additional Notes / Questions</label>' +
            '<textarea class="textarea" id="ap-notes" name="notes" rows="2" maxlength="500" placeholder="Mention scholarship inquiries, previous credit transfers, or specific interests..."></textarea>' +
          '</div>' +
          '<div class="notice">' + icon('alert-circle', 'ic ic-4') + '<span>No initial application fee is required for this pre-evaluation step.</span></div>' +
          '<button type="submit" class="btn btn-navy-gold btn-block btn-lg">' + icon('send', 'ic ic-4') + ' Submit Application Intent</button>' +
        '</form>' +
      '</div>' +
    '</div>';

  const modal = openModal(html);
  const form = modal.querySelector('.apply-form');
  const body = modal.querySelector('.modal-body');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing Application...';

    // Simulate a network request, then show the confirmation
    setTimeout(function () {
      const ref = Math.floor(Math.random() * 899999 + 100000);
      body.innerHTML =
        '<div class="success-box">' +
          '<div class="success-icon">' + icon('check-circle', 'ic ic-10') + '</div>' +
          '<h3>Application Submitted!</h3>' +
          '<p>Thank you, <strong class="text-slate-900">' + escapeHtml(data.get('fullName')) + '</strong>. Your pre-application for ' +
            '<strong class="text-blue-700">' + escapeHtml(data.get('programTitle')) + '</strong> (' + escapeHtml(data.get('startSemester')) + ') has been successfully received.</p>' +
          '<div class="ref-box">' +
            '<p><strong>Reference ID:</strong> NOVA-2026-' + ref + '</p>' +
            '<p><strong>Confirmation sent to:</strong> ' + escapeHtml(data.get('email')) + '</p>' +
            '<p><strong>Next Step:</strong> An Admissions Officer will contact you within 2 business days with your portal login credentials.</p>' +
          '</div>' +
          '<button type="button" class="btn btn-navy mt-4" data-close>Done</button>' +
        '</div>';
      body.querySelector('[data-close]').addEventListener('click', function () { closeModal(modal); });
    }, 1000);
  });
}

/* ---------- Program detail modal ---------------------------------------- */
function openProgramModal(program) {
  const courses = program.keyCourses.map(function (c, i) {
    return '<div class="course"><span class="num">' + (i + 1) + '</span><span>' + escapeHtml(c) + '</span></div>';
  }).join('');
  const careers = program.careerPaths.map(function (c) {
    return '<span class="chip chip-emerald">✓ ' + escapeHtml(c) + '</span>';
  }).join('');
  const reqs = program.admissionRequirements.map(function (r) {
    return '<li><span class="dot">•</span><span>' + escapeHtml(r) + '</span></li>';
  }).join('');

  const html =
    '<div class="modal modal-xl modal-scroll">' +
      '<div class="pd-banner">' +
        '<img src="' + program.image + '" alt="' + escapeHtml(program.title) + '" referrerpolicy="no-referrer">' +
        '<div class="pd-banner-text">' +
          '<span class="faculty">' + escapeHtml(program.faculty) + '</span>' +
          '<h2>' + escapeHtml(program.title) + '</h2>' +
          '<p>' + escapeHtml(program.deliveryMode) + ' • ' + escapeHtml(program.level) + '</p>' +
        '</div>' +
        '<button type="button" class="modal-close" data-close aria-label="Close">' + icon('x', 'ic ic-5') + '</button>' +
      '</div>' +

      '<div class="pd-metrics">' +
        '<div><span class="k">Duration</span><span class="v">' + icon('clock', 'ic ic-35') + ' ' + escapeHtml(program.duration) + '</span></div>' +
        '<div><span class="k">Credits</span><span class="v">' + icon('award', 'ic ic-35') + ' ' + program.credits + ' Credits</span></div>' +
        '<div><span class="k">Annual Tuition</span><span class="v green">' + icon('dollar-sign', 'ic ic-35') + ' ' + formatMoney(program.tuitionPerYear) + ' / Year</span></div>' +
        '<div><span class="k">Mode</span><span class="v">' + icon('graduation-cap', 'ic ic-35') + ' ' + escapeHtml(program.deliveryMode) + '</span></div>' +
      '</div>' +

      '<div class="pd-body">' +
        '<div>' +
          '<h3>Program Overview</h3>' +
          '<p class="overview">' + escapeHtml(program.overview) + '</p>' +
        '</div>' +
        '<div>' +
          '<h3>' + icon('book-open', 'ic ic-4 text-blue') + ' Core Curriculum Highlights</h3>' +
          '<div class="course-grid">' + courses + '</div>' +
        '</div>' +
        '<div>' +
          '<h3>' + icon('briefcase', 'ic ic-4 text-emerald') + ' Career Paths &amp; Alumni Roles</h3>' +
          '<div class="flex flex-wrap gap-2">' + careers + '</div>' +
        '</div>' +
        '<div>' +
          '<h3>' + icon('check-circle', 'ic ic-4 text-amber-600') + ' Admission Requirements</h3>' +
          '<ul class="req-list">' + reqs + '</ul>' +
        '</div>' +
      '</div>' +

      '<div class="pd-footer">' +
        '<button type="button" class="btn-text" data-close>Close</button>' +
        '<button type="button" class="btn btn-navy-gold" data-action="open-apply" data-program="' + escapeHtml(program.title) + '">' +
          '<span>Apply to This Program</span>' + icon('arrow-right', 'ic ic-4') +
        '</button>' +
      '</div>' +
    '</div>';

  openModal(html);
}

/* ---------- News article reader ----------------------------------------- */
function openNewsModal(news) {
  const html =
    '<div class="modal modal-lg modal-cream">' +
      '<button type="button" class="modal-close" data-close aria-label="Close">' + icon('x', 'ic ic-5') + '</button>' +
      '<div class="modal-body">' +
        '<span class="pill pill-blue-solid">' + escapeHtml(news.category) + '</span>' +
        '<h3 class="title">' + escapeHtml(news.title) + '</h3>' +
        '<p class="meta">Published on ' + escapeHtml(news.date) + ' • By ' + escapeHtml(news.author) + ' (' + escapeHtml(news.authorRole) + ')</p>' +
        '<img class="article-img" src="' + news.image + '" alt="' + escapeHtml(news.title) + '" referrerpolicy="no-referrer">' +
        '<div class="article">' + escapeHtml(news.content) + '</div>' +
        '<button type="button" class="btn btn-navy-gold btn-xs btn-block" data-close>Back to Newsroom</button>' +
      '</div>' +
    '</div>';
  openModal(html);
}

/* ---------- Quick search modal ------------------------------------------ */
function openSearchModal() {
  const html =
    '<div class="modal search-modal">' +
      '<div class="search-bar">' +
        icon('search', 'ic ic-5 ic-search') +
        '<input type="text" id="quick-search-input" aria-label="Search the site" placeholder="Search programs, faculties, news, events, scholarships..." autofocus autocomplete="off">' +
        '<button type="button" class="btn-clear-text hidden" id="quick-search-clear">Clear</button>' +
        '<button type="button" class="icon-btn" data-close aria-label="Close">' + icon('x', 'ic ic-5') + '</button>' +
      '</div>' +
      '<div class="search-results" id="quick-search-results"></div>' +
      '<div class="search-footer">' +
        '<span>Press <kbd>ESC</kbd> to exit</span>' +
        '<span>NOVA University Portal</span>' +
      '</div>' +
    '</div>';

  const modal = openModal(html, { top: true });
  const input = modal.querySelector('#quick-search-input');
  const clearBtn = modal.querySelector('#quick-search-clear');
  const results = modal.querySelector('#quick-search-results');

  function render() {
    const q = input.value.trim().toLowerCase();
    clearBtn.classList.toggle('hidden', !q);

    if (!q) {
      const tags = ['Computer Science', 'Tuition Fees', 'Scholarships', 'Robotics', 'Medicine', 'Housing'];
      results.innerHTML =
        '<div class="search-empty">' +
          icon('graduation-cap', 'ic ic-big') +
          '<p>Type anything to search across NOVA University</p>' +
          '<div class="search-tags">' +
            tags.map(function (t) { return '<button type="button" data-tag="' + t + '">' + t + '</button>'; }).join('') +
          '</div>' +
        '</div>';
      results.querySelectorAll('[data-tag]').forEach(function (b) {
        b.addEventListener('click', function () { input.value = b.dataset.tag; render(); input.focus(); });
      });
      return;
    }

    const programs = PROGRAMS_DATA.filter(function (p) {
      return p.title.toLowerCase().includes(q) || p.faculty.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    });
    const news = NEWS_DATA.filter(function (n) {
      return n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q);
    });
    const events = EVENTS_DATA.filter(function (e) {
      return e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q);
    });

    if (!programs.length && !news.length && !events.length) {
      results.innerHTML =
        '<div class="search-empty" style="padding:3rem 0">' +
          '<p class="strong">No results found for "' + escapeHtml(input.value) + '"</p>' +
          '<p class="hint">Try searching with broader terms like "Engineering", "Admissions", or "Scholarship".</p>' +
        '</div>';
      return;
    }

    let out = '';
    if (programs.length) {
      out += '<div class="search-group">' +
        '<div class="search-group-title">' + icon('book-open', 'ic ic-4 text-blue') + ' Academic Programs (' + programs.length + ')</div>' +
        programs.map(function (p) {
          return '<button type="button" class="search-item blue" data-go="' + pageUrl('programs', '?search=' + encodeURIComponent(p.title)) + '">' +
            '<div><h3>' + escapeHtml(p.title) + '</h3><p>' + escapeHtml(p.faculty) + ' • ' + escapeHtml(p.level) + ' • ' + escapeHtml(p.duration) + '</p></div>' +
            icon('arrow-right', 'ic ic-4') + '</button>';
        }).join('') + '</div>';
    }
    if (news.length) {
      out += '<div class="search-group">' +
        '<div class="search-group-title">' + icon('newspaper', 'ic ic-4 text-emerald') + ' News &amp; Research (' + news.length + ')</div>' +
        news.map(function (n) {
          return '<button type="button" class="search-item emerald" data-go="' + pageUrl('news') + '">' +
            '<div><h3>' + escapeHtml(n.title) + '</h3><p>' + escapeHtml(n.category) + ' • ' + escapeHtml(n.date) + '</p></div>' +
            icon('arrow-right', 'ic ic-4') + '</button>';
        }).join('') + '</div>';
    }
    if (events.length) {
      out += '<div class="search-group">' +
        '<div class="search-group-title">' + icon('calendar', 'ic ic-4 text-amber-600') + ' Events (' + events.length + ')</div>' +
        events.map(function (e) {
          return '<button type="button" class="search-item amber" data-go="' + pageUrl('news') + '">' +
            '<div><h3>' + escapeHtml(e.title) + '</h3><p>' + escapeHtml(e.date) + ' • ' + escapeHtml(e.location) + '</p></div>' +
            icon('arrow-right', 'ic ic-4') + '</button>';
        }).join('') + '</div>';
    }
    results.innerHTML = out;
    results.querySelectorAll('[data-go]').forEach(function (b) {
      b.addEventListener('click', function () { window.location.href = b.dataset.go; });
    });
  }

  input.addEventListener('input', render);
  clearBtn.addEventListener('click', function () { input.value = ''; render(); input.focus(); });
  render();
}

/* ==========================================================================
   CARD RENDERERS (used by Home / Programs / News pages)
   ========================================================================== */
function renderProgramCard(p) {
  return '<div class="card program-card">' +
    '<div>' +
      '<div class="card-img">' +
        '<img src="' + p.image + '" alt="' + escapeHtml(p.title) + '" referrerpolicy="no-referrer" loading="lazy">' +
        '<span class="tag tag-navy tag-tl">' + escapeHtml(p.faculty) + '</span>' +
        '<span class="tag tag-white tag-br">' + escapeHtml(p.level) + '</span>' +
      '</div>' +
      '<div class="card-body">' +
        '<h3 class="line-clamp-1">' + escapeHtml(p.title) + '</h3>' +
        '<p class="desc line-clamp-2">' + escapeHtml(p.description) + '</p>' +
        '<div class="program-metrics">' +
          '<div>' + icon('clock', 'ic ic-35') + '<span>' + escapeHtml(p.duration) + '</span></div>' +
          '<div>' + icon('award', 'ic ic-35') + '<span>' + p.credits + ' Credits</span></div>' +
          '<div class="tuition">' + icon('dollar-sign', 'ic ic-35') + '<span>' + formatMoney(p.tuitionPerYear) + ' / Year</span></div>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="card-footer">' +
      '<button type="button" class="btn btn-soft btn-block" data-action="program-detail" data-id="' + p.id + '">' +
        '<span>View Curriculum &amp; Details</span>' + icon('arrow-up-right', 'ic ic-35') +
      '</button>' +
    '</div>' +
  '</div>';
}

function renderNewsCard(n) {
  return '<article class="card news-card">' +
    '<div>' +
      '<div class="card-img">' +
        '<img src="' + n.image + '" alt="' + escapeHtml(n.title) + '" referrerpolicy="no-referrer" loading="lazy">' +
        '<span class="tag tag-navy tag-tl">' + escapeHtml(n.category) + '</span>' +
      '</div>' +
      '<div class="card-body">' +
        '<div class="news-meta">' +
          '<span>' + icon('calendar', 'ic ic-35') + ' ' + escapeHtml(n.date) + '</span>' +
          '<span>•</span>' +
          '<span>' + icon('clock', 'ic ic-35') + ' ' + escapeHtml(n.readTime) + '</span>' +
        '</div>' +
        '<h3 class="line-clamp-2">' + escapeHtml(n.title) + '</h3>' +
        '<p class="desc line-clamp-3">' + escapeHtml(n.summary) + '</p>' +
      '</div>' +
    '</div>' +
    '<div class="card-footer">' +
      '<span class="news-author">' + icon('user', 'ic ic-3') + ' ' + escapeHtml(n.author) + '</span>' +
      '<button type="button" class="news-read" data-action="news-read" data-id="' + n.id + '">Read Story ' + icon('arrow-right', 'ic ic-35') + '</button>' +
    '</div>' +
  '</article>';
}

function renderEventCard(ev) {
  const parts = ev.date.split(' ');            // ["September", "12,", "2026"]
  const day = (parts[1] || '15').replace(',', '');
  const monthYear = (parts[0] || '') + ' ' + (parts[2] || '');

  return '<div class="event-card">' +
    '<div class="event-date">' +
      '<span class="lbl">Upcoming</span>' +
      '<span class="day">' + day + '</span>' +
      '<span class="my">' + escapeHtml(monthYear) + '</span>' +
    '</div>' +
    '<div class="event-body">' +
      '<div class="flex items-center gap-2 flex-wrap">' +
        '<span class="pill pill-blue">' + escapeHtml(ev.category) + '</span>' +
        (ev.isVirtual ? '<span class="pill pill-emerald">' + icon('sparkles', 'ic ic-3') + ' Virtual Stream</span>' : '') +
      '</div>' +
      '<h3>' + escapeHtml(ev.title) + '</h3>' +
      '<p class="desc line-clamp-2">' + escapeHtml(ev.description) + '</p>' +
      '<div class="event-meta">' +
        '<span>' + icon('clock', 'ic ic-35 ic-time') + ' ' + escapeHtml(ev.time) + '</span>' +
        '<span>' + icon('map-pin', 'ic ic-35 ic-loc') + ' ' + escapeHtml(ev.location) + '</span>' +
        (ev.speaker ? '<span>' + icon('user', 'ic ic-35 ic-user') + ' ' + escapeHtml(ev.speaker) + '</span>' : '') +
      '</div>' +
    '</div>' +
    '<div class="event-rsvp">' +
      '<button type="button" class="btn btn-navy-gold" data-action="rsvp">RSVP / Register Free</button>' +
    '</div>' +
  '</div>';
}

/* ==========================================================================
   GLOBAL EVENT DELEGATION
   ========================================================================== */
document.addEventListener('click', function (e) {
  const el = e.target.closest('[data-action]');
  if (!el) return;

  switch (el.dataset.action) {
    case 'open-apply':
      openApplyModal(el.dataset.program || '');
      break;
    case 'open-search':
      openSearchModal();
      break;
    case 'program-detail': {
      const program = PROGRAMS_DATA.find(function (p) { return p.id === el.dataset.id; });
      if (program) openProgramModal(program);
      break;
    }
    case 'news-read': {
      const news = NEWS_DATA.find(function (n) { return n.id === el.dataset.id; });
      if (news) openNewsModal(news);
      break;
    }
    case 'rsvp': {
      const registered = el.classList.toggle('registered');
      el.innerHTML = registered ? icon('check', 'ic ic-4') + ' Registered' : 'RSVP / Register Free';
      break;
    }
  }
});

document.addEventListener('keydown', function (e) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (modalStack.length) closeTopModal();
    else openSearchModal();
  }
  if (e.key === 'Escape') closeTopModal();
});

/* ==========================================================================
   INIT
   ========================================================================== */
renderHeader();
renderFooter();
renderIcons(document);
