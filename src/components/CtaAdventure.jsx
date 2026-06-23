import Link from 'next/link';
import Image from 'next/image';

export default function CtaAdventure({
  heading = <>Ready For Your<br />Next Adventure?</>,
  subtext = 'Search, compare, and book flights at the best rates. Affordable travel, trusted airlines.',
  btnLabel = 'Book Flight Tickets',
  btnHref = '/',
  btnIcon = 'fa-solid fa-plane',
}) {
  return (
    <section className="cta-adventure">
      <div className="cta-banner reveal-scale">
        <div className="cta-content">
          <h2>{heading}</h2>
          <p>{subtext}</p>
          <Link href={btnHref} className="btn btn-primary">
            {btnLabel} <i className={btnIcon}></i>
          </Link>
        </div>
        <div className="cta-visual">
          <Image
            src="/images/IMG_5238.png"
            alt="ARLinks Airplane"
            className="cta-plane"
            width={580}
            height={350}
            style={{ width: '130%', height: 'auto', objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );
}
