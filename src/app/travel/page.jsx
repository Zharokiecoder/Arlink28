'use client';
import './travel.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useAnimations } from '@/hooks/useAnimations';
import CtaAdventure from '@/components/CtaAdventure';
import NewsletterBar from '@/components/NewsletterBar';

const allVendors = [
  { category: 'flights', logo: 'AI', badge: 'badge-flights', badgeLabel: 'Flights', name: 'AeroLink Aviation', subtitle: 'Premium Domestic Routes', desc: 'Connecting major Nigerian cities with frequent, on-time departures. Business and economy options available on all routes.' },
  { category: 'visas', logo: 'VX', badge: 'badge-visas', badgeLabel: 'Visas', name: 'VizaXpress', subtitle: 'Fast Visa Processing', desc: 'Expert visa application support for Schengen, UK, US, and African nations. 97% success rate with dedicated processing teams.' },
  { category: 'experiences', logo: 'SE', badge: 'badge-experiences', badgeLabel: 'Experiences', name: 'Safari Elite', subtitle: 'African Experiences', desc: 'Curated wildlife safaris and cultural immersion tours across East and Southern Africa. Tailored for solo and group travelers.' },
  { category: 'flights', logo: 'TW', badge: 'badge-flights', badgeLabel: 'Flights', name: 'TransWorld Air', subtitle: 'International Routes', desc: 'Affordable long-haul connections from Lagos and Abuja to London, Dubai, Paris, and New York with top-tier airlines.' },
  { category: 'visas', logo: 'GL', badge: 'badge-visas', badgeLabel: 'Visas', name: 'GlobalPermit', subtitle: 'Work & Study Visas', desc: 'Specialized processing for student and work visas across Canada, UK, Australia, and Europe. Consultation included.' },
  { category: 'experiences', logo: 'AC', badge: 'badge-experiences', badgeLabel: 'Experiences', name: 'Africa Circuits', subtitle: 'Heritage Tours', desc: 'Discover ancient trade routes, royal heritage, and cultural festivals across West, East, and North Africa.' },
];

export default function TravelPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchVal, setSearchVal] = useState('');
  useAnimations();

  const filtered = allVendors.filter(v => {
    const matchCat = activeFilter === 'all' || v.category === activeFilter;
    const matchSearch = v.name.toLowerCase().includes(searchVal.toLowerCase()) || v.desc.toLowerCase().includes(searchVal.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Explore Hero */}
      <section className="explore-hero">
        <div className="explore-hero-container">
          <div className="explore-hero-left">
            <span className="explore-hero-tag hero-tag-entrance">
              <i className="fa-solid fa-circle" style={{fontSize:'8px',marginRight:'8px'}}></i>
              Explore With ARLinks
            </span>
            <h1 className="hero-h1-entrance">DISCOVER YOUR<br /><span className="highlight-red">NEXT JOURNEY.</span></h1>
            <p className="hero-p-entrance">Explore flight options, travel partners, visa services, and curated experiences across Africa and the world.</p>
            <div className="hero-search-wrapper hero-widget-entrance">
              <div className="search-input-field">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input
                  type="text"
                  id="hero-search-input"
                  placeholder="Search destinations, services..."
                  value={searchVal}
                  onChange={e => setSearchVal(e.target.value)}
                />
              </div>
              <button className="search-btn btn" onClick={() => {}}>
                <i className="fa-solid fa-paper-plane"></i> Search
              </button>
            </div>
          </div>
          <div className="explore-hero-right hero-visual-entrance">
            {/* Mock Boarding Pass */}
            <div className="mock-boarding-pass">
              <div className="pass-header">
                <Image src="/images/logo.png" alt="ARLinks" className="pass-logo" width={80} height={18} style={{height:'18px',width:'auto'}} />
                <span className="pass-class">BUSINESS</span>
              </div>
              <div className="pass-body">
                <div className="pass-airport">
                  <span className="airport-code">LOS</span>
                  <span className="airport-name">Lagos, Nigeria</span>
                </div>
                <div className="pass-flight-icon">
                  <div className="flight-line"></div>
                  <i className="fa-solid fa-plane"></i>
                </div>
                <div className="pass-airport destination">
                  <span className="airport-code">LHR</span>
                  <span className="airport-name">London, UK</span>
                </div>
              </div>
              <div className="pass-details">
                <div className="pass-col"><span className="detail-label">Date</span><span className="detail-val">15 AUG 2026</span></div>
                <div className="pass-col"><span className="detail-label">Flight</span><span className="detail-val">AL 2800</span></div>
                <div className="pass-col"><span className="detail-label">Gate</span><span className="detail-val">D14</span></div>
              </div>
              <div className="pass-divider">
                <div className="pass-circle left"></div>
                <div className="pass-dash-line"></div>
                <div className="pass-circle right"></div>
              </div>
              <div className="pass-footer">
                <div className="barcode-container">
                  {['w-2','w-1','w-3','w-1','w-4','w-2','w-1','w-3','w-2','w-4','w-1','w-2'].map((w,i) => <div key={i} className={`barcode-line ${w}`}></div>)}
                </div>
                <span className="pass-status">
                  <span className="status-indicator"></span>
                  CONFIRMED
                </span>
              </div>
            </div>
            <div className="floating-badge-card">
              <div className="badge-icon-circle"><i className="fa-solid fa-check"></i></div>
              <div className="badge-text-content">
                <h5>Booking Confirmed</h5>
                <p>Seat 12A • Business Class</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Directory */}
      <section className="explore-directory-section">
        <div className="directory-header reveal">
          <span className="section-tag">Travel Partners</span>
          <h2>Explore Our Travel Partners</h2>
          <p>Browse our curated directory of trusted flight operators, visa specialists, and travel experience providers.</p>
        </div>

        <div className="filter-bar">
          {[
            { key: 'all', label: 'All Partners' },
            { key: 'flights', label: 'Flights' },
            { key: 'visas', label: 'Visa Services' },
            { key: 'experiences', label: 'Experiences' },
          ].map(f => (
            <button key={f.key} className={`filter-btn${activeFilter === f.key ? ' active' : ''}`} onClick={() => setActiveFilter(f.key)}>
              {f.label}
            </button>
          ))}
        </div>

        <div className="vendor-grid">
          {filtered.map((v, i) => (
            <div key={i} className="vendor-card glass-panel reveal">
              <div className="vendor-card-header">
                <div className="vendor-logo-placeholder">{v.logo}</div>
                <span className={`vendor-badge ${v.badge}`}>{v.badgeLabel}</span>
              </div>
              <h3>{v.name}</h3>
              <h4>{v.subtitle}</h4>
              <p>{v.desc}</p>
              <Link href="/contact" className="btn btn-primary vendor-cta">Contact Us <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{gridColumn:'1/-1',textAlign:'center',padding:'60px 0',color:'var(--text-muted)'}}>
              <i className="fa-solid fa-magnifying-glass" style={{fontSize:'48px',marginBottom:'20px',display:'block',opacity:0.3}}></i>
              No partners found for your search.
            </div>
          )}
        </div>
      </section>

      <CtaAdventure heading={<>Ready to Explore<br />the World?</>} subtext="Browse our travel partners, compare flight options, and plan your dream journey with ARLink28." btnLabel="Start Exploring" btnHref="/contact" />
      <NewsletterBar />
    </>
  );
}
