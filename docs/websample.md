# Homepage sample catalogue

The catalogue is served at `/websample`. The static export in `public/websample` contains 30 named homepage samples and 24 selectable footer styles.

`next.config.ts` rewrites the exact catalogue entry to its HTML file. `middleware.ts` excludes only `/websample` and its descendants from locale redirects. Existing localized pages keep their routing.

When updating the export, keep HTML asset and page URLs rooted at `/websample/`. Same-page hash links remain relative to the current page. Keep the local font and its license with the images and asset manifest.

After `next build`, start the production server and run:

```sh
WEBSAMPLE_TEST_ORIGIN=http://127.0.0.1:8771 node --test tests/websample-routing.test.mjs
```

The tests cover the no-slash entry, static assets, all 30 detail pages, existing language homepages and a similarly named path that must still receive locale handling.

## Authoring and branding

Run `python3 tools/websample/build.py` to refresh the static HTML. The original sample data and additional concept definitions live in that folder; uploaded photos, CSS, the local font and screenshot previews are versioned in public/websample/assets. Twelve additional concepts use distinct hero compositions, from modular bento boards and full-bleed landscapes to editorial archives and photo galleries. New concepts appear first without renumbering existing designs.

The supplied STEALTH S symbol is preserved in public/branding. SVG and PNG browser icons and the ICO fallback are rendered from that artwork. Localized main pages and all static sample pages use the same company browser title and icon. Individual sample businesses retain their in-page identities.
