# DailyStride

DailyStride is a habit tracking mobile application designed to help users build consistency, track daily habits, and improve personal discipline over time. The app focuses on simplicity, minimal design, and long-term habit formation rather than complex productivity systems.

## Overview

DailyStride allows users to create habits, track daily progress, build streaks, and review their long-term consistency. It is designed to be lightweight, fast, and easy to use, with a strong focus on daily engagement.

The project also includes a marketing landing page and a privacy policy website.

## Features

- Create and manage daily habits
- Track habit completion and streaks
- View progress history
- Lightweight and minimal user interface
- Local-first data storage
- Optional cloud backup via Google Drive
- Notification reminders for habits
- Coupon and premium access system (where applicable)

## Tech Stack

### Mobile App
- React Native (Expo)
- AsyncStorage for local data
- Supabase for backend services (coupons, waitlist, verification)
- Google Drive API for optional backups
- Expo Notifications for reminders

### Web
- React (Vite or similar setup)
- Tailwind CSS for landing page styling
- Static HTML and CSS for privacy policy page

## Project Structure

### Mobile App
```
/mobile-app
  /assets
  /components
  /screens
  App.js
```

### Web
```
/web
  /src
  index.html
  privacy.html
  styles.css
```

## Privacy and Data Handling

DailyStride prioritizes user privacy. Most user data is stored locally on the device. Optional cloud backup is only enabled when the user connects Google Drive.

- No advertising or third-party tracking
- No sale of user data
- Optional Google Drive backup stored in a private application folder
- Minimal external data collection for essential features only

For full details, see the Privacy Policy page included in the web project.

## Installation

### Mobile App (Development)

```bash
npm install
npx expo start