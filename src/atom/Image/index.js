import React from "react";
import { ImageWrapper, StyledImage } from "./style";

const Image = ({width,height,src,alt,isCircle,clickHandler,isAnimation,})=>{
    return(
        <ImageWrapper width={width} height={height} onClick={clickHandler}>
            <StyledImage src={src||'../logo192.png'} alt={alt} isCircle={isCircle} />
        </ImageWrapper>
    );
}

export default Image;