# ForeSight - AI Golf Swing Analysis

A polished, Apple-style UI app for golfers to upload swing videos, get AI-powered feedback, and connect with professional instructors.

## Features

- 🎥 **Video Upload & Analysis** - Upload swing videos and receive instant AI feedback
- 📊 **Visual Insights** - Get detailed scoring and improvement suggestions
- 👨‍🏫 **Professional Instructors** - Browse and book sessions with certified golf pros
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Apple-Style UI** - Clean, modern interface inspired by Apple's design language
- 🔗 **Social Sharing** - Share your progress with friends

## Quick Start

### Installation

```bash
npm install
```

### Development

Run the frontend (Vite dev server):
```bash
npm run dev
```

Run the backend API (in a separate terminal):
```bash
npm run server
```

The app will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

### Access from Other Devices

To access from mobile or other devices on your network:

1. Find your local IP address:
   - Mac: System Preferences → Network
   - Or run: `ifconfig | grep "inet " | grep -v 127.0.0.1`

2. Access the app at: `http://YOUR_IP:5173`
   - Example: `http://192.168.1.100:5173`

3. Make sure both devices are on the same WiFi network

### Production Build

```bash
npm run build
npm run preview
```

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Inline styles with Apple design principles
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router
- **Backend**: Express.js, Node.js
- **File Upload**: Multer

## Project Structure

```
ForeSight/
├── src/
│   ├── components/
│   │   └── Header.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AnalysisPage.tsx
│   │   ├── InstructorsPage.tsx
│   │   └── ProfilePage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── server/
│   └── index.js
└── package.json
```

## Future Enhancements

- Real AI/ML integration for swing analysis
- Video annotation with angle overlays
- Payment processing for instructor bookings
- User authentication
- Social features and friend connections
- Mobile app (React Native)
- Advanced analytics dashboard

## License

MIT
