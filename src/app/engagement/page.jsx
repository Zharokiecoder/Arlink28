'use client';
import '@/app/pages.css';
import Link from 'next/link';
import { useAnimations } from '@/hooks/useAnimations';
import CtaAdventure from '@/components/CtaAdventure';
import NewsletterBar from '@/components/NewsletterBar';

export default function EngagementPage() {
  useAnimations();

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <span className="page-hero-tag hero-tag-entrance">
            <i className="fa-solid fa-circle" style={{fontSize:'8px',color:'var(--primary-red)',marginRight:'8px'}}></i>
            Community &amp; Connection
          </span>
          <h1 className="hero-h1-entrance">Join The<br /><span className="highlight-red">ARLink28 Journey</span></h1>
          <p className="hero-p-entrance">Follow our story, read the latest aviation news, attend community events, and connect with fellow travelers who are part of the ARLink28 family.</p>
          <div className="page-hero-actions hero-btn-entrance">
            <a href="#news" className="btn btn-primary">Latest News <i className="fa-solid fa-newspaper"></i></a>
            <a href="#events" className="btn btn-secondary">Upcoming Events</a>
          </div>
        </div>
        <div className="page-hero-visual hero-visual-entrance">
          <div className="engage-hero-socials glass-panel">
            <h4><i className="fa-solid fa-signal" style={{color:'var(--primary-red)',marginRight:'8px'}}></i>Follow Our Journey</h4>
            <div className="engage-social-row">
              {[
                { icon: 'fa-brands fa-instagram', name: 'Instagram', handle: '@arlink28' },
                { icon: 'fa-brands fa-twitter', name: 'Twitter / X', handle: '@arlink28' },
                { icon: 'fa-brands fa-linkedin', name: 'LinkedIn', handle: 'ARLink28 Aviation' },
                { icon: 'fa-brands fa-facebook', name: 'Facebook', handle: 'ARLink28' },
              ].map((s, i) => (
                <a key={i} href="#" className="engage-social-card">
                  <i className={s.icon}></i>
                  <span>{s.name}</span>
                  <small>{s.handle}</small>
                </a>
              ))}
            </div>
            <div className="engage-community-stat">
              <div><span className="engage-stat-num">12K+</span><span>Followers</span></div>
              <div><span className="engage-stat-num">800+</span><span>Community Members</span></div>
              <div><span className="engage-stat-num">50+</span><span>Stories Shared</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="opp-section" id="news">
        <div className="section-header reveal">
          <span className="section-tag">Latest News</span>
          <h2>ARLink28 <span className="highlight-red">In The News</span></h2>
          <p>Stay up to date with our latest announcements, milestones, and the broader African aviation landscape.</p>
        </div>

        <div className="news-grid">
          {/* Featured */}
          <div className="news-card glass-panel reveal news-card-featured">
            <div className="news-img-wrapper">
              <img src="/images/gini2.png" alt="ARLink28 Launch Announcement" className="news-img" />
              <span className="news-category-badge">Company News</span>
            </div>
            <div className="news-content">
              <div className="news-meta">
                <span><i className="fa-regular fa-calendar"></i> June 2026</span>
                <span><i className="fa-regular fa-clock"></i> 4 min read</span>
              </div>
              <h3>ARLink28 Announces Ethiopian Operational Base</h3>
              <p>ARLink28 has officially confirmed Addis Ababa as its primary operational hub, citing its strategic position at the intersection of Africa, Europe, and the Middle East as key to its long-term expansion strategy.</p>
              <Link href="/contact" className="news-read-more">Read Full Story <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>

          {[
            { img: 'IMG_5236.png', badge: 'badge-green', cat: 'Industry', date: 'May 2026', read: '3 min read', title: "Africa's Aviation Market Set to Double by 2035", desc: "A new IATA report projects Africa's passenger market to reach 300 million by 2035, creating unprecedented demand for intra-continental routes." },
            { img: '0beb3e04fca00b01c6d5ee27858785f2.jpg', badge: 'badge-blue', cat: 'Sustainability', date: 'April 2026', read: '5 min read', title: 'Our Commitment to Net Zero Aviation', desc: 'ARLink28 outlines its Sustainable Aviation Fuel (SAF) strategy and carbon offset programme ahead of its inaugural routes.' },
            { img: '11a45865c24a53fcd5b730276d1ea975.jpg', badge: '', cat: 'Routes', date: 'March 2026', read: '3 min read', title: 'Lagos–London Direct Route in Planning Phase', desc: 'ARLink28 is finalising a direct Lagos–London Heathrow route, targeting Nigerian diaspora and business travelers with competitive fares.' },
          ].map((n, i) => (
            <div key={i} className="news-card glass-panel reveal">
              <div className="news-img-wrapper">
                <img src={`/images/${n.img}`} alt={n.title} className="news-img" />
                <span className={`news-category-badge ${n.badge}`}>{n.cat}</span>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span><i className="fa-regular fa-calendar"></i> {n.date}</span>
                  <span><i className="fa-regular fa-clock"></i> {n.read}</span>
                </div>
                <h3>{n.title}</h3>
                <p>{n.desc}</p>
                <Link href="/contact" className="news-read-more">Read Full Story <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="opp-section opp-invest-section" id="events">
        <div className="section-header reveal">
          <span className="section-tag">Events</span>
          <h2>Upcoming <span className="highlight-red">Events &amp; Webinars</span></h2>
          <p>Join us at industry events, community meetups, and online webinars where we share our vision and connect with the travel community.</p>
        </div>

        <div className="events-list">
          {[
            { month: 'AUG', day: '14', year: '2026', badge: '', type: 'Webinar', title: 'ARLink28 Vision Presentation', desc: 'An exclusive online briefing for potential investors and strategic partners. Hear directly from the founding team about our routes, fleet, and growth strategy.', time: '14:00 BST', location: 'Online — Zoom' },
            { month: 'SEP', day: '22', year: '2026', badge: 'badge-green', type: 'Conference', title: 'African Aviation Summit — Lagos', desc: "ARLink28 joins industry leaders at Nigeria's premier aviation conference. Meet our team, explore partnership opportunities, and discuss the future of African air travel.", time: '09:00 WAT', location: 'Eko Hotel, Lagos' },
            { month: 'NOV', day: '08', year: '2026', badge: 'badge-blue', type: 'Community', title: 'ARLink28 Community Meetup — London', desc: 'A relaxed evening for frequent travelers, diaspora community members, and aviation enthusiasts to connect with the ARLink28 team and share their journey stories.', time: '18:30 GMT', location: 'Canary Wharf, London' },
          ].map((e, i) => (
            <div key={i} className="event-item glass-panel reveal">
              <div className="event-date-box">
                <span className="event-month">{e.month}</span>
                <span className="event-day">{e.day}</span>
                <span className="event-year">{e.year}</span>
              </div>
              <div className="event-details">
                <span className={`event-type-badge ${e.badge}`}>{e.type}</span>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <div className="event-meta">
                  <span><i className="fa-solid fa-clock"></i> {e.time}</span>
                  <span><i className="fa-solid fa-location-dot"></i> {e.location}</span>
                </div>
              </div>
              <Link href="/contact" className="btn btn-primary event-register-btn">Register</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="opp-section" id="stories">
        <div className="section-header reveal">
          <span className="section-tag">Community Stories</span>
          <h2>What Our <span className="highlight-red">Travelers Say</span></h2>
          <p>Real stories from real people whose journeys we've been proud to be part of.</p>
        </div>

        <div className="testimonials-grid">
          {[
            { img: '071c01cbad5ab7965667ff2e9ef5765c.jpg', name: 'Sarah Adams', role: 'Corporate Executive', stars: 5, text: '"ARLinks completely overhauled how I manage flight bookings for my corporate team. Booking is instant, scheduling checks are accurate, and support resolves adjustments immediately."' },
            { img: '026badc72f15f795f5246011b20dedb3.jpg', name: 'David Miller', role: 'Frequent Flyer', stars: 4, text: '"I secured cheap prices on an international route that was twice as high elsewhere. The flight check-in was smooth, and updates saved us from a massive delay."' },
            { img: '488d546d69613897fbd91a3ec61d5c72.jpg', name: 'Emmanuel Cole', role: 'Leisure Traveler', stars: 5, text: '"Top-tier user interface! Quick transitions, clear pricing details without hidden fees, and the responsive customer support team is extremely polite and efficient."' },
          ].map((t, i) => (
            <div key={i} className="testimonial-card glass-panel reveal" style={{marginTop:'40px'}}>
              <div className="testimonial-avatar"><img src={`/images/${t.img}`} alt={t.name} /></div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-footer">
                <div className="reviewer-info"><h5>{t.name}</h5><span>{t.role}</span></div>
                <div className="rating-stars">
                  {Array.from({length:5}).map((_,si) => <i key={si} className={si < t.stars ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="jobs-cta reveal">
          <p>Share your own story with us — we'd love to feature you.</p>
          <Link href="/contact" className="btn btn-secondary">Share Your Story</Link>
        </div>
      </section>

      <CtaAdventure />
      <NewsletterBar />
    </>
  );
}
