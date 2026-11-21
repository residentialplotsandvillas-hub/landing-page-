
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Home,
  MapPin,
  Store,
  Trees,
  Warehouse,
} from "lucide-react";

const PORTAL = "https://www.openplotsandvillas.com";

const categories = [
  {
    title: "Open Plots & Lands",
    description:
      "Explore residential plots, open lands and investment opportunities across India.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=85",
    icon: MapPin,
    alt: "Open green land representing residential plots and land listings",
  },
  {
    title: "Agricultural Lands",
    description:
      "Discover agricultural land, farmland and rural property listings.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900&q=85",
    icon: Trees,
    alt: "Landscape representing agricultural and rural land",
  },
  {
    title: "Farm Houses & Estates",
    description:
      "Find farmhouses, countryside homes and lifestyle estates.",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=900&q=85",
    icon: Warehouse,
    alt: "Countryside house representing farmhouse properties",
  },
  {
    title: "Villas & Houses",
    description:
      "Browse independent houses, gated-community villas and luxury residences.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85",
    icon: Home,
    alt: "Modern luxury villa with landscaped surroundings",
  },
  {
    title: "Apartments & Flats",
    description:
      "Explore residential apartments, modern flats and new developments.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
    icon: Building2,
    alt: "Modern residential apartment interior",
  },
  {
    title: "Commercial Properties",
    description:
      "Discover commercial buildings, offices, retail spaces and business properties.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=85",
    icon: Store,
    alt: "Modern commercial office buildings",
  },
];

export default function PropertyCategories() {
  return (
    <div className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1320px] px-5">
        {/* SECTION HEADING */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              <span className="h-2 w-2 rounded-full bg-[#C6A052]" />
              Explore Property Categories
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 md:text-4xl">
              Discover the Right Property
              <br className="hidden sm:block" />
              for Every Ambition.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
              Explore residential, agricultural and commercial
              property opportunities across India through OPV.
            </p>
          </div>

          <a
            href={`${PORTAL}/properties/`}
            className="inline-flex items-center gap-2 self-start rounded-xl border border-[#075B3B]/20 px-5 py-3 text-sm font-extrabold text-[#075B3B] transition hover:bg-[#075B3B] hover:text-white"
          >
            View All Properties
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* CATEGORY GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ title, description, image, icon: Icon, alt }) => (
            <a
              key={title}
              href={`${PORTAL}/properties/`}
              aria-label={`Explore ${title} on OPV`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A052]/50 hover:shadow-xl"
            >
              {/* CATEGORY IMAGE */}
              <div className="relative h-[220px] overflow-hidden bg-slate-100">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* ICON */}
                <div className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/50 bg-white text-[#075B3B] shadow-md">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
              </div>

              {/* CATEGORY CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-slate-900 transition group-hover:text-[#075B3B]">
                  {title}
                </h3>

                <p className="mt-3 min-h-[56px] text-sm leading-7 text-slate-600">
                  {description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm font-extrabold text-[#075B3B]">
                    Explore Properties
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF3EE] text-[#075B3B] transition group-hover:bg-[#075B3B] group-hover:text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* BOTTOM INFORMATION */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#075B3B]/10 bg-[#F8F6F0] px-6 py-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">
              Have a property to sell or rent?
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Showcase your property on OPV and connect with
              prospective buyers and tenants.
            </p>
          </div>

          <a
            href={`${PORTAL}/post-property`}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#075B3B] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#06462E]"
          >
            Post Property Free
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
