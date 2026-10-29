# sirleegameprediction ⚽📊

> **24/7 AI-Driven Football Betting Predictions, Live Scores & Statistics PWA**  
> Strictly an analytical research portal — no gambling or financial wagering.

---

## 🌟 Overview & Key Deliverables

**sirleegameprediction** is a high-converting, mobile-first Progressive Web App (PWA) designed for football enthusiasts, analysts, and bettors seeking high-accuracy data. It delivers chronological match previews, live in-play predictions, head-to-head (H2H) statistics, and high-probability correct score forecasts.

### 📱 PWA Features:
- **Installable on iOS & Android**: Configured with `manifest.json` and `sw.js` for "Add to Home Screen" support.
- **Offline Mode**: Pre-cached shell and data fallback so users can view predictions without an active network connection.
- **Mobile-First UX**: Responsive match cards, smooth league filtering carousel, live score ticker, and native-feeling bottom navigation.
- **Dark Mode Design System**: Deep obsidian slate (`#07090E`), vibrant neon emerald accents (`#00FF87`), and gold badges (`#F59E0B`).

---

## 📂 File Architecture

```text
sirleegamepredict/
├── index.html             # Main responsive HTML5 PWA layout with Tailwind CSS & Schema JSON-LD
├── manifest.json          # Web App Manifest (PWA metadata, icons, shortcuts, standalone)
├── sw.js                  # Service Worker (offline caching, stale-while-revalidate)
├── robots.txt             # Search engine crawler permissions
├── sitemap.xml            # XML sitemap with all core sections (#today, #tomorrow, #live, etc.)
├── css/
│   └── custom.css         # Custom animations, glassmorphism, radar pulse, typography
├── js/
│   ├── app.js             # Main controller: tab routing, search, filtering, modals, PWA install prompt
│   ├── data.js            # Comprehensive football match predictions, H2H, xG, and live in-play data
│   └── api.js             # API connector (API-Football, Sportmonks) & Formspree / djsirlee@gmail.com handler
└── icons/
    ├── icon-192.png       # 192x192 PWA app icon
    ├── icon-512.png       # 512x512 high-resolution PWA app icon
    ├── apple-touch-icon.png # 180x180 iOS touch icon
    ├── favicon-32x32.png  # Browser tab favicon
    └── og-image.jpg       # OpenGraph social share card
```

---

## 🚀 How to Run Locally

You can run `sirleegameprediction` instantly using any static server:

```bash
# Option 1: Using npx serve (recommended)
npx -y serve . -l 3000

# Option 2: Using Python built-in server
python3 -m http.server 3000

# Option 3: Using Node / Vite / Live Server in VS Code
```

Then open your browser at: `http://localhost:3000`

---

## 🔌 Next Steps to Get Your Site Live

### 1. Connecting a Live Football Data API (API-Football or Sportmonks)
The platform currently comes loaded with high-precision analytical prediction models for Premier League, Champions League, La Liga, Serie A, Bundesliga, and Saudi Pro League in `js/data.js`.

To stream automated, real-time live match scores from Monday to Sunday:
1. Register for a free API key at **[API-Football (api-sports.io)](https://www.api-sports.io/)** or **[Sportmonks](https://www.sportmonks.com/)**.
2. Open [`js/api.js`](file:///Users/mac/Desktop/PROJECT/WEBSITES/sirleegamepredict/js/api.js).
3. Update `API_CONFIG`:
   ```javascript
   const API_CONFIG = {
     footballApiProvider: 'api-football', // Switch from 'mock' to 'api-football'
     apiKeyFootball: 'YOUR_API_SPORTS_KEY_HERE',
     // ...
   };
   ```
4. The service will automatically fetch live fixtures, update scorelines, and run momentum calculations dynamically.

---

### 2. Setting Up the Email Contact Form (`djsirlee@gmail.com`)
Frontend HTML forms cannot send emails directly without a delivery relay. We have integrated **Formspree** and a direct **mailto** fallback to ensure 100% of VIP inquiries reach **`djsirlee@gmail.com`**.

#### Free Formspree Setup (2 Minutes):
1. Go to **[formspree.io](https://formspree.io/)** and sign up for a free account.
2. Create a new form and set the recipient email to: **`djsirlee@gmail.com`**.
3. Copy your Form ID (e.g. `https://formspree.io/f/xyzabckl`).
4. Paste it into [`js/api.js`](file:///Users/mac/Desktop/PROJECT/WEBSITES/sirleegamepredict/js/api.js) at `formspreeEndpoint`.
5. Whenever a visitor submits their name, phone number, and plan, Formspree delivers it directly to your Gmail inbox!
6. In addition, the app generates a pre-formatted `mailto:djsirlee@gmail.com` link and an instant WhatsApp direct button (`+447911123456`) so clients can contact SirLee immediately.

---

### 3. Deploying as an Installable PWA with Free HTTPS SSL

To allow iOS Safari and Android Chrome to show the **"Install App"** / **"Add to Home Screen"** prompt, the site must be served over **HTTPS**.

#### Deploy to Vercel (Fastest):
```bash
npx vercel deploy --prod
```

#### Deploy to Netlify:
1. Drag and drop the `sirleegamepredict` folder into [app.netlify.com/drop](https://app.netlify.com/drop).
2. Netlify provisions a free SSL certificate automatically (`https://sirleegameprediction.netlify.app`).

#### Deploy to Cloudflare Pages or GitHub Pages:
1. Push this folder to a GitHub repository.
2. In GitHub repository settings -> **Pages** -> Source: `main` branch `/ (root)`.
3. Enable "Enforce HTTPS".

---

## 🎯 SEO Strategy & High-Traffic Keywords

Built-in SEO enhancements include:
- **Target Keywords**: `free football predictions`, `EPL betting tips`, `today match correct score`, `live football predictions`, `sirleegameprediction`, `Champions league tips`.
- **JSON-LD Schema Markup**:
  - `SportsEvent` schema with prediction forecasts for rich Google search snippets.
  - `SportsOrganization` & `WebSite` schema with search action.
  - `FAQPage` schema to rank on Google "People Also Ask" questions.
- **OpenGraph & Twitter Card**: Pre-configured with social preview graphics.
- **Clean Hash URLs**: `#today`, `#tomorrow`, `#live`, `#stats`, `#premium`.
