import React from "react";
import Label from "../../atom/Label";
import { StyledDiagramMethod } from "./style";

const DiagramMethod = ({methods,width})=>{
    return(
        <StyledDiagramMethod width={width}>
            {
<<<<<<< HEAD
                methods.map((method,index)=>{
                    return(
                        <Label key={'m'+index}>● {method}{'()'}</Label>
=======
                methods.map((method)=>{
                    return(
                        <Label>● {method}{'()'}</Label>
>>>>>>> 57c8f5c0198ea910fbabf2ad9b181acb349275ba
                    )
                })
            }
        </StyledDiagramMethod>
    );
}

export default DiagramMethod;
