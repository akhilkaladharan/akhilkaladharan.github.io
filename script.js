// ---- Nav scroll state ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ---- Mobile menu (simple toggle: reveal links stacked) ----
const burger = document.getElementById('navBurger');
burger?.addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  const cta = document.querySelector('.nav-cta');
  const open = burger.classList.toggle('open');
  if (open) {
    links.style.display = 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'fixed';
    links.style.top = '64px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = '#11151D';
    links.style.padding = '24px 32px';
    links.style.borderBottom = '1px solid #232936';
    cta.style.display = 'block';
    cta.style.margin = '0 32px 20px';
    cta.style.textAlign = 'center';
  } else {
    links.removeAttribute('style');
    cta.removeAttribute('style');
  }
});

// close mobile menu after clicking a link
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    if (burger.classList.contains('open')) burger.click();
  });
});

// ---- Custom cursor dot (desktop only) ----
const cursorDot = document.getElementById('cursorDot');
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
}

// ---- Avatar fallback: hide broken/missing profile image ----
const avatarImg = document.getElementById('avatarImg');
const avatarFallback = document.getElementById('avatarFallback');
if (avatarImg) {
  avatarImg.addEventListener('error', () => {
    avatarImg.style.display = 'none';
  });
  // if the placeholder path never loads, fallback initials show through automatically
  // since avatar-fallback sits behind avatar-img in the stacking context.
}

// ---- Scroll-reveal for sections ----
const revealTargets = document.querySelectorAll('.section-inner, .project-card, .skill-chip');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  io.observe(el);
});
