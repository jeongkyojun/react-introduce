import React, { useState } from "react";
import { SkillWrapperBody, SkillWrapperBodyImages, SkillWrapperHeader, StyledExplainWrapper, StyledSkillPage, StyledSkillWrapper } from "./style";
import Image from "../../atom/Image";
import Label from "../../atom/Label";

const Skills = ({...rest})=>{
    const [clickState, setClickState] = useState(false);

    const clickIconHandler = ()=>{
        console.log("click");
        setClickState((prev)=>{
            return(!prev);
        });
    }

    return (
        <StyledSkillPage {...rest}>
            <StyledSkillWrapper>
                <SkillWrapperHeader> 
                    <Label color={'black'} fontSize={'4rem'} fontWeight={800}>
                        Skills
                    </Label>
                </SkillWrapperHeader>
                <SkillWrapperBody onClick={clickIconHandler}>
                    <Label color={'black'} fontSize={'2rem'} fontWeight={800}> Front-end</Label>
                    <SkillWrapperBodyImages>
                        <Image alt={'html'} width={'6rem'} height={'6rem'}></Image>
                        <Image alt={'css'} width={'6rem'} height={'6rem'}></Image>
                        <Image alt={'javaScript'} width={'6rem'} height={'6rem'}></Image>
                        <Image alt={'react'} width={'6rem'} height={'6rem'}></Image>
                        <Image alt={'vue'} width={'6rem'} height={'6rem'}></Image>
                    </SkillWrapperBodyImages>
                    <Label color={'black'} fontSize={'2rem'} fontWeight={800}> Back-end</Label>
                    <SkillWrapperBodyImages>
                        <Image alt={'java'} width={'6rem'} height={'6rem'}></Image>
                        <Image alt={'spring'} width={'6rem'} height={'6rem'}></Image>
                    </SkillWrapperBodyImages>
                    <Label color={'black'} fontSize={'2rem'} fontWeight={800}> Etc</Label>
                    <SkillWrapperBodyImages>
                        <Image alt={'docker'} width={'6rem'} height={'6rem'}></Image>
                        <Image alt={'jenkins'} width={'6rem'} height={'6rem'}></Image>
                    </SkillWrapperBodyImages>
                </SkillWrapperBody>
            </StyledSkillWrapper>
            <StyledExplainWrapper isExplain={clickState}>
                
            </StyledExplainWrapper>
        </StyledSkillPage>
    )
}

export default Skills;
