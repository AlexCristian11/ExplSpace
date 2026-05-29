import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import EarthScene from "./EarthScene.jsx";

const Section = styled.section`
    height: 300vh;
    position: relative;
    background: #0D0D0D;
`

const StickyContainer = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

const Title = styled(motion.h4)`
    position: absolute;
    top: 20%;
    left: 50%;
    
    color: white;
    font-size: clamp(1.5rem, 3vw, 6rem);
    font-weight: 300;
    text-align: center;
`

const EarthWrapper = styled(motion.div)`
  position: absolute;
  bottom: 25%;
  left: 50%;

  width: 250px;
  height: 250px;

  border-radius: 50%;
`

const IntroSection = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const textOpacity = useTransform(
        scrollYProgress,
        [0.1, 0.3],
        [0, 1]
    );

    const textY = useTransform(
        scrollYProgress,
        [0.1, 0.3],
        [100, 0]
    );

    const earthOpacity = useTransform(
        scrollYProgress,
        [0.45, 0.65],
        [0, 1]
    );

    return (
        <Section ref={ref}>
            <StickyContainer>
                <Content>

                    <Title
                        style={{
                            x: "-50%",
                            opacity: textOpacity,
                            y: textY,
                        }}
                    >
                        You can <i>experience</i> space here
                    </Title>

                    <EarthWrapper
                        style={{
                            x: "-50%",
                            opacity: earthOpacity,
                        }}
                    >
                        <EarthScene />
                    </EarthWrapper>

                </Content>
            </StickyContainer>
        </Section>
    )
}

export default IntroSection;