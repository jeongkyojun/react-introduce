import React from "react";
import { StyledAboutCard } from "./style";
import Label from "../../atom/Label";

const AboutCard = ({children,textColor,fontSize,fontWeight,...rest})=>{
    return(
        <StyledAboutCard {...rest}>
            {
                children
            }
        </StyledAboutCard>
    )
}

export default AboutCard;
