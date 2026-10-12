import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/site/pages";
import { pageHead } from "@/lib/site";
export const Route = createFileRoute("/gallery")({
  head: () =>
    pageHead(
      "Gallery",
      "Explore educational inspiration, study spaces, books and science imagery with Rajawat Classes in Bindayaka, Jaipur.",
      "/gallery",
    ),
  component: GalleryPage,
});
