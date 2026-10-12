import books from "@/assets/books.jpg";
import classroom from "@/assets/classroom.jpg";
import library from "@/assets/library.jpg";
import microscope from "@/assets/microscope.jpg";
import chemistry from "@/assets/chemistry-lab.jpg";
import notebook from "@/assets/notebook.jpg";
import science from "@/assets/science.jpg";
import reading from "@/assets/reading.jpg";
import mathematics from "@/assets/mathematics.jpg";
import study from "@/assets/study-desk.jpg";

export const educationalImages = [
  {
    src: study,
    url: study,
    title: "A little focus, every day",
    category: "Study spaces",
    alt: "Notebook and study materials on a desk",
    description: "Thoughtful practice starts with space to concentrate.",
  },
  {
    src: classroom,
    url: classroom,
    title: "Room for new ideas",
    category: "Study spaces",
    alt: "Bright classroom with desks and chairs",
    description: "An educational environment for questions and discovery.",
  },
  {
    src: books,
    url: books,
    title: "Foundations worth building",
    category: "Books & learning",
    alt: "Colourful stack of books",
    description: "Reading opens the door to stronger understanding.",
  },
  {
    src: chemistry,
    url: chemistry,
    title: "Chemistry in action",
    category: "Science",
    alt: "Scientific experiment and laboratory equipment",
    description: "Connecting classroom concepts with scientific exploration.",
  },
  {
    src: library,
    url: library,
    title: "A world of knowledge",
    category: "Books & learning",
    alt: "Library filled with academic books",
    description: "Explore, reflect and return to the ideas that matter.",
  },
  {
    src: microscope,
    url: microscope,
    title: "Look a little closer",
    category: "Science",
    alt: "Scientific laboratory with research instruments",
    description: "Curiosity brings the smallest details into focus.",
  },
  {
    src: notebook,
    url: notebook,
    title: "Put your ideas on paper",
    category: "Books & learning",
    alt: "Fountain pen writing on paper",
    description: "Organised notes make revision more purposeful.",
  },
  {
    src: science,
    url: science,
    title: "The spirit of discovery",
    category: "Science",
    alt: "Scientific laboratory with experimental glassware",
    description: "Observe, ask questions and connect the evidence.",
  },
  {
    src: reading,
    url: reading,
    title: "One chapter at a time",
    category: "Books & learning",
    alt: "Hand holding a small stack of books",
    description: "Small, consistent steps support a thoughtful study routine.",
  },
  {
    src: mathematics,
    url: mathematics,
    title: "Find the pattern",
    category: "Science",
    alt: "Mathematical equations and scientific concepts",
    description: "Practise the reasoning behind each solution.",
  },
];
export const courseImages = {
  foundation: educationalImages[2],
  secondary: educationalImages[0],
  senior: educationalImages[5],
  chemistry: educationalImages[3],
};
export const sampleResources = [
  {
    label: "Sample Study Notes",
    topic: "Chemistry · Chemical bonding",
    heading: "Understanding ionic bonds",
    lines: [
      "Electron transfer forms oppositely charged ions.",
      "Electrostatic attraction holds the ions together.",
    ],
    prompt: "Recall: Why does sodium form Na⁺?",
    type: "CONCEPT NOTES",
  },
  {
    label: "Sample Question Bank",
    topic: "Mathematics · Quadratic equations",
    heading: "Think. Solve. Explain.",
    lines: ["01  Factorise x² − 5x + 6.", "02  Find the roots of x² − 9 = 0."],
    prompt: "Show the steps behind your answer.",
    type: "QUESTION BANK",
  },
  {
    label: "Sample DPP",
    topic: "Science · Motion",
    heading: "A little practice, daily",
    lines: [
      "01  Define speed and state its SI unit.",
      "02  A cyclist covers 120 m in 20 s. Find the speed.",
    ],
    prompt: "Focus: units, method and clear working.",
    type: "DAILY PRACTICE",
  },
  {
    label: "Sample PYQ-Style Resource",
    topic: "Chemistry · Solutions",
    heading: "Board-style revision",
    lines: [
      "Explain the difference between molarity and molality.",
      "Which concentration term changes with temperature?",
    ],
    prompt: "Illustrative questions — not actual past-paper extracts.",
    type: "PYQ-STYLE PRACTICE",
  },
  {
    label: "Demo Practice Paper",
    topic: "Mathematics · Algebra",
    heading: "Make every step count",
    lines: ["Section A · Short answers", "Solve 2x + 7 = 19. Check your result."],
    prompt: "Attempt independently, then review your working.",
    type: "PRACTICE PAPER",
  },
  {
    label: "Sample Chapter Test",
    topic: "Chemistry · Atomic structure",
    heading: "Check your understanding",
    lines: [
      "State the roles of protons, neutrons and electrons.",
      "Explain what the atomic number represents.",
    ],
    prompt: "Review concepts before moving to the next chapter.",
    type: "TEST SERIES",
  },
  {
    label: "Sample Revision Planner",
    topic: "Study habits · Weekly revision",
    heading: "Plan. Practise. Reflect.",
    lines: [
      "Choose a chapter and review its key concepts.",
      "Practise questions and revisit difficult ideas.",
    ],
    prompt: "Leave time to reflect on what you learned.",
    type: "PREPARATION TIPS",
  },
];
