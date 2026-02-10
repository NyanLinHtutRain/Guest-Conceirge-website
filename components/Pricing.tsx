'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { t } = useLanguage()

  const setupFeatures = [
    t('setupFeature1'),
    t('setupFeature2'),
    t('setupFeature3'),
    t('setupFeature4'),
  ]

  const maintenanceFeatures = [
    t('maintenanceFeature1'),
    t('maintenanceFeature2'),
    t('maintenanceFeature3'),
    t('maintenanceFeature4'),
  ]

  return (
    <section ref={ref} className="py-24 relative">
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-brand-orange/10 via-transparent to-transparent"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
            {t('pricingTitle')}
          </motion.h2>
          <p className="text-xl text-gray-700 mt-4">{t('pricingSubtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* One-Time Setup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
            whileHover={{ y: -10 }}
          >
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-brand-rose via-brand-orange to-brand-crimson rounded-2xl blur opacity-30"
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2, repeat: Infinity },
              }}
            />
            <div className="relative bg-white/90 backdrop-blur-xl border border-brand-orange rounded-2xl p-8 shadow-xl">
              <motion.div 
                className="inline-block px-4 py-1 bg-brand-crimson/20 text-brand-crimson rounded-full text-sm font-semibold mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {t('launchOffer')}
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('lifetimeSetup')}</h3>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <motion.span 
                    className="text-5xl font-bold"
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
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' },
                      scale: { duration: 2, repeat: Infinity },
                    }}
                  >
                    SGD 50
                  </motion.span>
                  <span className="text-2xl text-red-500 line-through font-semibold">SGD 100</span>
                </div>
                <p className="text-gray-600 mt-2">{t('lifetimeAccess')}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {setupFeatures.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="https://wa.me/+60146250966"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 40px rgba(220, 20, 60, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="block w-full px-8 py-4 bg-[#DC143C] text-white font-semibold rounded-lg shadow-lg text-center"
              >
                <span className="relative drop-shadow-lg">{t('getStarted')}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Maintenance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-xl border border-brand-rose/40 rounded-2xl p-8 shadow-lg"
            whileHover={{ 
              y: -10,
              borderColor: 'rgba(250, 177, 47, 0.8)',
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('maintenance')}</h3>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <motion.span 
                  className="text-5xl font-bold"
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
                  $6.99
                </motion.span>
                <span className="text-gray-600">{t('perMonth')}</span>
              </div>
              <p className="text-gray-600 mt-2">{t('maintenanceDesc')}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {maintenanceFeatures.map((feature, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  </motion.div>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-700 text-center">
                <span className="text-brand-orange font-semibold">{t('cancelAnytime')}</span>
                <br />
                {t('noCommitment')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
