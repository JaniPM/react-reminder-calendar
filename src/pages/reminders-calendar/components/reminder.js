import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { CirclePicker } from 'react-color';

const Reminder = ({
  item, onSave, onDelete, onCancelEdit
}) => {
  // Init reminder model with default values
  const [fields, setFields] = useState({ color: '#f44336', ...item });

  function handleChange(e) {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  }

  function handleDateChange(date) {
    setFields({ ...fields, startDate: date });
  }

  function handleColorChange(color) {
    setFields({ ...fields, color: color.hex });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(fields);
  }

  function handleDelete() {
    onDelete(item.id);
  }

  return (
    <div className="reminder">
      <h3>Create/edit reminder</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-column">
            <input
              placeholder="Title"
              type="text"
              className="input-title"
              autoComplete="off"
              maxLength="30"
              value={fields.title}
              name="title"
              onChange={handleChange}
            />
            <DatePicker
              selected={fields.startDate}
              onChange={handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />
          </div>
          <div className="form-column">
            <CirclePicker
              color={fields.color}
              onChangeComplete={handleColorChange}
            />
          </div>
        </div>
        <div className="form-buttons">
          {fields.id && <button type="button" className="delete" onClick={handleDelete}>Delete</button>}
          <button type="button" onClick={onCancelEdit}>Cancel</button>
          <input type="submit" className="primary" value="Save" disabled={!fields.title} />
        </div>
      </form>
    </div>
  );
};

Reminder.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancelEdit: PropTypes.func.isRequired
};

export default Reminder;
