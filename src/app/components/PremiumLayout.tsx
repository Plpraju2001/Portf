'use client';

import { memo, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/* Apple / Google Cloud inspired — minimal, premium backgrounds */
export const PremiumHeroBackground = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
    <div className="absolute inset-0 premium-dot-grid opacity-40" />
    <div className="absolute inset-0 premium-hero-gradient" />
    <motion.div
      className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full premium-orb-blue"
      animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full premium-orb-purple"
      animate={{ x: [0, -25, 0], y: [0, 15, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
));
PremiumHeroBackground.displayName = 'PremiumHeroBackground';

/* Google Cloud–style subtle section backdrop */
export const PremiumSectionBackdrop = memo(({ variant = 'light' }: { variant?: 'light' | 'dark' }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
    {variant === 'light' ? (
      <>
        <div className="absolute inset-0 premium-dot-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-50/80 to-transparent rounded-full blur-3xl" />
      </>
    ) : (
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(66,133,244,0.15),transparent_60%)]" />
    )}
  </div>
));
PremiumSectionBackdrop.displayName = 'PremiumSectionBackdrop';

/* Apple Store–style Master's spotlight — full premium dark section */
export const MastersSpotlight = memo(() => (
  <div className="relative overflow-hidden masters-spotlight py-24 md:py-32">
    <PremiumSectionBackdrop variant="dark" />
    <div className="absolute inset-0 masters-spotlight-shimmer" aria-hidden />

    <div className="container mx-auto px-6 relative z-10 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: '-80px' }}
        className="text-center mb-12 md:mb-16"
      >
        <p className="premium-eyebrow mb-4">Highest Degree</p>
        <h2 className="premium-display text-white mb-4">
          Master&apos;s in Information Technology
        </h2>
        <p className="premium-subdisplay text-gray-400 max-w-2xl mx-auto">
          Advanced graduate education in data science, machine learning, and cloud systems — the foundation of my analytics career.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        viewport={{ once: true, margin: '-60px' }}
        className="relative"
      >
        <div className="masters-spotlight-card rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Logo showcase — Apple product style */}
            <div className="flex flex-col items-center lg:items-start">
              <motion.div
                className="masters-logo-stage mb-8"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center p-6 shadow-2xl">
                  <Image
                    src="/logos/clark-university-logo.png"
                    alt="Clark University"
                    width={160}
                    height={160}
                    className="object-contain w-full h-full brightness-110"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Clark_University_seal.svg/200px-Clark_University_seal.svg.png';
                    }}
                  />
                </div>
              </motion.div>
              <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                {[
                  { value: '3.6', label: 'GPA' },
                  { value: '2024', label: 'Graduated' },
                  { value: 'M.S.', label: 'Degree' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-blue-200">Clark University · Worcester, MA</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                Data Science. Machine Learning. Cloud Computing.
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-base md:text-lg">
                Jan 2023 – May 2024 · Specialized coursework in data analytics, business intelligence,
                enterprise architecture, database systems, and information systems management at the graduate level.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Data Science', 'Machine Learning', 'Cloud Computing', 'Business Intelligence', 'Database Systems', 'Enterprise Architecture'].map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-white/8 text-gray-200 border border-white/10 hover:bg-white/12 transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                </svg>
                <span>Primary academic credential · Graduate-level analytics &amp; IT specialization</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
));
MastersSpotlight.displayName = 'MastersSpotlight';

/* Premium CTA buttons — Apple minimal style */
export const PremiumButton = memo(({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}) => (
  <motion.a
    href={href}
    className={
      variant === 'primary'
        ? 'premium-btn-primary'
        : 'premium-btn-secondary'
    }
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
  >
    {children}
  </motion.a>
));
PremiumButton.displayName = 'PremiumButton';
