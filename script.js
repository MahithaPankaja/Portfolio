/**
 * E.P.M. Pankaja - Portfolio Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Render Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // Initialize all elements
  initThemeToggle();
  initTypingEffect();
  initScrollReveal();
  initTimelineTabs();
  initMobileMenu();
  initScrollspy();
  initContactForm();
});

/**
 * Theme Toggle Functionality
 * Manages light/dark modes and saves user preference in localStorage.
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  // Set default theme to dark
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  });
}

/**
 * Dynamic Typing Effect
 * Simulates human typing for hero section subtitles.
 */
function initTypingEffect() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const words = [
    "AI & Machine Learning Enthusiast",
    "Future AI Engineer",
    "Technology Professional with Accounting Expertise",
    "Strong Team Leader & Project Coordinator"
  ];
  
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Deleting is faster
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100; // Normal typing speed
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at full word
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      // Pause before typing next word
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  // Start typing
  setTimeout(type, 1000);
}

/**
 * Scroll Reveal Engine
 * Uses Intersection Observer to add trigger classes when sections scroll into view.
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Stop observing once animated
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}

/**
 * Timeline Tabs Switcher
 * Toggles visibility between Education and Professional Qualifications panels.
 */
function initTimelineTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const timelinePanes = document.querySelectorAll('.timeline-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Deactivate other tabs
      tabButtons.forEach(b => b.classList.remove('active'));
      timelinePanes.forEach(pane => pane.classList.remove('active'));

      // Activate clicked tab
      btn.classList.add('active');
      const targetPane = document.getElementById(btn.getAttribute('data-target'));
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

/**
 * Mobile Navigation Hamburg Menu
 */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  
  if (!mobileMenuBtn || !navLinks) return;

  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    
    // Toggle hamburger icon between menu and close
    const isOpen = navLinks.classList.contains('open');
    mobileMenuBtn.innerHTML = isOpen 
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>`;
  });

  // Close menu when a link is clicked
  const links = navLinks.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      mobileMenuBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>`;
    });
  });
}

/**
 * Scrollspy - Active Navigation Highlighting
 * Highlights the current active section in the sticky navbar.
 */
function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollY = window.pageYOffset + 120; // Offset for fixed navbar

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}


/**
 * Contact Form Mock Handler
 * Intercepts form submit and displays dynamic status notifications.
 */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const statusEl = document.getElementById('form-status');
  if (!form || !statusEl) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear status classes
    statusEl.className = 'form-status';
    statusEl.textContent = 'Sending message...';
    statusEl.style.display = 'block';

    // Form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      statusEl.classList.add('error');
      statusEl.textContent = 'Please fill out all fields.';
      return;
    }

    // Simulate sending network request (1.5s delay)
    setTimeout(() => {
      statusEl.classList.add('success');
      statusEl.textContent = 'Thank you for reaching out, ' + name + '! Your message has been sent successfully. I will get back to you shortly.';
      form.reset();
    }, 1500);
  });
}
