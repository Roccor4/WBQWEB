import { useSyncExternalStore } from 'react';

// Midnight in Prague on publication day (CET).
export const retailLaunchTime = Date.parse('2026-11-20T00:00:00+01:00');
export const amazonBook = 'https://www.amazon.com/dp/B0HQ5MST1G';
export const goodreadsBook = 'https://www.goodreads.com/book/show/263076111-we-burned-quietly';

const isLaunchDay = () => Date.now() >= retailLaunchTime;

function subscribe(notify) {
  let timer;
  function check() {
    clearTimeout(timer);
    notify();
    const remaining = retailLaunchTime - Date.now();
    if (remaining > 0) timer = setTimeout(check, Math.min(remaining, 2147483647));
  }
  check();
  window.addEventListener('pageshow', check);
  document.addEventListener('visibilitychange', check);
  return () => {
    clearTimeout(timer);
    window.removeEventListener('pageshow', check);
    document.removeEventListener('visibilitychange', check);
  };
}

export default function useRetailLaunch() {
  return useSyncExternalStore(subscribe, isLaunchDay, () => false);
}
