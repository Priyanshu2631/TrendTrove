import React from 'react';
import { motion } from 'framer-motion';

function CategoryCard(props) {
  return (
    <div className="mx-5 my-2 flex flex-col ">
      <motion.img
        initial={{ opacity: 0, y: 50, scale: 0 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.1,
          type: 'spring',
          stiffness: 110,
          delay: (props.index % 4) * 0.3,
        }}
        src={props.image}
        className="h-52 w-40 object-cover rounded-lg"
        alt={props.title}
      />

      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          type: 'spring',
          stiffness: 110,
          delay: (props.index % 4) * 0.3 + 0.3,
        }}
        className="mt-2 "
      >
        {props.title}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          type: 'spring',
          stiffness: 110,
          delay: (props.index % 4) * 0.3 + 0.3,
        }}
        className=""
      >
        {props.discount}
      </motion.p>
    </div>
  );
}

export default CategoryCard;
