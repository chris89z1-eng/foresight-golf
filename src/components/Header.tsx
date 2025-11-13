import { Link, useLocation } from 'react-router-dom'
import { Video, Users, User } from 'lucide-react'

export const Header = () => {
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path

  return (
    <header style={{
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link to="/" style={{
          fontSize: '24px',
          fontWeight: 600,
          color: '#1d1d1f',
          textDecoration: 'none',
          letterSpacing: '-0.5px'
        }}>
          ForeSight
        </Link>
        
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link to="/analysis" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: isActive('/analysis') ? '#0071e3' : '#1d1d1f',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500
          }}>
            <Video size={18} />
            Analysis
          </Link>
          
          <Link to="/instructors" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: isActive('/instructors') ? '#0071e3' : '#1d1d1f',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500
          }}>
            <Users size={18} />
            Instructors
          </Link>
          
          <Link to="/profile" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: isActive('/profile') ? '#0071e3' : '#1d1d1f',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500
          }}>
            <User size={18} />
            Profile
          </Link>
        </div>
      </nav>
    </header>
  )
}
