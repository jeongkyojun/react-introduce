
/*
    title, values, methods 는 Diagram을 표시
    direction은 페이지 이동 함수,
    childNum은 하위 Diagram 개수
    child는 하위 Diagram 변수
 */

export const HeadData = [
    {
        title: '정교준',
        values: ['1995 년생','010-4927-9576','kyojun2002@naver.com'],
        methods: [],
        direction: null,
        childNum: 0,
        child: null,
    },{
        title: '학력',
        values: ['서대전 고등학교 졸업','한국해양대학교 it융합 전공'],
        methods: [],
        direction: null,
        childNum: 1,
        child: ChildData1,
    },{
        title: '자격증',
        values: ['정보처리기사 취득','TOPCIT level 3'],
        methods: [],
        direction: null,
        childNum: 0,
        child: null,
    }
]

export const ChildData1 = [
    {
        title: 'test1',
        values: ['a','b','c'],
        methods: [],
        direction: null,
        childNum: 0,
        child: null,
    }
]
