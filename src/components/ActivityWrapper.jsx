import React, { useState } from "react";
import ActivityForm from "./ActivityForm";
import Activity from "./Activity";
import ActivityEditForm from "./ActivityEditForm";

const ActivityWrapper = () => {
  const [activities, setActivities] = useState([]);
  const [id, setNewId] = useState(1);

  const addActivities = (activity) => {
    const newActivity = {
      id: id,
      activity: activity,
    };

    // updating states...
    setActivities([...activities, newActivity]);
    setNewId(id + 1);

    console.log([...activities, newActivity]);
  };

  // Mapping through the activies for updating the completed value..
  const toggleComplete = (id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id
          ? { ...activity, completed: !activity.completed }
          : activity
      )
    );
  };

  const deleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  const editActivity = (id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id
          ? { ...activity, isEditing: !activity.isEditing }
          : activity
      )
    );
  };

  const editTask = (task, id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id
          ? { ...activity, activity: task, isEditing: false}
          : activity
      )
    );
  };

  return (
    <div>
      
      <ActivityForm addActivities={addActivities} heading="Travel Planer" />
      <ul>
        {activities.map((activity) =>
          activity.isEditing ? (
            <ActivityEditForm key={activity.id} editActivity={editTask} task={activity} />
          ) : (
            <li key={activity.id}>
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
    </div>
  );
};

export default ActivityWrapper;
