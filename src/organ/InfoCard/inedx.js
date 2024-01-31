import React from "react";
import { StyledInfoCard } from "./style";
import MyInfo from "../../molecule/MyInfo";

const InfoCard = ({img, text,...rest})=>{
    return(
        <StyledInfoCard {...rest}>
            <MyInfo img={img} list={text} width={'10rem'} height={'10rem'}></MyInfo>
        </StyledInfoCard>
    )
}

export default InfoCard;
