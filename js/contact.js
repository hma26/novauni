/* Contact page – inquiry form + department directory */
(function () {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('contact-success');
  const successText = document.getElementById('contact-success-text');

  // Show the browser's validation message under the field instead of a tooltip
  function showErrors() {
    let firstInvalid = null;
    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      const msg = document.getElementById(field.id + '-error');
      const valid = field.checkValidity();
      field.classList.toggle('invalid', !valid);
      field.setAttribute('aria-invalid', valid ? 'false' : 'true');
      if (msg) msg.textContent = valid ? '' : field.validationMessage;
      if (!valid && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) firstInvalid.focus();
    return !firstInvalid;
  }

  form.addEventListener('input', function (e) {
    const field = e.target;
    const msg = document.getElementById(field.id + '-error');
    if (field.classList.contains('invalid') && field.checkValidity()) {
      field.classList.remove('invalid');
      field.setAttribute('aria-invalid', 'false');
      if (msg) msg.textContent = '';
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!showErrors()) return;
    const data = new FormData(form);
    successText.innerHTML =
      'Thank you, <strong>' + escapeHtml(data.get('name')) + '</strong>. Your message regarding ' +
      '<strong>' + escapeHtml(data.get('subject')) + '</strong> has been routed to the ' +
      '<strong>' + escapeHtml(data.get('department')) + '</strong>.';
    form.classList.add('hidden');
    success.classList.remove('hidden');
  });

  document.getElementById('contact-again').addEventListener('click', function () {
    form.reset();
    success.classList.add('hidden');
    form.classList.remove('hidden');
  });

  document.getElementById('directory-grid').innerHTML = DIRECTORY_DATA.map(function (d) {
    return '<div class="dir-card">' +
      '<h3>' + escapeHtml(d.title) + '</h3>' +
      '<ul>' +
        '<li>' + icon('phone', 'ic ic-35 ic-phone') + ' ' + escapeHtml(d.phone) + '</li>' +
        '<li>' + icon('mail', 'ic ic-35 ic-mail') + ' ' + escapeHtml(d.email) + '</li>' +
        '<li class="hours">' + icon('clock', 'ic ic-35') + ' ' + escapeHtml(d.hours) + '</li>' +
      '</ul>' +
    '</div>';
  }).join('');
})();
