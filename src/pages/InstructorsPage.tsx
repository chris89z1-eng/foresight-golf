import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, MapPin, DollarSign, Award, Calendar, Search } from 'lucide-react'
import { BookingModal } from '../components/BookingModal'

interface Instructor {
  id: number
  name: string
  rating: number
  reviews: number
  location: string
  price: number
  specialty: string
  experience: string
  image: string
  certifications: string[]
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    rating: 4.9,
    reviews: 127,
    location: 'Pebble Beach, CA',
    price: 150,
    specialty: 'Swing Mechanics',
    experience: '15 years',
    image: '👩‍🏫',
    certifications: ['PGA Certified', 'TPI Level 3']
  },
  {
    id: 2,
    name: 'James Rodriguez',
    rating: 4.8,
    reviews: 94,
    location: 'Augusta, GA',
    price: 120,
    specialty: 'Short Game',
    experience: '12 years',
    image: '👨‍🏫',
    certifications: ['PGA Certified', 'Trackman Certified']
  },
  {
    id: 3,
    name: 'Emily Chen',
    rating: 5.0,
    reviews: 156,
    location: 'Scottsdale, AZ',
    price: 180,
    specialty: 'Full Swing Analysis',
    experience: '18 years',
    image: '👩‍💼',
    certifications: ['PGA Master Professional', 'TPI Level 3', 'K-Vest Certified']
  },
  {
    id: 4,
    name: 'Michael Thompson',
    rating: 4.7,
    reviews: 83,
    location: 'Palm Springs, CA',
    price: 100,
    specialty: 'Beginner Friendly',
    experience: '8 years',
    image: '👨‍💼',
    certifications: ['PGA Certified', 'AimPoint Certified']
  }
]

export const InstructorsPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null)
  const [bookingInstructor, setBookingInstructor] = useState<Instructor | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterPrice, setFilterPrice] = useState<'all' | 'low' | 'mid' | 'high'>('all')

  const handleBook = (date: string, time: string) => {
    alert(`Booked session with ${bookingInstructor?.name} on ${date} at ${time}!`)
    setBookingInstructor(null)
    setSelectedInstructor(null)
  }

  const filteredInstructors = instructors.filter(instructor => {
    const matchesSearch = instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         instructor.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = filterPrice === 'all' ||
                        (filterPrice === 'low' && instructor.price < 120) ||
                        (filterPrice === 'mid' && instructor.price >= 120 && instructor.price < 160) ||
                        (filterPrice === 'high' && instructor.price >= 160)
    return matchesSearch && matchesPrice
  })

  return (
    <main style={{ flex: 1, padding: '48px 24px', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px', letterSpacing: '-1px' }}>
        Professional Instructors
      </h1>
      <p style={{ fontSize: '18px', color: '#6e6e73', marginBottom: '32px' }}>
        Connect with certified golf professionals for personalized coaching
      </p>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '250px', position: 'relative' }}>
          <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#6e6e73' }} />
          <input
            type="text"
            placeholder="Search instructors or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 14px 14px 48px',
              borderRadius: '12px',
              border: '2px solid #e8e8ed',
              fontSize: '16px',
              outline: 'none'
            }}
          />
        </div>
        <select
          value={filterPrice}
          onChange={(e) => setFilterPrice(e.target.value as any)}
          style={{
            padding: '14px 16px',
            borderRadius: '12px',
            border: '2px solid #e8e8ed',
            fontSize: '16px',
            cursor: 'pointer',
            background: 'white'
          }}
        >
          <option value="all">All Prices</option>
          <option value="low">Under $120</option>
          <option value="mid">$120 - $160</option>
          <option value="high">$160+</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
        {filteredInstructors.map((instructor, i) => (
          <motion.div
            key={instructor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            whileHover={{ transform: 'translateY(-4px)', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)' }}
            onClick={() => setSelectedInstructor(instructor)}
          >
            <div style={{ fontSize: '64px', textAlign: 'center', marginBottom: '16px' }}>
              {instructor.image}
            </div>
            
            <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '8px', textAlign: 'center' }}>
              {instructor.name}
            </h3>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={16} fill="#FFB800" color="#FFB800" />
                <span style={{ fontWeight: 600 }}>{instructor.rating}</span>
              </div>
              <span style={{ color: '#6e6e73', fontSize: '14px' }}>({instructor.reviews} reviews)</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6e6e73', fontSize: '14px' }}>
                <MapPin size={16} />
                {instructor.location}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6e6e73', fontSize: '14px' }}>
                <Award size={16} />
                {instructor.specialty}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6e6e73', fontSize: '14px' }}>
                <DollarSign size={16} />
                ${instructor.price}/hour
              </div>
            </div>

            <button 
              onClick={(e) => {
                e.stopPropagation()
                setBookingInstructor(instructor)
              }}
              style={{
                width: '100%',
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
              <Calendar size={18} />
              Book Session
            </button>
          </motion.div>
        ))}
      </div>

      {selectedInstructor && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedInstructor(null)}
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
            zIndex: 1000,
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
              padding: '40px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto'
            }}
          >
            <div style={{ fontSize: '80px', textAlign: 'center', marginBottom: '24px' }}>
              {selectedInstructor.image}
            </div>
            
            <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '12px', textAlign: 'center' }}>
              {selectedInstructor.name}
            </h2>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={20} fill="#FFB800" color="#FFB800" />
                <span style={{ fontWeight: 600, fontSize: '18px' }}>{selectedInstructor.rating}</span>
              </div>
              <span style={{ color: '#6e6e73' }}>({selectedInstructor.reviews} reviews)</span>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>About</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MapPin size={20} color="#0071e3" />
                  <span>{selectedInstructor.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Award size={20} color="#0071e3" />
                  <span>{selectedInstructor.specialty} • {selectedInstructor.experience} experience</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <DollarSign size={20} color="#0071e3" />
                  <span>${selectedInstructor.price} per hour</span>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Certifications</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedInstructor.certifications.map((cert, i) => (
                  <span key={i} style={{
                    background: '#f5f5f7',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 500
                  }}>
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setBookingInstructor(selectedInstructor)}
              style={{
                width: '100%',
                background: '#0071e3',
                color: 'white',
                border: 'none',
                padding: '18px',
                borderRadius: '12px',
                fontSize: '17px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
              <Calendar size={20} />
              Book a Session with {selectedInstructor.name}
            </button>
          </motion.div>
        </motion.div>
      )}

      {bookingInstructor && (
        <BookingModal
          instructor={bookingInstructor}
          onClose={() => setBookingInstructor(null)}
          onBook={handleBook}
        />
      )}
    </main>
  )
}
