import { usePageMeta } from '../components/SiteChrome';
import { book } from '../site/siteData';

export default function ContentNotesPage() {
  usePageMeta('Content Notes | We Burned, Quietly', 'Spoiler-light content notes for We Burned, Quietly.');
  return <article className="page-shell reading-width reader-notes-page">
    <header className="policy-intro">
      <p className="eyebrow">Reader care</p>
      <h1>Content notes</h1>
      <p className="lead"><em>We Burned, Quietly</em> explores coercion, identity, belief and survival within an abusive institution. These notes are here to support an informed choice without revealing major plot developments.</p>
    </header>
    <section className="content-notes-panel" aria-labelledby="content-notes-list-title">
      <p className="eyebrow" id="content-notes-list-title">The novel contains depictions or references to</p>
      <ul className="content-list">{book.contentNotes.map((note) => <li key={note}>{note}</li>)}</ul>
    </section>
    <p className="reader-note-closing">Some of these subjects are central to the novel and recur throughout the story. Readers seeking more detailed, spoiler-aware information are welcome to contact the author before reading.</p>
  </article>;
}
