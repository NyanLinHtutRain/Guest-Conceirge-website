'use client'

import { motion } from 'framer-motion'
import { Phone, FileText, Frown, Zap, Star, Check } from 'lucide-react'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const oldWay = [
  { icon: Frown, text: 'Overwhelmed front desk', color: 'text-red-300' },
  { icon: FileText, text: 'Repetitive questions', color: 'text-red-300' },
  { icon: Phone, text: 'Missed inquiries', color: 'text-red-300' },
]

const newWay = [
  { icon: Zap, text: 'Instant 24/7 responses', color: 'text-brand-orange' },
  { icon: Star, text: 'Visual guides & maps', color: 'text-brand-orange' },
  { icon: Check, text: 'Happy guests & staff', color: 'text-brand-orange' },
]

export default function Comparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-orange/10 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold tracking-tight text-center mb-16"
          style={{
            background: 'linear-gradient(90deg, #DC143C 0%, #F75270 50%, #DC143C 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 20px rgba(220, 20, 60, 0.4))',
          }}
        >
          <motion.span
            animate={{
              backgroundPosition: ['0% center', '200% center'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              background: 'linear-gradient(90deg, #DC143C 0%, #F75270 50%, #DC143C 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Transform Your Guest Experience
          </motion.span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-xl border border-red-300 rounded-2xl p-8 shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-red-600">Without HostFlow</h3>
            <div className="space-y-6">
              {oldWay.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </motion.div>
                  <span className="text-lg text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* New Way */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-xl border border-brand-orange rounded-2xl p-8 relative overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-brand-rose/10 to-transparent"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <h3 className="text-2xl font-bold mb-6 text-brand-orange relative z-10">With HostFlow AI</h3>
            <div className="space-y-6 relative z-10">
              {newWay.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: '0 0 20px rgba(250, 129, 47, 0.4)',
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </motion.div>
                  <span className="text-lg text-gray-900">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
