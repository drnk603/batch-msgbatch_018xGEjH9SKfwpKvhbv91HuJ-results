(function () {
  var header = document.querySelector('.dr-header');
  if (!header) return;

  var nav = header.querySelector('.dr-nav');
  var toggle = header.querySelector('.dr-nav-toggle');

  if (!nav || !toggle) return;

  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    if (expanded) {
      nav.classList.remove('dr-nav-open');
    } else {
      nav.classList.add('dr-nav-open');
    }
  });
})();
