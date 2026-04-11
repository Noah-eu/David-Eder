/**
 * Veškeré texty a kontaktní údaje webu — jediné místo pro úpravy copy.
 * Pro rozšíření o EN přidejte např. siteDataEn a přepínač locale.
 *
 */

export const seo = {
  title:
    'David Eder | automatizace a optimalizace provozu malých hotelů | davideder.eu',
  description:
    'Pomáhám malým hotelům, aparthotelům a apartmánovým domům zjednodušit provoz, nastavit automatizaci a praktické procesy. Zkušenost z reálného provozu v Praze.',
  ogTitle: 'David Eder | provoz malých hotelů bez zbytečného chaosu',
  ogDescription:
    'Automatizace, self check-in, komunikace s hosty, optimalizace nákladů. Praktická pomoc z provozu malého ubytování.',
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
      { id: 'nav-pomoc', href: '#s-cim-pomaham', label: 'S čím vám můžu pomoct.' },
      { id: 'nav-koho', href: '#pro-koho', label: 'Pro koho' },
      { id: 'nav-sluzby', href: '#sluzby', label: 'Služby' },
      { id: 'nav-kontakt', href: '#kontakt', label: 'Kontakt' },
    ] satisfies NavItem[],
  },

  hero: {
    id: 'uvod',
    badge: 'Provoz malých ubytování',
    headline:
      'Automatizace a optimalizace provozu malých hotelů a apartmánových domů',
    subheadline:
      'Pomáhám ubytovacím zařízením zjednodušit provoz, snížit zbytečné náklady a nastavit systém, který funguje lépe pro majitele, zaměstnance i hosty.',
    trustLine:
      'Devět let denně v provozu aparthotelu v Praze. Řeším věci, které majitelům a týmům reálně šetří čas a nervy.',
    ctaConsult: 'Domluvit konzultaci',
    ctaEmail: 'Napsat e-mail',
    portraitAlt: 'David Eder',
  },

  help: {
    id: 's-cim-pomaham',
    title: 'S čím vám můžu pomoct.',
    chips: [
      'Automatizace provozu',
      'Nastavení Self check-in / self check-out',
      'Vytvoření Guest communication a concierge',
      'Optimalizace nákladů a procesů',
    ],
  },

  audience: {
    id: 'pro-koho',
    title: 'Pro koho to je',
    intro:
      'Nejvíc to dává smysl tam, kde provoz už přerostl improvizaci a chcete ho držet při zemi: srozumitelně a bez zbytečné administrativy.',
    items: [
      { title: 'Malé hotely', hint: 'Provozy, kde každý člověk dělá víc věcí najednou.' },
      { title: 'Butik hotely', hint: 'Kde záleží na detailu, ale rutina nesmí brzdit osobní přístup.' },
      { title: 'Aparthotely', hint: 'Více jednotek a předávání informací, typické místo, kde snadno vzniká chaos.' },
      { title: 'Apartmánové domy', hint: 'Od rezervací po úklid: přehled bez druhé „hlavní“ kanceláře.' },
      {
        title: 'Provozy bez zbytečné složitosti',
        hint: 'Chcete věci zjednodušit tak, aby je lidé opravdu používali v každodenním provozu.',
      },
    ],
  },

  packages: {
    id: 'sluzby',
    title: 'Služby a formát spolupráce',
    intro: 'Vyberte úroveň podle toho, kde právě stojíte, případně se domluvíme na kombinaci.',
    items: [
      {
        title: 'Provozní audit',
        description:
          'Strukturovaný průlet vaším provozem: rezervace, předání apartmánů, úklid, komunikace, náklady. Výstupem je přehled úzkých míst a jasných priorit.',
      },
      {
        title: 'Návrh optimalizace a automatizace',
        description:
          'Konkrétní návrh změn v nástrojích, procesech a komunikaci s hosty. Zaměřeno na to, co jde zavést v malém týmu bez zbytečné byrokracie.',
      },
      {
        title: 'Dlouhodobá externí provozní podpora',
        description:
          'Pravidelná spolupráce: konzultace, doladění procesů, reakce na sezónní výkyvy. Spíš opora při rozhodnutích v provozu než formální řízení zvenku.',
      },
    ],
  },

  contact: {
    id: 'kontakt',
    email: 'david.eder78@gmail.com',
    phone: '+420 705 940 697',
    title: 'Kontakt',
    headline: 'Chcete zjednodušit provoz vašeho ubytování?',
    body:
      'Napište mi, podíváme se, kde má váš provoz největší prostor pro zlepšení. Krátká zpráva stačí, ozvu se s návrhem dalšího kroku.',
    emailLabel: 'E-mail',
    phoneLabel: 'Telefon',
    btnEmail: 'Napsat e-mail',
    btnCall: 'Zavolat',
    contactLead: 'Stačí krátká zpráva nebo telefonát.',
  },

  footer: {
    tagline: 'Automatizace a optimalizace provozu malých ubytovacích zařízení.',
    copyrightPrefix: '©',
  },
} as const
