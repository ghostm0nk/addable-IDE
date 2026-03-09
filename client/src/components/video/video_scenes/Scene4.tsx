import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video';
import peg4Video from '../../../../../attached_assets/peg 4.mp4';

export function Scene4() {
  return (
    <motion.div
      className="absolute inset-0 bg-black overflow-hidden"
      {...sceneTransitions.fadeBlur}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.12),rgba(0,0,0,0.95)_60%)]" />

      <div className="relative z-10 h-full w-full px-8 md:px-14 py-12 flex flex-col items-center justify-center text-center">
        <motion.h2
          className="font-display font-black leading-[0.95] text-white"
          style={{ fontSize: 'clamp(2rem, 4.8vw, 4.6rem)' }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block">Shipping has become faster.</span>
          <span className="block bg-gradient-to-b from-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            AI can build fast, but can't make you efficient.
          </span>
        </motion.h2>

        <motion.div
          className="mt-8 w-full max-w-4xl rounded-3xl overflow-hidden border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.55)] bg-zinc-950"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <video
            src={peg4Video}
            className="w-full h-[52vh] min-h-[300px] max-h-[520px] object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>

        <motion.p
          className="mt-8 font-display font-bold text-zinc-100"
          style={{ fontSize: 'clamp(1.2rem, 2.2vw, 2rem)' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          At Archemist, it becomes a production environment and keeps feature creep out.
        </motion.p>
      </div>
    </motion.div>
  );
}

