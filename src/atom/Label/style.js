import styled from "styled-components";

const DEFAULT_FONTSIZE = '1rem';
const DEFAULT_TEXTCOLOR = 'white';

export const StyledLabel = styled.label`
    color: ${({color})=> color||DEFAULT_TEXTCOLOR};
    font-size: ${({fontSize})=>fontSize||DEFAULT_FONTSIZE};
    border: ${({border})=>border||'none'};
`