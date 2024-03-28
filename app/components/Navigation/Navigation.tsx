import { NavLink } from '@remix-run/react';
import { useState } from 'react';
import './Navigation.styles.css';

const Navigation = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`Navigation-root ${isActive ? 'Navigation--isActive' : ''}`}>
      <button onClick={handleMenuClick}>Menu</button>
      {isActive && (
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/todos">TODOs</NavLink>
          </li>
          <li>
            <NavLink to="/playground">Playground</NavLink>
          </li>
          <li>
            <NavLink to="/playground/logo">Playground - Logo</NavLink>
          </li>
          <li>
            <NavLink to="/playground/colors">Playground - Colors</NavLink>
          </li>
          <li>
            <NavLink to="/playground/manual-colors">Playground - Manual Colors</NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Navigation;
