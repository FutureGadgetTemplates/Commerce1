# Firebase Setup Guide

This guide walks you through setting up Firebase for Google authentication and order history storage.

## Overview

Firebase provides:
- **Authentication** - Google Sign-In for user accounts
- **Firestore** - Database for user profiles and order history

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Create a project"** (or "Add project")
3. Enter a project name (e.g., "my-store")
4. Choose whether to enable Google Analytics (optional)
5. Click **Create project**
6. Wait for the project to be created, then click **Continue**

## Step 2: Enable Google Sign-In

1. In the left sidebar, click **Build** → **Authentication**
2. Click **Get started**
3. Go to the **Sign-in method** tab
4. Click on **Google** in the providers list
5. Toggle **Enable** to ON
6. Select your **Project support email** from the dropdown
7. Click **Save**

### Add Authorized Domains

1. Still in Authentication, go to the **Settings** tab
2. Scroll to **Authorized domains**
3. Verify these domains are listed (add if missing):
   - `localhost` (for local development)
   - Your production domain (e.g., `mystore.com`)

## Step 3: Create Firestore Database

1. In the left sidebar, click **Build** → **Firestore Database**
2. Click **Create database**
3. Choose **Start in test mode** (we'll add proper rules later)
4. Select a **Cloud Firestore location** close to your users
5. Click **Enable**

## Step 4: Get Your Firebase Config

1. Click the **gear icon** (⚙️) next to "Project Overview" in the top-left
2. Click **Project settings**
3. Scroll down to **Your apps** section
4. Click the **web icon** (`</>`) to add a web app
5. Enter an app nickname (e.g., "My Store Web")
6. Click **Register app**
7. You'll see a code block with `firebaseConfig` - copy these values:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",           // Copy this
  authDomain: "xxx.firebaseapp.com",  // Copy this
  projectId: "xxx",              // Copy this
  storageBucket: "xxx.appspot.com",   // Copy this
  appId: "1:xxx:web:xxx"         // Copy this
};
```

## Step 5: Add Config to Your Site

Open `_config.yml` and add your Firebase config:

```yaml
# Firebase configuration
firebase:
  api_key: "AIzaSy..."
  auth_domain: "your-project.firebaseapp.com"
  project_id: "your-project"
  storage_bucket: "your-project.appspot.com"
  app_id: "1:xxx:web:xxx"
```

## Step 6: Set Up Security Rules

The default test mode rules expire after 30 days. Set up proper security rules:

1. Go to **Firestore Database** → **Rules** tab
2. Replace the rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Users collection - users can only access their own document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Orders collection - users can only access their own orders
    match /orders/{orderId} {
      // Users can read their own orders
      allow read: if request.auth != null && resource.data.userId == request.auth.uid;

      // Users can create orders with their own userId
      allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;

      // No updates or deletes allowed
      allow update, delete: if false;
    }
  }
}
```

3. Click **Publish**

### What These Rules Do

| Rule | Description |
|------|-------------|
| `users/{userId}` | Users can only read/write their own profile document |
| `orders` read | Users can only read orders where `userId` matches their auth ID |
| `orders` create | Users can only create orders with their own `userId` |
| `orders` update/delete | Nobody can modify or delete orders (immutable) |

## Step 7: Test Your Setup

1. Start your Jekyll site: `bundle exec jekyll serve`
2. Click **Sign In** in the header
3. A Google popup should appear
4. Sign in with your Google account
5. Your name and avatar should appear in the header
6. Go to `/account/` to see your profile

## Troubleshooting

### "Sign in failed" instantly
- Check that `localhost` is in **Authorized domains** (Authentication → Settings)
- Verify Google Sign-In is **enabled** (Authentication → Sign-in method)

### "Missing or insufficient permissions" error
- Your Firestore security rules are blocking access
- Follow Step 6 to set up proper rules
- Make sure to click **Publish** after editing rules

### Popup blocked
- Browser may be blocking the sign-in popup
- Check for a popup blocker notification in the address bar
- Allow popups for localhost

### Profile picture not loading
- Some Google accounts don't have a profile picture
- The site will fall back to `default-avatar.jpg`
- Cross-origin issues may block Google's image URL

## Data Structure

### Users Collection (`/users/{uid}`)

```json
{
  "email": "user@gmail.com",
  "displayName": "John Doe",
  "photoURL": "https://...",
  "stripeCustomerId": "cus_xxx",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### Orders Collection (`/orders/{orderId}`)

```json
{
  "userId": "firebase_uid",
  "userEmail": "user@gmail.com",
  "stripeSessionId": "cs_xxx",
  "items": [
    { "name": "Product", "price": 29.99, "quantity": 1 }
  ],
  "total": 29.99,
  "status": "completed",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

## Production Checklist

Before going live:

- [ ] Add your production domain to **Authorized domains**
- [ ] Set up proper **Security Rules** (not test mode)
- [ ] Review Firebase usage and billing (free tier is generous)
- [ ] Consider enabling **App Check** for additional security
- [ ] Set up **Firebase Analytics** if needed

## Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Auth Web](https://firebase.google.com/docs/auth/web/start)
