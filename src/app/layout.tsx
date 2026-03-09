import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lakshmipathiraju Pericharla - Data Scientist Portfolio",
  description: "Data Scientist with 5 years of experience specializing in machine learning, ML lifecycle management, and production systems. Currently at Scale AI, previously at American Express. Expert in building and deploying ML models at scale.",
  openGraph: {
    title: "Lakshmipathiraju Pericharla - Data Scientist",
    description: "Data Scientist with 5 years of experience specializing in machine learning, ML lifecycle management, and production systems. Currently at Scale AI, previously at American Express.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakshmipathiraju Pericharla - Data Scientist",
    description: "Data Scientist with 5 years of experience specializing in machine learning, ML lifecycle management, and production systems.",
  },
  icons: {
    icon: '/plp-favicon.svg',
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
    },
  },
  other: {
    'cache-control': 'no-cache, no-store, must-revalidate',
    'pragma': 'no-cache',
    'expires': '0',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
