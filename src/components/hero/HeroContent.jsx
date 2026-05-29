import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
    max-width: 900px;
    padding: 0 24px;
`

const Title = styled.h1`
    font-size: clamp(3rem, 7vw, 7rem);
    font-weight: 300;
    letter-spacing: 0.1em;
    margin: 0;
`

const Subtitle = styled.p`
    margin-top: 16px;
    font-size: clamp(1rem, 2vw, 1.5rem);
    opacity: .8;
`

const HeroContent = () => {
    return (
        <Wrapper>
            <Title>SPACE</Title>
            <Subtitle>Explore space like never before</Subtitle>
        </Wrapper>
    )
}

export default HeroContent;