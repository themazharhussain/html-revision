# CSS Day 1 — Full Detailed Plan
## Selectors, Colors, and Typography

**Time needed:** 3 hours
**Already taught by you:** What CSS is, why we use it, inline/internal/external CSS
**Today's goal:** Students can target any HTML element precisely and style its colors and text.

---

# PART 1: Your Preparation (Night Before — 30 minutes)

**Do these yourself first:**

**1. Create a practice HTML file.**
Write a simple blog article page with these elements: h1, h2, h3, multiple p tags, a ul list, some strong and em text, a div with a class, a span, and a few links. You will use this for live demos.

**2. Practice specificity.**
Try this yourself: write an element selector and a class selector targeting the same element. See which one wins. Then add an id selector. Then try !important. Feel the order before teaching it.

**3. Import a Google Font yourself.**
Go to fonts.google.com, pick any font, copy the import link, paste it in a CSS file, and use it. Do this once so you know every step without hesitation.

**Answers you must have ready:**

| Question | Answer |
|---|---|
| "Can I use the same class on many elements?" | Yes. That is the whole point of a class — one style rule, many elements. |
| "Can one element have two classes?" | Yes. Write both in the class attribute with a space: class="card featured" |
| "When do I use id vs class?" | Id = one unique element on the page (like the main logo). Class = any style you want to reuse. In CSS, use classes almost always. Id is mainly used for JavaScript and page jump links. |
| "What is the difference between hex and rgb?" | They are two ways to write the same color. Hex is shorter (#ff0000). RGB is more readable (rgb(255, 0, 0)). Both work. Use whichever feels clear. |
| "Why does my class selector not work?" | Either a spelling mistake, or they forgot the dot before the class name in CSS. Check both. |

---

# PART 2: The Class (3 hours)

## Step 1 — Homework Check (10 minutes)

Students swap seats. Check each other's homework (styled About Me page):
- Is the CSS in a separate external file?
- Is the link tag in the head section?
- One good thing + one fix, out loud.

---

## Step 2 — Setup: One File for the Whole Day (5 minutes)

Create this together:

```
css-day1/
  index.html    (your pre-made blog article page)
  style.css     (empty for now)
```

Check the link tag is already in the HTML head:
```html
<link rel="stylesheet" href="style.css">
```

Quick test: write one line in style.css, save, see it work:
```css
body {
  background-color: lightblue;
}
```

Remove it after the test. Now they know the connection works.

---

## Step 3 — Selectors (35 minutes)

You type in style.css, students watch. After each selector type, show the result in the browser.

### 3a. Element Selector (5 minutes)

Targets every element of that type on the page.

```css
h1 {
  color: darkblue;
}

p {
  color: gray;
}
```

Say: "This colors EVERY h1 and EVERY p on the page. No exceptions."

---

### 3b. Class Selector (10 minutes)

Targets only elements that have that class name.

First add classes to the HTML:
```html
<p class="intro">This is the intro paragraph.</p>
<p class="intro">This is also an intro paragraph.</p>
<p>This is a normal paragraph.</p>
```

Then in CSS:
```css
.intro {
  color: darkgreen;
  font-size: 18px;
}
```

Show: only the two paragraphs with class="intro" change. The third one stays unchanged.

Now show one element with TWO classes:
```html
<p class="intro highlight">This has two classes.</p>
```

```css
.highlight {
  background-color: yellow;
}
```

Say: "Two classes, two rules, both apply. Classes are reusable and stackable — this is why we use them most."

---

### 3c. ID Selector (5 minutes)

```html
<h1 id="page-title">My Blog</h1>
```

```css
#page-title {
  color: crimson;
  text-align: center;
}
```

Say: "ID is for ONE unique element only. Never put the same id on two elements — it breaks JavaScript later. In CSS, use classes. Use id only when something is truly one-of-a-kind on the page."

---

### 3d. Grouping Selector (5 minutes)

Targets multiple elements with one rule. Use a comma.

```css
h1, h2, h3 {
  font-family: Georgia, serif;
  color: #333333;
}
```

Say: "Instead of writing the same rule 3 times, group them with commas. Saves time, easier to update."

---

### 3e. Descendant Selector (10 minutes)

Targets an element only when it is INSIDE another element.

```html
<div class="article-body">
  <p>This paragraph is inside the div.</p>
</div>
<p>This paragraph is outside the div.</p>
```

```css
.article-body p {
  color: navy;
  line-height: 1.8;
}
```

Show: only the paragraph INSIDE the div changes. The outside paragraph stays unchanged.

A real example they will use every week:
```css
nav a {
  color: white;
  text-decoration: none;
}
```

Say: "This targets only links inside the nav. Without this, styling all links with just 'a' would change every link on the page — including ones in paragraphs. Descendant selector = precision."

---

### 3f. Specificity — Which Rule Wins (10 minutes)

This confuses everyone. Keep it very simple.

Write this on paper as a points table:

| Selector | Points |
|---|---|
| Element (p, h1, div) | 1 point |
| Class (.intro, .card) | 10 points |
| ID (#title, #logo) | 100 points |

Higher points = wins.

Demo: write conflicting rules and let them predict the winner before saving:

```css
p {
  color: gray;       /* 1 point */
}

.intro {
  color: green;      /* 10 points — this wins */
}
```

Then add an id:
```css
#special {
  color: red;        /* 100 points — this wins */
}
```

The golden rule to say out loud:
> "When two rules fight, highest points wins. When points are equal, the rule written LAST in the file wins. That is why the order of your CSS matters."

**About !important:**
```css
p {
  color: gray !important;   /* beats everything */
}
```

Say: "!important overrides all points. But never use it as a normal tool — only use it as a last resort when fixing someone else's broken CSS. Using it everywhere means your CSS is badly organized."

---

## BREAK (10 minutes)

---

## Step 4 — Colors (20 minutes)

Students type along with you now (not just watching).

### 4a. Four ways to write colors:

```css
/* Named colors — easy to remember, limited */
h1 { color: tomato; }

/* Hex — most common in real work */
h2 { color: #e74c3c; }

/* RGB — red, green, blue, each 0 to 255 */
h3 { color: rgb(231, 76, 60); }

/* RGBA — same as RGB but with opacity (0 = invisible, 1 = solid) */
p { color: rgba(231, 76, 60, 0.5); }
```

Show all four in browser. They look the same (or similar). Say: "These are just different ways to write a color. Hex is the most common in professional work."

### 4b. Background color:

```css
body {
  background-color: #f5f5f5;
}

.card {
  background-color: white;
}
```

### 4c. Picking colors (2 minutes):

Show these two free tools:
- coolors.co — generates color palettes
- Chrome DevTools color picker — click any color box in DevTools to pick a new color

Say: "When a client says 'I want a blue website' — open coolors, pick 3 shades of blue, copy the hex codes. You have a color theme in 2 minutes."

### 4d. Opacity vs rgba:

```css
/* Opacity affects the whole element including its children */
.box {
  opacity: 0.5;
}

/* RGBA only affects the color, not the children */
.box {
  background-color: rgba(0, 0, 0, 0.5);
}
```

Say: "If you want a semi-transparent background but still want the text inside to be fully visible — use rgba, not opacity."

---

## Step 5 — Typography (30 minutes)

Students type along with you.

### 5a. Font family:

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}
```

Say: "The browser tries the first font. If not installed on the user's computer, it tries the second. The last one (sans-serif) is a category — the browser picks any available font in that category. This chain is called a font stack."

Common safe font stacks to know:
```css
/* Sans-serif (modern, clean) */
font-family: Arial, Helvetica, sans-serif;

/* Serif (formal, editorial) */
font-family: Georgia, 'Times New Roman', serif;

/* Monospace (code) */
font-family: 'Courier New', Courier, monospace;
```

---

### 5b. Font size:

```css
h1 { font-size: 48px; }
h2 { font-size: 32px; }
p  { font-size: 16px; }
```

Units to know:
- `px` — exact pixels. Simple to start with.
- `rem` — relative to the root font size (16px by default). 2rem = 32px. Better for responsive design.
- `em` — relative to the parent element's font size.

Say: "Start with px to learn. We will switch to rem in responsive week. For now px is fine."

---

### 5c. Font weight:

```css
h1 { font-weight: bold; }      /* same as 700 */
p  { font-weight: normal; }    /* same as 400 */
.thin { font-weight: 300; }
.black { font-weight: 900; }
```

Say: "Bold and normal are shortcuts. Numbers go from 100 (thinnest) to 900 (boldest). Not all fonts support all weights."

---

### 5d. Font style:

```css
.quote {
  font-style: italic;
}
```

---

### 5e. Text properties:

```css
h1 {
  text-align: center;        /* left, right, center, justify */
}

a {
  text-decoration: none;     /* removes the underline from links */
}

.label {
  text-transform: uppercase; /* lowercase, capitalize */
}

p {
  line-height: 1.6;          /* space between lines — no unit needed */
}

h2 {
  letter-spacing: 2px;       /* space between letters */
}
```

Most important ones to highlight:
- `text-decoration: none` — students use this every time they style a navbar
- `line-height: 1.6` — makes body text readable. Show the difference between line-height 1 and 1.6.

---

### 5f. Google Fonts (10 minutes):

**You do this together, step by step:**

1. Go to fonts.google.com
2. Search "Poppins" — click it
3. Select weights: 400, 600, 700
4. Click "Get embed code"
5. Copy the @import link

Paste it at the TOP of style.css (must be the very first line):
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
```

Save and refresh. The whole page changes font.

Say: "Google Fonts gives you hundreds of free fonts. Poppins is one of the most popular in modern web design. Clients will often ask for a 'modern clean font' — Poppins is your default answer."

---

## Step 6 — Student Exercises (45 minutes)

**Your rule: do not touch their keyboard. When they are stuck, ask "what selector do you need here?" not "write this."**

### Exercise 1 — Blog Article Page (20 minutes)

File: `blog.html` and `blog.css`

Students build and style a blog article page. Requirements on paper:

HTML must have:
- h1 (article title), h2 (two subheadings), multiple p tags
- A ul list, one blockquote, a link, a div with class="author-box"

CSS must use all of these:
- Element selector (style h1, p, ul)
- Class selector (.author-box has a background color)
- Grouping selector (h1, h2, h3 share a font)
- Descendant selector (links inside .author-box look different from other links)
- Google Font imported and used on body
- At least 3 different hex colors
- text-align, line-height, letter-spacing used at least once each

Check they do NOT use:
- Inline styles
- Internal styles
- All rules on element selectors only (they must use at least 2 classes)

---

### Exercise 2 — Color Card Collection (15 minutes)

File: `colors.html` and `colors.css`

Students create a page with 6 color boxes. Each box is a div with a class name. Each box has:
- A different background-color using one of these formats:
  - 2 boxes: hex color
  - 2 boxes: rgb color
  - 2 boxes: rgba color (one with 0.3 opacity, one with 0.8)
- The color code written as text inside the box
- Equal padding (20px) and margin between them

Goal: they physically feel the difference between hex, rgb, and rgba.

---

### Exercise 3 — Specificity Battle (10 minutes)

You write this HTML and they must predict the FINAL color of the paragraph before opening the browser:

```html
<p class="text highlight" id="main-para">What color am I?</p>
```

```css
p {
  color: gray;
}

.text {
  color: blue;
}

.highlight {
  color: green;
}

#main-para {
  color: red;
}
```

Answer: red (id = 100 points, beats everything).

Now remove the id rule. What color now?
Answer: green (same class points — last rule written wins).

Now swap the order of .text and .highlight in the CSS. Does it change?
Answer: yes — now blue shows because .text is now written last.

This exercise makes specificity real in 10 minutes.

---

## Step 7 — Review (10 minutes)

Seat swap. Each student reviews the other's blog page:
- Does the Google Font load?
- Can they spot the descendant selector in the CSS?
- Are there any inline or internal styles? (should be zero)
- One good thing + one fix

---

## Step 8 — Quiz and Homework (10 minutes)

### Quiz (students take turns):

1. What is the difference between a class and an id selector?
2. How do you target only links inside a nav? (nav a)
3. Which wins: a class selector or an element selector? Why?
4. Write rgba black with 50% transparency. (rgba(0,0,0,0.5))
5. What does text-decoration none do and when do you use it?
6. What is a font stack and why does it have more than one font?
7. Where must the Google Fonts import line go in your CSS file? (very first line)
8. Two classes clash on the same element. Same points. Which wins? (the one written last in CSS)

### Homework:

> Style your Day 1 HTML About Me page from Week 1.
> Rules:
> - Use only external CSS (no inline, no internal)
> - Import a Google Font (different from Poppins — pick your own)
> - Use at least one element selector, two class selectors, one grouping selector, one descendant selector
> - Use hex colors only — pick a 3-color theme
> - Style the text: font-size on headings and body, line-height on paragraphs, text-transform on your name heading

### Closing words:
> "Today you learned to aim CSS precisely — at any element, any class, any id, anything inside something else. You also controlled colors and text. Tomorrow: the Box Model — this is the concept that makes everything click. Every element on a web page is a box. Once you understand that, layout becomes logical."

---

# PART 3: What We Learned Today

## Selectors

| Selector | How to Write | What it Targets |
|---|---|---|
| Element | `p { }` | Every p tag on the page |
| Class | `.intro { }` | Every element with class="intro" |
| ID | `#title { }` | The one element with id="title" |
| Grouping | `h1, h2, h3 { }` | All three elements at once |
| Descendant | `nav a { }` | Only links that are inside a nav |

## Specificity — Which Rule Wins

| Selector Type | Points |
|---|---|
| Element selector | 1 point |
| Class selector | 10 points |
| ID selector | 100 points |

Higher points wins. Same points — the rule written last in the CSS file wins.
Never use !important unless fixing someone else's broken CSS.

## Colors

| Format | Example | Notes |
|---|---|---|
| Named | `color: tomato` | Easy but limited options |
| Hex | `color: #e74c3c` | Most common in real work |
| RGB | `color: rgb(231, 76, 60)` | More readable |
| RGBA | `color: rgba(231, 76, 60, 0.5)` | Same as RGB plus transparency |

- Use `opacity` to make the whole element transparent (including its children)
- Use `rgba` to make only the color transparent (children stay solid)

## Typography Properties

| Property | Example | What it does |
|---|---|---|
| font-family | `font-family: Arial, sans-serif` | Sets the font with a fallback chain |
| font-size | `font-size: 18px` | Sets the text size |
| font-weight | `font-weight: bold` or `700` | Sets how thick the text is |
| font-style | `font-style: italic` | Makes text italic |
| text-align | `text-align: center` | Aligns text left, right, center, justify |
| text-decoration | `text-decoration: none` | Removes underline from links |
| text-transform | `text-transform: uppercase` | Changes case of text |
| line-height | `line-height: 1.6` | Space between lines (no unit needed) |
| letter-spacing | `letter-spacing: 2px` | Space between letters |

## Google Fonts

Step 1 — Go to fonts.google.com and pick a font
Step 2 — Copy the import link
Step 3 — Paste it as the FIRST line in your CSS file
Step 4 — Use the font name in font-family

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
```

---

# PART 4: After Class — Your Notes (5 minutes)

Write down:
1. Did specificity make sense or did it confuse them?
2. Did both students successfully import Google Fonts on the first try?
3. Who needs more selector practice? (give them 10 extra minutes tomorrow morning)
4. Was the descendant selector clear? (it will be used every single day in CSS — must be solid)
5. Anything you could not answer clearly? Revise tonight.
