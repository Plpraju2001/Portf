'use client';

import { useState, useEffect, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getLatestBlogPost } from './blog/blogData';
import {
  ScrollProgressBar,
  HeroStatPills,
  MLPipelineGraphic,
  DataScienceFloatingSymbols,
} from './components/AdvancedVisuals';
import {
  PremiumHeroBackground,
  PremiumButton,
  SectionShell,
  SectionHeader,
} from './components/PremiumLayout';

// Professional Data Science Visualization Components - Large, Visible, Immediate
const BarChartWatermark = ({ delay = 0 }: { delay?: number }) => (
  <motion.svg
    width="180"
    height="110"
    viewBox="0 0 140 90"
    className="drop-shadow-lg"
    style={{ filter: 'drop-shadow(0 4px 12px rgba(59, 130, 246, 0.2))', willChange: 'transform', transform: 'translate3d(0,0,0)' }}
    initial={{ opacity: 0.12, scale: 1 }}
    animate={{ 
      opacity: [0.12, 0.2, 0.12],
      y: [0, -8, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay * 0.5,
      ease: "easeInOut",
      type: "tween",
    }}
  >
    {/* Professional axes with grid lines */}
    <defs>
      <linearGradient id="barGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
        <stop offset="100%" stopColor="#1e40af" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="barGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
        <stop offset="100%" stopColor="#4338ca" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="barGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
        <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="barGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="barGrad5" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" stopOpacity="1" />
        <stop offset="100%" stopColor="#be185d" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    {/* Grid lines */}
    {[20, 35, 50, 65, 80].map((y) => (
      <line key={y} x1="15" y1={y} x2="125" y2={y} stroke="#64748b" strokeWidth="0.3" opacity="0.15" />
    ))}
    {/* Axes */}
    <line x1="15" y1="75" x2="125" y2="75" stroke="#1e293b" strokeWidth="1.5" opacity="0.35" />
    <line x1="15" y1="75" x2="15" y2="10" stroke="#1e293b" strokeWidth="1.5" opacity="0.35" />
    {/* Professional bars with animated growth */}
    {[
      { x: 20, h: 15, grad: 'barGrad1', delay: 0 },
      { x: 36, h: 25, grad: 'barGrad2', delay: 0.1 },
      { x: 52, h: 35, grad: 'barGrad3', delay: 0.2 },
      { x: 68, h: 30, grad: 'barGrad4', delay: 0.3 },
      { x: 84, h: 40, grad: 'barGrad5', delay: 0.4 },
      { x: 100, h: 45, color: '#f59e0b', delay: 0.5 },
      { x: 116, h: 20, color: '#10b981', delay: 0.6 },
    ].map((bar) => (
      <motion.rect
        key={bar.x}
        x={bar.x}
        width="14"
        rx="3"
        fill={bar.color ?? `url(#${bar.grad})`}
        opacity={0.65}
        initial={{ y: 75, height: 0 }}
        animate={{ y: 75 - bar.h, height: bar.h }}
        transition={{
          duration: 1.2,
          delay: bar.delay + delay * 0.3,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 3,
          ease: 'easeInOut',
        }}
      />
    ))}
  </motion.svg>
);

const ScatterPlotWatermark = ({ delay = 0 }: { delay?: number }) => (
  <motion.svg
    width="180"
    height="140"
    viewBox="0 0 130 100"
    className="drop-shadow-lg"
    style={{ filter: 'drop-shadow(0 4px 12px rgba(139, 92, 246, 0.2))' }}
    initial={{ opacity: 0.12, scale: 1 }}
    animate={{ 
      opacity: [0.12, 0.2, 0.12],
      scale: [1, 1.05, 1],
      rotate: [0, 2, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay * 0.5,
      ease: "easeInOut",
      type: "tween",
    }}
  >
    {/* Grid */}
    {[20, 35, 50, 65, 80].map((y) => (
      <line key={y} x1="15" y1={y} x2="115" y2={y} stroke="#64748b" strokeWidth="0.3" opacity="0.15" />
    ))}
    {[30, 50, 70, 90, 110].map((x) => (
      <line key={x} x1={x} y1="15" x2={x} y2="85" stroke="#64748b" strokeWidth="0.3" opacity="0.15" />
    ))}
    {/* Axes */}
    <line x1="15" y1="85" x2="115" y2="85" stroke="#1e293b" strokeWidth="1.5" opacity="0.35" />
    <line x1="15" y1="85" x2="15" y2="15" stroke="#1e293b" strokeWidth="1.5" opacity="0.35" />
    {/* Professional scatter plot with trend line */}
    {[
      { x: 20, y: 70, size: 5, color: '#3b82f6' }, { x: 30, y: 65, size: 6, color: '#6366f1' }, { x: 40, y: 60, size: 5, color: '#8b5cf6' },
      { x: 50, y: 55, size: 7, color: '#a855f7' }, { x: 60, y: 50, size: 6, color: '#ec4899' }, { x: 70, y: 45, size: 5, color: '#f59e0b' },
      { x: 80, y: 40, size: 6, color: '#10b981' }, { x: 90, y: 35, size: 7, color: '#3b82f6' }, { x: 100, y: 30, size: 5, color: '#6366f1' },
      { x: 25, y: 68, size: 5, color: '#8b5cf6' }, { x: 45, y: 58, size: 6, color: '#a855f7' }, { x: 65, y: 48, size: 5, color: '#ec4899' },
      { x: 85, y: 38, size: 6, color: '#f59e0b' }, { x: 35, y: 63, size: 5, color: '#10b981' }, { x: 55, y: 53, size: 6, color: '#3b82f6' },
      { x: 75, y: 43, size: 5, color: '#6366f1' }, { x: 95, y: 33, size: 6, color: '#8b5cf6' },
    ].map((point, i) => (
      <g key={i}>
        <circle cx={point.x} cy={point.y} r={point.size + 1} fill="white" opacity="0.2" />
        <circle cx={point.x} cy={point.y} r={point.size} fill={point.color} opacity="0.5" />
      </g>
    ))}
    {/* Trend line */}
    <line x1="20" y1="70" x2="100" y2="30" stroke="#ec4899" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 4" />
  </motion.svg>
);

const BoxPlotWatermark = ({ delay = 0 }: { delay?: number }) => (
  <motion.svg
    width="160"
    height="120"
    viewBox="0 0 120 90"
    className="drop-shadow-lg"
    style={{ filter: 'drop-shadow(0 4px 12px rgba(236, 72, 153, 0.2))' }}
    initial={{ opacity: 0.12, scale: 1 }}
    animate={{ 
      opacity: [0.12, 0.2, 0.12],
      x: [0, 5, 0],
      scale: [1, 1.03, 1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay * 0.5,
      ease: "easeInOut",
      type: "tween",
    }}
  >
    {/* Grid */}
    {[30, 40, 50, 60, 70].map((y) => (
      <line key={y} x1="15" y1={y} x2="105" y2={y} stroke="#64748b" strokeWidth="0.3" opacity="0.15" />
    ))}
    {/* Axes */}
    <line x1="15" y1="75" x2="105" y2="75" stroke="#1e293b" strokeWidth="1.5" opacity="0.35" />
    {/* Professional box plots */}
    {[
      { x: 30, min: 70, q1: 60, median: 50, q3: 40, max: 30, color: '#3b82f6' },
      { x: 60, min: 65, q1: 55, median: 45, q3: 35, max: 25, color: '#8b5cf6' },
      { x: 90, min: 68, q1: 58, median: 48, q3: 38, max: 28, color: '#ec4899' },
    ].map((box, i) => (
      <g key={i}>
        {/* Whiskers */}
        <line x1={box.x} y1={box.min} x2={box.x} y2={box.max} stroke={box.color} strokeWidth="2" opacity="0.5" />
        <line x1={box.x - 8} y1={box.min} x2={box.x + 8} y2={box.min} stroke={box.color} strokeWidth="2" opacity="0.5" />
        <line x1={box.x - 8} y1={box.max} x2={box.x + 8} y2={box.max} stroke={box.color} strokeWidth="2" opacity="0.5" />
        {/* Box with gradient */}
        <rect x={box.x - 14} y={box.q3} width="28" height={box.q1 - box.q3} fill={box.color} opacity="0.5" rx="3" stroke={box.color} strokeWidth="1" />
        {/* Median line */}
        <line x1={box.x - 14} y1={box.median} x2={box.x + 14} y2={box.median} stroke="#ffffff" strokeWidth="2" opacity="0.7" />
        {/* Outliers */}
        <circle cx={box.x} cy={box.min - 3} r="2.5" fill={box.color} opacity="0.6" />
        <circle cx={box.x} cy={box.max + 3} r="2.5" fill={box.color} opacity="0.6" />
      </g>
    ))}
  </motion.svg>
);

const CorrelationMatrixWatermark = ({ delay = 0 }: { delay?: number }) => (
  <motion.svg
    width="140"
    height="140"
    viewBox="0 0 110 110"
    className="drop-shadow-lg"
    style={{ filter: 'drop-shadow(0 4px 12px rgba(16, 185, 129, 0.2))' }}
    initial={{ opacity: 0.12, rotate: 0, scale: 1 }}
    animate={{ 
      opacity: [0.12, 0.2, 0.12],
      rotate: [0, 5, 0],
      scale: [1, 1.04, 1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay * 0.5,
      ease: "easeInOut",
      type: "tween",
    }}
  >
    {/* Professional correlation matrix with labels */}
    {Array.from({ length: 6 }).map((_, row) =>
      Array.from({ length: 6 }).map((_, col) => {
        const correlation = row === col ? 1 : Math.abs(1 - Math.abs(row - col) / 5);
        const color = correlation > 0.7 ? '#10b981' : correlation > 0.4 ? '#f59e0b' : '#ef4444';
        return (
          <g key={`${row}-${col}`}>
            <rect
              x={col * 16 + 8}
              y={row * 16 + 8}
              width="14"
              height="14"
              fill={color}
              opacity={0.3 + correlation * 0.25}
              rx="3"
              stroke={color}
              strokeWidth="1"
              strokeOpacity="0.6"
            />
            {correlation > 0.7 && (
              <text
                x={col * 16 + 15}
                y={row * 16 + 18}
                fontSize="7"
                fill="white"
                opacity="0.6"
                textAnchor="middle"
                fontWeight="bold"
              >
                {correlation.toFixed(1)}
              </text>
            )}
          </g>
        );
      })
    )}
  </motion.svg>
);

const TimeSeriesWatermark = ({ delay = 0 }: { delay?: number }) => (
  <motion.svg
    width="190"
    height="110"
    viewBox="0 0 150 85"
    className="drop-shadow-lg"
    style={{ filter: 'drop-shadow(0 4px 12px rgba(59, 130, 246, 0.2))' }}
    initial={{ opacity: 0.12, pathLength: 1 }}
    animate={{ 
      opacity: [0.12, 0.2, 0.12],
      pathLength: [0.8, 1, 0.8],
      y: [0, -5, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay * 0.5,
      ease: "easeInOut",
    }}
  >
    {/* Grid */}
    {[20, 35, 50, 65].map((y) => (
      <line key={y} x1="15" y1={y} x2="135" y2={y} stroke="#64748b" strokeWidth="0.3" opacity="0.15" />
    ))}
    {/* Axes */}
    <line x1="15" y1="70" x2="135" y2="70" stroke="#1e293b" strokeWidth="2" opacity="0.35" />
    <line x1="15" y1="70" x2="15" y2="15" stroke="#1e293b" strokeWidth="2" opacity="0.35" />
    {/* Area under curve with gradient */}
    <polygon
      points="15,70 15,65 25,60 35,55 45,50 55,45 65,40 75,38 85,35 95,32 105,30 115,28 125,25 135,22 135,70"
      fill="url(#timeSeriesGradient)"
      opacity="0.4"
    />
    {/* Professional time series line */}
    <polyline
      points="15,65 25,60 35,55 45,50 55,45 65,40 75,38 85,35 95,32 105,30 115,28 125,25 135,22"
      fill="none"
      stroke="#3b82f6"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6"
    />
    {/* Data points */}
    {[
      { x: 25, y: 60 }, { x: 45, y: 50 }, { x: 65, y: 40 }, { x: 85, y: 35 }, { x: 105, y: 30 }, { x: 125, y: 25 }
    ].map((point, i) => (
      <circle key={i} cx={point.x} cy={point.y} r="3" fill="#ffffff" opacity="0.6" stroke="#3b82f6" strokeWidth="1.5" />
    ))}
    <defs>
      <linearGradient id="timeSeriesGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
        <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </motion.svg>
);

const HistogramWatermark = ({ delay = 0 }: { delay?: number }) => (
  <motion.svg
    width="180"
    height="120"
    viewBox="0 0 130 90"
    className="drop-shadow-lg"
    style={{ filter: 'drop-shadow(0 4px 12px rgba(139, 92, 246, 0.2))' }}
    initial={{ opacity: 0.12, scale: 1 }}
    animate={{ 
      opacity: [0.12, 0.2, 0.12],
      scale: [1, 1.05, 1],
      y: [0, -4, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay * 0.5,
      ease: "easeInOut",
      type: "tween",
    }}
  >
    {/* Grid */}
    {[20, 35, 50, 65].map((y) => (
      <line key={y} x1="15" y1={y} x2="115" y2={y} stroke="#64748b" strokeWidth="0.3" opacity="0.15" />
    ))}
    {/* Axes */}
    <line x1="15" y1="75" x2="115" y2="75" stroke="#1e293b" strokeWidth="1.5" opacity="0.35" />
    <line x1="15" y1="75" x2="15" y2="15" stroke="#1e293b" strokeWidth="1.5" opacity="0.35" />
    {/* Professional histogram with normal distribution */}
    {[
      { x: 20, height: 5, color: '#6366f1' },
      { x: 30, height: 10, color: '#8b5cf6' },
      { x: 40, height: 20, color: '#a855f7' },
      { x: 50, height: 30, color: '#ec4899' },
      { x: 60, height: 35, color: '#f59e0b' },
      { x: 70, height: 30, color: '#ec4899' },
      { x: 80, height: 20, color: '#a855f7' },
      { x: 90, height: 10, color: '#8b5cf6' },
      { x: 100, height: 5, color: '#6366f1' },
    ].map((bar, i) => (
      <rect
        key={i}
        x={bar.x}
        y={75 - bar.height}
        width="10"
        height={bar.height}
        fill={bar.color}
        opacity="0.5"
        rx="2"
        stroke={bar.color}
        strokeWidth="0.8"
        strokeOpacity="0.6"
      />
    ))}
  </motion.svg>
);

const HeatMapWatermark = ({ delay = 0 }: { delay?: number }) => (
  <motion.svg
    width="180"
    height="130"
    viewBox="0 0 140 100"
    className="drop-shadow-lg"
    style={{ filter: 'drop-shadow(0 4px 12px rgba(245, 158, 11, 0.2))' }}
    initial={{ opacity: 0.12, scale: 1 }}
    animate={{ 
      opacity: [0.12, 0.2, 0.12],
      scale: [1, 1.05, 1],
      rotate: [0, 2, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay * 0.5,
      ease: "easeInOut",
      type: "tween",
    }}
  >
    {/* Professional heat map with gradient colors */}
    {Array.from({ length: 7 }).map((_, row) =>
      Array.from({ length: 9 }).map((_, col) => {
        const intensity = Math.sin((row + col) * 0.5) * 0.5 + 0.5;
        const colors = ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#ec4899', '#f59e0b', '#10b981'];
        const colorIndex = Math.floor(intensity * (colors.length - 1));
        return (
          <rect
            key={`${row}-${col}`}
            x={col * 14 + 8}
            y={row * 12 + 8}
            width="12"
            height="10"
            fill={colors[colorIndex]}
            opacity={0.3 + intensity * 0.3}
            rx="2"
            stroke={colors[colorIndex]}
            strokeWidth="1"
            strokeOpacity="0.6"
          />
        );
      })
    )}
    {/* Row and column labels */}
    {Array.from({ length: 7 }).map((_, i) => (
      <text key={`row-${i}`} x="4" y={i * 12 + 18} fontSize="6" fill="#64748b" opacity="0.4" fontWeight="bold">
        {String.fromCharCode(65 + i)}
      </text>
    ))}
    {Array.from({ length: 9 }).map((_, i) => (
      <text key={`col-${i}`} x={i * 14 + 14} y="6" fontSize="6" fill="#64748b" opacity="0.4" textAnchor="middle" fontWeight="bold">
        {i + 1}
      </text>
    ))}
  </motion.svg>
);

const PieChartWatermark = ({ delay = 0 }: { delay?: number }) => (
  <motion.svg
    width="140"
    height="140"
    viewBox="0 0 100 100"
    className="drop-shadow-lg"
    style={{ filter: 'drop-shadow(0 4px 12px rgba(168, 85, 247, 0.2))' }}
    initial={{ opacity: 0.12, rotate: 0, scale: 1 }}
    animate={{ 
      opacity: [0.12, 0.2, 0.12],
      rotate: [0, 360],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: delay * 0.5,
      ease: "linear",
    }}
  >
    {/* Professional pie chart with donut style */}
    <defs>
      <linearGradient id="pieGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
        <stop offset="100%" stopColor="#1e40af" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="pieGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
        <stop offset="100%" stopColor="#4338ca" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="pieGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
        <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="pieGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="pieGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" stopOpacity="1" />
        <stop offset="100%" stopColor="#be185d" stopOpacity="0.9" />
      </linearGradient>
    </defs>
    <path d="M 50,50 L 50,10 A 40,40 0 0,1 78,22 Z" fill="url(#pieGrad1)" opacity="0.6" stroke="#ffffff" strokeWidth="1.5" />
    <path d="M 50,50 L 78,22 A 40,40 0 0,1 90,50 Z" fill="url(#pieGrad2)" opacity="0.6" stroke="#ffffff" strokeWidth="1.5" />
    <path d="M 50,50 L 90,50 A 40,40 0 0,1 78,78 Z" fill="url(#pieGrad3)" opacity="0.6" stroke="#ffffff" strokeWidth="1.5" />
    <path d="M 50,50 L 78,78 A 40,40 0 0,1 50,90 Z" fill="url(#pieGrad4)" opacity="0.6" stroke="#ffffff" strokeWidth="1.5" />
    <path d="M 50,50 L 50,90 A 40,40 0 0,1 22,78 Z" fill="url(#pieGrad5)" opacity="0.6" stroke="#ffffff" strokeWidth="1.5" />
    <path d="M 50,50 L 22,78 A 40,40 0 0,1 10,50 Z" fill="#f59e0b" opacity="0.55" stroke="#ffffff" strokeWidth="1.5" />
    <path d="M 50,50 L 10,50 A 40,40 0 0,1 22,22 Z" fill="#10b981" opacity="0.55" stroke="#ffffff" strokeWidth="1.5" />
    <path d="M 50,50 L 22,22 A 40,40 0 0,1 50,10 Z" fill="#3b82f6" opacity="0.55" stroke="#ffffff" strokeWidth="1.5" />
    {/* Center circle for donut effect */}
    <circle cx="50" cy="50" r="20" fill="white" opacity="0.7" />
    <circle cx="50" cy="50" r="18" fill="url(#pieGrad1)" opacity="0.2" />
  </motion.svg>
);

const AreaChartWatermark = ({ delay = 0 }: { delay?: number }) => (
  <motion.svg
    width="190"
    height="120"
    viewBox="0 0 140 85"
    className="drop-shadow-lg"
    style={{ filter: 'drop-shadow(0 4px 12px rgba(236, 72, 153, 0.2))' }}
    initial={{ opacity: 0.12, scale: 1 }}
    animate={{ 
      opacity: [0.12, 0.2, 0.12],
      y: [0, -6, 0],
      scale: [1, 1.04, 1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay * 0.5,
      ease: "easeInOut",
      type: "tween",
    }}
  >
    {/* Grid */}
    {[20, 35, 50, 65].map((y) => (
      <line key={y} x1="15" y1={y} x2="125" y2={y} stroke="#64748b" strokeWidth="0.3" opacity="0.15" />
    ))}
    {/* Axes */}
    <line x1="15" y1="70" x2="125" y2="70" stroke="#1e293b" strokeWidth="2" opacity="0.35" />
    <line x1="15" y1="70" x2="15" y2="15" stroke="#1e293b" strokeWidth="2" opacity="0.35" />
    {/* Professional stacked area chart */}
    <polygon points="15,70 25,68 35,66 45,64 55,61 65,58 75,55 85,51 95,47 105,43 115,39 125,35 125,70" 
             fill="url(#areaGradient2)" opacity="0.45" />
    <polygon points="15,70 25,65 35,60 45,55 55,50 65,45 75,40 85,35 95,30 105,25 115,20 125,15 125,70" 
             fill="url(#areaGradient1)" opacity="0.5" />
    {/* Top line */}
    <polyline
      points="15,65 25,60 35,55 45,50 55,45 65,40 75,38 85,35 95,32 105,30 115,28 125,25 135,22"
      fill="none"
      stroke="#ec4899"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.6"
    />
    <defs>
      <linearGradient id="areaGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.85" />
        <stop offset="50%" stopColor="#6366f1" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="areaGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.75" />
        <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.35" />
      </linearGradient>
    </defs>
  </motion.svg>
);

// Professional Data Science Watermark Container - Memoized for performance
const DataScienceWatermarks = memo(() => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    const handleResize = () => checkMobile();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Optimized watermarks for smooth performance - reduced count on all devices
  const allWatermarks = useMemo(() => [
    { type: 'bar', x: 2, y: 5, delay: 0 },
    { type: 'scatter', x: 85, y: 8, delay: 0.1 },
    { type: 'box', x: 3, y: 70, delay: 0.2 },
    { type: 'correlation', x: 82, y: 65, delay: 0.3 },
    { type: 'timeseries', x: 40, y: 2, delay: 0.4 },
    { type: 'histogram', x: 8, y: 40, delay: 0.5 },
    { type: 'heat', x: 70, y: 35, delay: 0.6 },
    { type: 'pie', x: 45, y: 20, delay: 0.7 },
    { type: 'area', x: 20, y: 55, delay: 0.8 },
    { type: 'bar', x: 65, y: 50, delay: 0.9 },
    { type: 'scatter', x: 12, y: 15, delay: 1.0 },
    { type: 'box', x: 75, y: 20, delay: 1.1 },
    { type: 'correlation', x: 35, y: 75, delay: 1.2 },
    { type: 'timeseries', x: 55, y: 10, delay: 1.3 },
    { type: 'histogram', x: 25, y: 30, delay: 1.4 },
    { type: 'heat', x: 88, y: 55, delay: 1.5 },
    { type: 'pie', x: 5, y: 60, delay: 1.6 },
    { type: 'area', x: 50, y: 45, delay: 1.7 },
  ], []);

  const watermarks = useMemo(() => 
    isMobile 
      ? allWatermarks.filter((_, idx) => idx % 3 === 0).slice(0, 5) 
      : allWatermarks.filter((_, idx) => idx % 2 === 0).slice(0, 10),
    [isMobile, allWatermarks]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0, willChange: 'transform', transform: 'translate3d(0,0,0)' }}>
      {watermarks.map((wm, idx) => {
        const style = {
          position: 'absolute' as const,
          left: `${wm.x}%`,
          top: `${wm.y}%`,
          zIndex: 0,
          willChange: 'transform',
          transform: 'translate3d(0,0,0)',
        };
        switch (wm.type) {
          case 'bar':
            return <div key={idx} style={style}><BarChartWatermark delay={wm.delay} /></div>;
          case 'scatter':
            return <div key={idx} style={style}><ScatterPlotWatermark delay={wm.delay} /></div>;
          case 'box':
            return <div key={idx} style={style}><BoxPlotWatermark delay={wm.delay} /></div>;
          case 'correlation':
            return <div key={idx} style={style}><CorrelationMatrixWatermark delay={wm.delay} /></div>;
          case 'timeseries':
            return <div key={idx} style={style}><TimeSeriesWatermark delay={wm.delay} /></div>;
          case 'histogram':
            return <div key={idx} style={style}><HistogramWatermark delay={wm.delay} /></div>;
          case 'heat':
            return <div key={idx} style={style}><HeatMapWatermark delay={wm.delay} /></div>;
          case 'pie':
            return <div key={idx} style={style}><PieChartWatermark delay={wm.delay} /></div>;
          case 'area':
            return <div key={idx} style={style}><AreaChartWatermark delay={wm.delay} /></div>;
          default:
            return null;
        }
      })}
    </div>
  );
});

DataScienceWatermarks.displayName = 'DataScienceWatermarks';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'premium-glass-nav shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 100, damping: 20 }}
    >
      <nav className="container mx-auto px-6 py-3 max-w-6xl">
        <div className="flex justify-between items-center">
          <motion.a
            href="#"
            className="group"
            whileHover={{ opacity: 0.8 }}
          >
            <div className="text-base font-semibold text-[#1d1d1f] tracking-tight">L. Pericharla</div>
            <div className="text-xs text-[#86868b]">Data Scientist</div>
          </motion.a>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
              >
                {item}
              </a>
            ))}
            <a href="/blog" className="text-sm text-[#1d1d1f] hover:text-[#0071e3] transition-colors">Blog</a>
          </div>
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/Plpraju2001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors relative"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.4,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.15, rotate: 5, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </motion.svg>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/pericharla2k1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors relative"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.5,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.15, rotate: -5, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </motion.svg>
            </motion.a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

const Hero = () => {
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    setLetters('Raju'.split(''));
  }, []);

  const [imageError, setImageError] = useState(false);
  const profileImage = '/profile_picture.jpg';

  return (
    <section className="theme-hero min-h-screen flex items-center justify-center relative overflow-hidden pt-28 md:pt-0">
      <PremiumHeroBackground />

      <div className="container mx-auto px-6 text-center relative z-10 py-12 sm:py-16 md:py-24 max-w-5xl">
        {/* Profile Picture - Centered above text on mobile, hidden on larger screens (shown in FixedProfilePicture) */}
        <motion.div
          className="flex justify-center mb-6 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4,
            delay: 0.1,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-2xl border border-gray-200/50">
            {!imageError ? (
              <div className="w-24 h-24 rounded-full border-2 border-blue-500 overflow-hidden profile-ring-glow">
                <img
                  src={profileImage}
                  alt="Lakshmipathiraju Pericharla"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover object-center"
                  onError={() => setImageError(true)}
                  loading="eager"
                />
              </div>
            ) : (
              <div className="w-24 h-24 rounded-full border-2 border-blue-500 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                LP
              </div>
            )}
            <div className="mt-2 text-center">
              <h3 className="text-xs font-semibold text-gray-800 tracking-tight">Raju P</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        >
          <motion.p className="premium-eyebrow mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            Data Scientist · Healthcare Analytics · ML Production
          </motion.p>
          <motion.h1 
            className="premium-hero-title mb-6"
            style={{ display: "inline-block" }}
          >
            Hello, I&apos;m{' '}
            <span className="inline-flex">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="gradient-text"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ display: "inline-block", marginLeft: "0.05em" }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          <motion.p 
            className="premium-hero-subtitle mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.2,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
          >
            Data Scientist | Machine Learning | ML Lifecycle Management
          </motion.p>
          <motion.p 
            className="text-base md:text-lg text-[#86868b] max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Five years building production ML systems — from model training to deployment at scale.
            Currently at GDIT, designing healthcare analytics with Python, SQL, Snowflake &amp; Databricks.
          </motion.p>
          <HeroStatPills />
          <MLPipelineGraphic />
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <PremiumButton href="#projects">View My Work</PremiumButton>
            <PremiumButton href="#contact" variant="secondary">Get In Touch</PremiumButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => (
    <SectionShell id="about" theme="light">
      <SectionHeader
        eyebrow="About"
        title="Building ML systems that scale"
        subtitle="Five years of production data science — from model training to deployment at GDIT, Scale AI, and American Express."
      />
      <div className="max-w-4xl mx-auto">
          <motion.p 
            className="text-lg text-[#424245] mb-6 leading-relaxed text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            I am a Data Scientist with 5 years of experience specializing in machine learning, managing the entire ML lifecycle from data collection to deployment and monitoring. I have proven expertise in building and productionizing ML models, collaborating with cross-functional teams to deliver scalable solutions.
          </motion.p>
          <motion.p 
            className="text-lg text-[#424245] mb-6 leading-relaxed text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Currently at General Dynamics Information Technology, I design and deploy scalable, end-to-end healthcare analytics solutions using Python, SQL, Snowflake, and Databricks. I develop interactive business intelligence dashboards and statistical models to support executive decision-making.
          </motion.p>
          <motion.p 
            className="text-lg text-[#424245] mb-12 leading-relaxed text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            My strength lies in building scalable ML and analytics solutions using PyTorch, TensorFlow, Snowflake, Docker, Kubernetes, and cloud platforms including AWS, SageMaker, and Databricks.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Machine Learning', desc: 'PyTorch, TensorFlow, and advanced algorithms for production ML systems', icon: '🎯' },
              { title: 'ML Production', desc: 'Docker, Kubernetes, deployment pipelines, Grafana & Datadog monitoring', icon: '⚡' },
              { title: 'Big Data & Cloud', desc: 'Spark, Airflow, AWS, SageMaker, Databricks at enterprise scale', icon: '📊' }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                className="premium-card p-8 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">{skill.title}</h3>
                <p className="text-[#86868b] leading-relaxed text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
      </div>
    </SectionShell>
  );

const PersonalInterests = () => (
    <SectionShell id="interests" theme="frost">
      <SectionHeader
        eyebrow="Beyond work"
        title="Personal interests"
        subtitle="What keeps me inspired and energized outside of data science."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Music & Singing', emoji: '🎵', desc: 'Exploring genres and finding creative perspectives on problems.' },
              { title: 'Horror Books', emoji: '📚', desc: 'A good thriller keeps the mind sharp and imagination active.' },
              { title: 'Long Drives', emoji: '🚗', desc: 'Clearing my mind with good music and fresh ideas.' },
              { title: 'Hiking & Nature', emoji: '🥾', desc: 'Disconnecting from tech to reconnect with nature.' },
              { title: 'Cooking', emoji: '👨‍🍳', desc: 'Experiment, measure, create — like data science with flavor.' },
              { title: 'Team Collaboration', emoji: '🎯', desc: 'Thriving in groups and working independently when needed.' },
              { title: 'Sarcastic Humor', emoji: '😄', desc: 'A joyful perspective — life is too short to take everything seriously.' },
              { title: 'Continuous Learning', emoji: '🚀', desc: 'Always exploring new technologies and methodologies.' },
            ].map((interest, index) => (
              <motion.div
                key={interest.title}
                className="premium-card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="text-2xl mb-3 block">{interest.emoji}</span>
                <h3 className="text-base font-semibold text-[#1d1d1f] mb-2">{interest.title}</h3>
                <p className="text-[#86868b] text-sm leading-relaxed">{interest.desc}</p>
              </motion.div>
            ))}
      </div>
    </SectionShell>
  );

interface Repository {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
  homepage: string | null;
  private: boolean;
}

const ProjectCard = ({ repo, index, getLanguageColor, formatDate }: { repo: Repository; index: number; getLanguageColor: (lang: string) => string; formatDate: (date: string) => string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={repo.id}
      className="premium-card overflow-hidden relative group"
      initial={{ opacity: 0, y: 60, rotateX: 20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
              duration: 0.4,
        delay: index * 0.08,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      viewport={{ once: false, margin: "-50px" }}
      whileHover={{ y: -10, scale: 1.03, rotateX: 5, rotateY: 2 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glowing border on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-bl-full pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
      />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-semibold text-gray-800">{repo.name}</h4>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {repo.private ? 'Private' : 'Public'}
          </span>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {repo.description || 'No description available'}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.language && (
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLanguageColor(repo.language)}`}>
              {repo.language}
            </span>
          )}
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            ⭐ {repo.stargazers_count}
          </span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            🍴 {repo.forks_count}
          </span>
        </div>
        
        <div className="text-sm text-gray-500 mb-4">
          Updated: {formatDate(repo.updated_at)}
        </div>
        
        <div className="flex gap-3 relative z-10">
          <motion.a
            href={`/projects/${repo.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold relative"
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
            <motion.svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  // Upcoming/Planned Data Science Projects
  const upcomingProjects = [
    {
      title: 'Advanced Causal Inference Framework',
      description: 'Developing sophisticated causal inference models for marketing attribution and campaign lift measurement. Implementing advanced econometric techniques to quantify true incremental impact of marketing campaigns.',
      tech: ['Python', 'R', 'Causal Inference', 'Econometrics', 'Propensity Score Matching'],
      github: 'https://github.com/Plpraju2001',
      status: 'In Development',
      type: 'upcoming',
      slug: 'causal-inference-framework'
    },
    {
      title: 'Real-time Customer Churn Prediction System',
      description: 'Building end-to-end ML pipeline for real-time churn prediction using advanced time-series analysis and ensemble methods. Features automated model retraining and A/B testing framework.',
      tech: ['Python', 'MLOps', 'Time Series', 'Ensemble Methods', 'AWS'],
      github: 'https://github.com/Plpraju2001',
      status: 'In Development',
      type: 'upcoming',
      slug: 'churn-prediction-system'
    },
    {
      title: 'Marketing Mix Modeling (MMM) Platform',
      description: 'Creating comprehensive MMM solution using Bayesian methods and hierarchical modeling to optimize marketing spend allocation across channels and measure long-term brand effects.',
      tech: ['Python', 'Bayesian Statistics', 'Hierarchical Modeling', 'Marketing Analytics'],
      github: 'https://github.com/Plpraju2001',
      status: 'In Development',
      type: 'upcoming',
      slug: 'marketing-mix-modeling'
    },
    {
      title: 'Advanced A/B Testing & Experimentation Platform',
      description: 'Developing statistical testing framework with proper power analysis, sequential testing, and causal inference capabilities for large-scale marketing experiments.',
      tech: ['Python', 'Statistics', 'Sequential Testing', 'Power Analysis'],
      github: 'https://github.com/Plpraju2001',
      status: 'In Development',
      type: 'upcoming',
      slug: 'ab-testing-platform'
    }
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Plpraju2001/repos?sort=updated&per_page=100');
        if (response.ok) {
          const repos = await response.json();
          // Filter out unwanted repositories
          const filteredRepos = repos.filter((repo: Repository) => 
            !['raju-portfolio', 'cursor', 'portf'].includes(repo.name.toLowerCase())
          );
          setRepositories(filteredRepos);
        } else {
          setRepositories([]);
        }
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setRepositories([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchRepos();
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'Python': 'bg-yellow-100 text-yellow-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'TypeScript': 'bg-blue-100 text-blue-800',
      'Java': 'bg-orange-100 text-orange-800',
      'R': 'bg-blue-100 text-blue-800',
      'Jupyter Notebook': 'bg-orange-100 text-orange-800',
      'HTML': 'bg-red-100 text-red-800',
      'CSS': 'bg-blue-100 text-blue-800',
      'SQL': 'bg-purple-100 text-purple-800',
      'Shell': 'bg-gray-100 text-gray-800',
      'PowerShell': 'bg-blue-100 text-blue-800'
    };
    return colors[language] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <SectionShell id="projects" theme="mesh">
      <SectionHeader
        eyebrow="Portfolio"
        title="Data science & engineering projects"
        subtitle="Completed GitHub work and upcoming initiatives in causal inference, MMM, and experimentation."
      />
      <DataScienceFloatingSymbols />

      <div>
        {repositories.length > 0 && (
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-bold text-gray-800 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              Completed Projects (GitHub)
            </motion.h3>
            
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <motion.div 
                  className="rounded-full border-2 border-blue-600"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  style={{ width: 48, height: 48 }}
                >
                  <motion.div
                    className="rounded-full bg-blue-600"
                    initial={{ width: 4, height: 4 }}
                    animate={{ width: 16, height: 16 }}
                    transition={{ duration: 0.25, repeat: Infinity, ease: "easeInOut" }}
                    style={{ margin: 'auto', marginTop: 4 }}
                  />
                </motion.div>
                <span className="ml-3 text-gray-600">Loading projects...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {repositories.map((repo, index) => (
                  <ProjectCard 
                    key={repo.id}
                    repo={repo}
                    index={index}
                    getLanguageColor={getLanguageColor}
                    formatDate={formatDate}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Upcoming Projects Section */}
        <div>
          <motion.h3 
            className="text-2xl font-bold text-gray-800 mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.35,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            Upcoming Data Science Projects
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="premium-card overflow-hidden p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-start mb-3 gap-3">
                <h4 className="text-lg font-semibold text-[#1d1d1f]">{project.title}</h4>
                <span className="tag-pill shrink-0">{project.status}</span>
              </div>
              <p className="text-[#424245] mb-4 leading-relaxed text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag-pill">{tech}</span>
                  ))}
                </div>
                
                <motion.a
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-[#0071e3] hover:text-[#0077ed] font-medium text-sm"
                  whileHover={{ x: 4 }}
                >
                  View project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

const Experience = () => {
  interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    location: string;
    logo: string;
    logoFallback: string;
    logoSVG?: string;
    achievements: string[];
  }

  const experiences: ExperienceItem[] = [
    {
      title: 'Data Scientist',
      company: 'General Dynamics Information Technology',
      period: 'May 2026 - Present',
      location: 'Massachusetts, United States · Remote',
      logo: '/logos/gdit-logo.png',
      logoFallback: '/logos/gdit-logo.png',
      achievements: [
        'Designed and deployed scalable, end-to-end healthcare analytics solutions leveraging Python, SQL, Snowflake, and Databricks to drive significant operational efficiency and cost optimization',
        'Executed comprehensive analyses of multi-million record datasets to derive actionable business insights, identify critical anomalies, and elevate organizational data quality standards',
        'Architected high-performance analytical workflows and optimized complex SQL queries to ensure robust performance within large-scale, high-concurrency cloud environments',
        'Spearheaded data-driven strategic initiatives by developing interactive business intelligence dashboards and sophisticated statistical models to support executive-level decision-making',
        'Collaborated with cross-functional teams to deliver enterprise-grade analytical solutions, adhering to modern data engineering best practices and cloud-native development standards',
        'Integrated advanced AI-powered automation tools into data pipelines to accelerate insight generation cycles and enhance overall organizational productivity',
        'Provided key technical leadership in enterprise cloud modernization initiatives, focusing on the migration, architectural design, and performance optimization of high-scale data platforms',
        'Resolved complex business challenges by applying rigorous data validation, comprehensive root cause analysis, and advanced exploratory data modeling techniques to ensure reliable and scalable outcomes'
      ]
    },
    {
      title: 'Senior Data Scientist',
      company: 'Scale AI',
      period: 'Jun 2024 - May 2026',
      location: 'San Francisco, CA',
      logo: '/logos/scale-ai-logo.png',
      logoFallback: '/logos/scale-ai-logo.png',
      logoSVG: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMwIiBoZWlnaHQ9IjEzMCIgdmlld0JveD0iMCAwIDEzMCAxMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxMzAiIGZpbGw9IiMwMDAwMDAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U2NhbGUgQUk8L3RleHQ+PC9zdmc+',
      achievements: [
        'Managed the entire Machine Learning lifecycle, from data collection to deployment and monitoring, utilizing Python and SQL to enhance model performance',
        'Collaborated with cross-functional teams to productionize ML models, ensuring seamless integration and operational efficiency',
        'Developed and implemented advanced ML algorithms, including Gradient Boosting Trees and Neural Networks, resulting in a 30% increase in model accuracy',
        'Optimized code for production environments using Docker and Kubernetes to ensure robustness and scalability of ML services',
        'Enhanced data pipelines using Apache Kafka and Spark, improving data processing efficiency by 40%'
      ]
    },
    {
      title: 'Machine Learning Engineer II',
      company: 'American Express',
      period: 'Jun 2020 - Dec 2022',
      location: 'New York, NY',
      logo: '/logos/american-express-logo.svg',
      logoFallback: 'https://logo.clearbit.com/americanexpress.com',
      logoSVG: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMwIiBoZWlnaHQ9IjEzMCIgdmlld0JveD0iMCAwIDEzMCAxMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxMzAiIGZpbGw9IiMwMDZGRkMiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+QU1FWDwvdGV4dD48L3N2Zz4=',
      achievements: [
        'Engineered and deployed machine learning models for fraud detection, utilizing Logistic Regression and Deep Learning techniques to reduce false positives by 25%',
        'Managed the deployment of ML models using AWS Sagemaker, ensuring scalability and reliability in a cloud environment supporting over 1 million transactions daily',
        'Collaborated with data engineering teams to design and optimize data pipelines, leveraging Apache Airflow and EMR to streamline data processing',
        'Researched and integrated large language models (LLMs) and prompt engineering techniques, resulting in a 20% increase in customer engagement',
        'Developed RESTful APIs using Flask and FastAPI to facilitate seamless integration of ML models into existing applications'
      ]
    }
  ];

  return (
    <SectionShell id="experience" theme="dark">
      <SectionHeader
        eyebrow="Career"
        title="Professional experience"
        subtitle="Building production ML and analytics systems at enterprise scale."
        light
      />

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              className="premium-card-dark p-6 md:p-8 flex flex-col md:flex-row items-start gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-blue-300 font-medium">{exp.company}</p>
                    {exp.location && <p className="text-gray-400 text-sm mt-1">{exp.location}</p>}
                  </div>
                  <span className="text-gray-400 text-sm whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-300 leading-relaxed flex items-start text-sm">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: achievement.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-24 h-24 md:w-28 md:h-28 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center p-3">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (exp.logoFallback && !target.src.includes(exp.logoFallback)) {
                        target.src = exp.logoFallback;
                      } else if (exp.logoSVG) {
                        target.src = exp.logoSVG;
                      }
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
    </SectionShell>
  );
};

const Blog = () => {
  const latestPost = getLatestBlogPost();
  
  return (
    <SectionShell id="blog" theme="frost">
      <SectionHeader
        eyebrow="Writing"
        title="Data science blog"
        subtitle="Deep dives into causal inference, marketing analytics, and advanced ML."
      />

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="premium-card p-8 md:p-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {['Causal Inference', 'Marketing Analytics', 'Econometrics', 'A/B Testing'].map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider text-[#0071e3] mb-2">Latest · {latestPost.date}</p>
            <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">&ldquo;{latestPost.title}&rdquo;</h3>
            <p className="text-[#424245] mb-6 leading-relaxed">{latestPost.excerpt}</p>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4 text-sm text-[#86868b]">
                <span>{latestPost.readTime}</span>
                <span className="flex items-center gap-1 text-rose-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  {latestPost.likes} likes
                </span>
              </div>
              <PremiumButton href="/blog">Read article</PremiumButton>
            </div>
          </motion.div>
        </div>
    </SectionShell>
  );
};

const Education = () => (
  <SectionShell id="education" theme="light">
      <SectionHeader
        eyebrow="Education"
        title="Degrees & certifications"
        subtitle="Academic foundation and professional credentials in data science and cloud."
      />

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Master's — clean featured card, no spotlight banner */}
        <motion.div
          className="edu-masters-card rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex-1">
            <span className="tag-pill mb-4">Master&apos;s Degree</span>
            <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">M.S. Information Technology</h3>
            <p className="text-[#0071e3] font-medium mb-1">Clark University · Worcester, MA</p>
            <p className="text-[#86868b] text-sm mb-4">Jan 2023 – May 2024 · GPA 3.6</p>
            <p className="text-[#424245] mb-5 leading-relaxed">
              Graduate coursework in data science, machine learning, cloud computing, business intelligence, database systems, and enterprise architecture.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Data Science', 'Machine Learning', 'Cloud Computing', 'Business Intelligence'].map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-32 h-32 md:w-36 md:h-36 bg-white rounded-2xl border border-blue-100 flex items-center justify-center p-4 shadow-sm">
              <Image
                src="/logos/clark-university-logo.png"
                alt="Clark University"
                width={120}
                height={120}
                className="object-contain w-full h-full"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Clark_University_seal.svg/200px-Clark_University_seal.svg.png';
                }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="premium-card p-8 flex flex-col md:flex-row items-start gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex-1">
            <span className="tag-pill mb-3">Bachelor&apos;s Degree</span>
            <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">Mechanical Engineering</h3>
            <p className="text-[#0071e3] font-medium mb-1">Avanthi Institute of Engineering & Technology</p>
            <p className="text-[#86868b] text-sm mb-2">Jun 2019 – Jul 2022 · Grade: A</p>
            <p className="text-[#424245]">Strong foundation in critical thinking and analytical problem-solving.</p>
          </div>
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-24 h-24 bg-white rounded-xl border border-gray-100 flex items-center justify-center p-3">
              <Image
                src="/logos/jntuk-logo.png"
                alt="Avanthi Institute"
                width={80}
                height={80}
                className="object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/150?text=Avanthi';
                }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="premium-card p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-[#1d1d1f] mb-6">Professional certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://linkedin.com/in/pericharla2k1/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card p-5 text-center hover:no-underline block"
            >
              <h4 className="font-semibold text-[#1d1d1f] mb-1">View all certifications</h4>
              <p className="text-sm text-[#86868b]">LinkedIn profile</p>
            </a>
            <a
              href="https://www.datacamp.com/certificate/DSA0016288556604"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card p-5 text-center hover:no-underline block"
            >
              <Image src="/logos/datacamp-logo.png" alt="DataCamp" width={100} height={40} className="object-contain h-10 w-auto mx-auto mb-2" />
              <h4 className="font-semibold text-[#1d1d1f] mb-1">Data Scientist Associate</h4>
              <p className="text-sm text-[#86868b]">DataCamp · Jul 2026</p>
            </a>
            {[
              { name: 'AWS Certified ML – Specialty', org: 'Amazon Web Services' },
              { name: 'Google Professional ML Engineer', org: 'Google Cloud' },
              { name: 'Databricks Certified ML Professional', org: 'Databricks' },
              { name: 'Certified Analytics Professional', org: 'INFORMS' },
            ].map((cert) => (
              <div key={cert.name} className="premium-card p-5 text-center">
                <h4 className="font-semibold text-[#1d1d1f] mb-1 text-sm">{cert.name}</h4>
                <p className="text-sm text-[#86868b]">{cert.org}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
  </SectionShell>
);


const Contact = () => (
  <SectionShell id="contact" theme="ink">
      <SectionHeader
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Open to new opportunities and collaborations on complex data challenges."
        light
      />

      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <motion.div
            className="premium-card-dark p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400 text-sm mb-4">raju.perich@gmail.com</p>
            <PremiumButton href="mailto:raju.perich@gmail.com">Send email</PremiumButton>
          </motion.div>

          <motion.div
            className="premium-card-dark p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-400 text-sm mb-4">408-664-0364</p>
            <PremiumButton href="tel:+14086640364" variant="secondary" light>Call now</PremiumButton>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PremiumButton href="https://linkedin.com/in/pericharla2k1" variant="secondary" light>LinkedIn</PremiumButton>
          <PremiumButton href="https://linkedin.com/in/pericharla2k1/details/certifications/" variant="secondary" light>Certifications</PremiumButton>
        </div>
      </div>
  </SectionShell>
);

const Footer = () => (
  <footer className="bg-[#f5f5f7] border-t border-black/5 py-10">
    <div className="container mx-auto px-6 max-w-6xl text-center">
      <div className="flex justify-center gap-6 mb-4">
        <motion.a
          href="https://github.com/Plpraju2001"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/pericharla2k1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </motion.a>
      </div>
      <p className="text-[#86868b] text-sm">&copy; 2026 Lakshmipathiraju Pericharla</p>
    </div>
      </footer>
);

// Fixed Profile Picture Component - Hidden on mobile, shown on larger screens
const FixedProfilePicture = () => {
  const [imageError, setImageError] = useState(false);
  const profileImage = '/profile_picture.jpg'; // Profile picture

  return (
    <div className="hidden md:block fixed top-20 right-6 z-50">
      <div className="surface-glass rounded-2xl p-4 shadow-lg">
        {!imageError ? (
          <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-2 sm:border-4 border-blue-500 overflow-hidden profile-ring-glow">
            <img
              src={profileImage}
              alt="Lakshmipathiraju Pericharla"
              width={128}
              height={128}
              className="w-full h-full object-cover object-center"
              onError={() => setImageError(true)}
              loading="eager"
            />
          </div>
        ) : (
          <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-2 sm:border-4 border-blue-500 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-lg sm:text-2xl font-bold">
            LP
          </div>
        )}
        <div className="mt-2 sm:mt-3 text-center">
          <h3 className="text-xs sm:text-sm font-semibold text-gray-800 tracking-tight">Raju P</h3>
        </div>
        {/* Navigation Menu - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:block mt-4 space-y-2">
          {['About', 'Interests', 'Projects', 'Experience', 'Blog', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={item === 'Blog' ? '/blog' : `#${item.toLowerCase()}`}
              className="block text-xs text-gray-700 hover:text-blue-600 transition-colors duration-300 py-1 px-2 rounded hover:bg-blue-50"
              whileHover={{ x: 2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
        <>
          <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
            * {
              font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            body {
              font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            h1, h2, h3, h4, h5, h6 {
              font-weight: 700;
              letter-spacing: -0.02em;
            }
            .gradient-text {
              background: linear-gradient(135deg, #4285f4 0%, #6366f1 50%, #8b5cf6 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
          `}</style>
      <div className="min-h-screen bg-[#fafafa]">
      <ScrollProgressBar />
      <Header />
      <FixedProfilePicture />
      <Hero />
      <About />
      <PersonalInterests />
      <Projects />
      <Experience />
      <Blog />
      <Education />
      <Contact />
      <Footer />
    </div>
    </>
  );
}