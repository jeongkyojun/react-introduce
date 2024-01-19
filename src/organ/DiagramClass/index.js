import React, { useEffect, useState } from "react";
import { StyledClassWrapper, StyledDiagramClass } from "./style";
import DiagramBoard from "../DiagramBoard";
import DiagramLine from "../../molecule/DiagramLine";

const DiagramClass = ({num, maxwidth, data, ...rest})=>{

    const [showTextMenu, setShowTextMenu] = useState(false);
    const [selectNum,setSelectNum] = useState(-1);
    useEffect(()=>{
        setTimeout(()=>{setShowTextMenu(true)},2000);
    });

    // const mouseOverHandler = (e)=>{
    //     console.log('mouseOver');
    //     console.log(e);
    // }

    const onClickHandler = (e)=>{
        console.log(e.currentTarget.id);
        setSelectNum(e.currentTarget.id);
    }

    const makeDiagram = ()=>{
        const val = [];
        val.push(<DiagramBoard disabled={true}/>);
        for(let i=0;i<num;i++){
            val.push(<DiagramBoard onClickHandler={onClickHandler} index={i}/>);
        }
        val.push(<DiagramBoard disabled={true}/>);
        return val;
    }

    return(
        <StyledDiagramClass width={maxwidth}>
            <DiagramLine childNum={data.length||num} width={(maxwidth-12)+'rem'} isTop={true}></DiagramLine>
            <StyledClassWrapper isAnimation={showTextMenu} animationTime={2000}>
                <DiagramBoard disabled={true}/>
                    {
                        data.map((diagram,index)=>{
                            return(
                                <DiagramBoard onClickHandler={onClickHandler} index={index} elements={diagram}></DiagramBoard>
                            )
                        })
                    }
                <DiagramBoard disabled={true}/>
            </StyledClassWrapper>
            <DiagramLine selectNum={selectNum} childNum={data.length||num} width={(maxwidth-12)+'rem'} isTop={false}></DiagramLine>
        </StyledDiagramClass>
    )
}

export default DiagramClass;
