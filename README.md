# Sankofa Family Medicine Website

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Pre-Launch Checklist

### 1. Google Analytics
In `app/layout.tsx`, replace the placeholder measurement ID:
```javascript
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'  // Replace with your actual GA4 ID
```

To get your GA4 Measurement ID:
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property or use existing
3. Go to Admin > Data Streams > Web
4. Copy the Measurement ID (starts with G-)

### 2. Replace Placeholder Images

| File | Size | Current Status |
|------|------|----------------|
| `/public/favicon.png` | 32x32 or 64x64 | Placeholder (using logo) |
| `/public/apple-touch-icon.png` | 180x180 | Placeholder (using logo) |
| `/public/images/og-image.png` | 1200x630 | Placeholder (using hero) |

### 3. Verify Contact Information
- Email: info@sankofafamilymedicine.com
- Phone: +1 (425) 285-7390
- Formspree endpoint in `/app/contact/page.tsx`

---

## Key Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, promises, services preview |
| `/about` | Our History, Sankofa principle, approach |
| `/founder` | Dr. Nkrumah bio and credentials |
| `/services` | Membership tiers and pricing |
| `/faq` | Frequently asked questions |
| `/contact` | Waitlist signup form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

---

## Deploy to Vercel

```bash
git add .
git commit -m "Update site"
git push
```

Vercel auto-deploys on push if connected.

---

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Formspree (contact form)
- Google Analytics 4

---

## Schema.org Structured Data

The site includes structured data for:
- MedicalBusiness (practice info)
- Physician (Dr. Nkrumah)
- WebSite

This helps Google understand the practice and may enable rich results in search.
