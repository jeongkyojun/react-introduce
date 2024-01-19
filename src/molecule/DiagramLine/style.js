import styled, { css } from "styled-components";

export const StyledDiagramLine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${({width})=>width||'100rem'};
    align-items: center;
`

export const StyledLinearHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
`
export const StyledLinearChild = styled.div`
    display: flex;
    color: white;
    flex-direction: row;
    justify-content: center;
    width: ${({setAnimation})=>setAnimation?'100%':'0rem'};;
    height: ${({setAnimation})=>setAnimation?'5rem':'0rem'};
    transition: ${({transitionTime})=>transitionTime||5000}ms;
`
export const StyledLinearWrapper = styled.div`
    width: ${({childNum})=>(100/(childNum+1))||33}rem;
    color: white;
    ${({isTop,isSelected})=>
        isTop?
        css`
            border-top: ${({isEnd,isFirst})=> (isEnd||isFirst)?'none':'1px solid white'};
            border-left: ${({isFirst})=> isFirst?'none':'1px solid white'};
        `:
            isSelected?
            css`
                border-bottom: ${({isEnd,isFirst})=> (isEnd||isFirst)?'none':'1px solid white'};
                border-right: ${({isFirst})=> isFirst?'1px solid white':'none'};
            `:
            css`
            `         
    }
    
`
