import React from "react";
import { StyledProjectPage } from "./style";
import Label from "../../atom/Label";

const Project = ({...rest})=>{
    return(
        <StyledProjectPage {...rest}>
            <Label color={'black'} fontSize={'5rem'} fontWeight={800}>Projects</Label>
        </StyledProjectPage>
    )
}

export default Project;
