Exit code: 0
Wall time: 0.6 seconds
Output:
const score = (lamb, vessel, instrument, ascendant, claimed) => ({ lamb, vessel, instrument, ascendant, claimed });

export const rankDefinitions = {
  lamb: {
    name: 'Lamb',
    description: 'The first name in the Order record. Watchful, untested, and still learning what obedience asks of a person.',
  },
  vessel: {
    name: 'Vessel',
    description: 'A keeper of burdens. You move carefully through the world, attentive to what others cannot carry alone.',
  },
  instrument: {
    name: 'Instrument',
    description: 'A precise hand in the institutional record: observant, deliberate, and difficult to read.',
  },
  ascendant: {
    name: 'Ascendant',
    description: 'A figure at the threshold, looking beyond the walls while still carrying their shadow.',
  },
  claimed: {
    name: 'Claimed',
    description: 'A name written in red. The Order believes it has made a claim; the record leaves the rest unanswered.',
  },
};

const prompts = [
  ['You are ill, but the day\'s duties demand your presence. A superior looks you over but says nothing.', ['Push through the pain without hesitation.', 'Complete the work but rest when unseen.', 'Ask for permission to step aside.', 'Withdraw without asking.']],
  ['Your Vessel orders you to kneel in the snow until sunrise for â€œpurification.â€', ['Obey without question until dismissed.', 'Obey, but quietly count the minutes until relief.', 'Ask for mercy once, then resume kneeling.', 'Stand and leave before frostbite sets in.']],
  ['A fellow student struggles to keep up with the day\'s tasks.', ['Report his weakness to your superior.', 'Take over some of his work without telling anyone.', 'Give him advice quietly, but nothing more.', 'Ignore him entirely; it is not your burden.']],
  ['An Instrument orders you to punish another student.', ['Obey with precision, neither joy nor hesitation.', 'Obey, but hold back your full strength.', 'Refuse openly, accepting the consequences.', 'Pretend to obey but let the blows fall harmlessly.']],
  ['You overhear a rumour about a superior that could cause unrest.', ['Report it immediately to the nearest higher rank.', 'Keep it to yourself; knowledge is power.', 'Spread it quietly to test reactions.', 'Confront the superior to see if it is true.']],
  ['In the dormitories at night, you hear whispers from behind a door you were told never to enter.', ['Knock and request entry.', 'Report the voices to your superior.', 'Listen quietly to learn more.', 'Walk away without a sound.']],
  ['You are offered a rare indulgence: sweet fruit and warm bread.', ['Accept graciously, thanking the Sun.', 'Accept, but share with another.', 'Refuse; comfort dulls devotion.', 'Take it before it can be withdrawn.']],
  ['You are confined to your quarters for disobedience.', ['Wait silently for orders to change.', 'Pass the time in quiet thought.', 'Attempt to speak to someone through the walls.', 'Test the lock when no one is near.']],
  ['You are chosen to assist a high-ranking member. Midway, you forget an important instruction.', ['Improvise quietly to keep things moving.', 'Freeze and wait for correction.', 'Whisper to another for guidance.', 'Continue boldly, even if it is wrong.']],
  ['You are told you will never leave the Order. Your first thought is:', ['Gratitude: the Sun has claimed you.', 'Acceptance: there is no life beyond these walls.', 'Fear: what of the world outside?', 'Defiance: one day, you will escape.']],
];

const scoring = [
  [score(3, 2, 3, 2, 1), score(2, 3, 1, 3, 2), score(2, 1, 0, 1, 3), score(0, 0, 0, 2, 1)],
  [score(3, 2, 3, 1, 2), score(2, 3, 2, 3, 1), score(2, 1, 1, 2, 3), score(0, 0, 0, 3, 0)],
  [score(1, 3, 3, 2, 1), score(3, 1, 0, 1, 2), score(2, 2, 1, 3, 3), score(1, 2, 3, 2, 1)],
  [score(3, 2, 3, 3, 1), score(2, 3, 1, 2, 3), score(1, 0, 0, 1, 2), score(2, 1, 0, 2, 2)],
  [score(2, 3, 3, 2, 1), score(1, 2, 1, 3, 2), score(0, 1, 0, 2, 3), score(1, 0, 2, 1, 1)],
  [score(1, 0, 2, 2, 3), score(2, 3, 3, 1, 1), score(1, 2, 1, 3, 2), score(3, 1, 2, 2, 2)],
  [score(3, 2, 1, 2, 3), score(2, 1, 0, 3, 2), score(2, 3, 3, 1, 0), score(0, 0, 1, 0, 1)],
  [score(3, 2, 2, 1, 2), score(2, 3, 1, 3, 3), score(1, 1, 0, 2, 1), score(0, 0, 1, 2, 0)],
  [score(1, 3, 2, 3, 2), score(3, 1, 1, 1, 3), score(2, 2, 0, 2, 2), score(0, 1, 3, 2, 1)],
  [score(3, 2, 2, 1, 3), score(2, 3, 3, 2, 2), score(2, 1, 0, 1, 2), score(0, 0, 1, 3, 0)],
];

export const rankQuizQuestions = prompts.map(([prompt, answers], index) => ({
  id: index + 1,
  prompt,
  answers: answers.map((label, answerIndex) => ({ label, scores: scoring[index][answerIndex] })),
}));

export function calculateRank(answers) {
  const totals = Object.keys(rankDefinitions).reduce((all, rank) => ({ ...all, [rank]: 0 }), {});
  answers.forEach((answer) => {
    Object.entries(answer.scores).forEach(([rank, value]) => { totals[rank] += value; });
  });
  return Object.keys(rankDefinitions).reduce((current, rank) => (totals[rank] > totals[current] ? rank : current), 'lamb');
}

