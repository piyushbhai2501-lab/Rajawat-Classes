import { createFileRoute } from "@tanstack/react-router";
import { CoursesPage } from "@/components/site/pages";
import { pageHead } from "@/lib/site";
export const Route = createFileRoute("/courses/")({
  head: () =>
    pageHead(
      "Our Courses",
      "Explore Classes 1–8, 9–10 and 11–12 coaching, plus focused Chemistry classes at Rajawat Classes Jaipur.",
      "/courses",
    ),
  component: CoursesPage,
});
