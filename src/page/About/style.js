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
    width: 70rem;
    justify-content: space-between;
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
    width: 10rem;
    height: 10rem;
    border: 1px solid red;
`