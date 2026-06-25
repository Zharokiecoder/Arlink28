'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAnimations } from '@/hooks/useAnimations';
import NewsletterBar from '@/components/NewsletterBar';
import CtaAdventure from '@/components/CtaAdventure';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('flight');
  const router = useRouter();
  useAnimations();

  function handleBookingSearch(e) {
    e.preventDefault();
    const form = e.target.closest('form') || e.currentTarget;
    const from = form.querySelector('#from-input')?.value || '';
    const to = form.querySelector('#to-input')?.value || '';
    const date = form.querySelector('#date-input')?.value || '';
    const seat = form.querySelector('#seat-input')?.value || 'economy';
    const params = new URLSearchParams({ from, to, date, seat }).toString();
    const routes = { flight: 'flight', hotel: 'hotel', car: 'holiday', taxi: 'visa' };
    router.push(`/book/${routes[activeTab]}?${params}`);
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-main">
          <div className="hero-content">
            <span className="section-tag hero-tag-entrance">WITHIN AFRICA &amp; BEYOND</span>
            <h1 className="hero-h1-entrance">WE CONNECT <br /><span className="highlight-red">EVERY JOURNEY.</span></h1>
            <p className="hero-p-entrance">Flight tickets to domestic and international flights at cheap prices. Where do you want to go?</p>
            <a href="#register" className="btn btn-primary hero-btn-entrance">Book Flight <i className="fa-solid fa-plane"></i></a>
          </div>
          <div className="hero-visual hero-visual-entrance">
            <Image src="/images/HERO.png" alt="ARLinks Africa Route Map" className="hero-map" width={550} height={450} style={{width:'100%',maxWidth:'550px',height:'auto'}} priority />
          </div>
        </div>

        {/* Booking Widget */}
        <div className="booking-widget glass-panel hero-widget-entrance">
          <div className="booking-tabs">
            {[
              { id: 'flight', icon: 'fa-plane', label: 'Flight' },
              { id: 'hotel', icon: 'fa-hotel', label: 'Hotel Reservation' },
              { id: 'car', icon: 'fa-umbrella-beach', label: 'Holiday Package' },
              { id: 'taxi', icon: 'fa-passport', label: 'Visa Support' },
            ].map(tab => (
              <button key={tab.id} className={`tab-btn${activeTab === tab.id ? ' active' : ''}`} onClick={() => setActiveTab(tab.id)}>
                <i className={`fa-solid ${tab.icon}`}></i> {tab.label}
              </button>
            ))}
          </div>
          <form className="booking-form" onSubmit={handleBookingSearch}>
            <div className="input-group">
              <label htmlFor="from-input">From</label>
              <div style={{position:'relative'}}>
                <select id="from-input" className="input-field" style={{appearance:'none',WebkitAppearance:'none'}}>
                  <option value="">Select departure</option>
                  <option value="LOS">Lagos (LOS)</option>
                  <option value="ABV">Abuja (ABV)</option>
                  <option value="PHC">Port Harcourt (PHC)</option>
                  <option value="KAN">Kano (KAN)</option>
                  <option value="LHR">London (LHR)</option>
                  <option value="DXB">Dubai (DXB)</option>
                </select>
                <i className="fa-solid fa-plane-departure" style={{position:'absolute',right:'12px',top:'15px',color:'var(--text-muted)',pointerEvents:'none'}}></i>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="to-input">To</label>
              <div style={{position:'relative'}}>
                <select id="to-input" className="input-field" style={{appearance:'none',WebkitAppearance:'none'}}>
                  <option value="">Select destination</option>
                  <option value="LOS">Lagos (LOS)</option>
                  <option value="ABV">Abuja (ABV)</option>
                  <option value="PHC">Port Harcourt (PHC)</option>
                  <option value="KAN">Kano (KAN)</option>
                  <option value="LHR">London (LHR)</option>
                  <option value="DXB">Dubai (DXB)</option>
                  <option value="CDG">Paris (CDG)</option>
                  <option value="JFK">New York (JFK)</option>
                  <option value="NBO">Nairobi (NBO)</option>
                  <option value="CPT">Cape Town (CPT)</option>
                </select>
                <i className="fa-solid fa-plane-arrival" style={{position:'absolute',right:'12px',top:'15px',color:'var(--text-muted)',pointerEvents:'none'}}></i>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="date-input">Date</label>
              <div style={{position:'relative'}}>
                <input type="date" id="date-input" className="input-field" />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="time-input">Time</label>
              <div style={{position:'relative'}}>
                <input type="time" id="time-input" className="input-field" />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="seat-input">Seat Type</label>
              <div style={{position:'relative'}}>
                <select id="seat-input" className="input-field" style={{appearance:'none',WebkitAppearance:'none'}}>
                  <option value="economy">Economy</option>
                  <option value="premium">Premium Economy</option>
                  <option value="business">Business Class</option>
                  <option value="first">First Class</option>
                </select>
                <i className="fa-solid fa-chair" style={{position:'absolute',right:'12px',top:'15px',color:'var(--text-muted)',pointerEvents:'none'}}></i>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{height:'46px',marginBottom:'2px'}}>
              {activeTab === 'flight' ? 'Search Flights' : activeTab === 'hotel' ? 'Find Hotels' : activeTab === 'car' ? 'Find Packages' : 'Apply for Visa'}
              <i className="fa-solid fa-arrow-right" style={{marginLeft:'8px'}}></i>
            </button>
          </form>
          <div className="booking-options">
            <label className="option-checkbox"><input type="radio" name="flight-type" defaultChecked /><span className="custom-checkbox"></span>One-Way Flight</label>
            <label className="option-checkbox"><input type="radio" name="flight-type" /><span className="custom-checkbox"></span>Round Trip</label>
            <label className="option-checkbox"><input type="radio" name="flight-type" /><span className="custom-checkbox"></span>Multi-City</label>
            <label className="option-checkbox"><input type="checkbox" name="flexible-dates" /><span className="custom-checkbox"></span>Flexible Dates</label>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="hero-badges-row">
          <div className="hero-badge-card reveal reveal-delay-1">
            <div className="hero-badge-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="m9 11 2 2 4-4"></path>
              </svg>
            </div>
            <div className="hero-badge-text">Trusted Travel<br />Expert</div>
          </div>
          <div className="hero-badge-card reveal reveal-delay-2">
            <div className="hero-badge-icon"><i className="fa-solid fa-globe"></i></div>
            <div className="hero-badge-text">Global<br />Partnerships</div>
          </div>
          <div className="hero-badge-card reveal reveal-delay-3">
            <div className="hero-badge-icon"><i className="fa-solid fa-location-dot"></i></div>
            <div className="hero-badge-text">Opportunities<br />across Africa</div>
          </div>
          <div className="hero-badge-card reveal reveal-delay-4">
            <div className="hero-badge-icon"><i className="fa-solid fa-headset"></i></div>
            <div className="hero-badge-text">Dedicated<br />Support</div>
          </div>
        </div>
      </section>

      {/* Why Choose ARLinks */}
      <section className="why-choose-us" id="features">
        <div className="section-header reveal">
          <span className="why-choose-badge">Why Choose ARLink28 <i className="fa-solid fa-plane"></i></span>
          <h2>Your <span className="highlight-red">Journey</span> Starts Here</h2>
          <p>Whether you're traveling for business, family visits, education, tourism, or special occasions, ARLink28 makes flight booking simple, affordable, and stress-free.<br />We help travelers find the right flights, save time, and enjoy a seamless booking experience from departure to arrival.</p>
        </div>
        <div className="features-grid">
          {[
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><circle cx="11.5" cy="14.5" r="2.5"></circle><line x1="13.25" y1="16.25" x2="16" y2="19"></line></svg>, title: 'Find the Best Flight Deals', text: 'Compare routes and fares from trusted airlines to secure the best value for your trip.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><circle cx="8" cy="14" r="1"></circle><circle cx="12" cy="14" r="1"></circle><circle cx="16" cy="14" r="1"></circle><circle cx="8" cy="18" r="1"></circle><circle cx="12" cy="18" r="1"></circle><circle cx="16" cy="18" r="1"></circle></svg>, title: 'Flexible Travel Options', text: 'Choose from one-way, round-trip, and multi-city bookings tailored to your travel needs.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>, title: 'Secure Payments', text: 'Book with confidence using safe and reliable payment options.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>, title: '24/7 Travel Assistance', text: 'Our support team is ready to assist before, during, and after your journey.' },
          ].map((f, i) => (
            <div key={i} className="feature-card glass-panel reveal">
              <div className="feature-icon-wrapper">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
        <div className="indicator-bar"></div>
      </section>

      {/* Popular Destinations */}
      <section className="popular-destinations" id="destinations">
        <div className="destination-header-row">
          <div className="section-header reveal">
            <span className="section-tag">Top Destinations</span>
            <h2>Popular Destination</h2>
            <p>Connect immediately to major business centers and leisure gateways. Here are our top-rated flight routes.</p>
          </div>
          <Link href="/destinations" className="btn btn-secondary reveal">View All Destinations</Link>
        </div>
        <div className="destinations-grid">
          {[
            { img: 'Abuja.jpeg', alt: 'Abuja', label: 'Flight to Abuja (ABV)' },
            { img: 'Lagos.jpeg', alt: 'Lagos', label: 'Flight to Lagos (LOS)' },
            { img: 'IMG_5235.png', alt: 'Port Harcourt', label: 'Flight to Port Harcourt (PHC)' },
            { img: 'Kano.jpeg', alt: 'Kano', label: 'Flight to Kano (KAN)' },
            { img: 'Lodon.jpeg', alt: 'London', label: 'Flight to London (LHR)' },
            { img: 'Paris.jpeg', alt: 'Paris', label: 'Flight to Paris (CDG)' },
            { img: 'Newyork.jpeg', alt: 'New York', label: 'Flight to New York (JFK)' },
            { img: 'Dubai.jpeg', alt: 'Dubai', label: 'Flight to Dubai (DXB)' },
            { img: 'Kenya.jpeg', alt: 'Nairobi', label: 'Flight to Nairobi (NBO)' },
            { img: 'CapeTown.jpeg', alt: 'Cape Town', label: 'Flight to Cape Town (CPT)' },
          ].map((d, i) => (

            <div key={i} className="destination-card reveal">
              <img src={`/images/${d.img}`} alt={d.alt} className="destination-img" />
              <div className="destination-overlay">
                <div className="destination-pin"><i className="fa-solid fa-location-dot"></i></div>
                <h4>{d.label}</h4>
                <span className="book-now-link">Book Now <i className="fa-solid fa-chevron-right"></i></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Travel Services */}
      <section className="our-services-section" id="services">
        <div className="section-header reveal">
          <span className="section-tag">Our Services</span>
          <h2>Our Travel Services</h2>
          <p>Everything you need for a smooth and unforgettable journey</p>
        </div>
        <div className="services-grid-new">
          {[
            { icon: 'fa-plane', title: 'Flight Booking', text: 'Quick and reliable ticket booking across domestic and international routes.', href: '/services#flight-booking' },
            { icon: 'fa-hotel', title: 'Hotel Reservation', text: 'Comfortable and hand-picked accommodations wherever your flight takes you.', href: '/services#hotel-reservations' },
            { icon: 'fa-passport', title: 'Visa Assistance', text: 'Expert guidance on visa applications, documentation, and processing.', href: '/services#travel-insurance' },
            { icon: 'fa-car', title: 'Airport Transfers', text: 'Seamless and punctual airport pickup and drop-off services.', href: '/services#airport-transfers' },
            { icon: 'fa-umbrella-beach', title: 'Holiday Packages', text: 'All-inclusive travel packages curated for your perfect holiday experience.', href: '/services#holiday-packages' },
            { icon: 'fa-shield-halved', title: 'Travel Insurance', text: 'Comprehensive travel insurance plans for worry-free journeys.', href: '/services' },
          ].map((s, i) => (
            <div key={i} className="service-card-new glass-panel reveal">
              <div className="service-icon-wrapper-new"><i className={`fa-solid ${s.icon}`}></i></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <Link href={s.href} className="service-learn-more">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          ))}
        </div>

        {/* Featured Travel */}
        <div className="featured-travel-container">
          <div className="featured-travel-header-row">
            <div className="section-header reveal" style={{textAlign:'left',margin:0}}>
              <span className="section-tag">Featured Trips</span>
              <h2>Featured Travel</h2>
            </div>
            <Link href="/travel" className="btn btn-secondary reveal">View All Trips</Link>
          </div>
          <div className="featured-travel-grid">
            {[
              { img: 'IMG_5236.png', dur: '7 Days', title: 'Lagos to London', text: 'Direct flights with premium amenities. Business and economy class available daily.', price: '$499', from: 'From' },
              { img: '11a45865c24a53fcd5b730276d1ea975.jpg', dur: '5 Days', title: 'Abuja City Break', text: 'Explore Nigeria\'s capital with guided tours, luxury hotels, and cultural experiences.', price: '$199', from: 'From' },
              { img: '488d546d69613897fbd91a3ec61d5c72.jpg', dur: '10 Days', title: 'Dubai Experience', text: 'Luxury travel to the UAE. Shopping, desert safaris, and world-class hospitality.', price: '$799', from: 'From' },
              { img: 'gini2.png', dur: '4 Days', title: 'Kano Cultural Tour', text: 'Discover ancient city walls, vibrant markets, and rich northern Nigerian heritage.', price: '$149', from: 'From' },
            ].map((t, i) => (
              <div key={i} className="featured-travel-card reveal">
                <div className="featured-travel-img-wrapper">
                  <img src={`/images/${t.img}`} alt={t.title} className="featured-travel-img" />
                  <span className="featured-travel-duration">{t.dur}</span>
                </div>
                <div className="featured-travel-content">
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                  <div className="featured-travel-card-footer">
                    <div className="featured-travel-price">
                      {t.price}
                      <span>{t.from}</span>
                    </div>
                    <Link href="/contact" className="featured-travel-btn">Book Now <i className="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Capsule */}
        <div className="stats-capsule-container">
          <div className="stats-capsule-row reveal">
            {[
              { icon: 'fa-plane', num: '50+', label: 'Routes Available' },
              { icon: 'fa-users', num: '10,000+', label: 'Happy Travelers' },
              { icon: 'fa-handshake', num: '20+', label: 'Airline Partners' },
              { icon: 'fa-globe', num: '30+', label: 'Countries Served' },
            ].map((s, i) => (
              <div key={i} className="capsule-stat-item">
                <div className="capsule-icon-box"><i className={`fa-solid ${s.icon}`}></i></div>
                <div className="capsule-stat-content">
                  <div className="capsule-stat-num" data-target={s.num}>{s.num}</div>
                  <div className="capsule-stat-lbl">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" id="blog">
        <div className="section-header reveal">
          <span className="section-tag">Testimonials</span>
          <h2>What Our <span className="highlight-red">Travelers Say</span></h2>
          <p>Real experiences from real travelers who chose ARLinks for their journeys.</p>
        </div>
        <div className="testimonials-grid">
          {[
            { img: '071c01cbad5ab7965667ff2e9ef5765c.jpg', name: 'Sarah Adams', role: 'Corporate Executive', stars: 5, text: '"ARLinks completely overhauled how I manage flight bookings for my corporate team. Booking is instant, scheduling checks are accurate, and support resolves adjustments immediately."' },
            { img: '026badc72f15f795f5246011b20dedb3.jpg', name: 'David Miller', role: 'Frequent Flyer', stars: 4, text: '"I secured cheap prices on an international route that was twice as high elsewhere. The flight check-in was smooth, and updates saved us from a massive delay."' },
            { img: '488d546d69613897fbd91a3ec61d5c72.jpg', name: 'Emmanuel Cole', role: 'Leisure Traveler', stars: 5, text: '"Top-tier user interface! Quick transitions, clear pricing details without hidden fees, and the responsive customer support team is extremely polite and efficient."' },
          ].map((t, i) => (
            <div key={i} className="testimonial-card glass-panel reveal" style={{marginTop:'40px'}}>
              <div className="testimonial-avatar">
                <img src={`/images/${t.img}`} alt={t.name} />
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-footer">
                <div className="reviewer-info">
                  <h5>{t.name}</h5>
                  <span>{t.role}</span>
                </div>
                <div className="rating-stars">
                  {Array.from({length: 5}).map((_, si) => (
                    <i key={si} className={si < t.stars ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaAdventure />
      <NewsletterBar />
    </>
  );
}