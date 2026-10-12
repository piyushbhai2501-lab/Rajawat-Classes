import { createFileRoute } from "@tanstack/react-router";
import { CourseDetail } from "@/components/site/pages";
import { pageHead } from "@/lib/site";
export const Route = createFileRoute("/courses/class-11-to-12")({
  head: () =>
    pageHead(
      "Classes 11–12 Coaching",
      "Explore advertised Physics, Chemistry, Biology and Mathematics options for Classes 11–12 at Rajawat Classes Jaipur.",
      "/courses/class-11-to-12",
    ),
  component: () => <CourseDetail id="senior" />,
});
