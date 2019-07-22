import * as React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {VideoList} from './container/VideoList/VideoList';
import Navigation from './shared/Navigation/Navigation';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" render={() => <Redirect to="/week" />} />
        <Route path="/:id" component={VideoList} />
      </div>
    </Router>
  );
};

export default App;
