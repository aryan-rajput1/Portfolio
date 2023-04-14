import React from 'react';
import { motion } from 'framer-motion';

const BouncingLetter = ({ letter }) => {
  return (
    <motion.span
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="inline-block"
    >
      {letter}
    </motion.span>
  );
};

export default BouncingLetter;
