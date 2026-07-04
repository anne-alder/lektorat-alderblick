# Lektorat Alderblick – finale statische Website

Diese ZIP enthält eine optimierte statische Version der Website.

## Enthaltene Dateien

- `index.html`
- `styles.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`

## Wichtig zu Bildern und PDFs

Die Website verwendet weiterhin die bestehenden Asset-Pfade aus dem GitHub-Repository, zum Beispiel:

- `images/me.png`
- `images/VFLL_Wort-Bild-Marke_rot.png`
- `images/references/...`
- `documents/Zertifikat_Freie_Lektorin_ADM.pdf`
- `documents/Zeugnis_Master.pdf`

Wenn diese Dateien im Repository vorhanden sind, funktioniert die Seite direkt. Für eine lokale Vorschau außerhalb des Repositorys sind zusätzlich Fallback-URLs auf die aktuelle Live-Domain hinterlegt.

## Lokal testen

Im Projektordner starten:

```powershell
py -m http.server 8000
```

Dann öffnen:

```text
http://localhost:8000
```

## Umgesetzte Änderungen

- Ruhigerer Hero, weniger wuchtige Typografie
- Modernisierte Wortmarke im Header mit farbigem, kursivem `blick`
- Übersetzungen aus dem Leistungsangebot entfernt
- Englisch/Anglistik weiterhin sichtbar eingebunden
- Referenzen beibehalten, einschließlich englischsprachigem VENRO-Projekt
- Überblendete Infofenster für Qualifikationen, Über-mich-Details, Referenzen und Impressum/Datenschutz wieder integriert
- VfLL-Status als ordentliches Mitglied aktualisiert
- Canonical, Open Graph, JSON-LD, `robots.txt` und `sitemap.xml` ergänzt
- Detail-Buttons für Korrektorat und Lektorat ergänzt; die vertiefenden Prüfkriterien öffnen sich als ruhige Modals, ohne den Leistungsbereich zu überladen.


## Leistungsdetails

Die Modals für Korrektorat und Lektorat enthalten die ausführlichen Prüfkriterien aus der bisherigen Website, damit die Startseite schlank bleibt und Interessierte trotzdem alle Details abrufen können.

## Aktueller Feinschliff

- Leistungsdetails für Korrektorat und Lektorat bleiben über dezente Detail-Buttons erreichbar.
- Die Detailansichten sind nun als schlichte, gut lesbare Auflistungen gestaltet: keine Kacheln, keine Schmuckpunkte, keine verspielten Karten.
- Die ausführlichen Kriterien aus der früheren Website bleiben erhalten.



## Finaler Feinschliff

Diese Variante enthält modernisierte Leistungsdetails, reduzierte optische Fettschreibung und dezente Einblendeffekte. Die Texte der Leistungsdetails wurden nicht verändert.
