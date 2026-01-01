function createData(id, title, content, writer, date, view, likes) {
  return { id, title, content, writer, date, view, likes };
}

const boardData = [
  createData(
    1, 
    "React 상태 관리 가이드", 
    "Redux와 Context API의 차이점에 대해 알아봅니다.", 
    "코딩마스터", 
    "2023-10-01", 
    1240, 
    85
  ),
  createData(
    2, 
    "오늘 점심 메뉴 추천받아요", 
    "날씨가 추운데 뜨끈한 국물이 좋을까요?", 
    "미식가", 
    "2023-10-02", 
    450, 
    12
  ),
  createData(
    3, 
    "자바스크립트 ES6 문법 정리", 
    "화살표 함수와 구조 분해 할당 등 필수 문법 정리입니다.", 
    "JS개발자", 
    "2023-10-03", 
    2100, 
    156
  ),
  createData(
    4, 
    "신입 개발자 면접 후기", 
    "압박 면접이었지만 최선을 다해 답변하고 왔습니다.", 
    "취뽀기원", 
    "2023-10-04", 
    890, 
    42
  ),
  createData(
    5, 
    "주말에 가기 좋은 카페 공유", 
    "통창 뷰가 예쁜 서울 근교 카페 리스트입니다.", 
    "카페투어", 
    "2023-10-05", 
    670, 
    28
  ),
];

export default boardData;