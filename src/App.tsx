import * as React from 'react';
import Routes from './routes';
import { HomeNav, MenuNav } from './nav';
import './App.css';

const App: React.FunctionComponent<{}> = () => {
  return (
    <div className="App">
      <HomeNav />
      <Routes />
      <MenuNav />
    </div>
  );
};

export default App;
