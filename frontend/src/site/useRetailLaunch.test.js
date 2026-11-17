import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import useRetailLaunch, { retailLaunchTime } from './useRetailLaunch';

test('switches an already-open page at midnight in Prague', () => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2026-11-19T22:59:59Z'));
  const host = document.createElement('div');
  const root = createRoot(host);
  const original = globalThis.IS_REACT_ACT_ENVIRONMENT;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  function Probe() { return useRetailLaunch() ? 'released' : 'waiting'; }
  try {
    act(() => root.render(<Probe />));
    expect(host.textContent).toBe('waiting');
    expect(retailLaunchTime).toBe(Date.parse('2026-11-19T23:00:00Z'));
    act(() => jest.advanceTimersByTime(999));
    expect(host.textContent).toBe('waiting');
    act(() => jest.advanceTimersByTime(1));
    expect(host.textContent).toBe('released');
  } finally {
    act(() => root.unmount());
    globalThis.IS_REACT_ACT_ENVIRONMENT = original;
    jest.useRealTimers();
  }
});
