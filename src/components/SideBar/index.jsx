import styled from "styled-components";
import NavLink from "./NavLink";

const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const SideBar = () => {
  return (
    <aside>
      <nav>
        <ListStyled>
          <NavLink
            activeIcon="/icons/home-active.png"
            inactiveIcon="/icons/home-inactive.png"
            active={true}
          >
            Start
          </NavLink>
          <NavLink
            activeIcon="/icons/most-visited-active.png"
            inactiveIcon="/icons/most-visited-inactive.png"
          >
            Most visited
          </NavLink>
          <NavLink
            activeIcon="/icons/most-liked-active.png"
            inactiveIcon="/icons/most-liked-inactive.png"
          >
            Most liked
          </NavLink>
          <NavLink
            activeIcon="/icons/new-active.png"
            inactiveIcon="/icons/new-inactive.png"
          >
            New
          </NavLink>
          <NavLink
            activeIcon="/icons/suprise-me-active.png"
            inactiveIcon="/icons/suprise-me-inactive.png"
          >
            Suprise me
          </NavLink>
        </ListStyled>
      </nav>
    </aside>
  );
};

export default SideBar;
