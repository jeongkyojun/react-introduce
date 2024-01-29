import React from "react";
import Image from "../../atom/Image";
import { StyledInfoCard } from "./style";
import AboutCard from "../../molecule/AboutCard";
import MyInfo from "../../molecule/MyInfo";

const InfoCard = ({img, text,...rest})=>{
    return(
        <StyledInfoCard {...rest}>
            <MyInfo img={img} list={text} width={'15rem'} height={'15rem'}></MyInfo>
        </StyledInfoCard>
    )
}

export default InfoCard;
