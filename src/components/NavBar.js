import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/"  className={ ({isActive}) => 
        isActive ? 'activeLink' : 'nonactiveLink'
    }>Domů</NavLink>
        <NavLink to="/comedy"  className={ ({isActive}) => 
        isActive ? 'activeLink' : 'nonactiveLink'
    }>Komedie</NavLink>
              <NavLink to="/movies" className={({ isActive }) =>
        isActive ? 'activeLink' : 'nonactiveLink'
    }>Filmy</NavLink>
              <NavLink to="/serials"  className={ ({isActive}) => 
        isActive ? 'activeLink' : 'nonactiveLink'
    }>Seriály</NavLink>
        <NavLink to="/horrors"  className={ ({isActive}) => 
        isActive ? 'activeLink' : 'nonactiveLink'
    }>Horrors</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
