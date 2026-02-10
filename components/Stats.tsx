'use client'

import { motion } from 'framer-motion'
import { Clock, Star, Users } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Stats() {
  const { t } = useLanguage()
  
  const stats = [
    {
      icon: Clock,
      value: '< 3 secs',
      label: t('statResponseTime'),
      color: 'from-brand-crimson to-brand-pink',
    },
    {
      icon: Star,
      value: '5 Stars',
      label: t('statReviews'),
      color: 'from-brand-pink to-brand-rose',
    },
    {
      icon: Users,
      value: '100+',
      label: t('statHosts'),
      color: 'from-brand-rose to-brand-pink',
    },
  ]
  
  return (
    <section className="py-16 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-brand-crimson/5 via-brand-pink/10 to-brand-rose/5"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <motion.div
                className="bg-white/90 backdrop-blur-xl border-2 border-brand-pink/30 rounded-2xl p-8 text-center shadow-xl relative overflow-hidden"
                whileHover={{ 
                  borderColor: 'rgba(220, 20, 60, 0.6)',
                  boxShadow: '0 20px 60px rgba(220, 20, 60, 0.2)',
                }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0`}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className="relative z-10"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                >
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-4xl font-bold mb-2"
                    style={{
                      background: 'linear-gradient(90deg, #DC143C 0%, #F75270 50%, #DC143C 100%)',
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 0 10px rgba(220, 20, 60, 0.3))',
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
                    {stat.value}
                  </motion.h3>
                  
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
