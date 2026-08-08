// Collapsible nav for narrow screens — shared across all pages.
// The six nav items don't fit one row below 660px, so the CSS turns the nav
// into a dropdown panel and this toggles it. Keep BREAKPOINT in sync with the
// @media rule in style.css.
(function () {
  var BREAKPOINT = 660;
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.topnav');

  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(!nav.classList.contains('open'));
  });

  // Clicking anywhere outside the panel closes it.
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !nav.contains(e.target)) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  // If the viewport grows past the breakpoint the panel is irrelevant —
  // clear the class so the desktop row isn't left in a stale state.
  window.addEventListener('resize', function () {
    if (window.innerWidth > BREAKPOINT) setOpen(false);
  });
})();
