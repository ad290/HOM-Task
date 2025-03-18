import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 1111111111',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'Marketing@houseofmarktech.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Gurgaon Sector 46, E block Bharat City Ghaziabad',
    },
  ];

  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const glowVariants = {
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        <img
          src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-5 transition-transform duration-1000"
        />
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Have questions? We're here to help. Reach out and let's start a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 backdrop-blur-sm bg-gray-900/50 p-6 sm:p-8 rounded-xl border border-gray-800/50">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <motion.div
                    variants={glowVariants}
                    whileHover="hover"
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
                    <div className="relative bg-gray-800 p-3 sm:p-4 rounded-lg border border-gray-700/50">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                      {info.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 backdrop-blur-sm bg-gray-900/50 p-6 sm:p-8 rounded-xl border border-gray-800/50 shadow-2xl"
            >
              {['name', 'email', 'message'].map((field) => (
                <div key={field} className="group relative">
                  <label
                    htmlFor={field}
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2 group-hover:text-blue-400 transition-colors duration-300"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={field}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-800/50 border border-gray-700/30 text-white placeholder-gray-500 text-sm sm:text-base focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 hover:bg-gray-800/70"
                      required
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-800/50 border border-gray-700/30 text-white placeholder-gray-500 text-sm sm:text-base focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 hover:bg-gray-800/70"
                      required
                    />
                  )}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </div>
              ))}
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 sm:py-4 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold text-sm sm:text-base relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message <Send className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}