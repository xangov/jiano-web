import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroP, HeroBtnWrapper, HeroH1, ArrowForward, ArrowRight} from './HeroElements';
import {Button} from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    
    const onHover = () => {
        setHover(!hover)
    }
    return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>A Blockchain Technology Platform for Indigenous Peoples</HeroH1>
            <HeroP>
                Use our Plaform to raise capital for your Global Projects!!!
                <p>Ask us How!!!</p>
            </HeroP>
            <HeroBtnWrapper>
                <Button to='/signin'
                 onMouseEnter={onHover}
                 onMouseLeave={onHover} 
                 primary='true' 
                 dark='true'
                 smooth={true}
                 duration={500}
                 spy={true}
                 exact='true'
                 offset={-80}
                 >
                     Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection