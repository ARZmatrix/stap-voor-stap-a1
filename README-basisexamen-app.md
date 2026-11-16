# Basisexamen Buitenland A1 – app

Eén bestand: `index.html` (offline, geen internet nodig, behalve voor de links naar naarnederland.nl).

## Inhoud
| Module | Bron | Inhoud |
|---|---|---|
| KNS | Fotoboek Naar Nederland (2014) | 100 examenvragen + 2 voorbeeldvragen, letterlijk; antwoorden gecontroleerd tegen het fotoboek. 7 thema's (handleiding), Arabische vertaling + uitleg, voorlezen (TTS), proefexamen 30 vragen / 30 min |
| Lezen | Eigen teksten | 2 oefenexamens × 9 teksten / 19 vragen / 35 min, oefenmodus met vertaling |
| Spreken | Lijst "Spreken A1 – maart 2024" | 78 vragen + 452 aanvulzinnen, opnemen + terugluisteren, officieel beoordelingsmodel (adequaatheid/uitspraak 0–1), proefexamen 10 + 12 / 30 min → score /44 |

Voortgang wordt lokaal opgeslagen (localStorage).

## Capacitor (zoals Stap voor Stap)
1. Zet `index.html` in de map `www/`.
2. `npx cap sync android`
3. Microfoon: voeg toe in `android/app/src/main/AndroidManifest.xml`:
   ```xml
   <uses-permission android:name="android.permission.RECORD_AUDIO" />
   <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
   ```
4. Terugknop Android: installeer `@capacitor/app` (`npm i @capacitor/app && npx cap sync`). De app vangt de knop dan zelf af.
5. Voorlezen gebruikt de spraakengine van de telefoon. Zet "Nederlands" aan in Google Text-to-Speech (en download de stem voor offline gebruik).

## Let op vóór publicatie (Play Store)
De KNS-vragen (fotoboek) en de Spreken-lijst zijn © Ministerie van SZW, "alle rechten voorbehouden". Voor eigen gebruik of voor één leerling is dit oefenmateriaal. Wil je de app openbaar verspreiden? Vraag dan eerst schriftelijk toestemming aan SZW/Naar Nederland. Een alternatief is dat ik de vragen herschrijf. Foto's en de film zitten bewust niet in de app.
