import React, { useEffect, useState } from "react";
import { AnimationWrapper, LabelWrapper, StyledStartPage } from "./style";
import Label from "../../atom/Label";

const Start = ({...rest})=>{
    const [sayHello,setSayHello] = useState(false);
    const [sayMyName,setSayMyName] = useState(false);

    const DEFAULT_TIME = 1000;

    useEffect(()=>{
        setSayHello(true);
        setTimeout(
            ()=>{
            setSayMyName(true)
            },DEFAULT_TIME
        )
    })
    return(
        <StyledStartPage {...rest}>
            <LabelWrapper>
                <AnimationWrapper keyWord={sayHello} opacityTime={DEFAULT_TIME}>
                    <Label fontSize={'4rem'} fontWeight={600}> 안녕하세요, </Label>
                </AnimationWrapper>
                <AnimationWrapper keyWord={sayMyName} opacityTime={DEFAULT_TIME}>
                    <Label fontSize={'5rem'} fontWeight={800}> Developer 정교준입니다. </Label>
                </AnimationWrapper>
            </LabelWrapper>
        </StyledStartPage>
    );
}

export default Start;
