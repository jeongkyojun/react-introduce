import styled from "styled-components";

export const StyledAboutPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${({height})=>height||'59rem'};
    align-items: center;
    color:#bbbbbb;
`

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const AboutLabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const AboutExplainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50rem;
    height: 50rem;
    background-color: red;
`