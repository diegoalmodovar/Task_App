
import React from 'react';
import ListTask from './ListTask';
import FormTask from './FormTask.js';
import DetailTask from './DetailTask';

const App = () => {
  return (
    <div>
      <ListTask />
      <FormTask />
      <DetailTask taskId={1} /> {}
    </div>
  );
};

export default App;
