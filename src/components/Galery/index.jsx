import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import photos from "./photos.json";
import Image from "./Image";

const GaleryContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImagesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

const Galery = () => {
  return (
    <>
      <Tags />
      <GaleryContainer>
        <FluidSection>
          <Title>Browse the galery</Title>
          <ImagesContainer>
            {photos.map(photo => <Image key={photo.id} photo={photo} />)}
          </ImagesContainer>
        </FluidSection>
      </GaleryContainer>
    </>
  );
};

export default Galery;
