'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Sparkles, Zap, Star, Heart, Shield, Wifi, Coffee, Key, MapPin, Phone, Clock } from 'lucide-react'

export default function FloatingElements() {
  const icons = [
    { Icon: MessageCircle, delay: 0, duration: 6, x: '10%', y: '20%' },
    { Icon: Sparkles, delay: 1, duration: 8, x: '80%', y: '15%' },
    { Icon: Zap, delay: 2, duration: 7, x: '15%', y: '70%' },
    { Icon: Star, delay: 0.5, duration: 9, x: '85%', y: '60%' },
    { Icon: Heart, delay: 1.5, duration: 7, x: '5%', y: '45%' },
    { Icon: Shield, delay: 2.5, duration: 8, x: '90%', y: '85%' },
    { Icon: Wifi, delay: 0.8, duration: 7, x: '25%', y: '30%' },
    { Icon: Coffee, delay: 1.2, duration: 8, x: '70%', y: '40%' },
    { Icon: Key, delay: 1.8, duration: 6, x: '40%', y: '10%' },
    { Icon: MapPin, delay: 2.2, duration: 9, x: '60%', y: '75%' },
    { Icon: Phone, delay: 0.3, duration: 7, x: '30%', y: '90%' },
    { Icon: Clock, delay: 1.6, duration: 8, x: '95%', y: '35%' },
  ]

  const circles = [
    { width: 180, height: 150, left: '20%', top: '25%', duration: 15 },
    { width: 220, height: 200, left: '75%', top: '10%', duration: 18 },
    { width: 160, height: 180, left: '10%', top: '60%', duration: 20 },
    { width: 200, height: 170, left: '85%', top: '70%', duration: 16 },
    { width: 190, height: 190, left: '50%', top: '45%', duration: 22 },
    { width: 140, height: 160, left: '35%', top: '80%', duration: 17 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map((item, idx) => (
        <motion.div
          key={`icon-${idx}`}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <item.Icon className="w-8 h-8 text-brand-rose/20" />
        </motion.div>
      ))}
      
      {/* Floating circles */}
      {circles.map((circle, idx) => (
        <motion.div
          key={`circle-${idx}`}
          className="absolute rounded-full bg-gradient-to-br from-brand-rose/10 to-brand-orange/10 blur-xl"
          style={{
            width: circle.width,
            height: circle.height,
            left: circle.left,
            top: circle.top,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
