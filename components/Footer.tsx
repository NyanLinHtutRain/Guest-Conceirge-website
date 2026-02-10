'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="py-16 border-t border-brand-orange/20 relative overflow-hidden bg-white/50">
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-brand-rose/5 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('getInTouch')}</h3>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <motion.a
              href="mailto:acidr37@gmail.com"
              className="flex items-center gap-2 text-gray-700 hover:text-brand-orange transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              acidr37@gmail.com
            </motion.a>
            
            <motion.a
              href="https://wa.me/+60146250966"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Chat with us on {t('contactWhatsApp')}
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-brand-orange/20">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <MessageCircle className="w-6 h-6 text-brand-orange" />
            </motion.div>
            <span className="font-bold text-lg text-gray-900">HostFlow AI</span>
          </motion.div>

          <div className="flex gap-8 text-sm text-gray-600">
            <motion.a 
              href="/terms" 
              className="hover:text-brand-orange transition-colors"
              whileHover={{ y: -2 }}
            >
              {t('termsConditions')}
            </motion.a>
            <motion.a 
              href="/privacy" 
              className="hover:text-brand-orange transition-colors"
              whileHover={{ y: -2 }}
            >
              {t('privacyPolicy')}
            </motion.a>
          </div>

          <p className="text-sm text-gray-600">
            © 2026 HostFlow AI. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  )
}
