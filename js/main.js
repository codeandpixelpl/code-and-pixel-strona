(() => {
  'use strict';

  /* ===== Year in footer ===== */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ===== Active nav state ===== */
  const path = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  const navKey = path === 'index' ? null
    : path.startsWith('sufity') || path.startsWith('miasteczko') || path.startsWith('tct') ? 'portfolio'
    : path;
  if (navKey) {
    document.querySelectorAll(`[data-nav="${navKey}"]`).forEach((el) => {
      el.classList.add('nav__link--active');
    });
  }

  /* ===== Header scroll state ===== */
  const header = document.getElementById('header');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 30);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ===== Mobile menu ===== */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const toggleMenu = (force) => {
    if (!hamburger || !mobileMenu) return;
    const willOpen = typeof force === 'boolean' ? force : !hamburger.classList.contains('is-open');
    hamburger.classList.toggle('is-open', willOpen);
    mobileMenu.classList.toggle('is-open', willOpen);
    hamburger.setAttribute('aria-expanded', String(willOpen));
    mobileMenu.setAttribute('aria-hidden', String(!willOpen));
    document.body.style.overflow = willOpen ? 'hidden' : '';
  };
  if (hamburger) hamburger.addEventListener('click', () => toggleMenu());
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => toggleMenu(false));
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleMenu(false);
  });

  /* ===== Testimonial slider ===== */
  const slider = document.getElementById('testimonialSlider');
  if (slider) {
    const slides = Array.from(slider.querySelectorAll('.testimonial__slide'));
    const dots = Array.from(document.querySelectorAll('.testimonial__dot'));
    const prevBtn = document.querySelector('.testimonial__arrow--prev');
    const nextBtn = document.querySelector('.testimonial__arrow--next');
    const counter = document.getElementById('testimonialCounter');

    let active = 0;
    let autoTimer = null;
    const AUTO_MS = 7000;

    const pad = (n) => String(n).padStart(2, '0');

    const go = (i) => {
      active = (i + slides.length) % slides.length;
      slides.forEach((s, idx) => s.classList.toggle('testimonial__slide--active', idx === active));
      dots.forEach((d, idx) => d.classList.toggle('testimonial__dot--active', idx === active));
      if (counter) counter.textContent = `${pad(active + 1)} / ${pad(slides.length)}`;
    };

    const startAuto = () => {
      stopAuto();
      autoTimer = setInterval(() => go(active + 1), AUTO_MS);
    };
    const stopAuto = () => {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    };

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => { go(idx); startAuto(); });
    });
    if (prevBtn) prevBtn.addEventListener('click', () => { go(active - 1); startAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { go(active + 1); startAuto(); });

    slider.addEventListener('mouseenter', stopAuto);
    slider.addEventListener('mouseleave', startAuto);

    /* Touch swipe */
    let touchStartX = 0;
    let touchEndX = 0;
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 50) {
        go(diff < 0 ? active + 1 : active - 1);
        startAuto();
      }
    }, { passive: true });

    go(0);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      startAuto();
    }
  }

  /* ===== Contact form ===== */
  const form = document.getElementById('contactForm');
  if (form) {
    const status = document.getElementById('formStatus');
    const setStatus = (msg, kind) => {
      if (!status) return;
      status.textContent = msg;
      status.classList.remove('is-success', 'is-error');
      if (kind) status.classList.add(`is-${kind}`);
    };

    const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = String(data.get('name') || '').trim();
      const email = String(data.get('email') || '').trim();
      const message = String(data.get('message') || '').trim();
      const service = String(data.get('service') || '').trim();
      const budget = String(data.get('budget') || '').trim();

      let valid = true;
      [['name', name], ['email', email], ['message', message]].forEach(([id, val]) => {
        const field = document.getElementById(id);
        if (!field) return;
        const ok = id === 'email' ? isEmail(val) : val.length > 0;
        field.classList.toggle('is-invalid', !ok);
        if (!ok) valid = false;
      });

      if (!valid) {
        setStatus('Uzupełnij wymagane pola.', 'error');
        return;
      }

      const subject = encodeURIComponent(`Zapytanie ze strony — ${name}`);
      const body = encodeURIComponent(
        `Imię: ${name}\n` +
        `Email: ${email}\n` +
        `Usługa: ${service || '—'}\n` +
        `Budżet: ${budget || '—'}\n\n` +
        `Wiadomość:\n${message}`
      );
      window.location.href = `mailto:hello@codeandpixel.io?subject=${subject}&body=${body}`;
      setStatus('Otwieramy Twojego klienta poczty…', 'success');
      form.reset();
    });

    /* Live-clear invalid state */
    form.querySelectorAll('input, textarea, select').forEach((f) => {
      f.addEventListener('input', () => f.classList.remove('is-invalid'));
    });
  }

  /* ===== Portfolio filter ===== */
  const filterContainer = document.querySelector('.filter-chips');
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  if (filterContainer && portfolioCards.length) {
    filterContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;
      filterContainer.querySelectorAll('.filter-chip').forEach((c) => c.classList.remove('filter-chip--active'));
      chip.classList.add('filter-chip--active');
      const cat = chip.dataset.filter;
      portfolioCards.forEach((card) => {
        const cats = (card.dataset.category || '').split(' ');
        const match = cat === 'all' || cats.includes(cat);
        card.classList.toggle('is-hidden', !match);
      });
    });
  }

  /* ===== FAQ accordion ===== */
  document.querySelectorAll('.faq').forEach((faq) => {
    faq.addEventListener('click', (e) => {
      const trigger = e.target.closest('.faq__question');
      if (!trigger) return;
      const item = trigger.closest('.faq__item');
      const answer = item.querySelector('.faq__answer');
      const isOpen = item.classList.contains('faq__item--open');

      // Close all in this faq
      faq.querySelectorAll('.faq__item--open').forEach((openItem) => {
        openItem.classList.remove('faq__item--open');
        const a = openItem.querySelector('.faq__answer');
        if (a) a.style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('faq__item--open');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ===== Reveal on scroll ===== */
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.service-card, .case, .stat, .section-head, .service-block, .portfolio-card, .kpi-card, .process-step, .case-block').forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 600ms ease, transform 600ms cubic-bezier(0.4, 0, 0.2, 1)';
      io.observe(el);
    });
  }

  /* ===== Immersive scroll-video scene (home) =====
     Two clips scrubbed by scroll: clip 1 = sky → dive, clip 2 = underwater.
     The hand-off (last frame of 1 == first frame of 2 == "the dive") is
     timed to land on the "Zobacz, co tworzymy" (portfolio) section. */
  const scene = document.querySelector('.scene');
  if (scene) {
    const v1 = document.getElementById('sceneVideo1');
    const v2 = document.getElementById('sceneVideo2');
    const diveAnchor = document.getElementById('portfolio');
    const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

    let dur1 = 5, dur2 = 5, handoff = 1, maxScroll = 1, phase = 1;

    const measure = () => {
      dur1 = v1.duration || dur1;
      dur2 = v2.duration || dur2;
      maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      // The dive completes just as the portfolio section rises into view.
      handoff = diveAnchor
        ? clamp(diveAnchor.offsetTop - window.innerHeight * 0.55, 1, maxScroll)
        : maxScroll * 0.5;
    };

    const seek = (video, t) => {
      if (Math.abs(video.currentTime - t) > 0.01) {
        try { video.currentTime = t; } catch (e) { /* not seekable yet */ }
      }
    };

    // Scroll position maps straight to a frame — scrolling plays the clip
    // forward and back. Clip 1 spans top→dive, clip 2 spans dive→bottom.
    const update = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      if (y <= handoff) {
        phase = 1;
        seek(v1, clamp(y / handoff, 0, 1) * dur1);
      } else {
        phase = 2;
        seek(v1, dur1);                                                  // hold the dive frame
        seek(v2, clamp((y - handoff) / (maxScroll - handoff), 0, 1) * dur2);
      }
      const v2active = phase === 2;
      v2.classList.toggle('scene__video--active', v2active);
      v1.classList.toggle('scene__video--active', !v2active);
    };

    // Prime the decoder: a brief muted play→pause pushes each clip past
    // HAVE_NOTHING so the first scrub seek is instant (also helps mobile).
    const prime = (v) => { const p = v.play(); if (p && p.then) p.then(() => v.pause()).catch(() => {}); };

    // Scroll-scrubbing is coupled 1:1 to the user's own scroll — nothing moves
    // unless they scroll — so it runs even when "reduce motion" is enabled.
    prime(v1);
    prime(v2);
    const refresh = () => { measure(); update(); };
    [v1, v2].forEach((v) => ['loadedmetadata', 'loadeddata', 'canplay'].forEach((ev) => v.addEventListener(ev, refresh)));
    refresh();   // measure + paint first frame right away (fallback durations until metadata)
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', refresh);
    window.addEventListener('load', refresh);
  }
})();
