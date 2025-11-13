# 🚀 Quick Share Guide - ForeSight

## ✅ OPTION 1: Local Network (READY NOW!)

**Your app is already live and accessible!**

### Share with friends on the same WiFi:
```
http://192.168.68.122:5173
```

**How to use:**
1. Make sure your friends are on the same WiFi network as you
2. Send them the URL above
3. They can open it on any device (phone, tablet, laptop)
4. That's it! They can start using ForeSight immediately

**Keep these running:**
- Don't close the terminal windows
- Keep your computer awake
- Stay connected to WiFi

---

## 🌐 OPTION 2: Internet Access (For Remote Friends)

Choose ONE of these methods:

### Method A: localtunnel (Easiest)

**Install:**
```bash
sudo npm install -g localtunnel
```
(Enter your Mac password when prompted)

**Start tunnel:**
```bash
lt --port 5173
```

**Result:** You'll get a URL like `https://random-name.loca.lt`
- Share this URL with anyone, anywhere
- Works on any device with internet
- Free, no account needed

---

### Method B: ngrok (Most Reliable)

**Install:**
1. Download from: https://ngrok.com/download
2. Unzip and move to Applications
3. Sign up for free account at: https://ngrok.com/signup
4. Get your auth token from dashboard

**Setup:**
```bash
./ngrok config add-authtoken YOUR_TOKEN_HERE
```

**Start tunnel:**
```bash
./ngrok http 5173
```

**Result:** You'll get a URL like `https://abc123.ngrok.io`
- Very reliable and fast
- Free tier includes HTTPS
- Dashboard to see traffic

---

### Method C: Cloudflare Tunnel (No Account)

**Download:**
https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/

**Start tunnel:**
```bash
cloudflared tunnel --url http://localhost:5173
```

**Result:** Instant public URL
- No account needed
- Fast and secure
- Free forever

---

## 📱 What Your Testers Can Do

Once they have the URL, they can:

1. **Upload Videos**
   - Click "Analysis" in the menu
   - Upload any video file (golf swing or test video)
   - Click "Analyze Swing"
   - See AI feedback and scoring

2. **Browse Instructors**
   - Click "Instructors" in the menu
   - View professional golf coaches
   - See ratings, pricing, certifications
   - Click to book sessions

3. **Check Profile**
   - View stats and progress
   - See recent analyses
   - Track improvements

4. **Test on Different Devices**
   - iPhone/Android phones
   - iPads/tablets
   - Laptops/desktops
   - Different browsers

---

## 🎯 Quick Start Commands

**If you need to restart everything:**

```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend  
npm run server

# Terminal 3 - Tunnel (if using localtunnel)
lt --port 5173
```

---

## 💡 Pro Tips

1. **For best testing experience:**
   - Use localtunnel or ngrok for remote testers
   - Keep local network URL for people nearby
   - Test on both mobile and desktop

2. **If tunnel URL stops working:**
   - Just restart the tunnel command
   - You'll get a new URL
   - Share the new URL with testers

3. **For production deployment:**
   - See SHARING.md for Vercel/Netlify options
   - These give you a permanent URL
   - Better performance and reliability

---

## 🆘 Troubleshooting

**"Connection refused" error:**
- Make sure both servers are running
- Check that you're using the correct URL
- Try restarting the dev server

**Tunnel not working:**
- Check your internet connection
- Try a different tunnel service
- Restart the tunnel command

**App is slow:**
- Normal for development mode
- Tunnels add some latency
- Deploy to cloud for production speed

---

## Current Status

✅ **Local Network:** http://192.168.68.122:5173 (LIVE NOW)
⏳ **Internet Access:** Run one of the tunnel commands above

Both frontend (port 5173) and backend (port 3001) are running!
