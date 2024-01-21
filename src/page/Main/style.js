import styled from "styled-components";

export const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledImageWrapper = styled.div`
    opacity: ${({isAnimation})=>isAnimation?1:0};
    transition: ${({animationTime})=>animationTime||5000}ms;
`

export const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`
export const StyledTextParent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    opacity: ${({isAnimation})=>isAnimation?1:0};
    transition: ${({animationTime})=>animationTime||5000}ms;
`
export const StyledTextChild = styled.div`
    display: flex;
    flex-direction: column;
`