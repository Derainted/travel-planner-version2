import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Activity = ({ task, toggleComplete, deleteActivity, editActivity }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex flex-column flex-grow-1">
        <p
          onClick={() => toggleComplete(task.id)}
          className={`mb-1 ${task.completed ? 'text-decoration-line-through' : ''}`}
        >
          {task.activity}
        </p>
        <small className="text-muted">{task.destination}</small>
      </div>

      <div className="d-flex gap-2">
        <button
          className="btn btn-sm btn-info"
          onClick={() => editActivity(task.id)}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => deleteActivity(task.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default Activity;
