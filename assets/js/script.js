// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  document.getElementById('navLinks').classList.remove('open');
}));

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Trigger skill bars when visible
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Also trigger skill bars on section observe
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        setTimeout(() => bar.style.width = bar.dataset.width + '%', 200);
      });
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('#skills').forEach(el => skillObserver.observe(el));

// Form submit
function sendMessage() {
  const btn = event.target.closest('button');
  btn.innerHTML = '⏳ Mengirim...';
  btn.disabled = true;
  setTimeout(() => {
    btn.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }, 1500);
}

// Smooth active nav highlight
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#'+current ? 'var(--gold)' : '';
  });
});
