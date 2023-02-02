import type { Variants } from "framer-motion";

const variantDefaultValue = {
  visible: {},
  hidden: {},
};

export const animatorVariants = {
  motionZoomIn({ visible, hidden }: Variants = variantDefaultValue): Variants {
    return {
      visible: {
        scale: 1,
        opacity: 1,
        transition: { type: "linear", duration: 0.5 },
        ...visible,
      },
      hidden: { scale: 0.75, opacity: 0, ...hidden },
    };
  },
  motionDownToUp({ visible, hidden }: Variants = variantDefaultValue) {
    return {
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "linear", duration: 0.5 },
        ...visible,
      },
      hidden: { y: 100, opacity: 0, ...hidden },
    };
  },
  motionLeftToRight({ visible, hidden }: Variants = variantDefaultValue) {
    return {
      visible: {
        x: 0,
        opacity: 1,
        transition: { type: "linear", duration: 0.5 },
        ...visible,
      },
      hidden: { x: -100, opacity: 0, ...hidden },
    };
  },
  motionRightToLeft({ visible, hidden }: Variants = variantDefaultValue) {
    return {
      visible: {
        x: 0,
        opacity: 1,
        transition: { type: "linear", duration: 0.5 },
        ...visible,
      },
      hidden: { x: 100, opacity: 0, ...hidden },
    };
  },
};

export const getAnimatorVariant = (key: number) => {
  switch (key) {
    case 0:
      return animatorVariants.motionLeftToRight();
    case 1:
      return animatorVariants.motionDownToUp();
    case 2:
      return animatorVariants.motionRightToLeft();
    default:
      throw new Error("Invalid Animator Variant key");
  }
};
