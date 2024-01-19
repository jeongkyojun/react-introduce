import React from "react";
import { StyledLabel } from "./style";

export const Label = ({htmlFor,children,...rest})=>{
    return(
        <StyledLabel htmlFor={htmlFor} {...rest}>
            {children}
        </StyledLabel>
    );
}

export default Label;
