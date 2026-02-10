'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Language } from '@/lib/translations'

const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
  { code: 'ms' as Language, name: 'Malay', flag: '🇲🇾' },
  { code: 'id' as Language, name: 'Indonesian', flag: '🇮🇩' },
  { code: 'vi' as Language, name: 'Vietnamese', flag: '🇻🇳' },
  { code: 'th' as Language, name: 'Thai', flag: '🇹🇭' },
]

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const currentLang = languages.find(lang => lang.code === language) || languages[0]

  const handleLanguageChange = (code: Language) => {
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-crimson/10 to-brand-pink/10 backdrop-blur-xl border border-brand-pink/30 rounded-lg shadow-md hover:border-brand-crimson/50 transition-colors"
      >
        <span className="text-2xl">{currentLang.flag}</span>
        <span className="hidden sm:inline text-sm font-medium text-brand-crimson">{currentLang.name}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4 text-brand-crimson" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl border-2 border-brand-pink/30 rounded-xl shadow-2xl overflow-hidden z-50"
            >
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  whileHover={{ 
                    backgroundColor: 'rgba(220, 20, 60, 0.1)',
                    x: 5,
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    language === lang.code ? 'bg-brand-crimson/10' : ''
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="text-sm font-medium text-gray-700">{lang.name}</span>
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto w-2 h-2 bg-brand-crimson rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
