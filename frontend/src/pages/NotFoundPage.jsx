Exit code: 0
Wall time: 0.6 seconds
Output:
import { Link } from 'react-router-dom';
import { usePageMeta } from '../components/SiteChrome';
export default function NotFoundPage() { usePageMeta('Page not found | We Burned, Quietly', 'The requested page could not be found.'); return <main className="page-shell reading-width not-found"><p className="eyebrow">404</p><h1>This record is missing.</h1><p>The page you requested is not part of the public site.</p><Link className="button button-primary" to="/">Return to the novel</Link></main>; }

