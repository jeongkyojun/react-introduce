import styled from "styled-components";

export const StyledAboutPage = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: ${({height})=>height||'59rem'};
    color:#bbbbbb;
`
export const AboutLabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5rem;
    align-items: center;
`