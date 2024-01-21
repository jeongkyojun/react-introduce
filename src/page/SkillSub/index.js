import React, { useEffect, useState } from "react";
import { AnimationWrapper, StyledSkillSub } from "./style";
import Label from "../../atom/Label";

const SkillSub = ({...rest})=>{
    const [animationKey,setAnimationKey] = useState(false);

    const DEFAULT_TIME = 1000;

    useEffect(()=>{
        setAnimationKey(true);
    })

    return(
        <StyledSkillSub {...rest}>
            <AnimationWrapper keyWord={animationKey} opacityTime={DEFAULT_TIME}>
                <Label fontSize={'3rem'} fontWeight={600}> 다양한 프레임워크와 라이브러리를 공부합니다. </Label>
            </AnimationWrapper>
        </StyledSkillSub>
    )
}

export default SkillSub;
