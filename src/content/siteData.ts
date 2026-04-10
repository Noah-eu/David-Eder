/**
 * Veškeré texty a kontaktní údaje webu — jediné místo pro úpravy copy.
 * Pro rozšíření o EN přidejte např. siteDataEn a přepínač locale.
 *
 * LinkedIn: dokud nemáte URL, nechte TODO_LINKEDIN — zobrazí se jako text k doplnění.
 */

export const seo = {
  title:
    'David Eder — automatizace a optimalizace provozu malých hotelů | davideder.eu',
  description:
    'Pomáhám malým hotelům, aparthotelům a apartmánovým domům zjednodušit provoz, nastavit automatizaci a praktické procesy. Zkušenost z reálného provozu v Praze.',
  ogTitle: 'David Eder — provoz malých hotelů bez zbytečného chaosu',
  ogDescription:
    'Automatizace, self check-in, housekeeping, komunikace s hosty. Praktická pomoc z provozu malého ubytování.',
  ogLocale: 'cs_CZ',
} as const

export type NavItem = { id: string; href: string; label: string }

export const siteData = {
  brand: 'David Eder',
  domain: 'davideder.eu',

  header: {
    ctaContact: 'Kontakt',
    nav: [
      { id: 'nav-uvod', href: '#uvod', label: 'Úvod' },
      { id: 'nav-pomoc', href: '#s-cim-pomaham', label: 'S čím pomáhám' },
      { id: 'nav-koho', href: '#pro-koho', label: 'Pro koho' },
      { id: 'nav-o-mne', href: '#o-mne', label: 'O mně' },
      { id: 'nav-sluzby', href: '#sluzby', label: 'Služby' },
      { id: 'nav-kontakt', href: '#kontakt', label: 'Kontakt' },
    ] satisfies NavItem[],
  },

  hero: {
    id: 'uvod',
    automationStrip: 'Rezervace · úklid · host — provoz jako propojený systém',
    headline:
      'Automatizace a optimalizace provozu malých hotelů a apartmánových domů',
    subheadline:
      'Pomáhám ubytovacím zařízením zjednodušit provoz, snížit zbytečné náklady a nastavit systém, který funguje lépe pro majitele, zaměstnance i hosty.',
    trustLine:
      'Zkušenost z reálného provozu. Praktická řešení. Méně chaosu, více systému.',
    ctaConsult: 'Domluvit konzultaci',
    ctaEmail: 'Napsat e-mail',
    portraitSrc: '/david-eder.jpg',
    portraitAlt: 'David Eder',
  },

  help: {
    id: 's-cim-pomaham',
    title: 'S čím pomáhám',
    intro:
      'Konkrétní oblasti, kde malý provoz nejvíc ztrácí čas — a kde se dá s rozumem ušetřit energie i peníze.',
    cards: [
      {
        title: 'Automatizace provozu',
        body:
          'Propojím opakující se úkoly tak, aby se rozumně předávaly v týmu a zvládaly i výjimky. Vycházím z toho, co děláte každý den, a z toho, co už v provozu máte.',
      },
      {
        title: 'Self check-in / self check-out',
        body:
          'Nastavení příchodů a odchodů hostů tak, aby byly přehledné pro recepci i pro hosta. Méně telefonátů večer, méně čekání u dveří, jasné instrukce místo improvizace.',
      },
      {
        title: 'Housekeeping a provozní reporty',
        body:
          'Jednoduché reporty z úklidu a stavu apartmánů, které dávají smysl majiteli i úklidu. Přehled bez zbytečných tabulek a bez toho, aby se informace ztrácely mezi zprávami.',
      },
      {
        title: 'Guest communication a concierge',
        body:
          'Sjednocení informací pro hosty — co potřebují vědět před příjezdem, během pobytu a při odjezdu. Méně stejných dotazů, více klidu na obou stranách.',
      },
      {
        title: 'Optimalizace nákladů a procesů',
        body:
          'Projdeme dodavatele, rutiny a místa, kde uniká čas nebo peníze. Hledám úspory, které nejsou na úkor zážitku hosta ani únavy týmu.',
      },
      {
        title: 'Stabilizace provozu',
        body:
          'Když je provoz neustále v režimu hašení, nikdo nestíhá rozvíjet nabídku ani kvalitu. Pomůžu srovnat priority a nastavit opakovatelné postupy, které drží směr.',
      },
    ],
  },

  audience: {
    id: 'pro-koho',
    title: 'Pro koho to je',
    intro:
      'Nejvíc to dává smysl tam, kde provoz už přerostl improvizaci a chcete ho držet při zemi — srozumitelně a bez zbytečné administrativy.',
    items: [
      { title: 'Malé hotely', hint: 'Provozy, kde každý člověk dělá víc věcí najednou.' },
      { title: 'Butik hotely', hint: 'Kde záleží na detailu, ale rutina nesmí brzdit osobní přístup.' },
      { title: 'Aparthotely', hint: 'Více jednotek, více předání informací — typické místo pro zbytečný chaos.' },
      { title: 'Apartmánové domy', hint: 'Od rezervací po úklid — potřebujete přehled bez druhé „hlavní“ kanceláře.' },
      {
        title: 'Provozy bez zbytečné složitosti',
        hint: 'Chcete věci zjednodušit tak, aby je lidé opravdu používali v každodenním provozu.',
      },
    ],
  },

  benefits: {
    id: 'co-prinesu',
    title: 'Co umím přinést',
    intro: 'Typicky jde o úpravy v každodenním chodu — viditelné v práci recepce, úklidu i komunikaci s hosty.',
    items: [
      'Méně ruční práce a opakujících se úkonů',
      'Přehlednější každodenní provoz a předávky',
      'Lepší předávání úkolů mezi směnami a lidmi',
      'Méně chyb, výpadků a „nevím, kdo to měl“',
      'Jednodušší komunikace s hostem bez ztráty úrovně služby',
      'Menší závislost na neustálém hašení problémů',
    ],
  },

  about: {
    id: 'o-mne',
    title: 'O mně',
    paragraphs: [
      'Jmenuji se David Eder. Už přibližně 9 let řídím provoz malého aparthotelu v Praze. Mám zkušenost s každodenním chodem ubytovacího zařízení — od cenotvorby a organizace provozu až po automatizaci služeb, komunikaci s hosty, úklid, technické záležitosti a dodavatele.',
      'Hledám řešení, která jdou zavést v běžném provozu a která šetří čas, energii i peníze.',
    ],
    proofPoints: [
      '9 let praxe v provozu ubytování',
      'Zkušenost s automatizací check-inu a komunikace s hosty',
      'Návyk z malého aparthotelu — stejné tlaky na kapacitu a kvalitu jako u vás',
      'Důraz na jednoduchost, funkčnost a dlouhodobou udržitelnost',
    ],
  },

  process: {
    id: 'spoluprace',
    title: 'Jak probíhá spolupráce',
    steps: [
      {
        title: 'Rychlá úvodní konzultace',
        text: 'Krátký hovor nebo schůzka: jaký máte provoz, kde vás to nejvíc brzdí a co byste chtěli zlepšit jako první.',
      },
      {
        title: 'Slabá místa a návrh řešení',
        text: 'Společně projdeme procesy a priority. Dostanete návrh kroků, které jdou rovnou zkusit v provozu.',
      },
      {
        title: 'Praktické zavedení',
        text: 'Nastavíme změny tak, aby je váš tým zvládl a aby držely i po sezóně. Důležité je, aby fungovaly i v běžném týdnu mimo špičku.',
      },
    ],
  },

  packages: {
    id: 'sluzby',
    title: 'Služby a formát spolupráce',
    intro: 'Vyberte úroveň podle toho, kde právě stojíte — nebo se domluvíme na kombinaci.',
    items: [
      {
        title: 'Provozní audit',
        description:
          'Strukturovaný průlet vaším provozem: rezervace, předání apartmánů, úklid, komunikace, náklady. Výstupem je přehled úzkých míst a jasných priorit.',
      },
      {
        title: 'Návrh optimalizace a automatizace',
        description:
          'Konkrétní návrh změn — nástroje, procesy, komunikace s hosty. Zaměřeno na to, co jde zavést v malém týmu bez zbytečné byrokracie.',
      },
      {
        title: 'Dlouhodobá externí provozní podpora',
        description:
          'Pravidelná spolupráce: konzultace, doladění procesů, reakce na sezónní výkyvy. Spíš opora při rozhodnutích v provozu než formální řízení zvenku.',
      },
    ],
  },

  approach: {
    id: 'proc-tento-pristup',
    title: 'Jak pracuji',
    intro:
      'Vycházím z provozu malého ubytování: beru v úvahu počet lidí, sezónu a to, co od vás host čeká v praxi.',
    principles: [
      'Navrhuju kroky tak, aby šly začít postupně s tím, co už v provozu máte.',
      'Nástroje a postupy vybírám podle toho, jestli v nich váš tým opravdu bude fungovat.',
      'Držím se jedné věci: ať je provoz přehlednější a méně vyčerpávající pro lidi, kteří ho denně táhnou.',
    ],
  },

  contact: {
    id: 'kontakt',
    email: 'david.eder78@gmail.com',
    phone: '+420 733 439 733',
    /** Celá URL profilu, např. https://www.linkedin.com/in/… */
    linkedinUrl: 'TODO_LINKEDIN',
    title: 'Kontakt',
    headline: 'Chcete zjednodušit provoz vašeho ubytování?',
    body:
      'Napište mi a podíváme se, kde má váš provoz největší prostor pro zlepšení. Krátká zpráva stačí — ozvu se s návrhem dalšího kroku.',
    emailLabel: 'E-mail',
    phoneLabel: 'Telefon',
    linkedinLabel: 'LinkedIn',
    openEmail: 'Otevřít e-mailovou schránku',
  },

  footer: {
    tagline: 'Automatizace a optimalizace provozu malých ubytovacích zařízení.',
    copyrightPrefix: '©',
  },
} as const
