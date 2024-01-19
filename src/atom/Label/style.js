import styled from "styled-components";

const DEFAULT_FONTSIZE = '1rem';
const DEFAULT_TEXTCOLOR = 'white';


export const StyledLabel = styled.label`
    color: ${({color})=> color||DEFAULT_TEXTCOLOR};
    font-size: ${({fontSize})=>fontSize||DEFAULT_FONTSIZE};
    border: ${({border})=>border||'none'};
    font-weight: ${({fontWeight}) => fontWeight||'normal'};

    @font-face {
        font-family: 'font-name'; /*font 이름*/
        font-style: 'normal'; /* font 스타일 정의 (기울임, 일반) */
        font-weight: 400; /* font 굵기 정의 */

        /* 브라우저&디바이스 환경에 따른 font 파일 위치 정의 */
        src: url('webfont.eot'); /* IE9 Compat Modes */
        src: url('webfont.eot?#iefix') format('embedded-opentype'), 
            /* IE6-IE8 */ url('webfont.woff2') format('woff2'),
            /*  Modern Browsers */ url('webfont.woff') format('woff'), 
            /* Modern Browsers */ url('webfont.ttf') format('truetype'),
            /* Safari, Android, iOS */ url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
    }
`