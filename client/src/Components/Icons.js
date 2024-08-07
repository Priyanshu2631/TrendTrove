import React from 'react';
import { motion } from 'framer-motion';

function Icons() {
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          type: 'spring',
          stiffness: 100,
          delay: 0.3,
        }}
        className="flex items-center"
      >
        <img
          src="https://cdn.shopify.com/s/files/1/0679/7862/5318/files/premium-Quality-1.png?v=1675661534"
          width="200"
          alt=""
        />
        <div className="border-l border-gray-600 h-24"></div>
        <img
          src="https://cdn.shopify.com/s/files/1/0679/7862/5318/files/secure-payment.png?v=1675661534"
          width="200"
          alt=""
        />
        <div className="border-l border-gray-600 h-24"></div>
        <img
          src="https://cdn.shopify.com/s/files/1/0679/7862/5318/files/express-shipping.png?v=1675661534"
          width="200"
          alt=""
        />
      </motion.div>
    </div>
  );
}

export default Icons;
