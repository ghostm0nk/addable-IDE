import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video';
import phonePreview from '../../../../../attached_assets/peg 2.png';

const bars = [12, 26, 40, 22, 50, 34, 18, 38, 24, 16, 30, 20, 42, 28, 14, 36, 22, 32, 18, 26];

const floatingTranslations = [
  { text: 'Build with your voice', pos: 'top-[10%] left-[8%]', delay: 0.1 },
  { text: 'Construye con tu voz', pos: 'top-[18%] right-[10%]', delay: 0.6 },
  { text: 'Construisez avec votre voix', pos: 'top-[40%] left-[4%]', delay: 1.1 },
  { text: 'Baue mit deiner Stimme', pos: 'top-[66%] left-[12%]', delay: 1.5 },
  { text: 'Construa com sua voz', pos: 'top-[76%] right-[8%]', delay: 2.0 },
  { text: 'Costruisci con la tua voce', pos: 'top-[30%] right-[4%]', delay: 2.4 },
  { text: 'Koen shengyin goujian', pos: 'top-[55%] right-[16%]', delay: 2.8 },
  { text: 'Koe de tsukuru', pos: 'top-[84%] left-[34%]', delay: 3.1 },
];

export function Scene2() {
  const [desktopMode, setDesktopMode] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDesktopMode((prev) => !prev);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden bg-black"
      {...sceneTransitions.slideLeft}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(72,72,86,0.35),rgba(0,0,0,0.96)_65%)]" />

      {floatingTranslations.map((item) => (
        <motion.div
          key={item.text}
          className={`absolute ${item.pos} pointer-events-none z-[1]`}
          initial={{ opacity: 0, y: 14, scale: 0.96 }}
          animate={{ opacity: [0, 0.5, 0], y: [14, 0, -14], scale: [0.96, 1, 1.02] }}
          transition={{ duration: 3.6, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
        >
          <span className="text-zinc-300/80 font-body text-lg md:text-2xl tracking-[0.02em] font-medium">
            {item.text}
          </span>
        </motion.div>
      ))}

      <div className="relative h-full w-full px-8 md:px-12 lg:px-16 py-10 md:py-12 z-10">
        <div className="h-full w-full grid grid-cols-1 lg:grid-cols-[0.95fr_1.25fr_1fr] gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="font-display font-black tracking-tight text-white leading-[0.88]"
              style={{ fontSize: 'clamp(3rem, 7.6vw, 7rem)' }}
            >
              <span className="block">voice</span>
              <span className="block bg-gradient-to-b from-zinc-200 to-zinc-500 bg-clip-text text-transparent">mode</span>
            </h2>
            <p className="mt-5 max-w-sm text-zinc-300 font-body leading-snug" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)' }}>
              Speak naturally. Archemist listens, understands, and writes the code.
            </p>
          </motion.div>

          <motion.div
            className="justify-self-center lg:justify-self-start lg:-ml-10 w-full max-w-[620px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-10 w-44 mx-auto rounded-full bg-zinc-700/70 p-[2px] relative overflow-hidden border border-white/20">
              <motion.div
                className="absolute top-[2px] bottom-[2px] rounded-full bg-white"
                animate={desktopMode ? { left: '52%', width: '46%' } : { left: '2px', width: '46%' }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="relative z-10 h-full flex items-center justify-between px-4 text-zinc-300">
                <span className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="7" y="3" width="10" height="18" rx="2.5" />
                  </svg>
                </span>
                <span className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="12" rx="1.8" />
                    <path d="M9 20h6" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <motion.div
                className="relative overflow-hidden border border-white/15 bg-zinc-950 p-2"
                animate={desktopMode ? { width: 560, height: 350, borderRadius: 20 } : { width: 380, height: 520, borderRadius: 30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={phonePreview}
                  alt="Onboarding screen"
                  className="w-full h-full object-cover rounded-[16px]"
                />
                <button className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-red-500 text-black font-display font-bold px-7 py-2.5 rounded-full border-2 border-black uppercase tracking-tight text-lg">
                  get started
                </button>
              </motion.div>
            </div>

            <div className="mt-4 h-16" />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 bottom-10 rounded-2xl bg-black/90 border border-white/15 h-16 px-3 flex items-center gap-1.5 overflow-hidden"
              animate={desktopMode ? { width: 560 } : { width: 380 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
              />
              {bars.map((h, i) => (
                <motion.span
                  key={i}
                  className="flex-1 rounded-full bg-white/90 min-w-[4px]"
                  animate={{ height: [10, h, 12] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.04, ease: 'easeInOut' }}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-xl text-white p-6 min-h-[190px] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between">
                <div className="font-display font-bold text-2xl tracking-tight">Task in progress</div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">Live</span>
              </div>
              <motion.ul className="mt-4 space-y-3 text-[15px] text-zinc-100" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } } }}>
                {['Listening to command', 'Extracting intent', 'Scaffolding components'].map((item) => (
                  <motion.li key={item} className="flex items-center gap-3" variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/8 backdrop-blur-xl text-white p-6 min-h-[190px] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between">
                <div className="font-display font-bold text-2xl tracking-tight">to do next</div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">Queue</span>
              </div>
              <motion.ul className="mt-4 space-y-3 text-[15px] text-zinc-100" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.85 } } }}>
                {['Generate auth routes', 'Connect Supabase schema', 'Create dashboard view'].map((item) => (
                  <motion.li key={item} className="flex items-center gap-3" variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>
                    <span className="h-2 w-2 rounded-full bg-zinc-300" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

