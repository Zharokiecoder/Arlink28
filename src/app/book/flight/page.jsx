'use client';
import '@/app/book/book.css';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const flightPartners = [
  {
    name: 'Travelstart',
    logo: '/images/travelstart.png',
    desc: 'Africa\'s leading online travel agency. Compare hundreds of airlines and book the cheapest flights across Africa and beyond.',
    tags: ['Domestic', 'International', 'Best Price Guarantee', 'Instant Confirmation'],
    getUrl: (p) => `https://travelstart.com.ng/`,
  },
  {
    name: 'Aerolink',
    logo: '/images/aerolink.jpg',
    desc: 'Pan-African aviation partner connecting major hubs across West, East, and Southern Africa with competitive fares.',
    tags: ['Africa Routes', 'Group Bookings', 'Charter Flights', 'Corporate Travel'],
    getUrl: () => 'https://aerolinkworld.com/',
  },
];

function FlightBookContent() {
  const params = useSearchParams();
  const from = params.get('from') || '';
  const to = params.get('to') || '';
  const date = params.get('date') || '';
  const seat = params.get('seat') || 'economy';

  return (
    <main className="book-page">
      <Link href="/" className="book-back-link">
        <i className="fa-solid fa-arrow-left"></i> Back to Search
      </Link>

      <div className="book-header">
        <span className="section-tag">Flight Booking</span>
        <h1>Choose Your <span className="highlight-red">Flight Partner</span></h1>
        <p>Select a trusted partner below to complete your booking. You'll be taken to their site with your search details pre-filled where possible.</p>
      </div>

      {(from || to || date) && (
        <div className="book-search-summary">
          {from && <div className="book-search-tag"><i className="fa-solid fa-plane-departure"></i> From: <span>{from}</span></div>}
          {to && <div className="book-search-tag"><i className="fa-solid fa-plane-arrival"></i> To: <span>{to}</span></div>}
          {date && <div className="book-search-tag"><i className="fa-solid fa-calendar"></i> Date: <span>{date}</span></div>}
          {seat && <div className="book-search-tag"><i className="fa-solid fa-chair"></i> Class: <span>{seat}</span></div>}
        </div>
      )}

      <div className="partners-grid">
        {flightPartners.map((p, i) => (
          <div key={i} className="partner-card">
            <img src={p.logo} alt={p.name} className="partner-card-logo" />
            <div className="partner-card-name">{p.name}</div>
            <p className="partner-card-desc">{p.desc}</p>
            <div className="partner-card-tags">
              {p.tags.map((t, ti) => <span key={ti} className="partner-tag">{t}</span>)}
            </div>
            <a href={p.getUrl({ from, to, date, seat })} target="_blank" rel="noopener noreferrer" className="partner-card-btn">
              Book with {p.name} <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default function FlightBookPage() {
  return <Suspense fallback={<div className="book-page" style={{color:'#fff'}}>Loading...</div>}><FlightBookContent /></Suspense>;
}