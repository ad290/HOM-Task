import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const plans = [
  {
    name: 'Starter',
    price: 1999,
    features: ['5 Team Members', '10GB Storage', 'Basic Support'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Professional',
    price: 6999,
    features: ['15 Team Members', '50GB Storage', 'Priority Support', 'Advanced Analytics'],
    color: 'from-purple-500 to-purple-600',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 19999,
    features: ['Unlimited Team Members', '500GB Storage', '24/7 Support', 'Custom Solutions'],
    color: 'from-indigo-500 to-indigo-600',
  },
];

export function Pricing() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hover: {
      y: -15,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 0 25px rgba(255, 255, 255, 0.3)',
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 sm:mb-6">
            Simple Pricing Plans
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Choose the perfect plan tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-xs sm:max-w-none mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative ${plan.popular ? 'sm:-mt-8 lg:-mt-10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 sm:px-6 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="h-full bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className={`bg-gradient-to-r ${plan.color} rounded-xl p-4 sm:p-6 mb-6 relative z-10`}>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">₹{plan.price}</span>
                    <span className="text-gray-200 ml-2 text-sm sm:text-base">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      </motion.div>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`w-full py-3 sm:py-4 rounded-lg bg-gradient-to-r ${plan.color} text-white font-semibold text-sm sm:text-base relative overflow-hidden group/button transition-all duration-300`}
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover/button:translate-x-0 transition-transform duration-500" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm sm:text-base">
            Need help choosing?{' '}
            <a href="#contact" className="text-blue-400 hover:text-blue-300 transition-colors">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}