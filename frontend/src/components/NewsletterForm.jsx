import { useEffect, useRef, useState } from 'react';

const mailerLiteScript = 'https://assets.mailerlite.com/js/universal.js?v=2';
const chapterSignupUrl = 'https://preview.mailerlite.io/forms/1707528/161992586618209765/share';

export default function NewsletterForm() {
  const embedMount = useRef(null);
  const [embedReady, setEmbedReady] = useState(false);

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

  useEffect(() => {
    const mount = embedMount.current;
    if (!mount) return undefined;

    const detectForm = () => {
      const renderedForm = mount.querySelector('.ml-form-embedContainer input[type="email"], .ml-form-embedContainer form, iframe');
      if (renderedForm) setEmbedReady(true);
    };

    detectForm();
    const observer = new MutationObserver(detectForm);
    observer.observe(mount, { childList: true, subtree: true });
    const retry = window.setInterval(detectForm, 500);

    return () => {
      observer.disconnect();
      window.clearInterval(retry);
    };
  }, []);

  const openHostedForm = (event) => {
    event.preventDefault();
    window.open(chapterSignupUrl, '_blank', 'noopener,noreferrer');
  };

  return <section id="pocket-guide" className="newsletter-panel" aria-labelledby="pocket-guide-heading">
    <div>
      <p className="eyebrow">Newsletter sign-up</p>
      <h2 id="pocket-guide-heading">Sign up to read Chapter One</h2>
      <p>Before the cover is revealed, receive <em>The Day I Was Renamed</em>: the opening chapter of <em>We Burned, Quietly</em>.</p>
      <p className="fine-print">You will also receive occasional correspondence and release news from Vladimir Fischer. The chapter is delivered privately; unsubscribe at any time.</p>
    </div>
    <div className={`signup-area ${embedReady ? 'signup-area-ready' : 'signup-area-fallback'}`}>
      <div className="mailerlite-mount" ref={embedMount} aria-live="polite"><div className="ml-embedded" data-form="Tu5Stx" /></div>
      {!embedReady && <form className="newsletter-fallback" onSubmit={openHostedForm}>
        <label className="sr-only" htmlFor="chapter-signup-email">Email address</label>
        <input id="chapter-signup-email" type="email" autoComplete="email" placeholder="Email" required />
        <button className="button button-primary" type="submit">Continue to secure sign-up</button>
        <p className="fine-print">The secure MailerLite form will open in a new tab.</p>
      </form>}
      <p className="fine-print">If the form does not appear, <a href={chapterSignupUrl} target="_blank" rel="noreferrer">open the chapter sign-up page</a>.</p>
    </div>
  </section>;
}
