import { createSelector } from 'reselect';
import { compareAsc } from 'date-fns';

export const getRemindersCalendar = state => state.remindersCalendar;

export const getRemindersByDate = createSelector(
  getRemindersCalendar,
  state => (
    state.reminders.slice().sort(
      (a, b) => compareAsc(a.startDate, b.startDate)
    ).reduce((map, item) => {
      const key = `${item.startDate.getFullYear()}_${item.startDate.getMonth()}_${item.startDate.getDate()}`;
      if (!map[key]) {
        map[key] = [];
      }
      map[key].push(item);

      return map;
    }, {})
  )
);

export const getCurrentDate = createSelector(
  getRemindersCalendar,
  state => state.currentDate
);

export const getSelectedItem = createSelector(
  getRemindersCalendar,
  state => state.selectedItem
);
