# Git and GitHub — 2 Day Plan

**Duration:** 2 days, 3 hours each
**Goal:** Students use Git and GitHub confidently every day from this point forward. Every project they build from now on lives on GitHub.

---

# Why Git Before JavaScript

Every JavaScript file, every project, every piece of work from this point goes on GitHub. Teaching Git before JavaScript means they build the habit from day one of coding. Developers who learn Git late always have messy histories, lost work, and no portfolio to show.

---

# Day 1 — Git (Local)

## Your Revision — Night Before

**Core concepts to be solid on:**

The three areas Git works with:

```
Working Directory        Staging Area           Repository
(your files)    --add--> (ready to commit) --commit--> (saved history)
```

Git does not save every keystroke. You decide what to save and when. A commit is a snapshot you deliberately took.

**Commands to revise:**

```bash
git init                        # start tracking a folder
git status                      # what has changed
git add filename.js             # stage one file
git add .                       # stage everything
git commit -m "message"         # save the snapshot
git log                         # see all commits
git log --oneline               # see commits in one line each
git diff                        # see unstaged changes
git diff --staged               # see staged changes
```

Branching:

```bash
git branch                      # list all branches
git branch feature-login        # create new branch
git checkout feature-login      # switch to branch
git checkout -b feature-login   # create and switch in one command
git switch feature-login        # modern way to switch
git merge feature-login         # merge branch into current branch
git branch -d feature-login     # delete branch after merging
```

Undoing things:

```bash
git restore filename.js         # discard changes in working directory
git restore --staged filename   # unstage a file
git reset HEAD~1                # undo last commit but keep changes
git reset --hard HEAD~1         # undo last commit and discard changes
git revert abc123               # safely undo a commit (creates new commit)
```

---

## The Class — Day 1

### Step 1 — What Problem Does Git Solve (15 minutes)

No terminal yet. Show this scenario on paper:

```
project/
    index.html
    index_backup.html
    index_final.html
    index_FINAL_v2.html
    index_FINAL_v2_ACTUALLY_FINAL.html
```

Ask students: "Have you ever done this? Saved a copy before making changes because you were scared of breaking it?"

They will say yes.

Say:

"This is what every developer did before version control. Git replaces this mess. Instead of making copies, you take snapshots called commits. You can go back to any snapshot at any time. You can work on new features without touching the working version. Multiple people can work on the same project without overwriting each other."

Draw the three areas:

```
Working Directory        Staging Area           Repository
(files you edit)  --add--> (files you choose) --commit--> (history)
```

"Think of staging as packing a box before shipping. You choose exactly what goes in the box. Then you commit which ships the box. The history is all your past shipments."

---

### Step 2 — Install and Configure Git (15 minutes)

**This step must be done before any git command. A commit without identity is rejected.**

Check if Git is installed:

```bash
git --version
```

If it shows a version number, Git is installed. If not, go to git-scm.com, download and install with all default options.

After installing, Git needs to know who you are. Every single commit is stamped with your name and email permanently. This cannot be changed after committing.

Set your name:

```bash
git config --global user.name "Ahmed Khan"
```

Set your email — use the same email you will use for GitHub:

```bash
git config --global user.email "ahmed@example.com"
```

Set VS Code as the default editor for Git messages:

```bash
git config --global core.editor "code --wait"
```

Set main as the default branch name (modern standard, older Git used master):

```bash
git config --global init.defaultBranch main
```

Verify everything is set correctly:

```bash
git config --list
```

You will see something like:

```
user.name=Ahmed Khan
user.email=ahmed@example.com
core.editor=code --wait
init.defaultbranch=main
```

The --global flag means these settings apply to every Git project on this computer. You only do this once per computer, not once per project.

If you want to check one setting specifically:

```bash
git config user.name
git config user.email
```

Both students do this on their own machines before moving forward. Do not skip this.

---

### Step 3 — First Repository (20 minutes)

Create a real project folder, not a practice folder. Use the Spice House website from Week 1:

```bash
cd Desktop
mkdir spice-house-project
cd spice-house-project
```

Or navigate to an existing project folder.

Initialize Git:

```bash
git init
```

Show the hidden .git folder that appears:

```bash
ls -a
```

Say: "This .git folder is the entire history of your project. Never delete it. Never put a git repo inside another git repo."

Check status on empty project:

```bash
git status
```

Create index.html with basic content. Check status again:

```bash
git status
```

Show it appears as untracked file (red).

Stage it:

```bash
git add index.html
git status
```

Show it turns green — now in staging area.

Commit:

```bash
git commit -m "Add index.html with basic structure"
git status
```

Working tree is clean. First commit done.

---

### Step 4 — The Commit Loop (20 minutes)

This is the loop they will repeat thousands of times:

```
make change → git add → git commit → repeat
```

Add CSS file to the project. Go through the loop:

```bash
git add style.css
git commit -m "Add stylesheet"
```

Add more HTML content. Loop again:

```bash
git add .
git commit -m "Add nav and hero section"
```

Check the history:

```bash
git log
git log --oneline
```

Show that each commit has a unique hash, author, date, and message.

Talk about good commit messages. Show the difference:

```
Bad:  "fixed stuff"
Bad:  "changes"
Bad:  "asdfgh"

Good: "Add navigation menu with links"
Good: "Fix login button not responding on mobile"
Good: "Update product prices after client review"
```

Rule: commit message completes the sentence "This commit will..."

---

### Step 5 — git diff (10 minutes)

Make a change to index.html without staging it:

```bash
git diff
```

Show the red lines (removed) and green lines (added).

Stage the file:

```bash
git diff --staged
```

Show the staged changes.

This is useful before committing to review exactly what you are about to save.

---

### BREAK (10 minutes)

---

### Step 6 — Branching (30 minutes)

This is the most important Git concept for team work.

Explain with a real scenario:

"Your client's website is live and working. You need to add a new contact form. You do not want to touch the live code until the form is finished and tested. Solution: create a branch."

```bash
git branch                      # see current branches
git checkout -b feature-contact-form   # create and switch
git branch                      # now on new branch
```

Make changes on this branch. Add a contact form to index.html.

```bash
git add .
git commit -m "Add contact form with validation"
```

Switch back to main branch:

```bash
git checkout main
```

Open index.html. The contact form is gone. The main branch is untouched.

Switch back to feature branch:

```bash
git checkout feature-contact-form
```

Contact form is back.

Merge the branch into main:

```bash
git checkout main
git merge feature-contact-form
git branch -d feature-contact-form   # delete branch, work is done
```

Now main has the contact form.

---

### Step 7 — Merge Conflicts (25 minutes)

This must be taught now. Every student will face merge conflicts. Students who have never seen one panic when they encounter it.

Create a conflict deliberately:

```bash
# On main branch
git checkout main
# Edit line 5 of index.html to say "Welcome to Spice House"
git add .
git commit -m "Update heading on main"

# Create another branch
git checkout -b design-update
# Edit the same line 5 to say "Welcome to Our Restaurant"
git add .
git commit -m "Update heading on design branch"

# Try to merge
git checkout main
git merge design-update
```

Git shows a conflict:

```
CONFLICT: Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

Open index.html. Show them what conflict markers look like:

```
<<<<<<< HEAD
Welcome to Spice House
=======
Welcome to Our Restaurant
>>>>>>> design-update
```

Explain:

"Everything between <<<< and ==== is from your current branch (main). Everything between ==== and >>>> is from the branch being merged. You decide which to keep, edit the file, remove the markers, then commit."

Fix it — keep the one they prefer, remove all markers, then:

```bash
git add .
git commit -m "Resolve merge conflict in heading"
```

Say: "Merge conflicts look scary the first time. After you resolve 2 or 3 of them they become routine. The key is: read both versions, decide what the final code should look like, clean up the markers, commit."

---

### Step 8 — Student Exercises (20 minutes)

Each student does this independently on their own machine:

```
Exercise 1:

Take your CSS week portfolio project.
Initialize a git repo in that folder.
Make your first commit with all existing files.
Then make 3 more meaningful commits — each adding or improving something.
Each commit must have a proper descriptive message.
Use git log --oneline at the end and show 4 commits.

Exercise 2:

Create a new branch called "dark-mode".
Add a dark color class to your CSS on that branch.
Commit on that branch.
Switch back to main.
Confirm the dark mode CSS is gone.
Merge the dark-mode branch back to main.
Delete the branch.
```

---

### Step 9 — Quiz (10 minutes)

Ask out loud, both students answer:

1. What are the three areas in Git?
2. What is the difference between git add and git commit?
3. What does git status show?
4. Write the command to create and switch to a new branch in one line.
5. What is a merge conflict and how do you resolve one?
6. What makes a good commit message?
7. What does git log --oneline show?
8. Why do we use branches?

---

### Homework — Day 1

Take any project from HTML or CSS week. Create a proper Git history for it with at least 8 meaningful commits. Create one branch, do some work on it, merge it back to main. Be ready to explain every commit tomorrow.

---

# Day 2 — GitHub (Remote)

## Your Revision — Night Before

**Core concepts:**

Local vs remote. Local is on your computer. Remote is on GitHub's servers. You push local to remote. You pull remote to local.

```bash
git remote add origin URL       # connect local repo to GitHub
git push -u origin main         # push for first time (-u sets upstream)
git push                        # push after first time
git pull                        # get latest from GitHub
git fetch                       # download changes but do not merge
git clone URL                   # copy a repo from GitHub to your computer
```

Pull requests:
A pull request is not a Git feature — it is a GitHub feature. It is a request to merge one branch into another. It is reviewed, discussed, and approved before merging. This is how all professional teams work.

.gitignore:
A file that tells Git which files to never track. node_modules, .env files, OS files.

```
node_modules/
.env
.DS_Store
*.log
dist/
```

---

## The Class — Day 2

### Step 1 — Homework Check (10 minutes)

Each student opens their terminal:

```bash
git log --oneline
```

Count commits. Are messages meaningful? Did they create and merge a branch?

---

### Step 2 — GitHub Account Setup (10 minutes)

Both students create GitHub accounts if they do not have one.

Go to github.com, sign up, verify email.

Use the same email they set in git config user.email on Day 1. GitHub and Git must have matching emails so commits are linked to the correct GitHub account correctly.

Profile setup:
Add a proper profile photo (professional)
Add their name
Add city

Say: "GitHub is your developer CV. Recruiters and clients look at GitHub profiles. An empty profile or a profile with bad commit messages tells them something. A profile with real projects and good commit history tells them something much better."

---

### Step 3 — Create a Repository and Push (20 minutes)

On GitHub: click New Repository.

```
Repository name: spice-house-website
Description: Restaurant website built with HTML and CSS
Public (so it can be seen by clients and employers)
Do NOT initialize with README (we already have local commits)
```

Copy the commands GitHub shows. In terminal:

```bash
git remote add origin https://github.com/username/spice-house-website.git
git branch -M main
git push -u origin main
```

Refresh GitHub. Show the code is now live online.

Explain each part:
"remote add origin" — telling Git where the remote is. origin is just a nickname for the URL.
"-u origin main" — sets this as the default so next time you just type git push.

Make a small change to index.html. Go through the full loop:

```bash
git add .
git commit -m "Update hero section text"
git push
```

Refresh GitHub. Change is live.

Say: "This is your workflow for every project from today. Code locally, commit, push to GitHub. Never lose work again."

---

### Step 4 — README File (15 minutes)

Every professional repository has a README. It is the first thing visitors see.

Create README.md in the project:

```markdown
# Spice House Restaurant Website

A fully responsive restaurant website built with HTML5 and CSS3.

## Features

Responsive design for mobile, tablet and desktop
CSS animations and transitions
Interactive navigation
Booking form with validation
Google Maps integration

## Technologies Used

HTML5
CSS3
Flexbox and Grid
CSS Animations

## Live Demo

[View Live Site](your-vercel-url-here)

## Screenshots

(add screenshots here later)

## How to Run

Clone this repository
Open index.html in your browser
```

```bash
git add README.md
git commit -m "Add project README"
git push
```

Show how the README now appears beautifully on the GitHub page.

---

### BREAK (10 minutes)

---

### Step 5 — Clone and Pull (15 minutes)

Scenario: you are working on a different computer.

Clone a repository from GitHub:

```bash
cd Desktop
git clone https://github.com/username/spice-house-website.git
cd spice-house-website
```

Show all the files are there. The entire history is there too:

```bash
git log --oneline
```

Make a change on GitHub directly (edit a file using GitHub's web editor). Then pull the change locally:

```bash
git pull
```

Show the local file updated.

Say: "push sends your work to GitHub. pull gets work from GitHub. clone copies an entire repo for the first time. After the first clone, you use pull to get updates."

---

### Step 6 — Team Workflow with Pull Requests (35 minutes)

This is what professional teams do. Both students work together on one repo.

**Setup:**

Student A creates a new repository: "team-project"
Student A adds Student B as a collaborator:
Settings → Collaborators → Add people → enter Student B's GitHub username

Student B accepts the invitation and clones the repo:

```bash
git clone https://github.com/studentA/team-project.git
```

**The workflow:**

Both students should NEVER commit directly to main. Always work on branches.

Student A creates a branch and does some work:

```bash
git checkout -b add-homepage
# make changes to index.html
git add .
git commit -m "Add homepage structure"
git push origin add-homepage
```

Student B creates a different branch and does different work:

```bash
git checkout -b add-styles
# make changes to style.css
git add .
git commit -m "Add base styles"
git push origin add-styles
```

**Creating Pull Requests:**

Student A goes to GitHub, sees "Compare and pull request" banner.
Clicks it. Writes a description of what was done. Creates the pull request.

Student B reviews Student A's pull request:
Reads the changes
Leaves a comment: "Looks good, maybe add a margin to the nav"
Approves and merges

Student A does the same for Student B's branch.

Both pull the latest main:

```bash
git checkout main
git pull
```

Both now have each other's work locally.

Discuss: "This is exactly how professional teams work. No one touches main directly. Everything goes through branches and pull requests. A senior developer reviews before merging. You will work this way on every project from now on."

---

### Step 7 — .gitignore (10 minutes)

Show what files should never go to GitHub:

```bash
touch .gitignore
```

Open .gitignore and type:

```
node_modules/
.env
.env.local
.DS_Store
Thumbs.db
*.log
dist/
build/
.vscode/settings.json
```

Explain each one:

node_modules: contains thousands of files, too large, can always be reinstalled
.env: contains passwords and API keys, must NEVER be public
.DS_Store and Thumbs.db: system files from Mac and Windows, nobody else needs them
log files: generated automatically, no value in tracking
dist and build: generated from source code, should be rebuilt not tracked

```bash
git add .gitignore
git commit -m "Add gitignore"
git push
```

---

### Step 8 — GitHub Pages (10 minutes)

Deploy a static site for free using GitHub Pages.

On GitHub go to the repository:
Settings → Pages → Source → Deploy from branch → select main → save

Wait 2 minutes. GitHub gives a live URL like:
https://username.github.io/spice-house-website

Every push to main automatically updates the live site.

Say: "Free hosting for all your HTML and CSS projects. Every project they build has a live URL. This is what goes in their portfolio."

---

### Step 9 — Student Exercises (20 minutes)

Exercise 1 — Individual:

Each student pushes their CSS week portfolio project to GitHub with:
Proper README
.gitignore file
At least 8 meaningful commits in the history
Deployed on GitHub Pages with a live URL

Exercise 2 — Team:

Both students collaborate on one new repo:
Student A sets up repo and adds Student B as collaborator
Student A works on one branch (add a new page)
Student B works on another branch (add some CSS improvements)
Both create pull requests
Both review and merge each other's PR
Both pull the final main branch

---

### Step 10 — Quiz and Final Review (10 minutes)

Ask out loud:

1. What is the difference between git push and git pull?
2. What does git clone do?
3. What is a pull request and why do teams use it instead of committing directly to main?
4. What is .gitignore for? Name 3 things that belong in it.
5. What is the difference between origin and main?
6. How do you deploy a static site for free using GitHub?
7. Why should .env files never go to GitHub?
8. If your teammate pushed a change to GitHub, how do you get it on your local machine?

---

# What Students Know After 2 Days

| Topic | Day |
|---|---|
| What version control is and why it exists | Day 1 |
| git init, add, commit, status, log | Day 1 |
| Branching and merging | Day 1 |
| Resolving merge conflicts | Day 1 |
| GitHub account and repository setup | Day 2 |
| Push, pull, clone | Day 2 |
| Writing a proper README | Day 2 |
| Pull requests and team workflow | Day 2 |
| .gitignore — what to exclude | Day 2 |
| GitHub Pages deployment | Day 2 |

---

# The Daily Git Habit — From Today Forever

From this day every project follows this process:

```
1. Create project folder
2. git init (or clone from GitHub)
3. Create repository on GitHub
4. git remote add origin URL
5. Work on a branch, never directly on main
6. git add, git commit after every meaningful change
7. git push at end of every session
8. Pull request to merge into main
```

No exceptions. No "I will add it to GitHub later." Later never comes.

---

# Git Quick Reference Card

```bash
# Starting
git init                          # start tracking a folder
git clone URL                     # copy repo from GitHub

# Daily workflow
git status                        # what changed?
git add .                         # stage everything
git add filename                  # stage one file
git commit -m "message"           # save snapshot
git push                          # send to GitHub
git pull                          # get from GitHub

# Branches
git branch                        # list branches
git checkout -b branch-name       # create and switch
git checkout main                 # switch to main
git merge branch-name             # merge into current branch
git branch -d branch-name         # delete branch

# History and changes
git log --oneline                 # see commits
git diff                          # see unstaged changes
git diff --staged                 # see staged changes

# Undoing
git restore filename              # discard local changes
git restore --staged filename     # unstage a file
git reset HEAD~1                  # undo last commit (keep changes)
git revert hash                   # safely undo a commit

# Remote
git remote add origin URL         # connect to GitHub
git push -u origin main           # first push
git fetch                         # download without merging
```

---

# After Class Notes

Write down:

Did both students successfully push to GitHub?
Did the pull request exercise work without issues?
Is the team workflow clear — no committing directly to main?
Did both projects get deployed on GitHub Pages?
Any commands that confused them most?
