'use client';
import './service.css';
import Link from 'next/link';
import { useAnimations } from '@/hooks/useAnimations';
import CtaAdventure from '@/components/CtaAdventure';
import NewsletterBar from '@/components/NewsletterBar';

const services = [
  {
    id: 'flight-booking',
    img: 'IMG_5235.png',
    alt: 'Flight Booking',
    title: 'Flight Booking',
    subtitle: 'Domestic & International Flights',
    desc: 'Our core service. We connect you to hundreds of domestic and international routes with real-time pricing, flexible travel dates, and instant booking confirmation. Whether you\'re flying within Nigeria or across continents, we find the best available fares.',
    features: ['Instant Confirmation','Price Guarantee','Multiple Airlines','Flexible Dates','Group Bookings','24/7 Support'],
    reverse: false,
  },
  {
    id: 'hotel-reservations',
    img: '488d546d69613897fbd91a3ec61d5c72.jpg',
    alt: 'Hotel Reservations',
    title: 'Hotel Reservations',
    subtitle: 'Curated Accommodation Worldwide',
    desc: 'From boutique hotels to five-star resorts, we handpick accommodations that match your budget and travel style. Book your hotel alongside your flight for maximum convenience and special bundled rates.',
    features: ['Hand-Picked Hotels','Best Rate Guarantee','Instant Booking','Bundle Savings','Free Cancellation','Worldwide Coverage'],
    reverse: true,
  },
  {
    id: 'travel-insurance',
    img: 'IMG_5236.png',
    alt: 'Travel Insurance',
    title: 'Travel Insurance',
    subtitle: 'Comprehensive Travel Protection',
    desc: 'Travel with complete peace of mind. Our insurance plans cover medical emergencies, trip cancellations, lost luggage, and flight delays — so nothing can ruin your journey.',
    features: ['Medical Coverage','Trip Cancellation','Lost Luggage','Flight Delay','Emergency Repatriation','24/7 Assistance'],
    reverse: false,
  },
  {
    id: 'airport-transfers',
    img: 'd4f2e3fa759091f84b4c8f98df2dc9d0.jpg',
    alt: 'Airport Transfers',
    title: 'Airport Transfers',
    subtitle: 'Seamless Ground Transportation',
    desc: 'Arrive and depart stress-free. Our airport transfer service ensures punctual, professional pickup and drop-off so you can focus on your journey, not logistics.',
    features: ['Professional Drivers','Meet & Greet','Flight Tracking','Luxury Vehicles','Group Transfers','Fixed Pricing'],
    reverse: true,
  },
  {
    id: 'holiday-packages',
    img: '7839e8b4d562c15a8f62d6b174cba984.jpg',
    alt: 'Holiday Packages',
    title: 'Holiday Packages',
    subtitle: 'All-Inclusive Travel Experiences',
    desc: 'Let us take care of everything. Our holiday packages combine flights, hotels, transfers, and curated experiences into one seamless booking. Simply choose your destination and we handle the rest.',
    features: ['All-Inclusive Options','Curated Experiences','Group Discounts','Flexible Dates','Custom Itineraries','Dedicated Planner'],
    reverse: false,
  },
  {
    id: 'corporate-group-travel',
    img: 'IMG_5235.png',
    alt: 'Corporate & Group Travel',
    title: 'Corporate & Group Travel Solutions',
    subtitle: 'For Businesses, Schools, Organisations & Conferences',
    desc: 'We handle travel logistics for corporates, schools, NGOs, and conference delegations. From bulk flight bookings to coordinated transfers and accommodation, we make group travel effortless and cost-efficient.',
    features: ['Bulk Flight Bookings','Group Hotel Rates','Dedicated Account Manager','Invoice & PO Support','Conference Logistics','Custom Travel Policies'],
    reverse: true,
  },
];

const whyCards = [
  { icon: 'fa-shield-halved', title: 'Fully Licensed', text: 'Regulated and certified to operate across African and international routes.' },
  { icon: 'fa-headset', title: '24/7 Support', text: 'Round-the-clock assistance for bookings, changes, and emergencies.' },
  { icon: 'fa-tag', title: 'Best Prices', text: 'Competitive fares with no hidden fees. Always.' },
  { icon: 'fa-bolt', title: 'Instant Booking', text: 'Confirmed tickets delivered to your inbox in minutes.' },
  { icon: 'fa-leaf', title: 'Eco-Friendly', text: 'We offset carbon for every flight booked through our platform.' },
];

export default function ServicesPage() {
  useAnimations();
  return (
    <>
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-content">
          <span className="service-hero-tag hero-tag-entrance">
            <i className="fa-solid fa-circle" style={{fontSize:'8px',marginRight:'8px'}}></i>
            Our Services
          </span>
          <h1 className="hero-h1-entrance">Seamless Travel,<br /><span className="highlight-red">End to End.</span></h1>
          <p className="hero-p-entrance">From flight booking and hotel reservations to airport transfers, visa support, holiday packages, and travel insurance — ARLink28 covers every step of your journey.</p>
        </div>
      </section>

      {/* Core Services */}
      <section className="core-services-section">
        <div className="services-title-wrapper">
          <span className="services-tag">What We Offer</span>
        </div>
        <div className="services-block-container">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className={`service-block-row${s.reverse ? ' row-reverse' : ''} reveal`}>
              <div className="service-block-img-box">
                <img src={`/images/${s.img}`} alt={s.alt} className="service-block-img" />
              </div>
              <div className="service-block-text-box">
                <h3>{s.title}</h3>
                <h4>{s.subtitle}</h4>
                <p>{s.desc}</p>
                <div className="service-features-list-wrapper">
                  <h5>What's Included</h5>
                  <ul className="service-features-list">
                    {s.features.map(f => <li key={f}><i className="fa-solid fa-check"></i>{f}</li>)}
                  </ul>
                </div>
                <Link href="/contact" className="btn btn-primary service-cta-btn">Get Started <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="service-why-choose-section">
        <div className="why-choose-header reveal">
          <h2>Why Choose <span className="highlight-red">ARLink28</span></h2>
        </div>
        <div className="why-choose-grid">
          {whyCards.map((w, i) => (
            <div key={i} className="why-card reveal">
              <i className={`fa-solid ${w.icon} why-card-icon`}></i>
              <h4>{w.title}</h4>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaAdventure heading={<>Book Your<br />Perfect Trip Today</>} subtext="Compare fares, choose your service, and let ARLink28 handle the rest. Stress-free travel starts here." btnLabel="Get Started" btnHref="/contact" />
      <NewsletterBar />
    </>
  );
}