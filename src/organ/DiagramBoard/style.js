import styled from "styled-components";

export const StyledDiagramBoard = styled.div`
    opacity: ${({disabled})=>disabled?0:1};
    width: ${({width})=>width||'12rem'};
    height: ${({height})=>height||'14rem'};
    border : 1px solid white;
`
export const DiagramHeaderWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid white;
    width: ${({width})=>width||'12rem'};
    height: 2rem;
    justify-content: center;
    align-items: center;
`