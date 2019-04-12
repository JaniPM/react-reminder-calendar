import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeading from './calendar.heading';
import CalendarWeek from './calendar.week';
import './calendar.month.css';

const CalendarMonth = ({ dayTitles, weeks, dayRender }) => (
  <div className="calendar-month">
    <CalendarHeading dayTitles={dayTitles} />
    {weeks.map(week => <CalendarWeek {...week} dayRender={dayRender} key={week.id} />)}
  </div>
);

CalendarMonth.propTypes = {
  weeks: PropTypes.arrayOf(PropTypes.object).isRequired,
  dayTitles: PropTypes.arrayOf(String).isRequired,
  dayRender: PropTypes.func.isRequired
};

export default CalendarMonth;
