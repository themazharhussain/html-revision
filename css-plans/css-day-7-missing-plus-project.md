# CSS Day 7 — Full Detailed Plan
## Missing CSS Topics + Complete Website Project

**Time needed:** 4 hours (this day is longer — project day needs extra time)
**Already taught:** Everything from Day 1 to Day 6
**Today's goal:** Learn the missing CSS topics in the first hour, then spend the rest of the day building a complete deployable website that uses everything from Week 1 and Week 2.

---

# PART 1: Your Preparation (Night Before — 40 minutes)

**Do these yourself first:**

**1. Practice background-image.**
Set a div's background using a real image URL. Try background-size cover and contain. See the difference. Try background-position center and top. Try background-attachment fixed while scrolling — the parallax effect.

**2. Practice CSS filters.**
Add filter: grayscale(100%) to an image. Then change it to grayscale(0%) on hover with a transition. This is a very professional image effect.

**3. Practice CSS variables.**
Write 3 variables on :root (a primary color, secondary color, font size). Use them in 5 different places. Then change one variable — watch every place update instantly. This moment makes CSS variables feel powerful.

**4. Pick the project website topic.**
Day 7 builds a FRESH website — not Spice House. Students have been working on Spice House all week. Today they prove they can build from scratch alone.

Suggested project: a personal portfolio website for each student.
Reason: they will actually use it. It has natural sections (hero, about, skills, projects, contact) that use every CSS topic. It is their first real professional asset.

**Answers you must have ready:**

| Question | Answer |
|---|---|
| "What is the difference between background-image and img tag?" | img is content — part of the HTML, readable by screen readers and Google. background-image is decoration — set in CSS, not read by screen readers. Use img for photos that matter (product images, profile photos). Use background-image for decorative backgrounds (hero section background, section overlays). |
| "Why does my background image not show?" | Three common reasons: wrong file path, image file too small and being tiled, or background-size not set. Check path first, then add background-size: cover. |
| "What is the difference between background-size cover and contain?" | cover fills the entire container — crops the image if needed, never shows empty space. contain fits the whole image inside the container — may show empty space on the sides. Use cover for hero sections, contain for logos and icons. |
| "Why use CSS variables instead of just typing the color?" | If your brand color changes, you update one variable and every element updates automatically. Without variables you search and replace every single color value across every CSS file. On a 10-page website that saves hours. |
| "Can CSS variables be used inside media queries?" | Yes. This is one of their best uses — change the font-size variable at a breakpoint and all font sizes update at once. |

---

# PART 2: The Class (4 hours)

## Step 1 — Homework Check (10 minutes)

Students swap seats. Check animated Spice House homework:
- Does the hero section have staggered animations?
- Do cards animate on page load?
- Is fill-mode: forwards on every animation?
- One good thing + one fix out loud.

---

# MISSING CSS — PART A: Backgrounds (25 minutes)

## Step 2 — Background Properties (25 minutes)

New folder `day7/backgrounds`, files `index.html` and `style.css`.

```html
<div class="hero">
  <h1>Welcome</h1>
</div>
```

```css
* { box-sizing: border-box; }

.hero {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
```

### 2a. background-image:

```css
.hero {
  background-image: url('images/hero.jpg');
}
```

Show in browser. Image tiles by default (repeats). Looks broken.

Fix it step by step:

### 2b. background-size:

```css
/* cover — fills the container, crops if needed */
.hero { background-size: cover; }

/* contain — fits whole image, may leave empty space */
.hero { background-size: contain; }

/* exact size */
.hero { background-size: 100% 300px; }
```

Show cover first. Show contain. Then go back to cover.

Say: "cover is what you want for hero sections and full-page backgrounds. contain is for logos and icons where you need to see the whole image."

### 2c. background-position:

```css
.hero { background-position: center; }     /* center of image shows */
.hero { background-position: top; }        /* top of image shows */
.hero { background-position: bottom; }     /* bottom of image shows */
.hero { background-position: center top; } /* horizontal vertical */
```

Show each one. For portrait photos with a face — background-position: center top shows the face instead of cropping it.

### 2d. background-repeat:

```css
.hero { background-repeat: no-repeat; } /* show once only */
.hero { background-repeat: repeat; }    /* tile — default */
.hero { background-repeat: repeat-x; } /* tile horizontally only */
```

Say: "Always write background-repeat: no-repeat when using background-size cover. Otherwise the image tiles before cover takes effect."

### 2e. The complete background shorthand:

```css
.hero {
  background: url('images/hero.jpg') center/cover no-repeat;
}
```

Say: "This one line replaces four lines. Pattern: image URL, position/size, repeat. The slash separates position from size. This is how professionals write it."

### 2f. Background color + image together (overlay effect):

```css
/* Gradient overlay on top of an image */
.hero {
  background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('images/hero.jpg') center/cover no-repeat;
}
```

Show in browser. Dark overlay makes white text readable on any image.

Say: "This is one of the most used techniques in real web design. Every hero section with text on an image uses this. The gradient comes FIRST in the list — it sits on top of the image."

### 2g. background-attachment: fixed (parallax effect):

```css
.hero {
  background: url('images/hero.jpg') center/cover no-repeat;
  background-attachment: fixed;
}
```

Add lots of content above and below. Scroll slowly. The image stays fixed while the content scrolls over it.

Say: "This is called a parallax effect. It looks impressive with very little code. Use it on one section maximum — overusing it causes motion sickness for some users."

### 2h. linear-gradient (background without an image):

```css
/* Top to bottom */
.section {
  background: linear-gradient(to bottom, #1a1a2e, #16213e);
}

/* Left to right */
.section {
  background: linear-gradient(to right, #667eea, #764ba2);
}

/* Diagonal */
.section {
  background: linear-gradient(135deg, #f093fb, #f5576c);
}
```

Show each one. Gradients are used as hero backgrounds, button backgrounds, and section backgrounds.

---

# MISSING CSS — PART B: Filters (15 minutes)

## Step 3 — CSS Filters (15 minutes)

```html
<img class="photo" src="images/profile.jpg" alt="Profile">
```

### 3a. All filter values:

```css
.photo { filter: grayscale(100%); }    /* black and white */
.photo { filter: grayscale(50%); }     /* half grey */
.photo { filter: blur(4px); }          /* blurred */
.photo { filter: brightness(1.3); }    /* brighter */
.photo { filter: brightness(0.7); }    /* darker */
.photo { filter: contrast(1.5); }      /* more contrast */
.photo { filter: sepia(100%); }        /* old photo look */
.photo { filter: hue-rotate(90deg); }  /* shift colors */
.photo { filter: invert(100%); }       /* negative */
```

Show each one in browser quickly.

### 3b. Combining filters:

```css
.photo {
  filter: grayscale(100%) brightness(0.8);
}
```

### 3c. The classic image hover effect (most used in real work):

```css
.photo {
  filter: grayscale(100%);
  transition: filter 0.4s ease;
}

.photo:hover {
  filter: grayscale(0%);
}
```

Show in browser. Image is grey — hover over it — color comes in smoothly.

Say: "This is one of the most professional image effects in CSS. Used on team member photos, portfolio galleries, and product grids. Clients love it."

### 3d. Blur for loading placeholders:

```css
.image-loading {
  filter: blur(10px);
  transition: filter 0.5s ease;
}

.image-loaded {
  filter: blur(0px);
}
```

Say: "Blur is used as a loading placeholder — show a blurry version first, then remove the blur when the image loads. JavaScript controls the class change — you will implement this fully in JavaScript month."

### 3e. Drop shadow (like box-shadow but follows shape):

```css
/* box-shadow — rectangular shadow only */
.img { box-shadow: 4px 4px 10px rgba(0,0,0,0.3); }

/* filter drop-shadow — follows the actual shape of the image */
.img { filter: drop-shadow(4px 4px 10px rgba(0,0,0,0.3)); }
```

Show both on a PNG with transparent background — drop-shadow follows the shape, box-shadow makes a rectangle.

---

# MISSING CSS — PART C: CSS Variables (15 minutes)

## Step 4 — CSS Variables (15 minutes)

This is the most important missing topic. Every professional CSS file uses variables.

### 4a. The problem without variables:

Show this scenario:

> "Your client says: 'I want to change the main color from blue to green.' You search your CSS file. The color #2563eb appears in 23 different places. You change all 23. You miss 3. Three buttons stay blue. Client is angry."

### 4b. Defining variables on :root:

```css
:root {
  --color-primary: #2563eb;
  --color-secondary: #1e40af;
  --color-accent: #f59e0b;
  --color-text: #1f2937;
  --color-background: #f9fafb;
  --font-size-base: 16px;
  --font-size-heading: 48px;
  --border-radius: 12px;
  --shadow: 2px 4px 12px rgba(0, 0, 0, 0.1);
  --spacing: 24px;
}
```

Say: ":root means the very top of the document — like body but higher. Variables defined here are available everywhere in the CSS file. Variable names always start with two dashes."

### 4c. Using variables:

```css
.button {
  background-color: var(--color-primary);
  border-radius: var(--border-radius);
  padding: var(--spacing);
  box-shadow: var(--shadow);
}

h1 {
  color: var(--color-text);
  font-size: var(--font-size-heading);
}

body {
  background-color: var(--color-background);
  font-size: var(--font-size-base);
}
```

### 4d. The power moment — change one, update everywhere:

Change --color-primary from blue to green in :root. Show in browser — every button, every link, every element using that variable updates instantly.

Say: "This is why variables exist. One change, everything updates. This is how professional design systems work."

### 4e. Variables inside media queries:

```css
:root {
  --font-size-heading: 28px;
}

@media (min-width: 768px) {
  :root {
    --font-size-heading: 42px;
  }
}

@media (min-width: 1024px) {
  :root {
    --font-size-heading: 56px;
  }
}

h1 {
  font-size: var(--font-size-heading);
}
```

Show in browser. The heading grows as the screen gets larger — controlled entirely from :root.

Say: "Change font sizes in one place for all breakpoints. This is how modern CSS design systems work."

### 4f. Fallback value:

```css
color: var(--color-primary, blue);
/* If --color-primary is not defined, use blue as fallback */
```

### 4g. cursor: pointer (quick, 1 minute):

```css
.button {
  cursor: pointer; /* shows the hand cursor on hover */
}
```

Say: "Any clickable element that is not a normal link or button needs this. Divs used as buttons, custom checkboxes, cards that are clickable — always add cursor: pointer."

---

## BREAK (10 minutes)

---

# PROJECT TIME

## Step 5 — Project Brief and Planning (20 minutes)

### 5a. Announce the project (5 minutes):

Say:
> "Today you build your personal portfolio website. This is a real website you will actually use to show your skills to clients and employers. Not a practice project — a real one. You will deploy it live today."

### 5b. Hand them the project requirements on paper (read quietly, 5 minutes):

---

**PROJECT BRIEF — Personal Portfolio Website**

*Build a complete portfolio website for yourself. It must have these pages and sections:*

**Page 1 — index.html (Home)**

- Header/Navbar: your name or logo on the left, links to all pages on the right, sticky, responsive
- Hero section: your name as h1, a tagline as paragraph, a "Contact Me" button — all with staggered entrance animations
- About section: a photo of yourself (or placeholder), a short paragraph about you, a list of 3 skills — use a 2-column grid (image left, text right)
- Skills section: skill cards in a Flexbox row — each card shows a skill name and a short description
- Projects section: 3 project cards in a Grid — each card has a title, description, and a "View Project" button
- Footer: your name, links to your pages, copyright symbol

**Page 2 — projects.html**

- Navbar (same as home)
- A grid of your 3 practice projects from Weeks 1 and 2
- Each project card: screenshot or placeholder image (with grayscale hover effect using filter), project title, tech used, a live link button
- Footer

**Page 3 — contact.html**

- Navbar
- Contact form: name, email, subject dropdown, message textarea, submit button
- Your phone as a clickable link
- Your email as a clickable link
- Embedded Google Map (your city)
- Footer

---

**CSS Requirements — must use all of these:**

- CSS variables for colors, font sizes, border-radius, shadows
- Google Font
- Flexbox (navbar, skills section, about section)
- CSS Grid (projects section)
- At least one background-image with overlay gradient on hero
- CSS filter: grayscale on project images with hover color reveal
- Entrance animations on hero section (staggered)
- Hover transitions on all buttons and cards
- Sticky responsive navbar
- Fully responsive (mobile, tablet, desktop)
- One external CSS file for all 3 pages

---

### 5c. Planning on paper (10 minutes):

Before any code, each student draws:

1. The color theme — write 3 hex color codes they will use as variables
2. The Google Font they will import
3. Which sections use Flexbox and which use Grid
4. The folder structure

You check their plan before they start coding. Do not let anyone open VS Code until the plan is on paper.

---

## Step 6 — Build (90 minutes)

Students build independently. No helping each other's code.

**You circulate. Ask these questions while they work:**
- "Where are your CSS variables defined?"
- "Which file is your CSS in?" (must be external, one file)
- "Have you tested this on mobile yet?"
- "What selector targets your project image hover?"

**Build order — write this on the board:**

```
1. Folder structure + link CSS file + paste :root variables
2. Navbar (HTML + CSS)
3. Hero section (HTML + CSS + animation)
4. About section
5. Skills section
6. Projects section
7. Footer
8. Page 2 (projects.html) — copy navbar and footer, build grid
9. Page 3 (contact.html) — copy navbar and footer, build form
10. Responsive — test and fix mobile
```

**If a student finishes early:**
- Add a dark mode toggle using a second set of CSS variables (just the colors)
- Add a smooth scroll behavior: `html { scroll-behavior: smooth; }`
- Add a "back to top" button using position fixed

---

## Step 7 — Deploy (15 minutes)

Both students must deploy their site live before presenting.

**Steps (do this together):**

1. Create a free account on Vercel (vercel.com) if they do not have one
2. Push project to GitHub (they know this from Week 1)
3. Connect GitHub repo to Vercel
4. Click Deploy
5. Copy the live URL

Each student ends the day with a URL they can share with anyone.

Say: "Your portfolio is now live on the internet. This URL goes on your CV, your WhatsApp bio, and your first message to every potential client."

---

## Step 8 — Presentation (20 minutes)

Each student presents their portfolio (10 minutes each).

You play the role of a potential client or employer.

**Ask these questions during their presentation:**

1. "Open it on your phone. Does it look right?" (test responsive)
2. "Hover over a project image. What happens?" (grayscale filter)
3. "Scroll down — does the navbar stay?" (sticky)
4. "Where are your CSS variables? Show me." (open the CSS file)
5. "If I asked you to change the main color to red — how many places do you edit?" (one — the variable)
6. "Show me one animation. Why did you choose that animation for that element?"
7. "What part are you most proud of?"

Let the other student ask one question too.

---

## Step 9 — End of Week Review + Quiz (10 minutes)

### End of Week 2 Quiz (both students together, fastest answer wins):

1. Which CSS property centers a flex item vertically? (align-items: center)
2. Write the background shorthand for an image centered and covering its container. (background: url('img.jpg') center/cover no-repeat)
3. How do you make an image black and white? (filter: grayscale(100%))
4. What symbol starts every CSS variable name? (--)
5. Write a media query that applies on screens 1024px and wider. (@media (min-width: 1024px))
6. What does animation-fill-mode: forwards do?
7. grid-template-columns: repeat(3, 1fr) — what does this create?
8. What is the difference between background-size cover and contain?
9. Why does z-index sometimes not work? (element has no position set)
10. What does cursor: pointer do and when do you use it?

---

## Step 10 — Closing + Weekend Homework (5 minutes)

### Weekend homework:

> Finish anything incomplete in the portfolio. Then add these two things:
>
> 1. A skills progress section — use CSS to create skill bars (a div with a colored background, different width percentages for each skill — e.g., HTML 90%, CSS 75%). No JavaScript needed.
> 2. A testimonials section with 2-3 fake testimonial cards using blockquote tag, styled nicely with a left border accent color and the client name in a different color.
>
> Monday starts JavaScript. Portfolio will be updated throughout the course as you learn new skills.

### Closing words:

> "Two weeks ago you did not know what a tag was. Today you have a live website on the internet with your name on it. That URL is the first thing you show a client. In JavaScript month, you will add real functionality to this — form submission, animations triggered by scrolling, interactive menus. The foundation is done. Now we make it work."

---

# PART 3: What We Learned Today

## Background Properties

```css
/* Full shorthand */
.hero {
  background: url('images/hero.jpg') center/cover no-repeat;
}

/* Individual properties */
background-image: url('images/hero.jpg');
background-size: cover;        /* fill container, crop if needed */
background-size: contain;      /* fit whole image, may leave space */
background-position: center;   /* where image is anchored */
background-repeat: no-repeat;  /* do not tile */
background-attachment: fixed;  /* parallax — image fixed while content scrolls */
```

### Gradient overlay on image:

```css
.hero {
  background:
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('images/hero.jpg') center/cover no-repeat;
}
```

Gradient comes FIRST — it sits on top of the image.

### Linear gradient alone:

```css
background: linear-gradient(to bottom, #1a1a2e, #16213e);
background: linear-gradient(to right, #667eea, #764ba2);
background: linear-gradient(135deg, #f093fb, #f5576c);
```

## CSS Filters

```css
filter: grayscale(100%);    /* black and white */
filter: grayscale(50%);     /* half grey */
filter: blur(4px);          /* blurred */
filter: brightness(1.3);    /* brighter (above 1 = brighter) */
filter: brightness(0.7);    /* darker (below 1 = darker) */
filter: contrast(1.5);      /* more contrast */
filter: sepia(100%);        /* old photo effect */
filter: invert(100%);       /* negative */

/* Combining */
filter: grayscale(100%) brightness(0.8);

/* Drop shadow that follows image shape */
filter: drop-shadow(4px 4px 10px rgba(0,0,0,0.3));
```

### Classic image hover effect:

```css
img {
  filter: grayscale(100%);
  transition: filter 0.4s ease;
}
img:hover {
  filter: grayscale(0%);
}
```

## CSS Variables

```css
/* Define in :root — available everywhere */
:root {
  --color-primary: #2563eb;
  --color-text: #1f2937;
  --font-size-heading: 48px;
  --border-radius: 12px;
  --shadow: 2px 4px 12px rgba(0,0,0,0.1);
}

/* Use with var() */
.button {
  background-color: var(--color-primary);
  border-radius: var(--border-radius);
}

/* With fallback */
color: var(--color-primary, blue);

/* In media queries */
@media (min-width: 768px) {
  :root {
    --font-size-heading: 56px;
  }
}
```

## Other Properties

```css
cursor: pointer;    /* hand cursor — use on any clickable element */

/* Smooth scrolling for the whole page */
html {
  scroll-behavior: smooth;
}

/* Background size cover vs contain */
background-size: cover;   /* fills container, crops image */
background-size: contain; /* fits whole image, may leave empty space */
```

## Everything Covered in Week 2

| Day | Topic |
|---|---|
| Day 1 | Selectors, colors, typography, Google Fonts |
| Day 2 | Box model, padding, margin, border, shadow, overflow |
| Day 3 | Display, position, pseudo-classes, transitions |
| Day 4 | Flexbox — all container and item properties |
| Day 5 | Grid, responsive design, media queries |
| Day 6 | Transform, @keyframes, animations, staggered effects |
| Day 7 | Backgrounds, filters, CSS variables, complete portfolio project |

---

# PART 4: After Class — Your Notes (5 minutes)

Write down:
1. Did CSS variables make sense? Did students immediately see the value?
2. Did both students successfully deploy their portfolio to a live URL?
3. Which CSS topic was weakest in their portfolio? (This is what to reinforce in JavaScript month)
4. How does the quality of their portfolio compare to what you expected?
5. Are they ready for JavaScript next week?
