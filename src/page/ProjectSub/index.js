import React, { useEffect, useState } from "react";
import { AnimationWrapper, StyledProjectSub } from "./style";
import Label from "../../atom/Label";

const ProjectSub = ({...rest})=>{
    const [animationKey,setAnimationKey] = useState(false);

    const DEFAULT_TIME = 1000;

    useEffect(()=>{
        setAnimationKey(true);
    })

    return(
        <StyledProjectSub {...rest}>
            <AnimationWrapper keyWord={animationKey} opacityTime={DEFAULT_TIME}>
                <Label fontSize={'3rem'} fontWeight={600}> 협업을 통하여 스스로 성장합니다. </Label>
            </AnimationWrapper>
        </StyledProjectSub>
    )
}

export default ProjectSub;
