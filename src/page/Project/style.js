import styled from "styled-components";

export const StyledProjectPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: ${({height})=>height||'59rem'};
`

export const StyledProjectWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid blue;
`