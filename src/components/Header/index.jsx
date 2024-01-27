import styled from "styled-components";
import TextInput from "../TextInput";

const HeaderStyle = styled.header`
  padding: 60px 0px;
  margin: 0px 20px;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <img src="/images/logo.png" alt="space app logo" />
      <TextInput />
    </HeaderStyle>
  );
};

export default Header;
