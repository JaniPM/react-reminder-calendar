import React from 'react';
import logo from './logo.svg';
import './App.css';
import RemindersCalendar from './reminders-calendar';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <div className="content">
      <RemindersCalendar />
    </div>
    <footer className="App-footer" />
  </div>
);

export default App;
