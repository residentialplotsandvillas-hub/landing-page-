
import PropertySearch from "./PropertySearch";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Globe2,
  Plus,
  Sparkles,
} from "lucide-react";

const PORTAL = "https://www.openplotsandvillas.com";

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-[#062A20]">
      {/* HERO BACKGROUND */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85')",
        }}
      />

      {/* DARK OVERLAY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#062A20]/95 via-[#062A20]/85 to-[#062A20]/50"
      />

      {/* CONTENT */}
      <div className="relative mx-auto max-w-[1320px] px-5 pb-16 pt-20 md:pb-20 md:pt-24 lg:pt-28">
        <div className="max-w-[850px]">
          {/* EYEBROW */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E7C982]/35 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#E7C982] backdrop-blur-sm sm:text-xs">
            <Sparkles className="h-4 w-4 shrink-0" />
            AI-Powered Real Estate Discovery
          </div>

          {/* SEO H1 */}
          <h1 className="max-w-[850px] text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[68px]">
            Buy, Sell & Rent
            <br />
            Properties Across
            <br />
            <span className="text-[#E7C982]">India with OPV AI.</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-[650px] text-base leading-8 text-white/80 md:text-lg">
            Discover open plots, agricultural lands, villas,
            apartments, farmhouses and commercial properties
            across India. Explore opportunities, connect with
            property advertisers and post your property free.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`${PORTAL}/properties/`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E7C982] px-7 py-4 text-sm font-extrabold text-[#17352D] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              Explore Properties
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href={`${PORTAL}/post-property`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20"
            >
              <Plus className="h-4 w-4" />
              Post Property Free
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* BENEFITS */}
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-white/80 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-[#E7C982]" />
              Pan-India Discovery
            </span>

            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-[#E7C982]" />
              Property Listings
            </span>

            <span className="inline-flex items-center gap-2">
              <Plus className="h-4 w-4 text-[#E7C982]" />
              No Subscription • No Monthly Charges
            </span>
          </div>
        </div>

        {/* PROPERTY SEARCH */}
        <div className="mt-12 max-w-[1080px] lg:mt-14">
          <PropertySearch />
        </div>
      </div>
    </div>
  );
}
