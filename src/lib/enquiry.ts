import { z } from "zod";
export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name (at least 2 characters).").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^(?:\+91[\s-]?)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number."),
  className: z.enum(["1–8", "9–10", "11–12"], {
    errorMap: () => ({ message: "Please select a class group." }),
  }),
  interest: z.enum(
    [
      "All subjects",
      "Mathematics",
      "Science",
      "Social Studies",
      "English",
      "Physics",
      "Chemistry",
      "Biology",
    ],
    { errorMap: () => ({ message: "Please select your subject interest." }) },
  ),
  message: z.string().trim().max(1000, "Please keep your message under 1,000 characters."),
});
export function enquiryUrl(data: z.infer<typeof enquirySchema>) {
  return (
    "https://wa.me/918441013236?text=" +
    encodeURIComponent(
      `Hello Rajawat Classes, I would like to enquire about admissions.\nName: ${data.name}\nPhone: ${data.phone}\nClasses: ${data.className}\nInterest: ${data.interest}\n${data.message ? `Message: ${data.message}\n` : ""}Please share the available courses and batch details.`,
    )
  );
}
