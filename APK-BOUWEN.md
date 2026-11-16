# APK bouwen – Basisexamen A1

Het project is klaar: Capacitor 7, Android-platform, microfoonrechten, native voorlezen (TTS-plugin) en de Android-terugknop.

## Route A – via GitHub (je hoeft niets te installeren)
1. Maak op github.com een nieuwe repository, bijvoorbeeld `basisexamen-a1` (privé mag).
2. Upload de inhoud van deze zip, dus **alle** bestanden en mappen, ook `.github/`.
   - Via de website: *Add file → Upload files*. Sleep de mappen erin.
   - Of via git: `git init && git add . && git commit -m init && git branch -M main && git remote add origin <url> && git push -u origin main`
3. Open het tabblad **Actions**. De workflow **Build APK** start vanzelf en duurt ongeveer 5–8 minuten.
4. Klik op de groene run en download onder **Artifacts** het bestand `Basisexamen-A1-apk` (een zip met `app-debug.apk`).

Let op: de map `.github` is verborgen. Zet verborgen bestanden aan in je bestandsbeheer, anders upload je de workflow niet mee.

## Route B – lokaal met Android Studio
```bash
npm install
npx cap sync android
npx cap open android        # Android Studio opent
```
Kies in Android Studio *Build → Build App Bundle(s) / APK(s) → Build APK(s)*.
Of zonder Android Studio, met de SDK geïnstalleerd: `cd android && ./gradlew assembleDebug`.
De APK staat daarna in `android/app/build/outputs/apk/debug/app-debug.apk`.

## Installeren op de telefoon
- Zet de APK op je telefoon en open hem. Sta "Onbekende apps installeren" toe.
- Op Xiaomi/HyperOS kan een extra beveiligingsmelding verschijnen: kies *Toch installeren*.
- Voorlezen: zet in *Instellingen → Taal → Tekst-naar-spraak* (Google) **Nederlands** aan en download de stem voor gebruik zonder internet.
- De eerste keer opnemen vraagt de app om toegang tot de microfoon: kies *Toestaan*.

## App aanpassen
Vervang `www/index.html` en voer opnieuw `npx cap sync android` uit (of push naar GitHub, dan bouwt de workflow opnieuw).

Dit is een **debug-APK**: prima om zelf te installeren en te delen. Voor de Play Store heb je een ondertekende release-build nodig. Zie ook de opmerking over auteursrecht in README-basisexamen-app.md.
