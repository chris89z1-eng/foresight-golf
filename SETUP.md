# ForeSight Setup Guide

## Prerequisites

You'll need Node.js installed to run this app. Here's how to install it:

### Install Node.js (Choose one method)

**Option 1: Using Homebrew (Recommended for Mac)**
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

**Option 2: Download from nodejs.org**
1. Visit https://nodejs.org/
2. Download the LTS version (recommended)
3. Run the installer

**Option 3: Using nvm (Node Version Manager)**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
```

### Verify Installation

After installing, verify Node.js and npm are working:
```bash
node --version
npm --version
```

## Running ForeSight

Once Node.js is installed:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **In a new terminal, start the backend:**
   ```bash
   npm run server
   ```

4. **Access the app:**
   - On your computer: http://localhost:5173
   - On mobile/other devices: http://YOUR_LOCAL_IP:5173

## Finding Your Local IP

**On Mac:**
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

Or check: System Preferences → Network

**Example:** If your IP is 192.168.1.100, access the app at:
- http://192.168.1.100:5173

Make sure all devices are on the same WiFi network!

## Troubleshooting

**Port already in use?**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

**Dependencies not installing?**
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

Once running, you can:
- Upload golf swing videos on the Analysis page
- Browse professional instructors
- View your profile and progress
- Share results with friends

Enjoy using ForeSight! 🏌️‍♂️
