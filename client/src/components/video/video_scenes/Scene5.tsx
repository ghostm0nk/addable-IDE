import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video';

type Scene5Props = {
  onWaitlistClick?: () => void;
};

export function Scene5({ onWaitlistClick }: Scene5Props) {
  return (
    <motion.div
      className="absolute inset-0 bg-black flex flex-col items-center justify-center text-white"
      {...sceneTransitions.morphExpand}
    >
      <motion.div
        className="w-full h-full absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:40px_40px] opacity-10"
        animate={{ scale: [1, 1.5], opacity: [0.1, 0] }}
        transition={{ duration: 4, ease: 'easeOut' }}
      />

      <div className="relative z-20 flex flex-col items-center">
        <div className="relative flex items-center justify-center pointer-events-none">
          <motion.div
            className="absolute w-28 h-28 rounded-full border border-white/45"
            animate={{ scale: [1, 1.9], opacity: [0.65, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute w-28 h-28 rounded-full border border-white/35"
            animate={{ scale: [1, 2.2], opacity: [0.55, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 0.35 }}
          />
          <motion.div
            className="w-5 h-5 rounded-full bg-white shadow-[0_0_28px_rgba(255,255,255,0.7)]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <motion.button
          onClick={onWaitlistClick}
          className="mt-16 bg-white text-black font-display font-bold text-3xl px-20 py-6 rounded-full shadow-[0_14px_44px_rgba(255,255,255,0.24)] hover:scale-[1.02] transition-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          Waitlist
        </motion.button>
      </div>
    </motion.div>
  );
}
