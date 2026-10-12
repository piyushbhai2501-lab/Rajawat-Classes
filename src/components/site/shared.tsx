import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Atom,
  BookOpen,
  Layers3,
  GraduationCap,
  Check,
  ChevronDown,
  Menu,
  X,
  Target,
  NotebookPen,
  Repeat2,
  ClipboardCheck,
  HeartHandshake,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { contact, courses, features, steps } from "@/lib/site";
import editorial from "@/assets/chemistry-editorial.jpg";
import { educationalImages } from "@/lib/media";
import { CourseImage } from "./visuals";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
export function Logo() {
  return (
    <Link to="/" className="brand" aria-label="Rajawat Classes home">
      <span className="brand-mark" aria-hidden="true">
        R<span>.</span>
      </span>
      <span className="brand-text">
        RAJAWAT<span>CLASSES</span>
      </span>
    </Link>
  );
}
const nav = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Study Material", "/study-material"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;
export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const scroll = () => setCompact(window.scrollY > 30);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`site-header ${compact ? "compact" : ""}`}>
        <div className="container header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            <NavLink label="Home" path="/" />
            <NavLink label="About Us" path="/about" />
            <div className="course-menu">
              <Link to="/courses" activeProps={{ className: "active" }}>
                Courses <ChevronDown size={13} />
              </Link>
              <div className="course-dropdown">
                {courses.map((c) => (
                  <Link key={c.id} to={c.path}>
                    <span>{c.title}</span>
                    <ArrowUpRight size={16} />
                  </Link>
                ))}
              </div>
            </div>
            <NavLink label="Study Material" path="/study-material" />
            <NavLink label="Gallery" path="/gallery" />
            <NavLink label="Contact" path="/contact" />
          </nav>
          <Button asChild className="header-cta">
            <Link to="/contact">
              Enquire Now <ArrowUpRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
            {nav.slice(0, 2).map(([label, path]) => (
              <Link key={path} to={path} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link to="/courses" onClick={() => setOpen(false)}>
              Courses
            </Link>
            {courses.map((c) => (
              <Link className="mobile-sub" to={c.path} key={c.id} onClick={() => setOpen(false)}>
                {c.title}
              </Link>
            ))}
            {nav.slice(2).map(([label, path]) => (
              <Link key={path} to={path} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
function NavLink({ label, path }: { label: string; path: (typeof nav)[number][1] }) {
  return (
    <Link to={path} activeProps={{ className: "active" }} activeOptions={{ exact: true }}>
      {label}
    </Link>
  );
}
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Logo />
            <p>
              Strong concepts. Structured practice.
              <br />A brighter academic journey.
            </p>
            <span className="footer-tagline">Your Success, Our Commitment!</span>
          </div>
          <div>
            <h3>Explore</h3>
            <Link to="/about">About Us</Link>
            <Link to="/courses">Our Courses</Link>
            <Link to="/study-material">Study Material</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
          <div>
            <h3>Our courses</h3>
            {courses.map((c) => (
              <Link to={c.path} key={c.id}>
                {c.title}
              </Link>
            ))}
          </div>
          <div>
            <h3>Find us in Jaipur</h3>
            <p>{contact.address}</p>
            <a href={contact.tel}>{contact.phone}</a>
            <a href={contact.wa} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={14} /> WhatsApp {contact.whatsapp}
            </a>
            <a href={contact.maps} target="_blank" rel="noopener noreferrer">
              Get directions <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Rajawat Classes. All rights reserved.</span>
          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
      <a
        className="floating-wa"
        href={contact.wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <div className="mobile-actions">
        <a href={contact.tel}>
          <Phone size={17} /> Call
        </a>
        <a href={contact.wa} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </>
  );
}
export function EnquiryActions({ directions = false }: { directions?: boolean }) {
  return (
    <div className="action-row">
      <Button asChild>
        <a href={contact.wa} target="_blank" rel="noopener noreferrer">
          <MessageCircle /> WhatsApp Enquiry <ArrowUpRight />
        </a>
      </Button>
      <Button asChild variant="outline">
        <a href={contact.tel}>
          <Phone /> Call Now
        </a>
      </Button>
      {directions && (
        <Button asChild variant="outline">
          <a href={contact.maps} target="_blank" rel="noopener noreferrer">
            <MapPin /> Get Directions
          </a>
        </Button>
      )}
    </div>
  );
}
export function Admissions() {
  return (
    <section className="admissions">
      <div className="container">
        <Reveal>
          <div className="eyebrow">LET’S TAKE THE NEXT STEP</div>
          <h2>
            Your learning journey
            <br />
            starts here<span className="gold-text">.</span>
          </h2>
          <p>
            Connect with Rajawat Classes to enquire about
            <br className="desktop-only" /> available batches, subjects, and admissions.
          </p>
          <EnquiryActions directions />
        </Reveal>
        <figure className="admissions-photo">
          <img
            src={educationalImages[8]?.src}
            alt="Books for the next chapter of learning — illustrative photograph"
            width={1100}
            height={733}
            loading="lazy"
          />
          <figcaption>YOUR NEXT CHAPTER STARTS WITH A CONVERSATION</figcaption>
        </figure>
      </div>
    </section>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
export function CourseCards({ all = false }: { all?: boolean }) {
  const icons = [BookOpen, Layers3, GraduationCap, Atom];
  return (
    <div className={`course-grid ${all ? "four-courses" : ""}`}>
      {courses.slice(0, all ? 4 : 3).map((c, i) => {
        const Icon = icons[i] ?? BookOpen;
        return (
          <Reveal key={c.id}>
            <article className={`course-card course-${i}`}>
              <CourseImage id={c.id} />
              <div className="course-card-top">
                <span className="course-icon">
                  <Icon size={25} />
                </span>
                <span className="course-number">{c.number}</span>
              </div>
              <div className="eyebrow">{c.label}</div>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <div className="subject-list">
                {c.subjects.map((s) => (
                  <span key={s}>
                    <Check size={13} />
                    {s}
                  </span>
                ))}
              </div>
              <Link className="text-link" to={c.path}>
                View Course <ArrowUpRight size={18} />
              </Link>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
export function Methodology() {
  return (
    <section className="section methodology">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="THE RAJAWAT APPROACH" title="A clear path to better learning." />
          <div className="journey">
            {steps.map((step, i) => (
              <div className="journey-step" key={step}>
                <span>0{i + 1}</span>
                <h3>{step}</h3>
                <p>
                  {
                    [
                      "Start with the why behind each idea.",
                      "Apply concepts through daily practice.",
                      "Revisit, connect and consolidate.",
                      "Identify strengths and the next steps.",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export function WhyUs() {
  const icons = [Target, NotebookPen, Repeat2, ClipboardCheck, Compass, HeartHandshake];
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="BUILT AROUND YOUR LEARNING"
            title="More than teaching. A thoughtful approach."
          />
        </Reveal>
        <div className="feature-grid">
          {features.map(([title, text], i) => {
            const Icon = icons[i] ?? Target;
            return (
              <Reveal key={title}>
                <div className="feature">
                  <Icon size={25} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export function ChemistryFeature() {
  return (
    <section className="chemistry-feature">
      <div className="container chemistry-grid">
        <Reveal>
          <div className="eyebrow">CHEMISTRY IS OUR ELEMENT</div>
          <h2>
            Chemistry, from
            <br />
            zero to <span className="gold-text">advanced.</span>
          </h2>
          <p>
            Understand the concepts, connect the data, and develop confidence through structured
            practice.
          </p>
          <div className="chem-points">
            {[
              "Concept-focused teaching",
              "Notes & study material",
              "Daily Practice Problems",
              "Previous Year Questions",
              "Chapter-wise test series",
              "CBSE & RBSE preparation",
            ].map((s) => (
              <span key={s}>
                <Check size={15} />
                {s}
              </span>
            ))}
          </div>
          <Button asChild>
            <Link to="/courses/chemistry">
              Explore Chemistry Classes <ArrowUpRight />
            </Link>
          </Button>
        </Reveal>
        <Reveal className="chem-visual">
          <img
            src={editorial}
            alt="Editorial chemistry still life with glass flasks, a molecular model and study notebooks"
            width={1536}
            height={1024}
            loading="lazy"
          />
          <div className="chem-quote">
            <Atom size={23} />
            <span>
              “Chemistry Is All About
              <br />
              Data and Feel.”
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export function Faculty() {
  return (
    <section className="section faculty">
      <div className="container faculty-inner">
        <Reveal className="faculty-editorial">
          <img
            src={educationalImages[7]?.src}
            alt="Chemistry glassware — illustrative subject visual, not a faculty photograph"
            width={1100}
            height={733}
            loading="lazy"
          />
          <div className="faculty-signature">
            <span>RJ</span>
            <div>
              RJ Rajawat<small>CHEMISTRY EDUCATOR</small>
            </div>
            <Atom size={25} />
          </div>
        </Reveal>
        <Reveal>
          <div className="eyebrow">MEET YOUR CHEMISTRY EDUCATOR</div>
          <h2>RJ Rajawat</h2>
          <div className="faculty-role">Chemistry Educator | Rajawat Classes</div>
          <p>
            A concept-first approach to Chemistry, with structured learning and purposeful practice.
            Connect with RJ Rajawat to discuss your academic needs and the available Chemistry
            classes.
          </p>
          <p>
            From the first explanation to the final revision, the focus is on connecting ideas
            rather than memorising isolated facts. Explore physical, organic and inorganic Chemistry
            with notes, DPPs and chapter-wise practice.
          </p>
          <div className="faculty-focus">
            <span>Concept clarity</span>
            <span>CBSE & RBSE focus</span>
            <span>Classes 11 & 12</span>
          </div>
          <Link className="text-link" to="/contact">
            Enquire About Chemistry Classes <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: { src: string; alt: string } | undefined;
}) {
  return (
    <section className={`page-hero ${image ? "page-hero-photo" : ""}`}>
      {image && (
        <>
          <img
            className="page-cover"
            src={image.src}
            alt={`${image.alt} — illustrative educational photograph`}
            width={1100}
            height={733}
            fetchPriority="high"
          />
          <div className="page-cover-shade" />
        </>
      )}
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {!image && <Atom className="page-hero-atom" aria-hidden="true" />}
    </section>
  );
}
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="faq">
      {items.map((item, i) => (
        <AccordionItem value={`faq-${i}`} key={item.q}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
