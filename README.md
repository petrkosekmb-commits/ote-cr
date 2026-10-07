# OTE ČR plugin pro Codex

Verze 0.2.0. Plugin přidává postupy pro čtení, přípravu a vkládání měsíčních výkazů OTE ČR přes přihlášenou relaci Edge a výpočet rezervy dodávky do sítě.

## Instalace

```powershell
codex plugin marketplace add petrkosekmb-commits/ote-cr
codex plugin add ote-cr@ote-local
```

## Použití

- „Načti výkazy OTE pro Pískovou Lhotu a spočítej rezervu kategorie 1.“
- „Připrav měsíční výkaz za září podle těchto naměřených hodnot.“
- „Ulož schválený výkaz jako rozpracovaný návrh.“

Finální odeslání se řídí souhlasem pro konkrétní výrobnu, období a hodnoty. Plugin neobsahuje přihlašovací údaje. Vyžaduje dostupné ovládání Edge a přihlášení uživatele na portálu OTE.

## Výpočet bez portálu

```powershell
node plugins/ote-cr/skills/ote-vykazy/scripts/calculate.mjs --actual-production=10000 --actual-export=8500 --forecast-production=2000 --forecast-export=1500 --buffer=200
```

Vstupní energie je v kWh. Parametry cen a přínosu kategorie jsou upravitelné. Model používá dohodnutou hranici 80 % čisté výroby; aktuální tarif a pravidla je třeba ověřit pro příslušnou výrobnu. Předpoklad přínosu 500 Kč měsíčně není potvrzený tarifní nárok.

Ověřena je struktura pluginu, instalace verze 0.2.0 a numerické hranice kalkulace. Kompletní vložení a odeslání živého výkazu dosud nebylo otestováno.

## Podpora projektu

Pokud vám projekt pomáhá, můžete podpořit jeho další vývoj a údržbu na [Buy Me a Coffee](https://buymeacoffee.com/kojakcio). Děkuji za podporu.
