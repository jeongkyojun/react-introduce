import React from "react";
import { ImageWrapper, StyledImage } from "./style";

const Image = ({width,height,src,alt,isCircle,clickHandler,isAnimation,...rest})=>{
    return(
        <ImageWrapper width={width} height={height} onClick={clickHandler} id={alt||'image'} {...rest}>
            <StyledImage src={src||'../logo192.png'} alt={alt} isCircle={isCircle} {...rest}/>
        </ImageWrapper>
    );
}

export default Image;