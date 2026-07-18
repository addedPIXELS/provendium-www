# provendium.app

The website for Provendium™, the Provincial Compendium: a secure calendar and
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
index.html           Home: what it is and what it does
features.html        Features: the deep dive, with on-brand UI mockups
security.html        Security & privacy: how a Province's data is protected
for-provinces.html   For Provinces: what you get, how to start, where we are
about.html           About: the approach and privacy
contact.html         Contact
styles.css           Shared stylesheet (hand-rolled design system, no framework)
icons.svg            Inline SVG icon sprite, referenced via <use href="icons.svg#…">
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

Plain HTML and CSS — no framework, no build step, no JavaScript. `styles.css`
holds the brand: navy chrome, a gold accent, and two regalia accents (Craft
blue, Royal Arch red) used to tag order/type in the UI mockups. Inter for body
text and Source Serif 4 for headings (loaded from Google Fonts).

Icons are a hand-rolled inline-SVG line set in `icons.svg`, used as
`<svg class="icon"><use href="icons.svg#i-name"></use></svg>` and tinted with
`currentColor`. Add a new icon by dropping another `<symbol>` into that file.

The header and footer are repeated in each page (there is no include step), so a
change to the nav or the footer must be made in every `*.html`. The contact
address `hello@provendium.app` and the trademark/company footer line appear on
every page; update them in each if they change.

## To add

- `og.png` (1200x630) for link previews. The pages already reference
  `https://provendium.app/og.png`; add the file when artwork is ready.
- A logo, if preferred over the text wordmark.

## Trademark and copyright

Provendium™ is a trademark of addedPIXELS Limited, registered in England &
Wales (company no. 16220245). Registered office: Bank Chambers, Market Place,
Stockport, Greater Manchester, SK1 1AR.

© 2026 addedPIXELS Limited. All rights reserved.
