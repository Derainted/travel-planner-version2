import React, { useState } from "react";

const ActivityForm = ({ addActivities, heading }) => {
  const [activityInputValue, setActivityInputValue] = useState("");
  const [destination, setDestination] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    // Basic error validation
    if (!activityInputValue.trim() || !destination.trim()) {
      setError("Both activity and destination are required.");
      return;
    }

    setError(""); // Clear error if input is valid
    addActivities(activityInputValue, destination);
    setActivityInputValue("");
    setDestination("");
  };

  return (
    <form onSubmit={handleChange} className="mb-4">
      <h1 className="text-center mb-4">{heading}</h1>
      <div className="row">
        <div className="col-md-5 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Activity ..."
            value={activityInputValue}
            onChange={(e) => setActivityInputValue(e.target.value)}
          />
        </div>
        <div className="col-md-5 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="col-md-2 mb-3">
          <button type="submit" className="btn btn-primary w-100">
            Create
          </button>
        </div>
      </div>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </form>
  );
};

export default ActivityForm;
