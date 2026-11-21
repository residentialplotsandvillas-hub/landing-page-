
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Globe2,
  Home,
  MapPin,
  Search,
} from "lucide-react";

const PORTAL = "https://www.openplotsandvillas.com";

const propertyTypes = [
  {
    title: "Open Plots and Residential Lands",
    description:
      "Explore residential plots, approved layouts and land listings across India's developing residential corridors.",
  },
  {
    title: "Agricultural Lands",
    description:
      "Discover agricultural land listings and compare location, access, land extent and available property information.",
  },
  {
    title: "Farm Houses and Estates",
    description:
      "Browse farmhouses, countryside properties and lifestyle estates for personal use or investment research.",
  },
  {
    title: "Villas and Independent Houses",
    description:
      "Find independent houses, gated-community villas and residential properties across Indian cities.",
  },
  {
    title: "Apartments and Flats",
    description:
      "Explore apartments and flats, including new developments and resale properties in residential neighbourhoods.",
  },
  {
    title: "Commercial Properties",
    description:
      "Discover office spaces, retail properties, commercial buildings and other business property opportunities.",
  },
];

export default function SEOContentSection() {
  return (
    <section
      id="property-guide"
      aria-labelledby="seo-content-heading"
      className="bg-white px-5 py-20"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-4xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
            OPV India Property Guide
          </p>

          <h2
            id="seo-content-heading"
            className="text-3xl font-black leading-tight text-slate-900 md:text-4xl"
          >
            Buy, Sell and Rent Properties Across India
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            OPV – Open Plots & Villas is an AI-powered real
            estate discovery platform for people exploring
            residential, agricultural and commercial property
            opportunities across India. Buyers can browse
            property listings, while owners, developers and
            agents can showcase properties to interested users.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Whether you are searching for open plots in
            Hyderabad, villas in Bengaluru, apartments in
            Mumbai or commercial properties in Chennai, OPV
            provides a starting point for discovering and
            comparing available listings.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {propertyTypes.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-[#F8F6F0] p-6"
            >
              <h3 className="text-lg font-extrabold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 rounded-2xl border border-emerald-100 bg-[#F0F7F2] p-7 md:grid-cols-2 md:p-10">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Search className="h-6 w-6 text-[#075B3B]" />
              <h3 className="text-xl font-extrabold">
                Looking to Buy or Rent?
              </h3>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Browse available properties, compare listing
              information and contact the relevant property
              advertiser for further details.
            </p>

            <a
              href={`${PORTAL}/properties/`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#075B3B]"
            >
              Browse Properties
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Building2 className="h-6 w-6 text-[#075B3B]" />
              <h3 className="text-xl font-extrabold">
                Want to Sell Your Property?
              </h3>
            </div>

            <p className="text-sm leading-7 text-slate-600">
              Property owners, builders and agents can create
              listings to present their properties to potential
              buyers and tenants.
            </p>

            <a
              href={PORTAL}
              className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#075B3B]"
            >
              Visit OPV Portal
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
          {[
            "Pan-India Discovery",
            "Residential Properties",
            "Agricultural Properties",
            "Commercial Properties",
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4 text-[#075B3B]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
