# CSS Day 3 — Full Detailed Plan
## Display, Position, Pseudo-classes, and Transitions

**Time needed:** 3 hours
**Already taught:** Selectors, colors, typography, box model
**Today's goal:** Students understand how elements sit on the page, how to layer them on top of each other, and how to add smooth hover effects.

---

# PART 1: Your Preparation (Night Before — 30 minutes)

**Do these yourself first:**

**1. Practice position absolute.**
Create a parent div with position relative. Put a child div inside it with position absolute. Move the child using top, right, bottom, left. Then remove position relative from the parent — watch the child jump to the page corner. This moment is the key demo of the day. Know it well.

**2. Try sticky yourself.**
Create a nav with position sticky and top 0. Scroll down and watch it stick. Then remove sticky — it scrolls away. Students love this one.

**3. Build a hover card transition yourself.**
Write a card with a background color change on hover. Add transition: all 0.3s ease. Compare with and without transition. Feel the difference.

**Answers you must have ready:**

| Question | Answer |
|---|---|
| "What is the difference between display none and visibility hidden?" | display none removes the element completely — the space it occupied is gone, other elements move in. visibility hidden makes it invisible but the space stays. It is like an invisible placeholder. |
| "Why did my absolute element jump to the corner of the page?" | Because position absolute looks for the nearest parent with a position other than static. If none is found, it goes all the way to the page body. Fix: add position relative to the parent. |
| "What is the difference between fixed and sticky?" | Fixed stays in the same place on the screen always — even when you scroll, it never moves. Sticky scrolls normally at first, then sticks when it reaches a set point (like top 0). Sticky is better for navbars. |
| "Why is z-index not working?" | z-index only works on elements that have a position set (relative, absolute, fixed, or sticky). It does nothing on static elements. |
| "Can I use transition on every property?" | Most CSS properties can be transitioned. The most common ones are: color, background-color, transform, opacity, border, box-shadow. Avoid transitioning width and height — they are slow on some devices. |

---

# PART 2: The Class (3 hours)

## Step 1 — Homework Check (10 minutes)

Students swap seats. Check each other's styled Registration Form:
- Is box-sizing border-box the first rule?
- Is the form centered with max-width and margin auto?
- Do fieldsets have border and border-radius?
- One good thing + one fix out loud.

---

## Step 2 — Display Property (25 minutes)

New folder `day3`, files `index.html` and `style.css`.

Start with this question: "Have you noticed that some elements sit on their own line and some sit next to each other? Why?"

Let them guess. Then explain display.

### 2a. Block elements:

```css
div {
  display: block;
}
```

Block elements:
- Take up the full width of their container
- Always start on a new line
- You can set width and height

Examples of block elements by default: div, p, h1-h6, ul, li, section, header, footer

Show in browser:
```html
<p>First paragraph</p>
<p>Second paragraph</p>
```
Each p sits on its own line even without any CSS.

---

### 2b. Inline elements:

```css
span {
  display: inline;
}
```

Inline elements:
- Only take up as much width as their content
- Sit next to each other on the same line
- You CANNOT set width and height on them

Examples of inline elements by default: span, a, strong, em, img (technically inline-block)

Show in browser:
```html
<span>First</span>
<span>Second</span>
<span>Third</span>
```
All three sit on the same line.

Try setting width on a span — show it does nothing.

---

### 2c. Inline-block:

```css
.box {
  display: inline-block;
  width: 150px;
  height: 100px;
  background-color: lightblue;
  margin: 10px;
}
```

Inline-block gives the best of both:
- Sits next to other elements (like inline)
- You CAN set width and height (like block)

```html
<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div class="box">Box 3</div>
```

Show in browser: three boxes sitting side by side, all with equal sizes.

Say: "Before Flexbox existed, inline-block was how developers made navigation bars and card grids. You will still see it in old code. Flexbox (tomorrow) is the modern way."

---

### 2d. Display none vs visibility hidden:

```css
.hidden-none {
  display: none;
}

.hidden-invisible {
  visibility: hidden;
}
```

```html
<p>Element One</p>
<p class="hidden-none">Element Two (display none)</p>
<p>Element Three</p>

<p>Element One</p>
<p class="hidden-invisible">Element Two (visibility hidden)</p>
<p>Element Three</p>
```

Show both in browser side by side.

- display none: Element Three moves up. The space is gone.
- visibility hidden: Element Three stays in place. The space remains.

Say: "Display none is used for things you want to completely remove — like a mobile menu that is closed. Visibility hidden is rare — mainly used when you want to hide something but keep its space."

---

## Step 3 — Position Property (40 minutes)

This is the most important topic of today. Go slowly.

### 3a. Static (default — teach only to explain what it means):

```css
.box {
  position: static; /* this is the default, you rarely write it */
}
```

Say: "Every element is static by default. Static means the element sits where it naturally falls in the page. You almost never write this — you just need to know it is the default."

---

### 3b. Relative:

```css
.box {
  position: relative;
  top: 20px;
  left: 30px;
  background-color: lightcoral;
  padding: 20px;
}
```

```html
<div class="box">I am moved</div>
<p>I am a normal paragraph below</p>
```

Show in browser. The box moves down 20px and right 30px FROM WHERE IT WOULD NORMALLY BE.

Important: the space where the box originally was is still reserved. The paragraph does not move up.

Say: "Relative moves the element from its natural position. But the original space is kept. The most common use of relative is NOT to move the element — it is to create a reference point for absolute children. You will see this in the next step."

---

### 3c. Absolute (the most important position to learn):

```html
<div class="parent">
  Parent box
  <div class="child">I am absolute</div>
</div>
```

```css
.parent {
  width: 400px;
  height: 200px;
  background-color: lightblue;
  padding: 20px;
}

.child {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: coral;
  padding: 10px;
}
```

Show in browser. The child jumps to the top-right corner of the PAGE — not the parent.

Now add position relative to the parent:

```css
.parent {
  position: relative; /* add this */
  width: 400px;
  height: 200px;
  background-color: lightblue;
  padding: 20px;
}
```

Show in browser again. Now the child sits in the top-right corner of the PARENT.

Say this clearly:
> "Position absolute removes the element from the normal page flow. It positions itself relative to the nearest parent that has a position set. If no parent has a position — it goes to the page corner. Rule to remember: absolute child always needs a relative parent."

Real-world uses — show each one:
- Notification badge on a bell icon (red circle top-right corner of icon)
- Close button on a card (X in the corner)
- Label on a product image (SALE badge)

---

### 3d. Fixed:

```css
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: darkblue;
  color: white;
  padding: 15px;
  z-index: 100;
}
```

Add lots of dummy text below so the page scrolls. Show in browser and scroll down.

The bar stays at the top — never moves.

Say: "Fixed positions relative to the browser window, not the page. It ignores scrolling. Good for: cookie banners, floating chat buttons, top announcement bars. NOT ideal for main navigation — use sticky instead."

---

### 3e. Sticky:

```css
nav {
  position: sticky;
  top: 0;
  background-color: white;
  padding: 15px;
  border-bottom: 1px solid #eee;
}
```

Create some content above the nav, some below. Show in browser and scroll.

The nav scrolls normally until it reaches the top — then it sticks.

Say: "Sticky is the modern way to make a navigation bar that sticks when you scroll. It is better than fixed because it stays in the document flow — it does not cover content unexpectedly. You will use this in the Spice House project."

---

### 3f. Z-index:

```html
<div class="box-one">Box One</div>
<div class="box-two">Box Two (overlapping)</div>
```

```css
.box-one {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: lightblue;
}

.box-two {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: coral;
  top: -100px;
  left: 50px;
}
```

Box two overlaps box one. Box two is on top because it comes later in the HTML.

Now control which is on top with z-index:

```css
.box-one {
  z-index: 10; /* now box one is on top */
}
```

Say: "Z-index controls the stacking order. Higher number = on top. Z-index only works on positioned elements — relative, absolute, fixed, or sticky. It does nothing on static elements. This is the most common z-index mistake."

---

## BREAK (10 minutes)

---

## Step 4 — Pseudo-classes (15 minutes)

Pseudo-classes target an element in a specific STATE or POSITION.

### 4a. Interaction states:

```css
/* When mouse hovers over the link */
a:hover {
  color: red;
}

/* When the input is clicked / being typed in */
input:focus {
  border-color: blue;
  outline: none;
}

/* While the button is being clicked */
button:active {
  background-color: darkblue;
}
```

Show each one live. Focus is especially useful — show how it makes form fields feel responsive.

### 4b. Position-based:

```css
/* First li in any list */
li:first-child {
  font-weight: bold;
}

/* Last li in any list */
li:last-child {
  border-bottom: none;
}

/* Every second li */
li:nth-child(2n) {
  background-color: #f5f5f5;
}

/* Every third element */
li:nth-child(3n) {
  color: red;
}
```

Show a list in the browser. The alternating background color (zebra stripes on a table) is very common in real work.

Say: "nth-child(2n) means every 2nd element. nth-child(3n) means every 3rd. You will use zebra striping on data tables in almost every client project."

---

## Step 5 — Transitions (20 minutes)

### 5a. The problem without transition:

```css
.button {
  background-color: blue;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
}

.button:hover {
  background-color: darkblue;
}
```

Show in browser. The color change is instant — it snaps.

### 5b. Add transition:

```css
.button {
  background-color: blue;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: darkblue;
}
```

Show in browser. The color change is smooth.

### 5c. Transition syntax:

```css
transition: property duration timing-function;

/* Single property */
transition: background-color 0.3s ease;

/* Multiple properties */
transition: background-color 0.3s ease, transform 0.2s ease;

/* All properties (use carefully — can be slow) */
transition: all 0.3s ease;
```

Timing functions to know:
- `ease` — starts fast, slows down (most natural, use this by default)
- `linear` — same speed throughout
- `ease-in` — starts slow, ends fast
- `ease-out` — starts fast, ends slow

### 5d. Common transition effects to show:

```css
/* Lift effect on hover */
.card {
  box-shadow: 2px 4px 8px rgba(0,0,0,0.1);
  transform: translateY(0);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.card:hover {
  box-shadow: 4px 8px 20px rgba(0,0,0,0.2);
  transform: translateY(-4px);
}
```

```css
/* Grow effect on hover */
.logo {
  transition: transform 0.2s ease;
}

.logo:hover {
  transform: scale(1.1);
}
```

Show both in browser. The lift effect on cards is used in almost every modern website.

Say: "transform does not affect the layout around it — it only changes the visual appearance. That is why it is safe and smooth to animate."

---

## Step 6 — Student Exercises (40 minutes)

### Exercise 1 — Notification Badge (10 minutes)

Students build a bell icon with a red notification badge in the top-right corner.

```html
<div class="icon-wrapper">
  <span class="icon">🔔</span>
  <span class="badge">3</span>
</div>
```

Requirements:
- .icon-wrapper: position relative, display inline-block
- .badge: position absolute, top -8px, right -8px, background-color red, color white, border-radius 50%, width 20px, height 20px, small font-size, text centered

This is the classic absolute + relative parent pattern.

---

### Exercise 2 — Sticky Navbar (15 minutes)

Students build a page with:
- A nav (position sticky, top 0, white background, shadow)
- Enough content below to scroll (use lorem ipsum text — make up dummy text)
- Nav links with hover color change and transition
- Active state on links (darker color while clicking)

Requirements:
- Nav links must have transition on color change
- Nav must have a subtle box-shadow so it looks separated from content when sticky
- Links must have text-decoration none and hover color

---

### Exercise 3 — Hover Cards (15 minutes)

Students build 2 cards side by side (use display inline-block for now, Flexbox tomorrow):

Each card must have:
- Padding, border-radius, box-shadow
- A heading, a short paragraph, a button
- Hover effect: card lifts up using transform translateY(-4px) and stronger box-shadow
- Button hover: background color changes with transition

---

## Step 7 — Review (10 minutes)

Seat swap. Check each other's sticky navbar:
- Does it scroll normally then stick at top?
- Do hover transitions feel smooth or instant?
- Is the nav z-index high enough to sit above content while sticky?
- One good thing + one fix out loud.

---

## Step 8 — Quiz and Homework (10 minutes)

### Quiz (students take turns):

1. Name all 5 position values. (static, relative, absolute, fixed, sticky)
2. What must you add to a parent element when the child is position absolute?
3. display none vs visibility hidden — what is the real difference?
4. Why does z-index not work sometimes? (element has no position set)
5. What does :focus do and when is it useful?
6. Write a transition for background-color that takes 0.3 seconds.
7. What is the difference between fixed and sticky?
8. nth-child(2n) targets which elements?

### Homework:

> Add these to the Spice House website from Week 1:
>
> 1. Make the navbar sticky (sticks to top when scrolling)
> 2. Add hover transitions to all nav links (color change, 0.3s)
> 3. Add a hover lift effect to the 3 featured dish cards on the home page (translateY and stronger shadow)
> 4. Style all form inputs on the contact page to have a border color change on focus (transition on border-color)
> 5. On the menu tables — add zebra striping to the rows using nth-child

### Closing words:
> "Today elements started moving and reacting. Tomorrow is Flexbox — the biggest day of the CSS week. Flexbox will change how you think about layouts forever. Every navbar, every card row, every centered element — Flexbox. Come ready."

---

# PART 3: What We Learned Today

## Display Property

| Value | Behaviour |
|---|---|
| block | Full width, starts on new line, width and height work |
| inline | Content width only, sits next to others, width and height do NOT work |
| inline-block | Sits next to others AND width and height work |
| none | Element is completely removed — space is gone |

```css
/* Common uses */
div  { display: block; }         /* default */
span { display: inline; }        /* default */
nav a { display: inline-block; } /* links with padding in a navbar */
.menu { display: none; }         /* hide the mobile menu */
```

**display none vs visibility hidden**
- `display: none` — element gone, space gone, others move in
- `visibility: hidden` — element invisible, space stays, others do not move

## Position Property

| Value | What it does |
|---|---|
| static | Default. Sits in normal page flow. top/left/right/bottom do nothing. |
| relative | Moves from its natural position. Original space is kept. |
| absolute | Removed from page flow. Positions to nearest positioned parent. |
| fixed | Positions to the browser window. Never moves when scrolling. |
| sticky | Scrolls normally then sticks at a set point. |

```css
/* The most important pattern — absolute inside relative */
.parent {
  position: relative; /* reference point */
}
.child {
  position: absolute;
  top: 10px;
  right: 10px;   /* 10px from parent's top-right corner */
}
```

**Z-index rule:** higher number = on top. Only works on positioned elements (not static).

## Pseudo-classes

```css
a:hover   { }          /* mouse is over the element */
input:focus { }        /* element is selected or being typed in */
button:active { }      /* element is being clicked right now */

li:first-child { }     /* first li in its parent */
li:last-child { }      /* last li in its parent */
li:nth-child(2n) { }   /* every 2nd li — zebra stripes */
li:nth-child(3) { }    /* exactly the 3rd li */
```

## Transitions

```css
/* Pattern */
transition: property duration timing;

/* Examples */
transition: background-color 0.3s ease;
transition: all 0.3s ease;
transition: transform 0.2s ease, box-shadow 0.2s ease;
```

**Timing functions:**
- `ease` — natural, most common, use this by default
- `linear` — same speed throughout
- `ease-in` — starts slow
- `ease-out` — ends slow

**Common hover effects:**

```css
/* Color change */
.button:hover { background-color: darkblue; }

/* Lift up */
.card:hover {
  transform: translateY(-4px);
  box-shadow: 4px 8px 20px rgba(0,0,0,0.2);
}

/* Grow */
.logo:hover { transform: scale(1.1); }
```

Always put transition on the NORMAL state, not the hover state.

---

# PART 4: After Class — Your Notes (5 minutes)

Write down:
1. Did the absolute + relative demo make sense? (If not — revisit tomorrow morning with a fresh example)
2. Was sticky vs fixed clear?
3. Did transitions feel natural to them or were they confused about where to put it?
4. Are both students using DevTools confidently to inspect position and z-index?
5. Anything you could not answer clearly? Revise tonight.
