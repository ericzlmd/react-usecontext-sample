import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

function Home() {
  const { initialState } = useContext(UserContext);
  const { name, location } = initialState.user;

  return (
    <div>
      <h2>Home</h2>
      <h4>
        Hello {name}, from {location}!
      </h4>
      {/* {console.log(initialState.user.name)} */}
    </div>
  );
}

export default Home;
