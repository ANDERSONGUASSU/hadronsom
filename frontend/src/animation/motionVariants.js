// src/animations/motionVariants.js

// --- FADE TRANSITIONS ---

// Suave transição para aparecer de baixo para cima
export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20, duration: 0.6 },
  },
};

// Suave transição para aparecer da esquerda para a direita
export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.5 },
  },
};

// Suave transição para aparecer da direita para a esquerda
export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.5 },
  },
};

// --- SCALE TRANSITIONS ---

// Aumenta suavemente o componente
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.4 },
  },
};

// --- ROTATE TRANSITIONS ---

// Efeito de rotação suave
export const rotateIn = {
  hidden: { opacity: 0, rotate: -90 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 50, damping: 15, duration: 0.7 },
  },
};

// Desaparece enquanto gira
export const fadeOutRotate = {
  visible: { opacity: 1, rotate: 0 },
  hidden: {
    opacity: 0,
    rotate: 90,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

// --- SLIDE TRANSITIONS ---

// Efeito de slide para cima e desaparecer
export const slideOutUp = {
  visible: { opacity: 1, y: 0 },
  hidden: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// Efeito de slide para baixo e desaparecer
export const slideOutDown = {
  visible: { opacity: 1, y: 0 },
  hidden: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// --- SPECIAL EFFECTS ---

// Efeito de pulsar
export const pulse = {
  hidden: { opacity: 0.8, scale: 0.95 },
  visible: {
    opacity: [0.8, 1],
    scale: [0.95, 1],
    transition: { duration: 0.6, repeat: Infinity, repeatType: "reverse" },
  },
};

// Suave fade-in com atraso
export const fadeInDelayed = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, delay: 0.3 },
  },
};

// Efeito de pulo (bounce)
export const bounce = {
  hidden: { y: 0 },
  visible: {
    y: [-20, 0, -10, 0],
    transition: { type: "spring", stiffness: 150, damping: 10, duration: 0.8 },
  },
};

// Fade com zoom e rotação
export const zoomRotate = {
  hidden: { opacity: 0, scale: 0.8, rotate: -45 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 120, damping: 8, duration: 0.8 },
  },
};

// --- STAGGERED ANIMATIONS (for lists) ---

// atrasa cada filho animado, criando o efeito em cadeia
export const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// animação aplicada individualmente a cada filho
export const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
