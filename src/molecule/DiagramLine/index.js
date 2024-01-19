import React from "react";
import { StyledDiagramLine, StyledLinearChild, StyledLinearWrapper } from "./style";

const DiagramLine = ({childNum, width, isTop, selectNum})=>{

    const makeBoard = ()=>{
        const val = [];
        for(let i=0;i<childNum+1;i++){
            val.push(<StyledLinearWrapper isSelected={i===selectNum} isTop={isTop} isFirst={i===0} isEnd={i===(childNum)} childNum={childNum}>
                {i===selectNum}
            </StyledLinearWrapper>)
        }
        return val;
    }
    return(
        <StyledDiagramLine width={width}>
            <StyledLinearChild transitionTime={1000} setAnimation={true}>
                {
                    makeBoard()
                }
            </StyledLinearChild>
        </StyledDiagramLine>
    )
}

export default DiagramLine;
