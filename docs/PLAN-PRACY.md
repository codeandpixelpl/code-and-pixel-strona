# PLAN PRACY — redesign Code & Pixel wg briefu klienta
**Stan na:** 2026-07-13, ok. 01:40 — **REDESIGN UKOŃCZONY I ZWERYFIKOWANY** ✅
**Dla:** kolejnej sesji Claude / innych agentów kontynuujących pracę

## AKTUALIZACJA 01:40 — wszystko z listy "CO ZOSTAŁO" wykonane

1. ✅ `polityka-prywatnosci.html` utworzona (szkielet RODO, [do uzupełnienia])
2. ✅ Przegląd po agentach: usunięto 6 fikcyjnych kart z portfolio.html
   (UrbanStore/ToolMax/GreenLab/BuildPro/Aurora/Vita, href="#"), zostały
   3 prawdziwe; wyczyszczono wszystkie myślniki z case studies; usunięto
   wyciek ścieżki `~/.claude/...` z tct-tools; tytuł portfolio → "Realizacje";
   dodano empty state filtrów (#filterEmpty + JS)
3. ✅ Weryfikacja: konfigurator end-to-end (preselekcja ?usluga=, walidacje
   PL, skala budżetu ads vs projekt, submit → dziekujemy.html, dataLayer
   form_start/step/submit), filtry z #hash, linki z home wszystkie 200,
   konsola czysta, mobile OK
4. ✅ Cache-busting: `?v=20260713-3` na wszystkich CSS/JS (przeglądarki
   trzymały stary main.js) — **przy każdej zmianie css/js podbij wersję!**
5. ✅ Fix z-index: `.has-scene > section` lift (nowe sekcje home były pod
   fixed sceną wideo)

**Znany artefakt narzędzia:** Browser pane Claude'a nie maluje poprawnie
strony po programowym scrollu (fixed header ląduje na dole klatki, kafle
nieodmalowane). DOM/layout zweryfikowane w 100%, first-paint screenshoty OK.
Środkowe sekcje home obejrzyj w prawdziwym Chrome (scroll ręczny).

**Nadal otwarte (wymaga klienta):** FORM_ENDPOINT, GA4 ID, logotypy
partnerów, prawdziwe opinie (na home są placeholdery!), dane firmowe
(telefon/adres/NIP), przedziały budżetowe do potwierdzenia, weryfikacja
prawna polityki prywatności. Pełna lista → [DECYZJE.md](DECYZJE.md).

---

## (Archiwum — stan sprzed dokończenia)

## Kontekst (przeczytaj w tej kolejności)

1. [brief.md](../brief.md) — pełny brief klienta (ekstrakt z `~/Downloads/Brief_strony_Code_and_Pixel.docx`)
2. [DECYZJE.md](DECYZJE.md) — decyzje podjęte bez klienta, z listą [DO POTWIERDZENIA]
3. [architecture.md](architecture.md) — mapa serwisu, flow konfiguratora, component reuse
4. [../CLAUDE.md](../CLAUDE.md) — zaktualizowany: struktura plików, konfigurator, analityka

Serwer: launch.json nazwa `code-and-pixel`, port **8792**.

## CO JEST ZROBIONE ✅

| Obszar | Stan |
|---|---|
| brief.md + DECYZJE.md + architecture.md + CLAUDE.md | gotowe |
| Design system: paleta briefu w `css/style.css` | gotowe — `:root` przemapowany (Deep Navy #071525, Ocean Navy #0E2236, Magenta #D20A45, Mint #9FD6C8, Off White #F5F3EE, Cool Gray #536273), stare nazwy varów zostały jako aliasy; nowe komponenty w sekcji `BRIEF 2026-07 — NOWE KOMPONENTY` na końcu pliku (mega menu, trust-bar, pillar-card, why, tech-wall, sticky-cta, wizard, land-section, scenario/scope/compare/related, article/prose/toc, post-card, syspage, footer__grid, sonar, focus-visible, prefers-reduced-motion, svc-grid, hero__points) |
| `index.html` | PRZEBUDOWANY — 10 sekcji wg briefu pkt 4, mega menu, footer 4-kol, sticky CTA, data-cta/data-analytics; scroll-video scene ZOSTAŁA (01/02.scrub.mp4) |
| `uslugi/strony-internetowe.html` | WZORZEC landingu (brief 5.1+5.2) — na nim klonowane pozostałe |
| `uslugi/` 6 pozostałych landingów | utworzone przez agentów (sklepy-internetowe, crm-systemy, aplikacje-webowe, google-ads, allegro-ads, opieka-rozwoj); agent od google/allegro/opieka POTWIERDZIŁ jakość, agent od sklepy/crm/aplikacje padł tuż po utworzeniu plików → **wymagają przeglądu** |
| `uslugi.html` | przebudowany na indeks (3 grupy: #budujemy #napedzamy #rozwijamy) — agent padł po utworzeniu → **przejrzeć** |
| `o-nas.html` | utworzony (brief 7.1) — **przejrzeć** |
| `wiedza.html` + `wiedza/jak-wybrac-platforme-sklepu.html` | utworzone (brief 7.2/7.3) — **przejrzeć** |
| `dziekujemy.html`, `404.html` | utworzone — **przejrzeć** |
| `kontakt.html` | KONFIGURATOR 6 kroków zrobiony ręcznie (pełny, brief 7.4): kroki potrzeba→cel→zakres(zależny od usługi, `data-for-service`)→budżet(2 skale: projekt/ads)→termin→dane+RODO; załącznik z limitem 10 MB |
| `js/main.js` | PRZEPISANY: wizard (walidacja per krok, preselekcja `?usluga=`, submit z guardem, tryb demo gdy FORM_ENDPOINT nie jest URL-em → redirect dziekujemy.html), analityka dataLayer (cta_click, service_open, case_study_open, contact_click, form_start/step/submit), sticky CTA, active-nav dla podfolderów, filtry portfolio linkowalne przez #hash, TOC artykułu z IntersectionObserver |
| `portfolio.html` + 3 case studies | zsynchronizowane przez agenta (mega menu, footer__grid, sticky-cta obecne — grep potwierdził), agent padł w trakcie → **zweryfikować filtry i data-category** |
| Integralność plików | sprawdzona: wszystkie HTML domknięte `</html>` |
| docs/ASSETS.md | dopisane key visuale briefowe + lista od klienta |

## CO ZOSTAŁO 🔴 (w kolejności)

### 1. `polityka-prywatnosci.html` — BRAK PLIKU (krytyczne!)
Linkowana z każdego footera i ze zgody RODO w konfiguratorze. Agent padł
zanim ją utworzył. Zrób wg wytycznych: `<body class="is-subpage">`, header/footer
skopiowane z `kontakt.html` (root, ścieżki bez ../), page-hero z breadcrumbem,
treść w `.article-layout` bez TOC (sam `.prose`): administrator [do uzupełnienia],
cele, podstawy prawne, okres, prawa osoby, `<h2 id="cookies">Cookies</h2>`,
komentarz `<!-- SZKIELET — wymaga weryfikacji prawnej przed publikacją -->`,
meta robots noindex nie dawać (to strona prawna, ma być indeksowalna? — decyzja: bez noindex).

### 2. Przegląd stron po agentach (padli w trakcie, pliki wyglądają na całe)
Dla każdej: czy header = mega menu (wzorzec `uslugi/strony-internetowe.html`),
czy footer = `.footer__grid`, czy jest sticky-cta, czy klasy CSS istnieją
(NIE wymyślać nowych), czy breadcrumb ok, czy brak myślników (—/–) w copy,
czy sieroty związane `&nbsp;`:
- uslugi/sklepy-internetowe.html, crm-systemy.html, aplikacje-webowe.html
- uslugi.html (czy nie ma resztek starej wersji; kotwice #budujemy/#napedzamy/#rozwijamy muszą istnieć bo linkuje do nich index.html i mega menu)
- o-nas.html, wiedza.html, wiedza/jak-wybrac-platforme-sklepu.html, dziekujemy.html, 404.html
- portfolio.html: filtry wg briefu 6.1 = Wszystkie(all)/Strony WWW(strona)/E-commerce(sklep)/Aplikacje i CRM(aplikacja)/Google Ads(google-ads)/Allegro Ads(allegro-ads); data-category kart: sufity-led="strona", miasteczko="strona", tct-tools="sklep allegro-ads"; label w UI "Realizacje"
- portfolio/*.html: 3 case studies — nowy header/footer, treść case NIE zmieniana

### 3. Weryfikacja w przeglądarce (task #10 listy zadań)
Serwer: `preview_start {name: "code-and-pixel"}` → http://localhost:8792
UWAGA: przy poprzedniej próbie tab był współdzielony z agentami i skakał
między stronami — teraz agentów nie ma, będzie stabilnie.
- [ ] index.html: konsola bez błędów, scroll-video działa, mega menu hover, wszystkie linki z home istnieją (żadnego 404)
- [ ] kontakt.html?usluga=sklep: preselekcja radio "sklep" (kod w main.js jest, NIEPRZETESTOWANY przez race na tabie), przejście 6 kroków, walidacja (puste → komunikat), krok 3 pokazuje pola sklepu, krok 4 skala projektowa; dla ?usluga=google-ads krok 4 = skala miesięczna; submit → redirect dziekujemy.html + console.warn o trybie demo; dataLayer zawiera form_start/form_step/form_submit
- [ ] portfolio.html: filtry działają, #hash w URL, karty się filtrują
- [ ] wiedza/jak-wybrac-platforme-sklepu.html: TOC podświetla sekcje przy scrollu
- [ ] mobile 375px (resize_window): hamburger, menu pełnoekranowe z kategoriami, sticky CTA pojawia się po scrollu >520px, svc-grid 1 kolumna
- [ ] linki krzyżowe: z uslugi/*.html do ../portfolio/*, ../kontakt.html?usluga=*; z wiedza/artykułu do ../uslugi/sklepy-internetowe.html
- [ ] screenshot dla usera (home + konfigurator)

### 4. Quality pass (opcjonalnie /quality-audit)
- kontrast tekstu na ciemnych sekcjach (mint #9FD6C8 na navy — ok, cool gray #536273 na navy — sprawdzić)
- grep po wszystkich HTML: `—` i `–` w widocznym copy (poza komentarzami/aria) → zamienić na przecinek/dwukropek/kropkę
- sieroty: ` w `, ` i `, ` z `, ` o `, ` a `, ` u ` przed końcem linii → `&nbsp;`
- czy nigdzie nie została stara nawigacja (grep 'data-nav="portfolio">Portfolio' — powinno być "Realizacje")

### 5. Po wszystkim
- [ ] TaskUpdate: zamknąć taski #5 #6 #7 #8 #10 z listy zadań sesji
- [ ] zaktualizować pamięć: `~/.claude/projects/-Users-prouopstudio-Claude/memory/project_code_and_pixel_strona.md` (dopisać: redesign wg briefu zrealizowany, konfigurator, 7 landingów, FORM_ENDPOINT placeholder)
- [ ] powiedzieć userowi o pytaniach do klienta (BLOKERY z brief.md sekcja "Luki"): przedziały budżetowe, prawdziwe KPI/opinie, logotypy partnerów, deadline, endpoint formularza, dane firmowe (telefon/adres/NIP w footerach = [do uzupełnienia])

## PUŁAPKI / GOTCHAS

- **FORM_ENDPOINT** w `js/main.js` = placeholder `'FORM_ENDPOINT'` → tryb demo (redirect bez wysyłki). Nie "naprawiać" na siłę.
- Stare **opinie w testimonial** na index.html to placeholdery z poprzedniej wersji (UrbanStore, BuildPro, GreenLab) — brief zakazuje fikcyjnych danych, klient MUSI dostarczyć prawdziwe przed publikacją (jest w DECYZJE.md pkt 4).
- **Badge partnerów** są tekstowe (.partner-badge) celowo — nie wstawiać obrazków logotypów bez plików od klienta (DECYZJE.md pkt 5).
- Scroll-video scene na home: `assets/01.scrub.mp4` + `02.scrub.mp4` + `poster.jpg` — działa tylko na index.html (`body.has-scene`), NIE dodawać na podstrony.
- `assets/images/` jest PUSTY — wszystkie obrazki mają onerror→placeholder (gradient). To celowe, prompty w docs/ASSETS.md.
- Filtry portfolio: JS czyta `data-filter` chipów i `data-category` kart (wiele kategorii po spacji), hash w URL linkowalny.
- Strony w podfolderach (uslugi/, wiedza/, portfolio/) mają ścieżki `../` i mega menu z linkami relatywnymi WEWNĄTRZ folderu uslugi/ (bez ../).
- User's rules: bez myślników w PL copy, sieroty przez &nbsp;, copy klienta z briefu 1:1 verbatim.
