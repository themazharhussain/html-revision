# CSS Day 2 — Full Detailed Plan
## The Box Model

**Time needed:** 3 hours
**Already taught:** What CSS is, inline/internal/external CSS, selectors, colors, typography
**Today's goal:** Students understand that every HTML element is a box and can control its size, spacing, and borders precisely.

---

# PART 1: Your Preparation (Night Before — 30 minutes)

**Do these yourself first:**

**1. Open Chrome DevTools and inspect any element.**
Click the box model diagram in the bottom right of the Styles panel. Hover over each layer (margin, border, padding, content) and watch the page highlight that layer. You will use this live in class. Know where to find it before teaching it.

**2. Try margin collapse yourself.**
Create two div elements, give each a margin-bottom and margin-top, and see what happens. The gap between them will not be what you expect. Feel the confusion before your students do.

**3. Practice the box-sizing rule.**
Create a box with width 200px, then add padding 20px. See how it grows wider than 200px. Then add box-sizing: border-box and see it stay at 200px. This is the most important demo of the day.

**Answers you must have ready:**

| Question | Answer |
|---|---|
| "Why does my box become bigger when I add padding?" | Because by default CSS adds padding ON TOP of the width. A 200px box with 20px padding becomes 240px wide. box-sizing: border-box fixes this — padding goes INSIDE the width instead. |
| "What is the difference between margin and padding?" | Padding is space INSIDE the element between the content and the border. Margin is space OUTSIDE the element pushing other elements away. Think of it like a picture frame — padding is the gap between the photo and the frame, margin is the gap between the frame and the wall. |
| "Why is my top margin not working between two elements?" | Margin collapse. When two vertical margins meet, they merge into one. The bigger margin wins. This only happens with top and bottom margins, never left and right. |
| "How do I center a box on the page?" | Give it a width and set margin to auto on left and right: margin: 0 auto. This only works on block elements with a fixed width. |
| "What does overflow hidden do?" | When content is bigger than its box, overflow hidden cuts off the extra content instead of letting it spill out. |

---

# PART 2: The Class (3 hours)

## Step 1 — Homework Check (10 minutes)

Students swap seats. Check each other's styled About Me page:
- Is CSS in a separate external file only?
- Can they point to their descendant selector?
- Is a Google Font loading?
- One good thing + one fix out loud.

---

## Step 2 — What is the Box Model (10 minutes)

No code yet. Draw this on paper first.

```
+-----------------------------------------------+
|                   MARGIN                       |
|   +---------------------------------------+   |
|   |              BORDER                   |   |
|   |   +-------------------------------+   |   |
|   |   |           PADDING             |   |   |
|   |   |   +-----------------------+   |   |   |
|   |   |   |       CONTENT         |   |   |   |
|   |   |   |   (text, image etc)   |   |   |   |
|   |   |   +-----------------------+   |   |   |
|   |   |                               |   |   |
|   |   +-------------------------------+   |   |
|   |                                       |   |
|   +---------------------------------------+   |
|                                               |
+-----------------------------------------------+
```

Say this:
> "Every single HTML element — every heading, paragraph, div, button, image — is a rectangular box. Every box has 4 layers. Content is the actual text or image. Padding is the breathing space around the content inside the box. Border is the line around the box. Margin is the empty space outside the box that pushes other elements away."

Then say:
> "Once you see this, you will see it everywhere. Every layout problem you face in CSS is a box model problem."

---

## Step 3 — Box Sizing (15 minutes)

This must come BEFORE teaching padding and width. If students learn padding first, the growing-box problem will confuse them badly.

Create `day2/index.html` and `day2/style.css` together.

### 3a. The problem — type this:

```css
.box {
  width: 200px;
  background-color: lightblue;
}
```

```html
<div class="box">I am 200px wide</div>
```

Show in browser. Looks 200px wide. Good.

Now add padding:
```css
.box {
  width: 200px;
  padding: 20px;
  background-color: lightblue;
}
```

Show in browser. Open DevTools, show the box is now 240px wide (200 + 20 left + 20 right).

Say: "The box grew. This is the DEFAULT behavior. Padding is added ON TOP of the width. This breaks layouts constantly."

### 3b. The fix — box-sizing: border-box:

```css
* {
  box-sizing: border-box;
}

.box {
  width: 200px;
  padding: 20px;
  background-color: lightblue;
}
```

Show in browser. Box is now 200px wide. Padding is inside, not added on top.

Say: "The star selector targets every element on the page. This one rule fixes the growing-box problem everywhere. Every professional CSS file starts with this rule. Write it first in every project you ever build."

Write this on the board:
> **Rule: First line of every CSS file = * { box-sizing: border-box; }**

---

## Step 4 — Padding (15 minutes)

```css
/* All four sides the same */
.box { padding: 20px; }

/* Top/bottom 20px, left/right 40px */
.box { padding: 20px 40px; }

/* Top 10px, right 20px, bottom 30px, left 40px */
/* Remember: clockwise from top */
.box { padding: 10px 20px 30px 40px; }

/* Individual sides */
.box {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}
```

The clockwise trick — say it once and draw it:
> "Top, Right, Bottom, Left. Clockwise starting from the top. TRouBLe — T R B L — is the shorthand memory trick."

Show in DevTools: hover over the padding layer, see it highlight green on the page.

---

## Step 5 — Margin (20 minutes)

### 5a. Basic margin — same shorthand as padding:

```css
/* All sides */
.box { margin: 20px; }

/* Top/bottom, left/right */
.box { margin: 20px 40px; }

/* Individual sides */
.box { margin-top: 20px; }
```

### 5b. Centering a box with margin auto:

```css
.container {
  width: 800px;
  margin: 0 auto;
  background-color: white;
}
```

Say: "margin: 0 auto means top-bottom margin is 0, left-right margin is automatic. The browser splits the remaining space equally on both sides. This is how you center a page layout. You will write this in almost every project."

Show it in browser. Resize the window — it stays centered.

### 5c. Margin collapse — the confusing one:

Create two boxes:
```html
<div class="box-one">Box One</div>
<div class="box-two">Box Two</div>
```

```css
.box-one {
  margin-bottom: 40px;
  background-color: lightblue;
  padding: 20px;
}

.box-two {
  margin-top: 30px;
  background-color: lightcoral;
  padding: 20px;
}
```

Ask: "How much space between the two boxes?" Students say 70px (40 + 30).

Show in browser and DevTools. Space is only 40px.

Say: "When two vertical margins meet, they collapse into one. The BIGGER margin wins and the smaller one disappears. This only happens top-to-bottom, never left-to-right. It is not a bug — it is how CSS was designed. Now you know, you will not be confused when it happens."

---

## BREAK (10 minutes)

---

## Step 6 — Border (15 minutes)

```css
/* Full shorthand: size, style, color */
.box {
  border: 2px solid black;
}

/* Individual sides */
.box {
  border-top: 3px solid navy;
  border-bottom: 1px dashed gray;
}

/* Border styles */
.box { border: 2px solid red; }    /* solid line */
.box { border: 2px dashed red; }   /* dashed line */
.box { border: 2px dotted red; }   /* dotted line */
.box { border: 2px double red; }   /* double line */
```

Show each border style in the browser quickly.

### 6a. Border radius — rounded corners:

```css
/* Same radius on all corners */
.box { border-radius: 10px; }

/* Full circle (use on square elements) */
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
```

Show a square box going from sharp corners to fully round as you increase border-radius from 0 to 50%.

### 6b. Box shadow:

```css
/* offset-x, offset-y, blur, color */
.card {
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
}

/* Multiple shadows */
.card {
  box-shadow: 2px 4px 8px rgba(0,0,0,0.2),
              0px 0px 4px rgba(0,0,0,0.1);
}
```

Say: "offset-x moves the shadow left or right. offset-y moves it up or down. Blur makes it soft. Color with rgba lets you control transparency. A soft shadow (low numbers, low opacity) looks professional. A harsh shadow (high numbers, full opacity) looks old-fashioned."

Show the difference: `0 0 0 black` (hard) vs `2px 4px 12px rgba(0,0,0,0.15)` (soft modern look).

---

## Step 7 — Width, Height, and Overflow (15 minutes)

### 7a. Width and height:

```css
.box {
  width: 300px;
  height: 200px;
}

/* Max-width — box shrinks on small screens but never exceeds this */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Min-width — box never shrinks below this */
.button {
  min-width: 150px;
}
```

Say: "Use max-width on your page containers — not a fixed width. Fixed width breaks on small screens. max-width allows the box to shrink when the screen is smaller. This is how every real website works."

### 7b. Overflow:

```css
.box {
  width: 200px;
  height: 100px;
  overflow: hidden;   /* cuts off extra content */
}

.box {
  overflow: scroll;   /* always shows scrollbar */
}

.box {
  overflow: auto;     /* shows scrollbar only when needed */
}
```

Create a small box with too much text. Show visible, hidden, scroll, auto — one by one.

Say: "overflow auto is the most useful. You will use it on mobile menus, data tables, and any box with unpredictable content."

---

## Step 8 — DevTools Box Model Inspector (5 minutes)

Open any styled page. Open DevTools (F12). Click on any element.

In the Styles panel, scroll to the bottom — show the box model diagram with real numbers. Hover over each colored section (orange=margin, green=padding, blue=content). The corresponding area highlights on the page.

Say: "This is your debugging tool for every spacing problem you ever have. When something looks wrong, inspect it here first. Do not guess — inspect."

---

## Step 9 — Student Exercises (45 minutes)

### Exercise 1 — Profile Card (20 minutes)

File: `card.html` and `card.css`

Students build a profile card. Requirements on paper:

HTML:
- A div with class="card" containing: an image (any placeholder image), a name (h2), a job title (p), a short bio (p), a button

CSS must include:
- `* { box-sizing: border-box; }` as the first rule
- Card: max-width 320px, centered with margin auto, white background, padding 30px
- border-radius on the card (at least 12px)
- box-shadow on the card (soft, professional)
- Image: width 100px, height 100px, border-radius 50% (circle), displayed as a block with margin auto to center it
- Button: padding 10px 24px, border-radius 6px, a background color, no border, color white

**When they finish:** ask them to change the box-shadow to be harsh (large numbers, full black opacity) and see the difference. Then put it back to soft.

---

### Exercise 2 — Spacing Puzzle (15 minutes)

You give them this broken CSS (write it on paper or type it for them):

```css
* {
  box-sizing: border-box;
}

.container {
  width: 600px;
  background-color: lightyellow;
  padding: 40px;
  border: 3px solid orange;
}

.title {
  margin: 30px;
  padding: 10px;
  background-color: orange;
}

.content {
  margin: 20px;
  padding: 15px;
  background-color: white;
  border: 1px solid gray;
}
```

Questions they must answer by looking at the CSS and DevTools — no guessing:

1. What is the total width of .container including border? (606px — 600 + 3 left + 3 right)
2. What is the gap between .title and .content? (They must explain margin collapse)
3. If you remove box-sizing: border-box, what happens to the container size?
4. How do you center .container on the page? (margin: 0 auto — but needs a width, which it has)

---

### Exercise 3 — Pricing Cards (10 minutes)

Quick exercise — 3 pricing cards side by side (do not worry about making them horizontal yet, that is Flexbox day — just style each card individually):

Card 1 (Basic): light background, gray border
Card 2 (Pro): colored background, colored border, slightly larger with more padding — the "featured" card
Card 3 (Enterprise): light background, gray border

Each card must have: padding, border-radius, box-shadow, and a button.

---

## Step 10 — Review (10 minutes)

Seat swap. Check each other's profile card:
- Does the card have box-sizing: border-box?
- Is the image a perfect circle?
- Is the card centered on the page?
- Is the shadow soft or harsh? (should be soft)
- One good thing + one fix.

---

## Step 11 — Quiz and Homework (10 minutes)

### Quiz (students take turns):

1. Name the 4 layers of the box model from inside to outside.
2. What does box-sizing: border-box do and why does every project need it?
3. Margin vs padding — what is the difference? (Use the picture frame example)
4. How do you center a box horizontally on the page?
5. Two elements: one has margin-bottom 50px, the other has margin-top 30px. What is the gap between them? (50px — margin collapse)
6. Write a border shorthand — 2px, solid, dark blue. (border: 2px solid darkblue)
7. How do you make a square image into a circle?
8. What does overflow: auto do?

### Homework:

> Style the Employee Registration Form from Week 1 Day 3.
> Rules:
> - First line: * { box-sizing: border-box; }
> - Center the form on the page with a max-width of 600px and margin auto
> - Add padding inside each fieldset
> - Add a border and border-radius to each fieldset
> - Add a soft box-shadow to the whole form
> - Style the submit button: padding, background color, border-radius, no default border
> - Add comfortable padding to all input fields (do not worry about making them full width yet — that is tomorrow)

### Closing words:
> "The box model is the foundation of every layout in CSS. Every time something looks wrong — spacing too tight, element too wide, boxes overlapping — it is a box model problem. Tomorrow: display and position. This is where boxes start moving around the page."

---

# PART 3: What We Learned Today

## The Box Model — 4 Layers

| Layer | What it is | Where it is |
|---|---|---|
| Content | The actual text or image | Innermost |
| Padding | Space between content and border | Inside the box |
| Border | The line around the box | Around the padding |
| Margin | Space outside the box | Outside, pushes other elements |

## Box Sizing

```css
/* Write this first in every CSS file — always */
* {
  box-sizing: border-box;
}
```

Without it: padding is added ON TOP of the width (box grows bigger)
With it: padding goes INSIDE the width (box stays the same size)

## Padding Shorthand

```css
padding: 20px;                /* all 4 sides */
padding: 20px 40px;           /* top-bottom  left-right */
padding: 10px 20px 30px 40px; /* top right bottom left (clockwise) */
```

## Margin Shorthand

```css
margin: 20px;          /* all 4 sides */
margin: 0 auto;        /* center a box horizontally */
margin: 20px 40px;     /* top-bottom  left-right */
```

## Margin Collapse

When two vertical margins meet, they merge into one. The bigger margin wins.

```
Box 1: margin-bottom 40px
Box 2: margin-top 30px
Gap between them = 40px (not 70px)
```

This only happens vertically (top and bottom). Never happens horizontally.

## Border

```css
border: 2px solid black;        /* shorthand: size style color */
border-top: 3px dashed gray;    /* individual side */
border-radius: 12px;            /* rounded corners */
border-radius: 50%;             /* full circle */
```

## Box Shadow

```css
box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
/*          x    y  blur   color + opacity  */
```

Small numbers + low opacity = soft modern shadow
Large numbers + full opacity = harsh old-fashioned shadow

## Width and Height

```css
width: 300px;           /* fixed width */
max-width: 1200px;      /* never wider than this */
min-width: 150px;       /* never narrower than this */
height: 200px;          /* fixed height — use carefully */
```

Always use max-width on page containers, not fixed width.

## Overflow

| Value | What it does |
|---|---|
| visible | Content spills outside the box (default) |
| hidden | Extra content is cut off |
| scroll | Always shows scrollbar |
| auto | Shows scrollbar only when needed |

## DevTools Box Model

Open DevTools (F12) → click any element → scroll to the bottom of the Styles panel → see the box model diagram with real pixel values. Hover over each layer to highlight it on the page.

---

# PART 4: After Class — Your Notes (5 minutes)

Write down:
1. Did margin collapse confuse them? (Most students need to see it twice)
2. Did both students remember to write box-sizing: border-box first?
3. Is the DevTools box model inspector clear to them? (They will use it daily)
4. Was the centering with margin auto understood?
5. Anything you could not answer clearly? Revise tonight.
