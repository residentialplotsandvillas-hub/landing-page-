
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Building2,
  Download,
  Gavel,
  Globe2,
  Handshake,
  Home,
  KeyRound,
  LayoutDashboard,
  MapPin,
  Plus,
  Search,
  Smartphone,
  Sparkles,
  Store,
  Target,
  Trees,
  Users,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const PORTAL = "https://www.openplotsandvillas.com";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.openplotsandvillas.opvapp";

type FooterItem = {
  label: string;
  icon: LucideIcon;
  href: string;
};

const propertyLinks: FooterItem[] = [
  {
    label: "Open Plots & Lands",
    icon: MapPin,
    href: `${PORTAL}/properties/`,
  },
  {
    label: "Agricultural Lands",
    icon: Trees,
    href: `${PORTAL}/properties/`,
  },
  {
    label: "Farm Houses & Estates",
    icon: Home,
    href: `${PORTAL}/properties/`,
  },
  {
    label: "Villas & Houses",
    icon: Home,
    href: `${PORTAL}/properties/`,
  },
  {
    label: "Apartments & Flats",
    icon: Building2,
    href: `${PORTAL}/properties/`,
  },
  {
    label: "Commercial Properties",
    icon: Store,
    href: `${PORTAL}/properties/`,
  },
];

const portalServices: FooterItem[] = [
  {
    label: "AI-Powered Property Search",
    icon: Bot,
    href: PORTAL,
  },
  {
    label: "Owner Properties",
    icon: Home,
    href: PORTAL,
  },
  {
    label: "Rental Properties",
    icon: KeyRound,
    href: PORTAL,
  },
  {
    label: "Auction Properties",
    icon: Gavel,
    href: PORTAL,
  },
  {
    label: "New Launches",
    icon: Sparkles,
    href: PORTAL,
  },
  {
    label: "Verified Listings",
    icon: BadgeCheck,
    href: PORTAL,
  },
  {
    label: "OPV 360° Services",
    icon: Globe2,
    href: PORTAL,
  },
];

const professionalLinks: FooterItem[] = [
  {
    label: "Builders & Developers",
    icon: Building2,
    href: PORTAL,
  },
  {
    label: "Real Estate Agents",
    icon: Users,
    href: PORTAL,
  },
  {
    label: "Channel Partners",
    icon: Handshake,
    href: PORTAL,
  },
  {
    label: "Builders Desk",
    icon: LayoutDashboard,
    href: PORTAL,
  },
  {
    label: "Find For Me",
    icon: Target,
    href: PORTAL,
  },
  {
    label: "Buy a Lead",
    icon: BriefcaseBusiness,
    href: PORTAL,
  },
  {
    label: "Post Property Free",
    icon: Plus,
    href: `${PORTAL}/post-property`,
  },
];

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "Explore Properties", href: "/#properties" },
  { label: "AI Features", href: "/#features" },
  { label: "360° Services", href: "/#services" },
  { label: "Pan India Cities", href: "/#cities" },
  { label: "Download App", href: "/#app" },
];

/* ==========================================
   REUSABLE FOOTER LINK COLUMN
========================================== */

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: FooterItem[];
}) {
  return (
    <div>
      <h4 className="mb-6 flex items-center gap-2 text-sm font-extrabold text-white">
        <span className="h-4 w-1 rounded-full bg-[#C6A052]" />
        {title}
      </h4>

      <ul className="space-y-3.5">
        {items.map(({ label, icon: Icon, href }) => (
          <li key={label}>
            <a
              href={href}
              className="
                group flex items-start gap-2.5
                text-sm leading-6 text-white/65
                transition-all duration-300
                hover:translate-x-1
                hover:text-[#E7C982]
              "
            >
              <Icon
                className="
                  mt-1 h-4 w-4 shrink-0
                  text-[#C6A052]
                  transition-colors
                  group-hover:text-[#E7C982]
                "
                strokeWidth={1.8}
              />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ==========================================
   PREMIUM OPV FOOTER
========================================== */

export default function OPVFooter() {
  return (
    <footer className="bg-[#062A20] text-white">
      {/* CONVERSION CTA */}
      <section className="bg-[#075B3B]">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-8 px-5 py-12 text-center lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E7C982]">
              <Sparkles className="h-4 w-4" />
              Grow With OPV
            </div>

            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Your Next Property Opportunity
              <br className="hidden sm:block" />
              Starts Here.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/75">
              Discover properties, connect with buyers and
              promote your listings across India.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`${PORTAL}/properties/`}
              className="
                inline-flex items-center gap-2
                rounded-xl border border-white/40
                px-6 py-4 text-sm font-bold
                transition hover:bg-white/10
              "
            >
              <Search className="h-4 w-4" />
              Explore Properties
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href={`${PORTAL}/post-property`}
              className="
                inline-flex items-center gap-2
                rounded-xl bg-[#E7C982]
                px-6 py-4 text-sm font-black
                text-[#17352D]
                transition hover:bg-white
              "
            >
              <Plus className="h-4 w-4" />
              Post Property Free
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-[1320px] px-5 pb-10 pt-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-14 w-16 shrink-0 items-center justify-center rounded-xl bg-white text-2xl font-black text-[#075B3B]">
                OPV
              </div>

              <div>
                <h3 className="text-xl font-black">
                  Open Plots & Villas
                </h3>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#E7C982]">
                  AI-Powered Real Estate Portal
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-8 text-white/65">
              OPV is an AI-powered real estate discovery
              platform connecting buyers, sellers, property
              owners, builders, developers and agents across
              India.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#E7C982]/30 bg-white/5 px-4 py-2.5 text-xs font-bold text-[#E7C982]">
              <Globe2 className="h-4 w-4" />
              Pan-India Real Estate Discovery
            </div>

            {/* SOCIAL MEDIA ICONS */}
            {/* Add verified official URLs before linking */}
            <div className="mt-7 flex items-center gap-3">
              {[
                { icon: FaFacebookF, label: "Facebook" },
                { icon: FaInstagram, label: "Instagram" },
                { icon: FaYoutube, label: "YouTube" },
                { icon: FaLinkedinIn, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  title={`${label} profile link pending`}
                  aria-label={label}
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl border border-white/15
                    bg-white/5 text-white/75
                  "
                >
                  <Icon className="h-5 w-5" />
                </span>
              ))}
            </div>
          </div>

          {/* LINK COLUMNS */}
          <FooterColumn
            title="Property Categories"
            items={propertyLinks}
          />

          <FooterColumn
            title="OPV Services"
            items={portalServices}
          />

          <FooterColumn
            title="For Professionals"
            items={professionalLinks}
          />
        </div>

        {/* APP DOWNLOAD STRIP */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#E7C982] text-[#075B3B]">
              <Smartphone className="h-7 w-7" />
            </div>

            <div>
              <h4 className="text-base font-extrabold">
                Experience OPV on Mobile
              </h4>

              <p className="mt-1 text-xs text-white/60">
                Explore properties wherever you go.
              </p>
            </div>
          </div>

          <a
            href={PLAY_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              rounded-xl bg-white px-6 py-3.5
              text-sm font-extrabold text-[#075B3B]
              transition hover:bg-[#E7C982]
            "
          >
            <Download className="h-5 w-5" />
            Download OPV App
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* QUICK LINKS */}
        <nav
          aria-label="Footer navigation"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-8"
        >
          {quickLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold text-white/55 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* COPYRIGHT */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center text-xs text-white/45 md:flex-row md:text-left">
        <p>
  © 2026 OPV – Open Plots & Villas. All Rights Reserved.
</p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://www.openplotsandvillas.in"
              className="transition hover:text-white"
            >
              www.openplotsandvillas.in
            </a>

            <a
              href={PORTAL}
              className="transition hover:text-white"
            >
              Main OPV Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
