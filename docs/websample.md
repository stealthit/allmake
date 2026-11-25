# Homepage sample catalogue

The catalogue is served at `/websample`. The static export in `public/websample` contains 18 named homepage samples and 24 selectable footer styles.

`next.config.ts` rewrites the exact catalogue entry to its HTML file. `middleware.ts` excludes only `/websample` and its descendants from locale redirects. Existing localized pages keep their routing.

When updating the export, keep HTML asset and page URLs rooted at `/websample/`. Same-page hash links remain relative to the current page. Keep the local font and its license with the images and asset manifest.

After `next build`, start the production server and run:

```sh
WEBSAMPLE_TEST_ORIGIN=http://127.0.0.1:8771 node --test tests/websample-routing.test.mjs
```

The tests cover the no-slash entry, static assets, all 18 detail pages, existing language homepages and a similarly named path that must still receive locale handling.
