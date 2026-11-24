# provendium.app

The website for Provendium®, the Provincial Compendium: one source of truth
for the Provinces of English Freemasonry. The record, the diary, Lodge
administration, dining, reporting and the member app, on one platform.

Provendium is a product of [addedPIXELS](https://addedpixels.com).

A small static site. Six pages, one stylesheet, no build step, no framework.

## Preview locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

```
index.html           Home: not just a diary, one meeting followed through, by role
features.html        Features: the seven parts, each with an illustrative screen
security.html        Security & privacy: how a Province's data is protected
for-provinces.html   For Provinces: what you get, how to start, where we are
about.html           About: the approach and who builds it
contact.html         Contact
styles.css           Shared stylesheet (see "Brand" below)
nav.js               Progressive enhancement for the mobile menu
site.js              Progressive enhancement: diary filters, role tabs, reply demo
icons.svg            Inline SVG icon sprite, referenced via <use href="icons.svg#…">
app-*.jpg            Screenshots of the Provendium iPhone app
provendium-mark.png  Logo (also used as the favicon)
og.png               Social link-preview image
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

Plain HTML and CSS: no framework, no build step. The header and footer are
repeated in each page, so a change to the navigation is made in all six.

### Brand

The site uses the same brand as the Provendium app. The first half of
`styles.css` mirrors the app's own stylesheet: the navy chrome, the gold
accent, the Craft, Royal Arch, Provincial and Social colours, Inter for text
and Source Serif 4 for headings, and component classes such as `.btn`,
`.badge`, `.pv-card`, `.cal-evt` and `.kpi`. If the app's palette or type
changes, change it here too. The second half of the file is the layout of the
marketing pages.

### Illustrative screens

The diary, registers, seating plan and reports shown on the pages are
hand-written HTML using those component classes, with made-up names and
figures. They are not screenshots and hold no real data. The `app-*.jpg`
images are real screenshots of the iPhone app running on demonstration data.

### Scripts

Pages ship with `class="no-js"` on `<html>`. `nav.js` removes it before first
paint. Without scripting the navigation links stay visible, the diary shows in
full, and every role panel on the home page is shown one after another.
`site.js` adds the diary filters, the role tabs and the reply demo.
