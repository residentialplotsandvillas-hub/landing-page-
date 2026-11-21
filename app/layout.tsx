
import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import OPVNavbar from "./components/OPVNavbar";
import OPVFooter from "./components/OPVFooter";


/* ==========================================
   OPV INDIA - PREMIUM CORPORATE FONTS
========================================== */

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

/* ==========================================
   WEBSITE CONFIGURATION
========================================== */

const SITE_URL = "https://www.openplotsandvillas.in";
const SITE_NAME = "OPV - Open Plots & Villas";

/* ==========================================
   SEO METADATA - PAN INDIA
========================================== */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "OPV India | AI-Powered Real Estate Portal | Post Property Free",
    template: "%s | OPV India",
  },

  description:
    "Explore Open Plots, Villas, Apartments, Agricultural Lands, Farm Houses and Commercial Properties across India. Buy, Sell, Rent and Post Property Free with OPV AI.",

  applicationName: SITE_NAME,

  keywords: [
    "OPV",
    "Open Plots and Villas",
    "OPV India",
    "AI Real Estate Portal India",
    "Property Portal India",
    "Buy Property India",
    "Sell Property Online",
    "Rent Property India",
    "Post Property Free",
    "Free Property Listing India",
    "Open Plots for Sale",
    "Villas for Sale",
    "Apartments for Sale",
    "Agricultural Lands India",
    "Commercial Properties India",
    "Real Estate Developers India",
    "Property Agents India",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "OPV India | One India. One Property Platform.",
    description:
      "Discover properties across India with OPV AI. Buy, Sell, Rent and Post Property Free.",
  },

  twitter: {
    card: "summary_large_image",
    title: "OPV India | AI-Powered Real Estate Portal",
    description:
      "Explore properties across India. Post Property Free with OPV.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "real estate",
};

/* ==========================================
   RESPONSIVE VIEWPORT
========================================== */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#075B3B",
};

/* ==========================================
   ROOT LAYOUT
========================================== */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`
          ${inter.variable}
          ${manrope.variable}
          min-h-screen
          bg-white
          font-sans
          text-slate-900
          antialiased
        `}
      >
        <OPVNavbar />

        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        <OPVFooter />
      </body>
    </html>
  );
}
