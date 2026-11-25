# Websample authoring

Run `python3 tools/websample/build.py` from the repository root. The output is `public/websample`, already rooted at `/websample/`.

Original concepts are recorded in samples.json. Twelve additional industry concepts and their copy are maintained in expansion_data.py; samples.json is refreshed on build. Shared footer compositions stay in footer_designs.py. Theme CSS and images live beside the static export.

The STEALTH logo is supplied artwork in public/branding. All browser titles and favicon links share that identity; fictional businesses retain their own in-page names.
