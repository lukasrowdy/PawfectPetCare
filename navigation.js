// Let mobile visitors see the section they chose when the menu folds away.
const navigation = document.getElementById('navigation');
navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || !navigation.classList.contains('show')) return;
  event.preventDefault();
  navigation.addEventListener('hidden.bs.collapse', () => {
    window.location.hash = link.hash;
    document.querySelector(link.hash).scrollIntoView();
  }, { once: true });
  bootstrap.Collapse.getOrCreateInstance(navigation).hide();
});
