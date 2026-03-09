import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video';

export function Scene1() {
  return (
    <motion.div
      className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden"
      {...sceneTransitions.morphExpand}
    >
      <div className="w-full max-w-6xl px-8 md:px-16 text-center">
        <motion.h1
          className="font-display font-black tracking-tight leading-[0.95] text-white"
          style={{ fontSize: 'clamp(2.8rem, 9.4vw, 8.2rem)' }}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block">Code at the</span>
          <span className="block bg-gradient-to-b from-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            speed of thought.
          </span>
        </motion.h1>

        <motion.p
          className="mt-8 md:mt-10 mx-auto max-w-4xl text-zinc-400 font-body leading-snug"
          style={{ fontSize: 'clamp(1.05rem, 2.2vw, 2.7rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          A voice-native AI Integrated Development Environment. From
          beginners to professionals, build production-ready applications with zero
          friction.
        </motion.p>
      </div>
    </motion.div>
  );
}

