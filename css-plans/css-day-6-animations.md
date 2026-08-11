# CSS Day 6 — Full Detailed Plan
## CSS Animations

**Time needed:** 3 hours
**Already taught:** Selectors, colors, typography, box model, display, position, transitions, Flexbox, Grid, responsive design
**Today's goal:** Students can bring a page to life using keyframe animations, transforms, and smart animation decisions.

---

# PART 1: Your Preparation (Night Before — 30 minutes)

**Do these yourself first:**

**1. Build a fade-in animation.**
Write @keyframes fadeIn from opacity 0 to opacity 1. Apply it to a heading. Change the duration and see the difference between 0.5s and 2s.

**2. Build a slide-in animation.**
Use translateX(-100px) to translateX(0). Apply it to a nav or a card. Feel how smooth it looks.

**3. Practice animation-fill-mode.**
Write an animation without fill-mode — watch the element snap back to its original state when animation ends. Then add animation-fill-mode: forwards. See it stay in the final position. This is the most common animation mistake.

**4. Try animation-iteration-count: infinite.**
Write a pulse or spin animation. Set it to infinite. Understand when infinite makes sense and when it becomes annoying.

**Answers you must have ready:**

| Question | Answer |
|---|---|
| "What is the difference between transition and animation?" | Transition needs a trigger — a hover, a click, a focus. It goes from one state to another. Animation runs by itself — no trigger needed. Animation also gives you full control with keyframes — you can define many steps, not just start and end. |
| "Why does my element snap back after the animation?" | Because animation-fill-mode is not set. By default the element returns to its original CSS after animation ends. Add animation-fill-mode: forwards and it stays in the final keyframe state. |
| "Can I animate multiple properties at the same time?" | Yes. Define both properties inside the same keyframe. For example: opacity and transform together. This is very common and looks professional. |
| "Why is my animation not smooth?" | Either the duration is too short, or you are animating a property like width or height which forces the browser to recalculate layout. Animate transform and opacity instead — they are handled by the graphics card and are always smooth. |
| "What is animation-fill-mode: both?" | forwards = element stays at the end state after animation. backwards = element starts at the first keyframe state before animation begins (useful with delay). both = applies both forwards and backwards rules at the same time. Use both as your default. |

---

# PART 2: The Class (3 hours)

## Step 1 — Homework Check (10 minutes)

Students swap seats. Check each other's responsive Spice House website:
- Open in DevTools device toolbar — does it work on mobile?
- Does the navbar stack on mobile and go side by side on desktop?
- Do the dish cards go 1 column on mobile and 3 on desktop?
- Does the menu table scroll horizontally on mobile?
- One good thing + one fix out loud.

---

## Step 2 — Transition vs Animation (5 minutes)

Quick recap before starting new content.

Say:
> "You already know transitions. A transition needs a trigger — hover, focus, click. It moves from state A to state B smoothly."

Write on paper:

```
TRANSITION
Needs a trigger (hover, focus, click)
Goes from A to B
Only 2 states — start and end

ANIMATION
Runs on its own — no trigger needed
Can have unlimited steps (keyframes)
Can repeat, reverse, delay
```

Say: "Today we learn animation. Both tools are used together in real projects."

---

## Step 3 — Transform (20 minutes)

Transform must be taught today because it is the engine of smooth animation. You already showed translateY in transitions — now go deep.

New folder `day6`, files `index.html` and `style.css`.

```html
<div class="box">Transform me</div>
```

```css
* { box-sizing: border-box; }

.box {
  width: 150px;
  height: 150px;
  background-color: steelblue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
}
```

Show each transform on hover one at a time:

### 3a. translate — move:

```css
.box:hover { transform: translateX(50px); }  /* move right */
.box:hover { transform: translateY(-30px); } /* move up */
.box:hover { transform: translate(50px, -30px); } /* move right AND up */
```

### 3b. scale — grow or shrink:

```css
.box:hover { transform: scale(1.2); }   /* 20% bigger */
.box:hover { transform: scale(0.8); }   /* 20% smaller */
.box:hover { transform: scaleX(1.5); }  /* wider only */
```

### 3c. rotate — spin:

```css
.box:hover { transform: rotate(45deg); }   /* clockwise 45 degrees */
.box:hover { transform: rotate(-45deg); }  /* counter-clockwise */
.box:hover { transform: rotate(180deg); }  /* half flip */
```

### 3d. skew — tilt:

```css
.box:hover { transform: skewX(20deg); }  /* tilt along X axis */
.box:hover { transform: skewY(10deg); }  /* tilt along Y axis */
```

### 3e. Combining transforms:

```css
.box:hover {
  transform: translateY(-10px) scale(1.05) rotate(3deg);
}
```

Show this combined effect. It looks very smooth with the transition already on .box.

Say two important things:
> "First: transform does NOT affect surrounding elements. The element moves visually but the space around it stays. This is why transform is safe and smooth to animate."
>
> "Second: always animate transform and opacity. Never animate width, height, top, left — these force the browser to recalculate the entire layout every frame and cause lag on slow devices."

---

## Step 4 — @keyframes (20 minutes)

This is the heart of CSS animation.

### 4a. Basic keyframes:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

Apply it:

```css
.heading {
  animation: fadeIn 1s ease;
}
```

Show in browser. Refresh the page — heading fades in.

Explain the pattern:
- `@keyframes` then a name you choose
- `from` = start state (same as 0%)
- `to` = end state (same as 100%)
- Apply it with `animation: name duration timing`

### 4b. Percentage keyframes — multiple steps:

```css
@keyframes bounce {
  0%   { transform: translateY(0); }
  30%  { transform: translateY(-30px); }
  60%  { transform: translateY(-15px); }
  80%  { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}
```

Apply:

```css
.ball {
  animation: bounce 1s ease;
}
```

Show in browser. The ball bounces with multiple steps — impossible with transition.

Say: "Percentages give you full control. You decide exactly what happens at 0%, 30%, 60%, 80%, 100%. Transition only gives you from and to."

---

## Step 5 — Animation Properties (25 minutes)

Students type along with you now.

```css
.box {
  animation: fadeIn 1s ease 0.3s 1 normal forwards;
}
```

Teach each part separately:

### 5a. animation-name:

```css
animation-name: fadeIn;
```

The name you gave in @keyframes. Must match exactly.

### 5b. animation-duration:

```css
animation-duration: 1s;    /* 1 second */
animation-duration: 500ms; /* 0.5 seconds */
```

Show the difference between 0.3s (snappy), 1s (smooth), 3s (slow).

Say: "Most UI animations should be between 0.2s and 0.6s. Longer than 1 second feels slow for page elements. Longer animations work for loading screens or big reveals."

### 5c. animation-timing-function:

```css
animation-timing-function: ease;        /* default — natural */
animation-timing-function: linear;      /* same speed throughout */
animation-timing-function: ease-in;     /* starts slow */
animation-timing-function: ease-out;    /* ends slow */
animation-timing-function: ease-in-out; /* slow start and end */
```

Show each one on the same bounce animation. The difference is very visible.

### 5d. animation-delay:

```css
animation-delay: 0.3s; /* wait 0.3s before starting */
animation-delay: 1s;   /* wait 1 second */
```

Show 3 headings each with a different delay (0s, 0.2s, 0.4s) — they appear one after another.

Say: "Staggered delays make a page feel alive and designed. Cards appearing one by one feels much better than all appearing at once."

### 5e. animation-iteration-count:

```css
animation-iteration-count: 1;        /* play once — default */
animation-iteration-count: 3;        /* play 3 times */
animation-iteration-count: infinite; /* play forever */
```

Show a spin animation on infinite. Then say:

> "Infinite animation grabs attention permanently. Use it ONLY for things that should always draw attention — a loading spinner, a pulsing notification dot. Using infinite on decorative elements is annoying and distracts users from the actual content. Most UI animations play once."

### 5f. animation-direction:

```css
animation-direction: normal;            /* plays forward — default */
animation-direction: reverse;           /* plays backward */
animation-direction: alternate;         /* forward then backward, then forward... */
animation-direction: alternate-reverse; /* backward then forward... */
```

Show alternate on the bounce — ball goes up and comes back naturally.

### 5g. animation-fill-mode — the most important property:

```css
animation-fill-mode: none;     /* default — snaps back after animation */
animation-fill-mode: forwards; /* stays at final keyframe state */
animation-fill-mode: backwards;/* shows first keyframe state during delay */
animation-fill-mode: both;     /* forwards + backwards combined */
```

Demo this clearly:

Write a slide-in animation:

```css
@keyframes slideIn {
  from { transform: translateX(-100px); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}

.card {
  animation: slideIn 0.6s ease;
  /* No fill-mode */
}
```

Show in browser — card slides in then SNAPS back to the hidden position (because opacity 0 is back).

Now add:

```css
.card {
  animation: slideIn 0.6s ease forwards;
}
```

Show — card slides in and STAYS visible.

Say: "This is the number one animation mistake beginners make. Always add forwards or both to your animation. Otherwise your beautifully animated element disappears or snaps back the moment it finishes."

### 5h. Shorthand (the way you will always write it):

```css
/* animation: name duration timing delay iterations direction fill-mode */
animation: slideIn 0.6s ease 0.2s 1 normal forwards;

/* Most common — name, duration, timing, fill-mode */
animation: fadeIn 0.5s ease forwards;
```

---

## BREAK (10 minutes)

---

## Step 6 — 5 Practical Animations to Know (25 minutes)

Students type each one. These are the animations they will use in real projects.

### Animation 1 — Fade In (page load):

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.hero-text {
  animation: fadeIn 1s ease forwards;
}
```

---

### Animation 2 — Slide In from left (cards, sidebar):

```css
@keyframes slideInLeft {
  from {
    transform: translateX(-60px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.card {
  animation: slideInLeft 0.5s ease forwards;
}
```

---

### Animation 3 — Slide In from bottom (sections appearing):

```css
@keyframes slideInUp {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.section-title {
  animation: slideInUp 0.6s ease forwards;
}
```

---

### Animation 4 — Pulse (notification dot, online indicator):

```css
@keyframes pulse {
  0%   { transform: scale(1);    opacity: 1; }
  50%  { transform: scale(1.15); opacity: 0.7; }
  100% { transform: scale(1);    opacity: 1; }
}

.notification-dot {
  width: 12px;
  height: 12px;
  background-color: red;
  border-radius: 50%;
  animation: pulse 1.5s ease infinite;
}
```

---

### Animation 5 — Spin (loading spinner):

```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f0f0f0;
  border-top-color: steelblue;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
```

Show all 5 in browser. Ask students: "Which of these have you seen on real websites?" — they will recognise all of them.

---

## Step 7 — Staggered Animation (10 minutes)

This is what makes a page feel designed rather than built.

```html
<div class="features">
  <div class="feature-card">Card 1</div>
  <div class="feature-card">Card 2</div>
  <div class="feature-card">Card 3</div>
</div>
```

```css
@keyframes fadeUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.feature-card {
  animation: fadeUp 0.5s ease forwards;
  opacity: 0; /* hide before animation starts */
}

.feature-card:nth-child(1) { animation-delay: 0s; }
.feature-card:nth-child(2) { animation-delay: 0.15s; }
.feature-card:nth-child(3) { animation-delay: 0.3s; }
```

Show in browser. Cards appear one after the other rising from below.

Say: "Staggered delay is one of the most used animation techniques in modern web design. Each card gets a slightly later delay. The result feels smooth and intentional."

Note why opacity 0 is set on .feature-card:

> "We set opacity 0 on the element itself so it is hidden before the animation begins. Then the animation reveals it. Without this, the card flashes visible for a split second before the animation starts."

---

## Step 8 — When NOT to Animate (5 minutes)

This is as important as knowing how to animate.

Write these rules on paper:

**Do animate:**
- Page load entrance effects (once, short, subtle)
- Hover feedback on buttons and cards
- Loading spinners
- Menu open and close
- Notification indicators

**Do NOT animate:**
- Everything on the page at once (overwhelming)
- Important text content (makes it hard to read)
- Infinite decorative animations (distracting)
- Animations longer than 1 second for UI elements
- Animations that serve no purpose

Say:
> "Animation should guide the user's eye or give feedback. If you cannot explain why an element is animated, remove the animation. Clients sometimes ask for more animation — your job is to advise them on what looks professional versus what looks like a 2005 MySpace page."

---

## Step 9 — Student Exercises (30 minutes)

### Exercise 1 — Animated Landing Section (15 minutes)

Students build a hero section with staggered animations:

```html
<section class="hero">
  <h1 class="hero-title">Welcome to Spice House</h1>
  <p class="hero-subtitle">Authentic flavours of Pakistan</p>
  <a class="hero-btn" href="#">Book a Table</a>
</section>
```

Requirements:
- h1: slides in from left, 0s delay
- p: fades up from below, 0.2s delay
- Button: fades in, 0.4s delay
- All use forwards fill-mode
- All elements set to opacity 0 before animation
- Button has a hover transition (lift or color change) in ADDITION to the load animation

---

### Exercise 2 — Animated Card Row (15 minutes)

Take the 3 dish cards from Spice House. Add:
- Each card fades up on page load with staggered delay (0s, 0.15s, 0.3s)
- Each card lifts on hover using transition (not animation)
- A spinning loader div sits above the cards (use the spinner from Step 6)

After they build — they must delete the spinner (it was just for practice). Real spinner use comes in JavaScript month.

---

## Step 10 — Review (10 minutes)

Seat swap. Check each other's hero section:
- Do elements appear in sequence or all at once?
- Does opacity 0 prevent the flash before animation?
- Is fill-mode: forwards on every animation?
- Does the button hover work separately from the load animation?
- One good thing + one fix out loud.

---

## Step 11 — Quiz and Homework (10 minutes)

### Quiz (students take turns):

1. What is the difference between transition and animation?
2. Write a @keyframes called slideIn that goes from translateY(40px) opacity 0 to translateY(0) opacity 1.
3. What does animation-fill-mode: forwards do?
4. Why should you animate transform and opacity instead of width and height?
5. What does animation-iteration-count: infinite do and when should you use it?
6. What is a staggered animation and how do you create it?
7. Write the animation shorthand for: name fadeIn, duration 0.5s, timing ease, fill-mode forwards.
8. Name 3 situations where you should NOT animate.

### Homework:

> Add animations to the Spice House website:
>
> 1. Hero section: h1 slides in from left, paragraph fades up, button fades in — all staggered
> 2. Featured dish cards: fade up with staggered delay on page load
> 3. Navbar logo: subtle fade in on load (0.3s)
> 4. All buttons: hover lift effect using transition
> 5. Footer links: color change on hover with transition
>
> Rule: no infinite animations except if you add a notification dot somewhere on the page.
> Test on mobile in DevTools — animations must work on mobile too.

### Closing words:
> "Today your pages started breathing. Tomorrow is the final project day — a complete website using everything from Week 1 HTML and Week 2 CSS. You have all the tools. Tomorrow is about putting them together into something real."

---

# PART 3: What We Learned Today

## Transform

```css
transform: translateX(50px);          /* move right */
transform: translateY(-30px);         /* move up */
transform: translate(50px, -30px);    /* move right and up */
transform: scale(1.2);                /* 20% bigger */
transform: scale(0.8);                /* 20% smaller */
transform: rotate(45deg);             /* rotate clockwise */
transform: rotate(-45deg);            /* rotate counter-clockwise */
transform: skewX(20deg);              /* tilt */

/* Combining — space separated */
transform: translateY(-10px) scale(1.05);
```

Always animate transform and opacity — never width, height, top, or left.

## @keyframes

```css
/* Two states */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Multiple steps */
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-30px); }
  100% { transform: translateY(0); }
}
```

## Animation Properties

```css
animation-name: fadeIn;
animation-duration: 0.5s;
animation-timing-function: ease;
animation-delay: 0.2s;
animation-iteration-count: 1;       /* or infinite */
animation-direction: normal;        /* or alternate, reverse */
animation-fill-mode: forwards;      /* ALWAYS add this */
```

## Shorthand

```css
/* name  duration  timing  delay  count  direction  fill-mode */
animation: fadeIn  0.5s    ease   0.2s   1          normal    forwards;

/* Most common short form */
animation: fadeIn 0.5s ease forwards;
```

## 5 Animations to Memorise

```css
/* 1. Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* 2. Slide In from Left */
@keyframes slideInLeft {
  from { transform: translateX(-60px); opacity: 0; }
  to   { transform: translateX(0);     opacity: 1; }
}

/* 3. Slide In from Bottom */
@keyframes slideInUp {
  from { transform: translateY(40px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

/* 4. Pulse */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.15); }
}

/* 5. Spin */
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
```

## Staggered Animation Pattern

```css
.card { animation: fadeUp 0.5s ease forwards; opacity: 0; }
.card:nth-child(1) { animation-delay: 0s; }
.card:nth-child(2) { animation-delay: 0.15s; }
.card:nth-child(3) { animation-delay: 0.3s; }
```

## Transition vs Animation

| | Transition | Animation |
|---|---|---|
| Needs a trigger | Yes (hover, focus) | No — runs on its own |
| Number of states | 2 (start and end) | Unlimited (keyframes) |
| Can repeat | No | Yes (iteration-count) |
| Can delay | No | Yes (animation-delay) |
| Best for | Hover effects | Page load, loaders, reveals |

---

# PART 4: After Class — Your Notes (5 minutes)

Write down:
1. Did fill-mode forwards click? (Check homework — missing fill-mode is the most common mistake)
2. Did staggered delays make sense?
3. Did students understand WHY to animate transform over width/height?
4. Are animations subtle and professional or overdone? (Guide toward subtle)
5. Are both students ready for tomorrow's full project?
