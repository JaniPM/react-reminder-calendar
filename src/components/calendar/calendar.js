import React from 'react';
import PropTypes from 'prop-types';
import CalendarMonth from './calendar.month';
import CalendarToolbar from './calendar.toolbar';
import { createMonthCalendar, dayTitles } from './view-model/calendar.view-model';
import './calendar.css';

const Calendar = (props) => {
  const { date, dayRender, ...toolbarActions } = props;
  const model = createMonthCalendar(date);
  return (
    <div className="calendar">
      <h1>{model.title}</h1>
      <CalendarToolbar {...toolbarActions} />
      <CalendarMonth {...model} dayRender={dayRender} dayTitles={dayTitles} />
    </div>
  );
};

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  dayRender: PropTypes.func.isRequired
};

export default Calendar;
