# Premium Portfolio Website - E.P.M. Pankaja

A premium, modern, fully responsive personal portfolio website designed to position **E.P.M. Pankaja (Mahitha Pankaja)** as an emerging AI Engineer, Software Developer, and Technology Professional with a unique dual background in Information Technology and Accounting.

Live Demo: `https://<your-username>.github.io/<your-repo-name>/` (Replace with your actual deployed URL)

---

## 🌟 Key Features

- **Dark Mode by Default**: High-contrast, premium, eye-friendly obsidian/slate color scheme with dynamic indigo/purple accent gradients.
- **Light/Dark Mode Toggle**: Fluid theme transition that stores user preferences in local storage.
- **Dynamic Typing Effect**: Automatic, natural typing animation on the hero section highlighting core expertise.
- **Categorized Skills Grid**: Beautiful glassmorphic skill cards showcasing languages, machine learning concepts, and domain business knowledge.
- **Qualifications & Education Timeline**: Interactive tabbed navigation pane showcasing academic credentials and professional CA / AAT qualifications.
- **Featured Project Showcases**: Large custom-designed showcase card for **SkillSync** and detailed grid cards for standard projects.
- **Interactive Git Activity Board**: An SVG-based, custom-drawn mock GitHub contribution grid displaying realistic commit frequencies and date tooltips.
- **High-Performance Animations**: Zero external UI framework dependencies. Animations are built on top of high-performance CSS transition properties and GPU-accelerated keyframe layouts.
- **SEO & Accessibility Optimized**: Built using semantic HTML5 elements, meta titles, descriptions, and descriptive image alt attributes.

---

## 🛠️ Technology Stack

- **Structure**: Semantic HTML5
- **Styling**: Modern CSS3 (CSS Grid, Flexbox, CSS Custom Properties, Glassmorphism, CSS Transitions/Keyframes)
- **Logic**: Vanilla ES6 JavaScript (Intersection Observer API, DOM Manipulation, SVG Generation)
- **Icons**: [Lucide Icons](https://lucide.dev/) (loaded asynchronously via CDN)
- **Assets**: Embedded local CV and profile images

---

## 📁 Project Structure

```text
Portfolio/
├── index.html                           # Main HTML layout, SEO meta tags, and content structure
├── style.css                            # CSS Design system, themes, and responsiveness styles
├── script.js                            # UI interactions, animations, and Github board script
├── README.md                            # Setup and deployment documentation
├── CV PDF.pdf                           # Original CV PDF (linked for downloads)
└── Profile Pic Background Removed.png   # Profile photo (used in the Hero section)
```

---

## 🚀 Running Locally

Because this website is built with vanilla HTML, CSS, and JavaScript, it does **not** require any Node.js, compilation, or packaging tools.

### Option 1: Direct File Launch (Easiest)
1. Open the project folder in your file explorer.
2. Double-click `index.html` to open the website directly in any web browser.

### Option 2: VS Code Live Server Extension (Recommended)
1. Open the portfolio folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already.
3. Click the **Go Live** button at the bottom right status bar of VS Code.
4. Your browser will open the site on `http://127.0.5.1:5500/index.html` with automatic hot-reloads when you save code changes.

---

## 🌐 Deploying to GitHub Pages (Free Hosting)

GitHub Pages provides free, secure hosting for static websites. You can publish your portfolio directly from your repository with the following steps:

### Step 1: Upload Your Portfolio to GitHub
If you haven't created a GitHub repository yet, follow these steps:
1. Log in to [GitHub](https://github.com/) and click the **New** repository button.
2. Name your repository (e.g., `portfolio` or `pankaja-portfolio`).
3. Set the repository to **Public** and do **not** initialize it with a README, `.gitignore`, or license.
4. Click **Create repository**.
5. In your local workspace terminal, run the following commands (replace the URL with your repository URL):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Premium Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages
1. Go to your repository page on GitHub.
2. Click on the **Settings** tab (gear icon at the top of the repo).
3. In the left-hand sidebar under the *Code and automation* section, click on **Pages**.
4. Under the **Build and deployment** section:
   - **Source**: Select `Deploy from a branch` from the dropdown menu.
   - **Branch**: Select `main` (or the branch you pushed to) and set the folder dropdown to `/ (root)`.
5. Click the **Save** button.

### Step 3: Access Your Website
- After saving, GitHub will start a deployment action.
- Wait about 1–3 minutes. Refresh the Page settings page.
- You will see a banner at the top of the Pages screen saying: **"Your site is live at..."** followed by a link (e.g., `https://<your-username>.github.io/<your-repo-name>/`).
- Click the link to view your live, professional portfolio!

---

## ✏️ Customization Guide

- **Social Links & Contact Details**:
  - Open `index.html`.
  - Search for the placeholders `<PRIVATE_LINKEDIN>`, `<PRIVATE_GITHUB>`, `<PRIVATE_EMAIL>`, and `<PRIVATE_PHONE>`.
  - Replace them with your actual profiles and contact details. For example:
    - Replace `<PRIVATE_LINKEDIN>` with `https://www.linkedin.com/in/mahitha-pankaja`
    - Replace `<PRIVATE_EMAIL>` with `mailto:pankajamahitha@gmail.com`
- **CV File**:
  - If you update your CV, simply replace `CV PDF.pdf` with your new file, keeping the filename exactly the same.
- **Profile Image**:
  - To change the picture, replace `Profile Pic Background Removed.png` with your new image. For the best visual aesthetic, use a background-removal tool on your portrait photo before saving it.
