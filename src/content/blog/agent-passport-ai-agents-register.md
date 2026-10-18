---
title: "Geen paspoort, geen productie: grip en audit trails voor je AI-agents"
description: "Meerdere mensen en AI-agents in één project? Agent Passport geeft overzicht, legt acties vast en helpt je wijzigingen terugzoeken en verantwoorden."
pubDate: 2026-10-17
readingTime: "8 min lezen"
heroImage: "/blog/agent-passport-ai-agents-register-header.jpg"
author: "Dylan van den Bosch"
tags: ["Werken met AI"]
---

## In dit stuk

- [Het paspoort: taak, grenzen en verantwoordelijkheid](#het-paspoort-taak-grenzen-en-verantwoordelijkheid)

- [Ook tijdelijke subagents blijven in beeld](#ook-tijdelijke-subagents-blijven-in-beeld)

- [Wie heeft dat bestand aangepast?](#wie-heeft-dat-bestand-aangepast)

- [Hetzelfde spoor helpt bij een review of audit](#hetzelfde-spoor-helpt-bij-een-review-of-audit)

- [Een modelwissel hoort ook in het register](#een-modelwissel-hoort-ook-in-het-register)

- [Wat het register niet ziet](#wat-het-register-niet-ziet)

- [Zo zet je het op voor je project](#zo-zet-je-het-op-voor-je-project)

- [Overzicht voor jezelf en voor de volgende die verdergaat](#overzicht-voor-jezelf-en-voor-de-volgende-die-verdergaat)

> **Kort samengevat**

>

> - Agent Passport is een gratis open-source skill van Biite onder MIT-licentie, direct te installeren via npx.

> - Het helpt je wijzigingen terugzoeken tijdens het werk en informatie verzamelen voor een review, overdracht of audit.

> - Elke agent en tijdelijke subagent krijgt een paspoort (AGT-0001) met taak, hostingregio, permissies, verantwoordelijke mens en reviewhistorie.

> - Wijzigingen aan bestanden, shell-commando's en MCP-acties worden vastgelegd in een hash-chained log met SHA-256 vingerafdrukken.

> - Geen gecertificeerde compliance-tool en geen garantie op naleving, wel ondersteunende informatie naast je eigen proces.

Stel, je werkt vrijdagmiddag met een collega aan een project. Jij vraagt een AI-agent om een API-koppeling aan te passen. Je collega zet een andere agent aan het werk om tests te draaien. Die agent schakelt zelf weer twee tijdelijke subagents in om delen van de code te controleren.

Binnen een kwartier werken meerdere mensen en agents aan hetzelfde project. De taken zijn verdeeld, er gebeurt veel tegelijk en je hoeft niet alles zelf te doen. Handig natuurlijk, maar wie is waarmee bezig? Welke agent hoort bij welke sessie? En wat heeft die tijdelijke hulp veranderd voordat hij weer verdween?

Maandagochtend open je je laptop en het scherm staat vol foutmeldingen. Een permissiecontrole in src/auth.py blijkt aangepast. "Wat betekent dit nou weer?" denk je. Op zo'n moment wil je direct kunnen terugzoeken welke agent aan het project werkte, met welk model en onder wiens verantwoordelijkheid. Dat helpt je nu om de fout te onderzoeken en te koppelen aan de juiste discipline in je organisatie. Gaat een agent de fout in? Dan wil je meteen de details boven water hebben. Dat is handig om het op te lossen, maar ook onmisbaar bij een overdracht of audit later.

Daarom heeft Biite **Agent Passport** gemaakt. Deze gratis open-source skill geeft elke agent en tijdelijke subagent een paspoort. Een organogram brengt mensen en agents overzichtelijk bij elkaar, terwijl een log alle geregistreerde acties bijhoudt. Zo heb je overzicht tijdens het werk en een onweerlegbaar spoor om achteraf op terug te vallen.

## Het paspoort: taak, grenzen en verantwoordelijkheid

Het organogram vertelt wie erbij hoort. Het paspoort legt vast waarvoor die agent er is en welke afspraken gelden.

Neem de agent die aan je API-koppeling werkt. Mag hij alleen wijzigingen voorstellen of ook bestanden aanpassen? Welke gegevens mag hij gebruiken? En wanneer moet hij eerst een mens laten meekijken?

Per agent legt het paspoort vast:

- Zijn taak, model en modelversie;

- De opgegeven hostingregio en toegestane databronnen;

- Zijn gedeclareerde rechten en de verantwoordelijke mens;

- Aan wie hij rapporteert, wanneer hij een mens inschakelt en hoe je hem stopt;

- Wanneer zijn configuratie voor het laatst door een mens is nagekeken.

Elke agent krijgt een eigen ID, zoals `AGT-0001`. Samen vormen de paspoorten een lokaal register, dat je bekijkt via `agent-passports/registry.html`.

![Het organogram van Agent Passport met een verantwoordelijke mens, vaste agents en tijdelijke hulpagents. Rechts staat het paspoort van de geselecteerde agent.](/blog/agent-passport-ai-agents-register/organogram.png)

*Voorbeeld uit een demoproject. Klik op een agent om zijn paspoort te bekijken.*

Een paspoort legt afspraken vast, maar dwingt geen toegangsrechten af. Heeft een agent volgens het paspoort alleen leesrechten, stel die beperking dan ook in op je platform of koppeling. De registratie en de technische beveiliging moeten op elkaar aansluiten.

## Ook tijdelijke subagents blijven in beeld

Niet elke agent blijft langdurig bestaan. Moderne harnesses zoals Claude Code spawnen regelmatig tijdelijke subagents voor deeltaken. Bijvoorbeeld om een bestand analyseren, een test draaien of documentatie te updaten. Zodra de subagent klaar is, verdwijnt hij weer uit de sessie.

Voor je project maakt die korte levensduur zijn werk niet minder belangrijk. Ook een tijdelijke subagent kan een bestand wijzigen waar jij of een collega later mee verder moet. Daarom krijgt in Agent Passport ook elke subagent run een eigen paspoort.

In Claude Code kun je dit automatisch laten bijhouden via hooks. Alleen de skill installeren is daarvoor nog niet genoeg. Je moet die hooks eenmalig aanzetten in je project. Dat doet de agent voor je zodra je vraagt om "zet agent passports op", of je draait zelf eenmalig install-hooks --global. Daarna hoef je er nooit meer naar om te kijken.

Vanaf dat moment draait de registratie volledig vanzelf. Hooks zijn triggers die op de achtergrond meeluisteren. Zodra een agent een subagent start of een bestand aanpast, vangt het script dat direct op. Het maakt een paspoort aan, logt het daadwerkelijk gebruikte model, meet de doorlooptijd en tokens, en slaat het eindresultaat op. De agent hoeft daar zelf niets voor te doen en dat is precies de bedoeling.

Het tabblad *Who did what* brengt al die afzonderlijke runs bij elkaar:

![Het tabblad Who did what met drie runs van subagents, met per run de taak, het model, de duur, de status en het resultaat.](/blog/agent-passport-ai-agents-register/who-did-what.png)

*De agents en hun resultaten uit hetzelfde demoproject.*

Zo blijft zichtbaar welke tijdelijke hulp aan het project heeft meegewerkt, ook als die run al is afgelopen.

## Wie heeft dat bestand aangepast?

Terug naar de falende test op maandagochtend. Je weet nu welke agents aan het project werkten. De volgende vraag is welke agent `src/auth.py` heeft aangepast.

Daarvoor houdt Agent Passport een audit log bij. Wijzigingen via aangesloten bewerktools, uitgevoerde shell-commando's en MCP-acties worden direct gekoppeld aan het betreffende agent-ID. Moeilijke taal voor als een agent ergens met zijn virtuele vingers aan zit, deze nu een regel code aanpast, een script in je terminal draait of data uit een extern systeem trekt. Dan staat zijn naam erbij.

Met het commando `trace` haal je het spoor van een bestand direct naar boven:

```bash
python agent-passports/passport.py trace src/auth.py
```

Per geregistreerde wijziging zie je het tijdstip, de agent en een SHA-256-vingerafdruk van het bestand. Je kunt daarmee versies uit elkaar houden en gericht verder zoeken. Het is geen volledige uitleg van de beslissing van een model en ook geen vervanging van je versiebeheer.

Gebruik je Graphify voor een kenniskaart van je project, dan zie je ook bij welk cluster een gewijzigd bestand hoort en met welke bestanden het verbonden is. Agent Passport leest die informatie, maar schrijft niets naar Graphify.

![Het tabblad Files met gewijzigde bestanden en de bijbehorende agents. Rechts staat het wijzigingsspoor van een bestand, met tijdstippen en digitale vingerafdrukken.](/blog/agent-passport-ai-agents-register/files.png)

*Het wijzigingsspoor uit het demoproject, met de koppeling naar Graphify.*

Zo kun je vanuit de vraag over `src/auth.py` terug naar de betrokken agent, zijn taak en zijn vastgelegde rechten. Daarna beoordeel je de wijziging zelf. De registratie vertelt waar je moet kijken. De code review bepaalt of de aanpassing klopt.

## Hetzelfde spoor helpt bij een review of audit

Wat je bij debugging helpt, kan ook nuttig zijn als een collega een wijziging beoordeelt of je informatie voor een audit verzamelt. Je kunt de betrokken agent, zijn paspoort en de geregistreerde acties naast elkaar leggen. Dat geeft houvast om uit te leggen hoe het werk is verlopen.

Dan wil je ook kunnen controleren of de log achteraf is aangepast. Agent Passport verbindt de logregels daarom aan elkaar met hashes. Elke regel verwijst naar de vorige. Bij controle valt op als een regel is gewijzigd en de keten niet meer klopt.

In Claude Code blokkeert een hook bovendien rechtstreekse bewerkingen van de log. Dat maakt de registratie niet onvervalsbaar. Wil je ook een volledig herschreven, ingekorte of verwijderde log kunnen herkennen, dan heb je een controlepunt buiten het project nodig. De [README](https://github.com/Biite-marketing/agent-passport) beschrijft hoe je dat instelt.

De controle voer je uit met:

```bash
python agent-passports/passport.py verify
```

Zie dit als een onderdeel van je werkwijze. Je bepaalt zelf wie de registratie beheert, waar het externe controlepunt staat en wie afwijkingen onderzoekt.

## Een modelwissel hoort ook in het register

Je project verandert. Een agent krijgt een andere taak, een nieuwe databron of een ander model. Dan moet het paspoort mee veranderen, anders beschrijft het register niet meer hoe je werkelijk werkt.

Agent Passport toetst drie afspraken:

1. **Geen paspoort, geen productie.** Het paspoort moet compleet zijn voordat je de agent inzet.

2. **Een ander model of andere data betekent een bijgewerkt paspoort.** Zo blijft zichtbaar waarmee de agent werkt.

3. **Elk kwartaal een menselijke review.** Controleer of de taak, rechten en verantwoordelijke nog kloppen.

Het commando `validate` controleert die regels. Hoe je de uitkomst gebruikt om een agent tot productie toe te laten, moet je zelf in je proces of pipeline inrichten. De skill blokkeert niet zelfstandig elke inzet van een agent.

Bij de agent die je authenticatiemodule aanpast, kan een modelwissel aanleiding zijn om zijn werk opnieuw te testen. Het paspoort maakt de wissel zichtbaar; je tests en reviews moeten uitwijzen of de uitkomst nog voldoet.

## Wat het register niet ziet

Om de audit trail goed te gebruiken, moet je weten wat buiten beeld blijft. Agent Passport registreert wijzigingen via aangesloten bewerktools, shell-commando's en MCP-acties. Het registreert geen bestandslezingen. Je ziet dus niet welke bestanden een agent alleen heeft geopend.

Ook veranderingen die een gestart script zelf uitvoert, worden niet per bestand vastgelegd. Het uitgevoerde commando kan in de log staan, zonder dat iedere wijziging door dat commando een eigen bestandsregistratie krijgt. Werk buiten de aangesloten tools kan eveneens ontbreken.

Verder zijn de permissies in het paspoort gedeclareerde rechten. De daadwerkelijke beperking hoort in je platform en koppelingen. Een ingevulde hostingregio of naam van een reviewer is evenmin een onafhankelijke verificatie van die informatie.

Agent Passport is momenteel geen gecertificeerd compliance product en maakt je organisatie niet direct compliant met ISO/IEC 27001, ISO/IEC 42001, NEN 7510 of de EU AI Act. Het kan een register en log leveren die je als ondersteunend bewijs gebruikt naast je eigen proces. Welke informatie je voor een audit nodig hebt, hangt van je situatie af.

## Zo zet je het op voor je project

De skill werkt met onder meer Claude Code, Cursor, Codex, Gemini CLI en Copilot. Je hebt Python 3.8 of nieuwer nodig; extra Python-pakketten zijn niet nodig.

Download de skill via [GitHub](https://github.com/Biite-marketing/agent-passport) of installeer hem met:

```bash
npx skills add Biite-marketing/agent-passport -g
```

Met `-g` installeer je de skill voor al je projecten. Laat die optie weg als je hem alleen voor het huidige project wilt installeren. Vraag je agent daarna om "agent passports op te zetten voor dit project", that's it.

Gebruik je Claude Code, stel dan ook de hooks in volgens de [installatie-instructies](https://github.com/Biite-marketing/agent-passport#install). Wil je dat elk project bij de eerste agentactiviteit een eigen register krijgt, installeer die hooks dan op gebruikersniveau. In andere tools registreer je agents met de commando's `spawn` en `end`.

Open daarna `agent-passports/registry.html`. Kijk of de vaste agents, tijdelijke runs en verantwoordelijke mensen samen een herkenbaar beeld van je project geven. Zoek vervolgens een geregistreerde wijziging terug. Daarmee controleer je of de registratie ook in jouw werkwijze bruikbaar is.

## Overzicht voor jezelf en voor de volgende die verdergaat

Ook zonder audit is dit waardevol. Als jij morgen verdergaat, of een collega het project overneemt, wil je kunnen zien welke agents eraan werkten, met welke taak en wat ze veranderden. Dat overzicht hoort bij het adopteren van AI binnen je organisatie.

Wil je hulp bij het inrichten van agents, rechten en controles? Bij [werken met AI](/expertise/werken-met-ai/) lees je hoe Biite je daarbij help.

[Bekijk de skill op GitHub](https://github.com/Biite-marketing/agent-passport)

## Wie dit schreef

**Dylan van den Bosch**, Oprichter van Biite. [wie is Biite](/over/) · [LinkedIn](https://www.linkedin.com/in/dylan-van-den-bosch/)

Dit stuk raakt aan [Werken met AI](/expertise/werken-met-ai/). Daar staat wat er precies onder valt en wanneer het niet past.

## Meer lezen

- [OpenAI dots: wat kun je als marketeer uit handen geven?](/blog/openai-dots-marketing/)

- [Claude Sonnet 5.5: bijna Opus-niveau voor je dagelijkse marketingwerk](/blog/claude-sonnet-5-5-online-marketing/)

- [Grok 4.7: waar het model van SpaceXAI past in je online marketing](/blog/grok-4-7-online-marketing/)
