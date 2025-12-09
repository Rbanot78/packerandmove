import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "Anil Packer and Movers",
    url: "https://www.anilpackerandmovers.com",
    image: "https://www.anilpackerandmovers.com/images/herosection.jpg",
    telephone: "+91 9573795650",
    email: "connectsupport@anilpackerandmovers.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Full Address Here",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "5000xx",
      addressCountry: "IN",
    },
    areaServed: ["Hyderabad", "Secunderabad", "Telangana"],
    description:
      "Anil Packer and Movers offers trusted house shifting, bike transport and office relocation services across Hyderabad.",
  };

  return (
    <Html lang="en">
      <Head>
        {/* MAIN SEO TITLE + DESCRIPTION */}
        <title>
          Packers and Movers in Hyderabad | Anil Packer and Movers | House, Office, Bike Transport
        </title>

        <meta
          name="description"
          content="Anil Packer and Movers provides reliable house shifting, office relocation and bike transport in Hyderabad with safe packing, fast delivery and affordable pricing."
        />

        <meta
          name="keywords"
          content="packers and movers Hyderabad, Anil Packers and Movers, bike transport Hyderabad, house shifting Hyderabad, office relocation Hyderabad"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Anil Packer and Movers" />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        <meta name="ICBM" content="17.3850, 78.4867" />

        {/* Open Graph (Social Preview) */}
        <meta property="og:title" content="Packers and Movers in Hyderabad | Anil Packer and Movers" />
        <meta
          property="og:description"
          content="Trusted packers and movers in Hyderabad offering home shifting, office moving and bike transport."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.anilpackerandmovers.com/images/herosection.jpg"
        />
        <meta property="og:url" content="https://www.anilpackerandmovers.com" />
        <meta property="og:locale" content="en_IN" />

        {/* STRUCTURED DATA (Improves Google Snippet) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* VIEWPORT */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
