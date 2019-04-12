import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  getISOWeek,
  addDays,
  isSameMonth,
  isToday
} from 'date-fns';

export const monthTitles = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const dayTitles = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function startOfCalendar(date) {
  return startOfWeek(startOfMonth(date));
}

export function endOfCalendar(date) {
  return endOfWeek(endOfMonth(date));
}

export function getDayId(date) {
  return `${date.getFullYear()}_${date.getMonth()}_${date.getDate()}`;
}

export function createMonthCalendar(date) {
  let day = startOfCalendar(date);
  const end = endOfCalendar(date);

  const month = {
    id: `${day.getFullYear()}_${day.getMonth()}`,
    title: `${monthTitles[date.getMonth()]} ${date.getFullYear()}`,
    weeks: []
  };

  while (day <= end) {
    const weekNumber = getISOWeek(endOfWeek(day));
    const week = {
      id: `${day.getFullYear()}_${weekNumber}`,
      number: weekNumber,
      days: []
    };

    for (let i = 0; i < 7; i++) {
      week.days.push({
        id: getDayId(day),
        date: day,
        isSameMonth: isSameMonth(day, date),
        isToday: isToday(day)
      });

      day = addDays(day, 1);
    }
    month.weeks.push(week);
  }

  return month;
}
