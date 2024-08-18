import React, { useState } from "react";
import ErrorBoundary from "./components/boundaryError";
import AppRoutes from "./components/Routes";
import "./index.css";

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
    alert("Event added successfully!");
  };

  const editEvent = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    alert("Event updated successfully!");
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    alert("Event deleted successfully!");
  };

  return (
    <ErrorBoundary>
      <AppRoutes
        events={events}
        addEvent={addEvent}
        editEvent={editEvent}
        deleteEvent={deleteEvent}
      />
    </ErrorBoundary>
  );
};

export default App;
