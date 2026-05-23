# Samovski Chess Academy Website

A static, mobile-friendly website for Samovski Chess Academy.

## File Structure

- `index.html` - all page content and editable section text
- `coaches.html` - instructor bios, rating levels, and teaching focus
- `assets/styles.css` - visual design, layout, and responsive styles
- `assets/script.js` - mobile menu and temporary form behavior
- `assets/samovski-logo.png` - academy logo used in the header and footer
- `assets/child-playing-chess.png` - supporting homepage image

## Edit Content

Most future updates can be made directly in `index.html`:

- Replace the temporary `SCA` logo mark in the header and footer
- Replace `assets/samovski-logo.png` if the academy logo is updated
- Update program descriptions
- Update pricing cards
- Update schedule cards
- Add coach bios or photos
- Connect the signup form

To connect the form with Formspree, replace:

```html
<form class="signup-form" action="#" method="post">
```

with your Formspree endpoint:

```html
<form class="signup-form" action="https://formspree.io/f/your-form-id" method="post">
```

The form already includes a subject field and a hidden anti-spam field.

## Run Locally

Because this is a static site, the simplest option is to open `index.html` directly in a browser.

If Python is installed and you prefer a local server, run:

```powershell
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deploy on GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `assets/styles.css`, `assets/script.js`, and `README.md`.
3. In GitHub, open the repository settings.
4. Go to **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/root` folder.
7. Save. GitHub will provide the live website URL after deployment.
