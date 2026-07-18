export const siteUrl = process.env.REACT_APP_SITE_URL || 'https://weburnedquietly.com';

export const book = {
  phase: 'teaser',
  title: 'We Burned, Quietly',
  author: 'Vladimir Fischer',
  releaseDisplay: 'Coming November 2026',
  // The final eBook cover is embargoed until 20 October 2026.
  coverImage: null,
  eyebrow: 'A gothic literary novel',
  premise: '1979. Beneath the Dolomites, an elite academy teaches boys that obedience is salvation, tenderness is treason, and love is the easiest thing to weaponise.',
  shortDescription: 'A literary novel of indoctrination, memory, and the dangerous tenderness that survives inside a closed institution.',
  contentNotes: [
    'coercive control, indoctrination and institutional abuse',
    'religious manipulation and cult-like practices',
    'homophobia, internalised shame and identity-based humiliation',
    'emotional, psychological and physical violence',
    'suicide, death and grief',
    'food deprivation, starvation and physical decline',
    'confinement, punishment and threats of violence',
    'fire and destruction',
    'fascist history and authoritarian ideology',
  ],
};

export const readerTestimonials = [
  '“The characters are complex, human, and multi-faceted.”',
  '“Luca’s voice feels consistent and lived-in, and his emotional journey carries the weight of the story from beginning to end.”',
  '“It is a world that feels ancient and predatory before anyone even does anything threatening. That’s hard to pull off.”',
  '“The bones are solid. The voice is distinctive. The tension is real.”',
];

export const releaseActions = {
  teaser: {
    primary: { label: 'Sign up to read Chapter One', to: '/#pocket-guide' },
    secondary: { label: 'Take the Rank Quiz', to: '/the-order' },
  },
  preorder: {
    primary: { label: 'Preorder the Novel', to: '/novel#editions' },
    secondary: { label: 'Sign up to read Chapter One', to: '/#pocket-guide' },
  },
  launch: {
    primary: { label: 'Buy the Book', to: '/novel#editions' },
    secondary: { label: 'Receive Chapter One', to: '/#pocket-guide' },
  },
};

export const navItems = [
  { label: 'The Novel', to: '/novel' },
  { label: 'Quiz', to: '/the-order' },
  { label: 'Vladimir Fischer', to: '/#author' },
];
