import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { sceneTransitions } from '@/lib/video';
import peg3Img from '../../../../../attached_assets/peg 3.png';

type BlockType = 'login' | 'pricing' | 'cta';

type PlacedBlock = {
  id: string;
  type: BlockType;
  x: number;
  y: number;
};

const LIBRARY: { type: BlockType; label: string }[] = [
  { type: 'login', label: 'Login Block' },
  { type: 'pricing', label: 'Pricing Card' },
  { type: 'cta', label: 'CTA Button' },
];

const LABELS: Record<BlockType, string> = {
  login: 'Login Block',
  pricing: 'Pricing Card',
  cta: 'CTA Button',
};

const NOTES: Record<BlockType, string> = {
  login: 'Add validation + social login buttons',
  pricing: 'Attach Stripe plan IDs to each tier',
  cta: 'Open Stripe checkout on click',
};

function blockClass(type: BlockType): string {
  if (type === 'login') return 'h-12 rounded-xl bg-black/75 text-white border border-white/25';
  if (type === 'pricing') return 'h-16 rounded-xl bg-white/35 text-white border border-white/45';
  return 'h-11 rounded-full bg-blue-500/90 text-white border border-white/35';
}

export function Scene3() {
  const [placedBlocks, setPlacedBlocks] = useState<PlacedBlock[]>([]);
  const [dropHover, setDropHover] = useState(false);

  const hasAny = placedBlocks.length > 0;

  const canPlaceAt = (x: number, y: number) => {
    return x >= 0 && y >= 0 && x <= 720 && y <= 520;
  };

  const sortedBlocks = useMemo(() => [...placedBlocks], [placedBlocks]);

  const addBlock = (type: BlockType, x: number, y: number) => {
    const id = `${type}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    setPlacedBlocks((prev) => [...prev, { id, type, x, y }]);
  };

  return (
    <motion.div className="absolute inset-0 bg-black overflow-hidden" {...sceneTransitions.clipPolygon}>
      <img src={peg3Img} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-black/35" />

      <div className="relative z-10 h-full w-full px-8 md:px-12 lg:px-16 py-10">
        <div className="h-full w-full grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-8 items-center">
          <div className="max-w-xl">
            <h2 className="font-display font-black text-white leading-[0.86]" style={{ fontSize: 'clamp(3rem, 8vw, 6.8rem)' }}>
              <span className="block">Stegnet</span>
              <span className="block">mode</span>
            </h2>
            <p className="mt-5 text-white/90 font-body leading-snug" style={{ fontSize: 'clamp(1rem, 1.9vw, 1.5rem)' }}>
              Drag blocks into your app, annotate buttons and sections with notes, and let the AI wire backend logic automatically.
            </p>
          </div>

          <div className="h-full flex items-center justify-center">
            <div className="w-full max-w-[760px] h-[78vh] max-h-[760px] min-h-[520px] rounded-[22px] bg-white/10 backdrop-blur-2xl border border-white/35 shadow-[0_30px_80px_rgba(0,0,0,0.35)] p-7 md:p-9 overflow-hidden">
              <div className="h-full w-full rounded-2xl border border-white/35 bg-white/8 backdrop-blur-xl p-5 md:p-6 relative">
                <div className="text-xs uppercase tracking-[0.18em] text-white/75 mb-4">Annotation Workflow</div>

                <div className="grid grid-cols-[220px_1fr] gap-5 h-[calc(100%-1.5rem)]">
                  <div className="rounded-xl border border-white/30 bg-white/15 backdrop-blur-md p-4">
                    <div className="text-sm font-bold text-white mb-3">Blocks</div>
                    <div className="space-y-2.5">
                      {LIBRARY.map((item) => (
                        <motion.div
                          key={item.type}
                          drag
                          dragSnapToOrigin
                          whileDrag={{ scale: 1.06, zIndex: 60 }}
                          onDragEnd={(_, info) => {
                            const box = document.getElementById('stegnet-canvas-dropzone')?.getBoundingClientRect();
                            if (!box) return;
                            const x = info.point.x - box.left;
                            const y = info.point.y - box.top;
                            if (canPlaceAt(x, y) && info.point.x >= box.left && info.point.x <= box.right && info.point.y >= box.top && info.point.y <= box.bottom) {
                              addBlock(item.type, x, y);
                            }
                          }}
                          className="h-10 rounded-lg border border-white/30 bg-white/20 px-3 flex items-center text-sm text-white cursor-grab active:cursor-grabbing"
                        >
                          {item.label}
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-4 text-[11px] text-white/70">Drag these into canvas</div>
                  </div>

                  <div
                    id="stegnet-canvas-dropzone"
                    onMouseEnter={() => setDropHover(true)}
                    onMouseLeave={() => setDropHover(false)}
                    className={`rounded-xl border bg-white/12 backdrop-blur-md relative p-5 overflow-hidden transition-colors ${dropHover ? 'border-white/55' : 'border-white/35'}`}
                  >
                    <div className="text-sm font-bold text-white mb-4">Canvas</div>

                    {!hasAny && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-white/70 text-sm">Drop blocks here</div>
                      </div>
                    )}

                    {sortedBlocks.map((block) => (
                      <motion.div
                        key={block.id}
                        className={`absolute px-4 flex items-center justify-center text-sm font-semibold ${blockClass(block.type)}`}
                        style={{ left: `${Math.max(8, block.x - 80)}px`, top: `${Math.max(42, block.y - 24)}px`, width: block.type === 'pricing' ? '220px' : '170px' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        {LABELS[block.type]}
                      </motion.div>
                    ))}

                    {sortedBlocks.slice(-2).map((block, i) => (
                      <motion.div
                        key={`${block.id}-note`}
                        className="absolute bg-white/32 backdrop-blur-md text-white px-3 py-2 rounded-lg shadow text-xs font-mono max-w-[220px] border border-white/35"
                        style={{ right: '12px', top: `${64 + i * 78}px` }}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        Note: {NOTES[block.type]}
                      </motion.div>
                    ))}

                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2.5 rounded-lg text-xs font-mono border border-white/30">
                      {hasAny ? 'Generating routes, auth and API handlers...' : 'Waiting for annotations...'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
