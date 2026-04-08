# 202230324 이준엽
## 작성일: 2026-04-08
## 5주차 React 실습

## 오늘 실습 내용
이번 실습에서는 `PackingList`, `Items`, `MovieHeroes` 컴포넌트를 생성하고 `App.jsx`에서 호출하여 화면에 출력하였다.

- `PackingList` 컴포넌트 생성
- `Items` 컴포넌트 생성 후 `name`, `isPacked` props 전달
- 조건부 렌더링, 삼항 연산자, `<del>` 태그 적용
- `MovieHeroes` 컴포넌트 생성
- 배열 데이터에 `map()`을 사용하여 영화 영웅 목록 출력

## 오늘 수정 및 생성한 파일
- `src/App.jsx`
- `src/component/PackingList.jsx`
- `src/component/Items.jsx`
- `src/component/MovieHeroes.jsx`

## 기존 작업 파일
- `src/component/ChildComp.jsx` : 이미지 props를 받아 출력하는 컴포넌트
- `src/component/Gallery.jsx` : `MyTitle`, `Profile` 컴포넌트를 출력하는 컴포넌트
- `src/component/MyTitle.jsx` : 제목을 출력하는 컴포넌트
- `src/component/NameCard.jsx` : 사용자 정보를 출력하는 컴포넌트
- `src/component/NamedComponent.jsx` : React 로고 이미지를 출력하는 컴포넌트
- `src/component/ParentComp.jsx` : `ChildComp`를 재사용하는 컴포넌트
- `src/component/Profile.jsx` : 프로필용 컴포넌트
- `src/component/SpreadComp.jsx` : spread 문법으로 props를 전달하는 컴포넌트
- `src/component/UseJsx.jsx` : JSX와 함수 사용 예제 컴포넌트
- `src/main.jsx` : React 앱 실행 파일
- `src/App.css` : 앱 스타일 파일
- `src/index.css` : 전역 스타일 파일

## 실행 결과
여행 준비 목록과 영화 속 영웅들 목록이 화면에 출력된다.  
준비 완료된 항목은 체크 표시와 취소선이 함께 표시되고, 영화 영웅 목록은 `map()`을 이용해 출력된다.