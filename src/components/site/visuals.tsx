import { useState } from "react";
import { ArrowUpRight, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { educationalImages, courseImages, sampleResources } from "@/lib/media";

export function CourseImage({ id }: { id: string }) {
  const image = courseImages[id as keyof typeof courseImages];
  if (!image) return null;
  return (
    <img
      className="course-photo"
      src={image.src}
      alt={`${image.alt} — illustrative educational image`}
      width={1100}
      height={733}
      loading="lazy"
    />
  );
}

export function ResourcePreview({ index = 0 }: { index?: number }) {
  const resource = sampleResources[index];
  if (!resource) return null;
  return (
    <div className={`sample-preview sample-style-${index % 3}`}>
      <div className="sample-paper">
        <div className="sample-paper-top">
          <span>RAJAWAT CLASSES</span>
          <span>SAMPLE</span>
        </div>
        <small>{resource.type}</small>
        <h4>{resource.heading}</h4>
        <div className="sample-rule" />
        {resource.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <div className="sample-prompt">{resource.prompt}</div>
        <div className="sample-paper-bottom">
          <span>{resource.topic}</span>
          <span>01</span>
        </div>
      </div>
    </div>
  );
}

export function EducationalGallery({ preview = false }: { preview?: boolean }) {
  const [filter, setFilter] = useState("All images");
  const [selected, setSelected] = useState<(typeof educationalImages)[number] | null>(null);
  const images = preview
    ? educationalImages.slice(0, 3)
    : educationalImages.filter((image) => filter === "All images" || image.category === filter);
  return (
    <>
      <p className="editorial-note">
        Educational inspiration · Illustrative photographs, not images of the Rajawat Classes
        premises or faculty.
      </p>
      {!preview && (
        <div className="course-filters" role="group" aria-label="Filter gallery">
          {["All images", "Study spaces", "Books & learning", "Science"].map((category) => (
            <Button
              key={category}
              variant={filter === category ? "secondary" : "ghost"}
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      )}
      <div className={`educational-gallery ${preview ? "gallery-home" : ""}`}>
        {images.map((image) => (
          <figure className="gallery-tile" key={image.src}>
            <Button
              variant="ghost"
              className="gallery-image-button"
              aria-label={`View image: ${image.title}`}
              onClick={() => setSelected(image)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" width={1100} height={733} />
              <span className="gallery-expand">
                <ImagePlus size={19} />
              </span>
            </Button>
            <figcaption>
              <small>{image.category}</small>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="gallery-dialog">
          {selected && (
            <>
              <DialogTitle>{selected.title}</DialogTitle>
              <img src={selected.src} alt={selected.alt} width={1100} height={733} />
              <DialogDescription>
                {selected.description} Illustrative educational photograph from Unsplash; not an
                institute photograph.
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
      {!preview && (
        <p className="image-credit">
          Educational photography sourced from Unsplash. For current classroom information,{" "}
          <a href="/contact">
            contact Rajawat Classes <ArrowUpRight size={14} />
          </a>
          .
        </p>
      )}
    </>
  );
}
