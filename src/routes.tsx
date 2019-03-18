import * as React from 'react';
import { Suspense, lazy } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./screens/home'));
const Menu = lazy(() => import('./screens/menu'));

const Routes: React.FunctionComponent<{}> = () => {
  return (
    <div className="app-content">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default withRouter(Routes);
