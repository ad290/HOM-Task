import React from 'react';
import { Zap, Shield, Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing fast performance with our optimized solutions.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80',
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    description: 'Built with security-first mindset to protect your valuable data.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
  },
  {
    icon: Rocket,
    title: 'Scale with Ease',
    description: 'Grow your business without worrying about technical limitations.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80',
  },
];

export function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)',
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.05),transparent_70%)]" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4 sm:mb-6">
            Our Premium Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Discover cutting-edge solutions to transform your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg h-[350px] sm:h-[400px] md:h-[450px]"
            >
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90 transition-opacity duration-300 group-hover:bg-gradient-to-b group-hover:from-black/20 group-hover:via-black/40 group-hover:to-black/95" />
              </div>

              <div className="relative p-4 sm:p-6 md:p-8 h-full flex flex-col justify-end z-10">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="relative inline-block mb-4 sm:mb-6"
                >
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
                  <service.icon className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </motion.div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-blue-200 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-100 transition-colors duration-300">
                  {service.description}
                </p>

                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full inline-flex items-center gap-2 relative overflow-hidden group/button w-full sm:w-auto text-sm sm:text-base"
                >
                  <span className="relative z-10">Learn More</span>
                  <ArrowRight className="w-4 h-4 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform -translate-x-full group-hover/button:translate-x-0 transition-transform duration-500" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}