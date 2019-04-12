import React from 'react';
import PropTypes from 'prop-types';
import './calendar.toolbar.css';

const CalendarToolbar = ({
  onPrevious, onToday, onNext, onAddNew
}) => (
  <div className="calendar-toolbar">
    <button type="button" className="calendar-toolbar__move" onClick={onPrevious}>Prev</button>
    <button type="button" className="calendar-toolbar__move" onClick={onToday}>Today</button>
    <button type="button" className="calendar-toolbar__move" onClick={onNext}>Next</button>
    <button type="button" className="calendar-toolbar__add-new" onClick={onAddNew}>Add New +</button>
  </div>
);

CalendarToolbar.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onToday: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onAddNew: PropTypes.func.isRequired
};

export default CalendarToolbar;
