import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Upload, Play, Share2, Download } from 'lucide-react'

interface Analysis {
  score: number
  feedback: string[]
  improvements: string[]
}

export const AnalysisPage = () => {
  const [video, setVideo] = useState<string | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<Analysis | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setVideo(url)
      setAnalysis(null)
    }
  }

  const analyzeSwing = async () => {
    setAnalyzing(true)
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 2500))
    
    setAnalysis({
      score: 82,
      feedback: [
        'Excellent hip rotation at impact',
        'Good weight transfer through the swing',
        'Maintain spine angle throughout backswing'
      ],
      improvements: [
        'Widen your stance by 2 inches for better stability',
        'Keep your left arm straighter during backswing',
        'Follow through should extend 15° higher'
      ]
    })
    setAnalyzing(false)
  }

  return (
    <main style={{ flex: 1, padding: '48px 24px', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '48px', letterSpacing: '-1px' }}>
        Swing Analysis
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: video ? '1fr 1fr' : '1fr', gap: '32px' }}>
        <div>
          {!video ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => fileInputRef.current?.click()}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '80px 40px',
                textAlign: 'center',
                cursor: 'pointer',
                border: '2px dashed #d2d2d7',
                transition: 'all 0.3s'
              }}
              whileHover={{ borderColor: '#0071e3', scale: 1.02 }}
            >
              <Upload size={64} style={{ color: '#0071e3', marginBottom: '24px' }} />
              <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px' }}>
                Upload Your Swing
              </h2>
              <p style={{ color: '#6e6e73', fontSize: '16px' }}>
                Click to select a video file or drag and drop
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </motion.div>
          ) : (
            <div style={{ background: 'white', borderRadius: '16px', padding: '24px' }}>
              <video
                ref={videoRef}
                src={video}
                controls
                style={{ width: '100%', borderRadius: '12px', marginBottom: '24px' }}
              />
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={analyzeSwing}
                  disabled={analyzing}
                  style={{
                    flex: 1,
                    background: analyzing ? '#d2d2d7' : '#0071e3',
                    color: 'white',
                    border: 'none',
                    padding: '16px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 600,
                    cursor: analyzing ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <Play size={20} />
                  {analyzing ? 'Analyzing...' : 'Analyze Swing'}
                </button>
                <button
                  onClick={() => {
                    setVideo(null)
                    setAnalysis(null)
                  }}
                  style={{
                    background: '#f5f5f7',
                    color: '#1d1d1f',
                    border: 'none',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  New Video
                </button>
              </div>
            </div>
          )}
        </div>

        {analysis && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ background: 'white', borderRadius: '16px', padding: '32px' }}
          >
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: 700 }}>Analysis Results</h2>
                <div style={{
                  background: 'linear-gradient(135deg, #0071e3, #00c896)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontSize: '24px',
                  fontWeight: 700
                }}>
                  {analysis.score}/100
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#00c896' }}>
                ✓ What You're Doing Well
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {analysis.feedback.map((item, i) => (
                  <li key={i} style={{
                    padding: '12px 16px',
                    background: '#f5f5f7',
                    borderRadius: '8px',
                    marginBottom: '8px',
                    fontSize: '15px'
                  }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#0071e3' }}>
                → Areas for Improvement
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {analysis.improvements.map((item, i) => (
                  <li key={i} style={{
                    padding: '12px 16px',
                    background: '#f5f5f7',
                    borderRadius: '8px',
                    marginBottom: '8px',
                    fontSize: '15px'
                  }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={{
                flex: 1,
                background: '#0071e3',
                color: 'white',
                border: 'none',
                padding: '14px',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <Share2 size={18} />
                Share
              </button>
              <button style={{
                flex: 1,
                background: '#f5f5f7',
                color: '#1d1d1f',
                border: 'none',
                padding: '14px',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <Download size={18} />
                Export
              </button>
            </div>

            <div style={{
              marginTop: '24px',
              padding: '20px',
              background: 'linear-gradient(135deg, #f5f5f7, #e8e8ed)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '15px', marginBottom: '12px', color: '#6e6e73' }}>
                Want personalized coaching?
              </p>
              <button style={{
                background: '#0071e3',
                color: 'white',
                border: 'none',
                padding: '12px 32px',
                borderRadius: '980px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                Find an Instructor
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  )
}
