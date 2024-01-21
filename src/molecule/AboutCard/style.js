import styled from "styled-components";

export const StyledAboutCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 3rem;
    background-color: ${({backgroundColor})=>backgroundColor||'none'};
    width: ${({width})=>width||'20rem'};
    height: ${({height})=>height||'5rem'};
    border: 1px solid black;
    margin-top: 1rem;
`