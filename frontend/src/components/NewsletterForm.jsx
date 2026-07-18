­r‡^Ñf¥–Ø¦{NlyÊ'vÃ®¶›­import { useEffect } from 'react';

const mailerLiteScript = 'https://assets.mailerlite.com/js/universal.js?v=2';

export default function NewsletterForm() {
  useEffect(() => {
    if (!document.querySelector(`script[src="${mailerLiteScript}"]`)) {
      const script = document.createElement('script');
      script.async = true;
      script.src = mailerLiteScript;
      document.head.appendChild(script);
    }
    window.ml = window.ml || function queueMailerLite() { (window.ml.q = window.ml.q || []).push(arguments); };
    window.ml('account', '1707528');
  }, []);

  return <section id="pocket-guide" className="newsletter-panel" aria-labelledby="pocket-guide-heading">
    <div>
      <p className="eyebrow">A private reading</p>
      <h2 id="pocket-guide-heading">Sign up to read Chapter One</h2>
      <p>Before the cover is revealed, receive <em>The Day I Was Renamed</em>: the opening chapter of <em>We Burned, Quietly</em>.</p>
      <p className="fine-print">You will also receive occasional correspondence and release news from Vladimir Fischer. The chapter is delivered privately; unsubscribe at any time.</p>
    </div>
    <div className="signup-area">
      <div className="ml-embedded" data-form="Tu5Stx" aria-live="polite" />
      <p className="fine-print">If the form does not appear, <a href="https://preview.mailerlite.io/forms/1707528/161992586618209765/share" target="_blank" rel="noreferrer">open the chapter sign-up page</a>.</p>
    </div>
  </section>;
}
