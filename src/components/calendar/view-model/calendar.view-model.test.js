import { startOfCalendar, endOfCalendar } from './calendar.view-model';

describe('startOfCalendar', () => {
  it('gives start of calendar when in same month', () => {
    // July 2018 first calendar weekday is 1. July
    const d = startOfCalendar(new Date(2018, 6, 1));
    expect(d.getDate()).toBe(1);
    expect(d.getMonth()).toBe(6);
    expect(d.getFullYear()).toBe(2018);
  });

  it('gives start of calendar when in previous month', () => {
    // March 2019 first calendar weekday is 24. Feb
    const d = startOfCalendar(new Date(2019, 2, 1));
    expect(d.getDate()).toBe(24);
    expect(d.getMonth()).toBe(1);
    expect(d.getFullYear()).toBe(2019);
  });
});

describe('endOfCalendar', () => {
  it('gives end of calendar when in same month', () => {
    // Dec 2016 last calendar weekday is 31. Dec
    const d = endOfCalendar(new Date(2016, 11, 1));
    expect(d.getDate()).toBe(31);
    expect(d.getMonth()).toBe(11);
    expect(d.getFullYear()).toBe(2016);
  });

  it('gives end of calendar when in next month', () => {
    // March 2019 last calendar weekday is 6. April
    const d = endOfCalendar(new Date(2019, 2, 1));
    expect(d.getDate()).toBe(6);
    expect(d.getMonth()).toBe(3);
    expect(d.getFullYear()).toBe(2019);
  });
});
