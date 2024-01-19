import React from "react";
import Label from "../../atom/Label";
import { StyledDiagramValue } from "./style";

const DiagramValue = ({values,width})=>{
    return(
        <StyledDiagramValue width={width}>
            {
                values.map((value,index)=>{
                    return(
                        <Label key={'v'+index}>● {value}</Label>
                    )
                })
            }
        </StyledDiagramValue>
    );
}

export default DiagramValue;
