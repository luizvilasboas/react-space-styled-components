import styled from "styled-components";
import search from "../../assets/images/search.png";

const ContainerStyle = styled.div`
  position: relative;
  display: inline-block;
`;

const TextInputStyle = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  font-family: 'GandhiSansRegular';
`;

const SearchIconStyle = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

const TextInput = (props) => {
  return (
    <ContainerStyle>
      <TextInputStyle placeholder="What you want to search?" {...props} />
      <SearchIconStyle src={search} alt="search icon" />
    </ContainerStyle>
  )
};

export default TextInput;
