import styled from "styled-components";

const Overlay = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;

    background: radial-gradient(
            circle at center,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.85)
    );
`

const HeroOverlay = () => {
    return <Overlay />;
}

export default HeroOverlay;