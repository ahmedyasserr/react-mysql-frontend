import React from 'react';
import ValidatedForm from './Forms/ValidatedForm';
import StudentList from './Forms/StudentList';
import EditStudent from './Forms/EditStudent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
      <Router>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <h1 className="navbar-brand">CS schools</h1>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/" className="nav-link">Student Registration</Link>
        </li>
        <li className="nav-item">
          <Link to="/list" className="nav-link">Student List</Link>
        </li>
        <li className="nav-item">
          <Link to="/edit/:id" className="nav-link">Delete Student</Link>
        </li>
      </ul>
    </div>
  </nav>
        <div className="container-fluid mt-2">
          <Route path="/" exact component={ValidatedForm} />
          <Route path="/list" component={StudentList} />
          <Route path="/edit" component={EditStudent} />
        </div>
      </Router>
      )
 }

export default App;
