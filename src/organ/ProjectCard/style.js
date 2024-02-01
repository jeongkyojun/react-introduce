import styled from "styled-components";

export const StyledProjectCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 60rem;
    height: 25rem;
    box-shadow: 1px 1px 1px 1px gray;
    border-radius: 1rem;
    background-color: ${({background})=>background||'none'};
`

export const ProjectImageWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 29rem;
    margin-left: 2rem;
`
export const ProjectExplainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 29rem;
    height: 90%;
    border: 1px solid green;
    margin-left: 1rem;
    margin-right: 1rem;
`
export const ProjectExplain = styled.div``;

export const ProjectTags = styled.div`
    display:flex;
    flex-direction:row;
`;
export const TagDiv = styled.div`
    display:flex;
    margin-left: 5px;
    font-size: 1.2rem;
    @media(hover: hover) and (pointer: fine) {
        &:hover {
                font-weight: 600;
            }
        }
`
