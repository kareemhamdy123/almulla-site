
// Nav scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.background = window.scrollY > 60
    ? 'rgba(18,38,63,0.98)'
    : 'rgba(18,38,63,0.92)';
});

// Service tabs
function switchTab(idx) {
  document.querySelectorAll('.svc-tab').forEach((t,i) => t.classList.toggle('active', i===idx));
  document.querySelectorAll('.svc-panel').forEach((p,i) => p.classList.toggle('active', i===idx));
}

// Project filter
function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.style.display = show ? 'block' : 'none';
  });
}

// Form submit
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('form-success').style.display = 'block';
  e.target.reset();
  setTimeout(() => {
    document.getElementById('form-success').style.display = 'none';
  }, 5000);
}

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navbar').classList.remove('open');
  });
});
