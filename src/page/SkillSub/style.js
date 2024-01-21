import styled from "styled-components";

export const StyledSkillSub = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: ${({height})=>height||'59rem'};
    background: linear-gradient(to top, #71B7F5 10%,#ffffff 90%);
`

export const AnimationWrapper = styled.div`
    opacity: ${({keyWord})=>keyWord?1:0};
    margin-top: ${({keyWord})=>keyWord?'none':'-10rem'};
    transition: all ${({opacityTime})=>opacityTime||1000}ms;
`
