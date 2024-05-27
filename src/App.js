import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './component/dashboard'

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
