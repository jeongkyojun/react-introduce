import React, { useEffect, useState } from "react";
import { StyledDiagramLine, StyledLeftWrapper, StyledLinearChild, StyledLinearHead, StyledLinearParent, StyledLinearWrapper, StyledParentHeader, StyledRightWrapper } from "./style";

const DiagramLine = ({childNum, width, isTop, selectNum})=>{

    const makeBoard = ()=>{
        const val = [];
        for(let i=0;i<childNum+1;i++){
<<<<<<< HEAD
            val.push(<StyledLinearWrapper isSelected={i===selectNum} isTop={isTop} isFirst={i===0} isEnd={i===(childNum)} childNum={childNum}>
                {i===selectNum}
            </StyledLinearWrapper>)
=======
            val.push(<StyledLinearWrapper isSelected={i===selectNum} isTop={isTop} isFirst={i===0} isEnd={i===(childNum)} childNum={childNum}></StyledLinearWrapper>)
>>>>>>> 57c8f5c0198ea910fbabf2ad9b181acb349275ba
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
