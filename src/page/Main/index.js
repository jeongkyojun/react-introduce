import React, { useEffect, useState } from "react";
import { StyledImageWrapper, StyledMain, StyledTextChild, StyledTextParent, StyledTextWrapper } from "./style";
import Image from "../../atom/Image";
import Label from "../../atom/Label";
import DiagramBoard from "../../organ/DiagramBoard";

const Main = ()=>{
    const [showImageMenu, setShowImageMenu] = useState(false);
    const [showTextMenu, setShowTextMenu] = useState(false);
    useEffect(()=>{
        setShowImageMenu(true);
    })
    useEffect(()=>{
        setTimeout(()=>{setShowTextMenu(true)},2000);
    },showImageMenu);

    return(
        <StyledMain>
            <StyledImageWrapper isAnimation={showImageMenu} animationTime={2000}>
                <Image src={'/images/myPics.jpg'} alt={'myPics'} width={'10rem'} height={'10rem'} isCircle={true}></Image>
            </StyledImageWrapper>
            <StyledTextWrapper>
                <StyledTextParent isAnimation={showTextMenu} animationTime={2000}>
                    <DiagramBoard>

                    </DiagramBoard>
                </StyledTextParent>
                <StyledTextChild></StyledTextChild>
                <StyledTextParent>
                    <Label></Label>
                </StyledTextParent>
            </StyledTextWrapper>
        </StyledMain>
    );
}

export default Main;