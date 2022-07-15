import React from 'react';
import Icon1 from '../../images/svg-5.svg';
import Icon2 from '../../images/svg-6.svg';
import Icon3 from '../../images/svg-1.svg';
import {ServicesContainer, ServicesCard, ServicesH1, ServicesWrapper, ServicesIcon, ServicesP, ServicesH2} from './ServicesElements';
const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Global Network Connectivity</ServicesH2>
                <ServicesP>Access our Services anywhere in the world</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Staking percentages for Master Node hosting</ServicesH2>
                <ServicesP>Stake jianocoin to the network through your wallet and begin earning</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Coming Soon!!!!</ServicesH2>
                <ServicesP>Jiano Network internetless Connectivity, "imagine connecting to the blockchain without the need for an ISP or Satelite Service</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services