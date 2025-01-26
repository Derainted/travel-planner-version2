import React, { useState } from "react";

const ActivityForm = ({ addActivities, heading }) => {
  const [activityInputValue, setActivityInputValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    addActivities(activityInputValue);

    setActivityInputValue("");
  };

  return (
    <form onSubmit={handleChange}>
      <h1>{heading}</h1>
      <input
        type="text"
        placeholder="Activity ..."
        value={activityInputValue}
        onChange={(e) => setActivityInputValue(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default ActivityForm;
