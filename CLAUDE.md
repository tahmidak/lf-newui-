# LF — WordPress theme templates

## What this is

Static HTML/CSS/JS page templates built from a Canva design. A WordPress theme
developer converts them into a theme running WooCommerce and Tutor LMS.
There is no PHP here and none should be added. The deliverable is markup a
theme dev can wrap in loops without restructuring it.

Working folder: `d:\1_CODE\Work\LF\newui`

## The design

| | Canva design ID | Artboard | Pages |
|---|---|---|---|
| Desktop | `DAHWLdoKEpc` | 1440 × 8000 | 11 |
| Mobile | `DAHVKorRhB0` | 425 × 8000 | 11 |

`DAHVKxvZrp4`, the desktop id recorded first, **no longer resolves** — the
Canva API returns "not found". `DAHWLdoKEpc` ("Copy of Learning Facility (LF)
Full ui") is the most recently updated desktop copy and is what the page text
was read from. Several other copies exist; confirm which one is canonical.

Title on both: *Learning Facility (LF) Full ui*.

- The mobile file is a **resize of the desktop file** — both share the same
  internal page IDs, so **page N desktop is page N mobile**, all eleven. There
  are no continuation artboards and no page unique to one breakpoint.
- Both artboards are near 1:1 with CSS pixels (1440 desktop, 425 mobile), so
  measurements read off the PDFs directly. No scaling maths.
- **But some blocks are drawn as scaled-down mock-ups.** The Cart page's order
  summary is a 266px-wide graphic with 11px type, not a real 1440-scale
  layout. Never lift a px value from a block that looks small on the artboard
  — check it against a full-width section first.
- **Every button in the design is a full pill.** No exceptions found across
  the eleven pages.

## Rules

- `INVENTORY.md` is the source of truth for components, not the Canva design.
  Where they disagree, follow `INVENTORY.md`. Its "Decisions that override the
  design" section lists variants deleted on purpose. Never bring one back to
  match Canva.
- Canva is used for text content and colours only. Spacing and geometry come
  from the section PDFs and my judgment.
- I supply each section as two PDFs, desktop and mobile. Build from those. Ask
  me for them if I haven't given them.

## Build

**No build step.** Bootstrap 5.3 comes from the CDN; everything else is plain
CSS and plain JS. Nothing to compile, nothing in `node_modules`.

Load order in every page's `<head>` — Bootstrap first, ours second, always:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="assets/css/main.css" rel="stylesheet">
```

Bootstrap's JS bundle (Popper included, needed for dropdowns, offcanvas,
collapse, tabs, modals) goes before `</body>`, ours after it:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/main.js"></script>
```

`main.css` contains **nothing but `@import` rules** — the same idea as a
bundler entry file. **A new section file must be added to that import list or
its rules will not load.** Imports must sit at the very top of the file, before
any other rule.

Tradeoff accepted: one request per CSS file. Fine for a template handoff — the
theme dev enqueues these individually anyway.

## File layout

```
home.html                per-page files at the root (home.html is the home
                         page — there is no index.html)
header-footer.html       header + footer, used on all pages
assets/css/
  main.css        @import list — no rules of its own
  tokens.css      :root — the only place colours, radii and shadows live
  base.css        body, a, heading resets, .lf-section, .lf-container
  typography.css  .lf-page-header, .lf-sec-header, .lf-txt-normal, .lf-txt-sm
  btn.css         .lf-btn* — Bootstrap button variable overrides
  components.css  shared cross-page components
  header.css      header / nav / offcanvas
  footer.css      footer
  <section>.css   one file per section
assets/js/
  main.js         shared behaviour
  <feature>.js    one file per standalone behaviour
assets/imgs/      all images
```

## Naming

- Every class starts `lf-`.
- Section classes are `lf-<abbr>-<element>`.
- Choose the abbreviation once, record it in the file's comment banner and in
  the list below, never rename it afterwards.

**Two kinds of prefix:**

- Universal section, used on more than one page: `lf-<sec>` — e.g. `lf-accri`.
  Built ONCE, then reused. Never rebuild one per page.
- Page-only section: `lf-<page>-<sec>` — e.g. `lf-hm-hi` (Home hero),
  `lf-sblg-toc` (Single Blog table of contents).

Universal (`lf-<sec>`):

| Prefix | Section | File |
|---|---|---|
| `lf-header` / `lf-footer` | header, footer | `header.css` / `footer.css` |
| `lf-accri` | accreditation / "Trusted by" | `accri.css` |
| `lf-crs` | Popular courses | `crs.css` |
| `lf-cert` | certificate CTA | `cert.css` |
| `lf-rev` | reviews slider | `rev.css` |
| `lf-faq` | FAQ accordion | `faq.css` |
| `lf-pagi` | pagination | `pagi.css` |
| `lf-plan` | membership plan card | `plan.css` |
| `lf-totals` | order totals + line items | `totals.css` |
| `lf-field` / `lf-label` | form fields | `forms.css` |
| `lf-ccard` / `lf-blcard` | course card / blog card | `cards.css` |
| `lf-search` | search pill (header, hero, listings) | `search.css` |
| `lf-stars` | fractional star rating | `stars.css` |
| `lf-expand` | clamp a block + See More / caret | `expand.css` |
| `lf-rich` | CMS/editor content styling | `rich.css` |
| `lf-btn` | buttons | `btn.css` |

Page prefixes (`lf-<page>-<sec>`):

| Page | Prefix | File |
|---|---|---|
| Home | `hm` | `home.css` |
| Hot Deals | `hd` | `hot-deals.css` |
| All Courses | `ac` | `courses.css` |
| Single Course | `sc` | `single-course.css` |
| Career Bundles | `ab` | `bundles.css` |
| Single Bundle | `sb` | `single-bundle.css` |
| Lifetime | `lt` | `lifetime.css` |
| Blog listing | `ablg` | `blog.css` |
| Single Blog | `sblg` | `blog-single.css` |
| Cart | `cart` | `cart.css` |
| Checkout | `chk` | `checkout.css` |
| Certificate Order | `cord` | `certificate-order.css` |
| Claim Your Certificate | `claim` | `claim-certificate.css` |

<!-- add one line per section as it is built -->

## Section shell

Every section uses this exact structure. Match it:

```html
<!-- ============================================
    SECTION NAME
============================================ -->
<section class="lf-section lf-<abbr> bg-white">
    <div class="lf-container">
        ...
    </div>
</section>
```

- `.lf-section` carries the vertical rhythm (`padding-block`, stepped at `lg`).
  Never put section padding in the HTML — Bootstrap's spacing scale stops at
  `5` (3rem), which is short of the design's desktop section padding.
- Background changes on `<section>` via one background class. The inner
  container never changes.
- `.lf-container` is ours, defined once in `base.css`. Bootstrap's
  `.container` maxes at 1320px on `xxl`; use `.lf-container` so the content
  width matches the design exactly and is changeable in one place.

## CSS rules

- **Tokens only.** Colours, radii and shadows come from the `--lf-*` custom
  properties in `tokens.css`. Never a raw hex in a section file.
- **Brand backgrounds and text colours need our own utility classes**
  (`.lf-bg-green`, `.lf-text-navy`), declared in `tokens.css`. Bootstrap's
  `.bg-primary` reads `--bs-primary-rgb`, and adding a *new* theme colour to
  Bootstrap's `bg-*` / `text-*` set requires SCSS, which this project doesn't
  have. Don't try to bend `bg-primary` into a brand colour.
- **Theme Bootstrap components through their own CSS variables, not
  overrides.** Bootstrap 5.3 components read component-scoped variables, so a
  brand button is a variable set, with no specificity fight and no
  `!important`:

  ```css
  .lf-btn-primary {
      --bs-btn-bg: var(--lf-green);
      --bs-btn-border-color: var(--lf-green);
      --bs-btn-hover-bg: var(--lf-green-dark);
      --bs-btn-color: #fff;
  }
  ```

  Used as `class="btn lf-btn-primary"`. Same pattern for `.nav-link`,
  `.accordion`, `.dropdown`, `.card`.
- **Global `--bs-*` overrides** (font family, body colour, `--bs-border-radius`)
  go in `tokens.css` `:root`, once.
- **Repeated styles** go in a section file as a real class. Bootstrap utilities
  in the HTML are for one-off layout only: grid/flex definitions, `order-*`,
  `col-*`, gaps between siblings.
- **Avoid `!important`.** Every Bootstrap utility already carries it, and
  WooCommerce and Tutor LMS ship their own button and form CSS on top. Reach
  for a more specific selector or a component variable first. Anything that
  genuinely needs `!important` gets a comment saying why.
- JS hooks are `data-*` attributes, never classes. The theme dev will rename
  classes; they won't rename data attributes.

## Responsive

- **Bootstrap's breakpoints, unchanged:** `sm` 576, `md` 768, `lg` 992,
  `xl` 1200, `xxl` 1400. They can't be changed without SCSS, so the layout
  bends to them. Note `lg` is **992, not 1024** — that is where nav and
  sidebars flip.
- `md` and `lg` carry almost everything. `sm`, `xl` and `xxl` only where a grid
  genuinely needs another step.
- Canva supplies desktop and mobile only. **Tablet is my decision**: at `md`,
  cards go 2-up, typography stays desktop, nav stays mobile.
- Mobile nav is a Bootstrap `offcanvas` off the `navbar`.
- **Card carousels:** Bootstrap's carousel shows one full-width slide at a
  time and can't do "three cards visible, advance by one". For any multi-card
  slider load Swiper 11 from the CDN on that page. Bootstrap's carousel is for
  single-slide heroes only.
- Keep one markup block per component across breakpoints wherever possible. A
  second block is acceptable only when the desktop and mobile layouts genuinely
  can't be one thing — and never for a card that maps to a CMS loop.

## For the WordPress handoff

- Mark repeating and dynamic content so the theme dev can see where loops go:
  ```html
  <!-- LOOP START: course card -->
  <!-- DYNAMIC: course_title -->
  <!-- LOOP END -->
  ```
- Card markup mapping to a Tutor LMS course or a Woo product must be one
  self-contained block, with no style depending on a sibling's position.
- No fixed heights on cards, titles, or anything holding CMS text. Real titles
  are longer than the Canva placeholders.
- Keep desktop and mobile card markup identical, so the loop is written once
  and printed twice.
- Bootstrap is a hard dependency of these templates. Keep the CDN tags in every
  page so the theme dev can see what to enqueue, and note anywhere a Bootstrap
  JS component is doing real work.

## Open decisions

Resolve each the first time a section needs it, then write the answer here.

1. ~~Content width~~ — **settled: 1240px.** Measured off the design: the 3-up
   blog grid spans 1232px and the header row 1241px on a 1440 artboard. The
   design's own side gutters wander between 101px and 141px, so 1240 is the
   middle of it. Defined as `--lf-container`; `.lf-container` goes in
   `base.css`.
2. ~~Swiper~~ — **settled: yes, Swiper 11, loaded only on pages that have a
   slider.** Currently the reviews row (`assets/js/reviews.js`).
3. ~~FAQ / accordion markup~~ — **settled: Bootstrap `accordion`,** themed
   through component variables (`faq.css`).
4. ~~Icons~~ — **settled: Bootstrap Icons 1.11 from the CDN,** `<i class="bi
   bi-*">`. Loaded in every page after Bootstrap's CSS.
5. **Mobile course rows.** Home and Hot Deals draw Popular courses as a
   swipeable peek row on mobile; it is a CSS scroll-snap row (`.lf-crow`),
   no JS. The All Courses and Bundles grids stack instead, as their PDFs show.

## Known debt — clear before the next page

- **Images.** The nine accreditation badges, the Reviews.io logo, the course /
  bundle thumbnail and the Hot Deals hero background are real, copied from the
  CE project's image folder. Still grey 16x12 placeholders, to be overwritten
  at the same filenames: `certificate.png`, `home-hero-promo.png`,
  `home-membership.png`, `hot-deals-promo.png`, `blog-featured.jpg`,
  `blog-promo-lifetime.png`. CE-branded art (their logo, certificate and promo
  banners) was deliberately NOT copied.
- **Checkout payment fields are invented markup.** The design draws them as
  graphics; card number / expiry / CVC inputs are there so the theme dev has
  something to replace with the Woo gateway fields.
- **Cart express-payment block is an image placeholder**
  (`cart-express-payment.png`) — the design draws it as a graphic.
- **Wrong-brand URLs** (INVENTORY §5): the checkout terms and privacy links
  point at `competehigh.com` in the design. They are `href="#"` here.
- **Lifetime has no desktop PDF** — built from the mobile PDF, desktop layout
  is my judgment (one column becomes two).
- **Lifetime "How to Start" is missing.** INVENTORY lists it; no PDF shows it
  and no copy exists anywhere, so it was left out rather than invented.
- **Lifetime "Course Category" chips are in** (INVENTORY) but do NOT appear in
  the mobile PDF. Conflict #3 still needs a ruling.
- **Logo mark is a traced SVG placeholder** (inline in `header-footer.html`,
  twice). Replace with the real logo file.
- **`--lf-red` and `--lf-purple-night` are eyeballed** from the header PDFs;
  the Canva API returned no fills. Confirm in the editor.
- **Logo font "Open Sans" is a guess.** Lato for UI/body is confident.
- ~~Brand utilities inside `@layer components`~~ — **fixed**: the layer is
  gone, so those utilities behave like normal classes.

<!-- numbered list; add as it accrues -->

## Working style

- Show me the plan before writing a long section. Correcting the approach is
  cheaper than correcting the output.
- For a new section, match the structure and naming of the sections already in
  `home.html` exactly.
- Use the Canva MCP for real text and colour values. Take sizes and spacing
  from the section PDFs, not from Canva measurements (see Rules).

## Corrections

Add a line here whenever the same mistake has to be fixed twice.

- **Eyebrow colour is a modifier, not a utility.** `tokens.css` loads before
  `typography.css`, so `.lf-text-white` on a `.lf-eyebrow` loses. Use
  `.lf-eyebrow-white` / `.lf-eyebrow-purple`.
- **A card's radius belongs on the card, with `overflow: hidden`** — never on
  the image. The design has the image flush to the card's top edge and square
  at the bottom.
- **A full-bleed band with `padding-block: 0` needs an inner wrapper.**
  Bootstrap's `.row` carries a negative top margin, so the row pulls up into
  the header without one (this bit the Hot Deals hero).
- **Never set `--bs-accordion-inner-border-radius` to the pill.** Bootstrap
  rounds the LAST item's answer panel with it
  (`.accordion-item:last-of-type .accordion-collapse`), so the copy spills out
  of the curve — only the last row, which is why it looked random.
- **Tutor LMS sections use Tutor's class names, not ours.** The course modules
  block is styled through `.tutor-accordion*` / `.tutor-course-content-list*`
  scoped under `.lf-sc-mod`, so `tutor_course_topics()` output inherits it
  untouched. `assets/js/topics.js` only stands in for Tutor's own script.

## Progress

**All 11 pages built.**

| File | Page | Source |
|---|---|---|
| `home.html` | Home | PDF desktop + mobile |
| `hot-deals.html` | Hot Deals | PDF desktop |
| `courses.html` | All Courses | PDF desktop |
| `course.html` | Single Course | **no PDF** — Canva copy, layout my judgment |
| `bundles.html` | Career Bundles | PDF mobile |
| `bundle.html` | Single Bundle | **no PDF** — Canva copy, layout my judgment |
| `lifetime.html` | Lifetime Membership | PDF mobile |
| `blog.html` | Blog listing | **no PDF** — Canva copy, follows the All Courses listing |
| `blog-single.html` | Single Blog | PDF desktop |
| `cart.html` | Cart | **no PDF** — Canva copy, layout my judgment |
| `checkout.html` | Checkout | **no PDF** — Canva copy, layout my judgment |

Where only one breakpoint had a PDF, the other is my judgment.
`header-footer.html` stays as the header/footer reference.

Two more pages were ported from the reference build (CE) in the LF palette:
`certificate-order.html` and `claim-your-certificate.html` — 13 pages in all.

**Second audit round applied.** Single course rebuilt as one two-column row
(title + clamped overview + modules left, full-height sidebar with a sticky
card right) with the modules in Tutor LMS markup; single bundle rebuilt to the
reference layout in Canva's colours — light hero, one sticky pricing card
(`lf-sb-card` gone), all 16 courses in a Swiper with no "view all", and the
floating CTA animating both in and out; Hot Deals hero split into two columns
with the purple fill on the left one; Lifetime categories clamped with the same
expander as the course overview; All Courses puts Sort By and Search category
side by side on mobile.

**Design audit (lf audit.docx) applied.** Headline changes: shared search pill,
fractional star rating, card shape (radius on the card, rules between rows),
rectangular accreditation tiles with the dark-to-light gradient and rules top
and bottom, bigger type throughout, bare arrow on the amber CTAs, three-colour
"why learners choose us" cards, plan cards replaced by artwork in a link,
decorative corner rings, the Hot Deals blink animation, the category expander,
How to Start, the single-course sidebar, and the single-blog two-row layout
with `.lf-rich` styling every tag the editor prints.

- Header/footer: nav order follows the PDFs (Home · Hot Deals🔥 · All Courses ·
  Log In/Sign Up). Cart icon shows at **all** breakpoints (INVENTORY lists it on
  desktop; the desktop PDF doesn't draw it) — add `d-lg-none` to hide it.
- Mobile menu is an offcanvas opened directly under the bar.
- JS: `main.js` (mobile menu), `reviews.js` (Swiper), `countdown.js` (Hot Deals).
