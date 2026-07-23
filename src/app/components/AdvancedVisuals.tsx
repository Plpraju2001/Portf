'use client';

import { useEffect, useRef, useState, useMemo, memo, type ReactNode } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/* ─── Scroll progress bar ─── */
export const ScrollProgressBar = memo(() => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left bg-[#0066cc]"
      style={{ scaleX }}
    />
  );
});
ScrollProgressBar.displayName = 'ScrollProgressBar';

/* ─── Neural network canvas background ─── */
export const NeuralNetworkBackground = memo(({ density = 1 }: { density?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    const nodeCount = isMobile ? Math.floor(18 * density) : Math.floor(42 * density);
    const connectionDist = isMobile ? 120 : 160;

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      pulse: number;
      pulseSpeed: number;
    }

    const nodes: Node[] = [];

    const init = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      nodes.length = 0;
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 1.5,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.18;
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, `rgba(59, 130, 246, ${alpha})`);
            grad.addColorStop(1, `rgba(139, 92, 246, ${alpha})`);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const glow = 0.5 + Math.sin(node.pulse) * 0.3;
        const grd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r * 4);
        grd.addColorStop(0, `rgba(99, 102, 241, ${0.6 * glow})`);
        grd.addColorStop(1, 'rgba(99, 102, 241, 0)');
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${0.7 * glow})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    init();
    draw();
    const onResize = () => init();
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, [isMobile, density]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
      aria-hidden
    />
  );
});
NeuralNetworkBackground.displayName = 'NeuralNetworkBackground';

/* ─── Aurora mesh gradient blobs ─── */
export const AuroraBackground = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
    <motion.div
      className="absolute -top-1/4 -left-1/4 w-[70%] h-[70%] rounded-full aurora-blob-1"
      animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.15, 0.95, 1] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute -bottom-1/4 -right-1/4 w-[65%] h-[65%] rounded-full aurora-blob-2"
      animate={{ x: [0, -50, 40, 0], y: [0, 50, -30, 0], scale: [1, 0.9, 1.1, 1] }}
      transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute top-1/3 left-1/3 w-[45%] h-[45%] rounded-full aurora-blob-3"
      animate={{ x: [0, 40, -20, 0], y: [0, -30, 40, 0], scale: [1, 1.08, 0.92, 1] }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
    />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.85)_70%)]" />
  </div>
));
AuroraBackground.displayName = 'AuroraBackground';

/* ─── Animated data stream divider between sections ─── */
export const DataStreamDivider = memo(({ variant = 'default' }: { variant?: 'default' | 'dark' }) => (
  <div className={`relative h-24 overflow-hidden ${variant === 'dark' ? 'bg-gray-50' : 'bg-white'}`} aria-hidden>
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 80">
      <defs>
        <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="30%" stopColor="#6366f1" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#ec4899" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,40 Q150,10 300,40 T600,40 T900,40 T1200,40"
        fill="none"
        stroke="url(#streamGrad)"
        strokeWidth="2"
        animate={{ d: [
          'M0,40 Q150,10 300,40 T600,40 T900,40 T1200,40',
          'M0,40 Q150,70 300,40 T600,40 T900,40 T1200,40',
          'M0,40 Q150,10 300,40 T600,40 T900,40 T1200,40',
        ] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M0,50 Q200,20 400,50 T800,50 T1200,50"
        fill="none"
        stroke="url(#streamGrad)"
        strokeWidth="1"
        strokeOpacity="0.5"
        animate={{ d: [
          'M0,50 Q200,20 400,50 T800,50 T1200,50',
          'M0,50 Q200,65 400,50 T800,50 T1200,50',
          'M0,50 Q200,20 400,50 T800,50 T1200,50',
        ] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </svg>
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400"
        style={{ top: `${30 + (i % 3) * 15}%` }}
        animate={{ left: ['-2%', '102%'], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.6, ease: 'linear' }}
      />
    ))}
  </div>
));
DataStreamDivider.displayName = 'DataStreamDivider';

/* ─── Hero animated stat pills ─── */
export const HeroStatPills = memo(() => {
  const stats = useMemo(() => [
    { label: '5 Yrs Experience' },
    { label: 'Production ML' },
    { label: 'Healthcare Analytics' },
    { label: 'Cloud & Data Stack' },
  ], []);

  return (
    <motion.div
      className="pro-stat-row justify-center lg:justify-start mt-8 mb-2"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {stats.map((stat, i) => (
        <motion.span
          key={stat.label}
          className="pro-stat"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 + i * 0.06 }}
        >
          {stat.label}
        </motion.span>
      ))}
    </motion.div>
  );
});
HeroStatPills.displayName = 'HeroStatPills';

/* ─── Animated gradient underline for headings ─── */
export const AnimatedHeadingUnderline = memo(() => (
  <motion.svg
    width="200"
    height="8"
    viewBox="0 0 200 8"
    className="mx-auto mt-2"
    initial={{ opacity: 0, pathLength: 0 }}
    whileInView={{ opacity: 1, pathLength: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
  >
    <defs>
      <linearGradient id="underlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <motion.path
      d="M0,4 Q50,0 100,4 T200,4"
      fill="none"
      stroke="url(#underlineGrad)"
      strokeWidth="3"
      strokeLinecap="round"
      animate={{ d: [
        'M0,4 Q50,0 100,4 T200,4',
        'M0,4 Q50,8 100,4 T200,4',
        'M0,4 Q50,0 100,4 T200,4',
      ] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    />
  </motion.svg>
));
AnimatedHeadingUnderline.displayName = 'AnimatedHeadingUnderline';

/* ─── Section heading wrapper with reveal ─── */
export const SectionHeading = memo(({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle: string;
  light?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true, margin: '-80px' }}
    className="text-center mb-16"
  >
    <motion.h2
      className={`text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-800'}`}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    <AnimatedHeadingUnderline />
    <motion.p
      className={`text-lg max-w-2xl mx-auto mt-4 ${light ? 'text-gray-300' : 'text-gray-600'}`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {subtitle}
    </motion.p>
  </motion.div>
));
SectionHeading.displayName = 'SectionHeading';

/* ─── Floating 3D card glow wrapper ─── */
export const GlowCard = memo(({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    className={`relative group ${className}`}
    whileHover={{ y: -6 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
    <div className="relative">{children}</div>
  </motion.div>
));
GlowCard.displayName = 'GlowCard';

/* ─── Parallax scroll layer ─── */
export const ParallaxLayer = memo(({
  children,
  speed = 0.3,
  className = '',
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 80, -speed * 80]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
});
ParallaxLayer.displayName = 'ParallaxLayer';

/* ─── Animated ML pipeline graphic ─── */
export const MLPipelineGraphic = memo(() => {
  const steps = ['Data', 'Features', 'Train', 'Deploy', 'Monitor'];
  return (
    <div className="flex items-center justify-center gap-1 md:gap-2 flex-wrap py-6" aria-hidden>
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-1 md:gap-2">
          <motion.div
            className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold text-white shadow-lg"
            style={{
              background: `linear-gradient(135deg, hsl(${220 + i * 25}, 70%, 55%), hsl(${240 + i * 25}, 70%, 45%))`,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            animate={{
              opacity: 1,
              y: 0,
              boxShadow: [
                '0 4px 15px rgba(99,102,241,0.3)',
                '0 8px 25px rgba(99,102,241,0.5)',
                '0 4px 15px rgba(99,102,241,0.3)',
              ],
            }}
            transition={{
              opacity: { delay: i * 0.15, duration: 0.4 },
              y: { delay: i * 0.15, duration: 0.4 },
              boxShadow: { duration: 2, repeat: Infinity, delay: i * 0.3 },
            }}
          >
            {step}
          </motion.div>
          {i < steps.length - 1 && (
            <motion.svg width="24" height="12" viewBox="0 0 24 12" className="hidden sm:block">
              <motion.path
                d="M0,6 L18,6 M14,2 L22,6 L14,10"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.svg>
          )}
        </div>
      ))}
    </div>
  );
});
MLPipelineGraphic.displayName = 'MLPipelineGraphic';

/* ─── Floating data-science symbols ─── */
export const DataScienceFloatingSymbols = memo(() => {
  const symbols = useMemo(() => [
    { char: 'Σ', x: '8%', y: '15%', delay: 0, size: 'text-2xl' },
    { char: 'μ', x: '92%', y: '20%', delay: 0.5, size: 'text-xl' },
    { char: '∫', x: '85%', y: '75%', delay: 1, size: 'text-2xl' },
    { char: 'ρ', x: '12%', y: '80%', delay: 1.5, size: 'text-xl' },
    { char: 'θ', x: '75%', y: '45%', delay: 0.8, size: 'text-lg' },
    { char: 'λ', x: '20%', y: '45%', delay: 1.2, size: 'text-lg' },
  ], []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {symbols.map((s) => (
        <motion.span
          key={s.char + s.x}
          className={`absolute font-serif font-bold text-indigo-400/20 select-none ${s.size}`}
          style={{ left: s.x, top: s.y }}
          animate={{ y: [0, -12, 0], opacity: [0.15, 0.28, 0.15], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5 + s.delay, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
        >
          {s.char}
        </motion.span>
      ))}
    </div>
  );
});
DataScienceFloatingSymbols.displayName = 'DataScienceFloatingSymbols';

/* ─── Scrolling data stack marquee ─── */
export const DataStackMarquee = memo(() => {
  const tools = ['Python', 'SQL', 'Snowflake', 'Databricks', 'PyTorch', 'TensorFlow', 'Spark', 'AWS', 'Docker', 'Kubernetes', 'Power BI', 'Scikit-learn'];
  return (
    <div className="relative overflow-hidden py-4 mask-fade-edges" aria-hidden>
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...tools, ...tools].map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 shadow-sm"
          >
            {tool}
          </span>
        ))}
      </motion.div>
    </div>
  );
});
DataStackMarquee.displayName = 'DataStackMarquee';

/* ─── Mini live chart widget (decorative) ─── */
export const LiveChartWidget = memo(({ className = '' }: { className?: string }) => (
  <motion.div
    className={`rounded-xl bg-white/80 backdrop-blur border border-indigo-100 shadow-lg p-3 ${className}`}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    aria-hidden
  >
    <div className="flex items-center gap-2 mb-2">
      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Model Accuracy</span>
    </div>
    <svg width="120" height="40" viewBox="0 0 120 40">
      <motion.polyline
        points="0,35 15,30 30,28 45,22 60,18 75,15 90,10 105,8 120,5"
        fill="none"
        stroke="url(#chartLine)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
      <defs>
        <linearGradient id="chartLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
    <p className="text-xs font-bold text-indigo-600 mt-1">+30% ↑</p>
  </motion.div>
));
LiveChartWidget.displayName = 'LiveChartWidget';
