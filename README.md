# Lektorat Alderblick

Static website for **Lektorat Alderblick**, the freelance editorial and proofreading service of Anne Alder.

The site is built as a lightweight static website using plain HTML, CSS, and JavaScript. It does not require a build step, package manager, backend, or database.

## Live Website

<https://lektorat-alderblick.de>

## Project Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── robots.txt
├── sitemap.xml
├── CNAME
├── images/
│   ├── me.png
│   ├── VFLL_Wort-Bild-Marke_rot.png
│   └── references/
└── documents/
    ├── Zertifikat_Freie_Lektorin_ADM.pdf
    └── Zeugnis_Master.pdf
````

## Features

* Responsive one-page layout
* Editorial, calm visual design
* Service sections for proofreading and editing
* Detail modals for proofreading and editing criteria
* Reference/project modals
* Qualification modal with certificates
* Contact form integration
* Legal notice and privacy information
* SEO metadata
* Open Graph metadata
* Structured data via JSON-LD
* `robots.txt` and `sitemap.xml`
* Lightweight scroll reveal animations
* No external build dependencies

## Local Development

Start a local static server in the project root.

### Windows / PowerShell

```powershell
py -m http.server 8000
```

### macOS / Linux

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

The website can be deployed by uploading the repository contents to any static hosting provider.

For GitHub Pages, the repository should include:

```text
CNAME
```

with the custom domain:

```text
lektorat-alderblick.de
```

The DNS settings for the domain must point to GitHub Pages.

## Assets

The website expects images and PDF documents to be available under the existing repository paths, for example:

```text
images/me.png
images/VFLL_Wort-Bild-Marke_rot.png
images/references/
documents/Zertifikat_Freie_Lektorin_ADM.pdf
documents/Zeugnis_Master.pdf
```

Fallback URLs may be used in the HTML for local previews, but production should rely on the repository assets.

## SEO

The site includes:

* page title and meta description
* canonical URL
* Open Graph tags
* Twitter card metadata
* JSON-LD structured data
* sitemap
* robots file
* descriptive image alt text

## Notes

This is a static website. Changes can be made directly in:

```text
index.html
styles.css
script.js
```

After editing, test locally and then deploy the updated files.

## License

All website content, text, images, and documents are owned by Lektorat Alderblick / Anne Alder unless otherwise stated.
