# provendium.app

The website for Provendium, the Provincial Compendium: a secure calendar and
administration platform for the Provinces of English Freemasonry.

Provendium is a product of [addedPIXELS](https://addedpixels.com).

A small static site. Three pages, one stylesheet, no build step, no framework,
no JavaScript.

## Preview locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

```
index.html      Home: what it is and what it does
about.html      About: the approach and privacy
contact.html    Contact
styles.css           Shared stylesheet
provendium-mark.png  Logo (also used as the favicon)
CNAME                Custom domain for GitHub Pages
```

## Hosting (GitHub Pages)

This site is served by GitHub Pages from the repository root.

1. In the repository, open **Settings > Pages**.
2. Set the source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Under **Custom domain**, enter `provendium.app`. This matches the `CNAME`
   file and provisions HTTPS once DNS is in place.
4. Point DNS for `provendium.app` (apex) and `www.provendium.app` at GitHub
   Pages, and let one redirect to the other so there is a single canonical
   address. The pages declare `https://provendium.app/` as canonical.

## Editing

Plain HTML and CSS. `styles.css` holds the brand: navy chrome, a gold accent,
Inter for body text and Source Serif 4 for headings (loaded from Google Fonts).
The contact address `hello@provendium.app` appears in all three pages; update it
in each if it changes.

## To add

- `og.png` (1200x630) for link previews. The pages already reference
  `https://provendium.app/og.png`; add the file when artwork is ready.
- A logo, if preferred over the text wordmark.
