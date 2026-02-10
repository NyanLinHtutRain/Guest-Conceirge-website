'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MessageCircle, Sparkles, CheckCircle, Star } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Storyboard() {
  const { t } = useLanguage()
  
  const storySteps = [
    {
      image: '/images/image 1.jpeg',
      step: '1',
      title: t('step1Title'),
      description: t('step1Desc'),
      icon: MessageCircle,
      color: 'from-brand-crimson to-brand-pink',
    },
    {
      image: '/images/image 2.jpeg',
      step: '2',
      title: t('step2Title'),
      description: t('step2Desc'),
      icon: Sparkles,
      color: 'from-brand-pink to-brand-rose',
    },
    {
      image: '/images/image 3.jpeg',
      step: '3',
      title: t('step3Title'),
      description: t('step3Desc'),
      icon: CheckCircle,
      color: 'from-brand-rose to-brand-pink',
    },
    {
      image: '/images/image 4.jpeg',
      step: '4',
      title: t('step4Title'),
      description: t('step4Desc'),
      icon: Star,
      color: 'from-brand-pink to-brand-crimson',
    },
  ]
  
  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-brand-cream via-brand-rose/10 to-brand-cream"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
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
            {t('storyboardTitle')}
          </motion.h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t('storyboardSubtitle')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16">
          {storySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <motion.div
                className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`absolute -inset-4 bg-gradient-to-r ${step.color} rounded-3xl opacity-20 blur-2xl`}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                className={`${index % 2 === 1 ? 'md:order-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.step}
                  </motion.div>
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-10 h-10 text-brand-crimson" />
                  </motion.div>
                </div>

                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>


            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://app.aihostflow.com/23ke-gnkq"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 40px rgba(220, 20, 60, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#DC143C] text-white font-semibold rounded-lg shadow-lg"
          >
            <Sparkles className="w-5 h-5" />
            {t('tryLiveDemo')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
