import { motion } from 'framer-motion'
import { X, Facebook, Twitter, Linkedin, Mail, Link as LinkIcon, MessageCircle } from 'lucide-react'

interface ShareModalProps {
  onClose: () => void
  title: string
  url: string
}

export const ShareModal = ({ onClose, title, url }: ShareModalProps) => {
  const shareOptions = [
    { 
      name: 'Copy Link', 
      icon: LinkIcon, 
      color: '#6e6e73',
      action: () => {
        navigator.clipboard.writeText(url)
        alert('Link copied to clipboard!')
      }
    },
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      color: '#25D366',
      action: () => window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank')
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      color: '#1877F2',
      action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      color: '#1DA1F2',
      action: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      color: '#0A66C2',
      action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
    },
    { 
      name: 'Email', 
      icon: Mail, 
      color: '#EA4335',
      action: () => window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: '24px'
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          borderRadius: '20px',
          padding: '32px',
          maxWidth: '400px',
          width: '100%'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700 }}>Share</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            <X size={24} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {shareOptions.map(option => (
            <button
              key={option.name}
              onClick={option.action}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                padding: '16px',
                background: 'white',
                border: '2px solid #e8e8ed',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = option.color
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#e8e8ed'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <option.icon size={32} color={option.color} />
              <span style={{ fontSize: '12px', fontWeight: 500, color: '#1d1d1f' }}>
                {option.name}
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
