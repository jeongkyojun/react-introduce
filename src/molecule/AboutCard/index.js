import React from "react";
import { StyledAboutCard } from "./style";
import Label from "../../atom/Label";

const AboutCard = ({children,textColor,fontSize,fontWeight,items,...rest})=>{
    return(
        <StyledAboutCard {...rest}>
            {
                items.map((item)=>{
                    return(
                        <Label color={'black'} fontSize={fontSize}>
                            {item}
                        </Label>
                    )
                })
            }
            {
                children
            }
        </StyledAboutCard>
    )
}

export default AboutCard;
