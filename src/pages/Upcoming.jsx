import React from "react";

const UpcomingPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Upcoming</h1>
      <p className="text-muted-foreground">Tasks due in the future.</p>
      {/* Add Task Input */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Add a new task"
          className="w-full p-2 border rounded"
        />
        <button className="mt-2 p-2 bg-primary text-white rounded">Add Task</button>
      </div>
      {/* Task List */}
      <ul className="mt-4">
        {/* Example Task */}
        <li className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Example Task</span>
          </div>
          <div>
            <button className="mr-2">Edit</button>
            <button>Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UpcomingPage;