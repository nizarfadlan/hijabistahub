export const fadeIn = (dir, i=1, d=0) => ({
  initial: {
    y: dir === 'up' ? 60 : -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: d,
      duration: 0.5 * i,
      ease: "easeInOut",
    },
  },
})

export const fadeInSide = (dir, i=1, d) => ({
  initial: {
    x: dir === 'right' ? 60 : -60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: d,
      duration: 0.5 * i,
      ease: "easeInOut",
    },
  },
})

export const bounceLeft = (i) => ({
  initial: {
    x: 0,
  },
  animate: {
    x: [10, -5, 10],
    transition: {
      delay: 1,
      duration: 1 * i,
      ease: "linear",
      repeat: Infinity,
    },
  },
})

export const fadeInHidden = (dir, i=1, d=0) => ({
  hidden: {
    y: dir === 'up' ? 60 : -60,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: d,
      duration: 0.5 * i,
      ease: "easeInOut",
    },
  },
})

export const fadeInSideHidden = (dir, i=1, d) => ({
  hidden: {
    x: dir === 'right' ? 60 : -60,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: d,
      duration: 0.5 * i,
      ease: "easeInOut",
    },
  },
})

export const scaleHide = (i=1, d) => ({
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    duration: 0.4 * i,
    delay: d,
    ease: "easeInOut"
  },
})

export const exitEnter = () => ({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
})

export const fade = (i, d) => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: d,
      duration: 0.5 * i,
      ease: "easeInOut",
    },
  },
})
