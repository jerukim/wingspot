import * as React from 'react';

const Home: React.FunctionComponent<{ location: Location }> = ({
  location,
}) => {
  const { pathname } = location;
  return (
    <div className="home">
      <h1>Home</h1>
      <p>{pathname}8646071232 Mon-Fri 10am-10pm Directions</p>
    </div>
  );
};

export default Home;
