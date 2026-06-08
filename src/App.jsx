import React from "react";
import { motion } from "framer-motion";
import brownHillLogo from "../brownhill_marketing_and_media_logo.png";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Compass,
  FileSearch,
  Globe2,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Search,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const buildItems = [
  {
    title: "Market Intelligence",
    category: "Research",
    description:
      "Audience insight, competitor review, customer behavior, market gaps, and opportunity discovery.",
  },
  {
    title: "Visibility Systems",
    category: "SEO + SMO",
    description:
      "Search visibility, social presence, local optimization, and digital authority systems.",
  },
  {
    title: "Brand Positioning",
    category: "Strategy",
    description:
      "Messaging, market position, offer clarity, brand voice, and customer-facing language.",
  },
  {
    title: "Campaign Strategy",
    category: "Advertising",
    description:
      "Campaign planning, promotional direction, ad messaging, launch calendars, and media strategy.",
  },
  {
    title: "Lead Generation",
    category: "Growth",
    description:
      "Landing pages, outreach flows, referral systems, lead capture, and follow-up strategy.",
  },
  {
    title: "Performance Reporting",
    category: "Analytics",
    description:
      "KPI tracking, campaign review, lead-source analysis, conversion insight, and improvement plans.",
  },
];

const capabilities = [
  { icon: FileSearch, title: "Marketing Research" },
  { icon: Compass, title: "Strategy & Positioning" },
  { icon: Search, title: "SEO & Search Visibility" },
  { icon: Globe2, title: "Social Media Optimization" },
  { icon: Megaphone, title: "Advertising Strategy" },
  { icon: Building2, title: "Brand Development" },
  { icon: Layers, title: "Website Strategy" },
  { icon: BarChart3, title: "Analytics & Reporting" },
];

const method = [
  "Study the market",
  "Clarify the message",
  "Build the visibility system",
  "Launch with discipline",
  "Measure and improve",
];

export default function App() {
  return (
    <main className="site">
      <header className="topbar">
        <a href="#top" className="brand">
          <img
            src={brownHillLogo}
            alt="BrownHill Marketing & Media logo"
            className="brand-logo"
          />

          <div>
            <p className="brand-name">BrownHill</p>
            <p className="brand-subtitle">Marketing & Media</p>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#work">What We Build</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#firm">The Firm</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-inner"
        >
          <p className="eyebrow">Marketing Intelligence • Media • Growth Strategy</p>

          <h1>
            Strategic marketing systems for organizations ready to be seen,
            trusted, and chosen.
          </h1>

          <p className="hero-copy">
            BrownHill Marketing & Media helps organizations strengthen visibility,
            sharpen messaging, understand their market, and build growth systems
            that turn attention into measurable opportunity.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button primary">
              Start a Strategy Conversation
              <ArrowRight size={20} />
            </a>

            <a href="#work" className="button secondary">
              Explore the Work
            </a>
          </div>
        </motion.div>
      </section>

      <section id="work" className="section work-section">
        <div className="section-heading">
          <p className="section-label">What We Build</p>
          <h2>Growth systems built around clarity, visibility, and conversion.</h2>
          <p>
            BrownHill does not begin with random marketing activity. We build
            strategic systems that help organizations understand the market,
            communicate with authority, and create stronger paths to growth.
          </p>
        </div>

        <div className="work-grid">
          {buildItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="work-card"
            >
              <p className="card-category">{item.category}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section dark-section">
        <div className="section-heading light">
          <p className="section-label gold">Capabilities</p>
          <h2>Research. Strategy. Media. Growth.</h2>
          <p>
            BrownHill supports the full marketing ecosystem — from intelligence
            and positioning to digital visibility, content, campaigns, lead
            generation, and performance improvement.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <div key={capability.title} className="capability-card">
                <Icon size={30} />
                <h3>{capability.title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <section id="firm" className="section split-section">
        <div>
          <p className="section-label">The Firm</p>
          <h2>BrownHill is built for organizations looking to grow with strategy.</h2>
        </div>

        <div className="firm-copy">
          <p>
            BrownHill Marketing & Media is a strategic marketing intelligence,
            media, advertising, and growth advisory firm. We help organizations
            move beyond scattered marketing activity and build clearer systems
            for visibility, credibility, and customer acquisition.
          </p>

          <p>
            We are especially valuable for leaders who know they need stronger
            marketing, but need strategic clarity before investing time and money
            into tactics.
          </p>
        </div>
      </section>

      <section className="section method-section">
        <div className="section-heading">
          <p className="section-label">The BrownHill Method</p>
          <h2>A disciplined path from insight to growth.</h2>
        </div>

        <div className="method-row">
          {method.map((step, index) => (
            <div key={step} className="method-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section founder-section">
        <div className="founder-card">
          <div>
            <p className="section-label gold">Founder, CEO & Marketing Strategist</p>
            <h2>Michael Hill</h2>
            <p>
              BrownHill was founded to help serious operators compete with
              stronger strategy, sharper messaging, and more intentional growth
              systems.
            </p>
          </div>

          <div className="founder-points">
            <p><Lightbulb size={22} /> Marketing Intelligence</p>
            <p><Target size={22} /> Brand Positioning</p>
            <p><Users size={22} /> Audience Development</p>
            <p><TrendingUp size={22} /> Revenue Growth</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div>
          <p className="section-label gold">Contact</p>
          <h2>Let’s build the marketing system your organization deserves.</h2>
          <p>
            Request a strategy conversation to review your goals, current
            visibility, marketing gaps, and best path toward growth.
          </p>
        </div>

        <div className="contact-card">
          <p><Phone size={20} /> 850-221-3089</p>
          <p><Mail size={20} /> info@emailaddress.com</p>
          <p><Globe2 size={20} /> www.websiteaddress.com</p>
          <p><MapPin size={20} /> Houston, TX</p>

          <a href="mailto:info@emailaddress.com" className="button primary full">
            Request Consultation
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} BrownHill Marketing & Media, LLC. Strategic
        marketing intelligence, media, advertising, and growth advisory.
      </footer>
    </main>
  );
}
