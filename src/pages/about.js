import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

function About() {
  const { initialState } = useContext(UserContext);
  const { name, location } = initialState.user;

  return (
    <div>
      <h2>About</h2>
      <h4>
        Hello {name}, from {location}!
      </h4>
    </div>
  );
}

export default About;
