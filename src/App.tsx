import * as Router from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import * as React from 'react';
import { Suspense, lazy } from 'react';
import './App.css';

import logo from './logo.svg';

// class App extends React.Component {
//   public render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.tsx</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <Router>
      <Switch>
        <Route />
      </Switch>
    </Router>
  );
}

export default App;
