'use client';
import '@/app/book/book.css';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const holidayPartners = [
  {
    name: 'GetYourGuide',
    logo: '/images/get your guide.png',
    desc: "The world's largest tours and activities marketplace. Book skip-the-line tickets, day trips, and curated experiences across Africa and beyond.",
    tags: ['Tours & Activities', 'Skip-the-line', 'Day Trips', 'Instant Confirmation'],
    getUrl: (p) => `https://www.getyourguide.com/s/?q=${p.to || 'Africa'}`,
  },
  {
    name: 'Trip.com',
    logo: '/images/trip.png',
    desc: 'All-inclusive holiday packages combining flights, hotels and transfers. Great value bundles for solo travellers, couples and families.',
    tags: ['Flight + Hotel', 'All-Inclusive', 'Group Packages', 'Flexible Dates'],
    getUrl: (p) => `https://www.trip.com/holidays/?destination=${p.to}&date=${p.date}`,
  },
];

function HolidayBookContent() {
  const params = useSearchParams();
  const to = params.get('to') || '';
  const date = params.get('date') || '';

  return (
    <main className="book-page">
      <Link href="/" className="book-back-link">
        <i className="fa-solid fa-arrow-left"></i> Back to Search
      </Link>
      <div className="book-header">
        <span className="section-tag">Tours & Holiday Packages</span>
        <h1>Choose Your <span className="highlight-red">Holiday Partner</span></h1>
        <p>Explore curated holiday packages and experiences with our trusted partners. Pick one to continue your booking.</p>
      </div>
      {(to || date) && (
        <div className="book-search-summary">
          {to && <div className="book-search-tag"><i className="fa-solid fa-umbrella-beach"></i> Destination: <span>{to}</span></div>}
          {date && <div className="book-search-tag"><i className="fa-solid fa-calendar"></i> Date: <span>{date}</span></div>}
        </div>
      )}
      <div className="partners-grid">
        {holidayPartners.map((p, i) => (
          <div key={i} className="partner-card">
            <img src={p.logo} alt={p.name} className="partner-card-logo" />
            <div className="partner-card-name">{p.name}</div>
            <p className="partner-card-desc">{p.desc}</p>
            <div className="partner-card-tags">
              {p.tags.map((t, ti) => <span key={ti} className="partner-tag">{t}</span>)}
            </div>
            <a href={p.getUrl({ to, date })} target="_blank" rel="noopener noreferrer" className="partner-card-btn">
              Explore with {p.name} <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default function HolidayBookPage() {
  return <Suspense fallback={<div className="book-page" style={{color:'#fff'}}>Loading...</div>}><HolidayBookContent /></Suspense>;
}