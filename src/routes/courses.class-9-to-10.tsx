import { createFileRoute } from "@tanstack/react-router";
import { CourseDetail } from "@/components/site/pages";
import { pageHead } from "@/lib/site";
export const Route = createFileRoute("/courses/class-9-to-10")({
  head: () =>
    pageHead(
      "Classes 9–10 Coaching",
      "Mathematics, Science, Social Studies and English coaching for Classes 9–10 in Bindayaka, Jaipur.",
      "/courses/class-9-to-10",
    ),
  component: () => <CourseDetail id="secondary" />,
});
