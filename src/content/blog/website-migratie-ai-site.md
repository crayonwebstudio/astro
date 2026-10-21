---
title: "Een nieuwe AI-website: hoe neem je je vindbaarheid mee?"
seoTitle: "AI-website migreren: behoud je vindbaarheid"
description: "Een nieuwe site uit Lovable, Claude Code of Codex? Beperk SEO-verlies met een URL-mapping, redirects, canonicals en controles voor en na de livegang."
excerpt: "Je nieuwe website staat klaar, maar waar komen bezoekers via oude links terecht? Dit stuk laat zien hoe je de overstap naar een AI-gebouwde site voorbereidt, wat Google adviseert en welke redirects, canonicals en controles je nodig hebt voor en na de livegang."
pubDate: 2026-09-30
readingTime: "22 min lezen"
heroImage: "/blog/website-migratie-ai-site-header.jpg"
heroAlt: "Een koraalrode brug verbindt twee websitevensters: bezoekers vinden hun weg van de oude naar de nieuwe site."
author: "Dylan van den Bosch"
tags: ["Zichtbaarheid"]
---

## In dit stuk

- [Wat is een websitemigratie?](#wat-is-een-websitemigratie)

- [Waar het misgaat bij een AI-gebouwde site](#waar-het-misgaat-bij-een-ai-gebouwde-site)

- [De zeven stille verliezen](#de-zeven-stille-verliezen)

- [Canonicals: klein label, grote gevolgen](#canonicals-klein-label-grote-gevolgen)

- [De URL-mapping: het werk dat niemand wil doen](#de-url-mapping-het-werk-dat-niemand-wil-doen)

- [Redirects instellen: zo doe je het](#redirects-instellen-zo-doe-je-het)

- [Wat je in Search Console doet, voor en na de livegang](#wat-je-in-search-console-doet-voor-en-na-de-livegang)

- [Zo pakte Omnimerce het zelf aan](#zo-pakte-omnimerce-het-zelf-aan)

- [De checklist](#de-checklist)

- [Veelgestelde vragen](#veelgestelde-vragen)

- [Een nieuwe site, zonder je fundament kwijt te raken](#een-nieuwe-site-zonder-je-fundament-kwijt-te-raken)

> **Kort samengevat**

>

> - Een nieuwe site met nieuwe URL's is voor Google een migratie, ook als AI hem heeft gebouwd en hij er beter uitziet dan de oude.

> - De tool neemt je migratieplan niet over. Controleer de URL-mapping, redirects, canonicals en sitemap, en wat je hosting ondersteunt.

> - Google adviseert redirects minstens een jaar te laten staan en rekent op een paar weken voordat de meeste pagina's zijn verhuisd.

> - Stuur oude URL's naar de best passende nieuwe pagina. Veel oude URL's naar de homepage sturen kan als soft 404 worden behandeld.

Je nieuwe website staat klaar. Gebouwd met Lovable, Claude Code of Codex, en een stuk frisser dan de oude. Je hebt de teksten bekeken, het menu werkt en op je telefoon ziet alles er goed uit. Maar waar komt iemand terecht die op een oude link klikt?

Elke pagina die bezoekers uit Google trekt, heeft een adres. Verandert dat adres, dan moeten bezoekers en zoekmachines de opvolger kunnen vinden. Zonder goede verwijzing kan een oude zoekresultaatlink op een foutmelding uitkomen. En Google moet opnieuw bepalen welke pagina bij de zoekopdracht past. Een mooier ontwerp lost dat niet op.

Veranderen je URL's, platform of hosting, behandel de overstap dan als een migratie. Ook als de nieuwe site door AI is gebouwd en er van buiten ongeveer hetzelfde uitziet. In dit stuk lees je wat een migratie is, waar het bij AI-gebouwde sites misgaat, wat Google zelf adviseert en hoe je het stap voor stap goed doet. Met voorbeeldcode, de stappen in Search Console en een checklist die je kunt afwerken.

## Wat is een websitemigratie?

Bij een websitemigratie verander je bijvoorbeeld het domein, de URL-structuur, het platform of de hosting van je site. Alleen een andere kleur of een nieuw lettertype maakt een site nog geen migratie. Het gaat om veranderingen die invloed kunnen hebben op hoe zoekmachines je pagina's vinden en verwerken.

Google onderscheidt twee soorten verhuizingen:

- **Een verhuizing met URL-wijzigingen.** De adressen van je pagina's veranderen. Denk aan `/diensten/seo` dat `/expertise/zichtbaarheid` wordt, een ander domein, of een overstap van http naar https. Google heeft hier een uitgebreide handleiding voor ( [Google Search Central](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) ).

- **Een verhuizing zonder URL-wijzigingen.** De adressen blijven gelijk, maar de site draait op een ander platform of een andere server ( [Google Search Central](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes) ).

Welke soort op jouw site van toepassing is, hangt af van wat je verandert. Met AI bouwen verplicht je niet tot nieuwe URL's. Kies je wel een nieuwe structuur of andere paginanamen, dan moet je vastleggen waar elke oude pagina naartoe verhuist.

Google is daar ook eerlijk over. Voor een kleine tot middelgrote site duurt het volgens Google een paar weken voordat de meeste pagina's zijn verhuisd, en bij grotere sites langer. Ook als je alles goed doet, zie je dus een overgangsperiode.

## Waar het misgaat bij een AI-gebouwde site

Een bouwtool kan veel werk overnemen. Maar een werkende nieuwe site is nog geen afgeronde migratie. Welke stappen je zelf moet regelen, hangt af van de tool, je hosting en de informatie die je meegeeft.

### Codeeragents hebben je oude site nodig

Claude Code en Codex zijn codeeragents. Anthropic omschrijft Claude Code als een tool die je codebase leest, bestanden aanpast en commando's uitvoert ([Anthropic](https://code.claude.com/docs/en/overview)). Codex van OpenAI doet vergelijkbaar werk: code schrijven, bugs oplossen en wijzigingen voorstellen. Zulke agents kunnen prima redirects, canonicals en een sitemap bouwen, maar ze hebben daarvoor je oude URL's en de juiste hostinginformatie nodig. Neem de migratie expliciet op in je opdracht.

Dat laatste is het probleem. Begin je de nieuwe site in een leeg project, dan ontbreekt de voorgeschiedenis. Je oude URL's staan in je oude CMS, in Search Console en in je serverlogs, maar niet in dat nieuwe project. Een agent die je oude adressen niet kent, kan er ook geen redirects voor maken. En welke manier van redirecten werkt, hangt af van waar je de nieuwe site host. Dat bepaal je zelf.

### Lovable: een deel wordt al geregeld

Lovable pakt een deel van de techniek al voor je op, en het is eerlijk om dat te zeggen. Volgens de eigen documentatie gebruiken nieuwe apps sinds 13 mei 2026 standaard server-side rendering. Oudere React- en Vite-apps op Lovable-hosting krijgen pre-rendering voor geverifieerde zoek- en AI-crawlers ([Lovable](https://docs.lovable.dev/features/seo-aeo)). Je kiest een primair domein, en de andere gekoppelde domeinen sturen daar automatisch naartoe. En een ingebouwde SEO-controle helpt je een sitemap, robots.txt en canonicals te maken of te repareren.

Twee kanttekeningen. De documentatie zegt zelf dat die onderdelen "not always generated up front" worden, dus je moet ze wel laten maken en controleren. Een primair domein regelt bovendien nog niet de verhuizing van elk oud pad naar zijn nieuwe bestemming. De geraadpleegde SEO-pagina geeft daarvoor geen uitgewerkt migratieplan. Zoek dus uit hoe je dat regelt voordat je live gaat, en niet erna.

### Wat voor elke tool geldt

Het maakt niet uit waarmee je bouwt: de beslissingen over je URL's liggen bij jou. Welke oude pagina hoort bij welke nieuwe? Wat doe je met pagina's die niet meer terugkomen? Waar staan je redirects? Geen tool weet dat van zichzelf.

Je beperkt het aantal veranderingen als je bruikbare URL's behoudt en de nieuwe site leesbare HTML aan zoekmachines levert. Controleer ook of belangrijke inhoud behouden blijft. Een oude, specifieke dienstenpagina vervangen door een algemene alinea kan je vindbaarheid veranderen, zelfs met een goede redirect.

Verschijnt de inhoud pas via JavaScript in de browser, dan moet een zoekmachine die code eerst uitvoeren. Google kan dat, maar rendering kan mislukken en niet elke crawler ondersteunt JavaScript. Dat vraagt dus een extra controle. Over dat laatste, rendering, schrijf ik een apart stuk, want dat verdient meer ruimte dan een alinea.

## De zeven stille verliezen

Dit zijn zeven fouten die je vindbaarheid bij een migratie kunnen raken. Ze heten stil, omdat de nieuwe site er gewoon goed uitziet terwijl ze gebeuren.

### 1. Oude URL's die op een 404 uitkomen

Komt een oude URL na de verhuizing op een 404 uit, dan krijgt Google de melding dat de pagina niet bestaat. Een geïndexeerde pagina die een 404 geeft, verdwijnt na verloop van tijd uit de index ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/http-network-errors)). Bezoekers via bestaande links lopen dan vast; een relevante opvolger profiteert niet vanzelf van die verwijzingen.

Een 404 is niet altijd fout. Komt een pagina bewust niet terug en is er geen goede vervanger, dan is een 404 of 410 het eerlijke antwoord. Google behandelt die twee in de praktijk gelijk. Het gaat mis als pagina's verdwijnen die wel een opvolger hebben.

### 2. Alles naar de homepage sturen

De snelle oplossing is een regel die elke onbekende URL naar de homepage stuurt. Dan geeft niets een 404, toch? Google waarschuwt daar letterlijk voor: stuur niet veel oude URL's naar één niet-relevante bestemming, zoals de homepage, want dat verwart gebruikers en kan als soft 404 worden behandeld ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)). Een soft 404 wordt niet geïndexeerd, dus je hebt er niets aan gewonnen.

Stuur elke oude URL naar de pagina die inhoudelijk het meest op de oude lijkt. Is die er niet, laat de pagina dan een echte 404 geven.

![Schema met twee situaties. Boven: vier oude URL's sturen allemaal door naar de homepage, wat als soft 404 kan worden behandeld. Onder: /diensten/seo-webshops/ gaat naar /expertise/seo-voor-webshops/, /team/ en /over-ons/ gaan samen naar /over/, en /actie-zomer-2022/ geeft bewust een 404.](/blog/website-migratie-ai-site/homepage-of-opvolger.png)

*Dezelfde vier oude URL's, twee keer doorgestuurd. De adressen zijn verzonnen, de keuzes zie je terug in de URL-mapping verderop.*

### 3. Redirectketens

Een redirectketen ontstaat als een oude URL eerst naar een tweede adres stuurt en dat weer naar een derde. Dat gebeurt makkelijker dan je denkt, bijvoorbeeld als je de redirect van een oud pad combineert met een regel die alles naar https stuurt en een regel die www weghaalt. Googlebot volgt tot tien stappen, maar Google adviseert direct naar de eindbestemming te sturen, of anders de keten kort te houden: liefst niet meer dan drie stappen, en minder dan vijf.

### 4. Canonicals die de verkeerde kant op wijzen

Een canonical vertelt Google welke URL de voorkeursversie van een pagina is. Geef elke unieke pagina die je wilt laten indexeren een canonical naar het nieuwe eigen adres. Voor dubbele versies kies je juist één voorkeursadres. Wijst een unieke dienstenpagina naar de homepage of de testomgeving, dan geef je Google het verkeerde signaal. Daarover lees je hieronder meer, want canonicals verdienen een eigen hoofdstuk.

### 5. Een noindex of blokkade die blijft hangen

Tijdens het bouwen wil je niet dat Google de halve site al indexeert. Scherm de testomgeving af, bijvoorbeeld met een login. Gebruik je `noindex`, dan moet Google de pagina kunnen crawlen om die instructie te lezen. Een blokkade in robots.txt houdt crawlen tegen, maar voorkomt op zichzelf niet dat een URL in de index komt ([Google over noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing)). Google noemt het vergeten weghalen van die blokkades expliciet als een fout bij migraties. Het verraderlijke is dat een noindex niets zichtbaars doet: de site werkt, bezoekers zien niets geks, en Google laat de pagina's stilletjes vallen.

### 6. Een sitemap met de verkeerde URL's

Zet in de sitemap van je nieuwe site alleen de definitieve, indexeerbare voorkeursadressen. Geen testadressen of URL's die doorsturen. Dien die sitemap in bij Search Console.

Google noemt daarnaast een aparte sitemap met oude URL's als hulpmiddel om de verhuizing te volgen. Die kun je tijdelijk behouden voor de vergelijking. Dat is iets anders dan oude en nieuwe adressen door elkaar zetten in je actuele sitemap.

### 7. Interne links en bestanden die niet mee zijn verhuisd

Redirects vangen oude links van buitenaf op, maar je eigen site hoort meteen naar de nieuwe adressen te linken. Google adviseert expliciet de interne links op de nieuwe site bij te werken. Dat geldt ook voor bestanden die je vaak vergeet: afbeeldingen, video's, pdf's, en bij een meertalige site de hreflang-verwijzingen. Een menu dat via een redirect naar de juiste pagina komt, werkt voor de bezoeker. Maar elke interne link is ook een signaal aan Google, en dat signaal wil je direct op het juiste adres hebben.

## Canonicals: klein label, grote gevolgen

Een canonical is een regel in de kop van je pagina die zegt: dit is het officiële adres van deze inhoud. Hij bestaat omdat dezelfde inhoud vaak onder meerdere adressen bereikbaar is. Met en zonder www, met en zonder slash aan het eind, of met een parameter erachter.

Google gebruikt meerdere signalen om te bepalen welk adres de canonieke versie is, en weegt ze verschillend ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)):

| Signaal | Hoe sterk volgens Google |
| --- | --- |
| Een permanente redirect | Sterk signaal dat het doel canoniek is |
| Een `rel="canonical"`-regel | Sterk signaal |
| Opname in de sitemap | Zwak signaal |

Belangrijk om te weten: een canonical is een hint en geen bevel. Google beslist uiteindelijk zelf welk adres het toont. Hoe consistenter je signalen zijn, hoe groter de kans dat Google jouw keuze volgt. Een redirect naar A, een canonical naar B en een sitemap met C is precies wat je niet wilt.

Google adviseert volledige adressen en één consistente canonical. Zet die bij voorkeur in de HTML die de server levert. Via JavaScript toevoegen kan ook, maar verander daarmee geen al aanwezige canonical naar een ander adres ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)).

Bij een site die je snel met AI bouwt, let ik op drie dingen. Het zijn geen fouten die Google als lijst publiceert, maar ze volgen logisch uit hoe zo'n site ontstaat:

- **Een canonical naar het testadres.** Een site wordt vaak eerst gebouwd op een tijdelijk adres van het platform. Staat dat adres nog in de canonical als je live gaat, dan wijs je Google naar een adres dat je niet wilt laten ranken.

- **Dezelfde canonical op elke pagina.** Wordt de kop van de homepage als sjabloon hergebruikt, dan wijst elke pagina naar de homepage. Voor Google zeg je dan dat al je pagina's kopieën zijn.

- **Een canonical die alleen in de browser bestaat.** Staat de regel niet in de HTML die de server levert, maar komt hij pas via JavaScript, dan hang je af van of Google de pagina rendert.

Controleer het op een paar pagina's met de URL-inspectie in Search Console. Bij geïndexeerde pagina's kun je jouw opgegeven canonical vergelijken met de keuze van Google. Een live test voorspelt die keuze niet.

## De URL-mapping: het werk dat niemand wil doen

Een URL-mapping is een lijst met elke oude URL en waar die naartoe gaat. Het is het saaiste onderdeel van een migratie, en het belangrijkste. Google begint er ook mee: verzamel je oude URL's, bijvoorbeeld uit je sitemap en je serverlogs, en bepaal voor elke URL waar die naartoe moet.

Haal je oude URL's uit zoveel mogelijk bronnen, want geen enkele bron is volledig:

- **Je huidige sitemap.** De pagina's die je zelf belangrijk vond.

- **Search Console.** De pagina's die daadwerkelijk vertoningen en klikken krijgen, ook als ze niet meer in je sitemap staan.

- **Je analytics.** De pagina's waar bezoekers binnenkomen.

- **Je serverlogs.** Adressen die worden opgevraagd, ook oude die je zelf vergeten bent.

- **Je backlinks.** Pagina's waar andere sites naar linken. Die wil je in elk geval niet verliezen.

Daarna maak je per URL een keuze:

| Oude URL | Nieuwe URL | Keuze |
| --- | --- | --- |
| `/diensten/seo-webshops/` | `/expertise/seo-voor-webshops/` | Naar de inhoudelijk gelijkwaardige opvolger |
| `/blog/tips-2021/` | `/blog/tips-2021/` | Adres blijft gelijk, geen redirect nodig |
| `/team/` en `/over-ons/` | `/over/` | Twee pagina's samengevoegd in één |
| `/actie-zomer-2022/` | Geen | Bewust een 404, want er is geen opvolger |

De voorbeelden zijn verzonnen om de keuzes te laten zien. Het principe is echt: elke rij is een beslissing. Zonder die lijst merk je ontbrekende verwijzingen vaak pas als bezoekers erop vastlopen.

Een tip die veel werk scheelt: houd waar het kan je oude adressen aan. Een URL die niet verandert, hoeft ook niet te worden doorgestuurd. Vraag je een codeeragent om een nieuwe site, geef dan je lijst met bestaande adressen mee en vraag hem die structuur te volgen. Een nieuwe structuur is alleen de moeite waard als hij echt beter is.

## Redirects instellen: zo doe je het

Een redirect stuurt een oude URL door naar een nieuwe. Welke soort je gebruikt, maakt uit ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/301-redirects)):

| Soort | Betekenis voor Google |
| --- | --- |
| 301 en 308 | Permanent. Een signaal aan Google om de nieuwe URL als voorkeursadres te gebruiken. |
| 302 en 307 | Tijdelijk. Geeft op zichzelf geen signaal om het voorkeursadres te vervangen. |
| JavaScript-redirect | Alleen als het niet anders kan, want als het renderen mislukt, ziet Google hem misschien nooit. |

Google raadt waar mogelijk een permanente redirect aan die de server zelf uitvoert. Die is voor zoekmachines en bezoekers het betrouwbaarst. Waar je die regels zet, hangt af van je hosting. Drie veelvoorkomende varianten:

### Apache en .htaccess

Draait je site op Apache en staat je hosting regels in `.htaccess` toe, dan kun je daar redirects instellen. De eenvoudigste vorm stuurt een oud pad door naar een nieuw, inclusief alles wat eronder hangt ([Apache](https://httpd.apache.org/docs/2.4/mod/mod_alias.html)):

```apache
Redirect 301 /diensten /expertise
```

Met deze regel gaat ook `/diensten/seo` naar `/expertise/seo`. Wil je meer controle, dan gebruik je `RewriteRule`. In het project van Omnimerce staan deze regels voor oude paden:

```apache
RewriteEngine On
RewriteRule ^diensten/?$ /expertise/ [L,R=301]
RewriteRule ^diensten/(.+)$ /expertise/$1 [L,R=301]
RewriteRule ^principes/?$ /ai-en-data/ [L,R=301]
```

Deze regels passen alleen het pad aan. Ze zetten een verzoek via http of www niet tegelijk om naar het definitieve domein. Wil je dat ook in één stap doen, dan moet de bestemming het volledige eindadres bevatten. Gebruik een regel voor alle onderliggende paden alleen als die nieuwe pagina's ook echt bestaan.

### Netlify

Op Netlify zet je redirects in een bestand `_redirects`. Een `*` en `:splat` sturen een heel pad in één regel door ([Netlify](https://docs.netlify.com/manage/routing/redirects/overview/)):

```
/diensten/*    /expertise/:splat    301
/over-ons      /over                301
```

Let op één eigenaardigheid: Netlify voert een redirect standaard niet uit als er op het oude adres nog een bestand bestaat. Controleer of dat bestand weg kan, of gebruik bewust een geforceerde redirect. Netlify legt dat uit bij [shadowing](https://docs.netlify.com/manage/routing/redirects/rewrites-proxies/#shadowing).

### Vercel

Op Vercel staan redirects in `vercel.json`. Let hier op de statuscode: met `permanent: true` krijg je een 308, met `permanent: false` een 307. Wil je een 301, geef dan `statusCode` op ([Vercel](https://vercel.com/docs/project-configuration/vercel-json)):

```json
{
  "redirects": [
    { "source": "/diensten/:path*", "destination": "/expertise/:path*", "statusCode": 301 },
    { "source": "/over-ons", "destination": "/over", "permanent": true }
  ]
}
```

Voor Google zijn 301 en 308 allebei permanent, dus beide werken.

### Controleer of je server de regels echt leest

Een redirectbestand dat niemand uitvoert, doet niets. Dat klinkt vanzelfsprekend, maar het gaat vaker mis dan je denkt. Een `.htaccess` werkt bijvoorbeeld alleen als Apache het verzoek afhandelt. Staat er een andere webserver voor die de pagina's zelf levert, dan wordt het bestand genegeerd. Test daarom na de livegang een handvol oude adressen en kijk of ze met een 301 of 308 op de juiste plek uitkomen. Dat kan met de netwerkweergave van je browser, of met een redirectchecker.

En laat de redirects staan. Google adviseert ze zo lang mogelijk te bewaren, doorgaans minstens een jaar. Dat geeft Google tijd om oude adressen opnieuw te bezoeken en signalen aan de nieuwe URL's toe te kennen. Links op andere websites veranderen er niet door; vraag belangrijke verwijzers hun links bij te werken.

## Wat je in Search Console doet, voor en na de livegang

Search Console is je controlekamer tijdens een migratie. Dit zijn de stappen.

**Voor de livegang:**

- **Zorg dat je beide versies kunt zien.** Heb je een property voor je huidige site, en voor de nieuwe als het domein verandert? Google noemt de juiste instellingen in Search Console voor oud en nieuw expliciet als voorbereiding.

- **Exporteer je best presterende pagina's.** Het prestatieoverzicht laat zien welke pagina's klikken en vertoningen krijgen. Die lijst is de basis van je URL-mapping, en straks je ijkpunt om te zien of alles is aangekomen.

- **Neem je instellingen mee naar een nieuw domein.** Google adviseert de instellingen van de oude property na te lopen en over te zetten. Heb je op de oude site een disavow-bestand geüpload, upload het dan opnieuw bij de nieuwe property.

**Op de dag zelf:**

- **Dien je nieuwe sitemap in.** Houd eventueel een aparte sitemap met oude URL's aan om de voortgang te vergelijken. Dat is een hulpmiddel, geen voorwaarde voor een geslaagde verhuizing.

- **Controleer je belangrijkste pagina's met de URL-inspectie.** Wordt de pagina gevonden, mag hij worden geïndexeerd, en welke canonical ziet Google?

- **Gebruik de tool Adreswijziging alleen als je domein verandert.** Die tool is bedoeld voor een overstap naar een ander domein of subdomein ( [Google Search Console Help](https://support.google.com/webmasters/answer/9370220) ). Voor een overstap van http naar https, voor andere paden op hetzelfde domein of voor een wissel tussen www en zonder www gebruik je het niet. Gebruik je het wel, dan moet je eigenaar zijn van beide properties en moet je oude homepage met een 301 naar de nieuwe sturen. De adreswijziging werkt 180 dagen door. Verwar die termijn niet met het algemene advies voor redirects: houd die minstens een jaar aan, en liefst langer als oude links nog worden gebruikt.

**De weken erna:**

- **Volg het indexeringsrapport voor pagina's.** Pagina's met een omleiding zijn daar normaal: dat zijn je oude adressen. Let op pagina's die als soft 404 worden gemarkeerd, pagina's die door een noindex worden uitgesloten, en pagina's waarvoor Google een andere canonical kiest dan jij.

- **Vergelijk je prestaties met je ijkpunt.** Een tijdelijke schommeling is normaal. Google rekent op een paar weken voordat de meeste pagina's zijn verhuisd. Blijft een belangrijke pagina weg, zoek dan eerst in je redirects en je canonical.

## Zo pakte Omnimerce het zelf aan

Twee keer is op omnimerce.com zelf een deel van de site verhuisd. De pagina over mijn diensten heette eerst `/diensten/` en is `/expertise/` geworden, met de vier onderliggende pagina's erbij. En de pagina `/principes/` is opgegaan in `/ai-en-data/`. Allebei kregen ze een permanente redirect in de `.htaccess`, de regels die je hierboven ziet.

Twee lessen uit die verhuizingen neem ik mee als ik een migratie begeleid.

**Een padredirect is nog niet de hele route.** De regels hierboven staan vóór de regels voor https en het domein zonder www. Toch levert die volgorde op zichzelf geen redirect in één sprong op. De bestemmingen bevatten alleen een pad, waardoor http of www nog een extra stap kan vragen. Controleer dus ook die varianten. Wil je direct op het definitieve adres uitkomen, gebruik dan dat volledige adres als bestemming. En kijk wat je hosting zelf al doorstuurt: op omnimerce.com zet de hosting http om naar https voordat de `.htaccess` aan de beurt is.

![Schema van twee routes naar https://biite.nl/expertise/. Het oude adres http://www.biite.nl/diensten/ doet er drie sprongen over: de hosting zet http om naar https, de padregel in de .htaccess stuurt door naar /expertise/, en een regel haalt www weg. Het adres https://biite.nl/diensten/ komt er in één sprong, via de padregel.](/blog/website-migratie-ai-site/redirectketen-omnimerce.png)

*Gemeten op omnimerce.com op 30 september 2026. Hetzelfde oude pad, twee routes: welke je krijgt, hangt af van hoe de link begint.*

**Controleer per pagina, niet alleen de centrale instelling.** De site heeft één centrale schakelaar die bepaalt of pagina's `noindex` dragen. Eén pagina bleek in zijn eigen bronbestand een eigen robots-regel te hebben, en die ging voor de schakelaar. Daardoor deed die pagina iets anders dan de rest van de site. Bij een build met de centrale noindex-schakelaar aan worden daarom eerst bestaande robots-tags verwijderd. Daarna wordt de centrale instructie gezet. De les is breder: een instelling die op "goed" staat, zegt niets over een pagina die er zelf iets anders over zegt. Controleer het op de pagina's zelf.

En een derde, praktische: de redirects staan in het project zelf en gaan bij elke nieuwe upload mee. Ze staan dus niet los op een server waar ze bij een volgende verhuizing makkelijk vergeten worden.

## De checklist

Werk deze lijst af, in deze volgorde. Hij is gebaseerd op de migratiehandleiding van Google en aangevuld met wat ik bij elke migratie controleer.

![Tijdlijn in vijf stappen. Voor de livegang: oude URL's verzamelen, de mapping maken, redirects en canonicals klaarzetten. De dag zelf: redirects live, blokkades weg, de nieuwe sitemap indienen en je belangrijkste pagina's inspecteren. De eerste weken: bij een kleine tot middelgrote site duurt het een paar weken voordat de meeste pagina's zijn verhuisd. 180 dagen: zo lang werkt de tool Adreswijziging door, alleen bij een ander domein of subdomein. Minstens een jaar: laat de redirects staan, en langer als oude links nog worden gebruikt.](/blog/website-migratie-ai-site/tijdlijn-migratie.png)

*De termijnen komen uit de migratiehandleiding van Google en de helppagina over de tool Adreswijziging.*

**Voor de livegang**

| Stap | Waarom |
| --- | --- |
| Verzamel alle oude URL's uit sitemap, Search Console, analytics, logs en backlinks | Zo mis je minder pagina's met bezoekers of verwijzingen |
| Maak de URL-mapping: per oude URL een nieuwe, samengevoegd of bewust weg | Elke keuze die je niet maakt, maak je per ongeluk |
| Houd oude adressen aan waar dat kan | Wat niet verandert, hoeft niet te worden doorgestuurd |
| Zoek uit waar en hoe je host redirects uitvoert | Test of oude adressen op de juiste opvolger uitkomen |
| Geef unieke, indexeerbare pagina's een canonical naar hun volledige eigen adres | Zo maak je het gewenste voorkeursadres duidelijk |
| Bouw een sitemap met alleen nieuwe, indexeerbare URL's | De sitemap is je lijst voor Google |
| Werk interne links, afbeeldingen en eventuele hreflang bij | Je eigen site hoort meteen naar de juiste adressen te wijzen |
| Exporteer je best presterende pagina's uit Search Console | Je ijkpunt voor na de livegang |

**Op de dag zelf**

| Stap | Waarom |
| --- | --- |
| Verwijder ongewenste noindex- en crawlblokkades op de live site | Een vergeten blokkade laat je site stil verdwijnen |
| Zet de redirects live en test een reeks oude URL's | Controleer op 301 of 308 en op de juiste bestemming |
| Controleer op ketens en op redirects naar de homepage | Eén sprong, naar de best passende pagina |
| Dien de nieuwe sitemap in; bewaar de oude eventueel apart voor monitoring | Zo leert Google de nieuwe adressen kennen |
| Controleer je belangrijkste pagina's met de URL-inspectie | Indexeerbaar, en met de juiste canonical |
| Gebruik de tool Adreswijziging alleen bij een ander domein of subdomein | Voor andere migraties is het niet bedoeld |

**De weken erna**

| Stap | Waarom |
| --- | --- |
| Volg het indexeringsrapport voor pagina's | Soft 404's, noindex en afwijkende canonicals vallen hier op |
| Verwijder een apart bijgehouden oude sitemap als je die niet meer nodig hebt voor monitoring | Je actuele sitemap bevat de definitieve adressen |
| Vergelijk je prestaties met je ijkpunt | Zie welke pagina's niet zijn aangekomen |
| Repareer ontbrekende redirects zodra je ze vindt | Voorkom dat bezoekers via oude links blijven vastlopen |
| Laat de redirects minstens een jaar staan | Geeft Google tijd om signalen aan de nieuwe URL's toe te kennen |
| Zet oude hosting pas uit als de redirects elders blijven werken; behoud zo nodig het oude domein en TLS-certificaat | De oude site hoeft niet te blijven draaien, maar de omleidingen wel |

## Veelgestelde vragen

### Verlies ik posities als ik overstap naar een AI-website?

Dat hoeft niet, maar reken op een overgangsperiode. Google gaat bij een kleine tot middelgrote site uit van een paar weken voordat de meeste pagina's zijn verhuisd. Het echte risico zit in wat er bij de overstap wordt overgeslagen: oude URL's zonder redirect, canonicals die verkeerd staan of een noindex die blijft hangen. Met die stappen beperk je onnodig verlies. Ze geven geen garantie op dezelfde posities, zeker niet als je ook de inhoud of structuur flink verandert.

### Hoe lang moeten redirects blijven staan?

Zo lang mogelijk. Google adviseert doorgaans minstens een jaar. De 180 dagen van de adreswijziging in Search Console zijn een andere termijn. Gebruik die niet als einddatum voor je redirects. Laat ze langer staan als oude links nog bezoekers brengen.

### Moet ik een 301 of een 302 gebruiken?

Voor een verhuizing een 301 of 308. Dat zijn permanente redirects: je geeft Google het signaal dat de nieuwe URL de opvolger is. Een 302 of 307 is bedoeld voor een tijdelijke omleiding.

### Heb ik de tool Adreswijziging van Google nodig?

Alleen als je naar een ander domein of subdomein verhuist. Voor nieuwe paden op hetzelfde domein, een overstap van http naar https of een wissel tussen www en zonder www is het niet bedoeld.

### Mag ik oude pagina's gewoon laten verdwijnen?

Ja, als er echt geen opvolger is. Een 404 of 410 is dan het eerlijke antwoord, en Google behandelt die twee in de praktijk gelijk. Stuur zulke pagina's niet allemaal naar de homepage, want dat kan als soft 404 worden behandeld.

### Doet een tool als Lovable dit niet allemaal voor me?

Een deel wel. Op Lovable-hosting krijgen nieuwe apps server-side rendering. Je kunt een primair domein kiezen en controles op sitemap, robots.txt en canonicals laten uitvoeren. Daarmee zijn je oude paden nog niet aan de juiste nieuwe pagina's gekoppeld. Die mapping en de werking van de redirects moet je apart controleren.

## Een nieuwe site, zonder je fundament kwijt te raken

Een snelle site uit Lovable, Claude Code of Codex kan een flinke stap vooruit zijn. Een migratie vraagt daarnaast werk dat je aan het ontwerp niet afziet: een lijst met oude adressen, een redirect per regel, een canonical per pagina, en een paar weken meekijken in Search Console.

Bij Omnimerce is techniek de vaste ingang van het werk, en een migratie is precies het moment waarop dat telt. Ik begin altijd met doorlichten: welke pagina's dragen nu je vindbaarheid, en wat moet er meeverhuizen? Pas daarna wordt er gebouwd. Wie het doorlicht, begeleidt ook de livegang, zodat de mapping en de redirects niet tussen twee partijen in komen te liggen. Hoe dat in fases loopt, lees je bij de [werkwijze](/werkwijze/).

Dit is het eerste stuk in een reeks. Binnenkort schrijf ik over rendering, oftewel wat zoekmachines en AI-crawlers te zien krijgen van een site die in de browser wordt opgebouwd, en over het meeverhuizen van je tracking. Wil je weten hoe zoekmachines en antwoordmachines je nieuwe site lezen, begin dan bij [Vindbaar en toch niet gevonden](/blog/vindbaar-en-toch-niet-gevonden/).

Sta je op het punt over te stappen, of ben je net live en zie je posities zakken? Laat dan eerst uitzoeken welke pagina's en verwijzingen je dreigt te verliezen. Bij [zichtbaarheid](/expertise/zichtbaarheid/) lees je hoe ik je vindbaarheid doorlicht. De redirects, sitemaps en controles op je hosting vallen onder [data en techniek](/expertise/data-en-techniek/).

## Wie dit schreef

**Dylan van den Bosch**, Oprichter van Omnimerce. [wie is Omnimerce](/over/) · [LinkedIn](https://www.linkedin.com/in/dylan-van-den-bosch/)

Dit stuk raakt aan [Zichtbaarheid](/expertise/zichtbaarheid/). Daar staat wat er precies onder valt en wanneer het niet past.

## Meer lezen

- ["Het las zo lekker" Waarom je AI content toch posities verliest in Google](/blog/posities-kwijt-na-ai-content/)

- [Vindbaar en toch niet gevonden](/blog/vindbaar-en-toch-niet-gevonden/)

- [Geen paspoort, geen productie: grip en audit trails voor je AI-agents](/blog/agent-passport-ai-agents-register/)
