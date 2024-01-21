import React from "react";
import About from "../About";
import Start from "../Start";
import Project from "../Project";
import Skills from "../Skills";
import AboutSub from "../AboutSub";
import SkillSub from "../SkillSub";
import ProjectSub from "../ProjectSub";
import { StyledMain } from "./style";

const Main = ()=>{
    const DEFAULT_HEIGHT = '1080px';
    return(
        <StyledMain>
            <Start height={DEFAULT_HEIGHT}></Start>
            <AboutSub height={DEFAULT_HEIGHT}></AboutSub>
            <About height={DEFAULT_HEIGHT}></About>
            <SkillSub height={DEFAULT_HEIGHT}></SkillSub>
            <Skills height={DEFAULT_HEIGHT}></Skills>
            <ProjectSub height={DEFAULT_HEIGHT}></ProjectSub>
            <Project height={DEFAULT_HEIGHT}></Project>
        </StyledMain>
    )
}

export default Main;
