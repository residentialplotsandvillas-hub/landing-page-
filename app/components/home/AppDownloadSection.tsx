
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  CheckCircle2,
  Download,
  Globe2,
  Home,
  MapPin,
  Plus,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

const PORTAL = "https://www.openplotsandvillas.com";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.openplotsandvillas.opvapp";

const appFeatures = [
  {
    icon: Search,
    title: "Property Discovery",
    description: "Explore available properties.",
  },
  {
    icon: Bot,
    title: "AI Assistance",
    description: "Discover properties with AI support.",
  },
  {
    icon: Plus,
    title: "Post Property Free",
    description: "Showcase your property online.",
  },
  {
    icon: Globe2,
    title: "Pan-India Platform",
    description: "Explore opportunities across India.",
  },
];

export default function AppDownloadSection() {
  return (
    <section
      aria-labelledby="opv-app-heading"
      className="relative overflow-hidden bg-white px-5 py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* MAIN APP PROMOTIONAL SECTION */}
        <div className="relative isolate overflow-hidden rounded-[28px] bg-[#075B3B]">
          {/* DECORATIVE CIRCLES */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border-[65px] border-white/5"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-48 left-1/4 h-[420px] w-[420px] rounded-full border-[55px] border-[#E7C982]/10"
          />

          <div className="relative grid items-center gap-12 px-7 pb-0 pt-12 sm:px-10 lg:grid-cols-2 lg:px-14 lg:pt-14">
            {/* LEFT CONTENT */}
            <div className="pb-12 lg:pb-14">
              {/* EYEBROW */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E7C982]/35 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#E7C982]">
                <Sparkles className="h-4 w-4" />
                OPV Android App
              </div>

              {/* HEADING */}
              <h2
                id="opv-app-heading"
                className="text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[58px]"
              >
                Your Property World.
                <br />
                <span className="text-[#E7C982]">
                  Now in Your Pocket.
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-6 max-w-xl text-base leading-8 text-white/80">
                Download the OPV – Open Plots & Villas
                Android app to explore open plots,
                agricultural lands, villas, apartments,
                farmhouses and commercial properties
                across India.
              </p>

              {/* APP HIGHLIGHTS */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "AI-Powered Property Discovery",
                  "Buy, Sell & Rent",
                  "Post Property Free",
                  "Explore Properties Across India",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 text-sm font-semibold text-white/85"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E7C982]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* DOWNLOAD CTA */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download OPV Android app from Google Play"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#E7C982] px-7 py-4 text-sm font-black text-[#17352D] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white"
                >
                  <Download className="h-5 w-5" />
                  Download OPV App
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href={PORTAL}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white/90 transition hover:text-[#E7C982]"
                >
                  Visit OPV Website
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* AVAILABILITY */}
              <div className="mt-7 flex items-center gap-3 text-sm text-white/70">
                <Smartphone className="h-5 w-5 text-[#E7C982]" />
                Available for Android on Google Play
              </div>
            </div>

            {/* RIGHT MOBILE APP PREVIEW */}
            <div className="relative mx-auto w-full max-w-[400px] self-end">
              {/* FLOATING DECORATION */}
              <div className="absolute -left-4 top-20 z-10 hidden items-center gap-2 rounded-xl border border-white/20 bg-white px-4 py-3 text-xs font-extrabold text-[#075B3B] shadow-xl sm:flex">
                <Search className="h-4 w-4" />
                Discover Properties
              </div>

              <div className="absolute -right-4 bottom-28 z-10 hidden items-center gap-2 rounded-xl border border-white/20 bg-white px-4 py-3 text-xs font-extrabold text-[#075B3B] shadow-xl sm:flex">
                <CheckCircle2 className="h-4 w-4" />
                Post Property Free
              </div>

              {/* PHONE FRAME */}
              <div className="mx-auto w-[280px] rounded-[42px] border-[9px] border-[#17352D] bg-white p-2 shadow-[0_30px_80px_rgba(0,0,0,0.3)] sm:w-[310px]">
                {/* PHONE SCREEN */}
                <div className="overflow-hidden rounded-[30px] bg-[#F8F6F0]">
                  {/* STATUS BAR */}
                  <div className="flex items-center justify-between bg-white px-5 py-3">
                    <span className="text-xs font-black text-[#075B3B]">
                      OPV
                    </span>

                    <span className="text-[10px] font-semibold text-slate-400">
                      Open Plots & Villas
                    </span>
                  </div>

                  {/* APP HEADER */}
                  <div className="bg-[#075B3B] px-5 pb-7 pt-6">
                    <div className="mb-4 flex items-center gap-2 text-[#E7C982]">
                      <Sparkles className="h-4 w-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        OPV AI
                      </span>
                    </div>

                    <h3 className="text-2xl font-black leading-tight text-white">
                      Find Your
                      <br />
                      Dream Property
                    </h3>

                    <p className="mt-2 text-xs text-white/70">
                      Buy • Sell • Rent
                    </p>

                    <div className="mt-5 flex items-center gap-2 rounded-lg bg-white px-3 py-3">
                      <Search className="h-4 w-4 text-[#075B3B]" />

                      <span className="text-[11px] text-slate-400">
                        Search properties...
                      </span>
                    </div>
                  </div>

                  {/* APP CATEGORIES */}
                  <div className="px-4 py-5">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="text-xs font-black text-slate-900">
                        Explore Categories
                      </h4>

                      <span className="text-[10px] font-bold text-[#075B3B]">
                        View All
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { icon: MapPin, label: "Plots" },
                        { icon: Home, label: "Villas" },
                        { icon: Building2, label: "Flats" },
                      ].map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className="rounded-xl border border-slate-100 bg-white px-2 py-4 text-center"
                        >
                          <Icon className="mx-auto h-5 w-5 text-[#075B3B]" />

                          <p className="mt-2 text-[10px] font-bold text-slate-700">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* PROPERTY PREVIEW */}
                    <div className="mt-5 overflow-hidden rounded-xl border border-slate-100 bg-white">
                      <img
                        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=650&q=80"
                        alt="Modern villa illustrating a property listing in the OPV app"
                        loading="lazy"
                        decoding="async"
                        className="h-28 w-full object-cover"
                      />

                      <div className="p-3">
                        <p className="text-xs font-black text-slate-900">
                          Discover Residential Properties
                        </p>

                        <p className="mt-1 text-[10px] text-slate-500">
                          Explore listings across India
                        </p>
                      </div>
                    </div>

                    {/* APP BOTTOM BAR */}
                    <div className="mt-5 flex items-center justify-around border-t border-slate-200 bg-white py-3">
                      {[
                        { icon: Home, label: "Home" },
                        { icon: Search, label: "Search" },
                        { icon: Plus, label: "Post" },
                      ].map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className="flex flex-col items-center gap-1 text-[#075B3B]"
                        >
                          <Icon className="h-4 w-4" />
                          <span className="text-[9px] font-bold">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 pb-6 text-center text-xs text-white/55">
                Illustrative app interface
              </p>
            </div>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {appFeatures.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-[#C6A052]/50 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF3EE] text-[#075B3B]">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </div>

              <h3 className="text-base font-extrabold text-slate-900">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#075B3B]/10 bg-[#F8F6F0] p-7 md:flex-row md:items-center md:p-9">
          <div>
            <h3 className="text-xl font-black text-slate-900">
              Start Exploring Properties with OPV
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Download the OPV Android app or visit our
              website to discover property listings,
              connect with advertisers and post your
              property free.
            </p>
          </div>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#075B3B] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#06462E]"
          >
            <Smartphone className="h-5 w-5" />
            Get OPV App
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
