import React, { useEffect, useState } from "react";
import { AnimationWrapper, StyledAboutSub } from "./style";
import Label from "../../atom/Label";

const AboutSub = ({...rest})=>{
    const [animationKey,setAnimationKey] = useState(false);

    const DEFAULT_TIME = 1000;

    useEffect(()=>{
        setAnimationKey(true);
    })

    return(
        <StyledAboutSub {...rest}>
            <AnimationWrapper keyWord={animationKey} opacityTime={DEFAULT_TIME}>
                <Label fontSize={'3rem'} fontWeight={600}> 상상을 현실로 옮기는 프론트엔드가 되기 위해 노력합니다. </Label>
            </AnimationWrapper>
        </StyledAboutSub>
    )
}

export default AboutSub;
