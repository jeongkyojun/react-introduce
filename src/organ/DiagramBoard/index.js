import React from "react";
import { DiagramHeaderWrapper, StyledDiagramBoard } from "./style";
import Label from "../../atom/Label";
import DiagramValue from "../../molecule/DiagramValue";
import DiagramMethod from "../../molecule/DiagramMethod";

<<<<<<< HEAD
const DiagramBoard = ({elements,width,mouseOverHandler,onClickHandler, disabled,index, ...rest})=>{
    const DEFAULT_VALUE = ['a','b','c'];
    const DEFAULT_METHOD = ['birth','phone','email'];
    return(
        <StyledDiagramBoard disabled={disabled} onMouseOver={mouseOverHandler} onClick={onClickHandler} width={width+'rem'} id={index} {...rest}>
=======
const DiagramBoard = ({elements,width,mouseOverHandler,disabled,...rest})=>{
    const DEFAULT_VALUE = ['a','b','c'];
    const DEFAULT_METHOD = ['birth','phone','email'];
    return(
        <StyledDiagramBoard disabled={disabled} onMouseOver={mouseOverHandler} width={width+'rem'} {...rest}>
>>>>>>> 57c8f5c0198ea910fbabf2ad9b181acb349275ba
            <DiagramHeaderWrapper>
                <Label>{elements?.title||'title'}</Label>
            </DiagramHeaderWrapper>
            <DiagramValue values={elements?.values||DEFAULT_VALUE} width={(width-1)+'rem'}></DiagramValue>
            <DiagramMethod methods={elements?.methods||DEFAULT_METHOD} width={(width-1)+'rem'}></DiagramMethod>
        </StyledDiagramBoard>
    )
}

export default DiagramBoard;