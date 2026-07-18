Exit code: 0
Wall time: 0.6 seconds
Output:
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NovelPage from "./pages/NovelPage";
import ContentNotesPage from "./pages/ContentNotesPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFoundPage from "./pages/NotFoundPage";
import RankQuizPage from "./pages/RankQuizPage";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SiteHeader />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/novel" element={<NovelPage />} />
            <Route path="/the-order" element={<RankQuizPage />} />
            <Route path="/content-notes" element={<ContentNotesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;

