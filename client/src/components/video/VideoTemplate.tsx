import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Waitlist, useUser } from '@clerk/clerk-react';
import { IntroScene } from './video_scenes/IntroScene';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

export default function VideoTemplate() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const { isSignedIn, user } = useUser();

  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 34,
    restDelta: 0.001,
  });

  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    return smoothProgress.on('change', (latest) => {
      const clamped = Math.min(Math.max(latest, 0), 0.9999);
      const sceneIndex = Math.min(Math.floor(clamped * 6), 5);
      setCurrentScene(sceneIndex);
    });
  }, [smoothProgress]);

  const closeWaitlist = () => setShowWaitlist(false);

  return (
    <div ref={containerRef} className="h-[900vh] bg-black">
      <nav className="fixed top-0 left-0 w-full z-[100] px-8 py-6 flex justify-between items-center mix-blend-difference">
        <div className="font-display font-bold text-2xl text-white tracking-tighter">ARCHEMIST</div>
        <div className="flex items-center gap-8">
          <button
            onClick={() => setShowAbout(true)}
            className="text-white font-display text-sm uppercase tracking-widest hover:opacity-60 transition-opacity cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => setShowWaitlist(true)}
            className="bg-white text-black px-6 py-2 rounded-full font-display text-sm font-bold hover:scale-105 transition-transform cursor-pointer"
          >
            {isSignedIn ? 'Dashboard' : 'Waitlist'}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {showAbout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-8"
          >
            <div className="max-w-2xl text-center relative">
              <button
                onClick={() => setShowAbout(false)}
                className="absolute -top-20 right-0 text-white hover:rotate-90 transition-transform cursor-pointer"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-white font-display text-4xl font-bold mb-6 leading-tight">
                Archemist IDE: The Future of Voice-Native Development
              </h2>
              <div className="text-gray-400 font-body text-lg leading-relaxed space-y-4 text-left">
                <p>
                  Archemist is a voice-native AI Integrated Development Environment, designed to bridge the gap between imagination and production. Whether you're a beginner or a professional, Archemist allows you to build at the speed of thought.
                </p>
                <p>
                  Our <strong>Stegnet</strong> engine transforms design context into production-ready code. By annotating buttons, views, and components, you provide the context your AI agent needs to autonomously code the backend, handling complex flows like authentication and database integrations with ease.
                </p>
                <p>
                  <strong>Every agent can ship faster, but not every agent tells you when your MVP is ready.</strong> At Archemist IDE, your agentic environment takes care of that. It doesn't just write code; it understands the production lifecycle and ensures your application is truly ship-ready.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showWaitlist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[220] bg-black"
          >
            <button
              onClick={closeWaitlist}
              className="absolute top-6 right-6 z-20 text-white hover:rotate-90 transition-transform cursor-pointer"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="h-full w-full flex items-center justify-center p-6 md:p-10">
              {isSignedIn ? (
                <div className="w-full max-w-2xl bg-white rounded-3xl p-10 text-center shadow-2xl">
                  <h2 className="text-black font-display text-4xl font-bold mb-4">Welcome back!</h2>
                  <p className="text-gray-500 mb-8">You're already on the list as {user?.primaryEmailAddress?.emailAddress}.</p>
                  <button onClick={closeWaitlist} className="w-full bg-black text-white py-4 rounded-2xl font-display font-bold">
                    Return to Explore
                  </button>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-full max-w-md"><Waitlist routing="hash" afterSignInUrl="/" signInUrl="/#sign-in" /></div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          {currentScene === 0 && <IntroScene key="intro-scene" />}
          {currentScene === 1 && <Scene1 key="scene1" />}
          {currentScene === 2 && <Scene2 key="scene2" />}
          {currentScene === 3 && <Scene3 key="scene3" />}
          {currentScene === 4 && <Scene4 key="scene4" />}
          {currentScene === 5 && <Scene5 key="scene5" onWaitlistClick={() => setShowWaitlist(true)} />}
        </AnimatePresence>

        <div className="absolute bottom-8 left-8 z-[100] mix-blend-difference">
          <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-white opacity-40">IDE 1.0.0_BETA</div>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${currentScene === i ? 'h-8 bg-black' : 'bg-black/20'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

