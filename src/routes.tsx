import * as React from 'react';
import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./screens/home'));
const Menu = lazy(() => import('./screens/menu'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
