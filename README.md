# David Eder | osobní web (davideder.eu)

Jednostránkový prezentační web: automatizace a optimalizace provozu malých hotelů a apartmánových domů. Postaveno na **Vite**, **React** a **TypeScript**, bez backendu a CMS.

Vizuál: **tmavý kontrastní režim**, teplý oranžový akcent, výrazná display typografie (**Syne** + **DM Sans**), hero s fotkou před barevným kruhem. Inspirace odpovídá běžným vzorům moderních osobních / creative portfolio webů (silná typografie, málo dekorativního šumu, jasné CTA).

## Lokální vývoj

```bash
npm install
npm run dev
```

Aplikace běží na **http://localhost:5173** (výchozí port Vite; pokud je obsazený, Vite v konzoli vypíše jiný).

## Build pro nasazení

```bash
npm run build
```

Statické soubory vzniknou ve složce `dist/`. Nasadit je lze na libovolný statický hosting (např. Cloudflare Pages, Netlify, GitHub Pages).

Náhled buildu:

```bash
npm run preview
```

## Úprava textů a kontaktů

Veškeré texty, SEO metadata a kontaktní údaje jsou v jednom souboru:

- `src/content/siteData.ts` — copy, navigace, sekce, `seo` (title, description, Open Graph)
- E-mail a telefon upravíte v `siteData.ts` v části `contact`.

Meta tagy v HTML se při buildu doplňují z `seo` v `siteData.ts` přes Vite plugin v `vite.config.ts`.

## Portrét

Hero portrét je **`src/assets/david-eder.png`** (PNG s alfou). Při buildu ho Vite vloží do `dist/assets/` s hashem v názvu souboru, takže se po nasazení nepřepíše stará cache z `/david-eder.jpg`. Při chybě načtení se v hero zobrazí zástupné místo s iniciálami.

## Rozšíření o angličtinu

Struktura `siteData` je připravená na druhý jazyk: přidejte např. `siteDataEn.ts`, sdílené typy a přepínač locale v kořenové komponentě bez nových závislostí.

## Licence

Soukromý projekt — David Eder.
