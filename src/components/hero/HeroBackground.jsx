import styled from 'styled-components';

const Background = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
`

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
`

const HeroBackground = () => {
    return (
        <Background>
            <Video autoPlay muted playsInline loop disablePictureInPicture controls={false}>
                <source src='../../../public/assets/videos/hero-video.mp4' type='video/mp4' />
            </Video>
        </Background>
    )
}

export default HeroBackground;