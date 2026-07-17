# Decyzje projektowe — Code & Pixel
**Data:** 2026-07-13
Decyzje podjęte bez odpowiedzi klienta, żeby nie blokować pracy.
Każda oznaczona [DO POTWIERDZENIA] wymaga akceptacji przed publikacją.

## 1. Stack — pure HTML/CSS/JS, bez build stepa
Zostaje obecny stack projektu. Blog (Wiedza) jako statyczne HTML z szablonem
artykułu; workflow dodawania w CLAUDE.md. Jeśli klient zechce CMS, migracja
treści jest prosta (semantyczny HTML). [DO POTWIERDZENIA]

## 2. Backend formularza — Formspree (placeholder)
Konfigurator wysyła przez `fetch` na endpoint Formspree; ID endpointu jako
placeholder `FORM_ENDPOINT` w `js/main.js`. Autoresponder po stronie
Formspree. Załącznik: max 10 MB, PDF/DOC/ZIP/PNG/JPG. Mailto usunięte
(nie obsłuży konfiguratora). [DO POTWIERDZENIA — docelowy endpoint]

## 3. Przedziały budżetowe konfiguratora (krok 4)
do 10 tys. zł / 10–25 tys. zł / 25–60 tys. zł / 60–120 tys. zł /
ponad 120 tys. zł / „potrzebuję rekomendacji".
Dla usług reklamowych (Google/Allegro Ads) osobna skala miesięczna:
do 3 tys. / 3–10 tys. / 10–30 tys. / ponad 30 tys. / „potrzebuję rekomendacji".
[DO POTWIERDZENIA — klient ma dopasować do modelu sprzedaży]

## 4. KPI w case studies — tylko dane już opublikowane
Używamy wyłącznie liczb z istniejących case studies (Sufity LED, Miasteczko
Witkowice, TCT Tools). Nowe wyniki dopiero po dostarczeniu przez klienta.
Format wg briefu: liczba + kontekst (okres, punkt odniesienia).

## 5. Logotypy partnerów — tekstowe badge do czasu dostarczenia plików
Google Partner i Allegro Ads Partner jako typograficzne badge (bez
podrabiania oficjalnych znaków). Podmiana na oficjalne logotypy po
dostarczeniu plików i potwierdzeniu prawa użycia. [BLOKER przed publikacją]

## 6. Zespół — model pracy zamiast zdjęć
Sekcja "O nas" pokazuje model współpracy i role, bez stockowych twarzy
(zgodnie z briefem 7.1). Zdjęcia zespołu można dodać później.

## 7. Wiedza na start — szablon + 3 artykuły zalążkowe
Lista z wyróżnionym artykułem + siatką. Jeden pełny artykuł wzorcowy
(szablon), dwa jako zapowiedzi. Bez wyszukiwarki i filtrów (brief: dopiero
gdy liczba treści je uzasadni).

## 8. Typografia — Manrope + JetBrains Mono
Manrope zostaje (jest na liście briefu, ciągłość z obecną stroną) dla
nagłówków i body. JetBrains Mono oszczędnie: etykiety, dane, znaczniki
nawigacyjne. Razem 2 rodziny — zgodnie z limitem briefu.

## 9. Nazewnictwo plików — bez zmiany istniejących ścieżek
`portfolio.html` + `portfolio/` zostają (nie psujemy linków), ale label
w UI to „Realizacje". Nowe landingi w folderze `uslugi/`. Filtry realizacji
wg briefu 6.1 (linkowalne przez `#hash`).

## 10. Status w footerze — pomijamy
„Przyjmujemy projekty na [okres]" wymaga aktualizowania; brief każe go dać
tylko wtedy. Do włączenia, gdy klient zadeklaruje aktualizację.

## 11. Analityka — dataLayer (GA4-ready)
Zdarzenia z pkt 8.3 briefu pushowane do `window.dataLayer`. Snippet GA4/GTM
jako komentarz-placeholder w `<head>` — ID dostarczy klient. [DO POTWIERDZENIA]
