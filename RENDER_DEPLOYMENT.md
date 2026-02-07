# Render Deployment Guide for Portfolio

## 🚀 Quick Deploy Steps

### 1. Create New Web Service on Render
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub account if not already connected
4. Select repository: **Darknight4433/Portfolio**

### 2. Configure Build Settings

**Basic Settings:**
- **Name:** `deva-portfolio` (or your preferred name)
- **Region:** Choose closest to your target audience
- **Branch:** `main`
- **Root Directory:** (leave blank)
- **Runtime:** `Node`

**Build & Deploy:**
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm run preview` (or use static site hosting - see below)

**Instance Type:**
- Select **Free** tier (or paid if you need custom domain/better performance)

### 3. Environment Variables (if needed)
Add these in the "Environment" section:
- `NODE_VERSION`: `18` (or your preferred version)

### 4. Deploy!
Click **"Create Web Service"** - Render will automatically:
- Clone your repo
- Install dependencies
- Build your project
- Deploy it live

---

## 🎯 Alternative: Static Site Deployment (Recommended for Vite)

Since this is a Vite app, you can deploy as a **Static Site** instead:

### Steps:
1. On Render Dashboard, click **"New +"** → **"Static Site"**
2. Connect to **Darknight4433/Portfolio**
3. Configure:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. Click **"Create Static Site"**

**Benefits:**
- Faster loading (served from CDN)
- Lower cost (Free tier has more generous limits)
- Better for static React/Vite apps

---

## 🔥 Firebase Configuration (Important!)

Your portfolio uses Firebase. Make sure to:

1. **Firestore Rules:** Already in `firestore.rules` - deploy them:
   ```bash
   firebase deploy --only firestore:rules
   ```

2. **Firebase Config:** The config in `src/firebase.ts` is already set up with your credentials.

3. **Security:** For production, consider:
   - Moving Firebase config to environment variables
   - Restricting API keys to your domain in Firebase Console

---

## 📋 Post-Deployment Checklist

After deployment:
- [ ] Test the live site URL
- [ ] Verify contact form works (Firebase connection)
- [ ] Check all images load correctly
- [ ] Test on mobile devices
- [ ] Verify favicon appears
- [ ] Test Recognition page navigation
- [ ] Verify cursor glow effect works

---

## 🌐 Custom Domain (Optional)

To add your own domain:
1. Go to your Render service → **Settings** → **Custom Domains**
2. Add your domain
3. Update DNS records as instructed by Render
4. Wait for SSL certificate to provision (automatic)

---

## 🐛 Troubleshooting

**Build fails?**
- Check Node version matches your local (18+)
- Verify `package.json` has all dependencies
- Check build logs for specific errors

**Site loads but Firebase doesn't work?**
- Verify Firebase config in `src/firebase.ts`
- Check Firestore rules are deployed
- Verify domain is whitelisted in Firebase Console

**Images not loading?**
- Ensure all images are in `src/assets/` or `public/`
- Check import paths are correct

---

## 📞 Need Help?

- Render Docs: https://render.com/docs
- Firebase Docs: https://firebase.google.com/docs
- Your repo: https://github.com/Darknight4433/Portfolio

---

**Your portfolio is ready to go live! 🎉**
