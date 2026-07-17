(() => {
  'use strict';

  /* ===== Year in footer ===== */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ===== Page identity ===== */
  const pathname = window.location.pathname;
  const pageFile = (pathname.split('/').pop() || 'index.html').replace('.html', '') || 'index';

  /* ===== Active nav state ===== */
  let navKey = null;
  if (pathname.includes('/uslugi/')) navKey = 'uslugi';
  else if (pathname.includes('/portfolio/')) navKey = 'portfolio';
  else if (pathname.includes('/wiedza/')) navKey = 'wiedza';
  else if (pageFile !== 'index') navKey = pageFile;
  if (navKey) {
    document.querySelectorAll(`[data-nav="${navKey}"]`).forEach((el) => {
      el.classList.add('nav__link--active');
    });
  }

  /* ===== Analytics (brief 8.3) — dataLayer, GA4-ready ===== */
  const track = (event, params) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: event, page: pageFile }, params || {}));
  };

  document.addEventListener('click', (e) => {
    const cta = e.target.closest('[data-cta]');
    if (cta) {
      track('cta_click', {
        cta_location: cta.dataset.cta,
        cta_text: cta.textContent.trim().replace(/\s+/g, ' ').slice(0, 60)
      });
    }
    const an = e.target.closest('[data-analytics]');
    if (an) {
      const type = an.dataset.analytics;
      if (type === 'service_open') {
        track('service_open', { service: an.dataset.service, source: an.dataset.source || pageFile });
      } else if (type === 'case_study_open') {
        track('case_study_open', { project: an.dataset.case, category: an.dataset.caseCategory });
      } else if (type === 'contact_click') {
        track('contact_click', { channel: an.dataset.channel });
      }
    }
    const tel = e.target.closest('a[href^="tel:"]');
    if (tel && !tel.dataset.analytics) track('contact_click', { channel: 'telefon' });
    const mail = e.target.closest('a[href^="mailto:"]');
    if (mail && !mail.dataset.analytics) track('contact_click', { channel: 'email' });
  });

  /* ===== Header scroll state ===== */
  const header = document.getElementById('header');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 30);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ===== Sticky CTA mobile (brief 3.4) ===== */
  const stickyCta = document.getElementById('stickyCta');
  if (stickyCta) {
    const toggleSticky = () => {
      const show = window.scrollY > 520;
      stickyCta.classList.toggle('is-visible', show);
      document.body.classList.toggle('has-sticky-cta', show);
    };
    toggleSticky();
    window.addEventListener('scroll', toggleSticky, { passive: true });
  }

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

  /* ===== Konfigurator projektu (brief 7.4) ===== */
  const wizard = document.getElementById('wizard');
  if (wizard) {
    // TODO [DO POTWIERDZENIA]: podmień na realny endpoint (np. https://formspree.io/f/XXXX).
    // Dopóki placeholder nie jest adresem http, submit kończy się przejściem
    // na dziekujemy.html bez wysyłki (tryb demo do akceptacji designu).
    const FORM_ENDPOINT = 'FORM_ENDPOINT';
    const MAX_FILE_MB = 10;

    const steps = Array.from(wizard.querySelectorAll('.wizard__step'));
    const fill = document.getElementById('wizardProgressFill');
    const progressLabel = document.getElementById('wizardProgressLabel');
    const progressTrack = wizard.querySelector('.wizard__progress-track');
    const backBtn = document.getElementById('wizardBack');
    const nextBtn = document.getElementById('wizardNext');
    const errEl = document.getElementById('wizardError');
    const NEXT_HTML = nextBtn.innerHTML;
    const ADS_SERVICES = ['google-ads', 'allegro-ads'];

    let current = 0;
    let started = false;
    let submitting = false;

    const serviceValue = () => {
      const checked = wizard.querySelector('input[name="usluga"]:checked');
      return checked ? checked.value : '';
    };

    const setError = (msg) => {
      errEl.textContent = msg || '';
      errEl.classList.toggle('is-visible', !!msg);
    };

    const markStarted = () => {
      if (started) return;
      started = true;
      track('form_start', { form_type: 'konfigurator', service: serviceValue() || 'brak' });
    };

    /* Krok 3 i 4 zależą od wybranej usługi */
    const syncConditional = () => {
      const svc = serviceValue() || 'strona';
      wizard.querySelectorAll('.wizard__scope').forEach((el) => {
        const match = el.dataset.forService === svc;
        el.hidden = !match;
        el.querySelectorAll('input, textarea, select').forEach((f) => { f.disabled = !match; });
      });
      const isAds = ADS_SERVICES.indexOf(svc) !== -1;
      wizard.querySelectorAll('.wizard__budget').forEach((el) => {
        const match = (el.dataset.budgetScale === 'ads') === isAds;
        el.hidden = !match;
        el.querySelectorAll('input').forEach((f) => { f.disabled = !match; });
      });
    };

    const show = (i, scroll) => {
      current = i;
      steps.forEach((s, idx) => s.classList.toggle('is-active', idx === i));
      const num = i + 1;
      fill.style.width = `${(num / steps.length) * 100}%`;
      progressLabel.innerHTML = `Krok ${num} z ${steps.length}`;
      if (progressTrack) progressTrack.setAttribute('aria-valuenow', String(num));
      backBtn.hidden = i === 0;
      nextBtn.innerHTML = i === steps.length - 1 ? 'Wyślij zapytanie' : NEXT_HTML;
      setError('');
      if (scroll) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

    const stepAnswer = (i) => {
      const names = { 0: 'usluga', 1: 'cel', 3: 'budzet', 4: 'termin' };
      if (!(i in names)) return '';
      const checked = wizard.querySelector(`input[name="${names[i]}"]:checked`);
      return checked ? checked.value : '';
    };

    const validateStep = (i) => {
      if (i === 0 && !stepAnswer(0)) return 'Wybierz obszar projektu, żeby przejść dalej.';
      if (i === 1 && !stepAnswer(1)) return 'Wybierz główny cel projektu.';
      if (i === 3 && !stepAnswer(3)) return 'Wybierz przedział budżetu albo opcję "Potrzebuję rekomendacji".';
      if (i === 4 && !stepAnswer(4)) return 'Wybierz orientacyjny termin startu.';
      if (i === 5) {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const consent = document.getElementById('consent');
        let bad = null;
        [name, email].forEach((f) => {
          const ok = f === email ? isEmail(f.value.trim()) : f.value.trim().length > 0;
          f.classList.toggle('is-invalid', !ok);
          if (!ok && !bad) bad = f;
        });
        if (bad) return bad === email ? 'Podaj poprawny adres e-mail.' : 'Podaj imię, żebyśmy wiedzieli, do kogo piszemy.';
        if (!consent.checked) return 'Zaznacz zgodę na kontakt. Bez niej nie możemy odpowiedzieć na zapytanie.';
      }
      return '';
    };

    const submit = () => {
      if (submitting) return;
      submitting = true;
      wizard.classList.add('is-loading');
      nextBtn.textContent = 'Wysyłanie…';
      const svc = serviceValue();

      const finish = (ok) => {
        track('form_submit', { form_type: 'konfigurator', service: svc, status: ok ? 'sukces' : 'blad' });
        if (ok) {
          window.location.href = wizard.dataset.thanksUrl || 'dziekujemy.html';
        } else {
          submitting = false;
          wizard.classList.remove('is-loading');
          nextBtn.textContent = 'Wyślij zapytanie';
          setError('Nie udało się wysłać zapytania. Spróbuj ponownie albo napisz na hello@codeandpixel.io.');
        }
      };

      if (!/^https?:\/\//.test(FORM_ENDPOINT)) {
        console.warn('[wizard] FORM_ENDPOINT nieskonfigurowany — tryb demo, zapytanie NIE zostało wysłane.');
        finish(true);
        return;
      }

      fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(wizard),
        headers: { Accept: 'application/json' }
      })
        .then((res) => finish(res.ok))
        .catch(() => finish(false));
    };

    const next = () => {
      const err = validateStep(current);
      if (err) { setError(err); return; }
      markStarted();
      track('form_step', { step: current + 1, answer: stepAnswer(current) || 'uzupelniono' });
      if (current === steps.length - 1) { submit(); return; }
      if (current === 0) syncConditional();
      show(current + 1, true);
    };

    nextBtn.addEventListener('click', next);
    backBtn.addEventListener('click', () => { if (current > 0) show(current - 1, true); });

    wizard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        next();
      }
    });
    wizard.addEventListener('submit', (e) => e.preventDefault());
    wizard.addEventListener('change', (e) => {
      markStarted();
      setError('');
      if (e.target.name === 'usluga') syncConditional();
      if (e.target.classList) e.target.classList.remove('is-invalid');
    });
    wizard.querySelectorAll('input, textarea').forEach((f) => {
      f.addEventListener('input', () => { f.classList.remove('is-invalid'); setError(''); });
    });

    /* Załącznik: nazwa pliku + limit rozmiaru */
    const fileInput = document.getElementById('attachment');
    const fileLabel = document.getElementById('fileLabel');
    const fileLabelText = document.getElementById('fileLabelText');
    if (fileInput) {
      fileInput.addEventListener('change', () => {
        const f = fileInput.files && fileInput.files[0];
        if (!f) {
          fileLabel.classList.remove('has-file');
          fileLabelText.textContent = 'Dodaj brief lub plik (opcjonalnie, max 10 MB: PDF, DOC, ZIP, PNG, JPG)';
          return;
        }
        if (f.size > MAX_FILE_MB * 1024 * 1024) {
          fileInput.value = '';
          fileLabel.classList.remove('has-file');
          setError(`Plik jest za duży (limit ${MAX_FILE_MB} MB).`);
          return;
        }
        fileLabel.classList.add('has-file');
        fileLabelText.textContent = `Załączono: ${f.name}`;
      });
    }

    /* Preselekcja usługi z parametru ?usluga= (linki z landingów) */
    const preselect = new URLSearchParams(window.location.search).get('usluga');
    if (preselect) {
      const radio = wizard.querySelector(`input[name="usluga"][value="${preselect}"]`);
      if (radio) radio.checked = true;
    }

    syncConditional();
    show(0, false);
  }

  /* ===== Portfolio filter (brief 6.1 — linkowalne filtry przez #hash) ===== */
  const filterContainer = document.querySelector('.filter-chips');
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  if (filterContainer && portfolioCards.length) {
    const applyFilter = (cat) => {
      const chip = filterContainer.querySelector(`.filter-chip[data-filter="${cat}"]`);
      if (!chip) return;
      filterContainer.querySelectorAll('.filter-chip').forEach((c) => c.classList.remove('filter-chip--active'));
      chip.classList.add('filter-chip--active');
      let shown = 0;
      portfolioCards.forEach((card) => {
        const cats = (card.dataset.category || '').split(' ');
        const match = cat === 'all' || cats.indexOf(cat) !== -1;
        card.classList.toggle('is-hidden', !match);
        if (match) shown += 1;
      });
      const empty = document.getElementById('filterEmpty');
      if (empty) empty.hidden = shown > 0;
    };

    filterContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;
      const cat = chip.dataset.filter;
      applyFilter(cat);
      history.replaceState(null, '', cat === 'all' ? window.location.pathname : `#${cat}`);
    });

    const hashCat = window.location.hash.replace('#', '');
    if (hashCat) applyFilter(hashCat);
  }

  /* ===== FAQ accordion ===== */
  document.querySelectorAll('.faq').forEach((faq) => {
    faq.addEventListener('click', (e) => {
      const trigger = e.target.closest('.faq__question');
      if (!trigger) return;
      const item = trigger.closest('.faq__item');
      const answer = item.querySelector('.faq__answer');
      const isOpen = item.classList.contains('faq__item--open');

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

  /* ===== Spis treści artykułu — podświetlenie bieżącej sekcji ===== */
  const toc = document.querySelector('.article-toc');
  if (toc && 'IntersectionObserver' in window) {
    const links = Array.from(toc.querySelectorAll('a[href^="#"]'));
    const targets = links
      .map((a) => document.getElementById(a.getAttribute('href').slice(1)))
      .filter(Boolean);
    const setCurrent = (id) => {
      links.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href') === `#${id}`));
    };
    const tocIo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setCurrent(entry.target.id);
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    targets.forEach((t) => tocIo.observe(t));
  }

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

    document.querySelectorAll('.service-card, .svc-card, .pillar-card, .why-item, .tech-item, .scenario-card, .post-card, .case, .stat, .section-head, .service-block, .portfolio-card, .kpi-card, .process-step, .case-block').forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 600ms ease, transform 600ms cubic-bezier(0.4, 0, 0.2, 1)';
      io.observe(el);
    });
  }

  /* ===== Immersive scroll-video scene (home) =====
     Two clips scrubbed by scroll: clip 1 = sky → dive, clip 2 = underwater.
     The hand-off (last frame of 1 == first frame of 2 == "the dive") is
     timed to land on the "Realizacje" (portfolio) section. */
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
      handoff = diveAnchor
        ? clamp(diveAnchor.offsetTop - window.innerHeight * 0.55, 1, maxScroll)
        : maxScroll * 0.5;
    };

    const seek = (video, t) => {
      if (Math.abs(video.currentTime - t) > 0.01) {
        try { video.currentTime = t; } catch (e) { /* not seekable yet */ }
      }
    };

    const update = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      if (y <= handoff) {
        phase = 1;
        seek(v1, clamp(y / handoff, 0, 1) * dur1);
      } else {
        phase = 2;
        seek(v1, dur1);
        seek(v2, clamp((y - handoff) / (maxScroll - handoff), 0, 1) * dur2);
      }
      const v2active = phase === 2;
      v2.classList.toggle('scene__video--active', v2active);
      v1.classList.toggle('scene__video--active', !v2active);
    };

    const prime = (v) => { const p = v.play(); if (p && p.then) p.then(() => v.pause()).catch(() => {}); };

    prime(v1);
    prime(v2);
    const refresh = () => { measure(); update(); };
    [v1, v2].forEach((v) => ['loadedmetadata', 'loadeddata', 'canplay'].forEach((ev) => v.addEventListener(ev, refresh)));
    refresh();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', refresh);
    window.addEventListener('load', refresh);
  }

  /* ===== Usługi — taby (home) ===== */
  const svcTabs = Array.from(document.querySelectorAll('[data-svc-tab]'));
  if (svcTabs.length) {
    const svcPanels = svcTabs.map((t) => document.getElementById('svc-panel-' + t.dataset.svcTab));

    const activate = (idx, focus) => {
      svcTabs.forEach((tab, i) => {
        const on = i === idx;
        tab.classList.toggle('svc-tab--active', on);
        tab.setAttribute('aria-selected', on ? 'true' : 'false');
        tab.tabIndex = on ? 0 : -1;
        if (svcPanels[i]) {
          svcPanels[i].classList.toggle('svc-panel--active', on);
          svcPanels[i].hidden = !on;
        }
      });
      if (focus) svcTabs[idx].focus();
      track('services_tab', { service: (svcTabs[idx].querySelector('.svc-tab__label') || {}).textContent });
    };

    svcTabs.forEach((tab, i) => {
      tab.addEventListener('click', () => activate(i, false));
      tab.addEventListener('keydown', (e) => {
        let next = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % svcTabs.length;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + svcTabs.length) % svcTabs.length;
        else if (e.key === 'Home') next = 0;
        else if (e.key === 'End') next = svcTabs.length - 1;
        if (next !== null) { e.preventDefault(); activate(next, true); }
      });
    });
  }
})();
