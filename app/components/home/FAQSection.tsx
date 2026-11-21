
const faqs = [
  {
    question: "What is OPV – Open Plots & Villas?",
    answer:
      "OPV is an AI-powered real estate discovery platform where users can explore property listings across India, including plots, agricultural lands, villas, apartments, farmhouses and commercial properties.",
  },
  {
    question: "Can I post my property for free on OPV?",
    answer:
      "OPV currently promotes free property posting without subscription or monthly listing charges. Visit the main OPV portal to review the current listing terms.",
  },
  {
    question: "Which types of properties can I find on OPV?",
    answer:
      "You can explore open plots, residential lands, agricultural lands, farmhouses, villas, independent houses, apartments, flats and commercial properties.",
  },
  {
    question: "Is OPV available across India?",
    answer:
      "OPV is designed for pan-India property discovery. The availability of listings varies by city, locality and property category.",
  },
  {
    question: "Can builders and real estate agents use OPV?",
    answer:
      "Yes. OPV serves property owners, builders, developers, real estate agents, promoters, buyers and tenants.",
  },
  {
    question: "Does OPV have an Android application?",
    answer:
      "Yes. The OPV Android application is available on Google Play, allowing users to access the platform from their smartphones.",
  },
  {
    question: "How do I verify a property before buying?",
    answer:
      "Check ownership documents, applicable approvals, title records, encumbrances and relevant RERA information. Obtain independent legal and technical verification before making a payment.",
  },
];

export { faqs };

export default function FAQSection() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="bg-[#F8F6F0] px-5 py-20"
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
            Frequently Asked Questions
          </p>

          <h2
            id="faq-heading"
            className="text-3xl font-black text-slate-900 md:text-4xl"
          >
            Questions About OPV India
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Learn more about property discovery, free
            listings and the OPV platform.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-slate-200 bg-white px-6 py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-extrabold text-slate-900 [&::-webkit-details-marker]:hidden">
                {faq.question}

                <span className="text-xl font-normal text-[#075B3B] group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
