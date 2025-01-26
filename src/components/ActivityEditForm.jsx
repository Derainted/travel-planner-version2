import React, { useState } from "react";

const ActivityEditForm = ({ editActivity, task }) => {
  const [activityInputValue, setActivityInputValue] = useState(task.activity);

  const handleChange = (e) => {
    e.preventDefault();
    editActivity(activityInputValue, task.id);
    setActivityInputValue("");
  };

  return (
    <form onSubmit={handleChange}>
      <p>Update activity</p>
      <input
        type="text"
        placeholder="Update Activity..."
        value={activityInputValue}
        onChange={(e) => setActivityInputValue(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default ActivityEditForm;
