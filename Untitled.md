# **Project Scope: Remaining Steps for Static Pages Deployment**

## **1. Initialize Git Project & Push Local Code to GitHub**

**Goal:** Ensure the remote repository (`dmason-static-pages-deploy`) contains the full React codebase that currently runs locally.

**Tasks:**

* Run `git add .` to stage all new files.
* Run `git commit -m "Initial React app setup with Vite"` to save changes.
* Run `git push origin main` to upload the project to GitHub.
* Verify the repo now contains all source files (`src/`, `public/`, `package.json`, etc).

---

## **2. Add GitHub Actions Workflow for Automated Deployment**

**Goal:** Configure CI/CD so GitHub automatically builds and deploys the static site to GitHub Pages on every push to `main`.

**Tasks:**

* Create `.github/workflows/deploy-pages.yml` inside the project.
* Add workflow steps:

  * Checkout code
  * Install dependencies
  * Build (`npm run build`)
  * Upload `dist/` as artifact
  * Deploy to GitHub Pages
* Commit and push workflow to GitHub.

---

## **3. Configure GitHub Pages for the Repository**

**Goal:** Enable GitHub Pages so the deployed site becomes publicly accessible.

**Tasks:**

* Open repo → **Settings → Pages**.
* Set **Build & Deployment → Source = GitHub Actions**.
* Wait for GitHub to confirm Pages is enabled.

---

## **4. Trigger Deployment & Validate Build**

**Goal:** Ensure the workflow executes correctly and the static site builds successfully.

**Tasks:**

* Push the workflow file to trigger the first deployment.
* Go to **Actions** tab:

  * Confirm `build` job passes.
  * Confirm `deploy` job publishes the artifact.
* Fix any workflow errors if they appear.

---

## **5. Retrieve and Test the Live GitHub Pages URL**

**Goal:** Confirm the static React site is accessible on the public internet.

**Tasks:**

* After successful deployment, go to **Settings → Pages**.
* Copy the generated Pages URL (e.g.,
  `https://york-dmason.github.io/dmason-static-pages-deploy`)
* Open the URL in a browser and verify:

  * App loads correctly
  * Styles/scripts work
  * No broken assets or routing issues

---

## **6. Deliver Final Project Requirements**

**Goal:** Provide the required deliverables for review.

**You will submit:**

* **GitHub repository link**
* **Live GitHub Pages URL**
* Statement confirming:

  * Local development environment is working
  * SSH + Git setup is complete
  * App deploys automatically via GitHub Actions

---

## **7. (Optional) Improve or Personalize the Static Site**

**Goal:** Show minimal competency with React by customizing content.

**Optional tasks:**

* Update `App.jsx` with your own text
* Add a small component or section
* Add simple styles

This is not required but strengthens the submission.

---

If you'd like, I can also generate:

* the exact `deploy-pages.yml` workflow
* the commit commands
* or a final handoff message to send to your manager

Just let me know.
