/* ==========================================================================
   Main — Site Interactions & Animations
   ========================================================================== */

(function () {
  'use strict';

  // ---------- Navigation ----------
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');
  var navLinks = document.querySelectorAll('.nav__link');

  // Scroll state
  var lastScroll = 0;

  function handleNavScroll() {
    var scrollY = window.scrollY;
    if (scrollY > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = scrollY;
  }

  // Mobile toggle
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('nav__toggle--active');
      navMenu.classList.toggle('nav__menu--open');
      document.body.style.overflow =
        navMenu.classList.contains('nav__menu--open') ? 'hidden' : '';
    });
  }

  // Close mobile menu on link click
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('nav__toggle--active');
      navMenu.classList.remove('nav__menu--open');
      document.body.style.overflow = '';
    });
  });

  // Active nav link tracking
  function updateActiveLink() {
    var sections = document.querySelectorAll('section[id]');
    var scrollY = window.scrollY + 120;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('nav__link--active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  }

  // ---------- Experience Card Toggles ----------
  var toggleBtns = document.querySelectorAll('.experience__card-toggle');

  toggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.experience__card');
      var details = card.querySelector('.experience__card-details');

      btn.classList.toggle('experience__card-toggle--active');
      details.classList.toggle('experience__card-details--open');
    });
  });

  // ---------- Scroll Reveal Animations ----------
  function initScrollReveal() {
    var animateEls = document.querySelectorAll('[data-animate]');

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
      );

      animateEls.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show everything
      animateEls.forEach(function (el) {
        el.classList.add('is-visible');
      });
    }
  }

  // ---------- Stat Counter Animation ----------
  function animateStats() {
    var statEls = document.querySelectorAll('.about__stat-number');

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              countUp(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      statEls.forEach(function (el) {
        observer.observe(el);
      });
    }
  }

  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1500;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      var current = start + (target - start) * eased;

      if (target % 1 !== 0) {
        el.textContent = prefix + current.toFixed(1) + suffix;
      } else {
        el.textContent = prefix + Math.floor(current);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        if (target % 1 !== 0) {
          el.textContent = prefix + target.toFixed(1) + suffix;
        } else {
          el.textContent = prefix + target;
        }
      }
    }

    requestAnimationFrame(step);
  }

  // ---------- Contact Form ----------
  var contactForm = document.getElementById('contactForm');
  var contactStatus = document.getElementById('contactStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = contactForm.querySelector('[name="name"]').value.trim();
      var email = contactForm.querySelector('[name="email"]').value.trim();
      var message = contactForm.querySelector('[name="message"]').value.trim();

      if (!name || !email || !message) {
        contactStatus.textContent = 'Please fill in all fields.';
        contactStatus.className = 'contact__form-status contact__form-status--error';
        return;
      }

      // Construct mailto link as a simple fallback
      var subject = encodeURIComponent('Message from ' + name);
      var body = encodeURIComponent(
        'Name: ' + name + '\nEmail: ' + email + '\n\n' + message
      );
      window.location.href = 'mailto:teddycannon@gmail.com?subject=' + subject + '&body=' + body;

      contactStatus.textContent = 'Opening your email client...';
      contactStatus.className = 'contact__form-status contact__form-status--success';

      contactForm.reset();
    });
  }

  // ---------- Smooth Scroll for Anchor Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ---------- Init ----------
  window.addEventListener('scroll', function () {
    handleNavScroll();
    updateActiveLink();
  }, { passive: true });

  document.addEventListener('DOMContentLoaded', function () {
    handleNavScroll();
    initScrollReveal();
    animateStats();
  });
})();
