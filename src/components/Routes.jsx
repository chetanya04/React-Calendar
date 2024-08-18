import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import CalendarView from "./ViewCalender";
import EventDetails from "./EventDetails";

const AppRoutes = ({ events, addEvent, editEvent, deleteEvent }) => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<CalendarView addEvent={addEvent} events={events} />} />
        <Route path="/event/:id" element={<EventDetails events={events} editEvent={editEvent} deleteEvent={deleteEvent} />} />
      </Routes>
    </Router>
   
  );
};

export default AppRoutes;
