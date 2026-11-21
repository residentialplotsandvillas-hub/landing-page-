
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Globe2,
  Handshake,
  Home,
  Plus,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const PORTAL = "https://www.openplotsandvillas.com";

// Confirm this path against your live portal before deployment.
const POST_PROPERTY_URL = `${PORTAL}/post-property`;

const benefits = [
  {
    icon: CheckCircle2,
    title: "No Subscription",
    description: "No subscription required to post a property.",
  },
  {
    icon: BadgeCheck,
    title: "No Monthly Charges",
    description: "No recurring monthly property listing fee.",
  },
  {
    icon: Globe2,
    title: "Pan-India Visibility",
    description:
      "Showcase your property to users exploring opportunities across India.",
  },
  {
    icon: Users,
    title: "Connect With Property Seekers",
    description:
      "Make your listing discoverable to prospective buyers and tenants.",
  },
];

const audiences = [
  { icon: Home, label: "Property Owners" },
  { icon: Building2, label: "Builders & Developers" },
  { icon: Handshake, label: "Agents & Promoters" },
  { icon: Users, label: "Channel Partners" },
];

export default function FreeListingSection() {
  return (
    <section
      id="post-property-free"
      aria-labelledby="free-listing-heading"
      className="bg-[#F8F6F0] px-5 py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* MAIN PROMOTIONAL CARD */}
        <div className="relative isolate overflow-hidden rounded-[28px] bg-[#075B3B]">
          {/* DECORATIVE ELEMENTS */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[50px] border-white/5"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 left-1/3 h-80 w-80 rounded-full border-[45px] border-[#E7C982]/10"
          />

          <div className="relative grid items-center gap-12 p-7 sm:p-10 lg:grid-cols-2 lg:p-14">
            {/* LEFT CONTENT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E7C982]/35 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#E7C982]">
                <Sparkles className="h-4 w-4" />
                Grow Your Property Reach With OPV
              </div>

              <h2
                id="free-listing-heading"
                className="text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[58px]"
              >
                Your Property.
                <br />
                Your Opportunity.
                <br />
                <span className="text-[#E7C982]">
                  Post It Free.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/80">
                List your residential plot, agricultural land,
                villa, apartment, farmhouse or commercial
                property on OPV. Connect with interested
                property seekers through India's AI-powered
                real estate discovery platform.
              </p>

              {/* MAIN FREE BENEFITS */}
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "No Subscription",
                  "No Monthly Charges",
                  "Absolutely Free",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs font-extrabold text-white"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#E7C982]" />
                    {item}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={POST_PROPERTY_URL}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#E7C982] px-7 py-4 text-sm font-black text-[#17352D] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white"
                >
                  <Plus className="h-5 w-5" />
                  POST PROPERTY FREE
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={PORTAL}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white/90 transition hover:text-[#E7C982]"
                >
                  Visit OPV Portal
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-5 text-xs leading-6 text-white/55">
                Free listing promotion is subject to the
                current terms and conditions of the OPV portal.
              </p>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-3 shadow-2xl">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1100&q=85"
                    alt="Modern residential house representing a property listing on OPV"
                    loading="lazy"
                    decoding="async"
                    className="h-[300px] w-full object-cover sm:h-[370px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#062A20]/55 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-white/95 px-4 py-3 text-sm font-extrabold text-[#075B3B] shadow-lg">
                      <Home className="h-5 w-5" />
                      Showcase Your Property on OPV
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING BADGE */}
              <div className="relative mx-auto -mt-5 flex w-fit items-center gap-3 rounded-xl border border-[#E7C982]/40 bg-[#062A20] px-5 py-4 shadow-xl sm:ml-auto sm:mr-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7C982] text-[#075B3B]">
                  <BadgeCheck className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-black text-white">
                    Free Property Posting
                  </p>
                  <p className="mt-1 text-xs text-white/65">
                    No Monthly Listing Charges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-[#075B3B]/25 hover:shadow-lg"
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

        {/* WHO CAN POST */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white px-6 py-7 md:px-9">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-xl font-black text-slate-900">
                Who Can Post Properties on OPV?
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                A platform for individuals and real estate
                professionals to showcase their properties.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {audiences.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#075B3B]/10 bg-[#F0F7F2] px-4 py-3 text-xs font-bold text-[#075B3B]"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
