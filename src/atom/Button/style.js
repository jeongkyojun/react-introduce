import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
    width : ${({ width }) => width||10}rem;
    height: ${({ height }) => height || 2}rem;
    font-size: ${({ fontSize }) => fontSize || 1}rem;

    ${({ isText, textColor, backgroundColor, disabled }) =>
        isText
        ? css`
            color: white;
            background: none;
            `
        : css`
            color: ${textColor || 'black'};
            background-color: ${backgroundColor || 'white'};
            ${disabled
                ? 'filter: brightness(80%)'
                : `
                // 모바일 환경이 아닐 때에만 hover 사용
                @media(hover: hover) and (pointer: fine) {
                &:hover {
                        filter: brightness(80%);
                        transition: all 0.1s;
                        box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.5);
                    }
                }
                &:active {
                border-bottom-width: 1px;
                transition: all 0.1s;
                box-shadow: none;
                }
            `};
        `}

    ${({ borderColor }) =>
        borderColor
        ? css`
            border: 1px solid ${borderColor};
            `
        : css`
            border: none;
            `}
    border-radius: 1rem;
    ${({ disabled }) =>
        !disabled &&
        css`
        cursor: pointer;
        `}

    font-weight: bold;
`;
