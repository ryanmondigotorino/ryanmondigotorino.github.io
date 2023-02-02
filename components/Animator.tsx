/* eslint-disable react/jsx-props-no-spreading */
import type { Variants } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatorProps {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
  key?: string | number;
}

const Animator: React.FC<AnimatorProps> = ({ children, ...props }) => {
  const control = useAnimation();
  const [motionRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div ref={motionRef} animate={control} initial="hidden" {...props}>
      {children}
    </motion.div>
  );
};

export default Animator;
