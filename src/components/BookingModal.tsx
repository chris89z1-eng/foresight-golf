import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Calendar, Clock, DollarSign, CreditCard } from 'lucide-react'

interface Instructor {
  id: number
  name: string
  price: number
  image: string
}

interface BookingModalProps {
  instructor: Instructor
  onClose: () => void
  onBook: (date: string, time: string) => void
}

export const BookingModal = ({ instructor, onClose, onBook }: BookingModalProps) => {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'google'>('card')

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ]

  const handleBook = () => {
    if (selectedDate && selectedTime) {
      onBook(selectedDate, selectedTime)
    }
  }

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
          maxWidth: '500px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700 }}>Book Session</h2>
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

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>{instructor.image}</div>
          <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>{instructor.name}</h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#0071e3' }}>
            <DollarSign size={18} />
            <span style={{ fontSize: '18px', fontWeight: 600 }}>${instructor.price}/hour</span>
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontWeight: 600 }}>
            <Calendar size={20} color="#0071e3" />
            Select Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '12px',
              border: '2px solid #e8e8ed',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontWeight: 600 }}>
            <Clock size={20} color="#0071e3" />
            Select Time
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            {availableTimes.map(time => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: selectedTime === time ? '2px solid #0071e3' : '2px solid #e8e8ed',
                  background: selectedTime === time ? '#f0f7ff' : 'white',
                  color: selectedTime === time ? '#0071e3' : '#1d1d1f',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: selectedTime === time ? 600 : 400
                }}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontWeight: 600 }}>
            <CreditCard size={20} color="#0071e3" />
            Payment Method
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { id: 'card', label: 'Credit/Debit Card' },
              { id: 'apple', label: 'Apple Pay' },
              { id: 'google', label: 'Google Pay' }
            ].map(method => (
              <button
                key={method.id}
                onClick={() => setPaymentMethod(method.id as any)}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  border: paymentMethod === method.id ? '2px solid #0071e3' : '2px solid #e8e8ed',
                  background: paymentMethod === method.id ? '#f0f7ff' : 'white',
                  color: '#1d1d1f',
                  cursor: 'pointer',
                  fontSize: '16px',
                  textAlign: 'left',
                  fontWeight: paymentMethod === method.id ? 600 : 400
                }}
              >
                {method.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleBook}
          disabled={!selectedDate || !selectedTime}
          style={{
            width: '100%',
            background: selectedDate && selectedTime ? '#0071e3' : '#d2d2d7',
            color: 'white',
            border: 'none',
            padding: '16px',
            borderRadius: '12px',
            fontSize: '17px',
            fontWeight: 600,
            cursor: selectedDate && selectedTime ? 'pointer' : 'not-allowed'
          }}
        >
          Confirm Booking - ${instructor.price}
        </button>
      </motion.div>
    </motion.div>
  )
}
