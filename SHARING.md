# Share ForeSight with Friends & Testers

## Option 1: Local Network (Same WiFi) ✅ READY NOW

Your app is already accessible to anyone on the same WiFi network!

**Share this URL with friends:**
```
http://192.168.68.122:5173
```

**Requirements:**
- Friends must be on the same WiFi network as you
- Both servers must be running (they are now!)
- Works on any device: iPhone, Android, laptop, tablet

**To keep it running:**
- Leave both terminal processes running
- Don't close your laptop or let it sleep

---

## Option 2: Internet Access (Anyone, Anywhere)

For friends not on your WiFi, use one of these services:

### A. ngrok (Recommended - Free & Easy)

1. **Install ngrok:**
   ```bash
   brew install ngrok
   ```

2. **Create free account:** https://ngrok.com/signup

3. **Get your auth token** from dashboard and run:
   ```bash
   ngrok config add-authtoken YOUR_TOKEN
   ```

4. **Start ngrok tunnel:**
   ```bash
   ngrok http 5173
   ```

5. **Share the URL** ngrok gives you (looks like: https://abc123.ngrok.io)

### B. Cloudflare Tunnel (Free, No Account Needed)

1. **Install:**
   ```bash
   brew install cloudflare/cloudflare/cloudflared
   ```

2. **Start tunnel:**
   ```bash
   cloudflared tunnel --url http://localhost:5173
   ```

3. **Share the URL** it generates

### C. localtunnel (Quick & Simple)

1. **Install:**
   ```bash
   npm install -g localtunnel
   ```

2. **Start tunnel:**
   ```bash
   lt --port 5173
   ```

3. **Share the URL** (like: https://random-name.loca.lt)

---

## Option 3: Deploy to Cloud (Production)

For permanent hosting, deploy to:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

---

## Current Status

✅ **Local Network Access:** http://192.168.68.122:5173
- Ready to use NOW
- Anyone on your WiFi can access it

⏳ **Internet Access:** Choose an option above
- Needed for friends not on your WiFi
- Takes 2-5 minutes to set up

---

## Testing Checklist

Share this with your testers:

- [ ] Open the URL on your device
- [ ] Try uploading a video (any video works for demo)
- [ ] Click "Analyze Swing" and wait for results
- [ ] Browse the Instructors page
- [ ] Check your Profile page
- [ ] Test on both mobile and desktop
- [ ] Try sharing results

---

## Troubleshooting

**Can't access the URL?**
- Make sure you're on the same WiFi network
- Check that both servers are still running
- Try restarting your device's WiFi

**App is slow?**
- Normal for local development
- Will be faster when deployed to cloud

**Need help?**
- Check that the terminal shows both servers running
- Restart servers: `npm run dev` and `npm run server`
