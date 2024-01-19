import React from "react";
import Label from "../../atom/Label";
import { StyledDiagramValue } from "./style";

const DiagramValue = ({values,width})=>{
    return(
        <StyledDiagramValue width={width}>
            {
<<<<<<< HEAD
                values.map((value,index)=>{
                    return(
                        <Label key={'v'+index}>● {value}</Label>
=======
                values.map((value)=>{
                    console.log(value);
                    return(
                        <Label>● {value}</Label>
>>>>>>> 57c8f5c0198ea910fbabf2ad9b181acb349275ba
                    )
                })
            }
        </StyledDiagramValue>
    );
}

export default DiagramValue;
