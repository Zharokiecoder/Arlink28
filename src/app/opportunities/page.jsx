'use client';
import '@/app/pages.css';
import Link from 'next/link';
import { useAnimations, useCarousel } from '@/hooks/useAnimations';
import CtaAdventure from '@/components/CtaAdventure';
import NewsletterBar from '@/components/NewsletterBar';

export default function OpportunitiesPage() {
  useAnimations();
  useCarousel();

  const Barcode = () => (
    <div className="ticket-mini-barcode">
      <div className="tbc w2"></div><div className="tbc w1"></div><div className="tbc w3"></div>
      <div className="tbc w1"></div><div className="tbc w2"></div><div className="tbc w4"></div>
      <div className="tbc w1"></div><div className="tbc w2"></div><div className="tbc w1"></div>
    </div>
  );

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <span className="page-hero-tag hero-tag-entrance">
            <i className="fa-solid fa-circle" style={{fontSize:'8px',color:'var(--primary-red)',marginRight:'8px'}}></i>
            Grow With Us
          </span>
          <h1 className="hero-h1-entrance">Shape The Future Of<br /><span className="highlight-red">African Aviation</span></h1>
          <p className="hero-p-entrance">Whether you're a talented professional, a strategic investor, or an ambitious partner — ARLink28 has a place for you in building Africa's next great airline.</p>
          <div className="page-hero-actions hero-btn-entrance">
            <a href="#careers" className="btn btn-primary">View Openings <i className="fa-solid fa-arrow-right"></i></a>
            <a href="#partnerships" className="btn btn-secondary">Partner With Us</a>
          </div>
        </div>
        <div className="page-hero-visual hero-visual-entrance">
          <div className="opp-hero-stats">
            {[
              { icon: 'fa-users', num: '50+', label: 'Open Roles' },
              { icon: 'fa-handshake', num: '20+', label: 'Partners' },
              { icon: 'fa-globe', num: '30+', label: 'Countries' },
              { icon: 'fa-chart-line', num: '$5M+', label: 'Investment Target' },
            ].map((s, i) => (
              <div key={i} className="opp-stat-card glass-panel">
                <div className="opp-stat-icon"><i className={`fa-solid ${s.icon}`}></i></div>
                <div className="opp-stat-num">{s.num}</div>
                <div className="opp-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="opp-section" id="careers">
        <div className="section-header reveal">
          <span className="section-tag">Career Openings</span>
          <h2>Join The <span className="highlight-red">ARLink28</span> Team</h2>
          <p>We're building a world-class airline from the ground up. We want passionate, talented people ready to shape the future of African aviation.</p>
        </div>

        <div className="jobs-carousel-container reveal">
          <button className="carousel-control prev" id="carousel-prev" aria-label="Previous"><i className="fa-solid fa-chevron-left"></i></button>
          <button className="carousel-control next" id="carousel-next" aria-label="Next"><i className="fa-solid fa-chevron-right"></i></button>

          <div className="jobs-carousel-viewport">
            <div className="jobs-tickets" id="jobs-track">

              {/* Ticket 1 */}
              <div className="job-ticket">
                <div className="ticket-stub">
                  <div className="ticket-num">01</div>
                  <div className="ticket-stub-icon"><i className="fa-solid fa-plane"></i></div>
                  <span className="ticket-type badge-fulltime">Full-Time</span>
                </div>
                <div className="ticket-tear"><div className="ticket-notch top"></div><div className="ticket-dash-line"></div><div className="ticket-notch bottom"></div></div>
                <div className="ticket-body">
                  <div className="ticket-body-top">
                    <div>
                      <h3>Flight Operations Manager</h3>
                      <p className="ticket-location"><i className="fa-solid fa-location-dot"></i> Addis Ababa, Ethiopia</p>
                    </div>
                    <span className="ticket-dept">Operations</span>
                  </div>
                  <p className="ticket-desc">Oversee day-to-day flight operations, coordinate with crew scheduling, and ensure compliance with aviation safety standards across all routes.</p>
                  <div className="ticket-skills"><span>Aviation</span><span>Operations</span><span>Leadership</span><span>ICAO</span></div>
                </div>
                <div className="ticket-action-panel">
                  <div className="ticket-ref">ARK-001</div>
                  <Link href="/contact" className="ticket-apply-btn">Apply Now <i className="fa-solid fa-arrow-right"></i></Link>
                  <Barcode />
                </div>
              </div>

              {/* Ticket 2 */}
              <div className="job-ticket">
                <div className="ticket-stub ticket-stub-green">
                  <div className="ticket-num">02</div>
                  <div className="ticket-stub-icon"><i className="fa-solid fa-code"></i></div>
                  <span className="ticket-type badge-remote">Remote</span>
                </div>
                <div className="ticket-tear"><div className="ticket-notch top"></div><div className="ticket-dash-line"></div><div className="ticket-notch bottom"></div></div>
                <div className="ticket-body">
                  <div className="ticket-body-top">
                    <div>
                      <h3>Full-Stack Developer</h3>
                      <p className="ticket-location"><i className="fa-solid fa-location-dot"></i> Remote / Lagos, Nigeria</p>
                    </div>
                    <span className="ticket-dept">Technology</span>
                  </div>
                  <p className="ticket-desc">Build and maintain the ARLink28 digital platform — booking engines, admin dashboards, and customer-facing web applications at scale.</p>
                  <div className="ticket-skills"><span>React</span><span>Node.js</span><span>AWS</span><span>TypeScript</span></div>
                </div>
                <div className="ticket-action-panel">
                  <div className="ticket-ref">ARK-002</div>
                  <Link href="/contact" className="ticket-apply-btn">Apply Now <i className="fa-solid fa-arrow-right"></i></Link>
                  <Barcode />
                </div>
              </div>

              {/* Ticket 3 */}
              <div className="job-ticket">
                <div className="ticket-stub">
                  <div className="ticket-num">03</div>
                  <div className="ticket-stub-icon"><i className="fa-solid fa-headset"></i></div>
                  <span className="ticket-type badge-fulltime">Full-Time</span>
                </div>
                <div className="ticket-tear"><div className="ticket-notch top"></div><div className="ticket-dash-line"></div><div className="ticket-notch bottom"></div></div>
                <div className="ticket-body">
                  <div className="ticket-body-top">
                    <div>
                      <h3>Customer Experience Lead</h3>
                      <p className="ticket-location"><i className="fa-solid fa-location-dot"></i> Lagos, Nigeria</p>
                    </div>
                    <span className="ticket-dept">CX &amp; Support</span>
                  </div>
                  <p className="ticket-desc">Design and deliver exceptional traveler experiences from first booking to post-flight follow-up across all touchpoints and channels.</p>
                  <div className="ticket-skills"><span>CX Design</span><span>Travel</span><span>Support</span><span>Zendesk</span></div>
                </div>
                <div className="ticket-action-panel">
                  <div className="ticket-ref">ARK-003</div>
                  <Link href="/contact" className="ticket-apply-btn">Apply Now <i className="fa-solid fa-arrow-right"></i></Link>
                  <Barcode />
                </div>
              </div>

              {/* Ticket 4 */}
              <div className="job-ticket">
                <div className="ticket-stub ticket-stub-blue">
                  <div className="ticket-num">04</div>
                  <div className="ticket-stub-icon"><i className="fa-solid fa-chart-bar"></i></div>
                  <span className="ticket-type badge-remote">Remote</span>
                </div>
                <div className="ticket-tear"><div className="ticket-notch top"></div><div className="ticket-dash-line"></div><div className="ticket-notch bottom"></div></div>
                <div className="ticket-body">
                  <div className="ticket-body-top">
                    <div>
                      <h3>Marketing Strategist</h3>
                      <p className="ticket-location"><i className="fa-solid fa-location-dot"></i> Remote (Global)</p>
                    </div>
                    <span className="ticket-dept">Marketing</span>
                  </div>
                  <p className="ticket-desc">Lead brand campaigns, digital growth initiatives, and partnership marketing strategies for ARLink28's expansion across Africa and internationally.</p>
                  <div className="ticket-skills"><span>Digital</span><span>Brand</span><span>Growth</span><span>Analytics</span></div>
                </div>
                <div className="ticket-action-panel">
                  <div className="ticket-ref">ARK-004</div>
                  <Link href="/contact" className="ticket-apply-btn">Apply Now <i className="fa-solid fa-arrow-right"></i></Link>
                  <Barcode />
                </div>
              </div>

              {/* Ticket 5 */}
              <div className="job-ticket">
                <div className="ticket-stub">
                  <div className="ticket-num">05</div>
                  <div className="ticket-stub-icon"><i className="fa-solid fa-shield-halved"></i></div>
                  <span className="ticket-type badge-fulltime">Full-Time</span>
                </div>
                <div className="ticket-tear"><div className="ticket-notch top"></div><div className="ticket-dash-line"></div><div className="ticket-notch bottom"></div></div>
                <div className="ticket-body">
                  <div className="ticket-body-top">
                    <div>
                      <h3>Safety &amp; Compliance Officer</h3>
                      <p className="ticket-location"><i className="fa-solid fa-location-dot"></i> Addis Ababa, Ethiopia</p>
                    </div>
                    <span className="ticket-dept">Compliance</span>
                  </div>
                  <p className="ticket-desc">Ensure all operational activities meet ICAO, IATA and local aviation authority standards. Lead safety audits and training programmes.</p>
                  <div className="ticket-skills"><span>Safety</span><span>ICAO</span><span>IATA</span><span>Compliance</span></div>
                </div>
                <div className="ticket-action-panel">
                  <div className="ticket-ref">ARK-005</div>
                  <Link href="/contact" className="ticket-apply-btn">Apply Now <i className="fa-solid fa-arrow-right"></i></Link>
                  <Barcode />
                </div>
              </div>

              {/* Ticket 6 */}
              <div className="job-ticket">
                <div className="ticket-stub ticket-stub-amber">
                  <div className="ticket-num">06</div>
                  <div className="ticket-stub-icon"><i className="fa-solid fa-briefcase"></i></div>
                  <span className="ticket-type badge-contract">Contract</span>
                </div>
                <div className="ticket-tear"><div className="ticket-notch top"></div><div className="ticket-dash-line"></div><div className="ticket-notch bottom"></div></div>
                <div className="ticket-body">
                  <div className="ticket-body-top">
                    <div>
                      <h3>Business Development Manager</h3>
                      <p className="ticket-location"><i className="fa-solid fa-location-dot"></i> London, UK</p>
                    </div>
                    <span className="ticket-dept">Business Dev</span>
                  </div>
                  <p className="ticket-desc">Drive new commercial partnerships, airline agreements, and route expansion opportunities in the UK and European markets for ARLink28.</p>
                  <div className="ticket-skills"><span>Partnerships</span><span>Aviation</span><span>Sales</span><span>Strategy</span></div>
                </div>
                <div className="ticket-action-panel">
                  <div className="ticket-ref">ARK-006</div>
                  <Link href="/contact" className="ticket-apply-btn">Apply Now <i className="fa-solid fa-arrow-right"></i></Link>
                  <Barcode />
                </div>
              </div>

            </div>
          </div>
          <div className="carousel-dots" id="carousel-dots"></div>
        </div>
      </section>

      {/* Invest Section */}
      <section className="opp-section opp-invest-section" id="invest">
        <div className="invest-row">
          <div className="invest-text reveal-left">
            <span className="section-tag">Investor Relations</span>
            <h2>Invest In <span className="highlight-red">Africa's Aviation Future</span></h2>
            <p>ARLink28 is seeking strategic investment partners to help build a new era of African air travel. We offer transparent reporting, strong growth projections, and meaningful impact at continental scale.</p>
            <ul className="invest-list">
              {['Projected $5M+ Series A round','30%+ CAGR in African aviation market','Operational base in Ethiopia — Africa\'s gateway hub','Sustainable aviation technology advantage','Experienced leadership team with aviation &amp; tech backgrounds'].map((item,i) => (
                <li key={i}><i className="fa-solid fa-check"></i>{item}</li>
              ))}
            </ul>
            <div style={{marginTop:'30px'}}>
              <Link href="/contact" className="btn btn-primary">Request Investor Deck <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
          <div className="invest-card-stack reveal-right">
            {[
              { icon: 'fa-chart-line', title: 'Market Size', text: 'African aviation projected to grow to $25B by 2035.' },
              { icon: 'fa-plane', title: 'Fleet Strategy', text: 'Fuel-efficient aircraft with SAF capability from day one.' },
              { icon: 'fa-shield-halved', title: 'Risk Management', text: 'Robust compliance framework aligned with ICAO standards.' },
              { icon: 'fa-users', title: 'Management Team', text: 'Multi-disciplinary team spanning aviation, tech, and finance.' },
            ].map((m, i) => (
              <div key={i} className="invest-metric-card glass-panel">
                <i className={`fa-solid ${m.icon}`}></i>
                <div><h4>{m.title}</h4><p>{m.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="opp-section" id="partnerships">
        <div className="section-header reveal">
          <span className="section-tag">Partnerships</span>
          <h2>Partner With <span className="highlight-red">ARLink28</span></h2>
          <p>We're actively building a network of strategic partners across aviation, technology, hospitality, and financial services.</p>
        </div>
        <div className="partner-types-grid">
          {[
            { icon: 'fa-plane', title: 'Airline Partners', desc: 'Code-share agreements and interline partnerships with African and global carriers for seamless passenger connections.' },
            { icon: 'fa-hotel', title: 'Hospitality Partners', desc: 'Hotel chains, resorts, and accommodation providers to bundle travel packages and deliver end-to-end journeys.' },
            { icon: 'fa-laptop-code', title: 'Technology Partners', desc: 'Booking platforms, payment processors, and aviation software vendors building the digital backbone of ARLink28.' },
            { icon: 'fa-building-columns', title: 'Financial Partners', desc: 'Banks, investment firms, and financial institutions supporting our capitalization and growth strategy.' },
          ].map((p, i) => (
            <div key={i} className="partner-type-card glass-panel reveal">
              <div className="pt-icon"><i className={`fa-solid ${p.icon}`}></i></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <Link href="/contact" className="pt-link">Get in touch <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          ))}
        </div>
      </section>

      <CtaAdventure heading={<>Shape Africa's<br />Aviation Future</>} subtext="Whether as a team member, investor, or partner — there's a place for you in the ARLink28 story." btnLabel="Get In Touch" btnHref="/contact" />
      <NewsletterBar />
    </>
  );
}
