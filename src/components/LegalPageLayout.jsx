import MarkdownContent, { extractToc } from '@/lib/markdown';
import Link from 'next/link';
import './legal.css';

const LEGAL_PAGES = [
  { href: '/privacy-policy', label: 'Privacy Policy', icon: 'fa-user-shield' },
  { href: '/terms-of-service', label: 'Terms of Service', icon: 'fa-file-contract' },
  { href: '/refund-policy', label: 'Refund & Cancellation Policy', icon: 'fa-rotate-left' },
  { href: '/affiliate-disclosure', label: 'Affiliate Disclosure', icon: 'fa-handshake' },
  { href: '/cookie-policy', label: 'Cookie Policy', icon: 'fa-cookie-bite' },
  { href: '/disclaimer', label: 'Disclaimer', icon: 'fa-triangle-exclamation' },
];

export default function LegalPageLayout({ title, tag = 'Legal', icon = 'fa-scale-balanced', lastUpdated, markdown }) {
  const toc = extractToc(markdown);

  return (
    <>
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-hero-icon"><i className={`fa-solid ${icon}`}></i></div>
          <span className="legal-hero-tag">{tag}</span>
          <h1>{title}</h1>
          <p>Last updated: {lastUpdated || 'June 2026'}</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-layout">
          <aside className="legal-sidebar">
            <div className="legal-sidebar-card">
              <h5>On this page</h5>
              <ul className="legal-toc">
                {toc.map(item => (
                  <li key={item.id}><a href={`#${item.id}`}>{item.text}</a></li>
                ))}
              </ul>
            </div>
            <div className="legal-sidebar-card legal-nav-card">
              <h5>Legal &amp; Policies</h5>
              <ul className="legal-cross-nav">
                {LEGAL_PAGES.map(p => (
                  <li key={p.href}>
                    <Link href={p.href} className={p.label === title ? 'active' : ''}>
                      <i className={`fa-solid ${p.icon}`}></i> {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="legal-panel glass-panel">
            <MarkdownContent markdown={markdown} />
          </div>
        </div>
      </section>
    </>
  );
}
