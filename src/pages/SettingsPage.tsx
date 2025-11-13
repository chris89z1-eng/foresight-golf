import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bell, Lock, User, CreditCard, Globe, Moon, HelpCircle, LogOut } from 'lucide-react'

export const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [autoAnalysis, setAutoAnalysis] = useState(true)

  const settingsSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Edit Profile', action: () => alert('Edit Profile'), toggle: false },
        { icon: Lock, label: 'Privacy & Security', action: () => alert('Privacy Settings'), toggle: false },
        { icon: CreditCard, label: 'Payment Methods', action: () => alert('Payment Methods'), toggle: false }
      ]
    },
    {
      title: 'Preferences',
      items: [
        { 
          icon: Bell, 
          label: 'Push Notifications', 
          toggle: true,
          value: notifications,
          onChange: setNotifications
        },
        { 
          icon: Moon, 
          label: 'Dark Mode', 
          toggle: true,
          value: darkMode,
          onChange: setDarkMode
        },
        {
          icon: Globe,
          label: 'Auto-Analyze Videos',
          toggle: true,
          value: autoAnalysis,
          onChange: setAutoAnalysis
        }
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & FAQ', action: () => alert('Help Center'), toggle: false },
        { icon: Globe, label: 'About ForeSight', action: () => alert('Version 1.0.0'), toggle: false }
      ]
    }
  ]

  return (
    <main style={{ flex: 1, padding: '48px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '48px', letterSpacing: '-1px' }}>
        Settings
      </h1>

      {settingsSections.map((section, i) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          style={{ marginBottom: '32px' }}
        >
          <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#6e6e73' }}>
            {section.title}
          </h2>
          <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)' }}>
            {section.items.map((item, index) => (
              <div
                key={item.label}
                onClick={'action' in item ? item.action : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                  borderBottom: index < section.items.length - 1 ? '1px solid #e8e8ed' : 'none',
                  cursor: 'action' in item ? 'pointer' : 'default',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => 'action' in item && (e.currentTarget.style.background = '#f5f5f7')}
                onMouseOut={(e) => 'action' in item && (e.currentTarget.style.background = 'white')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <item.icon size={24} color="#0071e3" />
                  <span style={{ fontSize: '16px', fontWeight: 500 }}>{item.label}</span>
                </div>
                
                {item.toggle && 'value' in item && 'onChange' in item ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      item.onChange(!item.value)
                    }}
                    style={{
                      width: '51px',
                      height: '31px',
                      borderRadius: '16px',
                      border: 'none',
                      background: item.value ? '#0071e3' : '#d2d2d7',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'background 0.3s'
                    }}
                  >
                    <div style={{
                      width: '27px',
                      height: '27px',
                      borderRadius: '50%',
                      background: 'white',
                      position: 'absolute',
                      top: '2px',
                      left: item.value ? '22px' : '2px',
                      transition: 'left 0.3s',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                    }} />
                  </button>
                ) : (
                  <span style={{ color: '#6e6e73', fontSize: '14px' }}>›</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        onClick={() => alert('Logged out')}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          padding: '16px',
          background: 'white',
          border: '2px solid #ff3b30',
          borderRadius: '12px',
          color: '#ff3b30',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          marginTop: '32px'
        }}
      >
        <LogOut size={20} />
        Log Out
      </motion.button>
    </main>
  )
}
