import * as React from 'react';
import Routes from './routes';
import { HomeNav, MenuNav } from './nav';

const App: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <HomeNav />
      <Routes />
      <MenuNav />
    </div>
  );
};

export default App;
