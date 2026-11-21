
const SITE = "https://www.openplotsandvillas.in";
const PORTAL = "https://www.openplotsandvillas.com";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "OPV - Open Plots & Villas",
        url: PORTAL,
        description:
          "AI-powered real estate discovery platform connecting property buyers, sellers, owners, builders, developers and agents across India.",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "OPV India",
        description:
          "Explore real estate opportunities across India with OPV.",
        publisher: {
          "@id": `${SITE}/#organization`,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE}/#webpage`,
        url: SITE,
        name:
          "OPV India | Buy, Sell & Rent Properties Across India",
        isPartOf: {
          "@id": `${SITE}/#website`,
        },
        about: {
          "@id": `${SITE}/#organization`,
        },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}
