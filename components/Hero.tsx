'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Image as ImageIcon, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const chatMessages: Array<{
    sender: string;
    text: string;
    type?: string;
    src?: string;
  }> = [
    { sender: 'guest', text: "How do I turn on the heater? It's cold." },
    { sender: 'ai', text: 'The switch is here. Look at the photo here.' },
    { sender: 'ai', type: 'image', text: 'Heater Switch', src: '/images/heater-switch.jpg' },
    { sender: 'ai', type: 'image', text: 'Heater Photo', src: '/images/heater-photo.jpg' },
    { sender: 'guest', text: 'Found it. Thanks!' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-brand-rose/30 via-brand-cream to-brand-cream"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Animated particles - Fixed positions */}
      {[
        { left: '10%', top: '15%', delay: 0 },
        { left: '25%', top: '30%', delay: 0.5 },
        { left: '40%', top: '20%', delay: 1 },
        { left: '55%', top: '40%', delay: 1.5 },
        { left: '70%', top: '25%', delay: 0.3 },
        { left: '85%', top: '35%', delay: 0.8 },
        { left: '15%', top: '60%', delay: 1.2 },
        { left: '30%', top: '75%', delay: 0.6 },
        { left: '45%', top: '65%', delay: 1.8 },
        { left: '60%', top: '80%', delay: 0.4 },
        { left: '75%', top: '70%', delay: 1.4 },
        { left: '90%', top: '85%', delay: 0.9 },
        { left: '20%', top: '50%', delay: 1.6 },
        { left: '50%', top: '10%', delay: 0.7 },
        { left: '80%', top: '55%', delay: 1.1 },
        { left: '35%', top: '90%', delay: 1.3 },
        { left: '65%', top: '5%', delay: 0.2 },
        { left: '5%', top: '45%', delay: 1.7 },
        { left: '95%', top: '60%', delay: 0.5 },
        { left: '12%', top: '85%', delay: 1.9 },
      ].map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-brand-pink rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 relative">
                <motion.span 
                  className="relative inline-block"
                  style={{
                    background: 'linear-gradient(90deg, #DC143C 0%, #F75270 50%, #DC143C 100%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 20px rgba(220, 20, 60, 0.4)) drop-shadow(0 0 40px rgba(247, 82, 112, 0.3))',
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
                  Your Hotel Lobby, Powered by AI.
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              HostFlow AI handles guest questions 24/7. From check-in instructions to amenity details, your AI chatbot delivers instant, accurate responses.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://guest-concierge-g4zv13gke-nyan-lin-htuts-projects.vercel.app/23ke-gnkq"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 40px rgba(250, 129, 47, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-[#DC143C] text-white font-semibold rounded-lg overflow-hidden shadow-lg text-center"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                  style={{ opacity: 0.2 }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  See Live Demo
                </span>
              </motion.a>
              
              <motion.a
                href="https://wa.me/+60146250966"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(250, 129, 47, 1)',
                  backgroundColor: 'rgba(250, 129, 47, 0.1)',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-brand-orange text-brand-orange font-semibold rounded-lg transition-all shadow-md text-center"
              >
                Book via WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Mock Phone UI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative mx-auto w-full max-w-sm">
              {/* Phone Frame */}
              <motion.div 
                className="bg-white/90 backdrop-blur-xl border border-brand-pink/30 rounded-3xl p-6 shadow-2xl relative max-h-[600px] overflow-y-auto"
                animate={{
                  y: [0, -10, 0],
                  boxShadow: [
                    '0 20px 60px rgba(247, 82, 112, 0.2)',
                    '0 30px 80px rgba(247, 82, 112, 0.3)',
                    '0 20px 60px rgba(247, 82, 112, 0.2)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-brand-crimson via-brand-pink to-brand-crimson rounded-3xl opacity-10 blur"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-brand-pink/20">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    >
                      <MessageCircle className="w-5 h-5 text-brand-pink" />
                    </motion.div>
                    <span className="font-semibold text-gray-900">HostFlow AI</span>
                    <motion.div 
                      className="ml-auto w-2 h-2 bg-brand-pink rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                <div className="space-y-4 pb-4">
                  {chatMessages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.5 + 0.5, duration: 0.4 }}
                      className={`flex ${msg.sender === 'guest' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.type === 'image' ? (
                        <motion.div 
                          className="bg-brand-rose/30 border border-brand-pink/30 rounded-lg p-3 max-w-[80%]"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <motion.div
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <ImageIcon className="w-4 h-4 text-brand-pink" />
                            </motion.div>
                            <span className="text-sm text-gray-700">{msg.text}</span>
                          </div>
                          {msg.src ? (
                            <motion.div 
                              className="w-full rounded-lg overflow-hidden bg-gray-100"
                              animate={{ opacity: [0.9, 1, 0.9] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Image 
                                src={msg.src} 
                                alt={msg.text}
                                width={300}
                                height={225}
                                className="w-full h-auto object-cover"
                                unoptimized
                              />
                            </motion.div>
                          ) : (
                            <motion.div 
                              className="w-full h-32 bg-gradient-to-br from-brand-rose/40 to-brand-pink/30 rounded-lg flex items-center justify-center"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <ImageIcon className="w-8 h-8 text-gray-400" />
                            </motion.div>
                          )}
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className={`px-4 py-3 rounded-2xl max-w-[80%] ${
                            msg.sender === 'guest'
                              ? 'bg-brand-pink text-white border border-brand-pink'
                              : 'bg-gray-100 border border-gray-200 text-gray-900'
                          }`}
                        >
                          {msg.text}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
