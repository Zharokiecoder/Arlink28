'use client';
import '@/app/book/book.css';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const hotelPartners = [
  {
    name: 'Trip.com',
    logo: '/images/trip.png',
    desc: 'Book hotels, apartments, and resorts worldwide at competitive rates. From budget stays to luxury escapes with free cancellation options.',
    tags: ['Worldwide', 'Free Cancellation', 'Best Price', 'Instant Booking'],
    getUrl: (p) => `https://www.trip.com/hotels/list?city=${p.to}&checkin=${p.date}`,
  },
];

function HotelBookContent() {
  const params = useSearchParams();
  const to = params.get('to') || '';
  const date = params.get('date') || '';

  return (
    <main className="book-page">
      <Link href="/" className="book-back-link">
        <i className="fa-solid fa-arrow-left"></i> Back to Search
      </Link>
      <div className="book-header">
        <span className="section-tag">Hotel Reservation</span>
        <h1>Choose Your <span className="highlight-red">Hotel Partner</span></h1>
        <p>Select a trusted partner to find and book your accommodation. You'll be redirected to their site to complete your reservation.</p>
      </div>
      {(to || date) && (
        <div className="book-search-summary">
          {to && <div className="book-search-tag"><i className="fa-solid fa-location-dot"></i> Destination: <span>{to}</span></div>}
          {date && <div className="book-search-tag"><i className="fa-solid fa-calendar"></i> Check-in: <span>{date}</span></div>}
        </div>
      )}
      <div className="partners-grid">
        {hotelPartners.map((p, i) => (
          <div key={i} className="partner-card">
            <img src={p.logo} alt={p.name} className="partner-card-logo" />
            <div className="partner-card-name">{p.name}</div>
            <p className="partner-card-desc">{p.desc}</p>
            <div className="partner-card-tags">
              {p.tags.map((t, ti) => <span key={ti} className="partner-tag">{t}</span>)}
            </div>
            <a href={p.getUrl({ to, date })} target="_blank" rel="noopener noreferrer" className="partner-card-btn">
              Book with {p.name} <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default function HotelBookPage() {
  return <Suspense fallback={<div className="book-page" style={{color:'#fff'}}>Loading...</div>}><HotelBookContent /></Suspense>;
}