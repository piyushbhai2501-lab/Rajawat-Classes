import { createFileRoute } from "@tanstack/react-router";
import { StudyMaterialPage } from "@/components/site/pages";
import { pageHead } from "@/lib/site";
export const Route = createFileRoute("/study-material")({
  head: () =>
    pageHead(
      "Study Material",
      "Explore clearly labelled sample notes, DPPs, question banks and practice previews, and enquire about approved Rajawat Classes study material.",
      "/study-material",
    ),
  component: StudyMaterialPage,
});
