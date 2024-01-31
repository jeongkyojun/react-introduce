import React from 'react';
import { AboutExplainWrapper, AboutLabelWrapper, AboutWrapper, StyledAboutPage } from './style';
import Label from '../../atom/Label';
import AboutCard from '../../molecule/AboutCard';
import InfoCard from '../../organ/InfoCard/inedx';
import { DEFAULT_TEXT } from '../../data/AboutData/data';

const About = ({...rest})=>{

    return(
        <StyledAboutPage {...rest}>
            <Label color={'black'} fontSize={'5rem'} fontWeight={800}>About</Label>
            <InfoCard img={'../images/myPics.jpg'} text={DEFAULT_TEXT} width={'60rem'} height={'20rem'} textColor={'black'} fontSize={'2rem'}></InfoCard>
            <AboutWrapper>
                <AboutCard textColor={'black'} fontSize={'2rem'} fontWeight={900} height={'10rem'} border={true}> 한국해양대학교 it융합 전공 졸업 </AboutCard>
                <AboutCard textColor={'black'} fontSize={'2rem'} fontWeight={900} height={'10rem'} border={true}> 정보처리기사 취득 </AboutCard>
                <AboutCard textColor={'black'} fontSize={'2rem'} fontWeight={900} height={'10rem'} border={true}> 삼성청년 SW 아카데미 7기 Java 트랙 수료</AboutCard>
            </AboutWrapper>   
        </StyledAboutPage>
    )
}

export default About;
