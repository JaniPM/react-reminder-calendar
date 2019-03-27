import { combineReducers } from 'redux';
import remindersCalendarReducer from '../reminders-calendar/state/reducer';

export default combineReducers({
  remindersCalendar: remindersCalendarReducer
})
