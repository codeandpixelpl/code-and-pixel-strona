# Code & Pixel — strona agencji

Multi-page strona agencji interaktywnej **Code & Pixel** (klient PROUP).

## Stack

- **Pure HTML/CSS/JS** (bez build stepa)
- Manrope (Google Fonts)
- BEM-light naming (`.block__element--modifier`)
- Inline SVG dla wszystkich ikon (brak ikon-libów)
- Brak external JS dependencies

## Architektura (multi-page)

```
code-and-pixel-strona/
├── index.html              # Home — hero "Wypłyń z nami" + skrócone sekcje
├── uslugi.html             # 4 usługi rozbudowane + proces + FAQ
├── portfolio.html          # Grid z filtrem (Wszystkie/Strony/Sklepy/Reklamy/Branding)
├── kontakt.html            # Pełny formularz + info + FAQ kontaktowe
├── portfolio/              # Case studies — każdy projekt = osobna strona
│   ├── sufity-led.html     # Strona wykończeniowa
│   ├── miasteczko-witkowice.html  # Senior living
│   └── tct-tools.html      # Sklep + Omnibus + Allegro ADS
├── css/style.css           # ~1700 linii — motyw sky → wave → underwater + subpages
├── js/main.js              # Mobile menu, slider, form, accordion, filter, active nav
├── assets/
│   ├── images/             # mockupy, awatary, meduza (do wygenerowania)
│   └── icons/              # SVG logotypy klientów (do dostarczenia)
├── docs/
│   └── ASSETS.md           # lista grafik + prompty NanoBanana
└── CLAUDE.md               # ten plik
```

## Spójność cross-page

- **Wspólny header + footer** — duplikowany w każdym pliku, jednorodny markup
- **`<body class="is-subpage">`** — wszystkie podstrony (header staje się dark, hero ma deep gradient zamiast sky)
- **Aktywny link w nav** — `data-nav="<key>"` + JS dodaje `.nav__link--active` na podstawie pathname
- **Breadcrumb** — Start / Sekcja / [Projekt] — na każdej podstronie

## Komponenty wielokrotnego użytku (CSS)

- `.page-hero` — deep hero dla podstron (radial gradients + star field)
- `.page-hero__meta` — pasek statystyk pod tytułem (na uslugi.html)
- `.service-block` (+ `--reverse`) — sekcja usługi (treść+lista+CTA / wizual)
- `.process` + `.process-step` — numbered timeline z linią
- `.faq` + `.faq__item--open` — accordion (JS odpowiada za `max-height`)
- `.filter-chips` — toggle przycisków filtra portfolio
- `.portfolio-card` — karta z overlay i strzałką w prawym górnym (data-category dla filtra)
- `.case-meta` — sticky sidebar w hero case study (6 pól)
- `.case-block` — dwukolumnowy układ label / treść
- `.kpi-card` — gradient number + label + opis
- `.gallery` — masonry-like grid z modifierami `--wide/--half/--third/--full`
- `.case-quote` — duży cytat z avatarem
- `.case-nav` — prev/next nawigacja między case'ami
- `.cta-strip` — pełnoszerokościowy CTA z gradientem
- `.contact-info-card` — glassy info panel obok formularza
- `.consent` — checkbox RODO z labelem

## Workflow dodawania nowego projektu (case study)

1. Skopiuj `portfolio/sufity-led.html` jako `portfolio/<slug>.html`
2. Wymień tytuł, breadcrumb, tag, meta sidebar, treści sekcji, cytat
3. Dodaj kartę w `portfolio.html` (sekcja `.portfolio-grid`) z `data-category="strona|sklep|reklama|branding"`
4. Zaktualizuj prev/next nav w innych case'ach jeśli zmienia się kolejność
5. Wygeneruj hero i gallery images wg promptów w `docs/ASSETS.md`

## Jak odpalić

```bash
python3 -m http.server 8792 --directory "/Users/prouopstudio/Claude/01 - Projekty/code-and-pixel-strona"
# → http://localhost:8792
```

Przez preview launcher: nazwa **`code-and-pixel`** (port 8792).

## Jak odpalić

```bash
python3 -m http.server 8792 --directory "/Users/prouopstudio/Claude/01 - Projekty/code-and-pixel-strona"
# → http://localhost:8792
```

Albo przez preview launcher: nazwa **`code-and-pixel`** w `~/.claude/launch.json` (port 8792).

## Co wymaga uzupełnienia

Patrz [docs/ASSETS.md](docs/ASSETS.md):
- 11 obrazków rastrowych do wygenerowania w NanoBanana 2 / Freepik Spaces
- 6 logotypów klientów do podmiany w pasku `.logos__track`

Do tego czasu placeholdery są wbudowane w CSS (gradient + "IMG" etykieta).

## Form submit

Formularz robi `mailto:hello@codeandpixel.io` z prefilled subject + body.
Do produkcji wymień na endpoint Formspree / własny backend w
[`js/main.js`](js/main.js) → blok `Contact form`.

## Responsywność

- Desktop ≥ 1025 px — układ 2-col w usługach i kontakcie, 3-pole portfolio
- Tablet 641–1024 px — usługi 1-col (visual + body obok), kontakt 1-col
- Mobile ≤ 640 px — wszystko stack, hamburger menu, form 1-col

Breakpointy: 640, 1024.

## Compliance

Pierwsza wersja — **nie sklep**, więc bez Omnibus/Cookie banner.
Jeśli rozszerzy się o zapis newslettera → wymaga checkbox z RODO
(patrz `~/.claude/data/sklep/templates/newsletter-rodo.js`).
