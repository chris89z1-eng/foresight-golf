import { motion } from 'framer-motion'
import { TrendingUp, Video, Award, Share2, Calendar } from 'lucide-react'

export const ProfilePage = () => {
  const stats = [
    { label: 'Analyses', value: '24', icon: Video },
    { label: 'Avg Score', value: '78', icon: TrendingUp },
    { label: 'Lessons', value: '8', icon: Award },
    { label: 'Shared', value: '12', icon: Share2 }
  ]

  const recentAnalyses = [
    { date: '2 days ago', score: 82, improvement: '+5' },
    { date: '1 week ago', score: 77, improvement: '+3' },
    { date: '2 weeks ago', score: 74, improvement: '+2' }
  ]

  return (
    <main style={{ flex: 1, padding: '48px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '32px' }}>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
            }}
          >
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0071e3, #00c896)',
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              color: 'white',
              fontWeight: 700
            }}>
              JD
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
              John Doe
            </h2>
            <p style={{ color: '#6e6e73', fontSize: '15px', marginBottom: '24px' }}>
              Member since Jan 2024
            </p>
            <button style={{
              width: '100%',
              background: '#f5f5f7',
              color: '#1d1d1f',
              border: 'none',
              padding: '12px',
              borderRadius: '12px',
              fontSize: '15px',
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: '12px'
            }}>
              Edit Profile
            </button>
            <button style={{
              width: '100%',
              background: '#0071e3',
              color: 'white',
              border: 'none',
              padding: '12px',
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
              Share Profile
            </button>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '32px', letterSpacing: '-1px' }}>
              Your Progress
            </h1>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '24px',
                    textAlign: 'center',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <stat.icon size={32} style={{ color: '#0071e3', marginBottom: '12px' }} />
                  <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '4px' }}>
                    {stat.value}
                  </div>
                  <div style={{ color: '#6e6e73', fontSize: '14px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
              marginBottom: '32px'
            }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>
                Recent Analyses
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {recentAnalyses.map((analysis, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px',
                      background: '#f5f5f7',
                      borderRadius: '12px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <Calendar size={20} color="#6e6e73" />
                      <span style={{ fontSize: '15px' }}>{analysis.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#0071e3'
                      }}>
                        {analysis.score}
                      </span>
                      <span style={{
                        background: '#00c896',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: 600
                      }}>
                        {analysis.improvement}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #0071e3, #00c896)',
              borderRadius: '16px',
              padding: '32px',
              color: 'white',
              textAlign: 'center'
            }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>
                Keep Improving!
              </h2>
              <p style={{ fontSize: '16px', marginBottom: '24px', opacity: 0.95 }}>
                You're on track to reach your goals. Upload another swing to continue your progress.
              </p>
              <button style={{
                background: 'white',
                color: '#0071e3',
                border: 'none',
                padding: '14px 32px',
                borderRadius: '980px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                New Analysis
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
