import { motion } from 'framer-motion';
import introImage from '../../../../../attached_assets/Untitled.jpeg';

export function IntroScene() {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full overflow-hidden"
      initial={{ opacity: 0, scale: 1.03 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src={introImage}
        alt="Archemist intro"
        className="w-full h-full object-cover"
      />

      <motion.div
        className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/18 to-transparent mix-blend-screen"
        initial={{ x: '-20%' }}
        animate={{ x: '420%' }}
        transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1.4 }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

      <motion.div
        className="absolute inset-x-0 bottom-10 z-20 flex items-center justify-center"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <motion.svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white/90 drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M18 18L32 32L46 18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 34L32 48L46 34" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}
