# Case study Lunchee — plan kompozycji

Źródło: rozpoznanie pięcioma agentami + synteza, 2026-10-08.

## Co jest w tym projekcie nietypowe

NAJWAŻNIEJSZE: cała warstwa zdjęciowa tego sklepu jest nasza, a klient nie dał ani jednego zdjęcia produktu w użyciu i ani jednej klatki wideo.

Co przyszło od klienta: packshoty producenta NOVEEN (po 18 sztuk na model, 3500×3500 PNG z prawdziwą alfą), plansza kierunku wizualnego w PSB na 1,08 GB autorstwa ich grafika, logo w czystym wektorze, teksty w docx. Katalogi VIDEOS, BANNERS, INFOGRAPHICS, GIFTBOX, MANUAL, PRODUCT CARD i DOCUMENTS przy wszystkich pięciu modelach są puste. Zweryfikowane po rozszerzeniach: w całym folderze klienta nie ma ani jednego mp4, mov, webm czy gif.

Co powstało u nas: 16 kadrów hero 1536×1024, 4 portrety person 1024×1536, 33 assety strony (pięciokrokowa sekwencja „jak korzystać", cztery momenty, para kiedyś/dziś, pięć wycięć akcesoriów z alfą, 9 ikon), 3 zdjęcia promocyjne, 6 teł, 10 całych makiet hero i 15 propozycji sekcji w wariantach A/B/C. Przez kilkadziesiąt plików trzyma się to samo światło, ta sama paleta i te same cztery twarze, więc zestaw czyta się jak zamówiona sesja.

GRANICA AUTORSTWA IDZIE PRZEZ ŚRODEK JEDNEGO OBRAZU. Twarze person pochodzą z wycinków planszy klienta (TG1 Agnieszka, TG1 Ewa, TG2 Krzysiek, TG3 Irenka), ale całe ujęcie studyjne na kolorze marki jest nasze. Tego nie da się zamknąć w jednym słowie „zdjęcia" w metryczce, więc case musi to powiedzieć wprost, przy obrazie, a nie w akapicie. To jest powód istnienia sekcji „Materiał wejściowy i wynik" i to jest rzecz, której nie ma żaden inny case w portfolio.

BRAK WIDEO ZMIENIA OTWARCIE, I NA LEPSZE. Wszystkie cztery nowe case'y otwierają się plikiem wideo (replika hero w klimatach, wild campers i monzie, pasmo w SLF) albo przypiętym filmstripem (akademia). Tu nie ma do czego sięgnąć. Jednocześnie hero tego sklepu jest złożone z dwóch warstw: osobno wygenerowanego kadru i tekstu zbudowanego w HTML na tokenach. Replika może więc pokazać coś, czego nie pokaże ani zrzut, ani wideo: rozdzielenie tych warstw na przewijaniu. Zdjęcie zostaje nagie, a obok staje podpis, że kadr powstał osobno. Wariant „replika hero bez pliku wideo" jest w regułach wymieniony jako niewykorzystany.

KOREKTA DO RAPORTU ROZPOZNANIA, sprawdzona w repo: na stronie głównej nie stoi hero-c1. Commit 48cd8f3 „runda 1: hero-09 wdrożone na stronie głównej" wstawił kadr z serii 16 ujęć, plik `assets/img/hero-kv.webp` 1536×850 plus `hero-kv-mobile.webp` 780×975. Pięć całych makiet (hero-c1…c5) było krokiem decyzyjnym, a na stronę weszło zdjęcie z innej serii. To jest czystsza historia, nie słabsza: makiety pokazują, z czego wybieraliśmy, a wdrożone hero pokazuje metodę, czyli kadr osobno i tekst w kodzie.

PIĘĆ MODELI MA JEDNĄ CENĘ. Wszystkie 249 zł (sprawdzone w `_build/produkty.json`), więc wybór w tym sklepie nie jest porównywaniem cen, tylko wyborem koloru i liczby sztuk. Z tego wynika cała logika handlowa: rabat 30% za każdą pełną parę przy dowolnych kolorach, próg darmowej dostawy 269 zł liczony po rabacie, dwa akcesoria dobierane w polu zakupu. Piąty model, LB795 Night, ma `available: false`, 16 zdjęć od producenta zamiast 27 i brak ujęć aranżowanych, więc jako jedyny nie ma paska zakupu ani paska dostawy. Asymetria materiału i asymetria sklepu pokrywają się.

HANDEL SIEDZI W DANYCH, NIE W KODZIE. Stawka rabatu jest w `<meta name="lunchee-para" content="30">`, próg darmowej dostawy w `data-free="269"`, a produkty w `produkty.json`, z którego `_build/build.py` generuje dziewięć kart produktowych i resztę podstron z partiali. Funkcja `pairDiscount()` nie zna żadnej z tych liczb. Dla odbiorcy agencyjnego to mocniejszy sygnał rzemiosła niż metryka.

DANE SAME PRZYZNAJĄ, CZEGO NIE WIEDZĄ. W `produkty.json` stoi dosłownie: „Ceny są PRZYKŁADOWE, wstawione 2026-09-19 do pokazania układu. Prawdziwe ceny dosyła klient" oraz przy rabacie „Do potwierdzenia, czy chodzi o parę, czy o drugą sztukę". To jest gotowa, uczciwa stopka demonstratora i twardy powód, dla którego case nie podaje ani jednej ceny jako ceny klienta, a karuzela opinii (4,8 z 127) nie wchodzi nigdzie, bo to dane przykładowe.

RUNDA UWAG ZABRAŁA, A NIE DODAŁA. 43 uwagi z 1.10.2026, strona główna z czternastu sekcji na dziesięć, cztery sekcje wyrzucone: zestaw, przepisy, akcesoria i FAQ. Zrzuty przed i po są już wklejone w `audyt-zmian.html` z altami „Zestaw, usunięty", „Przepisy, usunięte", „Akcesoria, usunięte", „FAQ, usunięte". Żaden case w portfolio nie pokazuje tego, co z projektu wyleciało, a to jest dowód pracy, którego nie da się podrobić.

TOKEN ZMIENIŁ SIĘ Z POWODU UWAGI KLIENTA, A DWA ISTNIEJĄ Z POWODU KONTRASTU. `--tlo-produkt` było błękitem #dfeafb spoza KV, jest limonką #f1f7dd z planszy, po uwadze „więcej czerpać z KV". Kolory marki są za jasne pod tekst, więc tekst ma własne tokeny: #f26a3d daje 2,87:1, dlatego tekstowy pomarańcz to #d95220 z 3,82:1, a etykiety z #946800 (4,0:1 na hero) zjechały na #7a5600 (5,8:1). Trzy współczynniki są zapisane w komentarzach `tokens.css`, więc to liczby zmierzone, nie opinia o kolorze.

KRÓJ JEST NA LICENCJI KLIENTA. Coolvetica wisi na `use.typekit.net/bpt1qjw`, a commit nazywa to wprost: „fonty: Coolvetica z kitu Adobe Fonts klienta". Kit jest ograniczony domenami i nie jest nasz, więc case study na domenie Code&Pixel nie może z niego korzystać. Potrzebny osobny Web Project na koncie Grzegorza albo replika hero ląduje na Interze, który i tak jest w projekcie udokumentowanym fallbackiem.

SKALA: 23 podstrony (najwięcej w portfolio, wild campers ma 17), karta produktu 1440×14573 px i styleguide 1440×15370 px, czyli dwa najdłuższe dokumenty w całym portfolio. Strona ładuje tokeny ze styleguide'u, więc nie ma własnej kopii wartości. To jest drugi sklep w portfolio, czyli filtr „E-commerce" na realizacjach dostaje drugą kartę.

NA KONIEC: brak wdrożenia nie jest tu luką do zasłonięcia. Żadna z dwunastu obejrzanych pracowni (Build in Amsterdam, Locomotive, Rejouice, AREA 17, Robot Food, Heydays, Hello Monday) nie podaje procentów konwersji. Hello Monday pisze w metryczce wprost „Deliverables: Concept, UI". Dokładnie to robimy wierszem „Dostarczyliśmy".

## Sekcje

### 1. 1. Hero tekstowy (.hero)

- **Nagłówek:** Lunchee
- **Co pokazuje:** Nazwę projektu, jedno zdanie o tym, co to jest, i czteropolową metryczkę. Cały budżet tekstu strony.
- **Materiał:** Bez obrazu. Dane z repo: 23 podstrony (24 pliki HTML minus narzędziowy podglad.html), rok 2026, HTML/CSS/JS bez bibliotek.
- **Opis:** LEAD: „Sklep z elektrycznymi lunch boxami: dwadzieścia trzy podstrony prototypu i cała warstwa zdjęciowa zrobiona u nas."
- **Mechanika:** h1 „Lunchee" z data-lines i data-hero (łamanie splitLines). dl.meta, cztery pola: KLIENT „Lunchee · NOVEEN", ZAKRES „UX · design · sklep · zdjęcia", ROK „2026", TECHNOLOGIE „HTML · CSS · JS". Bez okruszków i bez plakietki w hero (reguła 6).

### 2. 2. OTWARCIE: żywa replika hero bez wideo (.lhstage)

- **Nagłówek:** Hero złożone z dwóch warstw
- **Co pokazuje:** Hero sklepu odtworzone w HTML na prawdziwych tokenach, które na przewijaniu zdejmuje warstwę tekstu i zostawia nagi, wygenerowany kadr.
- **Materiał:** assets/img/hero-kv.webp 1536×850 i hero-kv-mobile.webp 780×975 (kadr hero-09 z serii 16 ujęć, wdrożony commitem 48cd8f3). Nagi kadr źródłowy: 00 - Assets/2026-10-06 - Hero ImageGen/generated/hero-09.png 1536×1024. Logo: 00 - Assets/logo/LOGO/SVG/lunchee-czarne.svg. Ikony: assets/img/gen/icons/cieplo.webp 125×192 i zasilanie.webp 192×192.
- **Opis:** „Zdjęcie wygenerowane osobno, tekst i odznaki zbudowane w HTML na tokenach. Przewiń, żeby zdjąć warstwę tekstu."
- **Mechanika:** Teksty 1:1 z index.html: eyebrow „Lunchee by NOVEEN", h1 „Twój czas" + span.alt „na ciepły posiłek", podtytuł „Twój posiłek. Twój moment. Gdziekolwiek jesteś.", dwa CTA „Wybierz swój Lunchee" i „Jak to działa", dwa fakty „Podgrzewa do 60°C" i „3 źródła zasilania". Kolory z tokenów Lunchee: tło --akcent #f2b90c, przycisk --cta #0054af, drugi człon nagłówka --cta. Logo jako maska CSS w --cta, bo SVG jest czarny. Sekwencja: zmienna --reveal z jednej pętli rAF wygasza warstwę tekstu i podnosi podpis „Kadr bez tekstu, wygenerowany osobno". Plakietka „Żywy podgląd" jak w pozostałych case'ach. KRÓJ: Coolvetica wyłącznie z nowego Web Projectu na koncie Grzegorza, nigdy z kitu klienta bpt1qjw; przy braku kroju fallback na Inter i bez udawania, że to Coolvetica. PUŁAPKA: aspect-ratio na kontenerze repliki jest dozwolone (to replika, nie zrzut), ale samo zdjęcie dostaje width:100%;height:auto, a przy prefers-reduced-motion warstwa tekstu zostaje widoczna i sekwencja nie startuje.

### 3. 3. Zakres i co dostarczyliśmy (.zak)

- **Nagłówek:** Zakres i co dostarczyliśmy
- **Co pokazuje:** Ciężar pracy w trzech kolumnach dyscyplin plus dwa jednowierszowe pasy: na czym zbudowane i co faktycznie oddaliśmy. To stoi w miejscu, w którym stare case'y mają zmyślone KPI.
- **Materiał:** Fakty z repo i z folderu assetów. Nic do zrzucania.
- **Opis:** „Projekt, zdjęcia i kod sklepu. Bez backendu, płatności i wysyłki maili, bo to prototyp."
- **Mechanika:** Trzy kolumny po sześć pozycji, każda pozycja dwa albo trzy słowa. PROJEKT: struktura · wireframe · kierunek wizualny · design 23 podstron · styleguide · tokeny po roli. ZDJĘCIA: 16 kadrów hero · 4 persony · 33 assety strony · 5 kroków · 9 ikon · 3 zdjęcia promo. SKLEP: koszyk · rabat za parę · próg dostawy · walidacja NIP · zgody rozdzielone · Omnibus. Pas „Zbudowane na": HTML, CSS, JS bez bibliotek, generator podstron z produkty.json, Coolvetica, Inter 4.1 lokalnie. Pas „Dostarczyliśmy": prototyp i styleguide w repo z podglądem, bez wdrożenia. Wzorzec Hello Monday („Deliverables: Concept, UI").

### 4. 4. Materiał wejściowy i wynik (.wej)

- **Nagłówek:** Materiał wejściowy i wynik
- **Co pokazuje:** Granicę autorstwa przy samych obrazach: po lewej to, co dostaliśmy, po prawej to, co z tego powstało. Dwa wiersze, każdy obraz podpisany autorstwem.
- **Materiał:** WEJŚCIE: packshot LB745 z 00 - Assets/materialy-2026-09-16/zdjecia-produktow/.../LB700 3500×3500 PNG z alfą oraz wycinek twarzy 03 - Design/assets/img/kv/persona-agnieszka-wyciete.webp. WYNIK: 00 - Assets/2026-10-08 - Persony ImageGen/generated/persona-agnieszka.png 1024×1536 oraz 00 - Assets/2026-10-06 - Hero ImageGen/generated/hero-09.png 1536×1024.
- **Opis:** „Od producenta packshoty i plansza kierunku. Od nas ujęcia studyjne na kolorach marki, z twarzami z tej planszy."
- **Mechanika:** Dwie kolumny, dwa wiersze, w każdym kadrze pełny obraz bez przycięcia. Podpisy stałe i krótkie: „packshot NOVEEN", „wycinek z planszy KV, autor Kamil", „nasze ujęcie studyjne", „nasz kadr hero". Układ dopasowany do proporcji: pion 2:3 obok poziomu 3:2, kolumny o różnej szerokości, bez wyrównywania do wspólnej ramki. Materiał klienta występuje wyłącznie jako wejście i jest tak podpisany. Wzorzec: AREA 17 (podpis nazywający rzecz z imienia) i Bearaby (jedno zdanie wiążące formę ze znaczeniem).

### 5. 5. Pięć kierunków hero (.kier)

- **Nagłówek:** Pięć kierunków hero
- **Co pokazuje:** Z czego wybieraliśmy: pięć całych makiet hero, każda z własnym nagłówkiem, lejdem i przyciskami. Jedna wyróżniona jako kierunek, z którego poszliśmy dalej.
- **Materiał:** 00 - Assets/2026-10-06 - Hero całość ImageGen/generated/hero-c1.png … hero-c5.png, wszystkie 1536×1024.
- **Opis:** „Pięć całych makiet do wyboru. Na stronę weszło zdjęcie z osobnej serii, z tekstem zbudowanym w HTML."
- **Mechanika:** Jeden duży kafel plus cztery mniejsze, wszystkie width:100%;height:auto. Podpis przy każdym: numer wariantu i jedna cecha kierunku (fotograficzny, redakcyjny, ilustracyjny). PODPISY SPISAĆ PO OBEJRZENIU PLIKÓW, nie z raportu: raport przypisywał wybór wariantowi c1, a repo pokazuje, że wdrożony został hero-09 z innej serii. Sekcja łączy się wstecz z otwarciem: tam stoi wynik, tu decyzja.

### 6. 6. Cztery persony i szesnaście kadrów (.seria)

- **Nagłówek:** Cztery persony i szesnaście kadrów
- **Co pokazuje:** Objętość i spójność własnej serii zdjęciowej. To najmocniejszy materiał projektu i on ma nieść tę stronę.
- **Materiał:** 4 × 00 - Assets/2026-10-08 - Persony ImageGen/generated/persona-*.png 1024×1536 oraz 6 wybranych z 16 w 00 - Assets/2026-10-06 - Hero ImageGen/generated/hero-*.png 1536×1024. PNG źródłowe, nie WebP z repo (te są skompresowane pod web, 0,01–0,25 MB).
- **Opis:** „To samo kadrowanie i to samo światło w trzech kolorach marki: żółtym, limonkowym i pomarańczowym."
- **Mechanika:** Rząd czterech pionów 2:3 obok siebie, pod nim dwa rzędy po trzy poziomy 3:2. Zero obrotu, zero taśmy, zero kafli bez podpisu. Podpisy jednowyrazowe: Agnieszka, Ewa, Krzysiek, Irenka (imiona z sekcji person na stronie). Kadry hero bez podpisów indywidualnych, z jednym wspólnym: „kadry z serii szesnastu ujęć". Obrazy z loading="lazy" poza pierwszym rzędem. Wzorzec Heydays: duże pionowe kadry na szerokość kontenera czytają się lepiej niż siatka kafelków.

### 7. 7. MECHANIZM: Rabat za parę, próg dostawy (.lpanel)

- **Nagłówek:** Rabat za parę, próg dostawy
- **Co pokazuje:** Jedno żywe liczenie, nie trzy opisy. Wybór koloru, liczba sztuk i dwa akcesoria przeliczane tą samą formułą co sklep, z boksem promocji zmieniającym się na trzy stany.
- **Materiał:** Dane 1:1 z 03 - Design/_build/produkty.json i js/main.js. Packshoty do swatchy: assets/img/produkty/*.webp 1000×742. Wycięcia akcesoriów z alfą: assets/img/gen/08-inox-wyciecie.webp i 08-maly-pojemnik-wyciecie.webp.
- **Opis:** „Panel liczy tą samą formułą co sklep: trzydzieści procent od pełnych par, darmowa dostawa liczona po rabacie."
- **Mechanika:** ŚCIEŻKA: wybór modelu i liczby sztuk w polu zakupu karty produktu, to samo liczenie, które potem powtarza koszyk. JEDEN widok, bez zakładek, bez kroków i bez przycisku „od początku", więc inaczej niż trzykrokowe demonstratory Klimatów i Wild Campers. DANE PRZEPISANE Z KODU: pięć modeli z produkty.json, wszystkie price 249 — lb745 City #39546f (oldPrice 279, lowest30dPrice 249, photos 27), lb755 Glamour #ceaab2, lb725 Nature #7e9d93, lb715 Pearl #d7d7d9 (po 27 zdjęć), lb795 Night #141414 z available:false i photos 16, oznaczony „niedostępny w sklepie" i nieklikalny do zakupu. Akcesoria w panelu tylko dwa, jak w polu zakupu: LBC7 INOX 49 zł i LBCL7 39 zł; LBB370 i LBL7 nie wchodzą. FORMUŁA pairDiscount() 1:1: filtruj pozycje będące lunch boxami, rozwiń na sztuki, sortuj malejąco po cenie, weź floor(n/2)*2 sztuk, pomnóż ich sumę przez 0,30, zaokrąglij do groszy. Stawkę 30 panel czyta z meta[name="lunchee-para"], a nie z własnej stałej. Próg 269 zł z data-free, kurier 14,99, paczkomat 12,99, dostawa zeruje się od wartości PO rabacie. Stepper 1–99. BOKS PROMOCJI, teksty dosłownie z main.js: 0 sztuk „Dwa Lunchee 30% taniej" z przyciskiem „Wybierz Lunchee"; 1 sztuka „Dodaj drugi Lunchee, rabat 30% obejmie parę"; nieparzysta powyżej jednej „Dodaj jeszcze jeden Lunchee, rabat 30% obejmie kolejną parę"; parzysta „Rabat 30% za parę" ze stanem .is-done na tle --ok-tlo i kwotą oszczędności. KONTROLA LICZB (musi wyjść co do grosza): 2×249 = 498,00, rabat 149,40, razem 348,60, dostawa 0,00. 3×249 = 747,00, rabat nadal 149,40, razem 597,60. 4×249 = 996,00, rabat 298,80, razem 697,20. 1 × LB745 + LBC7 = 298,00, rabat 0,00, dostawa 0,00. Helper odmiany: 1 para, 2–4 pary, 5+ par. STOPKA PANELU, obowiązkowa, przepisana z _uwaga w produkty.json: „Ceny i próg dostawy z prototypu, przykładowe. Zasada pary do potwierdzenia u klienta." Panel liczy w pamięci i NIE pisze do localStorage czytającego. Tabela, jeśli wejdzie, dostaje własny kontener overflow-x:auto z min-width, bo inaczej rozpycha stronę na 390 px.

### 8. 8. Kontrast na kolorach marki (.kontr)

- **Nagłówek:** Kontrast na kolorach marki
- **Co pokazuje:** System wizualny pokazany tam, gdzie pracuje: trzy pary tekst i tło w prawdziwych kolorach, ze zmierzonym współczynnikiem i odrzuconą wartością obok. W miejsce ściany palety i okazów krojów.
- **Materiał:** Komentarze w 04 - Styleguide/tokens.css, linie 32, 38 i 40. Trzy współczynniki zmierzone, dwie wartości odrzucone.
- **Opis:** „Żółty i pomarańczowy z planszy klienta są za jasne pod tekst, więc tekst ma własne, ciemniejsze tokeny."
- **Mechanika:** Trzy wiersze, każdy to prawdziwy kafel w prawdziwym kolorze z napisem w kolorze tekstowym i doklejoną wartością: 1) --tekst-etykieta #7a5600 na --tlo-akcent #fdf1c9, 5,8:1, obok odrzucone #946800 z 4,0:1; 2) --akcent-cieply-tekst #d95220 na --tlo #fbf8f1, 3,82:1, obok kolor marki #f26a3d z 2,87:1; 3) --tekst-slaby #4a5570 na --tlo #fbf8f1, 7,0:1. Dodatkowy wiersz jednym zdaniem: strona ładuje tokeny ze styleguide'u, więc poprawka wartości wchodzi na wszystkie podstrony naraz. PUŁAPKI: żadnych par doliczanych z głowy, brakujące wylicza ~/.claude/data/styleguide/pomiar.py; tło sekcji o ton inne od #fbf8f1, bo pas koloru równy tłu znika; liczby z przecinkiem dziesiętnym, nie z kropką.

### 9. 9. Czternaście sekcji na dziesięć (.runda)

- **Nagłówek:** Czternaście sekcji na dziesięć
- **Co pokazuje:** Co zmieniła runda uwag: dwie pary przed i po oraz rząd czterech sekcji, które z projektu wyleciały. Dowód pracy w miejsce wyniku, którego nie ma.
- **Materiał:** 05 - Feedback/runda-01/audyt-zmian.html, 21 zrzutów WebP wklejonych w base64 — pary z altami „Przed, 13 015 px"/„Po, 7 917 px", „Przed, jeden model"/„Po, pięć modeli" oraz cztery kafle „Zestaw, usunięty", „Przepisy, usunięte", „Akcesoria, usunięte", „FAQ, usunięte". Liczba uwag z uwagi-zrodlo.md i trzech PDF-ów klienta, same PDF-y zostają w projekcie.
- **Opis:** „Po uwagach klienta strona główna straciła cztery sekcje: zestaw, przepisy, akcesoria i FAQ."
- **Mechanika:** Dwie pary obok siebie (przed po lewej, po po prawej, oba pełne, bez przycięcia), pod nimi rząd czterech mniejszych kafli z podpisem „usunięte". Obrazy wyciągnąć z base64 skryptem, bez renderowania starej wersji strony. PRZED PUBLIKACJĄ przeliczyć wysokość strony jednym pomiarem i podać jedną liczbę, bo PLAN.md mówi 13 455 → 7 998 px, a alty w audycie 13 015 → 7 917 px. Para „Przed, lokalizacje"/„Po, persony z KV" NIE wchodzi tutaj, żeby nie dublować sekcji person.

### 10. 10. Siedem widoków z dwudziestu trzech (.widoki)

- **Nagłówek:** Siedem widoków z dwudziestu trzech
- **Co pokazuje:** Przegląd podstron: jedna kolumna zrzutów pełnej szerokości, każdy z widocznym podpisem nazywającym podstronę i mechanizm, który na niej działa. Zastępuje taśmę zrzutów i galerię naraz.
- **Materiał:** Świeże zrzuty desktopowe z żywego prototypu (serwer na wolnym porcie, 1440×900) oraz zrzut 04 - Styleguide/styleguide.html. Nie z dla-klienta/img/sekcje/ (700 px, sprzed rundy 01).
- **Opis:** „Jedna kolumna zrzutów. Każdy podpisany nazwą podstrony i mechanizmem, który na niej działa."
- **Mechanika:** Zrzut na pełną szerokość kontenera 1180 px, width:100%;height:auto, podpis POD obrazem, nie w atrybucie alt. Siedem pozycji i podpisy: „Strona główna. Dziesięć sekcji po rundzie uwag." · „Lista modeli. Pięć kolorów, jedna cena." · „Karta produktu. Galeria, pole zakupu, czternaście pytań." · „Koszyk. Rabat za parę, próg dostawy." · „Zamówienie. Zgody rozdzielone, NIP z sumą kontrolną." · „Dla firm. Logo wgrywane na packshot w przeglądarce." · „Styleguide. Tokeny nazwane po roli." ZERO object-fit i zero aspect-ratio na kontenerze. Obrazy loading="lazy". Podpis zdejmuje zarzut „przypadkowego screena": ekran, którego nie da się podpisać mechanizmem, do tej kolumny nie wchodzi (wzorzec Vitra Gift Finder).

### 11. 11. Układ na 390 px (.mob390)

- **Nagłówek:** Układ na 390 px
- **Co pokazuje:** Tę samą sekcję w dwóch szerokościach w jednym kadrze, z nazwaną różnicą mechanizmu. Nie trzy telefony w rzędzie.
- **Materiał:** Pary świeżych zrzutów elementu: 1440×900 i 390×844, z żywego prototypu. Trzy pary pewne, czwarta opcjonalna.
- **Opis:** „Ta sama sekcja w dwóch szerokościach. Miniatury galerii ustępują kropkom, pasek zakupu wyjeżdża po przewinięciu."
- **Mechanika:** Trzy wiersze, w każdym po lewej widok desktopowy, po prawej ten sam fragment w atrapie telefonu. Pary: 1) hero strony głównej (na 390 odznaki schodzą na zdjęcie); 2) pole zakupu karty LB745, na 390 ze .sticky-buy.is-visible po minięciu [data-main-buy]; 3) galeria karty produktu, na 1440 z miniaturami i aria-current, na 390 z kropkami (miniatury mają display:none poniżej 900 px). Czwarta para opcjonalna: .nav desktopowe kontra .mobile-nav.is-open, wymaga osobnego przebiegu na 390 px, bo na 1440 .menu-toggle ma display:none. To są zrzuty elementu, czyli pełne elementy, nie wycinki: width:100%;height:auto, zero wymuszonej proporcji.

### 12. 12. Pierścień prev / next (.csec > .cnav)

- **Nagłówek:** Poprzedni / Następny
- **Co pokazuje:** Dwa linki do sąsiednich case'ów. Wejście nowego pliku w zamknięty pierścień ośmiu węzłów.
- **Materiał:** Istniejące pliki portfolio. Zmiana w dwóch plikach poza nowym.
- **Opis:** PREV: „TCT Tools". NEXT: „Apartamenty Klimaty Wola".
- **Mechanika:** lunchee.html wchodzi między tct-tools.html i klimaty-wola.html. Do przepięcia: w tct-tools.html NEXT na lunchee.html „Lunchee", w klimaty-wola.html PREV na lunchee.html „Lunchee". Etykiety krótkie, „Poprzedni" i „Następny" (nowa generacja), bez style="padding-top:0". OBOWIĄZKOWE style="display:block" na .cnav__title, inaczej nazwa sklei się z etykietą w jedną linię.

### 13. 13. Pasmo CTA i stopka (.ctaband-wrap #kontakt, .footer)

- **Nagłówek:** Lubisz to, co widzisz?
- **Co pokazuje:** Cel dla CTA z nagłówka i wspólna stopka Code&Pixel.
- **Materiał:** Wspólne moduły szablonu.
- **Opis:** Dwa przyciski: „Wyceń projekt" i adres e-mail. Bez eyebrow i bez akapitu opisowego.
- **Mechanika:** Wersja nowej generacji: tylko h2 i przyciski. ROZBIEŻNOŚĆ DO USTALENIA PRZED POKAZANIEM: szablon ma hello@codeandpixel.io w CTA i kontakt@codeandpixel.pl w stopce. Wybrać jeden i poprawić w obu miejscach. KONTROLA TEKSTU na gotowym pliku: python3 ~/.claude/data/pisanie/sprawdz-tekst.py i sprawdz-polszczyzne.py, sieroty wiązane &nbsp;, zero pauz w polskim tekście. UWAGA: oba skrypty widzą też teksty klienta przepisane w replice hero i w podpisach, więc trafienia z jego treści zignorować i powiedzieć o tym przy oddaniu.

### 14. 14. Wejście case'u do realizacji i slidera

- **Nagłówek:** Lunchee
- **Co pokazuje:** Kartę w siatce na realizacje.html i kafel w karuzeli na index.html, oba na pozycji pierwszej.
- **Materiał:** Dwa nowe pliki: assets/case-lunchee/card.jpg 760×522 (zrzut strony głównej) i card-wide.jpg 1340×928 (czysty kadr bez tekstu, z hero-09.png 1536×1024).
- **Opis:** Karta: tag „Sklep internetowy", podpis „Lunch boxy elektryczne · 2026", data-cat="sklep".
- **Mechanika:** W .rlz-grid na realizacje.html jako pierwsza karta, alt „Strona główna sklepu Lunchee". W .real-track na index.html jako pierwszy kafel, tag „Sklep internetowy · Lunch boxy elektryczne", bez loading="lazy". object-fit:cover w obu miejscach zostaje, bo card.jpg i card-wide.jpg są przygotowane pod kadr; tego wzorca nie wolno przenieść do wnętrza case'a. Drugi projekt z data-cat="sklep", czyli filtr „E-commerce" przestaje być jednoelementowy.

## Czym różni się od poprzednich case'ów

- klimaty-wola.html: tam replika hero (.kwstage) stoi na prawdziwym pliku wideo, przegląd to dwa proste rzędy taśmy, a mechanizm to trzy kroki z zakładkami i resetem (plan z hotspotami → filtrowana tabela → karta lokalu). Tu replika hero nie ma wideo, bo go w projekcie nie ma, i jej mechanizmem jest rozdzielenie warstwy zdjęcia i warstwy tekstu. Zero taśmy. Demonstrator jednowidokowy, bez zakładek, bez resetu i bez tabeli.
- wild-campers.html: tam dwie przypięte sekcje naraz (ściana znaków 240vh i taśma po skosie), replika hero z samym wideo i kalkulator jako trzeci krok. Tu nic nie jest przypięte, nic nie jest obrócone, a liczenie siedzi w tym samym panelu co wybór, nie w osobnym kroku. Tam materiał pochodził z dwóch dostaw klienta; tu druga dostawa (folder 00 - Marka) jest pusta, a cała warstwa zdjęciowa jest nasza i case mówi to wprost przy obrazach.
- monza.html: tam replika hero odtwarza najwięcej interfejsu klienta na wideo (pasek godzin, sześciopozycyjna nawigacja, telefon), a w miejscu demonstratora stoi żywa skala typograficzna z formułami clamp(). Tu hero jest statyczne i dwuwarstwowe, a system wizualny to trzy pary tekst i tło ze zmierzonym kontrastem, czyli ani skala, ani ściana palety. Monza nie ma demonstratora wcale; tu demonstrator jest jądrem strony, bo sklep ma formułę cenową.
- slf-transport.html: tam pasmo wideo na otwarcie, przegląd to dwie przesunięte kolumny zrzutów BEZ podpisów, a tokeny to inwentarzowa tabela nazwa/wartość/próbka/opis z szóstką pozycji i trzema krojami. Tu zrzuty idą w jednej kolumnie i każdy ma widoczny podpis z mechanizmem, a tokeny pokazujemy tylko trzy, zawsze z powodem zmiany i ze współczynnikiem kontrastu. SLF ma też tła sekcji na pełną szerokość; tu zostaje standard z 2026-08-14, czyli wszystko w kontenerze 1180 px.
- akademia-okocimskiego.html: to drugi sklep w portfolio, więc różnica jest najważniejsza. Tam ścieżka zakupowa jest przypiętym filmstripem czterech nieruchomych ekranów, a system wizualny arkuszem ośmiu komponentów w naturalnej wielkości. Tu ta sama ścieżka jest jednym działającym liczeniem, z rabatem za parę i progiem dostawy przeliczanymi formułą z kodu, a zamiast arkusza komponentów stoi kolumna podpisanych widoków i trzy pary kontrastu. Akademia nie ma galerii ani taśmy; tu kolumna widoków pełni obie role, ale z podpisami, których akademia nie ma nigdzie.
- sufity-led.html: tam komplet rzeczy zabronionych: zmyślone KPI (+340%, 0.9s, 98/100), zmyślony cytat właściciela, okruszki, plakietka „Strona internetowa" w hero, siedem akapitów prozy i osiem placeholderów IMG. Tu zero KPI, zero cytatów, zero prozy. W miejscu KPI stoi zakres w trzech kolumnach i wiersz „Dostarczyliśmy", czyli to, co naprawdę oddaliśmy, razem z informacją, czego nie ma (backend, płatności, maile).
- miasteczko-witkowice.html: tam siedem placeholderów .ph-label i ani jednego prawdziwego zrzutu, a pięć obrazów w pliku to logotypy Code&Pixel, plus zmyślony cytat Katarzyny Wójcik i liczby +185%, 4m 12s, 100. Tu każdy obraz to konkretny plik z projektu, wskazany ze ścieżką, a każdy zrzut ma podpis. Miasteczko nie ma nawet folderu assets/case-*; Lunchee wchodzi z własnym folderem i kompletem card.jpg oraz card-wide.jpg.
- tct-tools.html: bliźniak sufitów, sekcja po sekcji identyczny, z liczbami 2,8 / 4,8x / 0 zł i cytatem Pawła Lewandowskiego. Tu jedyne liczby to te, które policzył kod (249 zł, 30%, 269 zł, 149,40 zł, 348,60 zł) albo zmierzył audyt (czternaście sekcji na dziesięć, trzy współczynniki kontrastu), każda z nazwanym źródłem, a ceny mają przy sobie zdanie, że są przykładowe. TCT jest też węzłem, który domyka pierścień, więc to jego NEXT przepinamy na nowy plik.
- PONAD TO, czego nie ma żaden z ośmiu: sekcja o granicy autorstwa materiału (co dał klient, co zrobiliśmy my) · sekcja pokazująca sekcje USUNIĘTE z projektu · podpis pod każdym zrzutem, zamiast kafli aria-hidden bez opisu · wiersz „Dostarczyliśmy" w miejscu wyników · pięć kierunków hero jako ściana decyzji · otwarcie bez pliku wideo.

## Zrzuty do zrobienia

- SETUP: podnieś 03 - Design na wolnym porcie i rób zrzuty przez ~/.claude/data/case-study/zrzuty.py --dir "<serwowany katalog>" --out "assets/case-lunchee". Flagi obowiązkowe: --ukryj ".cookies" (pasek zgód odkrywa się na wszystkich 23 podstronach), --pomin podglad.html (narzędzie podglądu, nie podstrona), --pomin "dla-klienta/*". Widok desktopowy 1440×900, wymuszone prefers-reduced-motion: reduce, inaczej sekcje .reveal zostają puste. UWAGA: Lunchee oznacza wejście klasą .is-in, a zrzuty.py wymusza .in — sprawdź to na PIERWSZYM zrzucie, zanim puścisz cały komplet. Wyłącz scroll-behavior:smooth. PNG przy device_scale_factor=2 waży dziesiątki MB, więc konwersja do JPG: desktop 1760 px q82, mobile 640 px q84.
- DESKTOP, ujęcia bez stanu (do kolumny widoków, siedem pozycji): index.html góra · lunch-boxy.html góra · produkt-lb745.html góra · koszyk.html góra · zamowienie.html góra · dla-firm.html góra · ../04 - Styleguide/styleguide.html góra.
- STAN 1 (pierwszy w kolejce, zapisuje zgodę i gasi pasek na resztę przebiegu): index.html::[data-cookies="niezbedne"]::zgoda-cookies
- STAN 2: produkt-lb745.html::.gallery__thumbs button:nth-child(5)::galeria-zdjecie-5 — piąta miniatura dostaje aria-current="true", główne zdjęcie się podmienia, kropka przeskakuje. Miniatury istnieją tylko od 900 px, więc na 1440 łapie się poprawnie.
- STAN 3: produkt-lb745.html::.addons label.addon:first-of-type input::akcesorium-lbc7 — zaznacza LBC7 (+49 zł), przycisk przelicza się na „Dodaj do koszyka · 298,00 zł", pasek darmowej dostawy przesuwa się. Celuj w input, nie w label.
- STAN 4: produkt-lb745.html::.faq details:nth-of-type(2) summary::faq-otwarte — drugie z czternastu pytań dostaje [open] i tło --tlo-akcent, plus zmienia się w minus, pozostałe zamykają się same (natywna wyłączność po name="faq").
- STAN 5: produkt-lb745.html::[data-add-pair]::toast-para-dodana — dwie sztuki jednym kliknięciem, toast „Dwa Lunchee LB745 City w koszyku, rabat za parę naliczony", licznik w nagłówku na 2. Toast żyje 3200 ms, więc TU go nie ukrywaj; dla ujęć po tym stanie dodaj --ukryj ".toast". Zielona klasa .is-added gaśnie po 900 ms, na zrzucie jej nie będzie.
- STAN 6 (musi stać PO stanie 5, bo localStorage przeżywa nawigację): koszyk.html::.cart__summary h2::koszyk-para-rabat — pełny koszyk, wiersz „Rabat za parę −149,40 zł", dostawa 0,00 zł, razem 348,60 zł, boks .pair--cart.is-done na tle --ok-tlo.
- STAN 7: koszyk.html::.cart__list [data-cart-step="1"]::koszyk-nieparzysta — trzecia sztuka, boks zdejmuje .is-done i przepisuje się na „Dodaj jeszcze jeden Lunchee, rabat 30% obejmie kolejną parę", rabat zostaje 149,40 zł, razem 597,60 zł.
- STAN 8: zamowienie.html::input[name="faktura"]::faktura-vat-rozwinieta — odkrywa #faktura-dane z polem NIP (suma kontrolna modulo 11), pola dostają required poza firma-adres.
- STAN 9: zamowienie.html::input[name="dostawa"][value="paczkomat"]::dostawa-paczkomat — koszt dostawy 12,99 zł, wiersz Razem przelicza się od razu.
- STAN 10: dla-firm.html::button.swatch[data-color="lb755"]::personalizacja-glamour — w demonstratorze logo packshot podmienia się na LB755 Glamour, swatch dostaje aria-pressed="true". Wstawienia logo przez --stan zrobić nie można, bo wymaga pliku w input[type=file].
- PRZEBIEG MOBILNY, osobny, 390×844, to samo ukrywanie .cookies: index.html hero · produkt-lb745.html pole zakupu po przewinięciu za [data-main-buy], żeby złapać .sticky-buy.is-visible · produkt-lb745.html galeria z kropkami zamiast miniatur.
- OPCJONALNIE, wymaga doraźnej zmiany w zrzuty.py: produkt-lb745.html::.menu-toggle::menu-mobilne-otwarte na widoku 390 px (.mobile-nav.is-open + body.no-scroll). Na 1440 px się nie uda, bo .menu-toggle ma display:none od 1000 px.
- ZRZUTY ELEMENTU do sekcji „Układ na 390 px" (pełne elementy, nie wycinki): .hero na index.html, blok [data-main-buy] wraz z paskiem zakupu i kontener [data-gallery] na produkt-lb745.html — każdy raz na 1440 i raz na 390.
- NIE ZRZUTY, pliki kopiowane z projektu: assets/img/hero-kv.webp 1536×850 i hero-kv-mobile.webp 780×975 · hero-09.png 1536×1024 (nagi kadr) · hero-c1…c5.png 1536×1024 · cztery persona-*.png 1024×1536 · sześć wybranych hero-NN.png · packshot LB745 3500×3500 PNG z alfą · kv/persona-agnieszka-wyciete.webp · lunchee-czarne.svg i lunchee-biale.svg · gen/icons/cieplo.webp i zasilanie.webp · assets/img/produkty/*.webp do swatchy panelu · 08-inox-wyciecie.webp i 08-maly-pojemnik-wyciecie.webp.
- PRZED I PO: dziesięć obrazów wyciąć z base64 w 05 - Feedback/runda-01/audyt-zmian.html (pary o altach „Przed, 13 015 px"/„Po, 7 917 px" i „Przed, jeden model"/„Po, pięć modeli" oraz cztery kafle „…usunięty/usunięte"). Starej wersji strony NIE renderujemy ponownie.
- KARTA I SLIDER: assets/case-lunchee/card.jpg 760×522 ze zrzutu index.html góra oraz card-wide.jpg 1340×928 z hero-09.png (czysty kadr bez tekstu, bo etykieta slidera leży na obrazie).
- CZEGO NIE ZRZUCAĆ: karuzeli opinii na index.html (4,8 z 127 to dane przykładowe, w portfolio stałyby się zmyśloną liczbą) · ebook.html za bramą na hasło (--stan nie umie wpisać hasła „lunchee", a stan bez niego nic nie pokazuje) · 404.html i czterech stron prawnych (nic nie dowodzą) · niczego z dla-klienta/img/sekcje/ (99 plików po 700 px z 19.09, sprzed rundy 01, nieaktualny kremowo-granatowy wygląd).
- CHECKLISTA PO ZŁOŻENIU: grep na object-fit i aspect-ratio przy zrzutach musi być pusty · brak poziomego scrolla na 1440 i 390 px · zero błędów konsoli i zero nieładujących się obrazów · linki wewnętrzne 200 · prefers-reduced-motion wyłącza sekwencję hero i unoszenie · liczby w panelu zgadzają się co do grosza z kontrolą z sekcji 7 · ZAWSZE obejrzeć pierwszy zrzut, zanim komplet uzna się za dobry.

## Czego nie robimy

- Zero wideo w jakiejkolwiek formie. W całym folderze klienta nie ma ani jednego mp4, mov, webm czy gif, a katalogi VIDEOS przy wszystkich pięciu modelach są puste. Nie udajemy wideo pętlą ze zrzutów i nie wstawiamy pustego <video> z posterem.
- Zero ściany palety (.swall) i zero okazów krojów (.twall). Trzy case'y w portfolio mają dokładnie ten sam moduł, a żadna z dwunastu obejrzanych pracowni nie pokazuje gołej palety ani specimenu typografii jako osobnego slajdu. Kolor wchodzi tam, gdzie pracuje, z powodem obok.
- Zero taśmy zrzutów, prostej i po skosie. Kafle bez podpisu, oznaczone aria-hidden, to dokładnie te „przypadkowe screeny", których nie chcemy. Przegląd idzie w jednej kolumnie i każdy zrzut ma widoczny podpis.
- Zero karuzeli opinii, w zrzutach i w opisie. Średnia 4,8 z 127 opinii, rozkład gwiazdek i wypowiedź Marka W. to dane przykładowe z prototypu.
- Zero cytatu klienta i zero cytatu własnego projektanta. Projekt nie jest wdrożony, więc nie ma zdania, które ktokolwiek faktycznie powiedział o jego działaniu.
- Zero sekcji „Projekt w liczbach". Odrzucone w praktyce przy niewdrożonym projekcie. Liczby wchodzą wyłącznie jako podpisy przy rzeczach, które je mają, i zawsze z nazwanym źródłem.
- Zero cen podanych jako ceny klienta i zero opisów produktów jako gotowej treści. Ceny są przykładowe (tak stoi w produkty.json), a opisy LB715, LB725, LB755 i LB795 to opis LB745 z podmienioną nazwą, bo klient dał tylko jeden.
- Zero kitu Adobe Fonts klienta na stronie Code&Pixel. use.typekit.net/bpt1qjw jest na licencji Lunchee. Coolvetica wchodzi tylko z własnego Web Projectu Grzegorza, inaczej replika hero stoi na Interze i mówimy to przy oddaniu.
- Zero zapisu do localStorage czytającego. Panel liczy w pamięci i nie podkłada koszyka Lunchee ani zgody na cookies w przeglądarce gościa portfolio.
- Zero object-fit: cover i zero wymuszonego aspect-ratio na kontenerze ze zrzutem. Jedyny wyjątek zostaje w card.jpg i card-wide.jpg na realizacjach i w sliderze, bo te dwa pliki są przygotowane pod kadr.
- Nie dorabiamy demonstratora wgrywania logo. Wymaga pliku od użytkownika, a wstawienie własnego znaku na packshot producenta pokazywałoby coś, czego w projekcie nie było. Mechanizm zostaje podpisanym widokiem w kolumnie.
- Nie wstawiamy hero-pas 2976×1024 ani płyt hero tylko dlatego, że są szerokie i ładne. Brak sekcji, w której coś pracuje, znaczy brak obrazu.
- Zero okruszków, zero plakietki typu „Sklep internetowy" w hero i zero pełnego pasma CTA z eyebrow oraz akapitem opisowym. To legacy trzech starych case'ów, wycięte regułą 6.
- Nie budujemy ściany kierunków w przyklejonym podglądzie (.dirs) ani żywej karty produktu z koszykiem (.pc). Oba moduły leżą jako martwy CSS w slf-transport i akademii, usunięte z HTML commitem aa4a0d6, i ich wskrzeszanie tutaj byłoby powtórzeniem cudzego pomysłu zamiast mechanizmu tego sklepu.
- Nie oddajemy strony z dwoma adresami e-mail. Rozbieżność hello@codeandpixel.io w CTA i kontakt@codeandpixel.pl w stopce trzeba rozstrzygnąć przed pokazaniem.