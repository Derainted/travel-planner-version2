import React, { useState } from "react";
import ActivityForm from "./ActivityForm";
import Activity from "./Activity";
import ActivityEditForm from "./ActivityEditForm";

const ActivityWrapper = () => {
  const [activities, setActivities] = useState([]);
  const [id, setNewId] = useState(1);
  const [error, setError] = useState(""); // Error state to hold global errors

  const addActivities = (activity, destination) => {
    if (!activity.trim() || !destination.trim()) {
      setError("Both activity and destination are required.");
      return;
    }
    setError(""); // Clear error if input is valid

    const newActivity = {
      id: id,
      activity: activity,
      destination: destination,
      completed: false,
      isEditing: false
    };

    setActivities([...activities, newActivity]);
    setNewId(id + 1);
  };

  const toggleComplete = (id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id ? { ...activity, completed: !activity.completed } : activity
      )
    );
  };

  const deleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  const editActivity = (id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id ? { ...activity, isEditing: !activity.isEditing } : activity
      )
    );
  };

  const editTask = (updatedTask, id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id
          ? { ...activity, activity: updatedTask.activity, destination: updatedTask.destination, isEditing: false }
          : activity
      )
    );
  };

  return (
    <section className="container mt-5">
      <ActivityForm addActivities={addActivities} heading="Travel Planner" />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <ul className="list-group mt-4">
        {activities.map((activity) =>
          activity.isEditing ? (
            <ActivityEditForm
              key={activity.id}
              editActivity={editTask}
              task={activity}
            />
          ) : (
            <li key={activity.id} className="list-group-item d-flex justify-content-between align-items-center mb-3">
              <Activity
                task={activity}
                toggleComplete={toggleComplete}
                deleteActivity={deleteActivity}
                editActivity={editActivity}
              />
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default ActivityWrapper;
