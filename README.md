# David Eder — osobní web (davideder.eu)

Jednostránkový prezentační web: automatizace a optimalizace provozu malých hotelů a apartmánových domů. Postaveno na **Vite**, **React** a **TypeScript**, bez backendu a CMS.

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
- Před ostrým nasazením nahraďte **`TODO_EMAIL`**, **`TODO_PHONE`** a **`TODO_LINKEDIN`** skutečnými hodnotami (včetně plné URL u LinkedIn).

Meta tagy v HTML se při buildu doplňují z `seo` v `siteData.ts` přes Vite plugin v `vite.config.ts`.

## Portrét

Volitelný soubor **`public/david-eder.jpg`**. Pokud chybí, v hero se zobrazí textové zástupné místo s iniciálami — layout zůstane v pořádku.

## Rozšíření o angličtinu

Struktura `siteData` je připravená na druhý jazyk: přidejte např. `siteDataEn.ts`, sdílené typy a přepínač locale v kořenové komponentě bez nových závislostí.

## Licence

Soukromý projekt — David Eder.
