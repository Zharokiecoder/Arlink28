'use client';
import './destinations.css';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAnimations } from '@/hooks/useAnimations';
import CtaAdventure from '@/components/CtaAdventure';
import NewsletterBar from '@/components/NewsletterBar';

/* ---- Data ---- */
const destinations = [
  // Domestic
  { img: '0beb3e04fca00b01c6d5ee27858785f2.jpg', city: 'Abuja',         country: 'Nigeria',       code: 'ABV', from: 'LOS', type: 'domestic',      badge: 'badge-dom', badgeLabel: 'Domestic',      price: '$89',  tag: 'Capital City' },
  { img: '11a45865c24a53fcd5b730276d1ea975.jpg', city: 'Lagos',         country: 'Nigeria',       code: 'LOS', from: 'ABV', type: 'domestic',      badge: 'badge-dom', badgeLabel: 'Domestic',      price: '$79',  tag: 'Commercial Hub' },
  { img: 'IMG_5235.png',                         city: 'Port Harcourt', country: 'Nigeria',       code: 'PHC', from: 'LOS', type: 'domestic',      badge: 'badge-dom', badgeLabel: 'Domestic',      price: '$95',  tag: 'Oil City' },
  { img: 'gini2.png',                            city: 'Kano',          country: 'Nigeria',       code: 'KAN', from: 'LOS', type: 'domestic',      badge: 'badge-dom', badgeLabel: 'Domestic',      price: '$85',  tag: 'Ancient City' },
  { img: '0beb3e04fca00b01c6d5ee27858785f2.jpg', city: 'Enugu',         country: 'Nigeria',       code: 'ENU', from: 'LOS', type: 'domestic',      badge: 'badge-dom', badgeLabel: 'Domestic',      price: '$99',  tag: 'Coal City' },
  // Regional
  { img: 'd4f2e3fa759091f84b4c8f98df2dc9d0.jpg', city: 'Nairobi',       country: 'Kenya',         code: 'NBO', from: 'LOS', type: 'regional',      badge: 'badge-reg', badgeLabel: 'Regional',      price: '$249', tag: 'East Africa Hub' },
  { img: '026badc72f15f795f5246011b20dedb3.jpg', city: 'Cape Town',     country: 'South Africa',  code: 'CPT', from: 'LOS', type: 'regional',      badge: 'badge-reg', badgeLabel: 'Regional',      price: '$329', tag: 'Mother City' },
  { img: 'IMG_5236.png',                         city: 'Kigali',        country: 'Rwanda',        code: 'KGL', from: 'LOS', type: 'regional',      badge: 'badge-reg', badgeLabel: 'Regional',      price: '$219', tag: 'City of Hills' },
  { img: 'gini2.png',                            city: 'Kampala',       country: 'Uganda',        code: 'EBB', from: 'LOS', type: 'regional',      badge: 'badge-reg', badgeLabel: 'Regional',      price: '$235', tag: 'Pearl of Africa' },
  { img: 'e7be194d434ef6e446ad64626b9a0276.jpg', city: 'Dakar',         country: 'Senegal',       code: 'DKR', from: 'LOS', type: 'regional',      badge: 'badge-reg', badgeLabel: 'Regional',      price: '$199', tag: 'Gateway to West Africa' },
  // International
  { img: 'IMG_5236.png',                         city: 'London',        country: 'United Kingdom',code: 'LHR', from: 'LOS', type: 'international', badge: 'badge-int', badgeLabel: 'International', price: '$499', tag: 'Global Capital' },
  { img: '7839e8b4d562c15a8f62d6b174cba984.jpg', city: 'Paris',         country: 'France',        code: 'CDG', from: 'LOS', type: 'international', badge: 'badge-int', badgeLabel: 'International', price: '$519', tag: 'City of Light' },
  { img: 'e7be194d434ef6e446ad64626b9a0276.jpg', city: 'New York',      country: 'United States', code: 'JFK', from: 'LOS', type: 'international', badge: 'badge-int', badgeLabel: 'International', price: '$679', tag: 'The Big Apple' },
  { img: '488d546d69613897fbd91a3ec61d5c72.jpg', city: 'Dubai',         country: 'UAE',           code: 'DXB', from: 'LOS', type: 'international', badge: 'badge-int', badgeLabel: 'International', price: '$399', tag: 'City of Gold' },
];

const holidays = [
  {
    img: 'd4f2e3fa759091f84b4c8f98df2dc9d0.jpg',
    tag: 'Beach & Safari',
    duration: '7 Days / 6 Nights',
    title: 'Mombasa Beach & Safari',
    desc: "White sands, turquoise waters, and thrilling wildlife. Explore Kenya's coast and Tsavo National Park on one unforgettable package.",
    includes: [
      { icon: 'fa-plane',      label: 'Flights' },
      { icon: 'fa-hotel',      label: 'Hotel' },
      { icon: 'fa-car',        label: 'Transfers' },
      { icon: 'fa-binoculars', label: 'Safari' },
    ],
    price: '$849',
    per: 'per person',
  },
  {
    img: '026badc72f15f795f5246011b20dedb3.jpg',
    tag: 'Culture & Relax',
    duration: '5 Days / 4 Nights',
    title: 'Banjul & Smiling Coast',
    desc: "Discover the Gambia's legendary hospitality, vibrant markets, river cruises, and pristine beaches on this west African escape.",
    includes: [
      { icon: 'fa-plane',    label: 'Flights' },
      { icon: 'fa-hotel',    label: 'Hotel' },
      { icon: 'fa-utensils', label: 'Meals' },
      { icon: 'fa-ship',     label: 'River Cruise' },
    ],
    price: '$629',
    per: 'per person',
  },
  {
    img: '488d546d69613897fbd91a3ec61d5c72.jpg',
    tag: 'Luxury',
    duration: '10 Days / 9 Nights',
    title: 'Dubai Luxury Experience',
    desc: 'Sky-high towers, golden deserts, world-class dining, and luxury shopping. The ultimate Middle East getaway for discerning travelers.',
    includes: [
      { icon: 'fa-plane',  label: 'Flights' },
      { icon: 'fa-hotel',  label: '5-Star Hotel' },
      { icon: 'fa-car',    label: 'Transfers' },
      { icon: 'fa-star',   label: 'City Tour' },
    ],
    price: '$1,299',
    per: 'per person',
  },
];

const routes = {
  domestic: [
    { from: 'Lagos', fromCode: 'LOS', to: 'Abuja',        toCode: 'ABV', freq: 'Daily',    duration: '1h 10m', price: '$89' },
    { from: 'Lagos', fromCode: 'LOS', to: 'Port Harcourt',toCode: 'PHC', freq: 'Daily',    duration: '55m',    price: '$95' },
    { from: 'Lagos', fromCode: 'LOS', to: 'Kano',         toCode: 'KAN', freq: '5x/week',  duration: '1h 35m', price: '$85' },
    { from: 'Lagos', fromCode: 'LOS', to: 'Enugu',        toCode: 'ENU', freq: '4x/week',  duration: '1h 05m', price: '$99' },
    { from: 'Abuja', fromCode: 'ABV', to: 'Port Harcourt',toCode: 'PHC', freq: '3x/week',  duration: '1h 15m', price: '$109' },
  ],
  regional: [
    { from: 'Lagos', fromCode: 'LOS', to: 'Nairobi',   toCode: 'NBO', freq: '4x/week', duration: '4h 30m', price: '$249' },
    { from: 'Lagos', fromCode: 'LOS', to: 'Cape Town', toCode: 'CPT', freq: '3x/week', duration: '6h 00m', price: '$329' },
    { from: 'Lagos', fromCode: 'LOS', to: 'Kigali',    toCode: 'KGL', freq: '3x/week', duration: '3h 45m', price: '$219' },
    { from: 'Lagos', fromCode: 'LOS', to: 'Kampala',   toCode: 'EBB', freq: '3x/week', duration: '4h 10m', price: '$235' },
    { from: 'Lagos', fromCode: 'LOS', to: 'Dakar',     toCode: 'DKR', freq: '4x/week', duration: '3h 20m', price: '$199' },
  ],
  international: [
    { from: 'Lagos', fromCode: 'LOS', to: 'London',   toCode: 'LHR', freq: 'Daily',   duration: '6h 45m',  price: '$499' },
    { from: 'Lagos', fromCode: 'LOS', to: 'Paris',    toCode: 'CDG', freq: '5x/week', duration: '6h 30m',  price: '$519' },
    { from: 'Lagos', fromCode: 'LOS', to: 'New York', toCode: 'JFK', freq: '4x/week', duration: '11h 20m', price: '$679' },
    { from: 'Lagos', fromCode: 'LOS', to: 'Dubai',    toCode: 'DXB', freq: 'Daily',   duration: '7h 15m',  price: '$399' },
    { from: 'Abuja', fromCode: 'ABV', to: 'London',   toCode: 'LHR', freq: '4x/week', duration: '6h 50m',  price: '$519' },
  ],
};

const FILTERS = [
  { key: 'all',           label: 'All Destinations' },
  { key: 'domestic',      label: 'Domestic' },
  { key: 'regional',      label: 'Regional (Africa)' },
  { key: 'international', label: 'International' },
];

const ROUTE_TABS = [
  { key: 'domestic',      label: 'Domestic Routes' },
  { key: 'regional',      label: 'Regional Routes' },
  { key: 'international', label: 'International Routes' },
];

export default function DestinationsPage() {
  const [activeFilter,   setActiveFilter]   = useState('all');
  const [activeRouteTab, setActiveRouteTab] = useState('domestic');
  const router = useRouter();
  useAnimations();

  const filtered = destinations.filter(d =>
    activeFilter === 'all' || d.type === activeFilter
  );

  function handleBook(dest) {
    const params = new URLSearchParams({ from: dest.from, to: dest.code, seat: 'economy' }).toString();
    router.push(`/book/flight?${params}`);
  }

  function handleRouteBook(route) {
    const params = new URLSearchParams({ from: route.fromCode, to: route.toCode, seat: 'economy' }).toString();
    router.push(`/book/flight?${params}`);
  }

  return (
    <>
      {/* ---- Hero ---- */}
      <section className="dest-hero">
        <div className="dest-hero-inner">
          <span className="section-tag hero-tag-entrance">
            <i className="fa-solid fa-location-dot"></i>
            Flight Destinations
          </span>
          <h1 className="hero-h1-entrance">
            EXPLORE THE<br />
            <span className="highlight-red">WORLD WITH US.</span>
          </h1>
          <p className="hero-p-entrance">
            From domestic hops to transcontinental journeys — find the right flight to over 14 destinations across Nigeria, Africa, and beyond.
          </p>
          <div className="dest-hero-stats hero-widget-entrance">
            <div className="dest-hero-stat">
              <strong>14+</strong>
              <span>Destinations</span>
            </div>
            <div className="dest-hero-stat">
              <strong>50+</strong>
              <span>Routes</span>
            </div>
            <div className="dest-hero-stat">
              <strong>20+</strong>
              <span>Airline Partners</span>
            </div>
          </div>
        </div>
        <div className="dest-hero-globe" aria-hidden="true">
          <i className="fa-solid fa-globe"></i>
        </div>
      </section>

      {/* ---- Filter Bar ---- */}
      <div className="dest-filter-section">
        <div className="dest-filter-bar reveal">
          <span>Filter:</span>
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`dest-filter-btn${activeFilter === f.key ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ---- Destinations Grid ---- */}
      <section className="dest-section">
        <div className="dest-section-header reveal">
          <div className="dest-section-header-left">
            <span className="section-tag">Flight Destinations</span>
            <h2>Where Do You Want to Fly?</h2>
          </div>
          <p>Browse all available routes and find the best fares for your next trip.</p>
        </div>

        <div className="dest-cards-grid">
          {filtered.map((d, i) => (
            <div key={i} className="dest-card reveal">
              <div className="dest-card-img-wrap">
                <img src={`/images/${d.img}`} alt={d.city} />
                <span className={`dest-card-badge ${d.badge}`}>{d.badgeLabel}</span>
              </div>
              <div className="dest-card-body">
                <div className="dest-card-route">
                  <i className="fa-solid fa-plane"></i>
                  <span>{d.from} → {d.code}</span>
                </div>
                <h4>{d.city}</h4>
                <div className="dest-card-country">
                  <i className="fa-solid fa-location-dot" style={{color:'var(--primary-red)',marginRight:'5px',fontSize:'11px'}}></i>
                  {d.country} · {d.tag}
                </div>
                <div className="dest-card-footer">
                  <div className="dest-card-price">
                    {d.price}
                    <span>from / one-way</span>
                  </div>
                  <button className="dest-card-btn" onClick={() => handleBook(d)}>
                    Book <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="dest-no-results">
              <i className="fa-solid fa-magnifying-glass"></i>
              No destinations found for this filter.
            </div>
          )}
        </div>
      </section>

      {/* ---- Holiday Packages ---- */}
      <section className="holidays-section">
        <div className="dest-section-header reveal" style={{marginBottom:'45px'}}>
          <div className="dest-section-header-left">
            <span className="section-tag">Holiday Packages</span>
            <h2>Popular Holiday Packages</h2>
          </div>
          <p>All-inclusive curated packages combining flights, hotels, and unforgettable experiences.</p>
        </div>

        <div className="holidays-grid">
          {holidays.map((h, i) => (
            <div key={i} className="holiday-card reveal">
              <div className="holiday-img-wrap">
                <img src={`/images/${h.img}`} alt={h.title} />
                <div className="holiday-img-overlay"></div>
                <span className="holiday-tag">{h.tag}</span>
                <span className="holiday-duration">
                  <i className="fa-solid fa-clock"></i> {h.duration}
                </span>
              </div>
              <div className="holiday-body">
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
                <div className="holiday-includes">
                  {h.includes.map((pill, pi) => (
                    <span key={pi} className="holiday-pill">
                      <i className={`fa-solid ${pill.icon}`}></i> {pill.label}
                    </span>
                  ))}
                </div>
                <div className="holiday-footer">
                  <div className="holiday-price">
                    <span className="price-label">From</span>
                    <span className="price-val">{h.price}</span>
                    <span className="price-per">{h.per}</span>
                  </div>
                  <Link href="/book/holiday" className="dest-card-btn">
                    View Package <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Routes by Category ---- */}
      <section className="routes-section">
        <div className="dest-section-header reveal" style={{marginBottom:'35px'}}>
          <div className="dest-section-header-left">
            <span className="section-tag">All Routes</span>
            <h2>Popular Routes</h2>
          </div>
          <p>Browse scheduled routes by category. Prices shown are lowest available fares.</p>
        </div>

        <div className="routes-tabs reveal">
          {ROUTE_TABS.map(t => (
            <button
              key={t.key}
              className={`route-tab-btn${activeRouteTab === t.key ? ' active' : ''}`}
              onClick={() => setActiveRouteTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {ROUTE_TABS.map(t => (
          <div key={t.key} className={`routes-table${activeRouteTab === t.key ? ' visible' : ''}`}>
            <div className="routes-table-head">
              <span>From</span>
              <span>To</span>
              <span>Frequency</span>
              <span>Duration</span>
              <span>From Price</span>
            </div>
            {routes[t.key].map((r, i) => (
              <div key={i} className="route-row">
                <div className="route-from-to">
                  <div>
                    <div className="route-city">{r.from}</div>
                    <div className="route-code">{r.fromCode}</div>
                  </div>
                </div>
                <div className="route-from-to">
                  <div className="route-arrow"><i className="fa-solid fa-plane"></i></div>
                  <div>
                    <div className="route-city">{r.to}</div>
                    <div className="route-code">{r.toCode}</div>
                  </div>
                </div>
                <div className="route-freq">{r.freq}</div>
                <div className="route-duration">{r.duration}</div>
                <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                  <span className="route-price-cell">{r.price}</span>
                  <button className="route-book-btn" onClick={() => handleRouteBook(r)}>
                    Book <i className="fa-solid fa-chevron-right" style={{fontSize:'9px'}}></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>

      <CtaAdventure
        heading={<>Ready to Book<br />Your Next Flight?</>}
        subtext="Choose from 14+ destinations across Nigeria, Africa, and the world. Affordable fares, trusted airlines."
        btnLabel="Search Flights"
        btnHref="/book/flight"
      />
      <NewsletterBar />
    </>
  );
}
