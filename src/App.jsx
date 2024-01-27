import { styled } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import bannerImage from "./assets/images/banner.png";

const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100vw;
  height: 100vh;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

function App() {
  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <Banner
            text="Most complete galery of space!"
            backgroundImage={bannerImage}
          />
        </MainContainer>
      </AppContainer>
    </GradientBackground>
  );
}

export default App;
