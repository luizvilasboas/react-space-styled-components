import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;
`;

const TagsTitle = styled.section`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;

const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;

const Tags = () => {
  return (
    <TagsContainer>
      <TagsTitle>Search by tag:</TagsTitle>
      <Div>
        {tags.map((tag) => (
          <Tag key={tag.id}>{tag.title}</Tag>
        ))}
      </Div>
    </TagsContainer>
  );
};

export default Tags;
