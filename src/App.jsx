import { styled } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import bannerImage from "./assets/images/banner.png";
import Galery from "./components/Galery";

const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  height: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 100px;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const GaleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <GaleryContent>
            <Banner
              text="Most complete galery of space!"
              backgroundImage={bannerImage}
            />
            <Galery />
          </GaleryContent>
        </MainContainer>
      </AppContainer>
    </GradientBackground>
  );
}

export default App;
