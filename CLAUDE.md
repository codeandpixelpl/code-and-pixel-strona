# Code & Pixel — strona agencji

Multi-page strona agencji interaktywnej **Code & Pixel** (klient PROUP).

## Stan projektu (2026-08-07) — proces /strona, etap 4

Projekt prowadzi `/strona` (adopcja w miejscu, struktura folderów sprzed procesu).
Notion: https://app.notion.com/p/7e8581ec73fb4d5f8af76cff72c8ec16

**Wersja robocza = NOWA strona z Figmy** (jasne tło, niebieski gradient
`#2c5fd8→#4d7cea`, Manrope+Inter, style inline w każdym pliku — bez wspólnego CSS).
**Etap 4 zamknięty 2026-08-07**: wszystkie podstrony w nowym stylu — index, 7 usług
(płasko w korzeniu), o-nas, realizacje + 8 case studies (`portfolio/`), wiedza
+ artykuł (`wiedza/`), kontakt, dziekujemy, 404, polityka-prywatnosci.
Strony zastąpione usunięte z drzewa (uslugi/, portfolio.html, css/, js/) — żyją
w tagu `redesign-brief`. Obrazy to placeholdery (gradient „IMG"), do wygenerowania.

**2026-08-14 — wszystkie case'y przeniesione do kontenera.** Po teście na worktree
(`eksperyment/klimaty-w-kontenerze`) Grzegorz wybrał wersję w kontenerze zamiast
pełnoekranowej. Każdy z pięciu case'ów ma na końcu CSS blok `SEKCJE W KONTENERZE`:
sekcje z własnym tłem zwężone do 1180 px i zaokrąglone, sekcje na tle strony bez zmian.
Blok jest wydzielony, więc powrót to jego usunięcie. To samo trafiło do szablonu skilla.
Trzy starsze case'y (sufity-led, miasteczko-witkowice, tct-tools) miały treść już
w `.container`, więc u nich blok zwęża tylko przygaszone tło sekcji (`.csec--tint`).
**Wszystkie osiem case'ów jest teraz w jednym rytmie**, z jednym świadomym wyjątkiem:
**SLF Transport ma tła pełnej szerokości, a w kontenerze tylko treść** (decyzja Grzegorza
2026-08-14). Powód: ta marka jest plakatowa i ma mocne, kontrastowe pasy, które lepiej
działają od krawędzi do krawędzi. Przy okazji `.dirs` dostało `--bg-2` (#141414) zamiast
`--bg` (#0A0A0A), bo stykało się z `.band` w jeden nierozróżnialny ciemny pas.
Sąsiadujące sekcje mają teraz naprzemienne tony plus cienką kreskę w kolorze akcentu.

Dwie rzeczy, które ta zmiana odsłoniła i które trzeba sprawdzać przy nowych case'ach:
- **`vw` nie wie o kontenerze.** Typografia zwężonych sekcji poszła na
  `container-type:inline-size` + `cqw`. Bez tego „Manrope" łamało się na dwie linie.
- **Przypięte tory poziome** (ściana znaków w wild-campers, filmstrip w akademii)
  liczyły przesuw względem `window.innerWidth`. Teraz `parentElement.clientWidth`,
  inaczej ostatni kafel nie dojeżdżał. Sprawdzone: tor 3464 px, rama 1180, koniec −2284.

**2026-08-13 — case study `portfolio/akademia-okocimskiego.html`** (sklep klubowy).
Źródło: `01 - Projekty AI/07c - Sklep Akademia Okocimskiego (dark green)` — **najdalej
rozwinięta wersja** (6 commitów, własne repo `sklep-akademia-okocimskiego_02`), nie folder
bez sufiksu ani `07b`. Pierwszy sklep w portfolio, więc karta ma `data-cat="sklep"`
i wchodzi pod filtr E-commerce.

Znowu inna kompozycja (krok 3a skilla):
- **Żywa karta produktu** jako otwarcie: przełączanie pięciu produktów, wybór rozmiaru,
  koszyk liczący sumę i próg darmowej dostawy. `PRODUKTY` i `PROG_DOSTAWY` przepisane
  1:1 z `PRODUCTS` i `FREE_SHIP_THRESHOLD` w `index.html` sklepu.
- **Filmstrip ścieżki zakupowej**: sekcja przypięta na 320vh, cztery ekrany
  (strona główna → kategoria → produkt → checkout) jadą w bok, pasek postępu pod spodem.
- **Arkusz komponentów** zamiast ściany kolorów: przycisk, cena z przeceną, rozmiar
  niedostępny, paleta, kroje, próg dostawy, pasek zaufania — w naturalnej wielkości.
- **Dwa telefony** zamiast trzech w rzędzie czy stosu.

**Świadomie nie dorobiłem Omnibusa.** Sklep ma `oldPrice` przy produktach, ale nigdzie
nie pokazuje „Najniższej ceny z 30 dni". Case pokazuje stan faktyczny; luka zgłoszona
Grzegorzowi osobno (`/sklep compliance`).

Kolejność prev/next: klimaty-wola → wild-campers → monza → slf-transport →
akademia-okocimskiego → sufity-led → miasteczko-witkowice → tct-tools → klimaty-wola.

**2026-08-13 — case study `portfolio/slf-transport.html`** (SLF Transport & Removals).
Źródło: `01 - KLIENCI/SLF Transport i przeprowadzki/01 - Strona Internetowa`.

**Pierwszy case złożony świadomie w innym układzie** — na prośbę Grzegorza, żeby case'y
nie wyglądały jak sztanca. Reguła i tabela wariantów siedzą teraz w kroku 3a skilla.
Ten case nie ma pasa jadącego w bok, ściany kolorów ani telefonów w rzędzie:
- **pasmo wideo** z hasłem „We handle with care" zamiast repliki hero
- **ściana kierunków**: 21 landingów kierunkowych, najechanie na kraj podmienia zrzut
  jego podstrony (sticky podgląd obok listy). To wyróżnik projektu, więc dostał najwięcej miejsca
- **dwie kolumny zrzutów z przesunięciem** zamiast pasa
- **tokeny jako techniczna tabela** (nazwa / wartość / próbka / opis) zamiast ściany kolorów
- **telefony w stosie** z obrotem zamiast w rzędzie

Zrzuty: `zrzuty.py --glob "*.html,kierunki/*.html"` (nowa opcja, wchodzi w podfoldery)
plus `--pomin` na strony wewnętrzne, których nie wdrażamy (`prototypy.html`, `prezentacja-ia.html`).
Paleta i kroje z `css/style.css`: `--bg #0A0A0A`, `--accent #FEAF03`, Anton + Inter + JetBrains Mono.

**Pułapka, która kosztowała podejście:** `.dirs` miało `overflow:hidden` i zabijało
`position:sticky` na podglądzie kierunku. Tabela tokenów rozpychała stronę na 390 px,
więc dostała własny kontener `overflow-x:auto`.

Kolejność prev/next po dołożeniu: klimaty-wola → wild-campers → monza → slf-transport →
sufity-led → miasteczko-witkowice → tct-tools → klimaty-wola.

**2026-08-13 — case study `portfolio/monza.html`** (MONZA baseny & SPA).
Źródło: `01 - Projekty/08 - Monza Baseny - v2 - COPY` — **mimo nazwy to wersja bieżąca**
(najnowszy commit, 15 podstron, deploy na Pages). Live: https://codeandpixelpl.github.io/monza-baseny/

- **Demonstrator pominięty świadomie**: to strona marketingowa, nie ma ścieżki wartej
  klikania. W jego miejsce **żywa skala typograficzna** — sześć kroków skali projektu
  złożonych Frauncesem, z prawdziwymi formułami `clamp()` obok. Projekt jest zbudowany
  na skali, więc to jest jego mechanizm.
- **Replika hero** z prawdziwym `hero.mp4`: pasek godzin showroomu, logo SVG wyciągnięte
  z inline'a w `index.html`, nawigacja, telefon i nagłówek w Frauncesie.
- Paleta i kroje z `:root` **w `index.html`, nie z `assets/style.css`** (ten drugi to
  starszy arkusz z inną paletą). Fraunces + JetBrains Mono z Google Fonts, więc ten case
  nie ma zależności od licencji Adobe.
- Zrzuty wymusiły poprawkę w `zrzuty.py`: automat czekał za krótko i łapał hero w połowie
  animacji `rise` oraz przed pierwszą klatką wideo. Skrypt czeka teraz na `loadeddata`
  wideo i na `document.getAnimations()`.

Kolejność prev/next po dołożeniu: klimaty-wola → wild-campers → monza → sufity-led →
miasteczko-witkowice → tct-tools → klimaty-wola.

**2026-08-13 — case study `portfolio/wild-campers.html`** (Wild Campers, wynajem kamperów).
Pierwszy case złożony skillem `/case-study` z szablonu, nie ręcznie.
Źródło: `01 - CodeandPixel/02 - WIld campers/02 - Strona internetowa/03 - Design`
(17 podstron, wizard rezerwacji, panel obsługi). Assety: `assets/case-wild-campers/`.

- **Zrzuty**: `zrzuty.py --ukryj ".wf-bar"` — prototyp ma wewnętrzny pasek podglądu
  podstron, który nie ma prawa trafić do portfolio. Plus `--stan` na zakładki panelu
  admina (kalendarz, flota).
- **Materiał z dwóch dostaw klienta.** Poza stroną (`02 - Strona internetowa/03 - Design`)
  case korzysta z prezentacji marki (`01 - Logo/www`): `assets/case-wild-campers/logo/`
  ma prawdziwe `hero.mp4`, pięć wersji znaku w SVG, teksturę `topo.webp` i zdjęcia sekcji.
- **Replika hero** (`.stage`) — hero brand boardu z prawdziwym wideo, nie zrzut.
  Fallback na plakat przy `prefers-reduced-motion` i przy zablokowanym autoodtwarzaniu.
- **Pas zrzutów: trzy rzędy po skosie** (`.marq__rot`, obrót -7°, kafel `min(40vw,600px)`).
  Wersja z dwoma prostymi rzędami była za mała, żeby cokolwiek na zrzucie odczytać.
  Wzorzec wrócił do `~/.claude/data/case-study/szablon.html`; **Klimaty Wola mają
  jeszcze starą, prostą taśmę** — do wyrównania, gdy Grzegorz zdecyduje.
- **Ściana znaków** (`.marks`) — odtworzony mechanizm z brand boardu: tło topo stoi,
  poziomo jadą tylko karty ze znakiem, pasek postępu pod spodem. Napęd w tej samej
  pętli rAF co reszta strony (`marksTravel`, progres sekcji sticky).
- **Demonstrator: flota → pojazd → wycena.** `FLOTA`, `DODATKI`, `NOLIMIT_ZA_DOBE`,
  `KAUCJA` i formuła `wycena()` przepisane 1:1 z `app.js` prototypu. Kalkulator liczy
  realnie: suwak dni, wariant przebiegu, dodatki, zaliczka 30%, kaucja.
  **Przy zmianie cennika u klienta trzeba zaktualizować dane również tutaj.**
- Paleta i krój z `design.css` klienta: Pine `#213627`, Pine 900 `#101D14`,
  Amber `#D28923`, Sand `#FBF9F5`, Line `#CEC5B3`, Mid `#5F6D62`;
  nagłówki `poster-gothic-round-cond-atf` (Adobe Fonts, Web Project `ane1jru`).
- Tło ciemnej sekcji to `#0a1310`, o ton ciemniej niż Pine 900, żeby pas tego koloru
  nie zniknął w tle.

Kolejność prev/next po dołożeniu: klimaty-wola → wild-campers → sufity-led →
miasteczko-witkowice → tct-tools → klimaty-wola.

**2026-08-13 — case study `portfolio/klimaty-wola.html`** (Apartamenty Klimaty Wola).
Pierwszy case z prawdziwymi materiałami zamiast placeholderów, źródło:
`01 - CodeandPixel/01 - Strona Apartamenty Klimaty Wola/02 - Design/`
(zrzuty robione Playwrightem z serwera na porcie 8812). Assety: `assets/case-klimaty/`.

Ten case **nie jest galerią zrzutów**, tylko dwoma działającymi replikami interfejsu
klienta osadzonymi w stronie agencji:
- **Replika hero** (`.kwstage`) — prawdziwe `hero.webm`/`hero.mp4` z projektu, warstwa
  przyciemniająca, pasek nawigacji i sekwencja sterowana przewijaniem: pętla rAF ustawia
  `--zoom` i `--reveal`, blok tytułowy podnosi się o zmierzoną wysokość `--lateH`,
  dokładnie jak na oryginalnej stronie.
- **Demonstrator wyboru lokalu** (`.dm`, krok 01 → 02 → 03) — klikalny plan osiedla
  z hotspotami D1–D6, filtrowana lista 10 lokali, karta lokalu z galerią, rzutem SVG
  i zestawieniem pomieszczeń. **Dane w `UNITS` / `BUILDINGS` / `D4A_ROOMS` są przepisane
  1:1 z tabeli lokali i karty mieszkania D4A** — przy zmianie danych u klienta trzeba
  je zaktualizować tutaj. Pełny rzut i pomieszczenia mamy tylko dla D4A (wzorzec),
  pozostałe lokale dostają notkę o szablonie zamiast zmyślonych liczb.

Układ strony (2026-08-13, po rundzie uwag Grzegorza): hero → replika hero →
dwupasmowy marquee reagujący na prędkość scrolla → pełnoekranowa ściana palety
i dwa kroje → demonstrator → telefony → galeria → prev/next → CTA. Nagłówki
wjeżdżają liniami spod maski (`splitLines` przelicza łamanie przy resize).
Wszystkie efekty wyłączone przy `prefers-reduced-motion`.

**Reguły tej strony, ustalone przez Grzegorza — obowiązują też w kolejnych case'ach:**
- **Zrzuty nigdy nie przycięte.** Żadnego `object-fit:cover` ani wymuszonego
  `aspect-ratio` na kontenerze ze zrzutem: `width:100%;height:auto` i układ dopasowuje
  się do obrazu, nie odwrotnie. Przycięty z boku i od dołu zrzut nie mówi, co przedstawia.
- **Minimum tekstu.** Portfolio ma pokazywać projekty, nie opisywać je. Prozy nie
  piszemy „na zapas": jedno zdanie leadu, etykiety sekcji, krótkie nagłówki. Nagłówki
  rzeczowe, nie obrazowe („Układ na 390 px", nie „Ten sam spokój na 390 px").
- **Sekcje na pełną szerokość**, od krawędzi do krawędzi (`.wide` / bez kontenera).
- **Minimalna nawigacja**: przyciski z cienką ramką, bez pasków, plakietek i numerów.

Usunięte w tej rundzie (nie przywracać bez prośby): sekcja „Projekt w liczbach",
okno przeglądarki z długim zrzutem, sticky split z trzema akapitami o podejściu,
pokaz zrzutów pod kątem (perspektywa), okruszki i plakietka „Strona internetowa"
w hero, cytat zamykający.

**Zależność zewnętrzna:** `<link>` do Adobe Fonts (`use.typekit.net/bhr3ncf.css`) dla
kroju **spalla** użytego w obu replikach. Działa na localhost i GitHub Pages z licencji
Adobe Grzegorza; przy handoffie do klienta trzeba to ustalić. Fallback: Georgia.

Miniatury: `card.jpg` (karta na `realizacje.html`, zrzut strony) i `card-wide.jpg`
(slider na `index.html`, czysty render bez tekstu, bo etykieta leży na obrazie).

Kolejność prev/next: klimaty-wola → sufity-led → miasteczko-witkowice → tct-tools →
klimaty-wola.

**Bez zmyślonych KPI i bez cytatu klienta.** Sekcje „Projekt w liczbach" i „Pełna
podstrona" (okno przeglądarki z długim zrzutem) zostały usunięte na życzenie
Grzegorza 2026-08-13. Nagłówki mają być rzeczowe, nie obrazowe — patrz zasada
o języku dokumentacji w globalnym CLAUDE.md.

**Stara wersja (redesign wg briefu, Deep Navy/Magenta) = tag `redesign-brief`.**
Podgląd starej obok nowej: `git worktree add /tmp/podglad-redesign-brief redesign-brief`
+ wpis w launch.json na wolny port; po obejrzeniu `git worktree remove ...`.
Żadnych kopii folderów i żadnych sufiksów `-nowa`/`-v2` w nazwach plików.

Etapy /strona: 0–3 odhaczone (brief ✓, struktura = docs/architecture.md ✓,
kierunek = prototyp z Figmy ✓, visual-direction.md do uzupełnienia).
Następne: 5 · styleguide (tokens.css), 6 · QA, 7 · feedback, 8 · delivery.
Rytuał po każdym etapie: commit → odhacz w Notion → zaktualizuj „Następny krok".

**UWAGA:** sekcje poniżej (konfigurator, analityka, komponenty CSS, cache-busting
`?v=`) opisują wersję z taga `redesign-brief`. Dla stron w starym stylu nadal
obowiązują; nowa wersja ma style inline i własne wzorce — aktualizuj ten plik,
gdy nowa wersja przejmie kolejne podstrony.

Historia prac i otwarte punkty (wymagające klienta): [docs/PLAN-PRACY.md](docs/PLAN-PRACY.md).

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

1. Skopiuj `portfolio/klimaty-wola.html` (bogaty szablon ze zrzutami) albo
   `portfolio/sufity-led.html` (prosty) jako `portfolio/<slug>.html`
2. Wymień tytuł, breadcrumb, tag, metryczkę i treści sekcji
3. Zrzuty projektu do `assets/case-<slug>/`, JPG, desktop 1760 px szer. / q82,
   długie zrzuty 1100 px / q76, mobile 640 px / q84
4. Dodaj kartę w `realizacje.html` (sekcja `.rlz-grid`) z `data-cat="strona|sklep|crm|google-ads|allegro-ads"`
5. Zaktualizuj prev/next nav w sąsiednich case'ach (pierścień, nie lista)

## Jak odpalić

```bash
python3 -m http.server 8767 --directory "/Users/prouopstudio/Claude/01 - Projekty/code-and-pixel-strona"
# → http://localhost:8767
```

Albo przez preview launcher: nazwa **`code-and-pixel`** w launch.json (port 8767).

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
