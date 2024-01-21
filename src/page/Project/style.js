import styled from "styled-components";

export const StyledProjectPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: ${({height})=>height||'59rem'};
`