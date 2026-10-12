import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/pages";
import { pageHead } from "@/lib/site";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Us",
      "Concept-focused coaching in Bindayaka, Jaipur. Learn about Rajawat Classes, our academic approach and Chemistry educator RJ Rajawat.",
      "/about",
    ),
  component: AboutPage,
});
