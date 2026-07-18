Exit code: 0
Wall time: 0.6 seconds
Output:
import { usePageMeta } from '../components/SiteChrome';

export default function PrivacyPage() {
  usePageMeta('Privacy | We Burned, Quietly', 'Privacy information for the We Burned, Quietly website.');
  return <article className="page-shell reading-width privacy-page">
    <header className="policy-intro">
      <p className="eyebrow">Privacy</p>
      <h1>A quiet approach to your information</h1>
      <p className="lead">This website is designed to collect as little information as possible. You can explore it without creating an account.</p>
    </header>
    <div className="policy-stack">
      <section>
        <p className="eyebrow">01 / Newsletter</p>
        <h2>Chapter One and book news</h2>
        <p>If you choose to receive Chapter One, the form is supplied by MailerLite. MailerLite processes the details you submit to send the chapter and occasional book news. Every newsletter includes an unsubscribe link.</p>
      </section>
      <section>
        <p className="eyebrow">02 / Analytics and cookies</p>
        <h2>No advertising tracker</h2>
        <p>This site does not add a separate analytics or advertising tracker in its source. If that changes, this notice and any required consent controls will be updated before they are enabled.</p>
      </section>
      <section>
        <p className="eyebrow">03 / Your choices</p>
        <h2>Access or deletion requests</h2>
        <p>For requests related to a newsletter subscription, use the unsubscribe link in the relevant email. You may also contact the author directly for further help.</p>
      </section>
    </div>
  </article>;
}

