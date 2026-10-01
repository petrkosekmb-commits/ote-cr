# Zápis měsíčních výkazů OTE

## Připrav konkrétní výkaz

Zápis prováděj přes přihlášenou relaci Edge a aktuálně dostupné browser nástroje. Respektuj jejich pravidla pro schvalování. Nepoužívej neověřené soukromé API nebo přímé změny DOM/stavu aplikace místo podporovaných akcí UI.

1. Urči výrobnu, ID zdroje/OPM, měsíc a rok, typ akce (nový výkaz, rozpracovaný návrh nebo oprava), hodnoty a zdroj dat. Pokud to požadavek neurčuje, nejdříve je zjisti z podkladů a portálu. Materiálně nejasnou výrobnu či období musí určit uživatel.
2. Vyhledej již existující výkaz pro stejné období. U opravy načti aktuální verzi a uchovej její původní hodnoty a stav lokálně. Nový výkaz pro již vykázané období nezakládej jako duplicitní záznam.
3. Připrav přehled konkrétního obsahu: výrobna/zdroj, období, položka, jednotka portálu, hodnota, zdroj a případně původní hodnota. Přepočítej kWh na MWh, pouze pokud to vyžaduje popisek daného pole. Rozlišuj svorkovou výrobu, čistou výrobu, dodávku a odběr z DS, vlastní spotřebu a nárokovanou podporu. Dodávku jednoho OPM nezadávej duplicitně pro každý zdroj.
4. Zkontroluj úplnost měsíce a dostupné bilanční kontroly podle významu polí na portálu. Prognózy ani odhad neúplného měsíce nevydávej za skutečné naměřené hodnoty. Chybějící hodnoty nedoplňuj nulou. Odhad používej jen při konkrétním pokynu uživatele a pokud je jeho vykázání přípustné podle aktuálních instrukcí OTE.

## Vyplň a ulož

- Žádost o přípravu návrhu dovoluje jeho lokální přípravu. Zadání do portálu a uložení rozpracovaného výkazu prováděj na konkrétní pokyn uživatele nebo při již uděleném souhlasu pro daný obsah a období. Nevyžaduj opětovné schválení téhož kroku, pokud již bylo uděleno a pravidla UI nástroje ho dovolují.
- Z čerstvé stránky odvoď ovládací prvky pro nový výkaz nebo editaci. Před akcí rozliš, zda tlačítko pouze uloží návrh, nebo současně odešle vykázané údaje. Pokud to nelze zjistit z viditelného UI či oficiální nápovědy, zastav před touto akcí a vysvětli nejistotu.
- Vyplň jen položky schváleného zadání. Po vyplnění znovu načti pole a porovnej obsah, jednotky, výrobnu a období s připraveným přehledem. Po uložení ověř identifikátor a rozpracovaný stav návrhu a znovu otevřená data. Ulož screenshot jako doklad, pokud to vyžaduje browser nástroj.

## Finální odeslání

- Před odesláním nebo opravou již odeslaného výkazu ukaž konkrétní finální obsah a účel odeslání do OTE. Vyžádej souhlas s tímto výkazem, pokud takový výslovný souhlas pro stejný obsah a období dosud nemáš. Obecné povolení schopnosti zápisu nestačí.
- Podpis, právně závazné prohlášení nebo jiné potvrzení řiď aktuálními pravidly UI nástroje; vyžaduje-li potvrzení právě v daném okamžiku či převzetí uživatelem, dodrž to.
- Po schváleném odeslání načti aktuální stav. Ověř výrobnu, období, ID, novou verzi, stav a hodnoty. Úspěch neodvozuj jen z kliknutí nebo zmizení formuláře. Rozliš „uloženo jako návrh“, „odesláno“, „přijato“ a „schváleno“, podle skutečné odpovědi OTE.
- Při timeoutu po uložení/odeslání nejdřív vyhledej výkaz a zjisti, zda akce už proběhla. Neopakuj odeslání naslepo. Při chybě validace oprav jen konkrétní příčinu; změnu oproti schváleným hodnotám znovu předlož uživateli. Pokud přetrvává nejistý stav, zachovej rozpracovaná data a popiš poslední ověřený výsledek.

Doklady, podklady a případné exporty ukládej do C:\Users\kosek\Documents\Codex\ote-cr\outputs v podsložce podle výrobny a období. Neukládej tokeny, soukromé klíče, cookies ani celé profily prohlížeče. Po úloze sděl přesný rozsah zápisu a ověřený stav.
