# SEO Opportunity Implementation Design

## Goal

Increase qualified organic enquiries for Perssons El, led by Helsingborg service searches, while avoiding duplicate targeting and thin location content.

## Scope

### 1. Primary keyword ownership

- The homepage owns the primary query `elektriker Helsingborg` and close variants.
- `/elektriker/elfirma-helsingborg` owns `elfirma Helsingborg`.
- `/elektriker/elinstallation-helsingborg` owns `elinstallation Helsingborg`.
- The redundant `/elektriker/helsingborg` route permanently redirects to `/`.
- Internal links that currently point to `/elektriker/helsingborg` will point to `/`.
- The redirected URL will be removed from the XML sitemap.

### 2. Network installation service

Add `/tjanster/natverksinstallation` as a full service page using the existing service-page design. It will target the Swedish concepts around `nätverksinstallatör`, `nätverksinstallation`, network cabling, data outlets, patch panels, access points, and network troubleshooting in Helsingborg and north-west Skåne.

The page must contain useful service detail rather than repeating location-page copy. It will include:

- Suitable customer and property types
- Common installation work
- Planning and installation process
- Relevant calls to action
- Unique metadata and a self-referencing canonical
- Service structured data through the existing site schema

### 3. Existing-page improvements

- Strengthen the homepage around electrician searches in Helsingborg without keyword stuffing.
- Expand the general electrical-installation service page around `elinstallation` and `elinstallationer`, while keeping its intent distinct from the Helsingborg landing page.
- Add `elfirma i Ängelholm` naturally as a secondary phrase on the existing Ängelholm page.
- Improve the Åstorp page's local relevance without inventing local projects, offices, or customer claims.
- Add contextual internal links among the homepage, relevant service pages, and location pages.

### 4. Trust and factual constraints

- Reuse only company details and claims already confirmed in the project.
- Do not invent reviews, certifications, response times, prices, projects, or service guarantees.
- Do not publish the street address from the email signature without separate confirmation that it should be public on the website.
- Keep Swedish copy natural and customer-facing.

## Architecture

- Extend the existing `services` content model for the new network service so navigation, sitemap generation, structured data, and the dynamic service route inherit it automatically.
- Update `seoLandingPages` for keyword ownership, copy improvements, and internal relationships.
- Implement the legacy Helsingborg redirect in Next.js routing configuration.
- Adjust homepage copy and links only where necessary to establish it as the primary Helsingborg page.
- Preserve the current visual system and components; no redesign is included.

## Validation

- Run lint and a production build.
- Confirm `/elektriker/helsingborg` resolves as a permanent redirect to `/`.
- Confirm the redirected URL is absent from the generated sitemap.
- Confirm the network page is present in the sitemap and has unique title, description, H1, canonical, and structured-data references.
- Confirm no internal link still targets `/elektriker/helsingborg`.
- Check that every indexable page retains the correct `https://perssonsel.se` canonical domain.
- Review changed Swedish copy for unsupported claims and duplicated passages.

## Success Criteria

- One unambiguous indexable page owns each priority keyword cluster.
- The site has a substantive indexable page for network-installation searches.
- Existing high-priority pages provide stronger, distinct search intent coverage.
- All automated checks and the production build pass.

## Out of Scope

- Google Business Profile changes
- Search Console submissions or validation
- Publishing customer reviews or project case studies without supplied source material
- Creating additional municipality pages
- Domain, DNS, or hosting changes
