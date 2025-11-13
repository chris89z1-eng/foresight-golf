import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Video, TrendingUp, Users, Share2 } from 'lucide-react'

export const HomePage = () => {
  return (
    <main style={{ flex: 1 }}>
      <section style={{
        background: 'linear-gradient(135deg, #0071e3 0%, #00c896 100%)',
        color: 'white',
        padding: '120px 24px',
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{
            fontSize: '64px',
            fontWeight: 700,
            marginBottom: '24px',
            letterSpacing: '-2px'
          }}>
            Perfect Your Swing
          </h1>
          <p style={{
            fontSize: '24px',
            marginBottom: '48px',
            opacity: 0.95,
            maxWidth: '600px',
            margin: '0 auto 48px'
          }}>
            AI-powered golf swing analysis with professional coaching at your fingertips
          </p>
          <Link to="/analysis">
            <button style={{
              background: 'white',
              color: '#0071e3',
              border: 'none',
              padding: '16px 48px',
              fontSize: '18px',
              fontWeight: 600,
              borderRadius: '980px',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Start Analysis
            </button>
          </Link>
        </motion.div>
      </section>

      <section style={{
        maxWidth: '1200px',
        margin: '80px auto',
        padding: '0 24px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px'
        }}>
          {[
            { icon: Video, title: 'Upload & Analyze', desc: 'Upload your swing video and get instant AI feedback' },
            { icon: TrendingUp, title: 'Visual Insights', desc: 'See angle overlays and posture corrections' },
            { icon: Users, title: 'Pro Coaching', desc: 'Connect with certified golf instructors' },
            { icon: Share2, title: 'Share Progress', desc: 'Share your improvements with friends' }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: 'white',
                padding: '32px',
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                textAlign: 'center'
              }}
            >
              <feature.icon size={48} style={{ color: '#0071e3', marginBottom: '16px' }} />
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#6e6e73', fontSize: '16px', lineHeight: '1.5' }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
