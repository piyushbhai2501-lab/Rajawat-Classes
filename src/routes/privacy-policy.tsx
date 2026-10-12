import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/pages";
import { pageHead } from "@/lib/site";
export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageHead(
      "Privacy Policy",
      "Privacy Policy for the Rajawat Classes website and admissions enquiries.",
      "/privacy-policy",
    ),
  component: () => <PolicyPage terms={false} />,
});
