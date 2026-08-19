# SEO Title Character Spacing

## Goal

Improve the readability of large SEO landing-page titles by adding space between characters, without changing spacing between title lines.

## Design

- Set `.seo-hero h1` to `letter-spacing: 0` on desktop.
- Keep the mobile override at `letter-spacing: -0.015em`.
- Keep the current font family, font size, weight, line height, and wrapping unchanged.

## Validation

- Confirm the desktop and mobile character-spacing rules apply at their intended breakpoints.
- Run lint and the production build.
- Confirm no unrelated layout rules change.
