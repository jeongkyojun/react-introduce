import React from "react";
import { DiagramHeaderWrapper, StyledDiagramBoard } from "./style";
import Label from "../../atom/Label";
import DiagramValue from "../../molecule/DiagramValue";
import DiagramMethod from "../../molecule/DiagramMethod";

const DiagramBoard = ({elements,width,mouseOverHandler})=>{
    const DEFAULT_VALUE = ['a','b','c'];
    const DEFAULT_METHOD = ['birth','phone','email'];
    return(
        <StyledDiagramBoard onMouseOver={mouseOverHandler}>
            <DiagramHeaderWrapper>
                <Label>{elements?.title||'title'}</Label>
            </DiagramHeaderWrapper>
            <DiagramValue values={elements?.values||DEFAULT_VALUE} width={(width-1)+'rem'}></DiagramValue>
            <DiagramMethod methods={elements?.methods||DEFAULT_METHOD} width={(width-1)+'rem'}></DiagramMethod>
        </StyledDiagramBoard>
    )
}

export default DiagramBoard;