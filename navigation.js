// Let mobile visitors see the section they chose when the menu folds away.
const navigation = document.getElementById('navigation');
navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  const toggle = document.querySelector('.navbar-toggler');
  if (!link || getComputedStyle(toggle).display === 'none') return;
  event.preventDefault();
  navigation.addEventListener('hidden.bs.collapse', () => {
    window.location.hash = link.hash;
    document.querySelector(link.hash).scrollIntoView();
  }, { once: true });
  const menu = bootstrap.Collapse.getOrCreateInstance(navigation, { toggle: false });
  if (navigation.classList.contains('collapsing')) {
    if (toggle.getAttribute('aria-expanded') === 'true') {
      navigation.addEventListener('shown.bs.collapse', () => menu.hide(), { once: true });
    }
  } else {
    menu.hide();
  }
});
