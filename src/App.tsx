import * as React from 'react';
import {BrowserRouter as Router, Route, Redirect, NavLink} from 'react-router-dom';
import './App.css';
import {VideoList} from './container/VideoList/VideoList';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <NavLink to="/week">Last week</NavLink>
        <NavLink to="/month">Last month</NavLink>
        <NavLink to="/year">Last year</NavLink>
        <NavLink to="/all">All time</NavLink>
      </nav>
      <Route exact path="/" render={() => <Redirect to="/week" />} />
      <Route path="/:id" component={VideoList} />
    </Router>
  );
};

export default App;
