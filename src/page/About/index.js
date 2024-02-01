import React from 'react';
import { AboutExplainWrapper, AboutLabelWrapper, AboutWrapper, StyledAboutPage } from './style';
import Label from '../../atom/Label';
import AboutCard from '../../molecule/AboutCard';
import InfoCard from '../../organ/InfoCard/inedx';
import { DEFAULT_TEXT } from '../../data/AboutData/data';

const About = ({...rest})=>{

    const GRADUATE = ['it융합 전공 졸업',];
    const CERTIFY = ['정보처리기사 취득', 'TOPCIT Level 3 취득'];
    const OUTACT = ['삼성청년 SW 아카데미 7기 Java 트랙 수료']

    return(
        <StyledAboutPage {...rest}>
            <Label color={'black'} fontSize={'5rem'} fontWeight={800}>About</Label>
            <InfoCard img={'../images/myPics.jpg'} text={DEFAULT_TEXT} width={'60rem'} height={'20rem'} textColor={'black'} fontSize={'2rem'}></InfoCard>
            <AboutWrapper>
                <AboutCard textColor={'black'} fontSize={'1.2rem'} fontWeight={900} height={'20rem'} border={true} items={GRADUATE}> </AboutCard>
                <AboutCard textColor={'black'} fontSize={'1.2rem'} fontWeight={900} height={'20rem'} border={true} items={CERTIFY}> </AboutCard>
                <AboutCard textColor={'black'} fontSize={'1rem'} fontWeight={900} height={'20rem'} border={true} items={OUTACT}></AboutCard>
            </AboutWrapper>   
        </StyledAboutPage>
    )
}

export default About;
