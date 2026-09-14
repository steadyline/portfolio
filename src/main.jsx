import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDown, ArrowUp, ArrowUpRight, Check, Menu, Star, X } from "lucide-react";
import {
  siAlgolia,
  siContentful,
  siDocker,
  siExpo,
  siFastapi,
  siFigma,
  siFirebase,
  siFlutter,
  siGoogleanalytics,
  siGooglecloud,
  siGooglemaps,
  siJavascript,
  siLaravel,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siSanity,
  siShopify,
  siStripe,
  siTailwindcss,
  siTypescript,
  siVercel,
  siWordpress,
} from "simple-icons";
import "./styles.css";

const projects = [
  {
    id: "01",
    title: "Commerce Platform",
    category: "Commerce",
    type: "Retail technology",
    summary:
      "A scalable storefront and operations layer for browsing, checkout, orders, and catalogue management.",
    features: [
      "Layered product discovery",
      "Checkout and order operations",
      "Admin catalogue controls",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    asset: "/assets/project-commerce.svg",
  },
  {
    id: "02",
    title: "Multi-vendor Marketplace",
    category: "Commerce",
    type: "Platform commerce",
    summary:
      "Vendor-managed catalogue, routing, commissions, and reporting for marketplace teams.",
    features: ["Vendor workspaces", "Commission logic", "Order routing"],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
    asset: "/assets/project-finance.svg",
  },
  {
    id: "03",
    title: "Subscription Commerce",
    category: "Commerce",
    type: "Direct-to-consumer",
    summary:
      "Recurring-order experience with account management, retention flows, and campaign support.",
    features: [
      "Subscription lifecycle",
      "Customer self-service",
      "Campaign integration",
    ],
    stack: ["Shopify", "Liquid", "JavaScript", "Recharge", "Klaviyo"],
    crop: "crop-commerce",
  },
  {
    id: "04",
    title: "Content & Growth System",
    category: "CMS",
    type: "Publishing ecosystem",
    summary:
      "Composable publishing for fast campaign pages, structured content, SEO, and localization.",
    features: [
      "Visual publishing",
      "SEO and localization",
      "Reusable page modules",
    ],
    stack: ["Next.js", "Sanity", "Tailwind", "Vercel", "Analytics"],
    crop: "crop-culture",
  },
  {
    id: "05",
    title: "Property Portfolio CMS",
    category: "CMS",
    type: "Real-estate platform",
    summary:
      "Structured property publishing with inquiry capture and editorial workflows for real-estate teams.",
    features: [
      "Property catalogue",
      "Lead capture workflows",
      "Editorial approval",
    ],
    stack: ["WordPress", "PHP", "MySQL", "ACF", "JavaScript"],
    asset: "/assets/project-culture.svg",
  },
  {
    id: "06",
    title: "Knowledge Publishing Hub",
    category: "CMS",
    type: "Content platform",
    summary:
      "High-volume editorial system with modular content, indexed search, and fast release cycles.",
    features: [
      "Structured content model",
      "Fast indexed search",
      "Role-based editing",
    ],
    stack: ["Next.js", "Contentful", "Algolia", "Vercel", "TypeScript"],
    asset: "/assets/project-commerce.svg",
  },
  {
    id: "07",
    title: "Booking Operations",
    category: "SaaS",
    type: "Reservation platform",
    summary:
      "Customer booking flows connected to availability, payments, refunds, and staff operations.",
    features: [
      "Availability engine",
      "Payments and refunds",
      "Operations dashboard",
    ],
    stack: ["React", "Laravel", "MySQL", "Stripe", "AWS"],
    asset: "/assets/project-field.svg",
  },
  {
    id: "08",
    title: "Operations Control Room",
    category: "SaaS",
    type: "Internal platform",
    summary:
      "A unified workspace for queues, permissions, audit trails, automations, and reporting.",
    features: [
      "Workflow automation",
      "Audit and access control",
      "Operational reporting",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    crop: "crop-finance",
  },
  {
    id: "09",
    title: "Analytics Intelligence",
    category: "AI & Data",
    type: "Decision-support product",
    summary:
      "Operational intelligence workspace with metric visibility, reporting, and assisted recommendations.",
    features: [
      "Live metric visualization",
      "Role-based reporting",
      "Recommendation flows",
    ],
    stack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "OpenAI"],
    crop: "crop-finance",
  },
  {
    id: "10",
    title: "Predictive Sports Product",
    category: "AI & Data",
    type: "Analytics platform",
    summary:
      "Data-rich sports interface with modelling, saved analysis views, and explainable insights.",
    features: [
      "Prediction workflows",
      "Saved analysis views",
      "Data model integration",
    ],
    stack: ["React", "Python", "FastAPI", "PostgreSQL", "AWS"],
    crop: "crop-field",
  },
  {
    id: "11",
    title: "Mobile Service Platform",
    category: "Mobile",
    type: "Consumer product",
    summary:
      "Location-aware service experience designed for quick booking, dependable updates, and daily use.",
    features: [
      "Maps and location flows",
      "Offline-aware states",
      "Push-ready architecture",
    ],
    stack: ["React Native", "Expo", "Firebase", "Maps", "TypeScript"],
    crop: "crop-field",
  },
  {
    id: "12",
    title: "Connected Field App",
    category: "Mobile",
    type: "Workforce product",
    summary:
      "Mobile workflows connecting field teams to central operations, realtime sync, and task tracking.",
    features: [
      "Offline data capture",
      "Realtime synchronization",
      "Field task flows",
    ],
    stack: ["Flutter", "Firebase", "Cloud Functions", "Maps", "Figma"],
    asset: "/assets/project-field.svg",
  },
];

const categories = ["Commerce", "CMS", "SaaS", "AI & Data", "Mobile"];
const galleryProjects = projects;

const techIcons = {
  React: siReact,
  "React Native": siReact,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  "Node.js": siNodedotjs,
  PostgreSQL: siPostgresql,
  Stripe: siStripe,
  Python: siPython,
  FastAPI: siFastapi,
  Laravel: siLaravel,
  MySQL: siMysql,
  Redis: siRedis,
  Docker: siDocker,
  Expo: siExpo,
  Firebase: siFirebase,
  Maps: siGooglemaps,
  Sanity: siSanity,
  Tailwind: siTailwindcss,
  Vercel: siVercel,
  WordPress: siWordpress,
  PHP: siPhp,
  JavaScript: siJavascript,
  Shopify: siShopify,
  Liquid: siShopify,
  Flutter: siFlutter,
  Figma: siFigma,
  Contentful: siContentful,
  Algolia: siAlgolia,
  Analytics: siGoogleanalytics,
  ACF: siWordpress,
  "Cloud Functions": siGooglecloud,
};

const slug = (value) =>
  value.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");

function Visual({ item }) {
  if (item.asset) {
    return <img src={item.asset} alt="" loading="lazy" />;
  }

  return <div className={`generated-visual ${item.crop}`} aria-hidden="true" />;
}

function Tech({ name }) {
  const icon = techIcons[name];

  return (
    <span className="tech" title={name}>
      {icon ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={icon.path} />
        </svg>
      ) : (
        <b>{name.slice(0, 2)}</b>
      )}
      <span>{name}</span>
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <a className="brand" href="#top" onClick={close}>
        <span className="brand-mark">PD</span>
        <b>Paolo Dapul</b>
      </a>
      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "open" : ""} aria-label="Main navigation">
        <a onClick={close} href="#projects">Projects</a>
        <a onClick={close} href="#reviews">Reviews</a>
        <a onClick={close} href="#contact">Contact</a>
      </nav>
      <div className="header-actions">
        <a className="availability" href="mailto:hello@paolodapul.com"><i /> Available</a>
        <a className="header-contact" href="mailto:hello@paolodapul.com">Let's talk <ArrowUpRight /></a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-index">
        <span>Portfolio / 2026</span>
        <span>Philippines / Worldwide</span>
      </div>
      <div className="hero-lockup">
        <span className="eyebrow">Full-Stack Developer & Consultant</span>
        <h1>Paolo Dapul</h1>
        <p className="hero-tagline">
          I partner with teams to design, build, and scale software that
          holds up under real use — from commerce and CMS platforms to SaaS,
          data products, and mobile apps.
        </p>
        <div className="hero-profile">
          <span>Commerce</span>
          <span>CMS</span>
          <span>SaaS</span>
          <span>AI & Data</span>
          <span>Mobile</span>
        </div>
      </div>
      <div className="hero-foot">
        <span>Scroll to explore selected work</span>
        <a href="#projects">
          View projects <ArrowDown />
        </a>
      </div>
    </section>
  );
}

function GalleryCard({ project }) {
  return (
    <article className="gallery-card">
      <Visual item={project} />
      <div className="gallery-overlay">
        <span>{project.id}</span>
        <div>
          <b>{project.title}</b>
          <small>{project.category}</small>
        </div>
        <ArrowUpRight />
      </div>
    </article>
  );
}

function ScrollGallery() {
  const section = useRef(null);
  const wall = useRef(null);
  const rowOne = useRef(null);
  const rowTwo = useRef(null);
  const title = useRef(null);

  useEffect(() => {
    let raf;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const render = () => {
      raf = null;
      if (!section.current || reduce || innerWidth < 800) return;

      const rect = section.current.getBoundingClientRect();
      const range = section.current.offsetHeight - innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(range, 1)));
      const focus = Math.max(0, Math.min(1, progress / 0.28));
      const travel = Math.max(0, Math.min(1, (progress - 0.2) / 0.8));

      wall.current.style.transform = `translate3d(0,${-22 + focus * 22}vh,0) scale(${0.9 + focus * 0.1}) rotateX(${6 - focus * 6}deg) rotateZ(${10 - focus * 10}deg)`;
      wall.current.style.filter = `blur(${4 - focus * 4}px)`;
      wall.current.style.opacity = `${0.88 + focus * 0.12}`;
      rowOne.current.style.transform = `translate3d(${-travel * 66}vw,0,0)`;
      rowTwo.current.style.transform = `translate3d(${-58 + travel * 58}vw,0,0)`;
      title.current.style.opacity = `${Math.max(0, Math.min(1, (progress - 0.1) / 0.12))}`;
    };

    const update = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    render();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);

    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="gallery-scene" ref={section}>
      <div className="gallery-sticky">
        <div className="gallery-wall" ref={wall}>
          <div className="gallery-titlebar" ref={title}>
            <span>Project reel</span>
            <strong>Selected work</strong>
            <span>Scroll / explore</span>
          </div>
          <div className="gallery-row" ref={rowOne}>
            {galleryProjects.slice(0, 6).map((project) => (
              <GalleryCard key={project.id} project={project} />
            ))}
          </div>
          <div className="gallery-row" ref={rowTwo}>
            {galleryProjects.slice(6).map((project) => (
              <GalleryCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <Visual item={project} />
        <span>{project.id}</span>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span>{project.type}</span>
          <ArrowUpRight />
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-proof">
          <div>
            <small>Delivered</small>
            {project.features.map((feature) => (
              <span key={feature}>
                <Check />
                {feature}
              </span>
            ))}
          </div>
          <div>
            <small>Technology</small>
            <div className="project-tech">
              {project.stack.map((tech) => (
                <Tech name={tech} key={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [active, setActive] = useState(categories[0]);
  const sceneRef = useRef(null);
  const trackRef = useRef(null);
  const groupsRef = useRef([]);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || innerWidth < 900) return;

    let raf;
    const scene = sceneRef.current;
    const track = trackRef.current;
    if (!scene || !track) return;

    const render = () => {
      raf = null;
      const rect = scene.getBoundingClientRect();
      const sceneHeight = scene.offsetHeight - innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(sceneHeight, 1)));

      const trackWidth = track.scrollWidth - innerWidth + 48;
      const x = -progress * trackWidth;
      track.style.transform = `translate3d(${x}px,0,0)`;

      const groups = groupsRef.current.filter(Boolean);
      const centerX = innerWidth / 2;
      groups.forEach((group) => {
        const gRect = group.getBoundingClientRect();
        const gCenter = gRect.left + gRect.width / 2;
        const dist = Math.abs(gCenter - centerX);
        const maxDist = innerWidth * 0.6;
        const closeness = Math.max(0, 1 - dist / maxDist);
        group.style.opacity = `${0.35 + closeness * 0.65}`;
        group.style.transform = `scale(${0.92 + closeness * 0.08})`;
        if (closeness > 0.55 && group.dataset.category !== active) {
          setActive(group.dataset.category);
        }
      });
    };

    const update = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    render();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = (category) => {
    setActive(category);
    const group = groupsRef.current.find(
      (g) => g && g.dataset.category === category,
    );
    if (group) {
      const scene = sceneRef.current;
      const track = trackRef.current;
      const sceneHeight = scene.offsetHeight - innerHeight;
      const trackWidth = track.scrollWidth - innerWidth + 48;
      const groupLeft = group.offsetLeft;
      const progress = groupLeft / Math.max(trackWidth, 1);
      const targetY = scene.offsetTop + progress * sceneHeight;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-head">
        <span className="eyebrow">Project index</span>
        <h2>Selected work across<br />five disciplines.</h2>
      </div>
      <div className="projects-layout">
        <aside>
          <span>Categories</span>
          {categories.map((category) => (
            <button
              className={active === category ? "active" : ""}
              onClick={() => goTo(category)}
              key={category}
            >
              <b>{category}</b>
              <span>
                {String(
                  projects.filter((project) => project.category === category)
                    .length,
                ).padStart(2, "0")}
              </span>
            </button>
          ))}
        </aside>
      </div>
      <div className="projects-scene" ref={sceneRef}>
        <div className="projects-sticky">
          <div className="projects-track" ref={trackRef}>
            {categories.map((category, index) => (
              <section
                className="project-group"
                id={slug(category)}
                data-category={category}
                key={category}
                ref={(el) => (groupsRef.current[index] = el)}
              >
                <header>
                  <span>0{index + 1}</span>
                  <h3>{category}</h3>
                  <span>
                    {projects.filter((p) => p.category === category).length} projects
                  </span>
                </header>
                <div className="project-grid">
                  {projects
                    .filter((p) => p.category === category)
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <div className="projects-mobile">
        {categories.map((category, index) => (
          <section
            className="project-group"
            id={`${slug(category)}-m`}
            data-category={category}
            key={category}
          >
            <header>
              <span>0{index + 1}</span>
              <h3>{category}</h3>
              <span>
                {projects.filter((p) => p.category === category).length} projects
              </span>
            </header>
            <div className="project-grid">
              {projects
                .filter((p) => p.category === category)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { quote: "Working with Paolo was a great experience. He quickly understood our requirements and delivered a high-quality web application using modern technologies.", name: "Sarah Chen", role: "CTO · Meridian Health" },
    { quote: "He transformed our UI ideas into a clean, responsive, and user-friendly interface. Paid attention to details and improved performance across the board.", name: "James Okonkwo", role: "Client · Vault Financial" },
    { quote: "Paolo is a skilled full-stack engineer who helped us improve our application architecture, APIs, and overall performance.", name: "Elena Vasquez", role: "Client · Atlas Corp" },
    { quote: "A talented developer who combines strong technical skills with excellent communication. He delivers clean, maintainable solutions.", name: "Marcus Webb", role: "Client · RetroSoft" },
  ];

  return (
    <section className="testimonials" id="reviews">
      <div className="reviews-head">
        <span className="eyebrow">Client feedback</span>
        <h2>What they say<br />about the work.</h2>
        <p>Direct feedback from clients I've worked with recently.</p>
      </div>
      <div className="review-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.name}>
            <div className="review-stars" aria-label="Five star review">{[1, 2, 3, 4, 5].map((star) => <Star key={star} fill="currentColor" />)}</div>
            <blockquote>“{review.quote}”</blockquote>
            <div className="review-person">
              <span className="avatar">{review.name.split(" ").map((n) => n[0]).join("")}</span>
              <div><b>{review.name}</b><span>{review.role}</span></div>
            </div>
            <span className="quote-mark">”</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-top">
        <span className="eyebrow">Have a project? Let's talk.</span>
        <span className="footer-status">Available for freelance work</span>
      </div>
      <div className="footer-main">
        <h2>Start a<br />conversation.</h2>
        <a className="footer-cta" href="mailto:hello@paolodapul.com">
          hello@paolodapul.com <ArrowUpRight />
        </a>
      </div>
      <div className="footer-base">
        <span>© 2026 Paolo Dapul</span>
        <span>Philippines / Available worldwide</span>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(scrollY > 500);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      className={`back-top ${show ? "show" : ""}`}
      href="#top"
      aria-label="Back to top"
    >
      <ArrowUp />
    </a>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#projects">
        Skip to projects
      </a>
      <Header />
      <main>
        <Hero />
        <ScrollGallery />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
