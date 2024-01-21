import React from "react";
import Image from "../../atom/Image";
import { StyledInfoCard } from "./style";
import AboutCard from "../../molecule/AboutCard";
import MyInfo from "../../molecule/MyInfo";

const InfoCard = ({img, text,...rest})=>{
    return(
        <AboutCard {...rest}>
            <MyInfo img={img} list={text} width={rest.width} height={rest.width}></MyInfo>
        </AboutCard>
    )
}

export default InfoCard;
