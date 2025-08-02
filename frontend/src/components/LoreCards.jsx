import React, { useState } from 'react';
import './LoreCards.css';

const LoreCards = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (cardId) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const charactersData = [
    {
      id: 'luca',
      name: 'Lucian',
      image: 'https://customer-assets.emergentagent.com/job_60806795-f832-4de7-acd6-95f75d4caccc/artifacts/h16jsz3o_Luca%20Altomare.png',
      lore: `Seventeen years old when his mother signed him away, Lucian entered the gates of the Ordo Solis carrying a name already heavy with shame. The son of a vanished father with fascist ties and a mother who retreated into silence, he arrives in the Dolomite compound as a Lamb—stripped of his past, bound to obedience, and watched by a world that speaks only in ritual. Intelligent, reserved, and quietly defiant, Lucian navigates the Order's brutal hierarchy of Vessels, Instruments, and Ascendants under the gaze of the Four Pillars. In the beginning, survival means learning the rules; later, it means deciding which part of himself he can afford to keep. Through cold corridors, orchestrated silences, and moments of forbidden connection, Lucian becomes both subject and witness to the unmaking of boys into instruments of power—while wrestling with the question of whether obedience will save him, or destroy him.`
    },
    {
      id: 'leandro',
      name: 'Leandro',
      image: 'https://customer-assets.emergentagent.com/job_60806795-f832-4de7-acd6-95f75d4caccc/artifacts/igpzfhsa_Leandro.png',
      lore: `Once a defiant street fighter with nothing to lose, Leandro has been forged by the Ordo Solis into a Vessel—responsible for shaping and controlling a younger boy, a Lamb. He moves with the calm precision of someone who knows every rule by heart, wearing obedience like a second skin. To Lucian, he is both warden and lifeline: the one who teaches him how to survive the Order's rituals, and the one whose silences wound deeper than any punishment. Beneath his disciplined exterior lies a boy tempered by loss, his youth spent in the custody of those who value loyalty over love. Whether his quiet acts of care are rebellion or simply another form of obedience is a question Lucian cannot answer—only that in the cold halls of the Order, he walks in Leandro's shadow, and somehow, that feels safer than walking alone.`
    },
    {
      id: 'cassian',
      name: 'Cassian',
      image: 'https://customer-assets.emergentagent.com/job_60806795-f832-4de7-acd6-95f75d4caccc/artifacts/v3egq7zb_Cassian.png',
      lore: `Once the model Lamb—immaculate uniform, flawless discipline—Cassian moved through the halls of the Order like carved marble brought to life. His ice‑blue gaze and perfect composure masked the scars of a boy passed from house to house, never belonging, learning early that survival meant becoming exactly what was demanded. To most, he was ambition incarnate; to those who looked closer, he was a soldier searching for a war worth fighting. Behind the rigid posture lay a restless spirit, drawn to whispers of rebellion yet bound by the architecture of the system he once worshipped. Cassian could be smoke or fire depending on the moment—an informant in one breath, an unshakable ally in the next.`
    },
    {
      id: 'maelis',
      name: 'Maelis',
      image: 'https://customer-assets.emergentagent.com/job_60806795-f832-4de7-acd6-95f75d4caccc/artifacts/tadqorp1_Maelis.png',
      lore: `French‑born and effortlessly poised, Maelis carries himself with the quiet elegance of someone who refuses to be hurried by the world. He speaks softly, as if every word must first pass a private gate, yet there is a spark in him that draws people closer — and keeps them guessing. In the Order's rigid world, he is both refuge and riddle, offering steadiness without surrender, warmth without confession.`
    },
    {
      id: 'philosopher',
      name: 'The Philosopher',
      image: 'https://customer-assets.emergentagent.com/job_burned-quietly-2/artifacts/tvltioua_Philosopher%20%282%29.png',
      lore: `To the Ordo Solis, he is the Pillar of Thought, Word, and Identity—the one who shapes belief itself. To Lucian, he is something more complicated: a shadow from his family's past, a man who claims him as a personal "experiment." Immaculate in dress and deliberate in speech, the Philosopher wields intimacy as a weapon, folding trust and doubt into the same hand. He is neither the Order's loudest voice nor its most feared enforcer; instead, he is its architect of persuasion, the one who makes the impossible seem natural and the unbearable feel ordained. His presence is never accidental, his kindness never without cost. In his world, truth is fluid, loyalty is cultivated like a rare plant—and every boy, no matter how guarded, carries a thread he knows how to pull.`
    }
  ];

  return (
    <section className="lore-cards-section">
  {/* Video background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="lore-video-background"
  >
    <source src="https://videos.pexels.com/video-files/9694808/9694808-hd_1920_1080_25fps.mp4" type="video/mp4" />
  </video>

  {/* Overlay to keep text readable */}
  <div className="lore-overlay"></div>

  {/* Intro text */}
  <div className="lore-intro">
    <p className="intro-text">
      Knowledge is the first spark of rebellion.<br />
      You may open these cards.<br />
      You may regret it...
    </p>
  </div>

  {/* Cards */}
  <div className="lore-cards-container">
    {charactersData.map((character) => (
      <div
        key={character.id}
        className={`lore-card ${flippedCards[character.id] ? 'flipped' : ''}`}
        onClick={() => handleCardClick(character.id)}
      >
        <div className="card-inner">
          {/* Front */}
          <div className="card-front">
            <div className="card-image-container">
              <img
                src={character.image}
                alt={character.name}
                className="character-portrait"
              />
              <div className="character-name-overlay">
                <h3 className="character-name">{character.name}</h3>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="card-back">
            <div className="card-back-content">
              <h3 className="character-name-back">{character.name}</h3>
              <div className="lore-text-container">
                <p className="lore-text">{character.lore}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
  );
};

export default LoreCards;