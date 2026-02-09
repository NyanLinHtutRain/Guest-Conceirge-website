'use client'

import { motion } from 'framer-motion'
import { Eye, QrCode, Globe, Shield } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Visual Intelligence',
    description: "Don't just tell them. Show them. Send photos, maps, and visual guides for complex questions like amenities and directions.",
    icon: Eye,
    span: 'lg:col-span-2',
    gradient: 'from-brand-pink/30 to-brand-rose/30',
  },
  {
    title: 'Zero App Download',
    description: 'Guests scan a QR code in your lobby. Instant access, no login required.',
    icon: QrCode,
    span: 'lg:col-span-1',
    gradient: 'from-brand-crimson/30 to-brand-pink/30',
  },
  {
    title: 'Multi-Language',
    description: 'Fluent in 95+ languages. Perfect for international guests.',
    icon: Globe,
    span: 'lg:col-span-1',
    gradient: 'from-brand-rose/30 to-brand-pink/30',
  },
  {
    title: 'Smart Handoff',
    description: 'Escalates to your staff only when human touch is needed.',
    icon: Shield,
    span: 'lg:col-span-2',
    gradient: 'from-brand-pink/20 to-brand-crimson/20',
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${feature.span} group`}
    >
      <motion.div 
        className="h-full bg-white/80 backdrop-blur-xl border border-brand-orange/30 rounded-2xl p-8 hover:border-brand-orange transition-all duration-300 relative overflow-hidden shadow-lg"
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 20px 60px rgba(250, 129, 47, 0.3)',
        }}
      >
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />
        
        <div className="relative z-10">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
          >
            <feature.icon className="w-12 h-12 text-brand-orange mb-4" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-3 tracking-tight text-gray-900">{feature.title}</h3>
          <p className="text-gray-700 leading-relaxed">{feature.description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-brand-pink/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{
              background: 'linear-gradient(90deg, #DC143C 0%, #F75270 50%, #DC143C 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(220, 20, 60, 0.4))',
            }}
            animate={{
              backgroundPosition: ['0% center', '200% center'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            Built for Modern Hotels
          </motion.h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Everything you need to automate guest communication and elevate your service.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
