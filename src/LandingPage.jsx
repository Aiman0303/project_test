import { useState, useEffect } from "react";
import "./Landing.css";

// ── Styles ──────────────────────────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Inter:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }


`;

// ── Data ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#about" },
  { label: "Visit Us", href: "#visit" },
];

const STRIP_ITEMS = [
  "Organic flour from local mills",
  "No artificial preservatives",
  "48-hour fermented sourdough",
  "Baked before 7am daily",
  "Seasonal specials every Friday",
];

const MENU_ITEMS = [
  {
    tag: "Signature",
    name: "Country Sourdough",
    desc: "Open crumb, blistered crust. 48-hour cold-fermented with heritage wheat and a touch of rye.",
    price: "RM 16",
  },
  {
    tag: "Pastry",
    name: "Kouign-Amann",
    desc: "Caramelised, flaky, and unapologetically buttery. Made in small batches each morning.",
    price: "RM 9",
  },
  {
    tag: "Seasonal",
    name: "Pandan Twist",
    desc: "Soft enriched dough braided with house-made pandan cream and toasted coconut flakes.",
    price: "RM 7",
  },
  {
    tag: "Loaf",
    name: "Seeded Whole Wheat",
    desc: "Dense, nutty, and slices beautifully. Sunflower, sesame, and linseed throughout.",
    price: "RM 14",
  },
];

const STATS = [
  { num: "16", label: "Years in business" },
  { num: "4am", label: "When we start baking" },
  { num: "2", label: "Bakers, always" },
  { num: "0", label: "Additives, ever" },
];

const HOURS = [
  { day: "Monday – Friday", time: "7:00am – 2:00pm" },
  { day: "Saturday", time: "7:00am – 1:00pm" },
  { day: "Sunday", time: "Closed" },
  { day: "Public holidays", time: "Check Instagram" },
];

// ── Sub-components ────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">Harlow &amp; Co.</a>
      <ul className="nav-links">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <a href="#visit" className="nav-cta">Find Us</a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-eyebrow">Est. 2009 · Fernwick Village</p>
        <h1>
          Baked fresh,<br />every morning.
        </h1>
        <p>
          We rise at 4am so you don't have to. Slow-fermented sourdoughs,
          hand-laminated pastries, and seasonal sweets — made the unhurried way.
        </p>
        <div className="hero-actions">
          <a href="#menu" className="btn-primary">See the Menu</a>
          <a href="#visit" className="btn-ghost">
            Find us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <svg opacity={0.4} width="280" height="280" viewBox="0 0 280 280" fill="none">
          <ellipse cx="140" cy="180" rx="100" ry="30" fill="#c8b89a" opacity="0.4" />
          <rect x="70" y="100" width="140" height="80" rx="12" fill="#c8b89a" />
          <ellipse cx="140" cy="100" rx="70" ry="30" fill="#ddd0b8" />
          <ellipse cx="140" cy="96" rx="50" ry="20" fill="#ede4d2" />
          <rect x="100" y="170" width="80" height="12" rx="4" fill="#b8a080" opacity="0.6" />
          <line x1="90" y1="135" x2="90" y2="175" stroke="#b8a080" strokeWidth="2" opacity="0.5" />
          <line x1="140" y1="125" x2="140" y2="175" stroke="#b8a080" strokeWidth="2" opacity="0.5" />
          <line x1="190" y1="135" x2="190" y2="175" stroke="#b8a080" strokeWidth="2" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
}

function Strip() {
  return (
    <div className="strip">
      {STRIP_ITEMS.map((item) => (
        <div className="strip-item" key={item}>
          <span className="strip-dot" />
          {item}
        </div>
      ))}
    </div>
  );
}

function MenuSection() {
  return (
    <section className="section" id="menu">
      <p className="section-label">What we make</p>
      <h2 className="section-heading">Today's selection</h2>
      <p className="section-sub">
        Our menu changes with the season. These are our staples — available most
        mornings until they're gone.
      </p>
      <div className="menu-grid">
        {MENU_ITEMS.map((item) => (
          <div className="menu-card" key={item.name}>
            <p className="menu-tag">{item.tag}</p>
            <p className="menu-name">{item.name}</p>
            <p className="menu-desc">{item.desc}</p>
            <p className="menu-price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about" id="about">
      <div>
        <h2 className="about-heading">
          We've been doing this since before sourdough was cool.
        </h2>
        <p className="about-body">
          Harlow &amp; Co. started as a small home kitchen in 2009. We outgrew
          it quickly — not because we chased growth, but because neighbours kept
          asking for more.
        </p>
        <p className="about-body">
          Everything is still mixed by hand. Every loaf is shaped by the same
          two bakers who've been here since the beginning. We're not trying to
          be a chain.
        </p>
      </div>
      <div className="about-stats">
        {STATS.map((s) => (
          <div key={s.label}>
            <p className="stat-num">{s.num}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function VisitSection() {
  return (
    <section className="section" id="visit">
      <p className="section-label">Come find us</p>
      <h2 className="section-heading">Hours &amp; contact</h2>
      <p className="section-sub">
        We sell out early — your best chance of getting a sourdough is before
        10am on weekdays.
      </p>
      <div className="info-grid">
        <div className="info-panel">
          <h3>Opening hours</h3>
          {HOURS.map((row) => (
            <div className="hours-row" key={row.day}>
              <span className="hours-day">{row.day}</span>
              <span>{row.time}</span>
            </div>
          ))}
        </div>
        <div className="info-panel">
          <h3>Get in touch</h3>
          <div className="contact-line">
            <span>
              12 Fernwick High Street,<br />Selangor, 48000
            </span>
            <span>
              Phone: <a href="https://wa.link/6z516h">+012-345 6789</a>
            </span>
            <span>
              Email: <a href="mailto:aimanhaikal312@gmail.com">aimanhaikal312@gmail.com</a>
            </span>
            <span>
              Instagram: <a href="#">@harlowco.bakery</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <span className="footer-logo">Harlow &amp; Co.</span>
      <p className="footer-copy">
        © 2025 Harlow &amp; Co. Artisan Bakery · Fernwick, Selangor
      </p>
    </footer>
  );
}

// ── Root Component ────────────────────────────────────────────────────────────
export default function LandingPage() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = globalStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Strip />
      <MenuSection />
      <AboutSection />
      <VisitSection />
      <Footer />
    </>
  );
}
