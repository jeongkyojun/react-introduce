import styled from "styled-components";

export const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledImageWrapper = styled.div`
    opacity: ${({isAnimation})=>isAnimation?1:0};
    transition: ${({animationTime})=>animationTime||5000}ms;
`

export const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
`
export const StyledTextParent = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    opacity: ${({isAnimation})=>isAnimation?1:0};
    transition: ${({animationTime})=>animationTime||5000}ms;
`
export const StyledTextChild = styled.div`
    display: flex;
    flex-direction: column;
`