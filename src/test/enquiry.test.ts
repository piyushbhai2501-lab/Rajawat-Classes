import { describe, it, expect } from "vitest";
import { enquirySchema, enquiryUrl } from "@/lib/enquiry";
describe("Admissions enquiry", () => {
  const valid = {
    name: "Test Learner",
    phone: "9876543210",
    className: "11–12" as const,
    interest: "Chemistry" as const,
    message: "CBSE guidance",
  };
  it("rejects empty enquiries and malformed mobile numbers", () => {
    expect(enquirySchema.safeParse({}).success).toBe(false);
    expect(enquirySchema.safeParse({ ...valid, phone: "123" }).success).toBe(false);
  });
  it("prepares an encoded WhatsApp message to the institute", () => {
    const url = new URL(enquiryUrl(enquirySchema.parse(valid)));
    expect(url.hostname).toBe("wa.me");
    expect(url.pathname).toBe("/918441013236");
    expect(url.searchParams.get("text")).toContain("Test Learner");
    expect(url.searchParams.get("text")).toContain("Chemistry");
  });
  it("limits messages and trims names", () => {
    expect(enquirySchema.safeParse({ ...valid, message: "x".repeat(1001) }).success).toBe(false);
    expect(enquirySchema.parse({ ...valid, name: "  Test Learner  " }).name).toBe("Test Learner");
  });
});
