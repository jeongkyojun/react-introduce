import styled from "styled-components";

export const StyledStartPage = styled.div`
    display: flex;
    width: 100%;
    height: ${({height})=>height||'59rem'};
    background-color: #000000;
`

export const LabelWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    color: white;
    margin-left: 10rem;
    flex-direction: column;
    justify-content: center;
`

export const AnimationWrapper = styled.div`
    opacity: ${({keyWord})=>keyWord?1:0};
    margin-left: ${({keyWord})=>keyWord?'none':'-10rem'};
    transition: all ${({opacityTime})=>opacityTime||1000}ms;
`
