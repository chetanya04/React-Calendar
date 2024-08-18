import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "../index.css"

Modal.setAppElement("#root");

const EventDetails = ({ events, editEvent, deleteEvent }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((event) => event.id === parseInt(id));

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <Modal isOpen={true} onRequestClose={() => navigate("/")}>
      <div>
        <h2>{event.title}</h2>
        <p>{event.date.toDateString()}</p>
        <button onClick={() => editEvent({ ...event, title: "Updated Event" })}>
          Edit
        </button>
        <button onClick={() => deleteEvent(event.id)}>Delete</button>
        <button onClick={() => navigate("/")}>Close</button>
      </div>
    </Modal>
  );
};

export default EventDetails;
