# Shreevas M Karanth — Portfolio

A static, single-page portfolio (HTML + CSS + vanilla JS). No build step. Works on GitHub Pages as-is.

```
index.html             page content (about, skills, AI impact, experience)
assets/css/style.css   styles, light + dark theme
assets/js/config.js    YOUR PERSONAL DETAILS  <- edit this
assets/js/main.js      theme toggle, contact/social rendering
```

## 1. Add your personal details

Open `assets/js/config.js` and fill in email, phone, LinkedIn, GitHub, etc.
Any value left as `""` is hidden from the page automatically.

To add a résumé download button, put your PDF at `assets/resume.pdf` and set `resume: "assets/resume.pdf"`.

## 2. Publish on GitHub Pages

1. Sign in to GitHub and create a **new public repository** named exactly **`<your-username>.github.io`**
   (this gives you the address `https://<your-username>.github.io`).
2. On the new repo page, click **"uploading an existing file"**, drag in **everything inside this folder**
   (`index.html`, `assets/`, `.nojekyll`, `README.md`), and click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch**,
   **Branch: `main`**, folder **`/ (root)`**, and click **Save**.
4. Wait 1–2 minutes, then open `https://<your-username>.github.io`.

Prefer the command line?

```bash
cd portfolio
git init -b main
git add .
git commit -m "Portfolio site"
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

To update later, edit the files and upload/commit again; Pages redeploys automatically.

## Custom domain (optional)

In **Settings → Pages → Custom domain**, enter your domain, then add a `CNAME` DNS record pointing to `<your-username>.github.io`.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.
