import React, { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import "../index.css";

const CalendarView = ({ addEvent, events }) => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleAddEvent = () => {
    const newEvent = { id: Date.now(), date, title: "New Event" };
    addEvent(newEvent);
  };

  return (
    <div className="App">
      <h1>React Calendar</h1>
      <Calendar onChange={setDate} value={date} />
      <button onClick={handleAddEvent}>Add Event</button>
      <ul>
        {events.map((event) => (
          <li key={event.id} onClick={() => navigate(`/event/${event.id}`)}>
            {event.title} - {event.date.toDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarView;
