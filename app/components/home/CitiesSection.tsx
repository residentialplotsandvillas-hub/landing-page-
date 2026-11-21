
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Globe2,
  MapPin,
  MapPinned,
  Search,
  Sparkles,
} from "lucide-react";

const PORTAL = "https://www.openplotsandvillas.com";

type City = {
  name: string;
  state: string;
  description: string;
};

const featuredCities: City[] = [
  {
    name: "Hyderabad",
    state: "Telangana",
    description:
      "Explore open plots, villas, apartments and investment properties.",
  },
  {
    name: "Mumbai",
    state: "Maharashtra",
    description:
      "Discover residential apartments and commercial property opportunities.",
  },
  {
    name: "Bengaluru",
    state: "Karnataka",
    description:
      "Browse residential plots, villas and apartment listings.",
  },
  {
    name: "Chennai",
    state: "Tamil Nadu",
    description:
      "Explore homes, plots and commercial property listings.",
  },
  {
    name: "Pune",
    state: "Maharashtra",
    description:
      "Discover residential developments and property opportunities.",
  },
  {
    name: "Delhi NCR",
    state: "Delhi NCR",
    description:
      "Explore residential and commercial property options.",
  },
];

const additionalCities = [
  "Kolkata",
  "Ahmedabad",
  "Surat",
  "Jaipur",
  "Lucknow",
  "Kochi",
  "Nagpur",
  "Indore",
  "Bhubaneswar",
  "Coimbatore",
  "Visakhapatnam",
  "Amaravati",
  "Chandigarh",
  "Patna",
];

export default function CitiesSection() {
  return (
    <section
      aria-labelledby="opv-cities-heading"
      className="bg-[#F8F6F0] px-5 py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* SECTION HEADING */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#075B3B]">
              <Globe2 className="h-4 w-4" />
              Explore Real Estate Across India
            </div>

            <h2
              id="opv-cities-heading"
              className="text-3xl font-black leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl"
            >
              Discover Properties
              <br />
              <span className="text-[#075B3B]">
                Across India's Major Cities.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
              Explore real estate opportunities across
              India's major cities. Discover residential
              plots, villas, apartments, agricultural
              lands and commercial properties through OPV.
            </p>
          </div>

          <a
            href={`${PORTAL}/properties/`}
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-[#075B3B]/20 px-5 py-3.5 text-sm font-extrabold text-[#075B3B] transition hover:bg-[#075B3B] hover:text-white"
          >
            Explore All Properties
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* FEATURED CITY CARDS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCities.map((city) => (
            <article
              key={city.name}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A052]/50 hover:shadow-xl"
            >
              {/* DECORATIVE ICON */}
              <div
                aria-hidden="true"
                className="absolute -right-5 -top-5 text-[#075B3B]/[0.04]"
              >
                <Building2 className="h-32 w-32" strokeWidth={1} />
              </div>

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF3EE] text-[#075B3B] transition group-hover:bg-[#075B3B] group-hover:text-white">
                  <MapPinned className="h-7 w-7" strokeWidth={1.8} />
                </div>

                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#B18B3F]">
                  {city.state}
                </p>

                <h3 className="text-2xl font-black text-slate-900">
                  {city.name}
                </h3>

                <p className="mt-4 min-h-[56px] text-sm leading-7 text-slate-600">
                  {city.description}
                </p>

                <a
                  href={`${PORTAL}/properties/`}
                  aria-label={`Explore properties in ${city.name}`}
                  className="mt-6 inline-flex w-full items-center justify-between rounded-xl border border-[#075B3B]/15 bg-[#F0F7F2] px-5 py-3.5 text-sm font-extrabold text-[#075B3B] transition group-hover:bg-[#075B3B] group-hover:text-white"
                >
                  Explore {city.name}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* MORE CITIES */}
        <div className="mt-12 rounded-[24px] border border-slate-200 bg-white p-7 md:p-9">
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF3EE] text-[#075B3B]">
              <MapPin className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-900">
                More Cities to Explore
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Discover property opportunities in
                emerging and established markets.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {additionalCities.map((city) => (
              <a
                key={city}
                href={`${PORTAL}/properties/`}
                aria-label={`Browse properties in ${city}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-[#FCFCFA] px-4 py-3.5 transition hover:border-[#075B3B]/30 hover:bg-[#EAF3EE]"
              >
                <span className="flex items-center gap-2 text-sm font-bold text-slate-700 group-hover:text-[#075B3B]">
                  <MapPin className="h-4 w-4 shrink-0 text-[#075B3B]" />
                  {city}
                </span>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-[#075B3B]" />
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 overflow-hidden rounded-[28px] bg-[#075B3B]">
          <div className="grid items-center gap-8 p-8 md:p-12 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E7C982]/35 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#E7C982]">
                <Sparkles className="h-4 w-4" />
                Find Properties Across India
              </div>

              <h3 className="text-3xl font-black leading-tight text-white md:text-4xl">
                Your Next Property
                <br />
                Could Be in Any City.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-8 text-white/75">
                Explore real estate opportunities by
                property type, location and available
                listings through the OPV portal.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Residential Properties",
                  "Agricultural Lands",
                  "Commercial Properties",
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
                href={`${PORTAL}/properties/`}
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#E7C982] px-7 py-4 text-sm font-black text-[#17352D] transition hover:bg-white sm:w-auto"
              >
                <Search className="h-5 w-5" />
                Search Properties
                <ArrowRight className="h-4 w-4" />
              </a>

              <p className="text-xs leading-6 text-white/60 lg:text-right">
                Property availability varies by city
                and active listings.
              </p>
            </div>
          </div>
        </div>

        {/* SEO CONTENT */}
        <div className="mt-12 max-w-4xl">
          <h3 className="text-xl font-black text-slate-900">
            Explore Residential and Commercial Real Estate
            in India's Leading Cities
          </h3>

          <p className="mt-4 text-sm leading-8 text-slate-600">
            OPV provides a platform for discovering
            property listings across India. Users can
            explore open plots in Hyderabad, apartments
            in Mumbai, villas in Bengaluru, residential
            properties in Chennai, commercial spaces in
            Pune and other available property
            opportunities across major Indian markets.
          </p>
        </div>
      </div>
    </section>
  );
}
