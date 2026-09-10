import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  Calculator,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  Iron,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Shirt,
  Sparkles,
  WashingMachine,
  X,
} from "lucide-react";
import { useState } from "react";

import blanketsImage from "@/assets/blankets-stack.jpg";
import suitImage from "@/assets/dry-cleaning-suit.jpg";
import shirtsImage from "@/assets/folded-shirts.jpg";
import towelsImage from "@/assets/folded-towels.jpg";
import heroImage from "@/assets/namma-family-hero.jpg";
import sareesImage from "@/assets/sarees-stack.jpg";
import ironImage from "@/assets/steam-iron.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Namma Laundry | Laundry & Dry Cleaning" },
      {
        name: "description",
        content: "Premium wash, iron, steam ironing, and dry cleaning services from Namma Laundry.",
      },
      { property: "og:title", content: "Namma Laundry | Laundry & Dry Cleaning" },
      {
        property: "og:description",
        content: "Cleaner clothes and brighter days with premium laundry and dry cleaning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { title: "Wash & Fold", detail: "Clean · Fresh · Ready to Use", image: towelsImage, icon: Shirt },
  { title: "Wash & Iron", detail: "Cleaned · Ironed · Perfectly Folded", image: shirtsImage, icon: WashingMachine },
  { title: "Steam Ironing", detail: "Crisp · Smooth · Professional Finish", image: ironImage, icon: Iron },
  { title: "Dry Cleaning", detail: "Gentle Care · For Every Fabric", image: suitImage, icon: Shirt },
];

const offers = [
  { title: "Sarees", service: "Dry Cleaning", offer: "Flat 20% OFF", image: sareesImage },
  { title: "Shirts", service: "Wash & Iron", offer: "Flat 30% OFF", image: shirtsImage },
  { title: "Blankets", service: "Dry Cleaning", offer: "Flat 25% OFF", image: blanketsImage },
  { title: "Blazers", service: "Dry Cleaning", offer: "Flat 30% OFF", image: suitImage },
];

function Brand() {
  return (
    <a href="#top" className="brand" aria-label="Namma Laundry home">
      <span className="brand-mark" aria-hidden="true">
        <Shirt />
        <Sparkles className="brand-sparkle" />
      </span>
      <span>
        <strong>Namma Laundry</strong>
        <small>CLEANER CLOTHES&nbsp; HAPPIER DAYS</small>
      </span>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="top" className="home-page">
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a className="active" href="#top">Home</a>
            <a href="#services">Our Services</a>
            <a href="#offers">Offers</a>
            <a href="#estimate">Pricing</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>
          <Button asChild className="gold-button header-cta">
            <a href="#estimate"><CalendarDays />Schedule Pickup</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {[["Home", "#top"], ["Our Services", "#services"], ["Offers", "#offers"], ["Pricing", "#estimate"], ["About Us", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
        )}
      </header>

      <section className="hero" id="about">
        <img className="hero-photo" src={heroImage} width={1536} height={896} alt="A happy family with freshly laundered clothes" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="hero-copy">
            <h1>Fresh Clothes<br /><span>Brighter Days</span></h1>
            <p>Premium Laundry &amp; Dry Cleaning Services<br />for a Cleaner, Happier You.</p>
          </div>
          <p className="hand-note">More time<br />for what you love ♡</p>
        </div>
        <div className="trust-row">
          <div><Award /><p><strong>10+ Years</strong><span>In Your Service</span></p></div>
          <div><ShieldCheck /><p><strong>Professional</strong><span>Care &amp; Expertise</span></p></div>
          <div><Sparkles /><p><strong>Affordable</strong><span>Premium Quality</span></p></div>
          <div><Heart /><p><strong>People's Favourite</strong><span>Trusted by Thousands</span></p></div>
        </div>
      </section>

      <section className="services-grid" id="services" aria-label="Our services">
        {services.map(({ title, detail, image, icon: Icon }) => (
          <article className="service-card" key={title}>
            <span className="service-icon"><Icon /></span>
            <div className="service-copy"><h2>{title}</h2><p>{detail}</p></div>
            <img src={image} alt="" width={768} height={576} loading="lazy" />
          </article>
        ))}
      </section>

      <section className="offers" id="offers">
        <div className="offers-title">
          <span className="gift" aria-hidden="true">🎁</span>
          <div><h2>Exciting<br className="desktop-break" /> Offers for You!</h2><p>Great Care. Greater Savings.</p></div>
          <Button asChild className="gold-button offers-button"><a href="#offers">View All Offers <ChevronRight /></a></Button>
        </div>
        <Button variant="secondary" size="icon" className="offer-arrow left" aria-label="Previous offers"><ChevronLeft /></Button>
        <div className="offer-list">
          {offers.map((offer) => (
            <article className="offer-card" key={offer.title}>
              <img src={offer.image} alt="" width={768} height={576} loading="lazy" />
              <div><h3>{offer.title}</h3><p>{offer.service}</p><strong>{offer.offer}</strong></div>
            </article>
          ))}
        </div>
        <Button variant="secondary" size="icon" className="offer-arrow right" aria-label="Next offers"><ChevronRight /></Button>
        <div className="dots" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      </section>

      <section className="action-row" id="contact">
        <Button asChild className="gold-button"><a href="tel:"><Phone />Call Us</a></Button>
        <Button asChild className="gold-button"><a href="https://wa.me/" target="_blank" rel="noreferrer"><span className="whatsapp-icon">◔</span>WhatsApp Us</a></Button>
        <Button asChild className="gold-button"><a href="https://www.google.com/maps/search/Namma+Laundry" target="_blank" rel="noreferrer"><MapPin />Get Directions</a></Button>
        <div className="estimate" id="estimate">
          <Calculator />
          <span className="estimate-rule" />
          <div><small>FAST&nbsp; | &nbsp;EASY&nbsp; | &nbsp;CONVENIENT</small><h2>Get an Instant Estimate</h2><p>Know the cost before you book!</p></div>
          <Button asChild className="estimate-button"><a href="mailto:?subject=Namma Laundry Estimate">Get Estimate <ChevronRight /></a></Button>
        </div>
      </section>

      <section className="testimonial-peek" aria-label="Customer testimonials">
        <ChevronDown />
        <div><span /><h2>What Our Customers Say</h2><span /></div>
      </section>
    </main>
  );
}