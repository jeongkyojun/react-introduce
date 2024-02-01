import React from "react";
import { ProjectExplain, ProjectExplainWrapper, ProjectImageWrapper, ProjectTags, StyledProjectCard, TagDiv } from "./style";
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
                <ProjectTags>
                    {
                        tags.map((tag)=> {
                            return(
                                <TagDiv>#{tag}</TagDiv>
                            );
                        })
                    }
                </ProjectTags>
                <Image src={linkImg} alt={'link'} height={'3rem'} width={'3rem'} clickHandler={clickHandler}></Image>
            </ProjectExplainWrapper>
        </StyledProjectCard>
    );
}

export default ProjectCard;