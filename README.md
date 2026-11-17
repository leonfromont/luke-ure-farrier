# Luke Ure Farrier

Static website for Luke Ure, a farrier based in Otago, New Zealand. Built the same way as `tnr_website`: plain HTML pages, Tailwind from the CDN, a small custom stylesheet and script, no build step. Edit the HTML files directly.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home: hero, services summary, how Luke works, service area, call to action |
| `services.html` | Service detail, "before Luke arrives" checklist, FAQ (with FAQPage structured data) |
| `about.html` | Short bio and approach |
| `contact.html` | Call and text cards, what to tell Luke when booking, service area |
| `404.html` | Not found page (GitHub Pages serves this automatically) |

Supporting files: `css/styles.css`, `js/main.js` (mobile menu, header shadow, optional GA4 click events), `images/` (favicon, logo, Open Graph image), `robots.txt`, `sitemap.xml`.

## Site address

The site lives at https://lukeurefarrier.com. Every canonical and Open Graph tag, the JSON-LD, `robots.txt` and `sitemap.xml` use that address, and the `CNAME` file in the repo root tells GitHub Pages to serve it there. Luke's phone number (021 0855 4172) is on every page. He has no email address, so the site is call and text only.

If the domain ever changes, edit `CNAME` and run:

```bash
sed -i -e 's#https://lukeurefarrier\.com#https://new-domain.example#g' *.html robots.txt sitemap.xml
```

Also update `images/og-image.svg` if the wording there should change, then run `./create-og-image.sh` to regenerate `images/og-image.png` (needs `rsvg-convert`, from the `librsvg2-bin` package).

## Content for Luke to check

The copy was written without input from Luke, so it stays deliberately general. Worth confirming with him:

- **Service area.** The town list on the home and contact pages (and `areaServed` in the JSON-LD) covers most of Otago, from Dunedin to Queenstown. Trim it to where he actually travels.
- **Services.** Hot and cold shoeing, trimming, remedial and corrective work, young horses. Remove anything he does not offer, add anything missing (for example drafts, donkeys, hoof boots).
- **About page.** Add years of experience, where he trained, any qualifications or association membership, and what he rides or competes in. No credentials are claimed at the moment.
- **Hours.** The contact page says "by appointment" only.
- **Photos.** One photo of Luke at the forge is used twice: a wide darkened crop behind the home hero (`images/luke-hero.jpg`) and a 4:5 crop on the About page (`images/luke-about.jpg`). Both are derived from `images/luke.jpeg`, which is git-ignored because it is 3MB. A second photo of Luke actually shoeing a horse would be worth adding.
- **Social links.** None included. Add Facebook or Instagram links to the footer and as `sameAs` in the JSON-LD if he has them.

## Optional extras

- **Google Analytics.** Add the gtag snippet to the `<head>` of each page as in `tnr_website`. `js/main.js` already sends `phone_click`, `sms_click` and `email_click` events when `gtag` is present.
- **Contact form.** Left out on purpose. Luke has no email address and bookings happen by phone or text. If a form is ever wanted, Formspree can deliver to any inbox; copy the form from `tnr_website/contact.html`.
- **Google Business Profile.** For "farrier near me" searches this matters more than the website itself. Set one up as a service-area business, use the same name, phone and website as the site, and ask happy clients for reviews.

## Deploying (GitHub Pages, same as tnr_website)

Served from the `main` branch root of `github.com/leonfromont/luke-ure-farrier`. Push to `main` to deploy; the old address https://leonfromont.github.io/luke-ure-farrier/ redirects to the custom domain.

The domain `lukeurefarrier.com` is registered at Cloudflare (Leon's account) and its DNS lives there too. Records that must exist, all set to "DNS only" (grey cloud, not proxied) so GitHub can issue the HTTPS certificate:

| Type | Name | Content |
|------|------|---------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `leonfromont.github.io` |

"Enforce HTTPS" is switched on in the repo's Pages settings once GitHub has issued the certificate, which can take up to an hour after the DNS records appear.

## Local preview

```bash
python3 -m http.server 8000
```

Open http://localhost:8000.
