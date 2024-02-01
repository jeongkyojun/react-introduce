import React from "react";
import Image from "../../atom/Image";
import { LabelExplainWrapper, LabelSummaryWrapper, StyledLabelWrapper, StyledMyInfo } from "./style";
import InfoList from "../InfoList";
import Label from "../../atom/Label";

const MyInfo = ({img, list, width, height})=>{
    return(
        <StyledMyInfo>
            <Image src={img} alt={'myPic'} width={width} height={height} isCircle borderRadius={'2rem'}></Image>
            <StyledLabelWrapper>
                <LabelSummaryWrapper>
                    <Label color={'black'} fontSize={'2rem'} fontWeight={800}>차분하게 목표를 이루는 사람</Label>
                </LabelSummaryWrapper>
                <LabelExplainWrapper>
                    <Label color={'black'} fontSize={'1.1rem'}>어릴적부터 만들기 좋아하던 저는 원하는 것을 만들 수 있다는 프로그래밍의 매력에 빠져 개발자의 꿈을 가졌습니다.</Label>
                    <Label color={'black'} fontSize={'1.1rem'}>팀프로젝트 내에서 차분하고 성실하며, 책임감 있고 배운것을 응용할 줄 안다는 평가를 들었습니다.</Label>
                    <Label color={'black'} fontSize={'1.1rem'}>머리속의 화면을 그대로 옮길 수 있는, 상상을 현실로 만드는 프론트엔드가 되기위해 노력하겠습니다.</Label>
                </LabelExplainWrapper>
            </StyledLabelWrapper>
        </StyledMyInfo>
    );
}

export default MyInfo;