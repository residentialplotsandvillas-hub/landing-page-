
"use client";

import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  Plus,
  Search,
  Sparkles,
} from "lucide-react";

const PORTAL = "https://www.openplotsandvillas.com";

const cities = [
  "Hyderabad",
  "Mumbai",
  "Bengaluru",
  "Chennai",
  "Pune",
  "Delhi NCR",
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

type SearchMode = "Buy" | "Rent" | "Sell";

export default function PropertySearch() {
  const [mode, setMode] = useState<SearchMode>("Buy");
  const [city, setCity] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (mode === "Sell") {
      window.location.assign(`${PORTAL}/post-property`);
      return;
    }

    // Update this URL once the main OPV portal's
    // search filter parameter names are confirmed.
    const url = new URL(`${PORTAL}/properties/`);

    // Search currently opens the main listing page.
    // Do not send unverified query parameters.
    window.location.assign(url.toString());
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-white/20 bg-white p-4 shadow-2xl sm:p-5 lg:p-6">
      {/* HEADER */}
      <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2 text-[#075B3B]">
            <Sparkles className="h-4 w-4" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.15em]">
              Find Your Next Property
            </span>
          </div>

          <h2 className="mt-2 text-xl font-black text-slate-900 sm:text-2xl">
            Search Properties Across India
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 self-start rounded-lg bg-[#EAF3EE] px-3 py-2 text-xs font-bold text-[#075B3B]">
          <CheckCircle2 className="h-4 w-4" />
          Explore on OPV
        </div>
      </div>

      {/* TABS */}
      <div
        role="group"
        aria-label="Property search purpose"
        className="mb-5 flex w-full gap-2 border-b border-slate-100 pb-4 sm:w-auto"
      >
        {(["Buy", "Rent", "Sell"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setMode(tab)}
            aria-pressed={mode === tab}
            className={`flex-1 rounded-lg px-6 py-3 text-sm font-extrabold transition-all sm:flex-none ${
              mode === tab
                ? "bg-[#075B3B] text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* SEARCH FORM */}
      <form
        onSubmit={handleSearch}
        className="grid gap-3 lg:grid-cols-[1fr_1.4fr_auto]"
      >
        {/* CITY */}
        <div className="relative">
          <label
            htmlFor="opv-search-city"
            className="mb-2 block text-xs font-bold text-slate-600"
          >
            Select City
          </label>

          <div className="flex h-14 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 focus-within:border-[#075B3B] focus-within:ring-2 focus-within:ring-[#075B3B]/10">
            <MapPin className="h-5 w-5 shrink-0 text-[#075B3B]" />

            <select
              id="opv-search-city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="h-full w-full min-w-0 cursor-pointer bg-transparent text-sm font-semibold text-slate-700 outline-none"
            >
              <option value="">All India</option>
              {cities.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* KEYWORD */}
        <div>
          <label
            htmlFor="opv-search-keyword"
            className="mb-2 block text-xs font-bold text-slate-600"
          >
            Property or Locality
          </label>

          <div className="flex h-14 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 focus-within:border-[#075B3B] focus-within:ring-2 focus-within:ring-[#075B3B]/10">
            <Search className="h-5 w-5 shrink-0 text-[#075B3B]" />

            <input
              id="opv-search-keyword"
              type="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Plots, villas, apartments, locality..."
              className="h-full w-full min-w-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* SEARCH BUTTON */}
        <div className="flex flex-col justify-end">
          <button
            type="submit"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 text-sm font-extrabold text-white transition hover:bg-[#06462E] lg:w-auto"
          >
            {mode === "Sell" ? (
              <>
                <Plus className="h-5 w-5" />
                Post Property
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                Search
              </>
            )}

            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </form>

      {/* SEARCH SUPPORT TEXT */}
      <div className="mt-5 flex flex-col justify-between gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
        <p className="text-xs leading-6 text-slate-500">
          Browse available property listings on the main OPV
          portal. Search filters will be connected after the
          portal URL format is confirmed.
        </p>

        <a
          href={`${PORTAL}/properties/`}
          className="inline-flex shrink-0 items-center gap-2 text-xs font-extrabold text-[#075B3B] hover:underline"
        >
          <Building2 className="h-4 w-4" />
          View All Properties
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
