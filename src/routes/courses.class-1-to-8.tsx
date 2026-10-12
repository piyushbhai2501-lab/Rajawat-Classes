import { createFileRoute } from "@tanstack/react-router";
import { CourseDetail } from "@/components/site/pages";
import { pageHead } from "@/lib/site";
export const Route = createFileRoute("/courses/class-1-to-8")({
  head: () =>
    pageHead(
      "Classes 1–8 Coaching",
      "All-subject foundational coaching for Classes 1–8 at Rajawat Classes, Bindayaka, Jaipur.",
      "/courses/class-1-to-8",
    ),
  component: () => <CourseDetail id="foundation" />,
});
