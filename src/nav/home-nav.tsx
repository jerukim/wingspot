import * as React from 'react';
import './home-nav.css';
import { Link } from 'react-router-dom';

const HomeNav: React.FunctionComponent<{}> = () => {
  return (
    <Link to="/" className="home-nav">
      HOME
    </Link>
  );
};

export default HomeNav;
