# Mobile SEO Title Character Spacing

## Goal

Improve the readability of large SEO landing-page titles on mobile by adding space between characters, without changing spacing between title lines.

## Design

- Apply the change only to `.seo-hero h1` at the existing mobile breakpoint.
- Set `letter-spacing` to `-0.015em` on mobile instead of inheriting the tighter desktop value of `-0.055em`.
- Keep the current font family, font size, weight, line height, wrapping, and desktop styling unchanged.

## Validation

- Confirm the mobile rule overrides the desktop character spacing.
- Run lint and the production build.
- Confirm no unrelated layout rules change.
