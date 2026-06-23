'use client';
import '@/app/pages.css';
import Link from 'next/link';
import { useState } from 'react';
import { useAnimations } from '@/hooks/useAnimations';
import NewsletterBar from '@/components/NewsletterBar';

export default function ContactPage() {
  const [activeEnquiry, setActiveEnquiry] = useState('general');
  const [submitted, setSubmitted] = useState(false);
  useAnimations();

  function toggleFaq(e) {
    const item = e.currentTarget.closest('.faq-item');
    item.classList.toggle('open');
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero contact-hero">
        <div className="page-hero-content">
          <span className="page-hero-tag hero-tag-entrance">
            <i className="fa-solid fa-circle" style={{fontSize:'8px',color:'var(--primary-red)',marginRight:'8px'}}></i>
            We&apos;re Here To Help
          </span>
          <h1 className="hero-h1-entrance">Get In <span className="highlight-red">Touch With Us</span></h1>
          <p className="hero-p-entrance">Whether you need help with a booking, have a business inquiry, want to explore a partnership, or simply want to say hello — we&apos;d love to hear from you.</p>
          <div className="contact-quick-links hero-btn-entrance">
            <a href="#form" className="contact-quick-btn"><i className="fa-solid fa-envelope"></i><span>Send Message</span></a>
            <a href="tel:+2347047009128" className="contact-quick-btn"><i className="fa-solid fa-phone"></i><span>Call Us</span></a>
            <a href="mailto:support@arlinks.com" className="contact-quick-btn"><i className="fa-brands fa-whatsapp"></i><span>WhatsApp</span></a>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="contact-info-grid">
          {[
            { icon: 'fa-phone', title: 'Phone', desc: 'Our support team is available Mon–Sat, 8am–8pm WAT', links: [{href:'tel:+2347047009128',text:'+234 704 700 9128 (Nigeria)'},{href:'tel:+447539071257',text:'+44 753 907 1257 (UK)'}] },
            { icon: 'fa-envelope', title: 'Email', desc: "Send us an email and we'll respond within 24 hours on business days", links: [{href:'mailto:support@arlinks.com',text:'support@arlinks.com'},{href:'mailto:partnerships@arlinks.com',text:'partnerships@arlinks.com'}] },
            { icon: 'fa-location-dot', title: 'Offices', desc: 'We operate from two locations', links: [{text:'7th Floor, Mulliner Towers, 39 Alfred Rewane Road, Ikoyi, Lagos 101233, Nigeria'},{text:'71–75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom'}] },
            { icon: 'fa-whatsapp', title: 'WhatsApp', desc: 'Chat with us directly on WhatsApp for quick responses', links: [{href:'https://wa.me/2347047009128',text:'+234 704 700 9128'}] },
          ].map((c, i) => (
            <div key={i} className="contact-info-card glass-panel reveal">
              <div className="cinfo-icon"><i className={`fa-solid ${c.icon}`}></i></div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              {c.links.map((l, li) => l.href ? <a key={li} href={l.href} className="cinfo-link">{l.text}</a> : <span key={li} className="cinfo-link">{l.text}</span>)}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form + Details */}
      <section className="contact-main-section" id="form">
        <div className="contact-main-container">
          {/* Form */}
          <div className="contact-form-panel glass-panel reveal-left">
            <div className="contact-form-header">
              <h2>Send Us a Message</h2>
              <p>Fill in the form and our team will get back to you within 24 hours.</p>
            </div>

            <div className="enquiry-tabs">
              {[
                { key: 'general', label: 'General' },
                { key: 'booking', label: 'Booking Help' },
                { key: 'partnership', label: 'Partnership' },
                { key: 'career', label: 'Career' },
                { key: 'investor', label: 'Investor' },
              ].map(t => (
                <button key={t.key} className={`enquiry-tab${activeEnquiry === t.key ? ' active' : ''}`} onClick={() => setActiveEnquiry(t.key)}>
                  {t.label}
                </button>
              ))}
            </div>

            <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="enquiry_type" value={activeEnquiry} />
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first-name">First Name *</label>
                  <input type="text" id="first-name" name="first_name" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name *</label>
                  <input type="text" id="last-name" name="last_name" placeholder="Doe" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address *</label>
                <input type="email" id="contact-email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">Phone Number</label>
                <input type="tel" id="contact-phone" name="phone" placeholder="+234 800 000 0000" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Subject *</label>
                <input type="text" id="contact-subject" name="subject" placeholder="How can we help you?" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message *</label>
                <textarea id="contact-message" name="message" rows="5" placeholder="Tell us more about your enquiry..." required></textarea>
              </div>
              <div className="form-group form-checkbox-row">
                <input type="checkbox" id="form-consent" required />
                <label htmlFor="form-consent">I agree to the <a href="#">privacy policy</a> and consent to being contacted regarding my enquiry.</label>
              </div>
              <button type="submit" className="btn btn-primary contact-submit-btn">
                <span>Send Message</span>
                <i className="fa-solid fa-paper-plane"></i>
              </button>

              {submitted && (
                <div className="form-success-msg">
                  <i className="fa-solid fa-circle-check"></i>
                  <div>
                    <strong>Message sent!</strong>
                    <p>Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Side Panel */}
          <div className="contact-side-panel reveal-right">
            <div className="contact-side-card glass-panel">
              <h3><i className="fa-solid fa-clock" style={{color:'var(--primary-red)',marginRight:'10px'}}></i>Office Hours</h3>
              <div className="hours-list">
                <div className="hours-row"><span>Monday – Friday</span><span>08:00 – 20:00 WAT</span></div>
                <div className="hours-row"><span>Saturday</span><span>09:00 – 18:00 WAT</span></div>
                <div className="hours-row"><span>Sunday</span><span>Urgent Support Only</span></div>
                <div className="hours-row highlight"><span>24/7 Emergency Line</span><span className="hours-green">Always Active</span></div>
              </div>
            </div>

            <div className="contact-side-card glass-panel">
              <h3><i className="fa-solid fa-bolt" style={{color:'var(--primary-red)',marginRight:'10px'}}></i>Response Times</h3>
              <div className="response-list">
                {[
                  { label: 'General Enquiries', time: 'Within 24h', fill: '95%' },
                  { label: 'Booking Support', time: 'Within 2h', fill: '100%' },
                  { label: 'Partnership', time: 'Within 48h', fill: '80%' },
                  { label: 'Investor Deck', time: 'Within 72h', fill: '70%' },
                ].map((r, i) => (
                  <div key={i} className="response-item">
                    <div className="response-bar" style={{'--fill': r.fill}}></div>
                    <div className="response-label"><span>{r.label}</span><span>{r.time}</span></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-side-card glass-panel">
              <h3><i className="fa-solid fa-share-nodes" style={{color:'var(--primary-red)',marginRight:'10px'}}></i>Follow ARLink28</h3>
              <div className="contact-socials">
                {[
                  { icon: 'fa-brands fa-instagram', name: 'Instagram' },
                  { icon: 'fa-brands fa-twitter', name: 'Twitter / X' },
                  { icon: 'fa-brands fa-linkedin', name: 'LinkedIn' },
                  { icon: 'fa-brands fa-facebook', name: 'Facebook' },
                ].map((s, i) => (
                  <a key={i} href="#" className="contact-social-btn"><i className={s.icon}></i><span>{s.name}</span></a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="opp-section" id="faq">
        <div className="section-header reveal">
          <span className="section-tag">FAQs</span>
          <h2>Frequently Asked <span className="highlight-red">Questions</span></h2>
          <p>Quick answers to the most common questions we receive.</p>
        </div>

        <div className="faq-list">
          {[
            { q: 'How do I book a flight with ARLinks?', a: 'You can book directly through our homepage booking widget. Select your departure, destination, date, and seat type, then click "Search Flight." Our team will confirm your booking and send ticket details to your email within minutes.' },
            { q: 'Can I change or cancel my booking?', a: "Yes. Contact our support team via phone or email with your booking reference. Changes and cancellations are subject to the airline's individual policy. Our team will guide you through the process and any applicable fees." },
            { q: 'How do I apply for a career opportunity?', a: 'Visit our Opportunities page to see current openings. Click "Apply Now" on your preferred role and fill in the contact form specifying the role. We aim to respond to all applications within 5 business days.' },
            { q: 'How can I invest in or partner with ARLink28?', a: 'Use the contact form above selecting "Investor" or "Partnership" as your enquiry type, or email us at partnerships@arlinks.com. We\'ll arrange a private briefing and share our investor deck within 72 hours of your enquiry.' },
            { q: 'Does ARLinks offer group booking discounts?', a: 'Yes. For groups of 10 or more passengers, we offer preferential pricing and dedicated booking support. Contact our team directly and we\'ll prepare a tailored group quote within 24 hours.' },
          ].map((faq, i) => (
            <div key={i} className="faq-item glass-panel reveal">
              <button className="faq-question" onClick={toggleFaq}>
                <span>{faq.q}</span>
                <i className="fa-solid fa-chevron-down faq-icon"></i>
              </button>
              <div className="faq-answer"><p>{faq.a}</p></div>
            </div>
          ))}
        </div>
      </section>

      <NewsletterBar />
    </>
  );
}