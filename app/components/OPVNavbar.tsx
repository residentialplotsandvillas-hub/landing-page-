
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Download,
  Globe2,
  Menu,
  Plus,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";

const PORTAL = "https://www.openplotsandvillas.com";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.openplotsandvillas.opvapp";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "AI Features", href: "#features" },
  { label: "For Professionals", href: "#professionals" },
  { label: "360° Services", href: "#services" },
  { label: "Cities", href: "#cities" },
];

export default function OPVNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP PROMOTIONAL BAR */}
      <div className="bg-[#075B3B] px-4 py-2.5 text-center text-white">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-semibold sm:text-xs">
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#E7C982]" />
            India-Wide Property Discovery
          </span>

          <span className="hidden text-white/40 sm:inline">
            |
          </span>

          <span className="font-extrabold text-[#E7C982]">
            POST PROPERTY FREE
          </span>

          <span className="hidden text-white/40 sm:inline">
            |
          </span>

          <span>No Subscription • No Monthly Charges</span>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-[1320px] items-center justify-between gap-4 px-5 lg:px-8">
          {/* LOGO */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            aria-label="OPV India Home"
          >
            <div className="flex h-12 w-14 items-center justify-center rounded-xl bg-[#075B3B] text-xl font-black tracking-tight text-[#E7C982]">
              OPV
            </div>

            <div className="leading-tight">
              <div className="text-lg font-black tracking-tight text-[#075B3B] sm:text-xl">
                Open Plots & Villas
              </div>

              <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.13em] text-[#A98239] sm:text-[10px]">
                AI-Powered Real Estate Portal
              </div>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="hidden items-center gap-5 xl:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative py-2 text-[13px] font-bold text-slate-700 transition hover:text-[#075B3B]"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C6A052] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={PLAY_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-[#075B3B] transition hover:border-[#075B3B] hover:bg-emerald-50"
            >
              <Smartphone className="h-4 w-4" />
              Download App
            </a>

            <a
              href={`${PORTAL}/post-property`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-5 py-3 text-xs font-extrabold text-white shadow-md shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:bg-[#06462F]"
            >
              <Plus className="h-4 w-4" />
              Post Property Free
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="opv-mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#075B3B] transition hover:bg-emerald-50 xl:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* MOBILE / TABLET MENU */}
        {menuOpen && (
          <div
            id="opv-mobile-navigation"
            className="border-t border-slate-100 bg-white shadow-xl xl:hidden"
          >
            <nav
              className="mx-auto max-w-[1320px] px-5 py-5"
              aria-label="Mobile navigation"
            >
              <div className="grid gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-[#F8F6F0] hover:text-[#075B3B]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-5 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-2">
                <a
                  href={PLAY_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#075B3B] px-5 py-3.5 text-sm font-bold text-[#075B3B]"
                >
                  <Download className="h-4 w-4" />
                  Download OPV App
                </a>

                <a
                  href={`${PORTAL}/post-property`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-5 py-3.5 text-sm font-bold text-white"
                >
                  <Plus className="h-4 w-4" />
                  Post Property Free
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
