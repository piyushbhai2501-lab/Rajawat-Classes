import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/pages";
import { pageHead } from "@/lib/site";
export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead(
      "Coaching Classes in Bindayaka",
      "Rajawat Classes Jaipur offers Classes 1–12 coaching and focused Chemistry preparation for Classes 11–12, CBSE and RBSE.",
      "/",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Rajawat Classes",
          telephone: "+91 79471 47482",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bajrang Vatika, Bindayaka",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            postalCode: "302041",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});
