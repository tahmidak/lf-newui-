# LF — Design Inventory

## Decisions that override the design

Where this file and Canva disagree, **this file wins**. Do not restore a
deleted variant to match Canva.

Settled while building the first six pages. The conflicts still waiting for a
ruling are listed under "Conflicts needing a decision" at the end of this file.

| Component | Decision | Deleted |
|---|---|---|
| Cards A / B / C (conflict 1) | **One card**, `.lf-ccard`, with two optional rows: the guarantee line and the discount badge. Bundle cards switch both on; course grids switch both off. | The idea of three separate cards |
| Plan cards H2 / H3 | **One component**, `.lf-plan` (`plan.css`). They differ only in their figures (£299 / £71), which are CMS values. | H3 as a separate build |
| "Special Offer — £10.99" strip | **Not a section.** It is a card sitting over the hero graphic on Home, which is how both Home PDFs draw it. | The standalone strip |
| Popular courses (P1 vs P2) | **One universal section**, `lf-crs`. Hot Deals adds one extra paragraph (`.lf-crs-extra`); everything else is identical. | A second copy on Hot Deals |

---

Read via Canva MCP on 2026-09-14. **Both designs read in full** — 11 pages each.

| Design | ID | Size | Pages |
|---|---|---|---|
| Copy of Learning Facility (LF) Full ui | `DAHVKxvZrp4` | 1440 × 8000 | 11 |
| …same, resized | `DAHVKorRhB0` | 425 × 8000 | 11 |

**The two designs are the same 11 pages at two widths.** Both files carry
identical internal page IDs, so page N desktop is page N mobile. No
continuation artboards, no page unique to one breakpoint, no note artboards.
**10 unique pages? No — 11, all present at both breakpoints.**

Content fills roughly the top 40% of each 8000px artboard. The rest is empty
canvas, not missing content.

## How section order was determined

- **Desktop order is read off the artboard**, not inferred — page thumbnails
  were legible enough to confirm the vertical sequence of every page. Treat it
  as accurate.
- **Mobile order is inferred.** Canva's text API returns elements in z-order,
  and the mobile artboard is too narrow (425 × 8000) to thumbnail usefully.
  Mobile section *content* below is reliable; mobile section *order* is not.
  Confirm against the mobile PDF before building.

---

# 1. Pages and their sections

### P1 — Home

1. Header
2. Hero — "Professional online learning" / **"Build skills that move you
   forward."** / "Practical, accredited courses designed to fit around your life
   — so you can learn with confidence and take your next step." + search input +
   3 inline USPs (Learn anywhere · Instant access · Recognised certificates);
   "Autumn Sale" promo graphic right
3. Trusted-by strip — "Quality you can trust" / "Our courses are Trusted by"
4. Popular courses — "Find your next opportunity" / **"Popular courses"** /
   "Explore our most-loved training and start building a more capable future."
   → **12 course cards (4 × 3)**
5. "Special Offer — Courses from £10.99" strip
6. Membership CTA — "Learn without limits" / **"One Time Enrollment, Lifetime
   Access To All Course"** / "Discover Membership" + padlock graphic
7. Certificate — "A certificate for your progress" / "Learn with confidence.
   Show what you can do." / "Get Your Certificate"
8. Reviews — "What our students say" + rating box (158 Reviews / 4.9 average /
   Excellent) + **3 review cards** with prev/next arrows
9. Footer

*Mobile:* courses 12 → **3**, reviews 3 → **1**. Membership heading changes to
**"One Membership. Every opportunity."**

### P2 — Hot Deals

1. Header
2. Hero — coupon card ("Any Course For" / Regular Price: £500 / 90% OFF /
   Lifetime Access / **£10.99** / Coupon: **HEATWAVE** / Browse Courses) +
   **"Offer Ends Soon!!!" countdown "12 : 12 : 12"** + Autumn Sale graphic
3. Trusted-by strip
4. Popular courses — same heading as P1 **plus** an extra line: "Gain
   industry-recognised certification, learn at your own pace and get the support
   you need to move confidently towards your goals." → **12 course cards (4 × 3)**
5. Why choose us — "why learners choose us" / **"Professional learning, made to
   fit your life."** → 3 cards: Globally Recognised Qualifications · Study on
   your schedule · Earn your digital certificate
6. Membership band — "Learn without limits" / **"Get access to all courses!"** /
   copy citing **3,000+ courses** / "Get Your Deal" + plan card (Register Today!
   / Lifetime Membership Plan / Regular Price: £2000 / 90% OFF / Lifetime Access
   / **£299**)
7. Certificate
8. Reviews (3 cards)
9. Footer

*Mobile:* courses 12 → **3**, reviews → **1**. Mobile **adds the "Special
Offer — Courses from £10.99" strip**, which desktop puts on Home only.

### P3 — All Courses (listing)

1. Header
2. Page header — "Find your next opportunity" / **"Our Courses"** / "Explore our
   most-loved training and start building a more capable future."
3. Category filter — a **wide multi-column block across the top**, not a
   sidebar. ~35 rows, all reading "Category Name"
4. Search input + **Sort By** dropdown, right-aligned (Sort A to Z · Best
   Selling · Oldest to Newest · Newest to Oldest)
5. Course grid — **8 cards (4 × 2)**
6. Pagination — Previous · 1 2 3 … 73 · Next
7. Footer

*Mobile:* grid 8 → **4**; filter collapses to "All Courses" + 3 category rows
**plus a "Search category" input that desktop does not show**.

### P4 — Single course

1. Header
2. Course hero — title "Parenting and Awareness Online Course", "A Closer Look
   at the Course" / **"Course Overview"** + body copy; **purchase card right**
   (course card + "⟲ 14-Day Money-Back Guarantee" + **"80% Off"** badge)
3. Course modules — "what you will learn" / **"Course Modules"** → **10
   numbered accordion rows**, each with a `00:00` duration
4. Description + **"See More"**
5. Certificate
6. Trusted-by strip
7. Similar courses — "You may find interest" / **"Similar Courses"** → **4
   course cards**
8. FAQ — "Need to know" / **"Frequently Asked Questions"** → 4 rows, all
   "Become a lifetime prime member?" with lorem answers
9. Reviews (3 cards)
10. Footer

*Mobile:* similar courses 4 → **3**, reviews → **1**. The purchase card keeps
the guarantee line; **the "80% Off" badge does not appear in the mobile text** —
check whether it was dropped or is baked into an image.

### P5 — Lifetime membership

1. Header
2. Hero — "Learn without limits" / **"Get access to all courses Lifetime!"** /
   "Get unlimited access to **900+** professional courses, certificates and
   every new course we release — without recurring fees." + plan card (Register
   Today! / Lifetime Membership Plan / Regular Price: **£3100** / 90% OFF /
   Lifetime Access / **£71**)
3. Membership highlights — "Membership Highlights" / **"A smarter way to keep
   growing."** + copy + "Start learning" → **6 items** (Instant course access ·
   Unlimited PDF certificates · Excellent expert support · CPD certified
   courses · All future courses included · Learn from anywhere)
4. Benefits — "Built for your momentum" / **"Learn more. Do more. Become
   more."** → 3 cards: Current courses · Future included · Proof of progress
5. Course Category — **15 chips, all "Accounting (7)"** (chip carries a count)
6. FAQ — "Need to know" / "Frequently Asked Questions" → 4 rows
7. How to Start — 3 numbered steps, each with a short bullet list
8. Closing CTA — **"Your next chapter starts here."** / "Join Learning Facility
   once and keep building skills for a lifetime." / "Get lifetime access"
9. Reviews
10. Footer

*Mobile:* reviews → 1. **Mobile appears to omit both the Course Category grid
and How to Start** — no trace of either in the mobile text. Confirm against the
PDF; if real, that's a decision, not an accident.

### P6 — Cart

1. Header
2. Line items — 2 × "Ultimate Digital Marketing Course: Social Media, SEO
   Content, Copywriting, Email Marketing" @ £25.00
3. Coupon — Enter Coupon / Apply / "Coupon code applied successfully."
4. Totals — Subtotal £50.00 · Coupon(Coupon) −£20.00 · Total £30.00
5. "Proceed to Checkout" + **"- Or -"** (express payment block below)
6. Footer

*Mobile:* same content, stacked.

### P7 — Checkout

1. Header
2. **Contact** — Email Address * + "Log in"
3. **Billing details** — First Name * · Last Name * · Phone * · "Create an
   account?"
4. **Payment** — card fields (drawn as graphics in the design)
5. Terms checkbox + privacy paragraph
6. "Complete Payment"
7. Order summary — 2 items + the same totals block as P6
8. Trusted-by strip
9. Footer

*Mobile:* same content, stacked.

### P8 — Career Bundles (listing)

1. Header
2. Page header — **"Career Bundles"** / "Expertly curated course bundles to
   advance your career."
3. Bundle grid — **12 bundle cards (4 × 3)**
4. Trusted-by strip
5. Footer

**No search, no sort, no category filter, no pagination** — unlike P3. Worth
confirming that's deliberate.

*Mobile:* grid 12 → **5**.

### P9 — Single bundle

1. Header
2. Bundle hero — badge "Safeguarding Level 3" + "16 Courses in 1 Bundle" /
   **"Become a Certified Safeguarding Professional"** / "Master essential
   safeguarding skills with 16 professional courses, CPD certification, and
   lifetime access designed to accelerate your career." + CTAs "Start Your
   Career Upgrade" / "View Bundle Details" + hero image; **two cards stacked
   right** — see §2 J
3. Your Career Roadmap — "Progress through three essential stages to achieve
   professional excellence" → 01 Foundation · 02 Professional Skills · 03
   Career Ready
4. The Courses You Will Get — "16 comprehensive professional courses designed
   for career transformation" → **4 bundle-course cards**
5. Your Career Pathway — **5 numbered rows**: Safeguarding Learner · Support
   Worker · Care Coordinator · Safeguarding Officer · Leadership Roles
6. Trusted-by strip
7. Premium Value Comparison — two boxes: *Individual Courses* (16 Courses ·
   Average Course Price: £30-£50 Each · Total: £500+) vs *Career Bundle* (Just
   £39 · 16 Courses · Lifetime Access · **Save over 90%**) + "aDD tO cART"
8. Stats strip — 4.9 Learner Rating · 10k+ Learner Trained · 16 Professional
   Courses · Lifetime Access
9. Footer

*Mobile:* content identical, all counts identical. The most faithfully
translated page in the set.

### P10 — Blog listing

1. Header
2. Page header — **"Blogs by Learning Facility"**
3. Post grid — **6 cards (3 × 2)**, each: "Thumbnail" placeholder · title ·
   "Read More"
4. Pagination — Previous · 1 2 3 … 73 · Next
5. Footer

**No newsletter, no category filter, no excerpt, no date** anywhere on this
page.

*Mobile:* the mobile file reads as 6–8 cards; z-order makes the count
ambiguous. Confirm from the PDF.

### P11 — Blog single

1. Header
2. Article header — title + standfirst "If stored and heated correctly, yes.
   Our UK guide covers safe times, temperatures and methods."; **lifetime
   membership promo image right** (£71 / LIFETIME PRICE / Subscribe)
3. Featured image — "Image" placeholder
4. Article body — real long-form copy (prawn reheating food-safety guide), with
   an inline **Table of Contents** link list
5. **"Text Goes On"** — placeholder marking unfinished copy
6. **Leave a Reply** — Comment * · Name * · Email * · Website · "Save my name,
   email, and website in this browser for the next time I comment." · Post
   Comment
7. Footer

*Mobile:* same content; the sidebar promo reflows inline.

---

# 2. Card and component variants

### A. Course card — the base card

image · **Add to Cart** · title · category ("Personal Development") · 4.5 ·
Self-Paced · £89.00 struck · £14.00

Used on **P1, P2, P3, P4 (Similar Courses)**. Identical at both breakpoints.
No countdown timer anywhere.

### B. Course purchase card — P4 only

Card A **+ "⟲ 14-Day Money-Back Guarantee" + "80% Off" badge**. Sits in the
right column of the single-course hero.

### C. Bundle card — P8 only

image · Add to Cart · title ("… Career Bundle") · **"11 Course Bundle"** in
place of the category · 4.5 · Self-Paced · £89.00 / **£29.00** · **"⟲ 14-Day
Money-Back Guarantee"** · **"80% Off"** badge

Structurally card A with the guarantee line and discount badge that card B also
has. Whether that makes three cards or one card with two optional rows is the
first decision to take.

### D. Bundle-course card — P9 "The Courses You Will Get"

"CourseImage" · title ("Certificate in Sterile Services") · level (Beginner /
Intermediate) · duration ("4h") — **no price, no rating, no button.** A
stripped-down card, not card A.

### E. Blog card — P10

thumbnail image · title · **"Read More"** — no date, no excerpt, no category,
no author.

### F. Review card — P1, P2, P4, P5

quote · "Verified Customer" · name ("Taufiq Israil"). The aggregate rating box
(**158 Reviews / 4.9 average / Excellent**) sits **outside** the cards, to the
left of the row. Identical card at both breakpoints; only the count changes
(3 desktop / 1 mobile), so the row is a slider.

### G. Category chip — two forms

| Form | Where | Content |
|---|---|---|
| Plain | P3 filter | "Category Name" — no count |
| With count | P5 | "Accounting (7)" |

### H. Plan / coupon cards — **not a shared component**

Five content variants, no two alike. Build each inside its own section.

| Variant | Where | Content |
|---|---|---|
| H1 Hero coupon | P2 | Any Course For · Regular £500 · 90% OFF · **£10.99** · Coupon: HEATWAVE · Browse Courses · **live countdown** |
| H2 Membership | P2 | Register Today! · Regular £2000 · 90% OFF · **£299** |
| H3 Lifetime hero | P5 | Register Today! · Regular £3100 · 90% OFF · **£71** |
| H4 Sidebar promo | P9, P11 | £71 / LIFETIME PRICE / Subscribe — **an image in an anchor**, not a coded card |
| H5 Home membership | P1 | Copy + "Discover Membership", padlock graphic — no price |

### I. Cart line item — P6, P7

title · £25.00. Plus the shared totals block (Subtotal / Coupon / Total).

### J. Bundle purchase cards — P9, two stacked

| Card | Content |
|---|---|
| J1 | "Safeguarding Career Bundle" · 16 Courses · CPD Certification · Lifetime Access · Mobile Learning · 4.9 · **£39** / £500 · **Enroll Now** |
| J2 | **"Take this bundle"** · £500 £39 · "Save Over 90% - Today" · LifeTime Access · CPD certified courses · Instant certificates · Learn anytime · ⟲ 14-Day Money-Back Guarantee · **View All 16 Courses** |

### K. One-off blocks — build in section, no shared CSS

Why-choose-us card (P2, ×3) · membership highlight item (P5, ×6) · benefit card
(P5, ×3) · how-to-start step (P5, ×3) · career roadmap stage (P9, ×3) · career
pathway row (P9, ×5) · value comparison box (P9, ×2) · stats item (P9, ×4).

---

# 3. Deduplicated section list

| Section | Appears on | What varies |
|---|---|---|
| **Header** | all 11 | Desktop = logo + nav (Home · All Courses · Hot Deals🔥) + search + Log In/Sign Up + cart. Mobile = logo + hamburger + cart. Same content → one template part. |
| **Footer** | all 11 | Identical everywhere: logo + tagline, "Our Terms" (Terms and Conditions / Privacy Policy / Disclaimer), "Important Links" (Contact / Blogs / Certificate Order). **No newsletter anywhere on this site.** |
| **Trusted-by strip** | P1, P2, P4, P7, P8, P9 | "Quality you can trust" / "Our courses are Trusted by" + a row of accreditation logo badges (one reads "14 Days", one "ACCESS"). Identical copy throughout. |
| **Certificate block** | P1, P2, P4 | Identical copy and CTA. Full-width on all three. |
| **Reviews** | P1, P2, P4, P5 | 3 cards desktop / 1 mobile. Same card, same rating box. |
| **Popular courses** | P1, P2 | Same heading; **P2 adds a second sub-line**. 12 cards on both. |
| **Course card grid** | P1, P2, P3, P4 | Card count only — 12 / 12 / 8 / 4. Always card A. |
| **Membership CTA** | P1, P2 | Two content variants (H5 vs H2 + "Get access to all courses!"). Same slot, different card. |
| **FAQ accordion** | P4, P5 | Identical — 4 rows, same placeholder question and lorem answer, same "Need to know" eyebrow. |
| **Pagination** | P3, P10 | Identical (Previous · 1 2 3 … 73 · Next). |
| **Sort By dropdown** | P3 | P8 has none. |
| **Totals block** | P6, P7 | Identical. |
| **Listing-page shell** — page header + grid + pagination | P3, P10 | Same skeleton, different card and no filter/sort on P10. |

**Strongest extraction candidates:** header, footer, trusted-by strip,
certificate block, reviews row, FAQ accordion, pagination, course card A.

---

# 4. Conflicts needing a decision

Each of these is a place where the design is inconsistent or where mobile and
desktop disagree. Ruling on them now is cheaper than discovering them mid-build.
As each is settled, move it into "Decisions that override the design" at the top.

1. **Is the guarantee line + "80% Off" badge part of card A?** Cards B and C
   carry both; cards on P1/P2/P3 carry neither. One card with two optional rows,
   or three separate cards?
2. **"Special Offer — Courses from £10.99" strip** — desktop places it on Home
   only; mobile places it on Home *and* Hot Deals. Which is right?
3. **P5 mobile appears to drop Course Category and How to Start.** Deliberate,
   or an unfinished resize?
4. **P3 filter shape** — desktop is a ~35-row block across the top, mobile is
   3 rows + a "Search category" input. Does desktop get the search input too?
   Does mobile get the full list behind a toggle?
5. **P8 has no search, sort, filter or pagination** while P3 has all four. A
   bundle listing with 12+ items will need pagination in WordPress regardless.
6. **P4 mobile "80% Off" badge** — dropped, or baked into an image?
7. **P10 mobile card count** — reads as 6–8; confirm from the PDF.
8. **Price and catalogue-size figures contradict each other:** lifetime is
   **£299** on P2 but **£71** on P5/P9/P11; the library is **3,000+** courses on
   P2, **900+** on P5, and **1500+** in P5's How to Start. All CMS-driven, so
   these are presumably placeholders — but confirm before hard-coding any of them.

# 5. Placeholders and copy errors

Carry through or fix deliberately — don't fix silently.

- **Wrong-brand URLs.** P7's terms and privacy links point to
  `competehigh.com`. P11's Table of Contents links point to
  `careereducation.co.uk/wp-admin/post.php?post=43230&action=edit` — WordPress
  *editor* URLs, pasted from another site. Both need replacing.
- **"Text Goes On"** — P11, marks unfinished article copy.
- **Image placeholders** — "Image" (P11), "Thumbnail" (P10), "CourseImage" (P9).
- **"aDD tO cART"** — P9, casing error.
- **Module titles use underscores for colons** — "Module 3_ Social
  Communication and Relationships", and so on for 4, 6, 7, 8, 9, 10. Modules 1,
  2 and 5 have no separator at all.
- **All module durations read `00:00`** (P4).
- **Missing spaces at line breaks** — "Build skills that|move you forward.",
  "A smarter way to|keep growing.", "One Membership.|Every opportunity.". These
  are Canva line breaks, not real copy.
- **"Hot Deals🔥 "** carries a trailing space in the desktop nav.
- **Every course card on the site uses the same placeholder** — "Parenting and
  Awareness Online Course" / "Personal Development" / 4.5 / £89.00 / £14.00.
  Real titles will be much longer; see the no-fixed-heights rule in CLAUDE.md.

# 6. Still to extract

- ~~Colour tokens~~ — **done**, in `tokens.css`. Brand purple `#4a2692`, page
  background `#f1ecfa`, card surface `#f4f6fc`, plus the text and secondary
  purples. Read from p6 and p10 only, so **the amber/yellow CTA colours seen on
  Home and Hot Deals are still missing** — add them when those sections arrive.
- ~~Container width~~ — **done: 1240px.** See CLAUDE.md.
- **Font families.** Unresolved. The design uses two typefaces (one for UI and
  body, one for the logo wordmark) but the Canva API returns opaque refs
  (`YAFdJuFCnaw`, `YAFdJjTk5UU`) instead of names. Look them up in the Canva
  editor's font picker and replace the fallback stacks in `tokens.css`.
- **Radii.** Indicative only — Canva stores corner rounding in viewBox units on
  nine-sliced shapes, which doesn't convert cleanly to px. Confirm each against
  the section PDF.
- **Type scale.** First pass taken from p10 (true 1440 scale). Refine from the
  section PDFs as they arrive.
