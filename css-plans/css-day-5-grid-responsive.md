# CSS Day 5 — Full Detailed Plan
## CSS Grid and Responsive Design

**Time needed:** 3 hours
**Already taught:** Selectors, colors, typography, box model, display, position, transitions, Flexbox
**Today's goal:** Students can build grid layouts and make any website work on phones, tablets, and desktops.

---

# PART 1: Your Preparation (Night Before — 30 minutes)

**Do these yourself first:**

**1. Build a photo gallery with Grid.**
Use grid-template-columns: repeat(3, 1fr). Add a media query that changes it to 2 columns on tablet and 1 column on mobile. See it change as you resize the browser.

**2. Practice media queries.**
Write one media query for 768px. Change the font size, change a layout, change a color inside it. Make sure you feel where the breakpoint triggers.

**3. Open Chrome DevTools device toolbar.**
Press F12, then click the phone/tablet icon at the top. Switch between iPhone, iPad, and desktop. This is how you test responsive design. Know this tool before class.

**4. Practice the mobile-first approach.**
Write CSS for mobile first (no media query). Then add a media query for min-width: 768px for tablet. Then another for min-width: 1024px for desktop. Feel the difference between min-width and max-width approach.

**Answers you must have ready:**

| Question | Answer |
|---|---|
| "What is the fr unit?" | fr means fraction. 1fr means one fraction of the available space. If you have 3 columns all set to 1fr, each gets one third of the space. 2fr gets double the space of 1fr. It is like flex: 1 but for Grid. |
| "When do I use Grid and when Flexbox?" | Simple rule: one direction (row or column) = Flexbox. Two directions (rows AND columns at the same time) = Grid. Navbar = Flexbox. Photo gallery = Grid. |
| "What is the difference between min-width and max-width in media queries?" | max-width: 768px means the rule applies when the screen is 768px or SMALLER. min-width: 768px means the rule applies when the screen is 768px or BIGGER. Mobile-first uses min-width. Desktop-first uses max-width. |
| "Why does my image overflow its container on mobile?" | Images keep their natural size by default. Add max-width: 100% to every image and it will never be wider than its container. |
| "What is mobile-first?" | You write CSS for the smallest screen first (no media query needed). Then you add media queries to change the layout for bigger screens. It is better than desktop-first because most users are on phones. |

---

# PART 2: The Class (3 hours)

## Step 1 — Homework Check (10 minutes)

Students swap seats. Check each other's Spice House Flexbox homework:
- Does the navbar use Flexbox with logo left and links right?
- Are the 3 dish cards in a Flexbox row with equal width?
- Does the footer have 3 sections spaced with Flexbox?
- One good thing + one fix out loud.

---

## Step 2 — CSS Grid Introduction (10 minutes)

Start with a question:

"Yesterday we built a card row with Flexbox. What if I want a photo gallery — 3 columns, images wrap to the next row automatically, all equal size. Can Flexbox do this?"

Let them think. Answer: Flexbox can do it but it is not clean. You have to calculate sizes, manage wrapping, and fight with equal heights.

Draw this on paper:

```
GRID CONTAINER
┌──────────┬──────────┬──────────┐
│  ITEM 1  │  ITEM 2  │  ITEM 3  │ ROW 1
├──────────┼──────────┼──────────┤
│  ITEM 4  │  ITEM 5  │  ITEM 6  │ ROW 2
├──────────┼──────────┼──────────┤
│  ITEM 7  │  ITEM 8  │  ITEM 9  │ ROW 3
└──────────┴──────────┴──────────┘
   COL 1      COL 2      COL 3
```

Say:
> "Grid works in two directions at the same time — columns AND rows. You define the columns. Grid places items automatically into rows. This is what makes it perfect for galleries, dashboards, and full page layouts."

---

## Step 3 — Grid Basics (30 minutes)

New folder `day5`, files `index.html` and `style.css`.

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```

```css
* { box-sizing: border-box; }

.grid-item {
  background-color: steelblue;
  color: white;
  padding: 30px;
  font-size: 20px;
  text-align: center;
}
```

Show in browser — 6 items stacked as blocks. Now add one line:

```css
.grid-container {
  display: grid;
}
```

Nothing visible changes yet. Say: "Grid needs columns defined. Without columns it behaves like block."

---

### 3a. grid-template-columns:

```css
.grid-container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

Show in browser — 3 equal columns, items wrap to next row automatically.

Now use fr units:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Show — same result but columns fill the full width.

Now use repeat():

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Show — identical result. Say: "repeat(3, 1fr) is shorthand for 1fr 1fr 1fr. Use repeat when columns are equal. Saves typing and is easier to change."

Try different column ratios:

```css
grid-template-columns: 2fr 1fr 1fr;   /* first column twice as wide */
grid-template-columns: 300px 1fr;     /* fixed sidebar, flexible content */
```

Show each one. The 300px 1fr pattern is very common for sidebar layouts.

---

### 3b. gap:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

Show clean spacing between all items.

```css
gap: 20px;        /* same gap rows and columns */
gap: 30px 20px;   /* row-gap column-gap */
```

---

### 3c. grid-column span (items that take more than one column):

```css
.grid-item:first-child {
  grid-column: span 2; /* takes 2 column widths */
}

.wide-item {
  grid-column: span 3; /* takes full row */
}
```

```html
<div class="grid-container">
  <div class="grid-item wide">Full width banner</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
</div>
```

```css
.wide {
  grid-column: span 3;
  background-color: crimson;
}
```

Show in browser. The first item fills the entire row. Others sit below normally.

Say: "span tells an item to stretch across multiple columns. Used for banners, featured items, and headers inside a grid."

---

### 3d. Grid vs Flexbox — the decision:

Write this on paper for them to copy:

```
ONE DIRECTION ONLY          → USE FLEXBOX
  Navbar (row)
  Card row (row)
  Button group (row)
  Vertical menu (column)

TWO DIRECTIONS              → USE GRID
  Photo gallery (rows + columns)
  Dashboard (rows + columns)
  Full page layout
  Any pattern that repeats in both directions
```

Say: "When you are not sure — ask yourself: do I care about BOTH the row and the column at the same time? Yes = Grid. No = Flexbox."

---

## BREAK (10 minutes)

---

## Step 4 — Responsive Design (15 minutes)

No code yet. Talk first.

### 4a. What responsive means:

Open the Spice House website on Chrome. Then open DevTools (F12) and click the device toolbar icon (looks like a phone and tablet). Switch to iPhone view.

The website looks broken on mobile. Text is tiny. The card row overflows the screen.

Say:
> "60 to 70 percent of website visitors today are on phones. A website that only looks good on desktop is a website that fails most of its visitors. Responsive design means the same HTML file looks correct on any screen size. CSS handles all the size differences."

### 4b. The viewport meta tag (they already have it from Week 1):

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Say: "This line in the head section tells the phone to use its actual screen width — not zoom out to pretend it is a desktop. Without this line, responsive design does not work. They already wrote it in Week 1. Now they understand why."

### 4c. Responsive images — one rule, always write it:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Show a large image on mobile without this rule — it overflows. Add the rule — it fits perfectly.

Say: "This is a global rule. Write it in every project under box-sizing. max-width 100% means the image will never be wider than its container. height auto keeps the proportions correct."

---

## Step 5 — Media Queries (30 minutes)

### 5a. What a media query is:

```css
/* Normal CSS — applies always */
body {
  background-color: white;
}

/* Media query — applies ONLY when screen is 600px or smaller */
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

Show in browser. Resize the window slowly. At 600px the background changes.

Say: "A media query is a conditional CSS block. Think of it as: IF the screen is this size, THEN apply this CSS. Everything inside the curly braces of the media query overwrites the normal CSS."

### 5b. Desktop-first vs Mobile-first:

**Desktop-first (max-width) — write desktop CSS, undo for smaller screens:**

```css
/* Desktop (default) */
.card-row {
  display: flex;
  gap: 24px;
}

/* Tablet */
@media (max-width: 768px) {
  .card-row {
    flex-direction: column;
  }
}
```

**Mobile-first (min-width) — write mobile CSS, add for larger screens:**

```css
/* Mobile (default — no media query) */
.card-row {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Tablet and above */
@media (min-width: 768px) {
  .card-row {
    flex-direction: row;
  }
}
```

Show both approaches produce the same result.

Say: "Mobile-first is the modern professional standard because most users are on phones. You write the phone layout first, then add media queries to enhance it for bigger screens. We will use mobile-first from now on."

### 5c. Common breakpoints to know:

Write these on paper:

```css
/* Phone — up to 480px — no media query needed (mobile-first default) */

/* Large phone / small tablet */
@media (min-width: 480px) { }

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large desktop */
@media (min-width: 1280px) { }
```

Say: "These numbers are not strict rules. They are starting points. Real breakpoints depend on your content — add a breakpoint when your design starts to look broken as you resize."

### 5d. Live responsive example — card row:

```css
/* Mobile first — 1 column */
.card-row {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.card {
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 2px 4px 12px rgba(0,0,0,0.1);
}

/* Tablet — 2 columns */
@media (min-width: 768px) {
  .card-row {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .card {
    flex: 1 1 calc(50% - 10px);
  }
}

/* Desktop — 3 columns */
@media (min-width: 1024px) {
  .card {
    flex: 1;
  }
}
```

Show in browser. Resize the window from small to large and watch it change from 1 column to 2 to 3.

---

## Step 6 — Responsive Grid (15 minutes)

Grid becomes even more powerful with media queries.

### 6a. Responsive photo gallery:

```html
<div class="gallery">
  <img src="images/dish1.jpg" alt="Dish 1">
  <img src="images/dish2.jpg" alt="Dish 2">
  <img src="images/dish3.jpg" alt="Dish 3">
  <img src="images/dish4.jpg" alt="Dish 4">
  <img src="images/dish5.jpg" alt="Dish 5">
  <img src="images/dish6.jpg" alt="Dish 6">
</div>
```

```css
/* Mobile — 1 column */
.gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 20px;
}

.gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

/* Tablet — 2 columns */
@media (min-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop — 3 columns */
@media (min-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

Show in browser. Resize from mobile to desktop — gallery changes from 1 to 2 to 3 columns.

Explain object-fit: cover:

```css
.gallery img {
  height: 200px;
  object-fit: cover; /* fills the box, crops if needed, no stretching */
}
```

Say: "Without object-fit, images stretch and look distorted when forced into a fixed height. cover fills the box and crops the edges. Like setting a background image to cover. You will use this on every image gallery."

### 6b. auto-fill and auto-fit (bonus — only if time allows):

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}
```

Show in browser. Resize the window — columns appear and disappear automatically without any media queries.

Say: "minmax(250px, 1fr) means each column is minimum 250px and maximum 1fr. auto-fill creates as many columns as fit. This is one CSS line that replaces three media queries. You will use this for product grids on e-commerce sites."

---

## Step 7 — Making the Navbar Responsive (10 minutes)

Show the current Spice House navbar on mobile — links overflow.

```css
/* Mobile — links stack vertically */
.navbar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  list-style: none;
}

/* Desktop — logo left, links right in a row */
@media (min-width: 768px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
  }

  .nav-links {
    flex-direction: row;
    gap: 32px;
  }
}
```

Show in browser. On mobile: stacked. On desktop: side by side.

Say: "This is the responsive navbar pattern. We are not building a hamburger menu today — that needs JavaScript. But this stacked version is clean and works for now."

---

## Step 8 — Student Exercises (30 minutes)

### Exercise 1 — Responsive Photo Gallery (15 minutes)

File: `gallery.html` and `gallery.css`

Students build a photo gallery using Grid. Rules on paper:
- Mobile: 1 column
- Tablet (768px): 2 columns
- Desktop (1024px): 3 columns
- All images same height using object-fit: cover
- gap of 16px between images
- padding around the gallery

After they build it — check in DevTools device toolbar on iPhone view, iPad view, and desktop.

---

### Exercise 2 — Responsive Card Section (15 minutes)

Students take the 3-card Flexbox section from yesterday's homework and make it responsive:
- Mobile: 1 card per row (flex-direction column)
- Tablet: 2 cards per row (flex-wrap wrap, each card 50%)
- Desktop: 3 cards per row (each card flex: 1)

Must also be tested in DevTools device toolbar before showing you.

---

## Step 9 — Review (10 minutes)

Seat swap. Check each other's gallery:
- Does it actually change columns when you resize? (test in DevTools)
- Do images have equal heights with object-fit cover?
- Is mobile-first used (min-width, not max-width)?
- One good thing + one fix out loud.

---

## Step 10 — Quiz and Homework (10 minutes)

### Quiz (students take turns):

1. What does 1fr mean in Grid?
2. Write grid-template-columns for 3 equal columns using repeat.
3. How do you make one grid item span 2 columns?
4. Grid vs Flexbox — when do you use each?
5. What does max-width: 100% on images prevent?
6. What is mobile-first?
7. What is the difference between min-width and max-width in a media query?
8. Write a media query that applies when the screen is 768px or wider.
9. What does object-fit: cover do?
10. What does the viewport meta tag do?

### Homework:

> Make the full Spice House website responsive. Three files to update (index, menu, contact):
>
> 1. Navbar: stacks vertically on mobile, side by side on desktop (768px breakpoint)
> 2. Featured dish cards: 1 column on mobile, 3 columns on desktop
> 3. Menu tables: add overflow-x: auto to a wrapper div so the table scrolls on mobile instead of overflowing
> 4. Contact page booking form: full width on mobile (max-width 100%), centered with max-width 600px on desktop
> 5. Hero section (if built yesterday): stacks vertically on mobile, side by side on desktop
> 6. All images: max-width 100% and height auto
>
> Test everything in DevTools device toolbar on iPhone and iPad before tomorrow.

### Closing words:
> "Today you learned Grid and responsive design. Tomorrow is project day — you style the complete Spice House website from scratch using everything from this week. Come with your homework done. The project will go much faster if the responsive patterns are already in your head."

---

# PART 3: What We Learned Today

## CSS Grid

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  gap: 20px;
}
```

### grid-template-columns

```css
grid-template-columns: 200px 200px 200px; /* fixed widths */
grid-template-columns: 1fr 1fr 1fr;       /* equal fractions */
grid-template-columns: repeat(3, 1fr);    /* shorthand for above */
grid-template-columns: 2fr 1fr;           /* unequal — 2/3 and 1/3 */
grid-template-columns: 300px 1fr;         /* fixed sidebar + flexible content */
```

### Spanning columns

```css
.item { grid-column: span 2; } /* takes 2 column widths */
.item { grid-column: span 3; } /* takes full row (if 3 columns) */
```

### object-fit

```css
img {
  width: 100%;
  height: 200px;
  object-fit: cover; /* fills box, crops edges, no stretching */
}
```

### Auto responsive grid (no media queries needed)

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}
```

## Responsive Design

### Global rules — write in every project:

```css
* { box-sizing: border-box; }

img {
  max-width: 100%;
  height: auto;
}
```

### Media queries — mobile-first (use min-width):

```css
/* Mobile — no media query (write here first) */
.card-row { flex-direction: column; }

/* Tablet */
@media (min-width: 768px) {
  .card-row { flex-direction: row; }
}

/* Desktop */
@media (min-width: 1024px) {
  .card { flex: 1; }
}
```

### Common breakpoints:

| Breakpoint | Screen |
|---|---|
| No query (default) | Mobile (up to 480px) |
| min-width: 480px | Large phone |
| min-width: 768px | Tablet |
| min-width: 1024px | Desktop |
| min-width: 1280px | Large desktop |

### Responsive table on mobile:

```css
.table-wrapper {
  overflow-x: auto; /* table scrolls horizontally on small screens */
}
```

```html
<div class="table-wrapper">
  <table>...</table>
</div>
```

## Grid vs Flexbox

| Grid | Flexbox |
|---|---|
| Two directions (rows + columns) | One direction (row OR column) |
| Photo gallery | Navbar |
| Dashboard | Card row |
| Full page layout | Button group |
| Repeat pattern in both directions | Distribute items along one axis |

---

# PART 4: After Class — Your Notes (5 minutes)

Write down:
1. Did fr units make sense or did they still think in percentages?
2. Did mobile-first vs desktop-first click? (Check their homework — wrong approach = max-width instead of min-width)
3. Did both students test their work in DevTools device toolbar?
4. Was object-fit cover understood?
5. Are they ready for tomorrow's project? What gaps still exist?
