import React from 'react';
import PropTypes from 'prop-types';
import './calendar.day.css';

const CalendarDay = ({
  id, date, isToday, isSameMonth, dayRender
}) => {
  const className = `calendar-day${isSameMonth ? '' : ' calendar-day-grey'}`;
  const titleClassName = `calendar-day__title${isToday ? ' calendar-day__title_highlighted' : ''}`;

  return (
    <div className={className}>
      <span className={titleClassName}>
        {date.getDate()}
      </span>
      {dayRender(id)}
    </div>
  );
};

CalendarDay.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  dayRender: PropTypes.func.isRequired,
  isToday: PropTypes.bool,
  isSameMonth: PropTypes.bool
};

CalendarDay.defaultProps = {
  isToday: false,
  isSameMonth: false
};

export default CalendarDay;
