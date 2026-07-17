# Code & Pixel — strona agencji

Multi-page strona agencji interaktywnej **Code & Pixel** (klient PROUP).

## Stan projektu (2026-07-13)

**Redesign wg briefu ukończony i zweryfikowany.** Historia prac i otwarte
punkty (wymagające klienta): [docs/PLAN-PRACY.md](docs/PLAN-PRACY.md).
UWAGA: przy każdej zmianie css/style.css lub js/main.js podbij wersję
`?v=` w linkach wszystkich HTML (cache-busting).

## Architektura

**Przeczytaj PRZED dodaniem strony, sekcji lub zmianą nawigacji:**
[docs/architecture.md](docs/architecture.md) — mapa serwisu (Mermaid), flow
konfiguratora, tabela component reuse, poziomy głębi tła, plan zdarzeń
analitycznych. Brief klienta: [brief.md](brief.md). Decyzje podjęte bez
klienta (z listą [DO POTWIERDZENIA]): [docs/DECYZJE.md](docs/DECYZJE.md).

Od 2026-07-13 projekt realizuje brief klienta: paleta Deep Navy `#071525` /
Code Magenta `#D20A45` / Soft Mint `#9FD6C8`, 7 landingów usług w `uslugi/`,
konfigurator 6-krokowy w kontakt.html, mega menu Budujemy / Napędzamy /
Rozwijamy. W UI „portfolio" nazywa się **Realizacje** (pliki bez zmian).

## Stack

- **Pure HTML/CSS/JS** (bez build stepa)
- Manrope (Google Fonts)
- BEM-light naming (`.block__element--modifier`)
- Inline SVG dla wszystkich ikon (brak ikon-libów)
- Brak external JS dependencies

## Architektura (multi-page)

```
code-and-pixel-strona/
├── index.html              # Home — 10 sekcji wg briefu (hero "Nadajemy cyfrowy kierunek…")
├── uslugi.html             # Indeks usług: Budujemy / Napędzamy / Rozwijamy
├── uslugi/                 # 7 landing pages usług (wspólny szablon briefu 5.1)
│   ├── strony-internetowe.html    # WZORZEC szablonu landingu
│   ├── sklepy-internetowe.html
│   ├── crm-systemy.html
│   ├── aplikacje-webowe.html
│   ├── google-ads.html
│   ├── allegro-ads.html
│   └── opieka-rozwoj.html
├── portfolio.html          # "Realizacje" (label w UI) — filtry wg briefu 6.1
├── portfolio/              # Case studies (sufity-led, miasteczko-witkowice, tct-tools)
├── o-nas.html              # Historia, model współpracy, filary
├── wiedza.html             # Lista artykułów (6 kategorii)
├── wiedza/                 # Artykuły (szablon: jak-wybrac-platforme-sklepu.html)
├── kontakt.html            # KONFIGURATOR 6 kroków (wizard, brief 7.4)
├── dziekujemy.html         # Thank you (redirect po submit)
├── 404.html
├── polityka-prywatnosci.html  # SZKIELET — wymaga weryfikacji prawnej
├── css/style.css           # tokeny (paleta briefu) + legacy + sekcja "BRIEF 2026-07"
├── js/main.js              # menu, wizard, analytics (dataLayer), filtry, slider, scene
├── brief.md                # brief klienta (ekstrakt z docx)
├── docs/
│   ├── architecture.md     # mapa serwisu Mermaid + component reuse
│   ├── DECYZJE.md          # decyzje podjęte bez klienta [DO POTWIERDZENIA]
│   └── ASSETS.md           # lista grafik + prompty
└── CLAUDE.md               # ten plik
```

## Konfigurator (kontakt.html)

6 kroków: potrzeba → cel → zakres (pola zależne od usługi, `data-for-service`)
→ budżet (dwie skale: projektowa / miesięczna Ads) → termin → dane + RODO.
Preselekcja usługi: `kontakt.html?usluga=strona|sklep|crm|aplikacja|google-ads|allegro-ads|opieka`.
**Submit**: `FORM_ENDPOINT` w [`js/main.js`](js/main.js) to placeholder — dopóki
nie jest URL-em http, działa tryb demo (redirect na dziekujemy.html bez wysyłki).
Przed produkcją podmień na endpoint Formspree/backend.

## Analityka

Zdarzenia (brief 8.3) pushowane do `window.dataLayer`: `cta_click`
(`[data-cta]`), `service_open` / `case_study_open` / `contact_click`
(`[data-analytics]`), `form_start` / `form_step` / `form_submit` (wizard).
Snippet GA4/GTM: placeholder w `<head>` — ID dostarczy klient.

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

Albo przez preview launcher: nazwa **`code-and-pixel`** w launch.json (port 8792).

## Co wymaga uzupełnienia

Patrz [docs/ASSETS.md](docs/ASSETS.md):
- 11 obrazków rastrowych do wygenerowania w NanoBanana 2 / Freepik Spaces
- 6 logotypów klientów do podmiany w pasku `.logos__track`

Do tego czasu placeholdery są wbudowane w CSS (gradient + "IMG" etykieta).

## Form submit

Stary formularz mailto USUNIĘTY. Obowiązuje konfigurator (sekcja wyżej):
endpoint w [`js/main.js`](js/main.js) → stała `FORM_ENDPOINT`.

## Responsywność

- Desktop ≥ 1025 px — układ 2-col w usługach i kontakcie, 3-pole portfolio
- Tablet 641–1024 px — usługi 1-col (visual + body obok), kontakt 1-col
- Mobile ≤ 640 px — wszystko stack, hamburger menu, form 1-col

Breakpointy: 640, 1024.

## Compliance

Pierwsza wersja — **nie sklep**, więc bez Omnibus/Cookie banner.
Jeśli rozszerzy się o zapis newslettera → wymaga checkbox z RODO
(patrz `~/.claude/data/sklep/templates/newsletter-rodo.js`).
