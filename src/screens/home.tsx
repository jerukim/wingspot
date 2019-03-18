import * as React from 'react';

const Home: React.FunctionComponent<{ location: Location }> = ({
  location,
}) => {
  const { pathname } = location;
  return (
    <div className="home">
      <h1>Home</h1>
      <p>{pathname}</p>
    </div>
  );
};

export default Home;
