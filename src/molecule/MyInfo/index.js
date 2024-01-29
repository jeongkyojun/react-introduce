import React from "react";
import Image from "../../atom/Image";
import { StyledMyInfo } from "./style";
import InfoList from "../InfoList";

const MyInfo = ({img, list, width, height})=>{
    return(
        <StyledMyInfo>
            <Image src={img} alt={'myPic'} width={width} height={height} isCircle borderRadius={'2rem'}></Image>
        </StyledMyInfo>
    );
}

export default MyInfo;