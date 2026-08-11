# CSS Day 4 — Full Detailed Plan
## Flexbox

**Time needed:** 3 hours
**Already taught:** Selectors, colors, typography, box model, display, position, transitions
**Today's goal:** Students can build any layout using Flexbox — navbars, card rows, hero sections, and centered content.

---

# PART 1: Your Preparation (Night Before — 30 minutes)

**Do these yourself first:**

**1. Build a navbar with Flexbox.**
Logo on the left, links on the right. This is the most common client request. Know it without thinking.

**2. Build a 3-card row.**
Three equal-width cards side by side using flex: 1. Then make them wrap on smaller screens using flex-wrap: wrap.

**3. Practice centering.**
Take a div inside another div. Center the inner div both horizontally and vertically using justify-content: center and align-items: center. This takes 3 lines of CSS and replaces what used to take 20 lines.

**4. Open flexboxfroggy.com tonight.**
Play at least 15 levels yourself. You will send students there at the end of class. Know the game.

**Answers you must have ready:**

| Question | Answer |
|---|---|
| "What is the difference between justify-content and align-items?" | justify-content controls alignment along the MAIN axis (left-right when flex-direction is row). align-items controls alignment along the CROSS axis (up-down when flex-direction is row). Think of it as: justify = horizontal, align = vertical — when direction is row. |
| "What does flex: 1 mean?" | It is shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: 0. In simple terms: share the available space equally. If three items all have flex: 1, they each get one third of the space. |
| "Why are my flex items not wrapping?" | By default flex-wrap is nowrap — items squeeze into one line. Add flex-wrap: wrap to the container and items will move to the next line when they run out of space. |
| "What is the difference between align-items and align-self?" | align-items is written on the CONTAINER and controls all children. align-self is written on an individual CHILD and overrides align-items for just that one item. |
| "When do I use Flexbox vs Grid?" | Flexbox is for one direction — either a row OR a column. Grid is for two directions — rows AND columns at the same time. Navbar = Flexbox. Card row = Flexbox. Full page layout with header, sidebar, main, footer = Grid. |

---

# PART 2: The Class (3 hours)

## Step 1 — Homework Check (10 minutes)

Students swap seats. Check each other's Spice House updates:
- Does the navbar stick when scrolling?
- Do nav links have smooth hover transitions?
- Do the dish cards lift on hover?
- Do form inputs change border color on focus?
- One good thing + one fix out loud.

---

## Step 2 — The Problem Flexbox Solves (10 minutes)

No code yet. Ask this question:

"Before we start — how did you make the 3 cards sit side by side in yesterday's exercise?"

They will say display: inline-block. Good.

Now show the problem with inline-block:

```html
<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card">Card 3</div>
```

```css
.card {
  display: inline-block;
  width: 30%;
  background-color: lightblue;
  padding: 20px;
}
```

Show in browser. There is a small gap between cards even with no margin. The gap comes from the whitespace between the HTML tags. This is hard to remove cleanly.

Also: making all cards the same height when content differs is almost impossible with inline-block.

Say:
> "Flexbox was built to solve these problems. It gives you complete control over how items line up, how they space out, how they grow and shrink. It works the same in every browser. This is the most important layout tool you will use every single day."

---

## Step 3 — How Flexbox Works (10 minutes)

Draw this on paper before touching code:

```
CONTAINER (display: flex)
┌─────────────────────────────────────────┐
│  ┌────────┐  ┌────────┐  ┌────────┐    │
│  │ ITEM 1 │  │ ITEM 2 │  │ ITEM 3 │    │
│  └────────┘  └────────┘  └────────┘    │
│                                         │
│  ◄──────── Main Axis (→) ──────────►   │
│                                         │
│  ▲ Cross Axis (↓) ▼                    │
└─────────────────────────────────────────┘
```

Explain:
- You add `display: flex` to the CONTAINER (the parent)
- The direct children automatically become FLEX ITEMS
- The MAIN AXIS goes left to right by default (this is what justify-content controls)
- The CROSS AXIS goes top to bottom (this is what align-items controls)

Say: "You only write Flexbox rules on the container. The children just react. This is the key idea."

---

## Step 4 — Container Properties (45 minutes)

New folder `day4`, files `index.html` and `style.css`.

Create this HTML — keep it simple, focus is on CSS:

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```

```css
* { box-sizing: border-box; }

.container {
  background-color: #f0f0f0;
  padding: 20px;
  border: 2px dashed gray;
}

.item {
  background-color: steelblue;
  color: white;
  padding: 20px 30px;
  font-size: 20px;
}
```

Show in browser — 5 items stacked vertically (block elements by default).

Now add one line to .container:

```css
.container {
  display: flex;
}
```

Show in browser — items instantly line up in a row. Say: "One line. That is what Flexbox gives you."

---

### 4a. flex-direction:

```css
.container { flex-direction: row; }          /* default — left to right */
.container { flex-direction: row-reverse; }  /* right to left */
.container { flex-direction: column; }       /* top to bottom */
.container { flex-direction: column-reverse; } /* bottom to top */
```

Show each one. Switch live between them.

Say: "Column is used when you want a vertical stack — like a sidebar menu or a mobile nav. Row is the default and the most common."

---

### 4b. justify-content (main axis alignment):

Keep flex-direction as row. Change justify-content and show each one:

```css
.container { justify-content: flex-start; }   /* left — default */
.container { justify-content: flex-end; }     /* right */
.container { justify-content: center; }       /* middle */
.container { justify-content: space-between; } /* first and last touch edges, space between */
.container { justify-content: space-around; } /* equal space around each item */
.container { justify-content: space-evenly; } /* equal space everywhere including edges */
```

Show each one in browser. Students type along and see the change.

The one they will use most: space-between. Ask: "Where have you seen space-between in real websites?" Answer: navbar — logo left, links right.

---

### 4c. align-items (cross axis alignment):

Make the container taller so the effect is visible:

```css
.container {
  display: flex;
  height: 300px;
  align-items: flex-start; /* top — default */
}
```

```css
.container { align-items: flex-start; }  /* top */
.container { align-items: flex-end; }    /* bottom */
.container { align-items: center; }      /* middle — vertically centered */
.container { align-items: stretch; }     /* fill full height of container */
```

Show each one. The most important moment: align-items center. Items are now perfectly vertically centered.

Ask: "How many lines of CSS did we use to vertically center these items?" Answer: one line.

Say: "Before Flexbox, vertical centering was one of the hardest problems in CSS. Developers wrote hacks with absolute positioning and negative margins. Now it is one line."

---

### 4d. The perfect center (justify + align together):

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}
```

One item in the container:
```html
<div class="container">
  <div class="item">I am perfectly centered</div>
</div>
```

Show in browser. Perfectly centered both horizontally and vertically.

Say: "These three lines replace what used to take 15. Remember them."

---

### 4e. flex-wrap:

Add many items so they overflow:

```css
.container {
  display: flex;
  flex-wrap: nowrap; /* default — items squeeze into one line */
}
```

Show items getting squished.

```css
.container {
  display: flex;
  flex-wrap: wrap; /* items move to next line when no space */
}
```

Show items wrapping naturally.

Say: "wrap is what makes Flexbox responsive. When the screen gets smaller, items wrap to the next line instead of getting squished."

---

### 4f. gap:

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;        /* space between all items */
}
```

```css
gap: 20px;           /* same gap in both directions */
gap: 20px 40px;      /* row-gap column-gap */
```

Show in browser. Clean equal spacing with one property.

Say: "Before gap existed, developers used margin on each item and then removed margin on the last item with nth-child. Gap does it cleanly in one line. Always use gap instead of margin for spacing between flex items."

---

## BREAK (10 minutes)

---

## Step 5 — Item Properties (20 minutes)

These go on individual items, not the container.

### 5a. flex (grow, shrink, basis):

```html
<div class="container">
  <div class="item item-a">A</div>
  <div class="item item-b">B</div>
  <div class="item item-c">C</div>
</div>
```

```css
.container { display: flex; gap: 10px; }

/* Default — items only as wide as their content */
.item { background-color: steelblue; color: white; padding: 20px; }
```

Now add flex: 1 to all items:

```css
.item { flex: 1; }
```

Show: all three items share the space equally.

Make one item take double space:

```css
.item-b { flex: 2; } /* takes twice the space of others */
```

Show: B is twice as wide as A and C.

Say: "flex: 1 means: grow to fill available space, share equally. flex: 2 means: take double the share. This is how you make equal-width columns without calculating percentages."

---

### 5b. align-self:

```css
.container {
  display: flex;
  align-items: center; /* all items centered */
  height: 300px;
}

.item-special {
  align-self: flex-end; /* this one goes to the bottom */
}
```

Show in browser. All items centered except the special one at the bottom.

Say: "align-self overrides align-items for just one item. Useful when one item needs to behave differently from the rest."

---

## Step 6 — 3 Real Patterns (30 minutes)

This is the practical half of Flexbox. Students type along with you.

### Pattern 1 — Navbar (Logo left, links right):

```html
<nav class="navbar">
  <div class="logo">Spice House</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">Menu</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #1a1a2e;
}

.logo {
  color: white;
  font-size: 22px;
  font-weight: 700;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #e2b96f;
}
```

Show in browser. A complete professional navbar.

Say: "space-between pushes logo to the left and links to the right. align-items center keeps them vertically middle. The nav-links ul is itself a flex container — flex inside flex is very common."

---

### Pattern 2 — Card Row (equal width cards):

```html
<div class="card-row">
  <div class="card">
    <h3>Feature One</h3>
    <p>Short description of this feature for the client.</p>
  </div>
  <div class="card">
    <h3>Feature Two</h3>
    <p>Longer description here that takes more lines than the others do.</p>
  </div>
  <div class="card">
    <h3>Feature Three</h3>
    <p>Short again.</p>
  </div>
</div>
```

```css
.card-row {
  display: flex;
  gap: 24px;
  padding: 40px;
}

.card {
  flex: 1;
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 2px 4px 12px rgba(0,0,0,0.1);
}

.card h3 {
  margin-top: 0;
}
```

Show in browser. All three cards are equal width regardless of content length. The card with more text does not push other cards around.

Say: "flex: 1 on each card means they all share the available space equally. This is impossible to do cleanly with inline-block."

---

### Pattern 3 — Hero Section (text and image side by side):

```html
<section class="hero">
  <div class="hero-text">
    <h1>Authentic Flavours of Pakistan</h1>
    <p>Fresh ingredients, traditional recipes, unforgettable taste.</p>
    <a class="btn" href="#">Book a Table</a>
  </div>
  <div class="hero-image">
    <img src="images/dish1.jpg" alt="Featured dish">
  </div>
</section>
```

```css
.hero {
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 80px 40px;
  background-color: #fdf6ec;
}

.hero-text {
  flex: 1;
}

.hero-image {
  flex: 1;
}

.hero-image img {
  width: 100%;
  border-radius: 16px;
}

.hero-text h1 {
  font-size: 42px;
  margin-top: 0;
}

.btn {
  display: inline-block;
  background-color: #c0392b;
  color: white;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #96281b;
}
```

Show in browser. Text on left, image on right, both perfectly vertically aligned in the middle.

Say: "flex: 1 on both children means they share 50% each. Change hero-text to flex: 2 and the text takes two thirds. This is how you control column width ratios."

---

## Step 7 — Student Exercises (30 minutes)

### Exercise 1 — Rebuild without looking (15 minutes)

Close all your code examples. Students build the navbar pattern from memory only.

Requirements:
- Logo text on the left
- 4 navigation links on the right
- Vertically centered
- Hover color change on links with transition
- No peeking at your code

After 15 minutes, they compare their version to your original. Discuss differences.

---

### Exercise 2 — Flexbox Froggy (15 minutes)

Open flexboxfroggy.com

Students complete as many levels as possible in 15 minutes.

Target:
- Both students reach level 18 minimum
- Level 24 is the goal

While they play you circulate and watch. Do not help — the game teaches itself. If they get stuck on a level for more than 3 minutes, give one hint.

After the game, ask: "Which property was the hardest?" — discuss that one.

---

## Step 8 — Review (10 minutes)

Both students open their navbar exercise. Compare to each other:
- Does logo sit left and links sit right?
- Are items vertically centered?
- Do hover effects work?
- Is gap used instead of margin between links?
- One good thing + one fix out loud.

---

## Step 9 — Quiz and Homework (10 minutes)

### Quiz (students take turns):

1. Which element do you add display flex to — the parent or the child?
2. justify-content controls which axis?
3. align-items controls which axis?
4. Write CSS to center one item both horizontally and vertically in a 400px tall container.
5. What does flex: 1 do?
6. What is the difference between align-items and align-self?
7. How do you make flex items wrap to the next line?
8. Which property adds space between flex items cleanly? (gap)
9. How do you make logo go left and nav links go right in a navbar?
10. What are the two flex-direction values that switch the main axis from horizontal to vertical?

### Homework:

> Style the Spice House home page using Flexbox:
>
> 1. Rebuild the navbar: logo left, links right, vertically centered, hover transitions (replace whatever you had before)
> 2. Style the 3 featured dish cards into a proper card row using Flexbox and flex: 1
> 3. Build a footer with Flexbox: restaurant name on the left, 3 footer links in the middle, phone number on the right
> 4. BONUS: Add a hero section above the featured dishes — restaurant name and tagline on the left, a large food image on the right

### Closing words:
> "Flexbox is the most important thing you learned this week. Navbar, cards, centering, hero sections — these patterns appear in every single client project. Tomorrow: CSS Grid and responsive design. Then Saturday is the full Spice House styling project where you use everything."

---

# PART 3: What We Learned Today

## How Flexbox Works

Add `display: flex` to the CONTAINER. Children become flex items automatically.

```
CONTAINER (display: flex)
┌──────────────────────────────────────────────┐
│                                              │
│  [item 1]   [item 2]   [item 3]             │
│                                              │
│  ◄──── justify-content (main axis) ────►    │
│  ▲ align-items (cross axis) ▼               │
└──────────────────────────────────────────────┘
```

## Container Properties

### flex-direction

```css
flex-direction: row;            /* left to right — default */
flex-direction: row-reverse;    /* right to left */
flex-direction: column;         /* top to bottom */
flex-direction: column-reverse; /* bottom to top */
```

### justify-content (main axis)

```css
justify-content: flex-start;    /* left — default */
justify-content: flex-end;      /* right */
justify-content: center;        /* middle */
justify-content: space-between; /* edges touch, space between items */
justify-content: space-around;  /* equal space around each item */
justify-content: space-evenly;  /* equal space everywhere */
```

### align-items (cross axis)

```css
align-items: flex-start; /* top */
align-items: flex-end;   /* bottom */
align-items: center;     /* middle — vertical centering */
align-items: stretch;    /* fill full height — default */
```

### flex-wrap

```css
flex-wrap: nowrap; /* squeeze into one line — default */
flex-wrap: wrap;   /* items move to next line when no space */
```

### gap

```css
gap: 20px;       /* same gap all directions */
gap: 20px 40px;  /* row-gap  column-gap */
```

## Item Properties

### flex

```css
flex: 1;  /* grow to fill space, share equally */
flex: 2;  /* take double share compared to flex: 1 items */
```

### align-self

```css
align-self: flex-start; /* top — overrides container's align-items */
align-self: flex-end;   /* bottom */
align-self: center;     /* middle */
```

## Perfect Center (memorize this):

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 3 Essential Patterns

### Navbar (logo left, links right):
```css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### Equal Card Row:
```css
.card-row { display: flex; gap: 24px; }
.card { flex: 1; }
```

### Two Column Hero (50/50):
```css
.hero { display: flex; align-items: center; gap: 60px; }
.hero-text { flex: 1; }
.hero-image { flex: 1; }
```

## Flexbox vs Grid

| Use Flexbox when | Use Grid when |
|---|---|
| Items go in ONE direction (row or column) | Items go in TWO directions (rows AND columns) |
| Navbar, card row, button group | Full page layout, image gallery, dashboard |
| You want items to grow and shrink | You want precise column and row control |

---

# PART 4: After Class — Your Notes (5 minutes)

Write down:
1. Did the justify-content vs align-items difference click?
2. Did students understand flex: 1 — could they explain it in their own words?
3. How far did they get in Flexbox Froggy? (Anything below level 12 means they need more practice)
4. Did the navbar pattern come together without help in Exercise 1?
5. Anything you could not answer clearly? Revise tonight.
