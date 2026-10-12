import { describe, expect, it } from "vitest";
import { educationalImages, courseImages } from "@/lib/media";

describe("Media catalogue and image paths", () => {
  it("contains all 10 educational images with valid paths", () => {
    expect(educationalImages).toHaveLength(10);
    educationalImages.forEach((image) => {
      expect(typeof image.src).toBe("string");
      expect(image.src.length).toBeGreaterThan(0);
      expect(image.src).not.toContain("/__l5e/");
      expect(typeof image.alt).toBe("string");
      expect(image.alt.length).toBeGreaterThan(0);
    });
  });

  it("provides valid images for all courses", () => {
    const keys = ["foundation", "secondary", "senior", "chemistry"] as const;
    keys.forEach((key) => {
      const img = courseImages[key];
      expect(img).toBeDefined();
      expect(typeof img.src).toBe("string");
      expect(img.src).not.toContain("/__l5e/");
    });
  });
});
