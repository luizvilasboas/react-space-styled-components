import { styled } from "styled-components";

const NavLinkStyled = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#7B78E5" : "#D9D9D9")};
  font-family: ${(props) =>
    props.$active ? "GandhiSansBold" : "GandhiSansRegular"};
  display: flex;
  align-items: center;
  gap: 22px;
`;

const NavLink = ({ children, activeIcon, inactiveIcon, active = false }) => {
  return (
    <NavLinkStyled $active={active}>
      <img src={active ? activeIcon : inactiveIcon} alt="" />
      {children}
    </NavLinkStyled>
  );
};

export default NavLink;
