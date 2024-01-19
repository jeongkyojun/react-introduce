import React from "react";
import Label from "../../atom/Label";
import { StyledDiagramMethod } from "./style";

const DiagramMethod = ({methods,width})=>{
    return(
        <StyledDiagramMethod width={width}>
            {
                methods.map((method,index)=>{
                    return(
                        <Label key={'m'+index}>● {method}{'()'}</Label>
                    )
                })
            }
        </StyledDiagramMethod>
    );
}

export default DiagramMethod;
