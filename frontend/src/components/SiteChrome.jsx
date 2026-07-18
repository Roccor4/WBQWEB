import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { book, navItems, releaseActions, siteUrl } from '../site/siteData';
import orderSunMark from '../assets/ordo-solis-sun-seal.webp';

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute('content', description);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `${siteUrl}${window.location.pathname}`);
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) { robots = document.createElement('meta'); robots.name = 'robots'; document.head.appendChild(robots); }
    robots.setAttribute('content', process.env.REACT_APP_ALLOW_INDEXING === 'false' ? 'noindex, nofollow' : 'index, follow');
  }, [title, description]);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="header-inner">
        <Link className="wordmark" to="/" aria-label="We Burned, Quietly home">
          <span className="wordmark-mark" aria-hidden="true"><img src={orderSunMark} alt="" /></span>
          <span>{book.title}</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
          <Link className="nav-cta" to={releaseActions[book.phase].primary.to}>{releaseActions[book.phase].primary.label}</Link>
        </nav>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close navigation' : 'Open navigation'}</span>
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
          <Link className="button button-primary" to={releaseActions[book.phase].primary.to}>{releaseActions[book.phase].primary.label}</Link>
        </nav>
      )}
    </header>
  );
}

export function ReleaseActions({ className = '' }) {
  const actions = releaseActions[book.phase];
  return <div className={`release-actions ${className}`}>
    <Link className="button button-primary" to={actions.primary.to}>{actions.primary.label}</Link>
    <Link className="button button-secondary" to={actions.secondary.to}>{actions.secondary.label}</Link>
  </div>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-lockup">
      <img className="footer-mark" src={orderSunMark} alt="" aria-hidden="true" />
      <p className="eyebrow">{book.title}</p>
      <p>A novel by {book.author}</p>
    </div>
    <div className="footer-links">
      <Link to="/novel">The Novel</Link><Link to="/the-order">Quiz</Link><Link to="/content-notes">Content notes</Link><Link to="/privacy">Privacy</Link>
    </div>
    <p className="footer-small">© {new Date().getFullYear()} Vladimir Fischer. All rights reserved.</p>
  </footer>;
}
