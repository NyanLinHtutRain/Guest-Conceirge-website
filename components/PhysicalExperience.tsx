'use client'

import { motion } from 'framer-motion'
import { QrCode } from 'lucide-react'

export default function PhysicalExperience() {
  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-brand-rose/10 via-transparent to-transparent"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
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
            className="text-4xl lg:text-6xl font-bold tracking-tight mb-8"
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
            Print the QR code and stick in the room!
          </motion.h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Simple, elegant, and instantly accessible for your guests
          </p>
        </motion.div>

        {/* WiFi Card Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ duration: 0.3 }}
            className="relative"
            style={{ perspective: '1000px' }}
          >
            {/* Card Shadow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-brand-rose/20 blur-2xl transform translate-y-8" />
            
            {/* WiFi Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-12 border border-brand-orange/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left: QR Code */}
                <motion.div 
                  className="flex flex-col items-center"
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <div className="relative">
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-brand-rose to-brand-orange rounded-2xl opacity-20 blur-xl"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="relative bg-white p-6 rounded-2xl border-4 border-brand-orange shadow-lg">
                      <div className="w-48 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                        <QrCode className="w-32 h-32 text-white" />
                      </div>
                    </div>
                  </div>
                  <motion.p 
                    className="mt-4 text-sm font-semibold text-brand-orange"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Scan for Guest Services
                  </motion.p>
                </motion.div>

                {/* Right: Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome!</h3>
                    <p className="text-gray-600">Scan the QR code to ask:</p>
                  </div>
                  
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-orange rounded-full" />
                      WiFi Password
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-orange rounded-full" />
                      House Rules
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-orange rounded-full" />
                      Visual Guides
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-orange rounded-full" />
                      24/7 AI Assistant
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      Need help? Just scan and ask!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bedside Table Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-500 italic">
              Place on bedside table, reception desk, or anywhere guests can easily see it
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
