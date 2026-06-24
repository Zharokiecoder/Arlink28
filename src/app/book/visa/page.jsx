'use client';
import '@/app/book/book.css';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const visaPartners = [
  {
    name: 'iVisa',
    logo: '/images/ivisa.jpg',
    desc: 'The easiest way to get your visa online. Apply for tourist, business and e-visas for 180+ countries in minutes with expert support.',
    tags: ['E-Visa', 'Tourist Visa', 'Business Visa', '180+ Countries', 'Fast Processing'],
    getUrl: (p) => `https://www.ivisa.com/apply?nationality=NG&destination=${p.to || ''}`,
  },
  {
    name: 'Sherpa',
    logo: '/images/sherpa.png',
    desc: 'Real-time travel requirements and visa guidance for every destination. Know exactly what you need before you travel.',
    tags: ['Visa Requirements', 'Entry Rules', 'Health Docs', 'Real-time Updates'],
    getUrl: (p) => `https://apply.joinsherpa.com/travel-requirements?affiliateId=arlink28&from=NG&to=${p.to || ''}`,
  },
];

function VisaBookContent() {
  const params = useSearchParams();
  const to = params.get('to') || '';

  return (
    <main className="book-page">
      <Link href="/" className="book-back-link">
        <i className="fa-solid fa-arrow-left"></i> Back to Search
      </Link>
      <div className="book-header">
        <span className="section-tag">Visa Applications</span>
        <h1>Choose Your <span className="highlight-red">Visa Partner</span></h1>
        <p>Our trusted visa partners will guide you through the application process and help you get approved faster.</p>
      </div>
      {to && (
        <div className="book-search-summary">
          <div className="book-search-tag"><i className="fa-solid fa-passport"></i> Destination: <span>{to}</span></div>
        </div>
      )}
      <div className="partners-grid">
        {visaPartners.map((p, i) => (
          <div key={i} className="partner-card">
            <img src={p.logo} alt={p.name} className="partner-card-logo" />
            <div className="partner-card-name">{p.name}</div>
            <p className="partner-card-desc">{p.desc}</p>
            <div className="partner-card-tags">
              {p.tags.map((t, ti) => <span key={ti} className="partner-tag">{t}</span>)}
            </div>
            <a href={p.getUrl({ to })} target="_blank" rel="noopener noreferrer" className="partner-card-btn">
              Apply with {p.name} <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default function VisaBookPage() {
  return <Suspense fallback={<div className="book-page" style={{color:'#fff'}}>Loading...</div>}><VisaBookContent /></Suspense>;
}