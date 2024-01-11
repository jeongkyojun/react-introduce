import React from "react";
import { StyledImage } from "./style";

const Image = ({width,height,src,alt,isCircle,clickHandler,})=>{
    return(
        <ImageWrapper width={width} height={height} onClick={clickHandler}>
            <StyledImage src={src} alt={alt} isCircle={isCircle} />
        </ImageWrapper>
    );
}

export default Image;