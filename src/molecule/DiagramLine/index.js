import React, { useEffect, useState } from "react";
import { StyledDiagramLine, StyledLeftWrapper, StyledLinearChild, StyledLinearHead, StyledLinearParent, StyledLinearWrapper, StyledParentHeader, StyledRightWrapper } from "./style";

const DiagramLine = ({childNum})=>{
    const [headAnimation,setHeadAnimation] = useState(false);
    const [parentAnimation, setParentAnimation] = useState(false);
    const [childAnimation, setChildAnimation] = useState(false);

    const DEFAULT_TIME = 5000;

    const makeBoard = ()=>{
        const val = [];
        for(let i=0;i<childNum+1;i++){
            val.push(<StyledLinearWrapper childNum={childNum}></StyledLinearWrapper>)
        }
        return val;
    }
    return(
        <StyledDiagramLine>
            <StyledLinearChild transitionTime={DEFAULT_TIME} setAnimation={true}>
                {
                    makeBoard()
                }
            </StyledLinearChild>
        </StyledDiagramLine>
    )
}

export default DiagramLine;
