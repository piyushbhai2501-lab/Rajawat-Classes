export const contact = {
  phone: "+91 79471 47482",
  tel: "tel:+917947147482",
  whatsapp: "+91 84410 13236",
  wa:
    "https://wa.me/918441013236?text=" +
    encodeURIComponent(
      "Hello Rajawat Classes, I would like to enquire about admissions. Please share the available courses and batch details.",
    ),
  maps: "https://maps.app.goo.gl/N3W7PjUL4gc3CdkH6?g_st=ac",
  address: "Bajrang Vatika, Bindayaka, Jaipur, Jaipur Nagar Nigam Area, Rajasthan 302041, India",
};
export const courses = [
  {
    id: "foundation",
    path: "/courses/class-1-to-8" as const,
    label: "THE FOUNDATION YEARS",
    title: "Classes 1st–8th",
    short: "Strong foundations. Confident learners.",
    subjects: ["All subjects"],
    description:
      "Thoughtful academic support that helps young learners understand the basics, build positive study habits, and approach every subject with confidence.",
    objectives: [
      "Strengthen reading, writing and numerical understanding",
      "Build clear foundations across school subjects",
      "Develop consistent practice and revision habits",
    ],
    icon: "book",
    number: "01",
  },
  {
    id: "secondary",
    path: "/courses/class-9-to-10" as const,
    label: "THE BOARD-READY YEARS",
    title: "Classes 9th–10th",
    short: "Clear concepts. Purposeful preparation.",
    subjects: ["Mathematics", "Science", "Social Studies", "English"],
    description:
      "Focused learning across core subjects, with an emphasis on concept clarity, thoughtful practice and preparation aligned with school and board expectations.",
    objectives: [
      "Connect core concepts with practical questions",
      "Develop structured answers and problem-solving skills",
      "Prepare through purposeful practice and revision",
    ],
    icon: "layers",
    number: "02",
  },
  {
    id: "senior",
    path: "/courses/class-11-to-12" as const,
    label: "THE NEXT CHAPTER",
    title: "Classes 11th–12th",
    short: "Deeper understanding. Greater possibilities.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
    description:
      "Subject-focused academic guidance for the senior secondary years. Explore the advertised science and mathematics options and contact the institute to confirm current subject batches.",
    objectives: [
      "Deepen subject understanding beyond memorisation",
      "Practise application-based questions",
      "Build a systematic approach to board preparation",
    ],
    icon: "graduation",
    number: "03",
  },
  {
    id: "chemistry",
    path: "/courses/chemistry" as const,
    label: "OUR SIGNATURE SUBJECT",
    title: "Chemistry Specialization",
    short: "From zero to advanced.",
    subjects: ["Chemistry", "Classes 11 & 12", "CBSE & RBSE"],
    description:
      "Understand the concepts, connect the data, and develop confidence through structured practice. Chemistry guidance that brings together clarity, revision and board-oriented preparation.",
    objectives: [
      "Understand physical, organic and inorganic Chemistry concepts",
      "Connect theory, data and question-solving practice",
      "Prepare with notes, DPPs, PYQs and chapter-wise tests",
    ],
    icon: "atom",
    number: "04",
  },
];
export const features = [
  ["Concept-focused learning", "Understand the why, not just the answer."],
  ["Structured study material", "Organised notes that bring learning into focus."],
  ["Regular practice & revision", "Turn understanding into confident application."],
  ["Chapter-wise assessments", "Reflect on your progress, one chapter at a time."],
  ["Board-oriented preparation", "Focused guidance for CBSE and RBSE studies."],
  ["Student-focused support", "A thoughtful approach to your academic journey."],
];
export const resourceCategories = [
  "Subject Notes",
  "Question & Answer Bank",
  "Daily Practice Problems",
  "Previous Year Questions",
  "Practice Papers",
  "Test Series",
  "Exam Preparation Tips",
];
export const steps = [
  "Understand the Concept",
  "Practise with DPPs",
  "Revise Through Notes and PYQs",
  "Evaluate Progress Through Tests",
];
export function pageHead(title: string, description: string, path: string) {
  const fullTitle = `${title} | Rajawat Classes, Jaipur`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
