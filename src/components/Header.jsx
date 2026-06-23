'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { href: '/',             label: 'Home' },
    { href: '/about',        label: 'About' },
    { href: '/services',     label: 'Services' },
    { href: '/travel',       label: 'Travel' },
    { href: '/opportunities',label: 'Opportunities' },
    { href: '/engagement',   label: 'Engagement' },
  ];

  function isActive(href) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  return (
    <>
      <header id="main-header" className={isSticky ? 'sticky' : ''}>
        <Link href="/" className="logo-container">
          <Image src="/images/logo.png" alt="ARLinks Logo" id="header-logo" width={160} height={40} style={{ width: 'auto', height: '40px' }} priority />
        </Link>

        <nav id="nav-menu" className={menuOpen ? 'active' : ''}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className={isActive(link.href) ? 'active' : ''}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary nav-contact-btn">Contact Us</Link>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search"><i className="fa-solid fa-magnifying-glass"></i></button>
          <button className="icon-btn" aria-label="Language"><i className="fa-solid fa-globe"></i></button>
          <Link href="/contact" className="btn btn-primary" id="header-register-btn">Contact Us</Link>
          <button
            className="mobile-menu-toggle"
            id="menu-toggle-btn"
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
          </button>
        </div>
      </header>

      <div
        className={`menu-overlay${menuOpen ? ' active' : ''}`}
        id="menu-overlay"
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}