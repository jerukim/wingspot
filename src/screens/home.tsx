import * as React from 'react';
import Menu from './menu';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <Menu />
    </div>
  );
};

export default Home;
