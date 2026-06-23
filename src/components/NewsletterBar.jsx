export default function NewsletterBar({ heading = 'Stay in the loop', subtext = 'Get the latest deals, destinations, and travel tips delivered straight to your inbox.', sectionId = 'register' }) {
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
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required aria-label="Email for newsletter" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="newsletter-agree">
            <input type="checkbox" id="newsletter-check" required />
            <label htmlFor="newsletter-check">I agree to terms &amp; privacy policy</label>
          </div>
        </div>
      </div>
    </section>
  );
}
