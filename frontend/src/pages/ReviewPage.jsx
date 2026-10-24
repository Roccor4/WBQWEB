import { usePageMeta } from '../components/SiteChrome';
import { reviewLinks } from '../site/reviewLinks';

export default function ReviewPage() {
  usePageMeta('Leave an honest review | We Burned, Quietly', 'Share your thoughts on We Burned, Quietly by Vladimir Fischer.');
  return <article className="page-shell reading-width privacy-page">
    <header className="policy-intro">
      <p className="eyebrow">We Burned, Quietly</p>
      <h1>A few words, honestly.</h1>
      <p className="lead">Thank you for spending time with Luca and his story.</p>
    </header>
    <div className="policy-stack">
      <section>
        <h2>Leave an honest review</h2>
        <p>If you have read the novel, a few words can help another reader decide whether it belongs on their shelf. Your honest response is welcome, whatever it may be.</p>
        <div className="release-actions">
          <a className="button button-primary" href={reviewLinks.goodreads} target="_blank" rel="noopener noreferrer">Review on Goodreads</a>
          {reviewLinks.amazon && <a className="button button-secondary" href={reviewLinks.amazon} target="_blank" rel="noopener noreferrer">Review on Amazon</a>}
        </div>
        <p>Reviewing is entirely optional. No purchase, sign-up or review is required by this website. The review platform may ask you to sign in and applies its own rules.</p>
      </section>
    </div>
  </article>;
}
