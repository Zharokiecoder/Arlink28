'use client';
import './about.css';
import Link from 'next/link';
import Image from 'next/image';
import { useAnimations } from '@/hooks/useAnimations';
import CtaAdventure from '@/components/CtaAdventure';
import NewsletterBar from '@/components/NewsletterBar';

export default function AboutPage() {
  useAnimations();
  return (
    <>
      {/* About Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-hero-tag hero-tag-entrance">
            <i className="fa-solid fa-circle" style={{fontSize:'8px',color:'var(--primary-red)',marginRight:'8px'}}></i>
            About ARLink28
          </span>
          <h1 className="hero-h1-entrance">
            Connecting People<br />
            <span className="highlight-red">connecting Destinations</span><br />
            connecting Dreams
          </h1>
          <p className="hero-p-entrance">A platform built to simplify travel resources within the continent, across Africa with clarity, precision, and long-term commitment.</p>
          <div className="about-hero-actions hero-btn-entrance">
            <Link href="#about" className="btn btn-primary">Discover Us</Link>
            <a href="#" className="btn btn-secondary"><i className="fa-solid fa-play"></i> Watch our story</a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section" id="about">
        {/* Who We Are */}
        <div className="about-who-we-are">
          <div className="about-text-content reveal-left">
            <div className="about-tag-row">
              <span className="about-tag">Who we are</span>
              <span className="about-tag-line"></span>
            </div>
            <h2>A premium <span className="highlight-red">African aviation brand</span> in development.</h2>
            <p>ARLink28 is being structured to deliver direct, efficient routes between key African cities, addressing one of the continent's most persistent challenges in air travel.</p>
            <p>The foundation is built on a strategic decision to establish our operational base in Ethiopia — at the crossroads of Africa, Europe, and the Middle East. This is not simply a location, but a deliberate investment into stability, efficiency, and long-term relevance.</p>
            <p>ARLink28 is also being developed with a clear commitment to sustainable aviation — aligning with global Net Zero ambitions through fuel-efficient aircraft, sustainable aviation fuels, and operational strategies that reduce environmental impact over time.</p>
            <div className="about-actions">
              <Link href="/contact" className="btn btn-about-primary">Get in touch</Link>
              <Link href="/services" className="btn btn-about-secondary">Our services</Link>
            </div>
          </div>
          <div className="about-visual reveal-right">
            <Image src="/images/gini2.png" alt="ARLink28 Plane at Terminal" className="about-main-img" width={600} height={420} style={{width:'100%',height:'auto'}} />
          </div>
        </div>

        {/* Values Grid */}
        <div className="about-values-grid">
          {[
            { icon: 'fa-bullseye', title: 'Mission', text: 'To connect travelers to the world through affordable flight exceptional service and seamless booking experiences' },
            { icon: 'fa-eye', title: 'Vision', text: 'To become Africa most trusted and preferred flight booking platform, connecting millions of journeys globally.' },
            { icon: 'fa-handshake', title: 'Promises', text: 'We are committed to offering competitive fares, secure booking and dedicated support every step of the way.' },
          ].map((v, i) => (
            <div key={i} className="value-card reveal">
              <div className="value-icon-wrapper"><i className={`fa-solid ${v.icon}`}></i></div>
              <div className="value-info"><h4>{v.title}</h4><p>{v.text}</p></div>
            </div>
          ))}
          <div className="value-card reveal">
            <div className="value-icon-wrapper"><i className="fa-solid fa-star"></i></div>
            <div className="value-info">
              <h4>Core Value</h4>
              <ul className="value-list">
                {['Integrity','Customer Focus','Reliability','Innovation','Excellence'].map(v => <li key={v}>{v}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Trust & Stats Ribbon */}
        <div className="about-trust-container reveal">
          <div className="trust-header">
            <h3>We Build on <span className="highlight-red">Trust</span>. Driven by Passion.</h3>
            <p>Our values and technology, helping other partners to build security. We wrap ourselves to build the best customer experience.</p>
          </div>
          <div className="about-stats-ribbon">
            {[
              { icon: 'fa-users', num: '50,000+', label: 'Happy Travelers' },
              { icon: 'fa-route', num: '150', label: 'Destinations' },
              { icon: 'fa-plane', num: '20+', label: 'Partner Airlines' },
              { icon: 'fa-headset', num: '24/7', label: 'Customer Support' },
            ].map((s, i) => (
              <div key={i} className="about-stat-item">
                <div className="stat-icon-box"><i className={`fa-solid ${s.icon}`}></i></div>
                <div className="stat-content">
                  <div className="stat-num" data-target={s.num}>{s.num}</div>
                  <div className="stat-lbl">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder */}
        <div className="about-founder-container">
          <div className="founder-card-visual reveal-left">
            <div className="founder-image-wrapper">
              <img src="/images/pro1 1.png" alt="Ajay E. Salako" className="founder-img" />
              <div className="founder-name-tag">
                <h4>Ajay E. Salako</h4>
                <p>Founder &amp; Tech VC</p>
              </div>
            </div>
          </div>
          <div className="founder-text-content reveal-right">
            <span className="founder-section-tag">Meet The Founder</span>
            <blockquote>"From early instinct, to field experience, to strategic vision — ARLink28 is the result of that progression."</blockquote>
            <p>ARLink28 was born from a deep, life-long fascination with aviation and travel. From early childhood, there was a natural curiosity about airplanes, flight routes, and how they connect different cultures.</p>
            <p>Growing up in Nigeria and moving abroad to the United Kingdom, that interest became a passion. Seeing how travel bridges distances, shapes careers, and connects people across continents made me want to create a platform that makes booking easier and more reliable.</p>
            <p>During my years in the UK, I gained valuable experience working in corporate travel, understanding the customer service and operations side of the business. This background gave me a clear perspective on what travelers really need.</p>
            <p>ARLink28 is designed to address those needs - providing safe, reliable, and affordable travel solutions for anyone flying within Africa or connecting globally.</p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners-section reveal">
        <h3 className="partners-title">Meet our partners</h3>
        <div className="partners-card">
          <div className="partners-marquee">
            {[
              { src: '/images/travelstart.png', label: 'Travelstart' },
              { src: '/images/ivisa.jpg', label: 'iVisa' },
              { src: '/images/viator.jpg', label: 'Viator' },
              { src: '/images/trip.png', label: 'Trip.com' },
              { src: '/images/sherpa.png', label: 'Sherpa' },
              { src: '/images/get your guide.png', label: 'GetYourGuide' },
              { src: '/images/travelstart.png', label: 'Travelstart' },
              { src: '/images/ivisa.jpg', label: 'iVisa' },
              { src: '/images/viator.jpg', label: 'Viator' },
              { src: '/images/trip.png', label: 'Trip.com' },
              { src: '/images/sherpa.png', label: 'Sherpa' },
              { src: '/images/get your guide.png', label: 'GetYourGuide' },
            ].map((p, i) => (
              <img key={i} src={p.src} alt={p.label} className="partner-logo" />
            ))}
          </div>
        </div>
      </section>

      <CtaAdventure />
      <NewsletterBar heading="Stay updated with our latest offers" />
    </>
  );
}