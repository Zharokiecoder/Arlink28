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
            <span className="highlight-red">Connecting Destinations</span><br />
            Connecting Dreams
          </h1>
          <p className="hero-p-entrance">A Pan-African travel ecosystem making travel across the continent more accessible, seamless, and efficient — built on connectivity, collaboration, and long-term commitment.</p>
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
            <h2>A <span className="highlight-red">Pan-African travel ecosystem</span> in development.</h2>
            <p>ARLink28 is building a comprehensive travel platform designed to simplify every stage of the travel journey — bringing together flight reservations, hotel bookings, holiday packages, visa support, accommodation, transportation, and future aviation operations under one ecosystem.</p>
            <p>Africa is home to more than 1.4 billion people and some of the world's fastest-growing economies, yet travel between many African countries remains unnecessarily difficult. ARLink28 was established to address this challenge by connecting Africa more efficiently and supporting greater mobility for business, tourism, education, investment, and cultural exchange.</p>
            <p>Through strategic partnerships with trusted travel agencies, visa specialists, hotels, destination providers, and technology partners across Africa, we aim to deliver an integrated travel experience from departure to arrival — and, as our ecosystem expands, artificial intelligence, data analytics, and cloud-based systems will power personalised recommendations and faster support.</p>
            <p>Our long-term vision extends into aviation. ARLink28 aspires to establish a regional airline based in Addis Ababa, Ethiopia — one of Africa's leading aviation gateways — to strengthen connectivity across East, West, Central, North, and Southern Africa.</p>
            <p>Whether an entrepreneur is attending a business conference in Kigali, a family is planning a holiday in Zanzibar, or a student is travelling to Accra for academic opportunities, ARLink28 provides a single platform where travel arrangements can be managed confidently and efficiently — from flights and hotels to airport transfers, travel insurance, and curated tour experiences.</p>
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
            { icon: 'fa-bullseye', title: 'Mission', text: 'To make travel within Africa more accessible, seamless, and efficient — connecting people, destinations, and opportunities through technology, partnerships, and exceptional service.' },
            { icon: 'fa-eye', title: 'Vision', text: 'To become one of Africa\'s leading travel brands, building an integrated Pan-African travel ecosystem that strengthens regional mobility and connectivity.' },
            { icon: 'fa-handshake', title: 'Promises', text: 'We are committed to sustainable, responsible growth — supporting local employment, community engagement, and environmentally conscious travel practices.' },
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
                {['Integrity','Connectivity','Collaboration','Innovation','Sustainability'].map(v => <li key={v}>{v}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Trust & Stats Ribbon */}
        <div className="about-trust-container reveal">
          <div className="trust-header">
            <h3>Built on <span className="highlight-red">Trust</span>. Driven by Connectivity.</h3>
            <p>Strong partnerships with airlines, airports, hotels, governments, and technology companies enable us to expand our services while creating long-term value for customers and partners alike.</p>
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

        {/* Tourism, Sustainability, Partnerships & Aviation Strategy */}
        <div className="about-values-grid">
          {[
            { icon: 'fa-mountain-sun', title: 'Tourism', text: "We believe tourism is a catalyst for economic development, job creation, cultural exchange, and investment — collaborating with tourism boards, hospitality providers, and destination management organisations to showcase Africa's richness and diversity." },
            { icon: 'fa-leaf', title: 'Sustainability', text: 'We are committed to promoting environmentally conscious travel practices, supporting local employment, engaging with communities, and exploring sustainable aviation practices that reduce the environmental impact of travel.' },
            { icon: 'fa-handshake-angle', title: 'Partnerships', text: 'We build relationships with airlines, airports, hotels, governments, financial institutions, educational institutions, technology companies, and regional stakeholders who share our commitment to strengthening Africa\'s connectivity.' },
            { icon: 'fa-chart-line', title: 'Aviation Strategy', text: 'Rather than pursuing rapid expansion, we are developing gradually through regional operations — building governance, regulatory compliance, financial discipline, and operational excellence before entering full airline operations.' },
          ].map((v, i) => (
            <div key={i} className="value-card reveal">
              <div className="value-icon-wrapper"><i className={`fa-solid ${v.icon}`}></i></div>
              <div className="value-info"><h4>{v.title}</h4><p>{v.text}</p></div>
            </div>
          ))}
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

      {/* Closing Statement */}
      <section className="about-section" style={{paddingTop: 0}}>
        <div className="trust-header reveal" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
          <h3>Travel has the power to <span className="highlight-red">unite people</span>.</h3>
          <p>At ARLink28, we believe travel unlocks economic opportunities, fosters innovation, and strengthens relationships across borders. Our commitment is to make Africa more connected, more accessible, and more discoverable through an ecosystem built on professionalism, integrity, innovation, and service excellence.</p>
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