import { ReleaseActions, usePageMeta } from '../components/SiteChrome';
import ReaderAttribution from '../components/ReaderAttribution';
import { book } from '../site/siteData';

const earlyReaderNotes = [
  { key: 'characters', country: 'uk', lines: ['The characters are', 'complex, human,', 'and multi-faceted.'], paper: { issue: 'N. 11', date: '16 marzo 1980', headline: 'La disoccupazione giovanile interpella la Chiesa' } },
  { key: 'luca', country: 'us', lines: ['Luca’s voice feels', 'consistent and lived-in,', 'and his emotional journey carries the weight of the story from beginning to end.'], paper: { issue: 'N. 34', date: '5 settembre 1982', headline: 'La tromba di Solidarnosc' } },
  { key: 'world', country: 'de', lines: ['It is a world that feels', 'ancient and predatory', 'before anyone even does anything threatening. That’s hard to pull off.'], paper: { issue: 'N. 25', date: '21 giugno 1981', headline: 'Un coro per la vita' } },
  { key: 'tension', country: 'us', lines: ['The bones are solid.', 'The voice is distinctive.', 'The tension is real.'], paper: { issue: 'N. 20', date: '17 maggio 1981', headline: 'Attentato a Giovanni Paolo II' } },
];

export default function NovelPage() {
  usePageMeta('The Novel | We Burned, Quietly', 'Discover We Burned, Quietly, a gothic literary novel by Vladimir Fischer.');

  return <article className="page-shell novel-page">
    <div className="page-intro">
      <p className="eyebrow">The novel</p>
      <h1>{book.title}</h1>
      <p className="byline">A debut novel by {book.author}</p>
      <p className="release-line">{book.releaseDisplay}</p>
    </div>

    <div className="novel-layout">
      {book.coverImage ? <img className="detail-cover" src={book.coverImage} alt="Cover of We Burned, Quietly by Vladimir Fischer" /> : <div className="detail-cover publication-folio" aria-label="Publication artwork will be announced separately"><strong>1979</strong><span>Val di Non</span><small>Publication artwork<br />to be announced</small></div>}
      <div className="prose">
        <h2>In the shadow of the Dolomites</h2>
        <p>{book.premise}</p>
        <p>Luca Altomare is sent to the Ordo Solis, a mountain academy that promises protection and excellence at the cost of the self. There, hierarchy becomes theology, surveillance becomes care, and the smallest private act can be made into a confession.</p>
        <p>This is a spoiler-safe introduction. Format, ISBN, and retailer information will appear here only when verified.</p>
        <ReleaseActions />
      </div>
    </div>

    <section id="early-reader-notes" className="reader-testimonials reader-testimonials-full" aria-labelledby="early-reader-notes-title">
      <div className="testimonials-intro">
        <div className="testimonials-heading-copy">
          <h2 id="early-reader-notes-title">What early readers are saying</h2>
          <p>First impressions from readers of the manuscript.</p>
        </div>
      </div>
      <div className="testimonial-grid">
        {earlyReaderNotes.map((note) => <figure className={`testimonial-card testimonial-card-${note.key}`} key={note.key}>
          <div className="testimonial-newsprint" aria-hidden="true">
            <span className="newsprint-masthead">vita trentina</span>
            <span className="newsprint-issue">{note.paper.issue} · Trento, {note.paper.date}</span>
            <strong>{note.paper.headline}</strong>
            <span className="newsprint-columns">SETTIMANALE DIOCESANO DI INFORMAZIONE · CRONACA · SOCIETÀ · LAVORO · CULTURA</span>
          </div>
          <blockquote>“{note.lines.join(' ')}”</blockquote>
          <ReaderAttribution country={note.country} />
        </figure>)}
      </div>
    </section>

    <section id="editions" className="quiet-panel">
      <p className="eyebrow">Publication</p>
      <h2>Edition details will be announced here.</h2>
      <p>There are no retailer links or format claims on this page until they are confirmed.</p>
    </section>
  </article>;
}
