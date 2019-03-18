import * as React from 'react';
import './menu-nav.css';
import { Link } from 'react-router-dom';

const MenuNav: React.FunctionComponent<{}> = () => {
  return (
    <Link to="/menu" className="menu-nav">
      MENU
    </Link>
  );
};

export default MenuNav;
