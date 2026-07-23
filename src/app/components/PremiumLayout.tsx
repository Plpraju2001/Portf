'use client';

import { memo, type ReactNode } from 'react';
import { motion } from 'framer-motion';

export type SectionTheme = 'hero' | 'light' | 'frost' | 'dark' | 'mesh' | 'ink';

const themeShell: Record<SectionTheme, string> = {
  hero: 'theme-hero min-h-screen flex items-center',
  light: 'theme-light',
  frost: 'theme-frost',
  dark: 'theme-dark',
  mesh: 'theme-mesh',
  ink: 'theme-ink',
};

/* ─── Per-section animated backgrounds (Google Cloud / Apple style) ─── */
export const PremiumSectionBackground = memo(({ theme }: { theme: SectionTheme }) => {
  if (theme === 'hero') return <PremiumHeroBackground />;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {theme === 'light' && (
        <>
          <div className="absolute inset-0 premium-grid opacity-[0.35]" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-100/50 to-transparent rounded-full blur-3xl" />
        </>
      )}
      {theme === 'frost' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f7] via-white to-blue-50/40" />
          <div className="absolute inset-0 premium-grid opacity-25" />
          <motion.div
            className="absolute top-1/4 -right-20 w-[420px] h-[420px] rounded-full bg-purple-200/30 blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}
      {theme === 'dark' && (
        <>
          <div className="absolute inset-0 theme-dark-gradient" />
          <div className="absolute inset-0 premium-grid-light opacity-[0.07]" />
          <motion.div
            className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[100px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </>
      )}
      {theme === 'mesh' && (
        <>
          <div className="absolute inset-0 theme-mesh-gradient" />
          <div className="absolute inset-0 premium-grid opacity-20" />
          <motion.div
            className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-cyan-200/25 blur-3xl"
            animate={{ x: [0, 40, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full bg-violet-200/25 blur-3xl"
            animate={{ x: [0, -35, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}
      {theme === 'ink' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0a0f1a]" />
          <div className="absolute inset-0 premium-grid-light opacity-[0.05]" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
        </>
      )}
    </div>
  );
});
PremiumSectionBackground.displayName = 'PremiumSectionBackground';

export const PremiumHeroBackground = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
    <div className="absolute inset-0 theme-hero-gradient" />
    <div className="absolute inset-0 premium-grid opacity-30" />
    <motion.div
      className="absolute -top-[10%] left-[5%] w-[55vw] max-w-[700px] h-[55vw] max-h-[700px] rounded-full bg-gradient-to-br from-blue-400/20 via-indigo-300/15 to-transparent blur-3xl"
      animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.06, 1] }}
      transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-[5%] right-[0%] w-[45vw] max-w-[600px] h-[45vw] max-h-[600px] rounded-full bg-gradient-to-tl from-violet-400/15 via-purple-300/10 to-transparent blur-3xl"
      animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[80vw] max-w-[900px] h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
      animate={{ opacity: [0.3, 0.7, 0.3], scaleX: [0.8, 1, 0.8] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
));
PremiumHeroBackground.displayName = 'PremiumHeroBackground';

/* ─── Section wrapper — consistent spacing + themed backgrounds ─── */
export const SectionShell = memo(({
  id,
  theme = 'light',
  children,
  className = '',
  noPadding = false,
}: {
  id?: string;
  theme?: SectionTheme;
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}) => (
  <section
    id={id}
    className={`relative overflow-hidden ${noPadding ? '' : 'py-24 md:py-32'} ${themeShell[theme]} ${className}`}
  >
    <PremiumSectionBackground theme={theme} />
    <div className={`container mx-auto px-6 relative z-10 max-w-6xl ${theme === 'hero' ? 'w-full py-12 sm:py-16 md:py-24' : ''}`}>
      {children}
    </div>
  </section>
));
SectionShell.displayName = 'SectionShell';

/* ─── Unified section header ─── */
export const SectionHeader = memo(({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, margin: '-60px' }}
    className="text-center mb-14 md:mb-20"
  >
    {eyebrow && <p className={`premium-eyebrow mb-4 ${light ? 'text-blue-300' : ''}`}>{eyebrow}</p>}
    <h2 className={`premium-display ${light ? 'text-white' : 'text-[#1d1d1f]'}`}>{title}</h2>
    {subtitle && (
      <p className={`premium-subdisplay max-w-2xl mx-auto mt-5 ${light ? 'text-gray-400' : 'text-[#86868b]'}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
));
SectionHeader.displayName = 'SectionHeader';

/* ─── Premium CTA buttons ─── */
export const PremiumButton = memo(({
  href,
  children,
  variant = 'primary',
  light = false,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  light?: boolean;
}) => (
  <motion.a
    href={href}
    className={
      variant === 'primary'
        ? 'premium-btn-primary'
        : light
          ? 'premium-btn-secondary-light'
          : 'premium-btn-secondary'
    }
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
  >
    {children}
  </motion.a>
));
PremiumButton.displayName = 'PremiumButton';
