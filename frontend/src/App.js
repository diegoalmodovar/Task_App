import './App.css'; // Import CSS File


import React from 'react';
import ListTask from './ListTask';
import FormTask from './FormTask.js';
import DetailTask from './DetailTask';

const App = () => {
  return (
    <div className="app-container">
      <div className="section">
        <ListTask />
      </div>
      <div className="section">
        <FormTask />
      </div>
      <div className="section">
        <DetailTask taskId={1} />
      </div>
    </div>
  );
};
export default App;
