import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NewsletterForm from '../components/NewsletterForm';
import { ReleaseActions, usePageMeta } from '../components/SiteChrome';
import { book } from '../site/siteData';
import orderSunMark from '../assets/ordo-solis-sun-seal.webp';
import heroPoster from '../assets/val-di-non-clouds-poster.jpg';

export default function HomePage() {
  const location = useLocation();
  usePageMeta('We Burned, Quietly | A Gothic Literary Novel by Vladimir Fischer', 'We Burned, Quietly is a gothic literary novel set beneath the Dolomites in 1979, where an elite academy turns obedience into faith and tenderness into evidence.');
  useEffect(() => { if (location.hash) document.querySelector(location.hash)?.scrollIntoView(); }, [location.hash]);

  return <>
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-video" src={heroPoster} alt="" aria-hidden="true" />
      <div className="hero-topography" aria-hidden="true">
        <span className="topography-label">Val di Non / 1979</span>
        <span className="hero-year">1979</span>
        <img className="hero-order-mark" src={orderSunMark} alt="" />
      </div>
      <div className="hero-copy">
        <p className="eyebrow">{book.eyebrow}</p>
        <h1 id="hero-title">{book.title}</h1>
        <p className="byline">A novel by {book.author}</p>
        <p className="hero-premise">{book.premise}</p>
        <p className="release-line">{book.releaseDisplay}</p>
        <ReleaseActions />
        <p className="inscription">The Sun burns away the unworthy.</p>
      </div>
      <div className="hero-dossier" aria-label="Publication details">
        <div className="dossier-rule" aria-hidden="true" />
        <p className="dossier-kicker">Ordo Solis / reader dossier</p>
        <p className="dossier-place">Northern Italy<br />Winter, 1979</p>
        <div className="dossier-index" aria-hidden="true"><span>01</span><span>1979</span><span>VDF</span></div>
        <p className="dossier-note">The cover remains under seal.</p>
        <Link className="dossier-link" to="/#pocket-guide">Sign up for the reveal notice <span aria-hidden="true">→</span></Link>
      </div>
    </section>

    <section className="intro-section section-grid" aria-labelledby="novel-intro-title">
      <p className="eyebrow">The novel <img className="intro-seal" src={orderSunMark} alt="" aria-hidden="true" /></p>
      <div><h2 id="novel-intro-title">A school that remakes its boys in the image of the Sun.</h2></div>
      <div className="prose"><p>Luca Altomare arrives at the Ordo Solis carrying a family name already marked by silence. In the compound’s cold corridors, every gesture is watched, every attachment made dangerous, and the past becomes another instrument of control.</p><p>Set against the mountains of northern Italy, <em>We Burned, Quietly</em> is a literary novel about memory, indoctrination, and the forms of tenderness that refuse to become evidence.</p><Link className="text-link" to="/novel">Discover the novel <span aria-hidden="true">→</span></Link></div>
    </section>

    <section className="reading-invitation" aria-labelledby="reading-title">
      <div><p className="eyebrow">A private reading</p><h2 id="reading-title">Sign up to read Chapter One.</h2><p>Enter the winter of 1979 with Luca Altomare, as the road leaves Milan and the mountains close around him.</p></div>
      <Link className="button button-primary" to="/#pocket-guide">Receive Chapter One</Link>
    </section>

    <NewsletterForm />

    <section id="author" className="author-section author-profile" aria-labelledby="author-title"><div><p className="eyebrow">The author</p><h2 id="author-title">Vladimir Fischer</h2></div><div className="prose"><p>Vladimir Fischer writes literary fiction shaped by history, silence, faith, and the emotional afterlife of institutions. <em>We Burned, Quietly</em> is his gothic literary novel of late-1970s northern Italy.</p><a className="text-link" href="https://vladimirfischer.wordpress.com/" target="_blank" rel="noreferrer">Visit the author website <span aria-hidden="true">↗</span></a></div></section>
  </>;
}
