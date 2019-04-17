import { createSelector } from 'reselect';
import { compareAsc } from 'date-fns';
import reducer, { initialState } from './reducer';

export { reducer };

/**
 * Selectors
 */

export const selectRemindersCalendar = state => state.remindersCalendar || initialState;

export const getRemindersByDate = createSelector(
  selectRemindersCalendar,
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
  selectRemindersCalendar,
  state => state.currentDate
);

export const getSelectedItem = createSelector(
  selectRemindersCalendar,
  state => state.selectedItem
);
