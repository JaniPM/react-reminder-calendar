import * as uuid from 'uuid/v4';
import { subMonths, addMonths } from 'date-fns';
import {
  CALENDAR_MOVE_BACK,
  CALENDAR_MOVE_FORWARD,
  CALENDAR_SELECT_TODAY,
  CALENDAR_ADD_ITEM,
  CALENDAR_EDIT_ITEM,
  CALENDAR_SAVE_ITEM,
  CALENDAR_DELETE_ITEM,
  CALENDAR_CANCEL_EDIT
} from './actions';

/**
 * Immutability helpers
 */

function editItem(items, editedItem) {
  return items.map((item) => {
    if (item.id === editedItem.id) {
      return { ...item, ...editedItem };
    }
    return item;
  });
}

function addItem(items, newItem) {
  return [...items, { ...newItem, id: uuid() }];
}

function deleteItem(items, id) {
  return items.filter(item => item.id !== id);
}

/**
 * Date helpers
 */

function previousMonth(date) {
  return subMonths(date, 1);
}

function nextMonth(date) {
  return addMonths(date, 1);
}

export const initialState = {
  currentDate: new Date(),
  reminders: [],
  selectedItem: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CALENDAR_MOVE_FORWARD:
      return { ...state, currentDate: nextMonth(state.currentDate) };
    case CALENDAR_MOVE_BACK:
      return { ...state, currentDate: previousMonth(state.currentDate) };
    case CALENDAR_SELECT_TODAY:
      return { ...state, currentDate: new Date() };
    case CALENDAR_ADD_ITEM:
      return {
        ...state,
        selectedItem: { id: null, title: '', startDate: new Date() }
      };
    case CALENDAR_EDIT_ITEM:
      return {
        ...state,
        selectedItem: state.reminders.find(item => item.id === action.payload)
      };
    case CALENDAR_DELETE_ITEM:
      return {
        ...state,
        selectedItem: null,
        reminders: deleteItem(state.reminders, action.payload)
      };
    case CALENDAR_SAVE_ITEM: {
      let updatedReminders = null;
      if (action.payload.id) {
        updatedReminders = editItem(state.reminders, action.payload);
      } else {
        updatedReminders = addItem(state.reminders, action.payload);
      }

      return {
        ...state,
        selectedItem: null,
        reminders: updatedReminders
      };
    }
    case CALENDAR_CANCEL_EDIT:
      return { ...state, selectedItem: null };
    default:
      return state;
  }
}
