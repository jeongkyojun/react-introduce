import styled from "styled-components";

export const StyledDiagramMethod = styled.div`
    display: flex;
    width: ${({width})=>width||'12rem'};
    height: ${({height})=>height||'5rem'};
    flex-direction: column;
    padding-left: 1rem;
    padding-bottom: 1rem;
    align-items: start;
`