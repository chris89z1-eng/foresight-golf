import express from 'express'
import cors from 'cors'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../dist')))

// Configure multer for video uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage })

// Mock AI analysis endpoint
app.post('/api/analyze', upload.single('video'), async (req, res) => {
  try {
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const analysis = {
      score: Math.floor(Math.random() * 20) + 75,
      feedback: [
        'Excellent hip rotation at impact',
        'Good weight transfer through the swing',
        'Maintain spine angle throughout backswing'
      ],
      improvements: [
        'Widen your stance by 2 inches for better stability',
        'Keep your left arm straighter during backswing',
        'Follow through should extend 15° higher'
      ],
      videoPath: req.file?.path
    }
    
    res.json(analysis)
  } catch (error) {
    res.status(500).json({ error: 'Analysis failed' })
  }
})

// Get instructors
app.get('/api/instructors', (req, res) => {
  const instructors = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      rating: 4.9,
      reviews: 127,
      location: 'Pebble Beach, CA',
      price: 150,
      specialty: 'Swing Mechanics',
      experience: '15 years'
    }
  ]
  res.json(instructors)
})

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`ForeSight running on port ${PORT}`)
})
