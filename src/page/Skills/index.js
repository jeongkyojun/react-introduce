import React, { useState } from "react";
import { SkillWrapperBody, SkillWrapperBodyImages, SkillWrapperHeader, StyledExplainWrapper, StyledSkillPage, StyledSkillWrapper } from "./style";
import Image from "../../atom/Image";
import Label from "../../atom/Label";
import { ExplainData } from "../../data/AboutData/data";

const Skills = ({...rest})=>{
    const [clickState, setClickState] = useState(false);
    const [selected,setSelected] = useState('none');

    const clickIconHandler = (e)=>{
        if(!clickState || selected===e.currentTarget.id){
            setClickState((prev)=>{
                return(!prev);
            });
        }
        setSelected(e.currentTarget.id);
    }

    return (
        <StyledSkillPage {...rest}>
            <StyledSkillWrapper isExplain={clickState}>
                <SkillWrapperHeader> 
                    <Label color={'black'} fontSize={'4rem'} fontWeight={800}>
                        Skills
                    </Label>
                </SkillWrapperHeader>
                <SkillWrapperBody>
                    <Label color={'black'} fontSize={'2rem'} fontWeight={800}> Front-end</Label>
                    <SkillWrapperBodyImages>
                        <Image src={'../images/html.png'} alt={'html'} width={'6rem'} height={'6rem'} clickHandler={clickIconHandler}></Image>
                        <Image src={'../images/css.png'} alt={'css'} width={'6rem'} height={'6rem'} clickHandler={clickIconHandler}></Image>
                        <Image src={'../images/js.png'} alt={'javaScript'} width={'6rem'} height={'6rem'} clickHandler={clickIconHandler}></Image>
                        <Image src={'../images/vue.png'} alt={'vue'} width={'6rem'} height={'6rem'} clickHandler={clickIconHandler}></Image>
                        <Image src={'../images/react.png'} alt={'react'} width={'6rem'} height={'6rem'}></Image>
                    </SkillWrapperBodyImages>
                    <Label color={'black'} fontSize={'2rem'} fontWeight={800}> Back-end</Label>
                    <SkillWrapperBodyImages>
                        <Image src={'../images/java.png'} alt={'java'} width={'6rem'} height={'6rem'} clickHandler={clickIconHandler}></Image>
                        <Image alt={'spring'} width={'6rem'} height={'6rem'}></Image>
                    </SkillWrapperBodyImages>
                    <Label color={'black'} fontSize={'2rem'} fontWeight={800}> Etc</Label>
                    <SkillWrapperBodyImages>
                        <Image src={'../images/github.png'} alt={'github'} width={'6rem'} height={'6rem'}></Image>
                        <Image alt={'docker'} width={'6rem'} height={'6rem'}></Image>
                        <Image alt={'jenkins'} width={'6rem'} height={'6rem'}></Image>
                    </SkillWrapperBodyImages>
                </SkillWrapperBody>
            </StyledSkillWrapper>
            <StyledExplainWrapper isExplain={clickState}>
                <Label color={'black'} fontSize={'2rem'}> selected </Label>
                <Label color={'black'} fontSize={'2rem'}>{ExplainData[selected]}</Label>
            </StyledExplainWrapper>
        </StyledSkillPage>
    )
}

export default Skills;
