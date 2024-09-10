import React from 'react';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Navbar in the first column */}
        <div className="col-12">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default App;
