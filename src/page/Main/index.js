import React, { useEffect, useState } from "react";
import { StyledImageWrapper, StyledMain, StyledTextChild, StyledTextParent, StyledTextWrapper } from "./style";
import Image from "../../atom/Image";
import Label from "../../atom/Label";
import DiagramBoard from "../../organ/DiagramBoard";
import DiagramLine from "../../molecule/DiagramLine";
import DiagramClass from "../../organ/DiagramClass";
import { HeadData } from "../../data/DiagramData/data";

const Main = ()=>{
    const [showImageMenu, setShowImageMenu] = useState(false);
    
    useEffect(()=>{
        setShowImageMenu(true);
    })
    

    return(
        <StyledMain>
            <StyledImageWrapper isAnimation={showImageMenu} animationTime={2000}>
                <Image src={'/images/myPics.jpg'} alt={'myPics'} width={'10rem'} height={'10rem'} isCircle={true}></Image>
            </StyledImageWrapper>
            <StyledTextWrapper>
                <DiagramClass num={3} maxwidth={100} data={HeadData}></DiagramClass>
                <StyledTextChild></StyledTextChild>
                <StyledTextParent>
                    <Label>test</Label>
                </StyledTextParent>
            </StyledTextWrapper>
        </StyledMain>
    );
}

export default Main;