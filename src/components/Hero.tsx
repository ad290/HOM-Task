import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center">
      {/* Overlay with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-black/90 animate-gradient-slow" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[90%] sm:max-w-[80%] lg:max-w-[60%] perspective-1000">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            {/* 3D Animated Title */}
            <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold 
                         bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                         bg-clip-text text-transparent animate-gradient
                         transform hover:scale-105 transition-transform duration-300
                         hover:rotate-x-12 cursor-default
                         [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)]"
                style={{
                  transform: 'perspective(1000px) rotateX(10deg)',
                  transformStyle: 'preserve-3d',
                }}
            >
              Marketing Ignites
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10" />
            </h1>

            {/* Animated Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light
                         relative z-10 px-4 py-2 rounded-lg backdrop-blur-sm
                         border border-white/10 shadow-xl
                         hover:border-white/20 transition-all duration-300"
            >
              Technology Transforms, Sales Soar!
            </motion.p>

            {/* Animated CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-8 py-4 bg-white text-black rounded-full
                         font-semibold flex items-center gap-2 mx-auto
                         overflow-hidden transform hover:translate-y-[-2px]
                         transition-all duration-300 ease-out
                         before:absolute before:inset-0
                         before:bg-gradient-to-r before:from-blue-400 before:via-purple-500 before:to-pink-500
                         before:translate-x-[-100%] before:hover:translate-x-0
                         before:transition-transform before:duration-300
                         hover:text-white hover:border-transparent"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
        }

        .animate-gradient-slow {
          animation: gradient-shift 15s ease infinite;
          background-size: 200% 200%;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-x-12 {
          transform: rotateX(12deg);
        }
      `}</style>
    </div>
  );
}