import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

const Navigation = () => {
  return (
    <div className='navigation'>
      <nav>
        <ul className='nav'>
          <li>
            <NavLink exact to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/button'>Button</NavLink>
          </li>
          <li>
            <NavLink to='/button-group'>Button Group</NavLink>
          </li>
          <li>
            <NavLink to='/icon'>Icon</NavLink>
          </li>
          <li>
            <NavLink to='/image'>Image</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
