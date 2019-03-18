import * as React from 'react';
import Menu from './menu';

const Home: React.FunctionComponent<{ location: Location }> = ({
  location,
}) => {
  const { pathname } = location;
  return (
    <div className="home">
      <h1>Home</h1>
      <p>{pathname}</p>
      <Menu />
    </div>
  );
};

export default Home;
