import * as React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
