import React, { useEffect, useState } from "react";
import { StyledClassWrapper, StyledDiagramClass } from "./style";
import DiagramBoard from "../DiagramBoard";
import DiagramLine from "../../molecule/DiagramLine";

const DiagramClass = ({num})=>{

    const [showTextMenu, setShowTextMenu] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{setShowTextMenu(true)},2000);
    });

    const mouseOverHandler = (e)=>{
        console.log('mouseOver');
        console.log(e);
    }

    const makeDiagram = ()=>{
        const val = [];
        val.push(<DiagramBoard disabled/>);
        for(let i=0;i<num;i++){
            val.push(<DiagramBoard mouseOverHandler={mouseOverHandler}/>);
        }
        val.push(<DiagramBoard disabled/>);
        return val;
    }

    return(
        <StyledDiagramClass>
            <DiagramLine childNum={3}></DiagramLine>
                <StyledClassWrapper isAnimation={showTextMenu} animationTime={2000}>
                    {
                        makeDiagram()
                    }
                </StyledClassWrapper>
        </StyledDiagramClass>
    )
}

export default DiagramClass;
