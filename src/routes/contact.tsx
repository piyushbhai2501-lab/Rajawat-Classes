import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/pages";
import { pageHead } from "@/lib/site";
export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact & Admissions",
      "Contact Rajawat Classes in Bajrang Vatika, Bindayaka, Jaipur for course and admissions enquiries by telephone or WhatsApp.",
      "/contact",
    ),
  component: ContactPage,
});
