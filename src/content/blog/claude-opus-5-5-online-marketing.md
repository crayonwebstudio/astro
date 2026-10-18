---
title: "Claude Opus 5.5: wat het nieuwe model verandert aan je online marketing"
description: "Wat Claude Opus 5.5 kan, wat de eerste testers ervan vinden en wat het verandert aan je online marketing, van audits en analyse tot de afspraken eromheen."
pubDate: 2026-09-23
readingTime: "10 min lezen"
heroImage: "/blog/claude-opus-5-5-online-marketing-header.jpg"
author: "Dylan van den Bosch"
tags: ["Werken met AI"]
---

## In dit stuk

- [Wat is er nieuw aan Claude Opus 5.5?](#wat-is-er-nieuw-aan-claude-opus-5-5)

- [Wat vinden de eerste gebruikers ervan?](#wat-vinden-de-eerste-gebruikers-ervan)

- [Wat de aankondiging je niet vertelt](#wat-de-aankondiging-je-niet-vertelt)

- [Wat verandert er voor je online marketing?](#wat-verandert-er-voor-je-online-marketing)

- [Hoe werk je het best met Opus 5.5?](#hoe-werk-je-het-best-met-opus-5-5)

- [Veelgestelde vragen](#veelgestelde-vragen)

- [Zo begin je](#zo-begin-je)

> **Kort samengevat**

>

> - Volgens Anthropic levert Opus 5.5 op veel werk het niveau van Fable 5.1. De API-tarieven voor input en output zijn 4 en 20 dollar per miljoen tokens, een vijfde minder dan Opus 5.

> - Anthropic meldt ongeveer 40 procent lagere kosten op typische taken. Je eigen API-besparing hangt af van tokenverbruik, cachegebruik en instellingen; dit is geen korting op een chatabonnement.

> - Voor online marketing verwacht ik de meeste winst bij audits met veel stappen en bij analyses die eerder te duur waren. Dat moet op je eigen werk blijken.

> - Je werkwijze blijft vrijwel gelijk. Een paar promptgewoontes kun je beter loslaten.

Op 22 september kondigde Trump bij de Verenigde Naties aan dat hij AI in Amerikaanse overheidsdocumenten super intelligence wil noemen. Wanneer en hoe dat wordt ingevoerd, was nog onduidelijk ([Washington Post](https://www.washingtonpost.com/technology/2026/09/22/trump-says-hes-renaming-ai-super-intelligence/)). Een model slimmer maken is lastig. Een nieuwe naam geven gaat een stuk sneller.

Anthropic koos dezelfde dag de lastige route en bracht [Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5) uit. Dat kreeg minder aandacht, maar voor marketeers betekent het een stuk meer.

Bij Biite is Opus het model waar ik het vaakst naar grijp. Ik gebruik het voor analyses, voor het bouwen en doorlichten van websites en voor het vinden van de patronen die je met de hand over het hoofd ziet. Een nieuwe versie merk ik dus meteen in mijn dagelijkse werk, en sinds de release draait Opus 5.5 bij mij al mee. Eén dag is te kort voor een eindoordeel. Het is wel genoeg om te zien waar dit model het verschil gaat maken in jouw marketing, en waar je beter nog even kritisch blijft.

## Wat is er nieuw aan Claude Opus 5.5?

In één zin: volgens Anthropic krijg je op veel werk het niveau van Fable 5.1 voor minder geld dan je voor Opus 5 betaalde. Anthropic spreekt van ongeveer 40 procent lagere kosten op typische taken bij standaardinstellingen en ruim 30 procent snellere output. Daarbij rondt het taken in minder stappen af. Klanten als GitHub en Lovable melden dat hetzelfde werk in een derde tot de helft minder stappen klaar is.

|  | Opus 5 | Opus 5.5 |

| --- | --- | --- |

| Input per miljoen tokens | $5 | $4 |

| Output per miljoen tokens | $25 | $20 |

| Uit de cache lezen per miljoen tokens | $0,50 | $0,20 |

| GDPval-AA (kenniswerk) | 1708 Elo | 1846 Elo |

| OSWorld 2.0 (zelfstandig een computer bedienen) | 74,0% | 81,8% |

| Terminal-Bench 4.0 (werk in de terminal) | 52,3% | 66,4% |

Voor marketing zijn twee regels uit die tabel interessanter dan de rest. GDPval meet kenniswerk, zoals analyses, rapporten en onderbouwde voorstellen. OSWorld meet hoe goed een model zelfstandig door schermen en programma's werkt. Leg die twee naast elkaar en je hebt ongeveer de functieomschrijving van een marketinganalist.

Werkt je organisatie met een IT-afdeling of een privacyfunctionaris, dan zijn er nog twee punten die je wilt kennen. In een specifieke test van Anthropic probeerde het model ongeveer 85 procent minder vaak zijn afscherming te omzeilen dan Opus 5. Ook op de geteste aanvallen via prompt injection presteert het beter: instructies die ergens in een webpagina of document verstopt zitten en een model iets anders laten doen dan jij bedoelde. Dat zijn testresultaten, geen garantie voor elke praktijksituatie.

Opus 5.5 ondersteunt daarnaast zero data retention voor daarvoor geschikte toepassingen. Dat vraagt een afspraak met Anthropic en activering per organisatie. Het is geen algemene schakelaar in Claude Free, Pro of Max. Ook onder zo'n afspraak gelden uitzonderingen en vallen niet alle functies of externe koppelingen eronder ([voorwaarden voor dataretentie](https://platform.claude.com/docs/en/manage-claude/api-and-data-retention)).

## Wat vinden de eerste gebruikers ervan?

De eerste reacties zijn overwegend positief, en dat valt op. Over Opus 5 waren de testers van Every nog wisselend te spreken ([Every over Opus 5](https://every.to/vibe-check/opus-5)). Dit keer klinkt het anders ([Every](https://every.to/vibe-check/vibe-check-opus-5-5-is-pulling-our-codex-converts-back-to-claude)). Kieran Klaassen gebruikt Opus 5.5 inmiddels in plaats van Fable 5.1 als zijn dagelijkse model. Tyler Nishida, die eerder naar de modellen van OpenAI was overgestapt, schrijft dat zijn mond deze week "at least five or six times" openviel. Wat bij meerdere testers terugkomt, is dat het model instructies beter volgt en kortere, beter leesbare tekst schrijft.

Hetzelfde team is ook eerlijk over de zwakke plekken, en die zijn voor marketeers minstens zo interessant. Het model verstopt de kern van een tekst soms halverwege, het stelt slecht prioriteiten als er een deadline is, en zonder sturing verbruikt het veel tokens. Dan Shipper blijft voor kenniswerk zelfs liever bij OpenAI. Dat mag je serieus nemen, want in marketing draait het vaker om analyse en tekst dan om code.

Het codereviewplatform [CodeRabbit](https://www.coderabbit.ai/blog/opus-5-5-model-review) liet het model los op bekende bugpatronen. Op de lastigste set vond Opus 5.5 er 8 tot 10 van de 13, tegen 5 bij hun huidige opzet. Op de bredere set vond het iets meer fouten, maar vooral een andere combinatie. De geteste configuraties gebruikten ongeveer 40 tot 60 procent meer tokens dan CodeRabbits bestaande mix van productiemodellen. Dat is geen rechtstreekse vergelijking met Opus 5.

## Wat de aankondiging je niet vertelt

Die 40 procent is een mooi getal voor een persbericht. Wie er een begroting op wil bouwen, moet weten waar het vandaan komt. De API-tarieven voor input en output zijn een vijfde lager. Bij gelijk tokenverbruik en zonder cachegebruik betaal je daarvoor dus 20 procent minder. Lezen uit de cache is 60 procent goedkoper. Samen met een lager tokenverbruik op de geteste taken verklaart dat Anthropic's besparingsclaim. Het zegt niets over een korting op je Claude-abonnement.

Ook de instelling telt mee. Sommige benchmarkvoorbeelden vergelijken Opus 5.5 op de standaardinstelling met Opus 5 op max. Daaruit volgt niet dat jouw eigen taken altijd dezelfde besparing opleveren. Vergelijk daarom de kosten van een afgeronde taak bij de kwaliteit die je nodig hebt.

Daar komt bij dat meer denkwerk ook meer tokens kan kosten. CodeRabbit zag hoger tokenverbruik tegenover zijn eigen modelmix, maar mat daarmee niet of Opus 5.5 duurder uitvalt dan Opus 5. Houd input, output en cachegebruik apart bij. Of je per saldo goedkoper uit bent, blijkt uit je eigen taken en rekening.

En het is niet op elk terrein het beste model. In de eigen tabel van Anthropic wint GPT-6 Astra op AutomationBench, dat het automatiseren van bedrijfsprocessen meet, met 41,4 tegen 40,0 procent. Een klein verschil, maar wel precies op het terrein van marketingautomatisering. Het was ook geen rustige week om een model te kiezen. Een dag eerder bracht SpaceXAI [Grok 4.7](/blog/grok-4-7-online-marketing/) uit, en op dezelfde dag als Opus 5.5 kwam OpenAI met [GPT-6 Sol en Luna](/blog/gpt-6-sol-en-luna-marketing/). Alle drie zijn ze voor ander werk gebouwd. Op 28 september volgde bovendien [Claude Sonnet 5.5](/blog/claude-sonnet-5-5-online-marketing/), dat op kenniswerk vrijwel gelijk scoort met Opus 5.5 voor de helft van de tokenprijs.

## Wat verandert er voor je online marketing?

Ik zie drie plekken waar dit model het verschil gaat maken.

### Audits die een agent zelf afmaakt

Een trackingaudit is werk dat niemand graag doet. Je loopt pagina voor pagina langs, kijkt welke tags er afgaan, legt dat naast het meetplan en noteert waar het afwijkt. Het zijn veel kleine stappen, en precies op dat soort werk haakte een model tot nu toe halverwege af of vroeg het om de paar stappen om bevestiging.

Hier verwacht ik het meeste van. Een hogere score op OSWorld en minder stappen per taak moeten betekenen dat een agent zo'n ronde vaker zelf afmaakt. Of dat in jouw opzet ook zo uitpakt, merk je pas als je het draait. Lukt het, dan wordt een maandelijkse audit ineens haalbaar, en dat is waardevol: meetfouten sluipen er meestal pas in als er na de inrichting een pagina, formulier of tag bijkomt. In [Wat je analytics niet meet](/blog/wat-je-analytics-niet-meet/) lees je waar je dan op let. Wat een afwijking betekent voor je rapportage, blijft daarbij een oordeel van een mens.

### Analyse op een schaal die eerst te duur was

Honderden pagina's van concurrenten naast elkaar leggen, je contentbibliotheek indelen op onderwerp en zoekintentie, een jaar aan campagnedata doorlopen op patronen. Het kon allemaal al, maar de rekening liep snel op en je moest het werk in stukjes knippen.

Met een lagere prijs en goedkoper lezen uit de cache verschuift die afweging. Een analyse die je eerst op een steekproef deed, kun je nu over de hele set laten lopen. Dat raakt ook GEO, gevonden worden in AI-antwoorden. Welke vragen je pagina's goed afbakenen en welke ze laten liggen, is precies het soort inventarisatie dat hiermee binnen bereik komt. Wat een pagina citeerbaar maakt, lees je in [Vindbaar en toch niet gevonden](/blog/vindbaar-en-toch-niet-gevonden/).

### Heldere afspraken over wat een model mag

Hoe meer een agent zelf doet, hoe belangrijker de vraag wordt waar hij bij mag. Een model dat zelfstandig je CMS, je advertentieaccount of je CRM in gaat, kan op een webpagina instructies tegenkomen die het werk proberen over te nemen. De gemeten weerstand tegen prompt injection en de voorwaarden voor dataretentie zijn daarom punten om met je IT-afdeling of je functionaris gegevensbescherming te bespreken. Ze vervangen geen beperking van toegang of controle op wat de agent uitvoert.

De afspraak zelf blijft wel jouw werk. Welke systemen mag een agent lezen, waar mag hij schrijven en wanneer kijkt er een mens mee? Die vragen zijn bij elk model hetzelfde, en bij Biite begin ik er elke AI-opdracht mee. Meer daarover lees je bij [werken met AI](/expertise/werken-met-ai/).

## Hoe werk je het best met Opus 5.5?

Het goede nieuws is dat er weinig verandert. Een beter model hoort je werkwijze niet op zijn kop te zetten, en dat doet dit model ook niet. De [gids van Anthropic](https://claude.dev/blog/getting-the-most-out-of-opus-5-5/) noemt wel een paar gewoontes die je beter kunt bijstellen:

- **Laat "denk stap voor stap" weg.** Het model denkt standaard na voordat het antwoordt, dus die instructie voegt niets meer toe.

- **Geef de hele opdracht in één keer.** Opus 5.5 werkt langer door op taken met meerdere onderdelen. Wie de opdracht in stukjes aanlevert, remt het juist af.

- **Spreek af wanneer het doorgaat en wanneer het stopt.** Het model stopt soms om verslag te doen terwijl jij wilde dat het doorwerkte. Leg vast wat het zelf mag afronden en waar het eerst moet vragen, zeker bij iets onomkeerbaars als verwijderen of publiceren.

- **Houd bij lange taken een takenlijst bij in een bestand.** Een lange run vult het geheugen van het model, en een lijst daarbuiten voorkomt dat het de draad kwijtraakt.

- **Stuur beeld mee.** Een screenshot van je dashboard of een grafiek werkt beter dan de cijfers overtypen.

Let daarnaast op twee eigenaardigheden. In lange gesprekken gaat het model soms terug naar eerdere antwoorden, ook als je alleen een korte vervolgvraag stelt. En de beveiliging rond biologie en cybersecurity houdt af en toe legitiem werk tegen, zoals een beveiligingscheck van je eigen site.

## Veelgestelde vragen

### Moet ik overstappen op Claude Opus 5.5?

Werk je al met Opus 5, dan is Opus 5.5 het testen waard vanwege de lagere API-tarieven en de gemelde verbeteringen. Controleer vóór een overstap je koppelingen: instellingen voor nadenken, verplichte toolaanroepen en bepaalde vormen van computergebruik zijn veranderd. Alleen de modelnaam aanpassen is niet altijd voldoende; volg de [migratie-instructies](https://platform.claude.com/docs/en/models/opus-5-5/whats-new-opus-5-5). Werk je met een ander model, vergelijk dan kwaliteit en kosten op je eigen taken.

### Is Opus 5.5 echt 40 procent goedkoper?

De API-tarieven voor input en output zijn 20 procent lager dan bij Opus 5; lezen uit de cache kost 60 procent minder. Anthropic rapporteert ongeveer 40 procent lagere kosten op typische taken, mede door lager tokenverbruik. Je eigen besparing hangt af van de taak, instellingen en cachegebruik. Dit is geen korting op een Claude-abonnement.

### Werken mijn huidige prompts nog?

Meestal wel, en vaak zelfs beter, want testers melden dat het model instructies beter volgt dan Opus 5. Instructies om na te denken kun je schrappen. Let wel op als je via de API instellingen meestuurt die het nadenken uitzetten: daar geeft Opus 5.5 een foutmelding op.

## Zo begin je

Kies een taak die je nu al met een model doet en die uit veel stappen bestaat, zoals een tagcontrole of een contentinventarisatie. Laat die een week op Opus 5.5 draaien naast wat je nu gebruikt, en houd drie dingen bij: de kwaliteit van de uitkomst, wat het kost en hoe vaak je moest bijsturen.

Na die week weet je meer dan na elke benchmark in de aankondiging. Die gaan over het werk van Anthropic, jouw drie getallen gaan over het jouwe.

Wil je weten waar een model in jouw marketing werk kan overnemen en waar je het beter zelf houdt? Daar gaat [werken met AI](/expertise/werken-met-ai/) over.

## Wie dit schreef

**Dylan van den Bosch**, Oprichter van Biite. [wie is Biite](/over/) · [LinkedIn](https://www.linkedin.com/in/dylan-van-den-bosch/)

Dit stuk raakt aan [Werken met AI](/expertise/werken-met-ai/). Daar staat wat er precies onder valt en wanneer het niet past.

## Meer lezen

- [Claude Sonnet 5.5: bijna Opus-niveau voor je dagelijkse marketingwerk](/blog/claude-sonnet-5-5-online-marketing/)

- [OpenAI dots: wat kun je als marketeer uit handen geven?](/blog/openai-dots-marketing/)

- [Grok 4.7: waar het model van SpaceXAI past in je online marketing](/blog/grok-4-7-online-marketing/)
