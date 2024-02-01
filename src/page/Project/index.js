import React, { useEffect, useState } from "react";
import { AnimationWrapper, StyledProjectPage, StyledProjectWrapper } from "./style";
import Label from "../../atom/Label";
import ProjectCard from "../../organ/ProjectCard";
import Image from "../../atom/Image";
import { PROJECT_COLDAY, PROJECT_FLODY, PROJECT_INSSA } from "../../data/ProjectData/data";

const Project = ({...rest})=>{

    return(
        <StyledProjectPage {...rest}>
            <Label color={'black'} fontSize={'5rem'} fontWeight={800}>Projects</Label>
            <StyledProjectWrapper>
                <ProjectCard 
                    data={PROJECT_FLODY}
                    link={'https://github.com/jeongkyojun/flodyRemake'} 
                    src={'../images/projects/Flody_mainPage.png'} 
                    alt={'flody'}
                    linkImg={'../images/github.png'}
                    >
                </ProjectCard>
                <ProjectCard 
                    data={PROJECT_COLDAY}
                    link={'https://github.com/jeongkyojun/flodyRemake'} 
                    src={'../images/projects/Flody_mainPage.png'} 
                    alt={'flody'}
                    linkImg={'../images/github.png'}
                    >
                </ProjectCard>
                <ProjectCard 
                    data={PROJECT_INSSA}
                    link={'https://github.com/jeongkyojun/flodyRemake'} 
                    src={'../images/projects/Flody_mainPage.png'} 
                    alt={'flody'}
                    linkImg={'../images/github.png'}
                    >
                </ProjectCard>
            </StyledProjectWrapper>
        </StyledProjectPage>
    )
}

export default Project;
