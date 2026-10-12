import { createFileRoute } from "@tanstack/react-router";
import { CourseDetail } from "@/components/site/pages";
import { pageHead } from "@/lib/site";
export const Route = createFileRoute("/courses/chemistry")({
  head: () =>
    pageHead(
      "Class 11 & 12 Chemistry Coaching",
      "Concept-focused Chemistry coaching in Jaipur with notes, DPPs, PYQs and chapter-wise CBSE and RBSE preparation.",
      "/courses/chemistry",
    ),
  component: () => <CourseDetail id="chemistry" />,
});
