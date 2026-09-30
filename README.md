# lf-newui-

Static HTML/CSS/JS page templates for **Learning Facility (LF)**, built from the
Canva design and intended to be converted into a WordPress theme running
WooCommerce and Tutor LMS.

There is no PHP here and none should be added — the deliverable is markup a
theme developer can wrap in loops without restructuring it.

## Pages

| File | Page |
|---|---|
| `home.html` | Home |
| `hot-deals.html` | Hot Deals |
| `courses.html` | All Courses (listing) |
| `course.html` | Single Course |
| `bundles.html` | Career Bundles (listing) |
| `bundle.html` | Single Bundle |
| `lifetime.html` | Lifetime Membership |
| `blog.html` | Blog listing |
| `blog-single.html` | Single Blog |
| `cart.html` | Cart |
| `checkout.html` | Checkout |
| `certificate-order.html` | Certificate Order |
| `claim-your-certificate.html` | Claim Your Certificate |
| `header-footer.html` | Header + footer reference |

## Running it

No build step. Open any `.html` file in a browser — Bootstrap 5.3, Bootstrap
Icons and Swiper 11 load from the CDN; everything else is plain CSS and JS.

## Structure

```
assets/css/   main.css is an @import list only; tokens.css holds every
              colour, radius and type size; one file per section
assets/js/    main.js is shared behaviour; one file per standalone feature
assets/imgs/  all images
```

Class names are prefixed `lf-`. Universal sections reused across pages are
`lf-<section>` (e.g. `lf-accri`, `lf-rev`); page-only sections are
`lf-<page>-<section>` (e.g. `lf-hm-hi` for the Home hero).

## For the theme developer

- Repeating and dynamic content is marked in the markup:
  `<!-- LOOP START: course card -->`, `<!-- DYNAMIC: course_title -->`.
- The course modules block uses **Tutor LMS's own class names**, so
  `tutor_course_topics()` output inherits the styling as-is.
- Editor content is wrapped in `.lf-rich`, which styles every tag WordPress
  prints — headings, lists, tables, quotes, images, code.
- Anywhere a Bootstrap JS component is doing real work (offcanvas, collapse,
  dropdown, accordion) it is noted in a comment above the block.

`CLAUDE.md` documents the conventions, decisions and outstanding items;
`INVENTORY.md` records the component inventory taken from the design.
