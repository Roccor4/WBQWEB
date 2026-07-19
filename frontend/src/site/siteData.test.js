import { book, releaseActions } from './siteData';

describe('release state', () => {
  test('keeps the public site in teaser phase with the intended conversion path', () => {
    expect(book.phase).toBe('teaser');
    expect(releaseActions[book.phase].primary).toEqual({ label: 'Sign up to read Chapter One', to: '/#pocket-guide' });
    expect(releaseActions[book.phase].secondary).toEqual({ label: 'Take the Rank Quiz', to: '/the-order' });
  });

  test('defines a primary action for every supported release phase', () => {
    ['teaser', 'preorder', 'launch'].forEach((phase) => {
      expect(releaseActions[phase].primary.label).toBeTruthy();
      expect(releaseActions[phase].primary.to).toBeTruthy();
    });
  });
});
