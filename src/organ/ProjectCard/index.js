import React from "react";
import { ProjectExplain, ProjectExplainWrapper, ProjectImageWrapper, ProjectTags, StyledProjectCard } from "./style";
import Label from "../../atom/Label";
import Image from "../../atom/Image";

const ProjectCard = ({title, src, alt,btn_src, explain, link, linkImg})=>{
    
    const clickHandler = ()=>{
        window.open(link);
    }
    return(
        <StyledProjectCard>
            <ProjectImageWrapper>
                <Image src={src} alt={alt} height={'100%'}></Image>
            </ProjectImageWrapper>
            <ProjectExplainWrapper>
                <Label color={'black'} fontSize={'2rem'} >{title}</Label>
                <ProjectExplain>
                    {explain}
                </ProjectExplain>
                <ProjectTags>
                    #vue
                </ProjectTags>
                <Image src={linkImg} alt={'link'} height={'3rem'} width={'3rem'} clickHandler={clickHandler}></Image>
            </ProjectExplainWrapper>
        </StyledProjectCard>
    );
}

export default ProjectCard;