import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  ArrowRight,
  Atom,
  Check,
  FileText,
  FolderOpen,
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, courses, resourceCategories } from "@/lib/site";
import { enquirySchema, enquiryUrl } from "@/lib/enquiry";
import {
  Reveal,
  SectionHeading,
  CourseCards,
  ChemistryFeature,
  WhyUs,
  Methodology,
  Faculty,
  Admissions,
  PageHero,
  EnquiryActions,
  FAQ,
} from "./shared";
import editorial from "@/assets/chemistry-editorial.jpg";
import { educationalImages, courseImages, sampleResources } from "@/lib/media";
import { CourseImage, EducationalGallery, ResourcePreview } from "./visuals";

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <img
          className="hero-image"
          src={editorial}
          alt="Chemistry glassware, molecular model and academic notebooks — editorial visual"
          width={1536}
          height={1024}
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="hero-location">
            <span /> RAJAWAT CLASSES · BINDAYAKA, JAIPUR
          </div>
          <h1>
            Rajawat Classes.
            <br />
            Strong concepts.
            <br />
            <span>Confident learning.</span>
          </h1>
          <p>
            Quality coaching for Classes 1st–12th, with focused Chemistry guidance for Classes 11th
            and 12th. Learn with clarity. Prepare with confidence.
          </p>
          <div className="action-row">
            <Button asChild>
              <Link to="/courses">
                Explore Our Courses <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="heroOutline">
              <a href={contact.wa} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Enquire on WhatsApp
              </a>
            </Button>
          </div>
          <div className="hero-tagline">
            <span />
            Your Success, Our Commitment!
          </div>
        </div>
        <div className="hero-image-label">
          <Atom size={18} />
          <span>CONCEPTS. PRACTICE. CONFIDENCE.</span>
        </div>
      </section>
      <div className="trust-strip">
        <div className="container">
          {[
            [BookOpen, "Classes 1–12"],
            [ShieldCheck, "CBSE & RBSE Focus"],
            [FileText, "Notes, DPPs & PYQs"],
            [Atom, "Chapter-Wise Tests"],
          ].map(([Icon, text]) => {
            const I = Icon as typeof BookOpen;
            return (
              <div key={String(text)}>
                <I size={21} />
                <span>{String(text)}</span>
              </div>
            );
          })}
        </div>
      </div>
      <section className="section courses-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="THE RIGHT GUIDANCE, AT EVERY STAGE"
              title="Small steps. Strong foundations."
            >
              <Link className="text-link" to="/courses">
                Explore all courses <ArrowUpRight size={18} />
              </Link>
            </SectionHeading>
          </Reveal>
          <CourseCards />
        </div>
      </section>
      <ChemistryFeature />
      <WhyUs />
      <Methodology />
      <section className="section resources-preview">
        <div className="container resource-preview-grid">
          <Reveal>
            <div className="eyebrow">BEYOND THE CLASSROOM</div>
            <h2>
              Good preparation starts
              <br />
              with the right material.
            </h2>
            <p>
              From concept notes to chapter-wise practice, enquire about the study material
              available for your class and subject.
            </p>
            <Button asChild variant="secondary">
              <Link to="/study-material">
                Explore Study Material <ArrowUpRight />
              </Link>
            </Button>
          </Reveal>
          <Reveal className="home-resource-sample">
            <ResourcePreview />
            <div className="sample-caption">
              <strong>Sample Study Notes</strong>
              <span>Demonstration preview · not a downloadable resource</span>
            </div>
          </Reveal>
        </div>
      </section>
      <Faculty />
      <section className="gallery-preview section">
        <div className="container">
          <SectionHeading eyebrow="A CLOSER LOOK" title="The Rajawat Classes gallery.">
            <Link to="/gallery" className="text-link">
              View Gallery <ArrowUpRight size={18} />
            </Link>
          </SectionHeading>
          <EducationalGallery preview />
        </div>
      </section>
      <Admissions />
    </>
  );
}
export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT RAJAWAT CLASSES"
        image={educationalImages[4]}
        title="A stronger understanding. A brighter way forward."
        description="Academic guidance rooted in clear concepts, structured preparation, and a genuine focus on learning — here in Bindayaka, Jaipur."
      />
      <section className="section">
        <div className="container editorial-grid">
          <Reveal>
            <div className="eyebrow">YOUR SUCCESS, OUR COMMITMENT!</div>
            <h2>
              Learning that makes
              <br />
              the concepts click.
            </h2>
            <figure className="about-photo">
              <img
                src={educationalImages[1]?.src}
                alt="Bright classroom — illustrative educational image, not institute premises"
                width={1100}
                height={619}
                loading="lazy"
              />
              <figcaption>
                Clear concepts. A purposeful learning environment.{" "}
                <span>Illustrative photograph</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal>
            <p>
              Rajawat Classes offers coaching for Classes 1st–12th, with a special focus on
              Chemistry for Classes 11th and 12th. Our academic approach brings together
              explanation, regular practice, revision and assessments.
            </p>
            <p>
              We believe meaningful learning begins with understanding. The aim is to help students
              connect ideas, ask thoughtful questions and approach their studies with greater
              confidence.
            </p>
            <p>
              For senior secondary subjects, contact the institute to confirm the currently
              available batches and guidance suited to your requirements.
            </p>
          </Reveal>
        </div>
      </section>
      <WhyUs />
      <Methodology />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="SUPPORT AT EVERY STAGE"
            title="From fundamentals to focused study."
          />
          <CourseCards />
        </div>
      </section>
      <ChemistryFeature />
      <Faculty />
      <Admissions />
    </>
  );
}
export function CoursesPage() {
  const [filter, setFilter] = useState("All courses");
  return (
    <>
      <PageHero
        eyebrow="OUR ACADEMIC PROGRAMMES"
        image={educationalImages[9]}
        title="The right course. The next step."
        description="Explore coaching for Classes 1st–12th and focused Chemistry guidance. Find the academic support that fits your stage of learning."
      />
      <section className="section">
        <div className="container">
          <div className="course-filters" role="group" aria-label="Filter courses">
            {["All courses", "Classes 1–8", "Classes 9–10", "Classes 11–12", "Chemistry"].map(
              (f, i) => (
                <Button
                  key={f}
                  variant={filter === f ? "secondary" : "ghost"}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                >
                  {f}
                </Button>
              ),
            )}
          </div>
          {filter === "All courses" ? (
            <CourseCards all />
          ) : (
            <div className="filtered-course">
              {courses
                .filter(
                  (_, i) =>
                    i ===
                    ["Classes 1–8", "Classes 9–10", "Classes 11–12", "Chemistry"].indexOf(filter),
                )
                .map((c) => (
                  <article className="course-card" key={c.id}>
                    <CourseImage id={c.id} />
                    <Atom size={30} />
                    <div className="eyebrow">{c.label}</div>
                    <h2>{c.title}</h2>
                    <p>{c.description}</p>
                    <div className="subject-list">
                      {c.subjects.map((s) => (
                        <span key={s}>
                          <Check size={14} />
                          {s}
                        </span>
                      ))}
                    </div>
                    <Link to={c.path} className="text-link">
                      View Course <ArrowUpRight size={18} />
                    </Link>
                  </article>
                ))}
            </div>
          )}
          <p className="availability-note">
            Subject options are as advertised. Please enquire to confirm current batches, fees and
            schedules.
          </p>
        </div>
      </section>
      <Methodology />
      <Admissions />
    </>
  );
}
export function CourseDetail({ id }: { id: string }) {
  const course = courses.find((c) => c.id === id);
  if (!course) return null;
  const chemistry = id === "chemistry";
  return (
    <>
      <div className="breadcrumb container">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/courses">Courses</Link>
        <span>/</span>
        <span>{course.title}</span>
      </div>
      <PageHero
        eyebrow={course.label}
        image={courseImages[id as keyof typeof courseImages]}
        title={chemistry ? "Chemistry, from zero to advanced." : course.title + " coaching."}
        description={course.description}
      />
      <section className="section">
        <div className="container course-detail-grid">
          <div>
            <div className="eyebrow">CLARITY AT EVERY STEP</div>
            <h2>
              {chemistry
                ? "Connect the data. Understand the feel."
                : "Build understanding that stays with you."}
            </h2>
            <p>
              Eligible classes:{" "}
              {id === "foundation"
                ? "1st to 8th"
                : id === "secondary"
                  ? "9th and 10th"
                  : "11th and 12th"}
              .
            </p>
            <h3>Subjects & academic focus</h3>
            <div className="subject-tags">
              {course.subjects.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            {id === "senior" && (
              <p>
                These are the subject options advertised by Rajawat Classes. Separate active batches
                for every subject are not confirmed; please enquire about availability.
              </p>
            )}
            <h3>What your learning focuses on</h3>
            <ul className="check-list">
              {course.objectives.map((o) => (
                <li key={o}>
                  <Check size={18} />
                  {o}
                </li>
              ))}
            </ul>
            <h3>Teaching, practice & assessment</h3>
            <p>
              {chemistry
                ? "Concept-focused explanation is supported by notes, Daily Practice Problems (DPPs), Previous Year Questions (PYQs), and chapter-wise test series for CBSE and RBSE preparation."
                : "The learning approach emphasises clear explanation, subject practice, regular revision and reviewing progress. Ask the institute about the specific material and assessment arrangements available for your class."}
            </p>
            <h3>Study resources</h3>
            <p>
              {chemistry
                ? "Enquire about Chemistry notes, DPPs, PYQs and tests suited to your chapters and board."
                : "Contact the institute for details of subject notes, practice material and revision support appropriate to your course."}
            </p>
            <Link to="/study-material" className="text-link">
              Study Material <ArrowUpRight size={17} />
            </Link>
          </div>
          <aside className="enquiry-panel">
            <CourseImage id={id} />
            <Atom size={38} />
            <div className="eyebrow">LET’S FIND YOUR NEXT STEP</div>
            <h3>
              Interested in
              <br />
              {course.title}?
            </h3>
            <p>Speak with us about available subjects, batches, fees and admission arrangements.</p>
            <EnquiryActions />
            <div className="panel-location">
              <MapPin size={16} /> Bindayaka, Jaipur
            </div>
          </aside>
        </div>
      </section>
      {chemistry && <ChemistryFeature />}
      <section className="section faq-section">
        <div className="container faq-grid">
          <div>
            <div className="eyebrow">A FEW THINGS TO KNOW</div>
            <h2>
              Your questions,
              <br />
              answered.
            </h2>
          </div>
          <FAQ
            items={[
              {
                q: "Which classes is this course for?",
                a: `This course is for ${id === "foundation" ? "Classes 1st–8th" : id === "secondary" ? "Classes 9th–10th" : "Classes 11th–12th"}. Contact Rajawat Classes to discuss your subject requirements.`,
              },
              {
                q: "What are the fees and batch timings?",
                a: "Fees, timings and current batch availability are confirmed directly by the institute. Call or send a WhatsApp enquiry for the latest details.",
              },
              {
                q: chemistry
                  ? "Does Chemistry teaching cover CBSE and RBSE?"
                  : "How do I confirm subject availability?",
                a: chemistry
                  ? "Chemistry guidance includes a focus on CBSE and RBSE board preparation. Please share your class and board when enquiring."
                  : "Send your class and preferred subjects to Rajawat Classes. The institute will confirm which batches are available.",
              },
              {
                q: "How can I enquire about admissions?",
                a: "Use the WhatsApp enquiry or telephone button, or prepare an enquiry on the Contact & Admissions page. The institute can help you with the next steps.",
              },
            ]}
          />
        </div>
      </section>
      <Admissions />
    </>
  );
}
export function StudyMaterialPage() {
  return (
    <>
      <PageHero
        eyebrow="THE STUDY MATERIAL LIBRARY"
        image={educationalImages[6]}
        title="More clarity. More purposeful practice."
        description="Explore illustrative notes, question sets and revision previews. Enquire about approved material for your class, subject and board."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="A STRUCTURED APPROACH TO PREPARATION"
            title="Resources for every part of learning."
          />
          <div className="resource-grid">
            {resourceCategories.map((name, i) => (
              <Reveal key={name}>
                <article className="resource-card">
                  <ResourcePreview index={i} />
                  <span className="eyebrow">DEMONSTRATION RESOURCE</span>
                  <h3>{sampleResources[i]?.label ?? name}</h3>
                  <p>
                    {
                      [
                        "Concise concept revision, organised by subject and chapter.",
                        "Question-led practice to connect understanding and answers.",
                        "Purposeful daily practice to apply what you learn.",
                        "Explore the patterns and expectations of board questions.",
                        "Strengthen preparation with focused question practice.",
                        "Chapter-wise evaluation to review learning progress.",
                        "Discuss revision planning and approaches to board preparation.",
                      ][i]
                    }
                  </p>
                  <Button asChild variant="link">
                    <a href={contact.wa} target="_blank" rel="noopener noreferrer">
                      Enquire about availability <ArrowUpRight />
                    </a>
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="resource-notice">
            <FolderOpen size={25} />
            <div>
              <h3>Looking for a particular chapter or subject?</h3>
              <p>
                These previews are sample content, not downloadable institute documents or actual
                past-paper extracts. Contact Rajawat Classes to ask about approved notes and
                practice material.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Admissions />
    </>
  );
}
export function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="THE RAJAWAT CLASSES GALLERY"
        image={educationalImages[1]}
        title="A closer look at our academic world."
        description="A collection inspired by curiosity, focus and discovery — from books and study spaces to the world of science."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="THE LEARNING COLLECTION"
            title="Where curiosity finds its focus."
          />
          <EducationalGallery />
        </div>
      </section>
      <Admissions />
    </>
  );
}
export function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ready, setReady] = useState("");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = enquirySchema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        next[String(issue.path[0])] = issue.message;
      });
      setErrors(next);
      setReady("");
      return;
    }
    setErrors({});
    setReady(enquiryUrl(result.data));
  }
  return (
    <>
      <PageHero
        eyebrow="CONTACT & ADMISSIONS"
        image={educationalImages[0]}
        title="Let’s start with a conversation."
        description="Tell us where you are in your learning journey. We’ll help you explore the available courses, subjects and admission arrangements."
      />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <figure className="contact-photo">
              <img
                src={educationalImages[2]?.src}
                alt="Colourful academic books — illustrative photograph"
                width={1100}
                height={733}
                loading="lazy"
              />
              <figcaption>THE RIGHT GUIDANCE, FOR YOUR NEXT CHAPTER</figcaption>
            </figure>
            <div className="eyebrow">RAJAWAT CLASSES, JAIPUR</div>
            <h2>
              We’re here for
              <br />
              your next step.
            </h2>
            <div className="contact-item">
              <MapPin />
              <div>
                <h3>Visit the institute</h3>
                <p>Rajawat Classes, {contact.address}</p>
                <a
                  href={contact.maps}
                  className="text-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <div className="contact-item">
              <Phone />
              <div>
                <h3>Call for admissions</h3>
                <a href={contact.tel}>{contact.phone}</a>
              </div>
            </div>
            <div className="contact-item">
              <MessageCircle />
              <div>
                <h3>Enquire on WhatsApp</h3>
                <a href={contact.wa} target="_blank" rel="noopener noreferrer">
                  {contact.whatsapp}
                </a>
              </div>
            </div>
            <div className="location-panel">
              <MapPin size={34} />
              <h3>Bindayaka, Jaipur</h3>
              <p>Bajrang Vatika · Rajasthan 302041</p>
              <Button asChild variant="secondary">
                <a href={contact.maps} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
          <div className="form-panel">
            <h2>Admission enquiry</h2>
            <p>Prepare your enquiry and send it directly on WhatsApp.</p>
            <form noValidate onSubmit={submit} onChange={() => setReady("")}>
              <div className="form-row">
                <Field label="Your name" name="name" error={errors["name"]}>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    maxLength={100}
                    required
                    placeholder="Full name"
                    aria-invalid={!!errors["name"]}
                    aria-describedby={errors["name"] ? "name-error" : undefined}
                  />
                </Field>
                <Field label="Mobile number" name="phone" error={errors["phone"]}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={16}
                    required
                    placeholder="10-digit mobile number"
                    aria-invalid={!!errors["phone"]}
                    aria-describedby={errors["phone"] ? "phone-error" : undefined}
                  />
                </Field>
              </div>
              <div className="form-row">
                <Field label="Class group" name="className" error={errors["className"]}>
                  <select
                    id="className"
                    name="className"
                    required
                    aria-invalid={!!errors["className"]}
                    aria-describedby={errors["className"] ? "className-error" : undefined}
                  >
                    <option value="">Select classes</option>
                    {["1–8", "9–10", "11–12"].map((c) => (
                      <option value={c} key={c}>
                        Classes {c}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Subject interest" name="interest" error={errors["interest"]}>
                  <select
                    id="interest"
                    name="interest"
                    required
                    aria-invalid={!!errors["interest"]}
                    aria-describedby={errors["interest"] ? "interest-error" : undefined}
                  >
                    <option value="">Select subject</option>
                    {[
                      "All subjects",
                      "Mathematics",
                      "Science",
                      "Social Studies",
                      "English",
                      "Physics",
                      "Chemistry",
                      "Biology",
                    ].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label="Your message (optional)" name="message" error={errors["message"]}>
                <textarea
                  id="message"
                  name="message"
                  maxLength={1000}
                  rows={4}
                  placeholder="Share your class, board or questions…"
                />
              </Field>
              <p className="form-privacy">
                Your details are not stored by this website. They are shared with WhatsApp only when
                you choose to continue. <Link to="/privacy-policy">Privacy Policy</Link>
              </p>
              <Button type="submit" className="form-submit">
                Prepare WhatsApp Enquiry <ArrowRight />
              </Button>
              {ready && (
                <div className="form-ready" role="status">
                  <Check size={20} />
                  <div>
                    <strong>Your enquiry is ready — not sent yet.</strong>
                    <p>Continue to WhatsApp and send the prepared message.</p>
                    <Button asChild>
                      <a href={ready} target="_blank" rel="noopener noreferrer">
                        Continue to WhatsApp <ArrowUpRight />
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </form>
            <div className="enquiry-help">
              <h3>What would you like to know?</h3>
              <p>
                Share your class and board, subjects you need help with, or a chapter you’re finding
                challenging. Ask us about current batches, study material and admission
                arrangements.
              </p>
              <div className="faculty-focus">
                <span>Classes 1–8</span>
                <span>Classes 9–10</span>
                <span>Classes 11–12</span>
                <span>Chemistry</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {children}
      {error && (
        <span className="field-error" id={`${name}-error`} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
export function PolicyPage({ terms = false }: { terms?: boolean }) {
  return (
    <>
      <PageHero
        eyebrow="RAJAWAT CLASSES"
        title={terms ? "Terms & Conditions" : "Privacy Policy"}
        description={
          terms
            ? "Information about using this website and enquiring about our academic programmes."
            : "How this website handles information when you explore courses or prepare an admissions enquiry."
        }
      />
      <section className="section">
        <article className="container policy">
          {terms ? (
            <>
              <h2>Website information</h2>
              <p>
                This website provides information about Rajawat Classes and its advertised academic
                offerings. Subject availability, fees, batch schedules and admission arrangements
                must be confirmed directly with the institute.
              </p>
              <h2>Admissions and course availability</h2>
              <p>
                An enquiry is not an admission confirmation or a reservation. Any admission, fee,
                cancellation or refund terms are to be confirmed with Rajawat Classes before making
                a commitment or payment.
              </p>
              <h2>Learning and outcomes</h2>
              <p>
                Educational descriptions explain the institute’s teaching focus and resources. The
                website does not guarantee examination results, grades, rankings or admission to
                other institutions.
              </p>
              <h2>Study material and content</h2>
              <p>
                Do not reproduce or distribute institute materials without permission. Resources may
                be made available subject to the institute’s approval. No downloadable documents are
                currently published on this website.
              </p>
              <h2>Third-party links</h2>
              <p>
                Telephone, WhatsApp and Google Maps actions connect to external services. Their
                availability and terms are controlled by their respective providers.
              </p>
            </>
          ) : (
            <>
              <h2>Information you choose to share</h2>
              <p>
                The enquiry form uses your name, phone number, class group, subject interest and
                optional message to prepare a WhatsApp message. This website does not submit the
                form to a server or store your enquiry details.
              </p>
              <h2>WhatsApp enquiries</h2>
              <p>
                Preparing an enquiry does not send it. When you choose “Continue to WhatsApp”, your
                entered information is included in a message link shared with WhatsApp. You choose
                whether to send the message. WhatsApp’s privacy terms apply to that service; Rajawat
                Classes receives the message when you send it.
              </p>
              <h2>External services</h2>
              <p>
                Directions links open Google Maps and call links open your device’s telephone
                application. Website fonts are requested from Google Fonts, which may receive
                standard connection information such as an IP address. These services operate under
                their own privacy policies.
              </p>
              <h2>Website storage and technical information</h2>
              <p>
                The admissions form does not use cookies or browser storage to save personal
                information. Hosting services may process standard request information for website
                delivery and security. Avoid including sensitive personal information in your
                optional message.
              </p>
              <h2>Your choices</h2>
              <p>
                You can browse without completing the form, call instead of using WhatsApp, or
                contact the institute about information you have shared directly with it.
              </p>
            </>
          )}
          <h2>Contact</h2>
          <p>
            For questions, contact Rajawat Classes at <a href={contact.tel}>{contact.phone}</a>, or
            visit {contact.address}.
          </p>
          <Link to="/contact" className="text-link">
            Contact Rajawat Classes <ArrowUpRight size={18} />
          </Link>
        </article>
      </section>
    </>
  );
}
