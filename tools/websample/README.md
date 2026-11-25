# Websample authoring

Run `python3 tools/websample/build.py` from the repository root. The output is `public/websample`, already rooted at `/websample/`.

Original concepts are recorded in samples.json. Additional industry concepts are maintained in expansion_data.py and interaction_data.py; interaction_designs.py and the interaction-samples CSS/JS define the motion experiences; samples.json is refreshed on build. Shared footer compositions stay in footer_designs.py. Theme CSS and images live beside the static export. Service pictograms are mapped by sample and service in service_icons.py; the pinned Lucide SVG sources and ISC/MIT notices are bundled under public/websample/assets/icons/lucide.

The STEALTH logo is supplied artwork in public/branding. All browser titles and favicon links share that identity; fictional businesses retain their own in-page names.

Inquiry UI is maintained in inquiry.js and posts to /api/websample-inquiry. The Next.js route uses server-only SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS. Its recipient is fixed to min@stealthinteractive.co.kr; missing SMTP configuration and delivery failures return errors. Run node --test tests/websample-inquiry.test.mjs after next build to test against an isolated local SMTP receiver without sending real mail.
