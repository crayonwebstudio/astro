// SINGLE CONTENT FILE - edit everything here, no CMS needed.
// Change text, links, numbers, lists in this file and rebuild.
// All pages read from this file.

export const site = {
  name: "Biite",
  tagline: "Marketing die klopt tot in de systemen",
  description: "Strategische online marketing waarbij techniek, data en uitvoering op een lijn zitten.",
  email: "hallo@biite.nl",
  phoneDisplay: "06 19618278",
  phoneLink: "+31619618278",
  linkedin: "https://www.linkedin.com/company/biite-agency",
  ctaLabel: "plan een kennismaking",
  ctaHref: "/contact/",
};

export const nav = [
  { label: "Expertise", href: "/expertise/" },
  { label: "Werkwijze", href: "/werkwijze/" },
  { label: "Het bureau", href: "/over/" },
  { label: "Blog", href: "/blog/" },
];

export const home = {
  heroTitleA: "Marketing die",
  heroTitleB: "klopt",
  heroTitleC: "tot in de",
  heroTitleD: "systemen",
  heroLead: "Wij helpen je meer uit online marketing te halen door strategie, website, data en systemen op elkaar aan te laten sluiten. Zo meet je wat werkt en bouw je daarop verder.",
  heroSecondaryLabel: "bekijk de werkwijze",
  heroSecondaryHref: "/werkwijze/",
  stats: [
    { label: "Leads", value: "341" },
    { label: "Verkeer", value: "17.012" },
    { label: "Conversie", value: "2,0%" },
  ],
  statsNote: "Afgelopen 28 dagen",
  statsPrev: "Vorige periode",
  scribble: "Groei die blijft",
  quote: "Je strategie en je systemen worden zelden samen bedacht.",
  quoteBody: [
    "Je marketingplan, je website en de keuze voor een nieuw systeem ontstaan vaak los van elkaar. Ondertussen wil je weten welke inspanningen klanten opleveren.",
    "Wij brengen die keuzes bij elkaar. We kijken wat je wilt bereiken, wat je daarvoor moet kunnen meten en hoe je systemen dat ondersteunen. Samen met jou en, waar nodig, de mensen met wie je werkt.",
  ],
  servicesTitle: "Waar wij je bij helpen",
  services: [
    {
      title: "Data en techniek",
      href: "/expertise/data-en-techniek/",
      points: ["Systemen die samenwerken", "Meten wat marketing oplevert", "Cijfers waarmee je keuzes kunt maken"],
    },
    {
      title: "Zichtbaarheid",
      href: "/expertise/zichtbaarheid/",
      points: ["Beter vindbaar in Google (SEO)", "Zichtbaarheid in AI-antwoorden (GEO)", "Meer bezoekers naar een aanvraag helpen (CRO)"],
    },
    {
      title: "Merk en taal",
      href: "/expertise/merk-en-taal/",
      points: ["Duidelijk maken wat je biedt en voor wie", "Herkenbare taal op al je kanalen", "Missie en visie vertalen naar je merk"],
    },
    {
      title: "Werken met AI",
      href: "/expertise/werken-met-ai/",
      points: ["Klein testen, uitbreiden wat werkt", "Afspraken over gegevens en controle", "Vastleggen wat goed werkt, zodat je verder kunt"],
    },
  ],
  aboutEyebrow: "Even voorstellen",
  aboutTitle: "Dit is Biite. We bijten ons vast in wat jouw marketing verder helpt.",
  aboutBody: [
    "Wij brengen marketingplannen en uitvoering bij elkaar. We denken mee over wat je wilt bereiken en kijken meteen wat je website, data en systemen daarvoor moeten kunnen.",
    "We bijten ons vast in je vraag, maken keuzes en werken mee aan de uitvoering. Je hebt een vast aanspreekpunt dat je situatie kent en betrokken blijft, van het eerste gesprek tot de oplevering.",
  ],
  aboutImageAlt: "REPLACE IMAGE - portret 4:5, vervang door je eigen foto in /public/",
  aboutImageFile: "/about-placeholder.jpg",
  aboutCtaLabel: "bekijk waar ik je mee kan helpen",
  aboutCtaHref: "/expertise/",
  aboutLinkLabel: "Meer over Biite",
  aboutLinkHref: "/over/",
  processTitle: "Je weet vooraf wat er gaat gebeuren.",
  finalCtaTitle: "Laten we samen kijken waar groei vastloopt",
  finalCtaBody: "Je bespreekt je vraag met iemand die ook bij de uitvoering betrokken blijft. Samen bekijk je wat nodig is en welke eerste stap past. Past je vraag beter bij een andere specialist, dan hoor je dat.",
  finalCtaSecondaryLabel: "of lees eerst waar Biite aan werkt",
  finalCtaSecondaryHref: "/blog/",
  processSteps: [
    {
      title: "Kennismaking",
      text: "Je vertelt wat je wilt bereiken en waar je tegenaan loopt. Samen verkennen we je vraag, online of op locatie als je dat prettiger vindt.",
    },
    {
      title: "Eerste inzichten en voorstel",
      text: "Je krijgt een eerste presentatie en een voorstel met doelen, afbakening, planning en kosten. Pas na jouw akkoord begint de opdracht.",
    },
    {
      title: "Aan de slag",
      text: "Wij duiken in je systemen, data en marketingprocessen. De bevindingen worden vertaald naar verbeteringen die bijdragen aan de afgesproken doelen.",
    },
  ],
  processLinkLabel: "De hele werkwijze, in vijf fases",
  processLinkHref: "/werkwijze/",
};

export const werkwijze = {
  title: "Werkwijze",
  lead: "Vijf fases, van eerste gesprek tot oplevering. Je weet vooraf wat er gebeurt, wat het kost en wat je krijgt.",
  steps: [
    { n: "01", title: "Kennismaking", text: "We verkennen je vraag, je doelen en waar je nu tegenaan loopt." },
    { n: "02", title: "Eerste inzichten en voorstel", text: "Je krijgt doelen, afbakening, planning en kosten. Pas na akkoord starten we." },
    { n: "03", title: "Onderzoek", text: "We duiken in je systemen, data en marketingprocessen." },
    { n: "04", title: "Uitvoering", text: "We voeren verbeteringen door die bijdragen aan de afgesproken doelen." },
    { n: "05", title: "Oplevering en verder", text: "Je krijgt een heldere oplevering en afspraken over wat daarna nodig is." },
  ],
};

export const over = {
  title: "Het bureau",
  lead: "Een vast aanspreekpunt dat je situatie kent, van eerste gesprek tot oplevering.",
  body: [
    "Biite werkt waar strategie, techniek, zichtbaarheid, taal en AI elkaar raken.",
    "Een aanspreekpunt, van het eerste gesprek tot de oplevering. Geen losse adviezen, maar keuzes die ook in je systemen kloppen.",
  ],
  founderName: "Dylan van den Bosch",
  founderRole: "Oprichter",
};

export const expertiseIndex = {
  title: "Expertise",
  lead: "Vier gebieden die samen je marketing laten kloppen.",
  intro: "Kies een gebied om te zien wat we doen, hoe we werken en wat het oplevert.",
};

export const contactPage = {
  title: "Contact",
  lead: "Plan een kennismaking. Vertel kort wat je wilt bereiken en waar je tegenaan loopt.",
  emailLabel: "Mail",
  phoneLabel: "Bel",
};

export const footer = {
  tagline: "Marketing die klopt tot in de systemen.",
  intro: "Voor bedrijven die al in marketing investeren en meer samenhang zoeken tussen hun team, website en systemen.",
  navTitle: "Navigatie",
  navLinks: [
    { label: "Expertise", href: "/expertise/" },
    { label: "Werkwijze", href: "/werkwijze/" },
    { label: "AI en data", href: "/expertise/data-en-techniek/" },
    { label: "Blog", href: "/blog/" },
    { label: "Wie is Biite", href: "/over/" },
    { label: "Contact", href: "/contact/" },
  ],
  expertiseTitle: "Expertise",
  expertiseLinks: [
    { n: "01", label: "Data en techniek", href: "/expertise/data-en-techniek/" },
    { n: "02", label: "Zichtbaarheid", href: "/expertise/zichtbaarheid/" },
    { n: "03", label: "Merk en taal", href: "/expertise/merk-en-taal/" },
    { n: "04", label: "Werken met AI", href: "/expertise/werken-met-ai/" },
  ],
  contactTitle: "Contact",
  legalLine: "2026 Biite - KvK 42153735 - btw NL005540062B37 - VERVANG MET JE EIGEN GEGEVENS",
  legal: [
    { label: "Algemene voorwaarden", href: "/algemene-voorwaarden/" },
    { label: "Privacyverklaring", href: "/privacy/" },
  ],
};
