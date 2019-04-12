/*
 * Action types
 */

export const CALENDAR_MOVE_FORWARD = '[Calendar] Move forward';
export const CALENDAR_MOVE_BACK = '[Calendar] Move back';
export const CALENDAR_SELECT_TODAY = '[Calendar] Select today';
export const CALENDAR_ADD_ITEM = '[Calendar] Add item';
export const CALENDAR_EDIT_ITEM = '[Calendar] Edit item';
export const CALENDAR_SAVE_ITEM = '[Calendar] Save item';
export const CALENDAR_DELETE_ITEM = '[Calendar] Delete item';
export const CALENDAR_CANCEL_EDIT = '[Calendar] Cancel edit';

/*
 * Action creators
 */

export function moveForward() {
  return { type: CALENDAR_MOVE_FORWARD };
}

export function moveBacward() {
  return { type: CALENDAR_MOVE_BACK };
}

export function selectToday() {
  return { type: CALENDAR_SELECT_TODAY };
}

export function addItem() {
  return { type: CALENDAR_ADD_ITEM };
}

export function editItem(id) {
  return { type: CALENDAR_EDIT_ITEM, payload: id };
}

export function cancelEdit() {
  return { type: CALENDAR_CANCEL_EDIT };
}

export function saveItem(item) {
  return { type: CALENDAR_SAVE_ITEM, payload: item };
}

export function deleteItem(id) {
  return { type: CALENDAR_DELETE_ITEM, payload: id };
}
