import styled, { css } from "styled-components";

export const ImageWrapper = styled.div`
    ${({ onClick }) =>
        onClick &&
        css`
        cursor: pointer;
        `}
    width: ${({ width }) => width};
    height: ${({ height }) => height || '100%'};
`;

export const StyledImage = styled.img`
    ${({ isCircle,borderRadius }) =>
        isCircle &&
        css`
        object-fit: cover;
        border-radius: ${borderRadius||'50%'};
        `}
    width: 100%;
    height: 100%;
    border: ${({border})=>border||'none'};
`;
