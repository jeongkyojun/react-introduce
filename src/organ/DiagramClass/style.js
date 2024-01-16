import styled from "styled-components";

export const StyledDiagramClass = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${({width})=>width||'100rem'};
`

export const StyledClassWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: ${({width})=>width||'100rem'};
    color: white;
    opacity: ${({isAnimation})=>isAnimation?1:0};
    transition: ${({animationTime})=>animationTime||5000}ms;
`
