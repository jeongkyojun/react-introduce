import styled from "styled-components";

export const StyledDiagramValue = styled.div`
    display: flex;
    width: ${({width})=>width||'12rem'};
    flex-direction: column;
    padding-left: 1rem;
    padding-bottom: 1rem;
    align-items: start;
    border-bottom: 1px solid white;
`