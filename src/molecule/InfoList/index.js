import React from "react";
import { StyledInfoList } from "./style";
import Label from "../../atom/Label";

const InfoList = ({list})=>{
    return(
        <StyledInfoList>
            {
                list?.map((text)=>{
                    return(
                        <Label>{text}</Label>
                    )
                })
            }
        </StyledInfoList>
    )
}

export default InfoList;
