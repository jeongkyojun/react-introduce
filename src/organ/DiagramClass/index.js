import React, { useEffect, useState } from "react";
import { StyledClassWrapper, StyledDiagramClass } from "./style";
import DiagramBoard from "../DiagramBoard";
import DiagramLine from "../../molecule/DiagramLine";

const DiagramClass = ({num, maxwidth, ...rest})=>{

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
        val.push(<DiagramBoard disabled={true}/>);
        for(let i=0;i<num;i++){
            val.push(<DiagramBoard mouseOverHandler={mouseOverHandler}/>);
        }
        val.push(<DiagramBoard disabled={true}/>);
        return val;
    }

    return(
        <StyledDiagramClass width={maxwidth}>
            <DiagramLine childNum={num} width={(maxwidth-12)+'rem'} isTop={true}></DiagramLine>
            <StyledClassWrapper isAnimation={showTextMenu} animationTime={2000}>
                {
                    makeDiagram()
                }
            </StyledClassWrapper>
            <DiagramLine childNum={num} width={(maxwidth-12)+'rem'} isTop={false}></DiagramLine>
        </StyledDiagramClass>
    )
}

export default DiagramClass;
