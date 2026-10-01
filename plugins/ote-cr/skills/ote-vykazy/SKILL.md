---
name: ote-vykazy
description: Čte, připravuje a na konkrétní pokyn vkládá nebo opravuje měsíční výkazy na portálu OTE ČR. Počítá rezervu 80% dodávky pro výrobce a nabíjení Tesly. Použij pro OTE, POZE, měsíční výrobu, přetoky nebo zadání výkazů.
---

# Výkazy OTE ČR

Používej přihlášenou relaci Edge přes dostupné browser/computer-use nástroje. Vstup: https://portal.ote-cr.cz/poze/app/monthly-report. Přihlášení uživatele bylo ověřeno 1.10.2026, není zaručeno pro další relace. Nečti ani neexportuj cookies, certifikáty, soukromé klíče nebo tokeny. Chybí-li přihlášení, ponech stránku pro přihlášení uživatelem.

## Čtení dat

- Nejdřív vyhledej existující kartu OTE, případně otevři vstupní URL. Ověř aktuální stránku a načti dokumentaci browser nástroje. Elementy a selektory odvozuj z čerstvého viditelného stavu; nepoužívej uložené číselné indexy.
- Měsíční výkaz nabízí datum od–do (měsíc/rok), ID výrobny, ID zdroje, EAN a Hledat. Při ověření 1.10.2026 byly datumy přednastavené na 09.2026. Nastav požadované období a načti výsledky po dokončení načítání.
- Vyber správnou výrobnu podle názvu a ID/EAN. Písková Lhota a Semčice jsou různé předávací body; nesčítej jejich výrobu nebo dodávky pro test jedné výrobny. Písková Lhota má dva vykazované výrobní zdroje; ověř jejich vztah k celkové dodávce za OPM.
- Opiš období, stav výkazu, verzi, datum vykázání, jednotky, výrobu, technologickou vlastní spotřebu, dodávku do DS a odběr z DS, pokud jsou skutečně dostupné. Při více verzích použij aktuální platnou verzi, ne jejich součet. Nesčítej dodávku OPM duplicitně přes oba zdroje.
- Výkaz je údaj deklarovaný výrobcem. Pro nezávislé měření dodávky preferuj navigaci Souhrnná dodávka do sítě; Měřená průběhová data mohou nabídnout detail. Dostupnost a význam čísel ověř na stránce, nepředpokládej je.
- Pokud září chybí, je rozpracované nebo neúplné, uveď poslední skutečný čas pokrytí. Chybějící řádky nejsou nulová výroba. Bez aktuálních dat neoznač starou prognózu za dnešní stav.
- Čtení výkazů nevyžaduje Zadat nový výkaz, editaci, uložení ani odeslání.

## Vkládání a opravy

Při požadavku na zadání, uložení nebo opravu výkazu přečti [references/zapis.md](references/zapis.md). Plugin umí vyplnit portál přes Edge, uložit rozpracovaný výkaz a po schválení konkrétního obsahu dokončit odeslání. Žádost o přidání této schopnosti pluginu sama neautorizuje změnu živých výkazů.

## Výpočet

Vše převed na kWh; MWh násob 1000. Pro dohodnutý test 80 % používej čistou výrobu = výroba − technologická vlastní spotřeba. Nabíjení auta není technologická vlastní spotřeba FVE. Odběr ze sítě neodečítej od dodávky při výpočtu podílu.

Prognózu zbývajících měsíců odděl od skutečnosti; historický rok a zdroj explicitně uveď. Částečný měsíc nepřipočítej znovu jako celý historický měsíc. Bez spolehlivého zbytku měsíce ukaž skutečný stav a podmíněný odhad.

Použij `scripts/calculate.mjs` (Node.js, bez balíčků) pro ověřená agregovaná data:

`node scripts/calculate.mjs --actual-production=10000 --actual-export=8500 --forecast-production=2000 --forecast-export=1500 --buffer=200`

Volitelné parametry: actual-tech, forecast-tech, threshold (0.8), night-price (5), sale-price (0.5), monthly-benefit (500). Čísla v příkladu jsou smyšlená ukázka, nikoliv měření konkrétní výrobny.

Výstup vysvětli česky: skutečný podíl, odhad roční výroby a dodávky, minimální dodávka, kolik ještě dodat, rezerva bez pojistky a s pojistkou. Zápornou rezervu ukaž jako deficit. Noční nabíjení přímo z DS samo podíl nemění; noc z domácí baterie nabité sluncem může ovlivnit přetoky. Limity jsou energie na vstupu nabíjení, ne baterie auta; počet nabití počítej jen se známou energií a ztrátami.

Úspora 500 Kč je měsíční předpoklad uživatele, tedy 6000 Kč za 12 měsíců. Cenový zlom dalších solárních kWh za vyčerpanou rezervou je 6000/(5−0.5). Pojistka není právní hranice a nesnižuje ekonomický bod zlomu. Tarif a platnost pravidel ověř z aktuálních dokumentů distributora, pokud je úloha vyžaduje; neprezentuj předpoklad úspory jako potvrzený nárok.

Výstupy ukládej pouze do C:\Users\kosek\Documents\Codex\ote-cr\outputs. Originální zdrojové soubory můžeš číst z jejich uživatelem určeného umístění; do OneDrive nové výstupy neukládej.
