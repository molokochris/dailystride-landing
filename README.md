# DailyStride — Landing Page

DailyStride is a habit tracking mobile application designed to help users build consistency, track daily habits, and improve personal discipline over time. The app focuses on simplicity, minimal design, and long-term habit formation rather than complex productivity systems.

This repository contains the **marketing landing page and privacy policy** for DailyStride, deployed at [dailystride.app](https://dailystride.app).

> The mobile app source code lives in a separate repository.

---

## Overview

DailyStride allows users to create habits, track daily progress, build streaks, and review their long-term consistency. It is designed to be lightweight, fast, and easy to use, with a strong focus on daily engagement.

---

## Features (App)

- Create and manage daily habits (positive and measurable types)
- Track habit completion and streaks
- View progress history via heatmap calendar
- Lightweight and minimal user interface with dark/light/custom themes
- Local-first data storage — no account required
- Optional cloud backup via Google Drive (`drive.appdata` scope)
- Notification reminders with custom sounds
- Premium access system via coupon codes

---

## Tech Stack

### Landing Page (this repo)
- **React** + **Vite**
- **Tailwind CSS v4**
- **Radix UI** + **shadcn/ui** components
- **Motion** for animations
- Deployed on **Vercel**

### Mobile App (separate repo)
- **React Native** via **Expo SDK 54**
- **Expo Router v6** for navigation
- **Zustand** for state management
- **AsyncStorage** for local-first data persistence
- **Supabase** for backend (coupons, waitlist, redemptions)
- **Google Drive API** for optional encrypted backups
- **Expo Notifications** for habit reminders
- **EAS Build** for production builds

### Admin Dashboard (separate repo)
- **Next.js** (App Router)
- **Supabase** service role client
- **Resend** for transactional email
- Deployed on **Vercel** at [admin.dailystride.app](https://admin.dailystride.app)

---

## Project Structure

```
dailystride-landing/
├── public/
│   ├── privacy.html          # Privacy policy (static, served at /privacy.html)
│   ├── logo_symbol.svg
│   ├── logo_text.svg
│   ├── app-store.svg
│   └── google-play.svg
├── src/
│   ├── assets/
│   │   └── images/           # Phone mockup screenshots
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   ├── styles/
│   ├── App.tsx               # Main landing page component
│   └── main.tsx              # Entry point
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

---

## Privacy and Data Handling

DailyStride prioritizes user privacy. Most user data is stored locally on the device. Optional cloud backup is only enabled when the user explicitly connects Google Drive.

- No advertising or third-party tracking
- No sale of user data
- Google Drive backup stored in a private hidden app folder (`drive.appdata`)
- Minimal external data collection for essential features only (coupon redemption, waitlist)

Full details at [dailystride.app/privacy.html](https://dailystride.app/privacy.html).

---

## Local Development

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Setup

```bash
git clone https://github.com/molokochris/dailystride-landing.git
cd dailystride-landing
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
# Output goes to /dist
```

---

## Deployment

The landing page is deployed on **Vercel** and automatically redeploys on every push to `main`.

Custom domain: `dailystride.app` — DNS managed via Cloudflare.

---

## Related Repositories

| Repo | Description |
|---|---|
| `molokochris/dailystride-mobile` | React Native mobile app (Expo) |
| `molokochris/dailystride-admin` | Next.js admin dashboard |
| `molokochris/dailystride-landing` | This repo — landing page + privacy policy |

---

## Links

- **Landing page:** [dailystride.app](https://dailystride.app)
- **Privacy policy:** [dailystride.app/privacy.html](https://dailystride.app/privacy.html)
- **Google Play:** [Coming soon]
- **X Account:** [DailyStride App]((https://x.com/dailystride_app))
- **Developer:** [Moloko Chris Poopedi](https://github.com/molokochris)

---

## License

© 2026 DailyStride · M4dKreatives · South Africa  
All rights reserved.
