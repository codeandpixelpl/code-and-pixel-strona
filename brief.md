# Brief — Code & Pixel (strona agencji)
**Data:** 2026-07-13
**Źródło:** Brief_strony_Code_and_Pixel.docx (klient)
**Projekt:** `01 - Projekty/code-and-pixel-strona/`

## Cel biznesowy
- Generowanie wartościowych zapytań ofertowych (nie samego ruchu)
- Pokazanie pełnego zakresu kompetencji: software house + studio webowe + partner sprzedażowy
- Budowanie zaufania: 14 lat doświadczenia, partnerstwa (Google Partner, Allegro Ads Partner), proces, realizacje, konkretne wyniki
- Dedykowane landing pages usług pod SEO i kampanie
- Skrócenie drogi do kontaktu + wstępna kwalifikacja przez konfigurator projektu
- Skalowalny system wizualny (case studies + artykuły dokładane w przyszłości)

**Pozycjonowanie:** "Code & Pixel — technologia i reklama na jednym kursie."
**Obietnica:** Projektujemy i rozwijamy cyfrowe narzędzia, które pozyskują klientów, automatyzują sprzedaż i wspierają rozwój firm.
**Filary:** Budujemy (www, sklepy, CRM, aplikacje) / Napędzamy sprzedaż (Google Ads, Allegro Ads) / Rozwijamy (analityka, opieka, kolejne wdrożenia).

## Grupa docelowa
| Segment | Potrzeba | Obawa | Musi zobaczyć |
|---|---|---|---|
| MŚP i firmy usługowe | nowa strona, więcej zapytań | agencja nie zrozumie biznesu | proces, przykłady, jasny zakres |
| E-commerce | sklep, integracje, wzrost sprzedaży | problemy techniczne i koszty | case study, technologie, opieka |
| Firmy z procesami wewn. | CRM / aplikacja na miarę | długie, niejasne wdrożenie | etapy, analiza, architektura, bezpieczeństwo |
| Sprzedawcy / producenci | Google Ads / Allegro Ads | przepalony budżet, brak transparentności | partnerstwa, raportowanie, wyniki |

## Ton komunikacji
Profesjonalny, konkretny, partnerski. Technologiczny, ale zrozumiały dla nietechnicznych. Bez superlatywów i żargonu. Motyw oceanu/głębin = pełnoprawny element tożsamości ("głębokie wody internetu", nawigacja, bezpieczne prowadzenie do celu).

## Kierunek wizualny
- **Narracja przestrzenna:** góra = powierzchnia (jasna), scroll = zanurzenie (ciemniejsze, bardziej technologiczne), CTA = światło/kurs ku powierzchni
- **Dozwolone:** powierzchnia wody od dołu, promienie światła, ciemna toń, batymetria, sonar, cyfrowe prądy, ławice punktów danych, batyskaf
- **Zakazane:** piracka stylistyka, kreskówkowe kotwice/stery/koła ratunkowe, tropikalne rafy, pocztówkowy błękit, generyczne stocki
- **System do zaprojektowania:** 3 poziomy głębi tła; 6–10 elementów oceaniczno-technologicznych; warianty key visual (hero/usługi/realizacje/CTA); zasady kontrastu (tekst zawsze na spokojnym tle); uproszczona wersja mobile

### Paleta
| Kolor | HEX | Zastosowanie |
|---|---|---|
| Deep Navy | `#071525` | tła sekcji premium, footer, case studies |
| Ocean Navy | `#0E2236` | karty, hover, ciemne warstwy |
| Code Magenta | `#D20A45` | CTA, aktywne stany, kluczowe liczby |
| Soft Mint | `#9FD6C8` | akcent świetlny, dane, linie |
| Off White | `#F5F3EE` | jasne tła |
| Cool Gray | `#536273` | tekst pomocniczy, metadane |

### Typografia
- Nagłówki: nowoczesny grotesk (Sora / Manrope / Plus Jakarta Sans / General Sans)
- Body: neutralny sans, 17–19 px desktop, min. 16 px mobile
- Opcjonalny monospace do etykiet/danych/liczb
- Max 2 rodziny; hierarchia rozmiarem, wagą i przestrzenią

### UI / animacje / grid
- Cienkie linie batymetryczne, okręgi sonaru, punkty nawigacyjne z podpisami ("Strategia", "Kurs", "Głębokość")
- Karty jak warstwy interfejsu w toni: miękkie narożniki, półprzezroczystość, kontrolowany glass; obramowania 1 px zamiast ciężkich cieni
- Hero: bardzo powolny ruch (powierzchnia, światło, cząsteczki); proces: linia kursu wypełnia się przy scrollu; liczby animowane w viewport; case studies: delikatne wynurzanie ekranów; **pełne prefers-reduced-motion**
- Grid: 12 kol. desktop (treść 1240–1320 px), 8 tablet, 4 mobile; odstępy wielokrotność 8 px; sekcje 112–160 px desktop / 64–88 px mobile; CTA min. 44 px + focus states

## Zakres — mapa strony
- [ ] Strona główna (10 sekcji wg pkt 4 briefu: hero → pasek zaufania → 2 obszary → usługi (7 kart) → realizacje (3–4) → dlaczego C&P (5 bloków) → proces (5 kroków) → technologie/partnerstwa → opinie (2–3) → CTA końcowe)
- [ ] Usługi — strona indeksowa (Budujemy / Napędzamy / Rozwijamy)
- [ ] 7 landing pages usług (wspólny szablon pkt 5.1): Strony internetowe, Sklepy internetowe, CRM i systemy, Aplikacje webowe, Google Ads, Allegro Ads, Opieka i rozwój
- [ ] Realizacje — lista z filtrami (Wszystkie / Strony WWW / E-commerce / Aplikacje i CRM / Google Ads / Allegro Ads), filtrowanie bez przeładowania + linkowalne filtry
- [ ] Szablon case study (12 sekcji wg pkt 6.2) — pierwsze: Sufity LED, Miasteczko Witkowice, TCT Tools
- [ ] O nas (historia, model współpracy, filary, partnerstwa, zespół, lokalność)
- [ ] Wiedza / blog — lista (wyróżniony + siatka), 6 kategorii
- [ ] Artykuł — szablon (sticky spis treści, style treści, box autora, 3 powiązane, CTA; kolumna 680–760 px)
- [ ] Kontakt / rozpocznij projekt — **konfigurator wieloetapowy** (6 kroków: potrzeba → cel → zakres zależny od usługi → budżet → termin → dane; progres + cofanie)
- [ ] Thank you page
- [ ] 404
- [ ] Polityka prywatności / cookies

### Stałe komponenty
Header (mega menu Usługi z 3 grupami, CTA "Opowiedz nam o projekcie", transparent → solid po scrollu), footer (4 kolumny + dane formalne + logotypy partnerów), breadcrumbs, sticky CTA mobile, karty (case/usługa/artykuł), cytaty, liczby, logo wall, FAQ accordion, formularze z pełnymi stanami, baner cookies.

### Must-have funkcje
- Konfigurator zapytania (6 kroków, pytania zależne od usługi, przedziały budżetowe)
- Formularze: minimalna liczba pól, wyjaśnienie pytania o budżet, załącznik z limitem, zgoda RODO (nie zaznaczona domyślnie), stany błąd/sukces/ładowanie, brak podwójnego wysłania, autoresponder e-mail
- Plan zdarzeń analitycznych: `cta_click`, `form_start`, `form_step`, `form_submit`, `case_study_open`, `service_open`, `contact_click`
- Zasady prezentowania wyników w case studies: bez fikcyjnych danych, zawsze kontekst (okres, punkt odniesienia), możliwe zakresy/indeksy przy poufności

## Techniczne
- Stack: [BRAK w briefie] — istniejący projekt: pure HTML/CSS/JS bez build stepa (do potwierdzenia, czy zostaje)
- CMS: [BRAK] — brief zakłada blog i skalowanie treści, nie wskazuje CMS
- Integracje: formularz z załącznikiem + autoresponder (backend?), analityka (GA4?), opcjonalnie kalendarz konsultacji
- Domena / hosting: [BRAK]

## Projekt
- Deadline: [BRAK]
- Budżet: [BRAK]
- Zatwierdza: [BRAK]

## Assety
### Dostarcza klient (do potwierdzenia)
- [ ] Logo / znak marki (do key visual "znak zanurzony w toni")
- [ ] Logotypy Google Partner + Allegro Ads Partner (zgodnie z brand bookami — nie stylizować)
- [ ] Prawdziwe KPI i dane do 3 case studies (+ zgody klientów na publikację)
- [ ] Opinie klientów (cytat 40–80 słów, imię i nazwisko, stanowisko, firma, opc. zdjęcie)
- [ ] Zdjęcia zespołu (lub decyzja: pokazujemy model pracy zamiast ludzi)
- [ ] Dane formalne: adres, e-mail, telefon, NIP
- [ ] Artykuły startowe do sekcji Wiedza (ile na start?)

### Do stworzenia
- [ ] Key visual hero + warianty (usługi, realizacje, CTA) — autorska scena 3D/generatywna
- [ ] System 6–10 elementów oceaniczno-technologicznych (sonar, batymetria, prądy danych, cząsteczki, szlak nawigacyjny)
- [ ] Piktogramy liniowe (sekcja "Dlaczego Code & Pixel")
- [ ] Mockupy do case studies (pełne widoki, detale, mobile, panele)

## Luki / [BRAK]
- Deadline, budżet, osoba zatwierdzająca
- Stack docelowy i CMS (statyczny HTML vs CMS pod blog)
- Backend formularza (endpoint, autoresponder, załączniki)
- Przedziały budżetowe do kroku 4 konfiguratora ("dostosowane do realnego modelu sprzedaży firmy" — trzeba je dostać)
- Prawdziwe wyniki/KPI do case studies i opinii
- Prawo użycia logotypów partnerów
- Czy status "Przyjmujemy projekty na [okres]" w footerze będzie aktualizowany (jeśli nie → pomijamy)
- Liczba artykułów na start (decyduje, czy Wiedza wchodzi w fazę 1)
