# ASSETS — Code & Pixel landing

Lista grafik potrzebnych do strony + prompty do **NanoBanana 2 / Freepik Spaces**.

Format zapisu: `assets/images/<nazwa>.jpg` (mockupy/zdjęcia) lub `.png` (meduza z kanałem alpha).

---

## 1. Service card mockupy (4 × ekran komputera)

**Wymiary**: 1200×900 px (4:3), JPG, ~150 KB każdy

### `service-www.jpg` — Strony internetowe

```json
{
  "subject": "Modern laptop screen showing a clean website hero with a food photo and bold headline 'OBIADY NA CO DZIEŃ', soft warm interior background slightly out of focus",
  "style": "editorial product photography, dark wooden table, ambient interior light, 35mm depth of field",
  "framing": "front-facing laptop, screen fills 80% of frame, slight top-down angle",
  "color_mood": "warm beige, dark moss green accent, cream white UI",
  "constraints": ["no text other than already on the laptop screen", "no people", "no logos", "screen must be readable and crisp"],
  "negative": "blurry screen, generic stock laptop, harsh studio light, white empty background",
  "aspect_ratio": "4:3"
}
```

### `service-sklep.jpg` — Sklepy internetowe (red theme)

```json
{
  "subject": "Modern e-commerce product page on laptop screen with red brand color, product grid of power tools and prices in PLN",
  "style": "editorial product photography, deep red brand palette dominates the on-screen UI",
  "framing": "laptop angled 15° to the side, screen sharp, background dark surface",
  "color_mood": "rich red (#b8252e), graphite gray, black UI",
  "constraints": ["no text outside the screen", "no logos of real brands", "product grid layout with prices visible", "screen sharp and readable"],
  "negative": "cluttered desktop, hands, mug, generic shopping cart icons only",
  "aspect_ratio": "4:3"
}
```

### `service-google.jpg` — Reklamy Google

```json
{
  "subject": "Google Ads dashboard on a laptop screen showing performance line charts, conversion stats and impressions over 90 days",
  "style": "editorial product photography, focus on data visualization clarity",
  "framing": "laptop top-down ¾ angle, dashboard fills the screen edge to edge",
  "color_mood": "Google blue (#1a73e8), green for positive metrics, white background UI",
  "constraints": ["no text other than chart labels and numbers", "no Google logo (placeholder rectangle instead)", "screen pin-sharp", "minimal hand or accessory in frame"],
  "negative": "fake stock screenshot, blurry charts, oversaturated colors",
  "aspect_ratio": "4:3"
}
```

### `service-allegro.jpg` — Allegro ADS

```json
{
  "subject": "Allegro Ads style analytics chart on a laptop screen with a line graph trending up, conversion table below",
  "style": "editorial product photography, focus on the screen, minimal background",
  "framing": "laptop front-facing, screen 75% of frame, soft shadow under device",
  "color_mood": "Allegro orange (#ff5a00) accents, white UI, light gray background",
  "constraints": ["no real brand logos", "chart trend clearly upward", "no text outside the screen", "crisp screen rendering"],
  "negative": "harsh studio light, busy desk, hands typing",
  "aspect_ratio": "4:3"
}
```

---

## 2. Portfolio case mockupy (3 × różne)

### `case-sufity-led.jpg` — Sufity LED (HERO large card)

```json
{
  "subject": "Atmospheric interior shot of a modern living room with a glowing LED-illuminated stretched ceiling featuring a starry-sky pattern, soft cinematic lighting",
  "style": "interior design editorial, moody, sophisticated, magazine-grade photography",
  "framing": "wide angle from below, ceiling occupies upper 70% of the frame, sleek furniture suggested at bottom",
  "color_mood": "deep navy, warm white star points, hints of bronze",
  "constraints": ["no text", "no people", "ceiling LED pattern visible as the focal subject"],
  "negative": "cottage style, daylight bright, harsh shadows, cluttered room",
  "aspect_ratio": "16:9"
}
```

**Wymiary**: 1600×900 px

### `case-miasteczko.jpg` — Miasteczko Witkowice (SMALL card with overlay)

```json
{
  "subject": "Senior couple — a smiling grandfather and grandmother in their 60s — looking peacefully into the distance at a green residential garden, holding hands, warm late afternoon light",
  "style": "lifestyle photography for senior housing brand, natural, hopeful, dignified",
  "framing": "medium close-up, both faces visible, garden bokeh in background",
  "color_mood": "soft greens, warm sun, cream-beige clothing",
  "constraints": ["no text", "no logos", "subjects appear authentic, not stock-posed", "high resolution faces"],
  "negative": "young models pretending to be old, fake smiles, studio backdrop",
  "aspect_ratio": "4:3"
}
```

**Wymiary**: 1200×900 px

### `case-tct.jpg` — TCT Tools (SMALL card with overlay)

```json
{
  "subject": "Top-down flat-lay of power tools and accessories arranged on a dark wooden workshop table, with a smartphone displaying the TCT Tools e-commerce app in the center",
  "style": "editorial product photography for a tools brand, masculine, premium, rugged",
  "framing": "top-down 90° angle, phone screen centered with product grid UI, tools radiating from the phone",
  "color_mood": "deep brown wood, red brand accents on tools and UI, brushed steel",
  "constraints": ["no text outside the phone screen", "no real-brand logos on tools", "phone screen sharp and readable"],
  "negative": "hands in shot, dirty surface, dim lighting making tools unrecognizable",
  "aspect_ratio": "4:3"
}
```

**Wymiary**: 1200×900 px

---

## 3. Testimonial — meduza (PNG z alpha)

### `jellyfish.png`

```json
{
  "subject": "Single luminous deep-sea jellyfish with long flowing tentacles, glowing in vibrant magenta-pink and electric blue bioluminescence, isolated on transparent background",
  "style": "macro photography meets digital art, neon glow, ethereal, dreamlike",
  "framing": "vertical composition, jellyfish bell at top, tentacles trailing down, 60% of frame is tentacles",
  "color_mood": "neon magenta (#ff7ad9), electric blue (#5fdfff), purple core, deep black/transparent surround",
  "constraints": [
    "transparent background (PNG with alpha channel)",
    "no text",
    "no other sea creatures or particles",
    "soft glow halo around tentacles",
    "high detail on bell and tentacle tips"
  ],
  "negative": "school of jellyfish, opaque background, cartoon style, water bubbles, ocean scenery",
  "aspect_ratio": "3:4"
}
```

**Wymiary**: 900×1200 px, **PNG z transparent BG**

---

## 4. Hero awatary (3 × placeholder zaufania)

**Wymiary**: 144×144 px każdy, JPG kwadrat, **kółko zostanie zrobione w CSS**

### `avatar-1.jpg`, `avatar-2.jpg`, `avatar-3.jpg`

Trzy realne portrety klientów (mogą być stock) — różne osoby, ten sam mood: profesjonalny, ciepły uśmiech, biuro/wnętrze w tle, jasne oświetlenie.

```json
{
  "subject": "Professional friendly business person mid-30s, smiling slightly, neutral office or studio background — headshot",
  "style": "natural lifestyle portrait photography, warm and approachable",
  "framing": "tight headshot, face fills frame, eyes meeting camera",
  "color_mood": "neutral, slight blue tint in background",
  "constraints": [
    "new person not variation — generate three distinct individuals (different gender/ethnicity/age)",
    "no text",
    "no logos on clothing",
    "consistent lighting and mood across all three"
  ],
  "negative": "exaggerated smiles, fake corporate stock pose, white empty background",
  "aspect_ratio": "1:1"
}
```

> **Uwaga**: jeśli używasz docelowo prawdziwych klientów — wystarczą ich zdjęcia w 144×144 i wkleić jako `avatar-1.jpg` itd.

---

## 5. Logo bank (carousel pod hero)

Aktualnie strona ma placeholdery **Webflow / Relume**. Do wymiany na logotypy klientów Code & Pixel — proponuję 6 monochromatycznych SVG (każdy biały na transparent, max wysokość 32 px).

Pliki do dostarczenia:

```
assets/icons/client-1.svg
assets/icons/client-2.svg
…
assets/icons/client-6.svg
```

Po dostarczeniu — wymień w `index.html` w sekcji `.logos__track` na `<img src="assets/icons/client-1.svg" alt="Klient 1" />`.

---

## Workflow generowania (Freepik Spaces)

1. Otwórz **Freepik Spaces** → wybierz model **NanoBanana 2** (Premium).
2. Wybierz aspect ratio z parametru `aspect_ratio` **w UI**, NIE w prompcie (per zasada z [[feedback_nanobanana_format]]).
3. Wklej cały blok JSON (z każdej sekcji powyżej) — pole "prompt".
4. **Język**: EN (zawsze).
5. **No text in images** — zawsze w `constraints`.
6. Dla par before/after (jeśli pojawi się tu wariant tej samej sceny) — dodaj `perspective_lock` i input image — patrz [[feedback_nanobanana_perspective_lock]].

---

## Checklist przed handoffem

- [ ] 4 × `service-*.jpg` (1200×900)
- [ ] 1 × `case-sufity-led.jpg` (1600×900, hero large)
- [ ] 2 × `case-*.jpg` (1200×900, miasteczko, tct)
- [ ] 1 × `jellyfish.png` (900×1200, transparent BG)
- [ ] 3 × `avatar-*.jpg` (144×144)
- [ ] 6 × `client-*.svg` (logotypy w pasku logos)

**Razem**: 11 rastrowych + 6 SVG.

---

## NOWE (brief 2026-07) — oceaniczna art direction

Paleta obowiązująca w promptach: Deep Navy `#071525`, Ocean Navy `#0E2236`,
Code Magenta `#D20A45`, Soft Mint `#9FD6C8`. Zakazy z briefu 2.2: zero
pirackich motywów, kotwic, kół ratunkowych, tropikalnych raf, pocztówkowego
błękitu i generycznych stocków.

### `hero-key-visual` — warianty (hero / usługi / realizacje / CTA)

Obecnie hero home obsługują wideo `assets/01.scrub.mp4` + `02.scrub.mp4`
(scroll-scrub: powierzchnia → zanurzenie). Do wygenerowania statyczne
warianty key visual na podstrony:

```json
{
  "subject": "Abstract deep ocean scene seen from below the surface: volumetric light rays piercing dark navy water, faint digital data currents rendered as thin glowing lines and small luminous points drifting like a school of fish, subtle sonar circles fading into the depth",
  "style": "cinematic 3D render, realistic-abstract, high-end tech brand aesthetic, controlled particle density, premium and calm",
  "color_mood": "deep navy #071525 base, soft mint #9FD6C8 light accents, single subtle magenta #D20A45 glow point",
  "constraints": ["no fish, no coral reefs, no boats, no anchors", "no text", "large calm areas for text overlay", "light comes from above the surface"],
  "negative": "cartoon, postcard blue, tropical, stock photo look, cluttered composition",
  "aspect_ratio": "16:9"
}
```

Warianty: (a) hero podstron — ciemniejszy, spokojna strefa po lewej;
(b) usługi — dodany motyw batymetrii; (c) realizacje — iluminowane
prostokąty jak ekrany wynurzające się z toni; (d) CTA — świetlny szlak
prowadzący ku powierzchni.

### `og-image.jpg` — social share 1200×630

Key visual + logo Code&Pixel w toni (logo dostarczy klient jako wektor).

### Do dostarczenia przez klienta (nie generujemy)

- Logo / znak marki (wektor) — do key visual "znak zanurzony w toni"
- Oficjalne logotypy Google Partner + Allegro Ads Partner (brand book!)
- Zdjęcia/screeny realizacji do case studies i galerii
- Zdjęcia zespołu (opcjonalnie — decyzja: model pracy zamiast twarzy)
