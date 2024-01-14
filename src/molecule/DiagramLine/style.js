import styled from "styled-components";

export const StyledDiagramLine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    align-items: center;
`

export const StyledLinearHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
`

export const StyledParentHeader = styled.div`
    border-bottom: ${({setAnimation})=>setAnimation?'1rem':'0rem'} solid white;
    border-top: 0.5rem solid transparent;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    transition: ${({transitionTime})=>transitionTime||5000}ms;
`

export const StyledLinearParent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    height: ${({setAnimation})=>setAnimation?'2rem':'0rem'};
    transition: ${({transitionTime})=>transitionTime||5000}ms;
`

export const StyledLinearChild = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: ${({setAnimation})=>setAnimation?'100%':'0rem'};;
    height: ${({setAnimation})=>setAnimation?'5rem':'0rem'};
    transition: ${({transitionTime})=>transitionTime||5000}ms;
`

export const StyledLeftWrapper = styled.div`
    width: ${({childNum})=>(100/(childNum+1))||50}rem;
    border-right: 1px solid white;
`

export const StyledRightWrapper = styled.div`
    width: ${({childNum})=>(100/(childNum+1))||50}rem;
`

export const StyledLinearWrapper = styled.div`
    width: ${({childNum})=>(100/(childNum+1))||33}rem;
    border-top: 1px solid white;
    border-right: 1px solid white;
`
