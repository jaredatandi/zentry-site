(function () {
  var b = document.getElementById('mb');
  var m = document.getElementById('mm');
  if (!b || !m) return;

  function setMenu(open) {
    m.classList.toggle('open', open);
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
    b.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  b.addEventListener('click', function () {
    setMenu(!m.classList.contains('open'));
  });

  m.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });
})();
