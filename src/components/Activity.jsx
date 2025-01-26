import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Activity = ({ task, toggleComplete, deleteActivity, editActivity }) => {
  return (
    <>
      <p onClick={() => toggleComplete(task.id)}>
        {task.completed ? <del>{task.activity}</del> : task.activity}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editActivity(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteActivity(task.id)}
        />
      </div>
    </>
  );
};

export default Activity;
