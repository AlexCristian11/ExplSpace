import styled from 'styled-components';
import HeroBackground from "./HeroBackground.jsx";
import HeroOverlay from "./HeroOverlay.jsx";
import HeroContent from "./HeroContent.jsx";

const Hero = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 15vh;
`

const BottomFade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 280px;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    #0D0D0D
  );

  pointer-events: none;
  z-index: 2;
`;

const HeroSection = () => {
    return (
        <Hero>
            <HeroBackground />
            <HeroOverlay />
            <BottomFade />
            <HeroContent />
        </Hero>
    )
}

export default HeroSection;