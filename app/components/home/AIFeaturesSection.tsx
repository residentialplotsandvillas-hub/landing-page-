
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Globe2,
  Languages,
  MapPin,
  MessageCircle,
  Mic,
  Plus,
  Search,
  Sparkles,
  Target,
  Users,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PORTAL = "https://www.openplotsandvillas.com";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  label: string;
};

const features: Feature[] = [
  {
    icon: Bot,
    title: "AI-Powered Property Discovery",
    description:
      "Explore residential, agricultural and commercial property listings with OPV's AI-powered discovery experience.",
    label: "Smart Discovery",
  },
  {
    icon: MessageCircle,
    title: "AI Property Assistance",
    description:
      "Get conversational assistance while exploring property categories, locations and available listings.",
    label: "AI Assistance",
  },
  {
    icon: Languages,
    title: "Multilingual Experience",
    description:
      "Access multilingual platform capabilities designed to make property exploration more accessible across India.",
    label: "Indian Languages",
  },
  {
    icon: Mic,
    title: "AI Voice Interaction",
    description:
      "Interact with supported AI voice features for a more convenient property discovery experience.",
    label: "Voice Technology",
  },
  {
    icon: Target,
    title: "Find For Me",
    description:
      "Share your property requirements to help relevant owners, agents and developers understand what you are looking for.",
    label: "Buyer Requirements",
  },
  {
    icon: Plus,
    title: "Easy Property Listing",
    description:
      "Owners, builders, developers and agents can showcase properties and reach prospective buyers and tenants.",
    label: "Post Property Free",
  },
];

const highlights = [
  {
    icon: Search,
    title: "Explore",
    description: "Search property opportunities.",
  },
  {
    icon: Bot,
    title: "Discover",
    description: "Use intelligent assistance.",
  },
  {
    icon: Users,
    title: "Connect",
    description: "Reach property advertisers.",
  },
];

export default function AIFeaturesSection() {
  return (
    <section
      id="ai-property-features"
      aria-labelledby="ai-features-heading"
      className="relative overflow-hidden bg-white px-5 py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* SECTION HEADING */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-[#EAF3EE] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#075B3B]">
            <Sparkles className="h-4 w-4" />
            Smarter Real Estate Discovery
          </div>

          <h2
            id="ai-features-heading"
            className="text-3xl font-black leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl"
          >
            Discover Properties
            <br />
            <span className="text-[#075B3B]">
              Smarter with OPV AI.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
            OPV combines real estate discovery with AI-powered
            assistance, multilingual capabilities and digital
            property tools to simplify the way people explore
            properties across India.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(
            ({ icon: Icon, title, description, label }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A052]/50 hover:shadow-xl"
              >
                {/* TOP ACCENT */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#C6A052] transition-all duration-300 group-hover:w-full" />

                {/* ICON */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF3EE] text-[#075B3B] transition-all duration-300 group-hover:bg-[#075B3B] group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </div>

                {/* FEATURE LABEL */}
                <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#B18B3F]">
                  {label}
                </p>

                <h3 className="text-lg font-extrabold leading-snug text-slate-900">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {description}
                </p>
              </article>
            )
          )}
        </div>

        {/* AI PROMOTIONAL PANEL */}
        <div className="mt-14 overflow-hidden rounded-[28px] bg-[#075B3B]">
          <div className="grid items-center gap-10 p-7 md:p-10 lg:grid-cols-2 lg:p-12">
            {/* LEFT */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E7C982]/35 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#E7C982]">
                <BrainCircuit className="h-4 w-4" />
                AI-Powered Property Experience
              </div>

              <h3 className="text-3xl font-black leading-tight text-white md:text-4xl">
                Technology That Helps
                <br />
                You Move Forward.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-8 text-white/75">
                From exploring locations to discovering
                properties and connecting with advertisers,
                OPV brings digital tools together in one
                real estate platform.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Discover residential and commercial listings",
                  "Explore property opportunities across India",
                  "Access AI-assisted property discovery",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm font-semibold text-white/85"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E7C982]" />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={PORTAL}
                className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#E7C982] px-7 py-4 text-sm font-black text-[#17352D] transition hover:bg-white"
              >
                Explore OPV AI
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* RIGHT - AI INTERFACE PREVIEW */}
            <div className="rounded-2xl border border-white/20 bg-white p-5 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF3EE] text-[#075B3B]">
                    <Bot className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="font-extrabold text-slate-900">
                      OPV AI Assistant
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Illustrative experience
                    </p>
                  </div>
                </div>

                <Sparkles className="h-5 w-5 text-[#C6A052]" />
              </div>

              <div className="mt-6 space-y-4">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#075B3B] p-4 text-sm leading-6 text-white">
                  I am looking for a residential plot near
                  Hyderabad.
                </div>

                <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-[#F0F7F2] p-4 text-sm leading-7 text-slate-700">
                  <div className="mb-2 flex items-center gap-2 font-bold text-[#075B3B]">
                    <Bot className="h-4 w-4" />
                    OPV AI
                  </div>
                  You can explore residential plot listings
                  around Hyderabad and compare location,
                  available details and property options.
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Open Plots",
                    "Villas",
                    "Apartments",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
                <span className="text-xs text-slate-400">
                  Explore properties with OPV AI...
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#075B3B] text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* THREE STEP STRIP */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {highlights.map(
            ({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#F8F6F0] p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF3EE] text-[#075B3B]">
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#B18B3F]">
                    STEP {index + 1}
                  </p>

                  <h4 className="mt-1 font-extrabold text-slate-900">
                    {title}
                  </h4>

                  <p className="mt-1 text-xs text-slate-500">
                    {description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
