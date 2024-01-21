import styled, { css } from "styled-components";

export const StyledSkillPage = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: ${({height})=>height||'59rem'};
    background-color: #71B7F5;
`

export const StyledSkillWrapper = styled.div`
    display: flex;
    position: relative;
    left:${({isExplain})=>isExplain?'0%': '20%'};
    z-index: 1;
    flex-direction: column;
    align-items: center;
    width: 40rem;
    height: 48rem;
    border-radius: 5rem;
    background-color: #ffffff;
    transition: all 1000ms;
`

export const SkillWrapperHeader = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
`
export const SkillWrapperBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30rem;
    width: 90%;
`

export const SkillWrapperBodyImages = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`

export const StyledExplainWrapper = styled.div`
    display: flex;
    position: relative;
    left:${({isExplain})=>isExplain?'0%': '-20%'};
    flex-direction: column;
    align-items: center;
    width: 40rem;
    height: 48rem;
    border-radius: 5rem;
    background-color: #ffffff;
    opacity: ${({isExplain})=>isExplain?1:0};
    transition: all 1000ms;
`

