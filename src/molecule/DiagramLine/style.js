import styled, { css } from "styled-components";

export const StyledDiagramLine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${({width})=>width||'100rem'};
    align-items: center;
`

export const StyledLinearHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
`
export const StyledLinearChild = styled.div`
    display: flex;
<<<<<<< HEAD
    color: white;
=======
>>>>>>> 57c8f5c0198ea910fbabf2ad9b181acb349275ba
    flex-direction: row;
    justify-content: center;
    width: ${({setAnimation})=>setAnimation?'100%':'0rem'};;
    height: ${({setAnimation})=>setAnimation?'5rem':'0rem'};
    transition: ${({transitionTime})=>transitionTime||5000}ms;
`
export const StyledLinearWrapper = styled.div`
    width: ${({childNum})=>(100/(childNum+1))||33}rem;
<<<<<<< HEAD
    color: white;
=======
>>>>>>> 57c8f5c0198ea910fbabf2ad9b181acb349275ba
    ${({isTop,isSelected})=>
        isTop?
        css`
            border-top: ${({isEnd,isFirst})=> (isEnd||isFirst)?'none':'1px solid white'};
            border-left: ${({isFirst})=> isFirst?'none':'1px solid white'};
        `:
            isSelected?
            css`
<<<<<<< HEAD
                border-bottom: ${({isEnd,isFirst})=> (isEnd||isFirst)?'none':'1px solid white'};
=======
                //border-bottom: ${({isEnd,isFirst})=> (isEnd||isFirst)?'none':'1px solid white'};
>>>>>>> 57c8f5c0198ea910fbabf2ad9b181acb349275ba
                border-right: ${({isFirst})=> isFirst?'1px solid white':'none'};
            `:
            css`
            `         
    }
    
`
