Exit code: 0
Wall time: 0.6 seconds
Output:
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../components/SiteChrome';
import { calculateRank, rankDefinitions, rankQuizQuestions } from '../content/rankQuiz';
import lambSun from '../assets/rank-cards/lamb.png';
import vesselSun from '../assets/rank-cards/vessel.png';
import instrumentSun from '../assets/rank-cards/instrument.png';
import ascendantSun from '../assets/rank-cards/ascendant.png';
import claimedSun from '../assets/rank-cards/claimed.png';

const rankCards = { lamb: lambSun, vessel: vesselSun, instrument: instrumentSun, ascendant: ascendantSun, claimed: claimedSun };

export default function RankQuizPage() {
  usePageMeta('The Order | We Burned, Quietly', 'A spoiler-safe fictional rank assessment from the world of We Burned, Quietly.');
  const [answers, setAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [result, setResult] = useState(null);
  const question = rankQuizQuestions[questionIndex];

  const chooseAnswer = (answer) => {
    const nextAnswers = [...answers, answer];
    if (questionIndex === rankQuizQuestions.length - 1) {
      setAnswers(nextAnswers);
      setResult(calculateRank(nextAnswers));
      return;
    }
    setAnswers(nextAnswers);
    setQuestionIndex(questionIndex + 1);
  };

  const goBack = () => {
    if (!questionIndex) return;
    setAnswers(answers.slice(0, -1));
    setQuestionIndex(questionIndex - 1);
  };

  const restart = () => {
    setAnswers([]);
    setQuestionIndex(0);
    setResult(null);
  };

  if (result) {
    const rank = rankDefinitions[result];
    return <article className="rank-quiz-page page-shell">
      <section className="rank-quiz-result" aria-labelledby="rank-result-title">
        <div className="rank-result-copy">
          <p className="eyebrow">The Order has answered</p>
          <h1 id="rank-result-title">The record names you: <em>{rank.name}</em>.</h1>
          <p>{rank.description}</p>
          <p className="fine-print">A fictional, spoiler-safe assessment from the world of <em>We Burned, Quietly</em>.</p>
          <div className="rank-quiz-actions"><Link to="/#pocket-guide" className="button button-primary">Receive Chapter One</Link><button type="button" className="button button-secondary" onClick={restart}>Begin again</button></div>
        </div>
        <figure className={`rank-seal-card rank-seal-${result}`}>
          <img src={rankCards[result]} alt={`The Ordo Solis sun for the ${rank.name} rank`} />
          <figcaption>{rank.name}</figcaption>
        </figure>
      </section>
    </article>;
  }

  return <article className="rank-quiz-page page-shell">
    <section className="rank-quiz" aria-labelledby="quiz-title">
      <div className="rank-quiz-intro"><p className="eyebrow">Ordo Solis / private assessment</p><h1 id="quiz-title">Which name would the Order give you?</h1><p>A fictional, spoiler-safe encounter with the ranks of <em>We Burned, Quietly</em>. There are no correct answers.</p></div>
      <div className="quiz-progress" aria-label={`Question ${questionIndex + 1} of ${rankQuizQuestions.length}`}><span>Record {String(questionIndex + 1).padStart(2, '0')} / {String(rankQuizQuestions.length).padStart(2, '0')}</span><div className="quiz-progress-track"><span style={{ width: `${((questionIndex + 1) / rankQuizQuestions.length) * 100}%` }} /></div></div>
      <section className="quiz-question" aria-live="polite"><p className="eyebrow">Question {questionIndex + 1}</p><h2>{question.prompt}</h2><div className="quiz-answers">{question.answers.map((answer, index) => <button type="button" className="quiz-answer" key={answer.label} onClick={() => chooseAnswer(answer)}><span>{String.fromCharCode(65 + index)}</span>{answer.label}</button>)}</div></section>
      <button type="button" className="text-link quiz-back" onClick={goBack} disabled={!questionIndex}>Back to the previous record</button>
    </section>
  </article>;
}

