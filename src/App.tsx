import * as React from 'react';
import Routes from './routes';
import { HomeNav } from './nav';

const App: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <HomeNav />
      <Routes />
      <h1>MENU</h1>
    </div>
  );
};

export default App;
