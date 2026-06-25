'use client';
import { useState } from 'react';

export default function NewsletterBar({ heading = 'Stay in the loop', subtext = 'Get the latest deals, destinations, and travel tips delivered straight to your inbox.', sectionId = 'register' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  }

  return (
    <section className="newsletter-bar" id={sectionId}>
      <div className="newsletter-container">
        <div className="newsletter-info reveal-left">
          <i className="fa-regular fa-envelope-open newsletter-icon"></i>
          <div className="newsletter-text">
            <h4>{heading}</h4>
            <p>{subtext}</p>
          </div>
        </div>
        <div className="newsletter-form-container reveal-right">
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              aria-label="Email for newsletter"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={status === 'loading'}
            />
            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          <div className="newsletter-agree">
            <input type="checkbox" id="newsletter-check" required />
            <label htmlFor="newsletter-check">I agree to terms &amp; privacy policy</label>
          </div>
          {status === 'success' && (
            <p style={{ color: '#2ecc71', fontSize: '13px', marginTop: '10px' }}>
              <i className="fa-solid fa-circle-check" style={{ marginRight: '6px' }}></i>
              You&apos;re subscribed! Check your inbox.
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#e74c3c', fontSize: '13px', marginTop: '10px' }}>
              <i className="fa-solid fa-circle-exclamation" style={{ marginRight: '6px' }}></i>
              {errorMsg}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
