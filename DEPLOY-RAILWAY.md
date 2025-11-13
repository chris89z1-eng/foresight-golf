# 🚂 Deploy ForeSight to Railway.app

Your app is ready to deploy! Follow these simple steps:

## Step 1: Create GitHub Repository

1. Go to: **https://github.com/new**
2. Repository name: `foresight-golf`
3. Make it **Public** (required for Railway free tier)
4. **Don't** initialize with README (we already have files)
5. Click **"Create repository"**

## Step 2: Push Your Code to GitHub

Copy and run these commands in your terminal:

```bash
# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/foresight-golf.git

# Push your code
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Railway

1. Go to: **https://railway.app/**
2. Click **"Start a New Project"** or **"New Project"**
3. Click **"Deploy from GitHub repo"**
4. Sign in with GitHub if needed
5. Select your **foresight-golf** repository
6. Railway will automatically detect and deploy your app!

## Step 4: Get Your Public URL

1. Once deployed, click on your project
2. Go to **Settings** tab
3. Scroll to **"Domains"** section
4. Click **"Generate Domain"**
5. You'll get a URL like: `https://foresight-golf.up.railway.app`

**That's your permanent public URL!** Share it with anyone! 🎉

---

## What You Get

✅ **Permanent URL** - Never changes
✅ **No password pages** - Direct access
✅ **Free hosting** - Railway free tier
✅ **HTTPS** - Secure by default
✅ **Fast** - Global CDN
✅ **Auto-deploy** - Push to GitHub = auto update

---

## Environment Variables (Optional)

If you need to add any API keys later:

1. Go to your Railway project
2. Click **"Variables"** tab
3. Add your environment variables
4. Railway will auto-redeploy

---

## Update Your App Later

Whenever you make changes:

```bash
# Make your changes to the code
npm run build

# Commit and push
git add .
git commit -m "Update app"
git push

# Railway automatically redeploys!
```

---

## Troubleshooting

**Build fails?**
- Check the Railway logs in the "Deployments" tab
- Make sure all dependencies are in package.json

**App not loading?**
- Wait 2-3 minutes for first deployment
- Check Railway logs for errors

**Need help?**
- Railway docs: https://docs.railway.app/
- Railway Discord: https://discord.gg/railway

---

## Current Status

✅ Code committed to Git
✅ Ready to push to GitHub
✅ Ready to deploy to Railway

**Next:** Create your GitHub repo and follow Step 2 above!
