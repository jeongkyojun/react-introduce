import React from "react";
import { DiagramHeaderWrapper, StyledDiagramBoard } from "./style";
import Label from "../../atom/Label";
import DiagramValue from "../../molecule/DiagramValue";
import DiagramMethod from "../../molecule/DiagramMethod";

const DiagramBoard = ({elements})=>{
    const DEFAULT_VALUE = ['a','b','c'];
    const DEFAULT_METHOD = ['birth','phone','email'];
    return(
        <StyledDiagramBoard>
            <DiagramHeaderWrapper>
                <Label>{elements?.title||'title'}</Label>
            </DiagramHeaderWrapper>
            <DiagramValue values={elements?.values||DEFAULT_VALUE} width={12} width_string={'rem'}></DiagramValue>
            <DiagramMethod methods={elements?.methods||DEFAULT_METHOD} width={12} width_string={'rem'}></DiagramMethod>
        </StyledDiagramBoard>
    )
}

export default DiagramBoard;