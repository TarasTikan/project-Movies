import { routes } from 'Router/paths';
import { StyledLink, NavList } from './Navigation.styled';
const Navigation = () => {
  return (
    <NavList>
      <li>
        <StyledLink to={routes.home}>Home</StyledLink>
      </li>
      <li>
        <StyledLink to={routes.movies}>Movies</StyledLink>
      </li>
    </NavList>
  );
};

export default Navigation;
