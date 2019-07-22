import * as React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => (
  <nav className="navigation">
    <NavLink to="/week">Last week</NavLink>
    <NavLink to="/month">Last month</NavLink>
    <NavLink to="/year">Last year</NavLink>
    <NavLink to="/all">All time</NavLink>
  </nav>
);

export default Navigation;
