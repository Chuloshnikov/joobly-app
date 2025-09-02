"use client";

import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";

interface AnimatedImageProps extends ImageProps {
  duration?: number;
  delay?: number;
}

const AnimatedImage = ({ duration = 1.5, delay = 0, ...props }: AnimatedImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={props.className}
    >
      <Image {...props} />
    </motion.div>
  );
};

export default AnimatedImage;