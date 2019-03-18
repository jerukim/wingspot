import * as React from 'react';

import Routes from './routes';

const App: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <h1>WINGSPOT</h1>
      <Routes />
      <h1>MENU</h1>
    </div>
  );
};

export default App;
