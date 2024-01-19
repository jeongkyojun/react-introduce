import React, { useEffect, useState } from "react";
import { StyledClassWrapper, StyledDiagramClass } from "./style";
import DiagramBoard from "../DiagramBoard";
import DiagramLine from "../../molecule/DiagramLine";

<<<<<<< HEAD
const DiagramClass = ({num, maxwidth, data, ...rest})=>{

    const [showTextMenu, setShowTextMenu] = useState(false);
    const [selectNum,setSelectNum] = useState(-1);
=======
const DiagramClass = ({num, maxwidth, ...rest})=>{

    const [showTextMenu, setShowTextMenu] = useState(false);
>>>>>>> 57c8f5c0198ea910fbabf2ad9b181acb349275ba
    useEffect(()=>{
        setTimeout(()=>{setShowTextMenu(true)},2000);
    });

<<<<<<< HEAD
    // const mouseOverHandler = (e)=>{
    //     console.log('mouseOver');
    //     console.log(e);
    // }

    const onClickHandler = (e)=>{
        console.log(e.currentTarget.id);
        setSelectNum(e.currentTarget.id);
=======
    const mouseOverHandler = (e)=>{
        console.log('mouseOver');
        console.log(e);
>>>>>>> 57c8f5c0198ea910fbabf2ad9b181acb349275ba
    }

    const makeDiagram = ()=>{
        const val = [];
        val.push(<DiagramBoard disabled={true}/>);
        for(let i=0;i<num;i++){
<<<<<<< HEAD
            val.push(<DiagramBoard onClickHandler={onClickHandler} index={i}/>);
=======
            val.push(<DiagramBoard mouseOverHandler={mouseOverHandler}/>);
>>>>>>> 57c8f5c0198ea910fbabf2ad9b181acb349275ba
        }
        val.push(<DiagramBoard disabled={true}/>);
        return val;
    }

    return(
        <StyledDiagramClass width={maxwidth}>
<<<<<<< HEAD
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
=======
            <DiagramLine childNum={num} width={(maxwidth-12)+'rem'} isTop={true}></DiagramLine>
            <StyledClassWrapper isAnimation={showTextMenu} animationTime={2000}>
                {
                    makeDiagram()
                }
            </StyledClassWrapper>
            <DiagramLine childNum={num} width={(maxwidth-12)+'rem'} isTop={false}></DiagramLine>
>>>>>>> 57c8f5c0198ea910fbabf2ad9b181acb349275ba
        </StyledDiagramClass>
    )
}

export default DiagramClass;
