import React from "react";
import { ProjectExplain, ProjectExplainWrapper, ProjectImageWrapper, ProjectLink, ProjectTags, ProjectTime, StyledProjectCard, TagDiv } from "./style";
import Label from "../../atom/Label";
import Image from "../../atom/Image";

const ProjectCard = ({data, src, alt, link, linkImg, ...rest})=>{
    
    const {title,time,explain,tags} = data;

    const clickHandler = ()=>{
        window.open(link);
    }
    return(
        <StyledProjectCard {...rest}>
            <ProjectImageWrapper>
                <Image src={src} alt={alt} height={'100%'}></Image>
            </ProjectImageWrapper>
            <ProjectExplainWrapper>
                <Label color={'black'} fontSize={'2rem'} >{title}</Label>
                <ProjectExplain>
                    {explain}
                </ProjectExplain>
                <ProjectTime>
                    프로젝트 기간 : {time}
                </ProjectTime>
                <ProjectTags>
                    {
                        tags.map((tag)=> {
                            return(
                                <TagDiv>#{tag}</TagDiv>
                            );
                        })
                    }
                </ProjectTags>
                <ProjectLink>
                    <Image src={linkImg} alt={'link'} height={'2rem'} width={'2rem'} clickHandler={clickHandler}></Image>
                </ProjectLink>
            </ProjectExplainWrapper>
        </StyledProjectCard>
    );
}

export default ProjectCard;