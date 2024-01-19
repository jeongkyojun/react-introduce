import React, { useEffect, useRef } from 'react';
import { AboutLabelWrapper, StyledAboutPage } from './style';
import Label from '../../atom/Label';

const About = ({...rest})=>{

    return(
        <StyledAboutPage {...rest}>
            <AboutLabelWrapper>
                <Label color={'black'} fontSize={'4rem'} fontWeight={600}>About</Label>
                <Label color={'black'} fontSize={'4rem'} fontWeight={600}>Me</Label>

            </AboutLabelWrapper>
        </StyledAboutPage>
    )
}

export default About;
