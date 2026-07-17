# Architektura — Code & Pixel
**Aktualizacja:** 2026-07-13 (redesign wg briefu klienta — patrz `../brief.md`)

## Mapa serwisu

```mermaid
flowchart TD
    HOME[index.html<br/>Strona główna]
    USLUGI[uslugi.html<br/>Indeks usług]
    REAL[portfolio.html<br/>Realizacje + filtry]
    ONAS[o-nas.html]
    WIEDZA[wiedza.html<br/>Lista artykułów]
    KONTAKT[kontakt.html<br/>Konfigurator 6 kroków]
    THX[dziekujemy.html]
    E404[404.html]
    PRIV[polityka-prywatnosci.html]

    HOME --> USLUGI
    HOME --> REAL
    HOME --> KONTAKT

    subgraph LANDINGI["uslugi/ — landing pages"]
        L1[strony-internetowe]
        L2[sklepy-internetowe]
        L3[crm-systemy]
        L4[aplikacje-webowe]
        L5[google-ads]
        L6[allegro-ads]
        L7[opieka-rozwoj]
    end
    USLUGI --> LANDINGI
    LANDINGI --> KONTAKT

    subgraph CASES["portfolio/ — case studies"]
        C1[sufity-led]
        C2[miasteczko-witkowice]
        C3[tct-tools]
    end
    REAL --> CASES
    CASES --> KONTAKT

    WIEDZA --> ART[wiedza/artykul szablon]
    ART --> LANDINGI
    KONTAKT --> THX
```

## Flow konfiguratora (kontakt.html)

```mermaid
stateDiagram-v2
    [*] --> Potrzeba: form_start
    Potrzeba --> Cel: form_step 1
    Cel --> Zakres: form_step 2
    Zakres --> Budzet: form_step 3 (pytania zależne od usługi)
    Budzet --> Termin: form_step 4 (skala projektowa lub Ads)
    Termin --> Dane: form_step 5
    Dane --> Wyslane: form_submit (walidacja + RODO)
    Wyslane --> [*]: redirect dziekujemy.html
    note right of Zakres: każdy krok ma przycisk Wstecz,\npasek postępu 1/6…6/6
```

## Component reuse

| Komponent | index | uslugi | landing ×7 | realizacje | case ×3 | o-nas | wiedza | artykuł | kontakt | systemowe |
|---|---|---|---|---|---|---|---|---|---|---|
| Header + mega menu | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Footer 4-kolumnowy | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Sticky CTA mobile | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
| Breadcrumbs | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| `.service-card` (7 usług) | ✓ | ✓ | powiązane | — | — | — | — | — | — | 404 |
| `.portfolio-card` | ✓ | — | ✓ (filtr kategorii) | ✓ | prev/next | — | — | — | — | — |
| `.kpi-card` (liczby) | ✓ | — | ✓ | — | ✓ | ✓ | — | — | — | — |
| `.process` (linia kursu) | ✓ | — | ✓ (wariant usługi) | — | ✓ | ✓ | — | — | — | — |
| `.faq` accordion | — | ✓ | ✓ | — | — | — | — | — | ✓ | — |
| `.case-quote` (opinie) | ✓ | — | ✓ | — | ✓ | — | — | — | — | — |
| `.cta-strip` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ |
| Karta artykułu | — | — | powiązane | — | — | — | ✓ | ✓ | — | — |

## Poziomy głębi (system tła)

1. **Powierzchnia** (`--depth-surface`, Off White #F5F3EE) — hero podstron treściowych, sekcje tekstowe
2. **Strefa przejściowa** (`--depth-mid`, Ocean Navy #0E2236) — karty, sekcje usług
3. **Głębiny** (`--depth-deep`, Deep Navy #071525) — footer, case studies, CTA końcowe, sekcje premium

Strona główna: narracja zanurzenia — jasna powierzchnia w hero → stopniowe
ciemnienie przy scrollu → CTA końcowe jako „światło kursu".

## Zdarzenia analityczne (js/main.js → dataLayer)

`cta_click` (lokalizacja, tekst, podstrona) · `form_start` (typ, usługa) ·
`form_step` (numer, odpowiedź) · `form_submit` (usługa, sukces/błąd) ·
`case_study_open` (projekt, kategoria) · `service_open` (usługa, źródło) ·
`contact_click` (telefon/e-mail/kalendarz)
