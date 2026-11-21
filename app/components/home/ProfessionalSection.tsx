
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  BriefcaseBusiness,
  CheckCircle2,
  Handshake,
  Home,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PORTAL = "https://www.openplotsandvillas.com";

// Verify the live posting route before production.
const POST_PROPERTY_URL = `${PORTAL}/post-property`;

type Audience = {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  cta: string;
  href: string;
};

const audiences: Audience[] = [
  {
    icon: Search,
    title: "Property Buyers",
    description:
      "Explore residential plots, villas, apartments, agricultural lands and commercial properties across India.",
    benefits: [
      "Browse property listings",
      "Compare available information",
      "Connect with advertisers",
    ],
    cta: "Explore Properties",
    href: `${PORTAL}/properties/`,
  },
  {
    icon: Home,
    title: "Property Owners & Sellers",
    description:
      "Showcase your property online and make it discoverable to interested buyers and tenants.",
    benefits: [
      "Post property free",
      "Present property details",
      "Receive buyer enquiries",
    ],
    cta: "Post Property Free",
    href: POST_PROPERTY_URL,
  },
  {
    icon: Building2,
    title: "Builders & Developers",
    description:
      "Present residential and commercial projects to property seekers through the OPV platform.",
    benefits: [
      "Promote new projects",
      "Showcase project information",
      "Connect with property seekers",
    ],
    cta: "Explore OPV Portal",
    href: PORTAL,
  },
  {
    icon: BriefcaseBusiness,
    title: "Real Estate Agents",
    description:
      "Build your digital presence and promote property opportunities to prospective customers.",
    benefits: [
      "Publish property listings",
      "Explore property requirements",
      "Expand your market visibility",
    ],
    cta: "Get Started",
    href: PORTAL,
  },
  {
    icon: Handshake,
    title: "Channel Partners & Promoters",
    description:
      "Discover opportunities to collaborate with property owners, developers and prospective buyers.",
    benefits: [
      "Explore property opportunities",
      "Connect with relevant users",
      "Grow your professional network",
    ],
    cta: "Discover Opportunities",
    href: PORTAL,
  },
  {
    icon: Target,
    title: "Tenants & Property Seekers",
    description:
      "Find properties that match your location, budget and lifestyle requirements.",
    benefits: [
      "Explore rental properties",
      "Discover available options",
      "Contact property advertisers",
    ],
    cta: "Find a Property",
    href: `${PORTAL}/properties/`,
  },
];

export default function ProfessionalSection() {
  return (
    <section
      aria-labelledby="professional-section-heading"
      className="bg-[#F8F6F0] px-5 py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* SECTION HEADING */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#075B3B]">
            <Sparkles className="h-4 w-4" />
            One Platform. Multiple Opportunities.
          </div>

          <h2
            id="professional-section-heading"
            className="text-3xl font-black leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl"
          >
            Built for Everyone
            <br />
            in <span className="text-[#075B3B]">Real Estate.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
            Whether you want to buy, sell, rent, promote a
            project or grow your real estate business, OPV
            brings property discovery and digital connections
            together.
          </p>
        </div>

        {/* AUDIENCE CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map(
            ({
              icon: Icon,
              title,
              description,
              benefits,
              cta,
              href,
            }) => (
              <article
                key={title}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A052]/50 hover:shadow-xl"
              >
                {/* ICON */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF3EE] text-[#075B3B] transition group-hover:bg-[#075B3B] group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </div>

                {/* CONTENT */}
                <h3 className="text-xl font-extrabold text-slate-900">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {description}
                </p>

                {/* BENEFITS */}
                <ul className="mt-6 flex-1 space-y-3">
                  {benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#075B3B]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={href}
                  className="mt-7 inline-flex items-center justify-between rounded-xl border border-[#075B3B]/15 bg-[#F0F7F2] px-5 py-3.5 text-sm font-extrabold text-[#075B3B] transition group-hover:bg-[#075B3B] group-hover:text-white"
                >
                  {cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            )
          )}
        </div>

        {/* PROFESSIONAL GROWTH BANNER */}
        <div className="mt-14 overflow-hidden rounded-[28px] bg-[#075B3B]">
          <div className="grid items-center gap-10 p-8 md:p-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E7C982]/35 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#E7C982]">
                <Handshake className="h-4 w-4" />
                Grow With OPV
              </div>

              <h3 className="text-3xl font-black leading-tight text-white md:text-4xl">
                Bring Your Properties
                <br />
                to a Wider Audience.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-8 text-white/75">
                Builders, developers, agents and property
                owners can showcase their listings through
                OPV and connect with prospective buyers
                and tenants.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "No Subscription",
                  "No Monthly Charges",
                  "Post Property Free",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs font-bold text-white"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#E7C982]" />
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={POST_PROPERTY_URL}
                className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#E7C982] px-7 py-4 text-sm font-black text-[#17352D] transition hover:bg-white"
              >
                <Plus className="h-5 w-5" />
                Post Property Free
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* RIGHT */}
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm md:p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E7C982] text-[#075B3B]">
                <Users className="h-7 w-7" />
              </div>

              <h4 className="text-xl font-black text-white">
                Why Join OPV?
              </h4>

              <div className="mt-6 space-y-5">
                {[
                  {
                    title: "Digital Property Visibility",
                    description:
                      "Present your listings through an online property discovery platform.",
                  },
                  {
                    title: "Connect With Property Seekers",
                    description:
                      "Make it easier for interested users to discover your properties.",
                  },
                  {
                    title: "Simple Listing Experience",
                    description:
                      "Create property listings and share relevant details.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#E7C982]" />

                    <div>
                      <p className="text-sm font-extrabold text-white">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs leading-6 text-white/65">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SEO CONTENT */}
        <div className="mt-12 max-w-4xl">
          <h3 className="text-xl font-black text-slate-900">
            Digital Real Estate Opportunities for Builders,
            Agents and Property Owners in India
          </h3>

          <p className="mt-4 text-sm leading-8 text-slate-600">
            OPV supports real estate discovery for individuals
            and professionals across India. Property owners
            can showcase residential and commercial listings,
            builders can present development projects, and
            real estate agents can explore opportunities to
            connect with interested property seekers.
          </p>
        </div>
      </div>
    </section>
  );
}
