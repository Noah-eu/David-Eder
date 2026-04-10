/**
 * Veškeré texty a kontaktní údaje webu — jediné místo pro úpravy copy.
 * Pro rozšíření o EN přidejte např. siteDataEn a přepínač locale.
 *
 * TODO: Nahraďte placeholdery TODO_EMAIL, TODO_PHONE, TODO_LINKEDIN před ostrým nasazením.
 */

export const seo = {
  title:
    'David Eder — automatizace a optimalizace provozu malých hotelů | davideder.eu',
  description:
    'Pomáhám malým hotelům, aparthotelům a apartmánovým domům zjednodušit provoz, nastavit automatizaci a praktické procesy. Zkušenost z reálného provozu v Praze.',
  ogTitle: 'David Eder — provoz malých hotelů bez zbytečného chaosu',
  ogDescription:
    'Automatizace, self check-in, housekeeping, komunikace s hosty. Praktická pomoc z praxe, ne z prezentací.',
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
          'Propojím opakující se úkoly tak, aby nevisely na jedné hlavě a nepadaly při každé výjimce. Jde o to, co skutečně děláte každý den — ne o složité systémy naslepo.',
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
      'Spolupráce dává největší smysl tam, kde už víte, že „tak nějak to držíme“ nestačí — a nechcete přitom megasystém z katalogu.',
    items: [
      { title: 'Malé hotely', hint: 'Provozy, kde každý člověk dělá víc věcí najednou.' },
      { title: 'Butik hotely', hint: 'Kde záleží na detailu, ale rutina nesmí brzdit osobní přístup.' },
      { title: 'Aparthotely', hint: 'Více jednotek, více předání informací — typické místo pro zbytečný chaos.' },
      { title: 'Apartmánové domy', hint: 'Od rezervací po úklid — potřebujete přehled bez druhé „hlavní“ kanceláře.' },
      {
        title: 'Provozy bez zbytečné složitosti',
        hint: 'Chcete fungovat lépe — ne koupit deset let implementovaný software, který nikdo nepoužívá.',
      },
    ],
  },

  benefits: {
    id: 'co-prinesu',
    title: 'Co umím přinést',
    intro: 'Výsledky nejsou heslo v prezentaci — jsou to každodenní změny v provozu.',
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
      'Neřeším teorii do šuplíku. Hledám praktická řešení, která se dají opravdu zavést a která šetří čas, energii i peníze.',
    ],
    proofPoints: [
      '9 let praxe v provozu ubytování',
      'Zkušenost s automatizací check-inu a komunikace s hosty',
      'Pohled z reálného malého provozu, ne z učebnice',
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
        text: 'Společně projdeme procesy a priority. Dostanete konkrétní návrh kroků — ne obecné slidové doporučení.',
      },
      {
        title: 'Praktické zavedení',
        text: 'Nastavíme změny tak, aby je váš tým zvládl a aby držely i po sezóně. Jde o provoz, ne o jednorázový projekt v PowerPointu.',
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
          'Pravidelná spolupráce: konzultace, doladění procesů, reakce na sezónní výkyvy. Jako externí provozní „záda“, ne jako další vrstva managementu.',
      },
    ],
  },

  approach: {
    id: 'proc-tento-pristup',
    title: 'Proč právě tento přístup',
    intro: 'Malý hotel potřebuje funkční provoz — ne prezentaci pro investory.',
    no: [
      { label: 'Ne teorie', text: 'Žádné obecné rady, které nejdou přenést do reálného počtu pokojů a lidí.' },
      { label: 'Ne složitost pro složitost', text: 'Systém má sloužit provozu — ne obráceně.' },
      { label: 'Ne obří consulting decky', text: 'Dostanete srozumitelné kroky, které můžete hned začít dělat.' },
    ],
    yes: {
      label: 'Ano praxe',
      text: 'Praktická řešení, která jdou skutečně zavést v malém provozu — protože taková řešení sama používám.',
    },
  },

  contact: {
    id: 'kontakt',
    /** Nahraďte skutečným e-mailem */
    email: 'TODO_EMAIL',
    /** Nahraďte včetně předvolby, např. +420 … */
    phone: 'TODO_PHONE',
    /** Nahraďte celou URL profilu, např. https://www.linkedin.com/in/… */
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
