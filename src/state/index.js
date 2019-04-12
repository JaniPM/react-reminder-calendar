import { combineReducers } from 'redux';
import remindersCalendarReducer from '../pages/reminders-calendar/state/reducer';

export default combineReducers({
  remindersCalendar: remindersCalendarReducer
});
