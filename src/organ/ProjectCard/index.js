import React from "react";
import { ProjectImageWrapper, StyledProjectCard } from "./style";
import Label from "../../atom/Label";
import Image from "../../atom/Image";

const ProjectCard = ({title, src, alt,btn_src, explain, link, linkImg})=>{
    
    const clickHandler = ()=>{
        window.open(link);
    }
    return(
        <StyledProjectCard>
            <Label color={'black'} fontSize={'2rem'} fontWeight={800}>{title}</Label>
            <ProjectImageWrapper>
                <Image src={src} alt={alt} ></Image>
            </ProjectImageWrapper>
            <Image src={linkImg} alt={'link'} height={'3rem'} width={'3rem'} clickHandler={clickHandler}></Image>
        </StyledProjectCard>
    );
}

export default ProjectCard;