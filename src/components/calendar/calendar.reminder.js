import React from 'react';
import PropTypes from 'prop-types';
import './calendar.reminder.css';
import { format } from 'date-fns';

const CalendarReminder = ({
  id, title, color, startDate, onEdit
}) => {
  const reminderStyle = {
    backgroundColor: color
  };

  function handleOnClick() {
    onEdit(id);
  }

  return (
    <div
      style={reminderStyle}
      className="calendar-reminder"
      onClick={handleOnClick}
      onKeyPress={handleOnClick}
      role="button"
      tabIndex="0"
    >
      {format(startDate, 'H:mm A')}
      {' '}
      {title}
    </div>
  );
};

CalendarReminder.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  onEdit: PropTypes.func.isRequired,
  color: PropTypes.string
};

CalendarReminder.defaultProps = {
  color: '#f44336'
};

export default CalendarReminder;
