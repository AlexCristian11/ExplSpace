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

const HeroSection = () => {
    return (
        <Hero>
            <HeroBackground />
            <HeroOverlay />
            <HeroContent />
        </Hero>
    )
}

export default HeroSection;