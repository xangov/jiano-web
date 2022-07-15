import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksItems, FooterLinkTitle, FooterLinksWrapper, FooterLink, FooterLinksContainer, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights} from './FooterElements';
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    
    const toggleHome = () => {
        scroll.scrollToTop();
    };
        return (
    <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>  
            <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/signin'>Careers</FooterLink>
                        <FooterLink to='/signin'>How it Works</FooterLink>
                        <FooterLink to='/signin'>Testimonials</FooterLink>
                        <FooterLink to='/signin'>Investors</FooterLink>
                                        
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>Contact</FooterLink>
                        <FooterLink to='/'>Support</FooterLink>
                        <FooterLink to='/'>Destinations</FooterLink>
                        <FooterLink to='/'>Sponsorships</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>                    
                </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/'>Add your Coin or Token</FooterLink>
                        <FooterLink to='/'>Jiano Network Blockchain</FooterLink>
                        <FooterLink to='/'>Ambassadors</FooterLink>                    
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Business</FooterLinkTitle>
                        <FooterLink to='/'>White Paper</FooterLink>
                        <FooterLink to='/'></FooterLink>
                        <FooterLink to='/'></FooterLink>
                        <FooterLink to='/'></FooterLink>                    
                </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinkTitle>Downloads</FooterLinkTitle>
                        <FooterLink to='/'>Jiano Core Wallet</FooterLink>                                      
                </FooterLinksItems>                
            </FooterLinksWrapper>
          </FooterLinksContainer> 
          <SocialMedia>
              <SocialMediaWrap>
                  <SocialLogo to='/' onClick={toggleHome}>JAO Network</SocialLogo>
                    <WebsiteRights>Jiano Blockchain Network © | Powered by the XAN Tribal Government |{new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                     <SocialIcons>
                          <SocialIconLink herf='/' target='_blank' aria-label="Facebook"><FaFacebook />
                          </SocialIconLink>
                          <SocialIconLink herf='/' target='_blank' aria-label="Instagram"><FaInstagram />
                          </SocialIconLink>
                          <SocialIconLink herf='/' target='_blank' aria-label="Youtube"><FaYoutube />
                          </SocialIconLink>
                          <SocialIconLink herf='/' target='_blank' aria-label="Twitter"><FaTwitter />
                          </SocialIconLink>
                          <SocialIconLink herf='/' target='_blank' aria-label="Linkedin"><FaLinkedin />
                          </SocialIconLink>
                     </SocialIcons>                  
              </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer