import React from 'react';
import PropTypes from 'prop-types';
import CalendarDay from './calendar.day';
import './calendar.week.css';

const CalendarWeek = ({ number, days, dayRender }) => (
  <div className="calendar-week">
    <div className="calendar-week__number">{number}</div>
    {
      days.map(day => <CalendarDay {...day} dayRender={dayRender} key={day.id} />)
    }
  </div>
);

CalendarWeek.propTypes = {
  number: PropTypes.number.isRequired,
  days: PropTypes.arrayOf(PropTypes.object).isRequired,
  dayRender: PropTypes.func.isRequired
};

export default CalendarWeek;
