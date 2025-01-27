import React, { useState } from "react";

const ActivityEditForm = ({ editActivity, task }) => {
  const [activityInputValue, setActivityInputValue] = useState(task.activity);
  const [destination, setDestination] = useState(task.destination);
  const [error, setError] = useState(""); // State for error

  const handleChange = (e) => {
    e.preventDefault();

    // Check if either field is empty or only contains spaces
    if (!activityInputValue.trim() || !destination.trim()) {
      setError("Both activity and destination are required and cannot be just spaces.");
      return; // Prevent form submission if there's an error
    }

    setError(""); // Clear error if input is valid

    // Pass the updated task back to the parent to update the state
    editActivity({ activity: activityInputValue, destination: destination }, task.id);
  };

  return (
    <section className="container mt-4">
      <header>
        <p className="h4 mb-4">Update Activity</p>
      </header>
      <form onSubmit={handleChange}>
        <div className="mb-3">
          <label htmlFor="updateActivity" className="form-label">Activity</label>
          <input
            id="updateActivity"
            type="text"
            className="form-control"
            placeholder="Update Activity..."
            value={activityInputValue}
            onChange={(e) => setActivityInputValue(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="updateDestination" className="form-label">Destination</label>
          <input
            id="updateDestination"
            type="text"
            className="form-control"
            placeholder="Update Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-warning w-100">
            Update
          </button>
        </div>
      </form>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </section>
  );
};

export default ActivityEditForm;
