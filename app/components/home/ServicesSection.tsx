
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CalendarDays,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Construction,
  FileText,
  Hammer,
  Handshake,
  HardHat,
  House,
  Landmark,
  Leaf,
  MapPinned,
  Megaphone,
  Move,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  Sun,
  Truck,
  Users,
  Warehouse,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PORTAL = "https://www.openplotsandvillas.com";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Plot & Property Services",
    description:
      "Property-related assistance for buyers, sellers and owners.",
    icon: House,
  },
  {
    title: "Layout Development",
    description:
      "Explore support services associated with land and layout development.",
    icon: Construction,
  },
  {
    title: "Land Survey & Geo Services",
    description:
      "Find land measurement, surveying and geospatial service options.",
    icon: Ruler,
  },
  {
    title: "Legal & Documentation",
    description:
      "Explore property documentation and legal assistance services.",
    icon: FileText,
  },
  {
    title: "Rental & Leasing",
    description:
      "Find services related to property rentals and leasing.",
    icon: Handshake,
  },
  {
    title: "Interior & Smart Home",
    description:
      "Explore interior design, home improvement and smart-home solutions.",
    icon: Paintbrush,
  },
  {
    title: "Construction & Civil",
    description:
      "Discover construction and civil engineering service providers.",
    icon: HardHat,
  },
  {
    title: "Electrical, Solar & Security",
    description:
      "Explore electrical systems, solar solutions and security services.",
    icon: Zap,
  },
  {
    title: "Home Loan & Financial",
    description:
      "Find property financing and related financial service options.",
    icon: Landmark,
  },
  {
    title: "Landscaping",
    description:
      "Discover landscape planning, gardening and outdoor improvement services.",
    icon: Leaf,
  },
  {
    title: "Property Management",
    description:
      "Explore property maintenance and management solutions.",
    icon: ClipboardCheck,
  },
  {
    title: "Vastu & Spiritual",
    description:
      "Find Vastu consultation and property-related spiritual services.",
    icon: Sun,
  },
  {
    title: "Event & Promotional",
    description:
      "Explore event planning and promotional services for real estate projects.",
    icon: CalendarDays,
  },
  {
    title: "Manpower Supply",
    description:
      "Find staffing and workforce support for property-related projects.",
    icon: Users,
  },
  {
    title: "Relocation & Logistics",
    description:
      "Explore moving, transportation and relocation services.",
    icon: Truck,
  },
  {
    title: "CA & Audits",
    description:
      "Find accounting, taxation and audit-related professional services.",
    icon: Calculator,
  },
  {
    title: "Advertising, Media & Training",
    description:
      "Discover marketing, media production and professional training services.",
    icon: Megaphone,
  },
  {
    title: "Farm House & Resort Booking",
    description:
      "Explore farmhouse and resort booking-related services.",
    icon: Warehouse,
  },
  {
    title: "Risk Management",
    description:
      "Find risk assessment and related professional support services.",
    icon: ShieldCheck,
  },
  {
    title: "Commercial Property Services",
    description:
      "Explore services supporting offices, retail and commercial properties.",
    icon: Building2,
  },
  {
    title: "Architectural & Planning",
    description:
      "Discover architectural design, planning and development services.",
    icon: MapPinned,
  },
];

export default function ServicesSection() {
  return (
    <section
      aria-labelledby="opv-services-heading"
      className="bg-white px-5 py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* SECTION HEADER */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-[#EAF3EE] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#075B3B]">
              <Sparkles className="h-4 w-4" />
              OPV 360° Services
            </div>

            <h2
              id="opv-services-heading"
              className="text-3xl font-black leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl"
            >
              More Than Property Discovery.
              <br />
              <span className="text-[#075B3B]">
                A Complete Service Ecosystem.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
              Explore OPV 360° Services covering property,
              construction, legal documentation, finance,
              interiors, maintenance, architecture and other
              real estate-related professional services.
            </p>
          </div>

          <a
            href={PORTAL}
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-[#075B3B]/20 px-5 py-3.5 text-sm font-extrabold text-[#075B3B] transition hover:bg-[#075B3B] hover:text-white"
          >
            Explore OPV Services
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* SERVICE GRID */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A052]/50 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF3EE] text-[#075B3B] transition group-hover:bg-[#075B3B] group-hover:text-white">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </div>

              <h3 className="text-base font-extrabold leading-snug text-slate-900">
                {title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {description}
              </p>

              <a
                href={PORTAL}
                aria-label={`Explore ${title} on OPV`}
                className="mt-5 inline-flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-extrabold text-[#075B3B] hover:underline"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-14 overflow-hidden rounded-[28px] bg-[#075B3B]">
          <div className="grid items-center gap-8 p-8 md:p-12 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E7C982]/35 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#E7C982]">
                <BadgeCheck className="h-4 w-4" />
                Property Services & Professional Solutions
              </div>

              <h3 className="text-3xl font-black leading-tight text-white md:text-4xl">
                Explore Property Services
                <br />
                in One Place.
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/75">
                From buying and selling to construction,
                documentation, interiors and property
                management, discover service categories
                designed around real estate needs.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Property Support",
                  "Professional Services",
                  "Pan-India Platform",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs font-semibold text-white"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#E7C982]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end">
              <a
                href={PORTAL}
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#E7C982] px-7 py-4 text-sm font-black text-[#17352D] transition hover:bg-white sm:w-auto"
              >
                Visit OPV 360° Services
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <p className="text-xs leading-6 text-white/60 lg:text-right">
                Service availability may vary by location
                and provider.
              </p>
            </div>
          </div>
        </div>

        {/* SEO SUPPORTING CONTENT */}
        <div className="mt-12 max-w-4xl">
          <h3 className="text-xl font-black text-slate-900">
            Real Estate and Property-Related Services Across India
          </h3>

          <p className="mt-4 text-sm leading-8 text-slate-600">
            OPV 360° Services brings together categories
            associated with property ownership, real estate
            transactions and property development. Users
            can explore land surveying, legal documentation,
            construction, architectural planning, home
            improvement, financial services, rental support
            and property management through the OPV
            ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
