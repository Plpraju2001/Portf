'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getLatestBlogPost } from './blog/blogData';

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
      duration: 3,
      repeat: Infinity,
      delay: delay * 0.5,
      ease: "easeInOut",
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
    {/* Professional bars with gradients and shadows */}
    <rect x="20" y="60" width="14" height="15" fill="url(#barGrad1)" opacity="0.6" rx="3" />
    <rect x="36" y="50" width="14" height="25" fill="url(#barGrad2)" opacity="0.6" rx="3" />
    <rect x="52" y="40" width="14" height="35" fill="url(#barGrad3)" opacity="0.6" rx="3" />
    <rect x="68" y="45" width="14" height="30" fill="url(#barGrad4)" opacity="0.6" rx="3" />
    <rect x="84" y="35" width="14" height="40" fill="url(#barGrad5)" opacity="0.6" rx="3" />
    <rect x="100" y="30" width="14" height="45" fill="#f59e0b" opacity="0.55" rx="3" />
    <rect x="116" y="55" width="14" height="20" fill="#10b981" opacity="0.55" rx="3" />
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
      duration: 3,
      repeat: Infinity,
      delay: delay * 0.5,
      ease: "easeInOut",
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
      duration: 3,
      repeat: Infinity,
      delay: delay * 0.5,
      ease: "easeInOut",
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
      duration: 3,
      repeat: Infinity,
      delay: delay * 0.5,
      ease: "easeInOut",
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
      duration: 3,
      repeat: Infinity,
      delay: delay * 0.5,
      ease: "easeInOut",
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
      duration: 3,
      repeat: Infinity,
      delay: delay * 0.5,
      ease: "easeInOut",
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
      duration: 3,
      repeat: Infinity,
      delay: delay * 0.5,
      ease: "easeInOut",
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

// Professional Data Science Watermark Container
const DataScienceWatermarks = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduced watermarks on mobile for better performance - full set on desktop
  const allWatermarks = [
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
  ];

  // On mobile, show only 6 watermarks (every 3rd one) for better performance
  const watermarks = isMobile ? allWatermarks.filter((_, idx) => idx % 3 === 0).slice(0, 6) : allWatermarks;

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
};

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
            duration: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-lg font-bold text-gray-800"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.3,
              delay: 0.2,
              type: "spring"
            }}
          >
            <motion.div 
              className="text-xl font-bold text-gray-800"
              whileHover={{ x: 3 }}
            >
              Lakshmipathiraju Pericharla
            </motion.div>
            <motion.div 
              className="text-sm font-medium text-blue-600 mt-1"
              animate={{
                textShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 8px rgba(59, 130, 246, 0.5)",
                  "0 0 0px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              United States
            </motion.div>
          </motion.div>
          <div className="flex space-x-4">
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
              href="https://www.linkedin.com/in/lakshmipathirajup"
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setLetters('Raju'.split(''));
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduced particles on mobile for better performance (15 on mobile, 30 on desktop)
  const particleCount = isMobile ? 10 : 30;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 3,
  }));

  const [imageError, setImageError] = useState(false);
  const profileImage = '/profile_picture.jpg';

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 pt-32 sm:pt-36 md:pt-0">
      {/* Data Science Watermarks */}
      <DataScienceWatermarks />
      {/* Elegant floating particles - Optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              willChange: 'transform',
              transform: 'translate3d(0,0,0)',
            }}
            animate={isMobile ? {
              y: [-10, 10, -10],
              opacity: [0.2, 0.4, 0.2],
            } : {
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Elegant floating background elements - Reduced blur on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}>
        <motion.div
          className={`absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'}`}
          style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
          animate={isMobile ? {} : {
            x: [0, 200, -100, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-400/20 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'}`}
          style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
          animate={isMobile ? {} : {
            x: [0, -150, 100, 0],
            y: [0, 100, -50, 0],
            scale: [1, 0.9, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 py-8 sm:py-0">
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
              <div className="w-24 h-24 rounded-full border-2 border-blue-500 overflow-hidden">
                <img
                  src={profileImage}
                  alt="Lakshmipathiraju Pericharla"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  style={{ 
                    objectPosition: '58% 30%', 
                    objectFit: 'cover',
                    transform: 'scale(1.3)',
                    transformOrigin: 'center center'
                  }}
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
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 tracking-tight"
            style={{ display: "inline-block" }}
          >
            Hello, I&apos;m{' '}
            <span className="inline-flex">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="gradient-text"
                  initial={{ opacity: 0, y: -100, rotate: -180, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotate: 0,
                    scale: 1
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: [0, 10, -10, 0],
                    y: [0, -15, 0],
                    transition: { duration: 0.4 }
                  }}
                  style={{ 
                    display: "inline-block",
                    marginLeft: "0.05em"
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
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
            Data Scientist – Financial & Compliance Analytics | Fraud Detection | Financial Risk & Business Assurance
          </motion.p>
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-gray-500 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.4,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
          >
            Data Scientist specializing in Financial Analytics, Fraud Detection, and Business Assurance, with over 3 years of experience applying statistical modeling and machine learning to reduce financial risk, improve audit accuracy, and support enterprise compliance.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.8,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
          >
            <motion.a
              href="#projects"
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl overflow-hidden group text-lg"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 40px rgba(59, 130, 246, 0.6), 0 0 0 0 rgba(59, 130, 246, 0.4)",
                  "0 20px 60px rgba(59, 130, 246, 0.8), 0 0 0 4px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <span className="relative z-10">View My Work</span>
              {/* Animated gradient wave */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.4 }}
              />
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="relative border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-2xl font-bold shadow-2xl overflow-hidden group text-lg bg-white"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 40px rgba(59, 130, 246, 0.3), 0 0 0 0 rgba(59, 130, 246, 0.4)",
                  "0 20px 60px rgba(59, 130, 246, 0.5), 0 0 0 4px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.span 
                className="relative z-10"
                initial={{ color: "#2563eb" }}
                whileHover={{ color: "white" }}
              >
                Get In Touch
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Glowing border */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-500 rounded-2xl"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.a>
            <motion.a
              href="/Lakshmipathiraju_resume.pdf"
              download
              className="relative bg-white text-blue-600 border-2 border-blue-600 px-10 py-5 rounded-2xl font-bold shadow-2xl overflow-hidden group text-lg"
              whileHover={{ scale: 1.15, y: -5, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 40px rgba(59, 130, 246, 0.3), 0 0 0 0 rgba(59, 130, 246, 0.4)",
                  "0 20px 60px rgba(59, 130, 246, 0.5), 0 0 0 4px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.span
                className="relative z-10"
                initial={{ color: "#2563eb" }}
                whileHover={{ color: "white" }}
              >
                Download Resume
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      <DataScienceWatermarks />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.21, 1.02, 0.73, 1]
          }}
          viewport={{ once: false, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.3, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: false }}
            >
              About 
            </motion.span>
            <motion.span
              className="gradient-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: false }}
            >
              Me
            </motion.span>
          </motion.h2>
          

          <motion.p 
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, x: -100, rotateX: 90 }}
            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.3,
              ease: [0.21, 1.02, 0.73, 1]
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            I am a Data Scientist specializing in Financial Analytics, Fraud Detection, and Business Assurance, with over 3 years of experience applying statistical modeling and machine learning to reduce financial risk, improve audit accuracy, and support enterprise compliance.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, x: 100, rotateX: -90 }}
            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.4,
              ease: [0.21, 1.02, 0.73, 1]
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            Currently at UnitedHealth Group, I work closely with Finance and Business Assurance teams to analyze large-scale payment and transaction data, where my analytics have helped identify $1.2M+ in recoverable overpayments. I design and deploy fraud and anomaly detection models using Python and SQL, and build Databricks-based data pipelines that process terabytes of data across multiple financial systems.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.5,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            Previously, at Brane Group, I focused on business risk and process optimization, developing predictive models to identify high-risk transactions and automating reconciliation and audit workflows. These solutions reduced audit cycle time by 40% and improved data reliability for internal compliance teams.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.6,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            My strength lies in bridging data science with business context—translating complex models into clear, actionable insights for finance leaders, auditors, and executives. I am experienced in building ETL pipelines, executive dashboards, and audit-ready analytics using Databricks, Snowflake, Tableau, and AWS.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-600 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.7,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            I bring a disciplined, results-driven approach to data science, with a strong focus on financial integrity, compliance, and measurable business impact.
          </motion.p>
          
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <p className="text-lg font-semibold text-gray-800 mb-4">Core Focus Areas:</p>
            <p className="text-base text-gray-600">
              Financial Risk Analytics · Fraud Detection · Compliance & Audit Analytics · ETL Automation · Databricks · Python · SQL · Tableau · Cloud Data Engineering
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Financial Risk Analytics', desc: 'Fraud Detection, Compliance & Audit Analytics, Statistical Modeling', icon: '🎯', gradient: 'from-blue-600 via-purple-600 to-pink-600', hoverGradient: 'from-blue-50 via-purple-50 to-pink-50' },
              { title: 'Data Engineering & ETL', desc: 'Databricks, SQL/Python Pipelines, Terabyte+ Data Processing, Cloud Data Engineering', icon: '⚡', gradient: 'from-purple-600 via-indigo-600 to-blue-600', hoverGradient: 'from-purple-50 via-indigo-50 to-blue-50' },
              { title: 'Business Analytics & BI', desc: 'Tableau, Power BI, Executive Dashboards, Audit-Ready Analytics', icon: '📊', gradient: 'from-pink-600 via-purple-600 to-blue-600', hoverGradient: 'from-pink-50 via-purple-50 to-blue-50' }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-gray-100 relative overflow-hidden group cursor-pointer transform-3d"
                initial={{ opacity: 0, y: 100, rotateY: 90, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2, 
                  type: "spring",
                  stiffness: 150,
                  damping: 20
                }}
                viewport={{ once: false, margin: "-50px" }}
                whileHover={{ y: -15, scale: 1.05, rotateY: 8, rotateX: 5, rotateZ: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated gradient border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20`}
                  initial={false}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Pulsing glow */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.gradient}`}
                  animate={{
                    opacity: [0.05, 0.1, 0.05],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Hover gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.hoverGradient} opacity-0 group-hover:opacity-100`}
                  initial={false}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-200%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 1 }}
                />
                
                {/* Animated icon with background */}
                <motion.div
                  className="relative z-10 mb-6"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-5xl mb-4"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                </motion.div>
                
                {/* Pulse effect rings */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full bg-blue-500"
                  animate={{
                    scale: [1, 2.5, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.3,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full border-2 border-blue-500"
                  animate={{
                    scale: [1, 3, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.5,
                    repeat: Infinity,
                  }}
                />
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight relative z-10">{skill.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PersonalInterests = () => {
  return (
    <section id="interests" className="py-20 bg-gradient-to-br from-white to-purple-50/20 relative">
      <DataScienceWatermarks />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-8 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.35, 
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            Personal Interests
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: 0.2,
              type: "spring",
              stiffness: 80
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            When I&apos;m not diving deep into data science, here&apos;s what keeps me inspired and energized:
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: '🎵 Music & Singing', 
                desc: 'I love to sing and explore different genres. Music helps me think creatively and find new perspectives on problems.',
                color: 'from-purple-500 to-pink-500'
              },
              { 
                title: '📚 Horror Books', 
                desc: "There's something thrilling about a good horror novel. It keeps my mind sharp and my imagination active.",
                color: 'from-gray-700 to-gray-900'
              },
              { 
                title: '🚗 Long Drives', 
                desc: "Nothing beats a long drive with good music. It's my way of clearing my mind and getting fresh ideas.",
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                title: '🥾 Hiking & Nature', 
                desc: 'Hiking helps me disconnect from technology and reconnect with nature. Great for problem-solving and reflection.',
                color: 'from-green-500 to-emerald-500'
              },
              { 
                title: '👨‍🍳 Cooking', 
                desc: 'Cooking is like data science - you experiment, measure, and create something amazing from raw ingredients.',
                color: 'from-orange-500 to-red-500'
              },
              { 
                title: '🎯 Team Collaboration', 
                desc: "I thrive in group settings and love being a team player. I'm also comfortable working independently when needed.",
                color: 'from-indigo-500 to-purple-500'
              },
              { 
                title: '😄 Sarcastic Humor', 
                desc: "I bring a joyful and sarcastic perspective to everything. Life's too short to take everything seriously!",
                color: 'from-yellow-500 to-orange-500'
              },
              { 
                title: '🚀 Continuous Learning', 
                desc: "I'm always exploring new technologies and methodologies. The data science field never stops evolving.",
                color: 'from-blue-600 to-purple-600'
              }
            ].map((interest, index) => (
              <motion.div
                key={interest.title}
                className="bg-white p-6 rounded-2xl border-2 border-gray-200 relative overflow-hidden group cursor-pointer transform-3d"
                initial={{ opacity: 0, y: 100, rotateX: -45, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.08, 
                  type: "spring",
                  stiffness: 150,
                  damping: 20
                }}
                viewport={{ once: false, margin: "-50px" }}
                whileHover={{ y: -12, scale: 1.08, rotateX: -5, rotateY: 3, rotateZ: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Continuous gradient glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${interest.color} rounded-2xl`}
                  animate={{
                    opacity: [0.03, 0.08, 0.03],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Gradient border on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 rounded-2xl`}
                  initial={false}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full"
                  initial={false}
                  whileHover={{ translateX: "100%" }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Floating emoji with bounce */}
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 mb-4 relative z-10 flex items-center gap-2"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1.2 + index * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                  }}
                >
                  <motion.span
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.15
                    }}
                  >
                    {interest.title.split(' ')[0]}
                  </motion.span>
                  <span className="text-base">{interest.title.split(' ').slice(1).join(' ')}</span>
                </motion.h3>
                
                {/* Glow dot */}
                <motion.div
                  className="absolute top-3 right-3 w-2 h-2 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${interest.color.includes('purple') ? 'rgb(147, 51, 234)' : interest.color.includes('blue') ? 'rgb(59, 130, 246)' : 'rgb(168, 85, 247)'})`
                  }}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [1, 0.5, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(0, 0, 0, 0)",
                      "0 0 10px 5px rgba(147, 51, 234, 0.5)",
                      "0 0 0 0 rgba(0, 0, 0, 0)",
                    ],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
                
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{interest.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

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
      className="bg-white rounded-xl shadow-lg overflow-hidden relative group cursor-pointer transform-3d"
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
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      <DataScienceWatermarks />
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4, 
            type: "spring",
            stiffness: 80,
            damping: 20
          }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.3, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            Data Science & Engineering <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: 0.3,
              type: "spring"
            }}
            viewport={{ once: false, margin: "-100px" }}
          >
            A combination of completed GitHub projects and upcoming advanced data science initiatives 
            focusing on causal inference, high-end data engineering, and sophisticated analytics solutions.
          </motion.p>
        </motion.div>

        {/* GitHub Projects Section */}
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
            viewport={{ once: false, margin: "-50px" }}
          >
            Upcoming Data Science Projects
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden relative group cursor-pointer transform-3d"
              initial={{ opacity: 0, y: 60, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              viewport={{ once: false, margin: "-50px" }}
              whileHover={{ y: -10, scale: 1.03, rotateX: -5, rotateY: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Pulse animation overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 pointer-events-none"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "linear",
                }}
              />
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
                  <motion.span 
                    className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                    animate={{
                      boxShadow: [
                        "0 0 0 0px rgba(234, 88, 12, 0.4)",
                        "0 0 0 4px rgba(234, 88, 12, 0)",
                      ],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  >
                    {project.status}
                  </motion.span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed relative z-10">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: techIndex * 0.05,
                        type: "spring",
                        stiffness: 200,
                        damping: 10
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <motion.a
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold relative z-10"
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
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduced particles on mobile (5 on mobile, 15 on desktop)
  const particleCount = isMobile ? 5 : 15;
  const experienceParticles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2,
  }));

  const experiences = [
    {
      title: 'Data Scientist – Financial & Compliance Analytics',
      company: 'UnitedHealth Group',
      period: 'Jul 2024 - Present',
      location: 'San Jose, California, United States · Hybrid',
      type: 'Contract',
      logo: '/logos/unitedhealth-group-logo.png',
      logoFallback: 'https://logos-world.net/wp-content/uploads/2020/11/UnitedHealth-Group-Logo.png',
      achievements: [
        'Partnered with Business Assurance and Finance teams to analyze payment patterns and detect anomalies, identifying $1.2M+ in recoverable claim overpayments',
        'Developed statistical and ML-based fraud detection models using Python (Scikit-learn, Pandas) and SQL, increasing accuracy of anomaly detection by 25%',
        'Built Databricks-based pipelines for real-time transaction validation and reconciliation across multiple data sources (>3 TB)',
        'Created Tableau dashboards visualizing financial KPIs, audit exceptions, and BAC risk indicators, used by leadership for compliance oversight',
        'Performed exploratory data analysis (EDA) to uncover process inefficiencies, enabling policy refinements that improved operational accuracy',
        'Designed data documentation templates and data-quality standards to align business definitions with functional specifications',
        'Presented analytic results to cross-functional leadership, articulating insights in both technical and financial terms for business decisions'
      ]
    },
    {
      title: 'Data Scientist – Business Risk & Process Optimization',
      company: 'Brane Group',
      period: 'Jan 2021 - Dec 2022',
      location: 'Visakhapatnam, Andhra Pradesh, India · On-site',
      type: 'Full-time',
      logo: '/logos/brane-enterprises-logo.png',
      logoFallback: 'https://via.placeholder.com/150?text=Brane+Group',
      achievements: [
        'Developed predictive models in Python and R for identifying fraudulent or high-risk financial transactions using transaction frequency, location, and behavioral data',
        'Engineered ETL workflows in SQL, Spark, and Airflow to aggregate and cleanse financial and compliance data for advanced analytics',
        'Built Tableau and Power BI dashboards summarizing fraud metrics, loss events, and process KPIs for internal audit teams',
        'Partnered with auditors and engineers to translate business logic into data rules and statistical validation checks for automation',
        'Automated reconciliation scripts in Python and SQL between Snowflake and MySQL, reducing audit cycle time by 40%',
        'Documented feature logic, data lineage, and analytic assumptions for traceability and compliance with financial audit standards',
        'Collaborated with product managers and compliance leads to define analytic requirements, performance metrics, and data validation goals'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 relative overflow-hidden">
      <DataScienceWatermarks />
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {experienceParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              willChange: 'transform',
              transform: 'translate3d(0,0,0)',
            }}
            animate={isMobile ? {
              y: [-8, 8, -8],
              opacity: [0.15, 0.3, 0.15],
            } : {
              y: [-15, 15, -15],
              x: [-8, 8, -8],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
        <motion.div
          className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-to-br from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            Experience
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            My professional journey in data science and analytics.
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="bg-white rounded-xl shadow-lg p-6 mb-6 flex items-start gap-6 relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
                damping: 20
              }}
              viewport={{ once: false, margin: "-50px" }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Animated border on hover */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-500 opacity-0 group-hover:opacity-100 rounded-xl"
                initial={false}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Subtle gradient overlay */}
              <motion.div
                className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-bl-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />

              <div className="flex-1 relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <motion.h3 
                      className="text-xl font-semibold text-gray-800"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.p 
                      className="text-blue-600 font-medium"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.company}
                    </motion.p>
                    {exp.location && (
                      <motion.p 
                        className="text-gray-500 text-sm mt-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {exp.location}
                      </motion.p>
                    )}
                    {exp.type && (
                      <motion.p 
                        className="text-gray-500 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {exp.type}
                      </motion.p>
                    )}
                  </div>
                  <motion.span 
                    className="text-gray-500 text-sm mt-1 md:mt-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.period}
                  </motion.span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li 
                      key={idx} 
                      className="text-gray-600 leading-relaxed flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 3 }}
                    >
                      <motion.span 
                        className="text-blue-600 font-bold mr-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: idx * 0.3 }}
                      >
                        •
                      </motion.span>
                      <span dangerouslySetInnerHTML={{ __html: achievement.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800 font-semibold">$1</strong>') }} />
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0 flex items-center justify-center relative z-10">
                <motion.div 
                  className="min-w-[130px] min-h-[130px] max-w-[150px] max-h-[150px] bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center p-4 shadow-sm"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    width={130}
                    height={130}
                    className="object-contain w-auto h-auto max-w-full max-h-full"
                    onError={(e) => {
                      // Fallback to external URL if local image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.src = exp.logoFallback;
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const latestPost = getLatestBlogPost();
  
  return (
    <section id="blog" className="py-20 bg-gray-50 relative overflow-hidden">
      <DataScienceWatermarks />
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-10 w-56 h-56 bg-gradient-to-br from-purple-200/25 to-pink-200/25 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-48 h-48 bg-gradient-to-br from-blue-200/25 to-cyan-200/25 rounded-full blur-3xl"
          animate={{
            x: [0, -35, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            Data Science Blog
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            Insights, tutorials, and deep dives into advanced data science concepts, 
            causal inference, and marketing analytics.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-lg shadow-md p-8 text-center"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
          >
            <div className="mb-6">
              <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon: Advanced Data Science Content</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I&apos;m currently working on comprehensive blog posts covering advanced topics in causal inference, 
              marketing mix modeling, and sophisticated analytics techniques. Stay tuned for deep dives into 
              the methodologies that drive real business impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Causal Inference</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Marketing Analytics</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Econometrics</span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">A/B Testing</span>
            </div>
            <motion.div
              className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-6 text-white shadow-2xl max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Latest Deep Dive</h3>
                    <p className="text-sm text-white/80">{latestPost.date}</p>
                  </div>
                </div>
                <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-semibold">
                  NEW
                </div>
              </div>
              
              <h4 className="text-lg font-bold mb-2">&quot;{latestPost.title}&quot;</h4>
              <p className="text-white/90 mb-4 text-sm leading-relaxed">
                {latestPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-xs text-white/80">
                  <span className="flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    {latestPost.readTime}
                  </span>
                </div>
                <motion.a
                  href="/blog"
                  className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Deep Dive
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Education = () => (
  <section id="education" className="py-20 bg-gray-50 relative overflow-hidden">
    <DataScienceWatermarks />
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-br from-green-200/20 to-teal-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.h2 
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          Education & Certifications
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          My academic background and professional certifications that drive my expertise.
        </motion.p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4"
            initial={{ opacity: 0, y: 60, x: -60 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ y: -5, x: 3 }}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Master&apos;s degree, Information Technology</h3>
              <p className="text-blue-600 font-medium mb-2">Clark University</p>
              <p className="text-gray-500 text-sm mb-2">Jan 2023 - May 2024 · Grade: 3.55</p>
              <p className="text-gray-600">Advanced studies in high-end data science, machine learning, cloud computing, database systems, and information systems management. Specialized coursework in data analytics, business intelligence, and enterprise architecture.</p>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="min-w-[120px] min-h-[120px] max-w-[140px] max-h-[140px] bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center p-4 shadow-sm">
                <Image
                  src="/logos/clark-university-logo.png"
                  alt="Clark University Logo"
                  width={120}
                  height={120}
                  className="object-contain w-auto h-auto max-w-full max-h-full"
                  onError={(e) => {
                    // Fallback to external URL if local image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Clark_University_seal.svg/200px-Clark_University_seal.svg.png';
                  }}
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4"
            initial={{ opacity: 0, y: 60, x: 60 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.35, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ y: -5, x: -3 }}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bachelor&apos;s degree, Mechanical Engineering</h3>
              <p className="text-blue-600 font-medium mb-2">Avanthi Institute of Engineering & Technology</p>
              <p className="text-gray-500 text-sm mb-2">Jun 2019 - Jul 2022 · Grade: A</p>
              <p className="text-gray-600">Strong foundation in critical thinking and basic aptitude skills with good understanding of analytical problem-solving methodologies.</p>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="min-w-[120px] min-h-[120px] max-w-[140px] max-h-[140px] bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center p-4 shadow-sm">
                <Image
                  src="/logos/jntuk-logo.png"
                  alt="Avanthi Institute Logo"
                  width={120}
                  height={120}
                  className="object-contain w-auto h-auto max-w-full max-h-full"
                  onError={(e) => {
                    // Fallback to placeholder if local image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/150?text=Avanthi+Institute';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false, margin: "-50px" }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <motion.h3 
            className="text-xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            viewport={{ once: false }}
          >
            Professional Certifications
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.a
              href="https://www.linkedin.com/in/lakshmipathirajup/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.1 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.03, y: -3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-purple-200/50 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <div className="flex items-center justify-center mb-2 relative z-10">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <h4 className="font-semibold text-gray-800">View All Certifications</h4>
              </div>
              <p className="text-sm text-gray-600 relative z-10">Click to view my LinkedIn certifications</p>
            </motion.a>
            <motion.div 
              className="text-center p-4 bg-blue-50 rounded-lg relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.2 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.03, y: -3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-200/50 to-yellow-200/50 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <h4 className="font-semibold text-gray-800 relative z-10">AWS Certified Data Analytics</h4>
              <p className="text-sm text-gray-600 relative z-10">Amazon Web Services</p>
            </motion.div>
            <motion.div 
              className="text-center p-4 bg-blue-50 rounded-lg relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.3 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.03, y: -3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-200/50 to-teal-200/50 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <h4 className="font-semibold text-gray-800 relative z-10">Power BI Data Analyst Associate</h4>
              <p className="text-sm text-gray-600 relative z-10">Microsoft Certified</p>
            </motion.div>
            <motion.div 
              className="text-center p-4 bg-blue-50 rounded-lg relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.4 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.03, y: -3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-200/50 to-pink-200/50 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <h4 className="font-semibold text-gray-800 relative z-10">Azure Database Administrator</h4>
              <p className="text-sm text-gray-600 relative z-10">Microsoft Certified</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);


const Contact = () => (
  <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-br from-white to-blue-50/30">
    <DataScienceWatermarks />
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 0.85, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
        className="text-center max-w-2xl mx-auto"
      >
        <motion.h2 
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          I&apos;m always interested in new opportunities and collaborations. 
          Let&apos;s discuss how we can work together to solve complex data challenges and drive business growth.
        </motion.p>
        
        {/* Contact Information in Smaller Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg"
            initial={{ opacity: 0, x: -60, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ y: -5, scale: 1.03, rotate: 1 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-sm mb-3">Plpraju.2000@gmail.com</p>
          <motion.a
            href="mailto:Plpraju.2000@gmail.com"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Email
          </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl p-6 text-white shadow-lg"
            initial={{ opacity: 0, x: 60, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: false, margin: "-50px" }}
            whileHover={{ y: -5, scale: 1.03, rotate: -1 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-sm mb-3">+1 (508) 410-3136</p>
              <motion.a
                href="tel:+15084103136"
                className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Additional Links */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.a
            href="https://www.linkedin.com/in/lakshmipathirajup"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect on LinkedIn
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/lakshmipathirajup/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Certifications
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-100 text-gray-800 py-8">
    <div className="container mx-auto px-6 text-center">
      <div className="flex justify-center space-x-6 mb-4">
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
          href="https://www.linkedin.com/in/lakshmipathirajup"
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
      <p className="text-gray-400">&copy; 2024 Lakshmipathiraju Pericharla. All rights reserved.</p>
    </div>
      </footer>
);

// Fixed Profile Picture Component - Hidden on mobile, shown on larger screens
const FixedProfilePicture = () => {
  const [imageError, setImageError] = useState(false);
  const profileImage = '/profile_picture.jpg'; // Profile picture

  return (
    <div className="hidden md:block fixed top-20 right-4 sm:right-6 z-50">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-2xl border border-gray-200/50">
        {!imageError ? (
          <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-2 sm:border-4 border-blue-500 overflow-hidden">
            <img
              src={profileImage}
              alt="Lakshmipathiraju Pericharla"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              style={{ 
                objectPosition: '58% 30%', 
                objectFit: 'cover',
                transform: 'scale(1.3)',
                transformOrigin: 'center center'
              }}
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
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
          `}</style>
      <div className="min-h-screen bg-white">
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