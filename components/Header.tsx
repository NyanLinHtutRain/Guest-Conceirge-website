'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useLanguage()
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-xl border-b border-brand-pink/20 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
          >
            {/* Spinning Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <MessageCircle className="w-7 h-7 sm:w-10 sm:h-10 text-brand-crimson" />
            </motion.div>

            {/* Logo Text */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h1 
                className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight"
                style={{
                  background: 'linear-gradient(90deg, #DC143C 0%, #F75270 50%, #DC143C 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 10px rgba(220, 20, 60, 0.3))',
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
                  HostFlow AI
                </motion.span>
              </h1>
            </motion.div>
          </motion.div>

          {/* Right Side: Language Switcher & CTA Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSwitcher />
            
            <motion.a
              href="https://app.aihostflow.com/23ke-gnkq"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(220, 20, 60, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:inline-block px-4 sm:px-6 py-2 sm:py-2.5 bg-[#DC143C] text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg whitespace-nowrap"
            >
              {t('liveDemoBtn')}
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  )
}
