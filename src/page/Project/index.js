import React from "react";
import { StyledProjectPage, StyledProjectWrapper } from "./style";
import Label from "../../atom/Label";
import ProjectCard from "../../organ/ProjectCard";
import Image from "../../atom/Image";

const Project = ({...rest})=>{
    return(
        <StyledProjectPage {...rest}>
            <Label color={'black'} fontSize={'5rem'} fontWeight={800}>Projects</Label>
            <StyledProjectWrapper>
                <ProjectCard 
                    title={'Flody'} 
                    link={'https://github.com/jeongkyojun/flodyRemake'} 
                    src={'../images/projects/Flody_mainPage.png'} 
                    alt={'flody'}
                    linkImg={'../images/github.png'}>
                </ProjectCard>
            </StyledProjectWrapper>
        </StyledProjectPage>
    )
}

export default Project;
