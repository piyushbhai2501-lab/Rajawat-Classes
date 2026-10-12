import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/pages";
import { pageHead } from "@/lib/site";
export const Route = createFileRoute("/terms-and-conditions")({
  head: () =>
    pageHead(
      "Terms & Conditions",
      "Terms & Conditions for the Rajawat Classes website and admissions enquiries.",
      "/terms-and-conditions",
    ),
  component: () => <PolicyPage terms={true} />,
});
