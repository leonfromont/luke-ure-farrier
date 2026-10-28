# Luke Ure Farrier

Static website for Luke Ure, a farrier based in Otago, New Zealand. Built the same way as `tnr_website`: plain HTML pages, Tailwind from the CDN, a small custom stylesheet and script, no build step. Edit the HTML files directly.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home: hero, services summary, how Luke works, service area, call to action |
| `services.html` | Service detail, "before Luke arrives" checklist, FAQ (with FAQPage structured data) |
| `about.html` | Short bio and approach |
| `contact.html` | Call, text and email cards, what to tell Luke when booking, service area |
| `404.html` | Not found page (GitHub Pages serves this automatically) |

Supporting files: `css/styles.css`, `js/main.js` (mobile menu, header shadow, optional GA4 click events), `images/` (favicon, logo, Open Graph image), `robots.txt`, `sitemap.xml`.

## Before going live: placeholders to replace

These values are placeholders and appear in several files. Replace every occurrence.

| Placeholder | Where it appears | Replace with |
|-------------|------------------|--------------|
| `027 000 0000` | All pages (header, footer, CTA, contact) | Luke's mobile number as displayed |
| `+64270000000` | `tel:` and `sms:` links, JSON-LD | Same number in international format, no spaces |
| `luke@lukeurefarrier.co.nz` | Footer, contact page, JSON-LD | Luke's email |
| `https://leonfromont.github.io/luke-ure-farrier` | Canonical and Open Graph tags, JSON-LD, `robots.txt`, `sitemap.xml` | The real domain once chosen (currently the GitHub Pages address) |

One-liner to do all four at once (edit the right-hand values first):

```bash
sed -i \
  -e 's/027 000 0000/027 123 4567/g' \
  -e 's/+64270000000/+64271234567/g' \
  -e 's/luke@lukeurefarrier\.co\.nz/luke@example.co.nz/g' \
  -e 's#https://leonfromont\.github\.io/luke-ure-farrier#https://example.co.nz#g' \
  *.html robots.txt sitemap.xml
```

Also update `images/og-image.svg` if the wording there should change, then run `./create-og-image.sh` to regenerate `images/og-image.png` (needs `rsvg-convert`, from the `librsvg2-bin` package).

## Content for Luke to check

The copy was written without input from Luke, so it stays deliberately general. Worth confirming with him:

- **Service area.** The town list on the home and contact pages (and `areaServed` in the JSON-LD) covers most of Otago, from Dunedin to Queenstown. Trim it to where he actually travels.
- **Services.** Hot and cold shoeing, trimming, remedial and corrective work, young horses. Remove anything he does not offer, add anything missing (for example drafts, donkeys, hoof boots).
- **About page.** Add years of experience, where he trained, any qualifications or association membership, and what he rides or competes in. No credentials are claimed at the moment.
- **Hours.** The contact page says "by appointment" only.
- **Photos.** There are none yet. A photo of Luke at work would lift the hero and the about page. Replace the decorative horseshoe in the hero with an `<img>` if a good shot turns up.
- **Social links.** None included. Add Facebook or Instagram links to the footer and as `sameAs` in the JSON-LD if he has them.

## Optional extras

- **Google Analytics.** Add the gtag snippet to the `<head>` of each page as in `tnr_website`. `js/main.js` already sends `phone_click`, `sms_click` and `email_click` events when `gtag` is present.
- **Contact form.** Left out on purpose. Farrier bookings mostly happen by phone or text. If a form is wanted, copy the Formspree form from `tnr_website/contact.html`.
- **Google Business Profile.** For "farrier near me" searches this matters more than the website itself. Set one up as a service-area business, use the same name, phone and website as the site, and ask happy clients for reviews.

## Deploying (GitHub Pages, same as tnr_website)

Live at https://leonfromont.github.io/luke-ure-farrier, served from the `main` branch root of `github.com/leonfromont/luke-ure-farrier`. Push to `main` to deploy.

For a custom domain, add a `CNAME` file containing the bare domain, point the domain's DNS at GitHub Pages, then run the sed above to update the site URLs.

## Local preview

```bash
python3 -m http.server 8000
```

Open http://localhost:8000.
