'use client';
import '@/app/book/book.css';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const holidayPartners = [
  {
    name: 'Viator',
    logo: '/images/viator.jpg',
    desc: 'The world\'s leading experiences marketplace. Discover tours, activities, day trips and holiday packages across Africa and worldwide.',
    tags: ['Tours & Activities', 'Day Trips', 'Holiday Packages', 'Verified Reviews'],
    getUrl: (p) => `https://www.viator.com/search/${p.to || 'Africa'}`,
  },
  {
    name: 'Travelstart Holidays',
    logo: '/images/travelstart.png',
    desc: 'All-inclusive holiday packages combining flights, hotels and transfers into one seamless booking at great value.',
    tags: ['All-Inclusive', 'Flight + Hotel', 'Africa Packages', 'Group Discounts'],
    getUrl: (p) => `https://www.travelstart.com.ng/lp/holiday-packages?destination=${p.to}&departureDate=${p.date}`,
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
        <span className="section-tag">Holiday Packages</span>
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