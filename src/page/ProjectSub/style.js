import styled from "styled-components";

export const StyledProjectSub = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: ${({height})=>height||'59rem'};
    background: linear-gradient(to top, #ffffff 10%,#71B7F5 90%);
`

export const AnimationWrapper = styled.div`
    opacity: ${({keyWord})=>keyWord?1:0};
    margin-top: ${({keyWord})=>keyWord?'none':'-10rem'};
    transition: all ${({opacityTime})=>opacityTime||1000}ms;
`
