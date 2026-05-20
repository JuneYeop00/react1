# 202230324 이준엽
## 작성일: 2026-05-20
## 12주차 React 실습 정리

## 12주차 실습 내용
이번 실습에서는 `Carousel` 컴포넌트를 만들고, 이미지 데이터 배열을 화면에 출력하는 연습을 진행하였다.  
`useState`를 사용해 현재 이미지의 index를 상태로 관리하고, `Next`와 `Previous` 버튼으로 슬라이드를 이동하도록 구현하였다.  
또한 첫 번째와 마지막 이미지에서 다시 순환되도록 처리하여 캐러셀 동작을 완성하였다.

## 12주차 실습 파일
- `src/App.jsx`
- `src/component/Carousel/Carousel.jsx`
- `src/component/Carousel/imgData.jsx`
- `src/component/Carousel/images/index.jsx`

## 이전 실습 파일
- `src/component/ToolBar.jsx`
- `src/component/Handle.jsx`
- `src/component/Button.jsx`
- `src/component/ButtonCom.jsx`
- `src/component/ButtonCom.module.css`
- `src/component/Bubble/Bubble.jsx`
- `src/component/Bubble/Bubble.module.css`
- `src/component/ChildComp.jsx`
- `src/component/Gallery.jsx`
- `src/component/MyTitle.jsx`
- `src/component/NameCard.jsx`
- `src/component/NamedComponent.jsx`
- `src/component/ParentComp.jsx`
- `src/component/Profile.jsx`
- `src/component/SpreadComp.jsx`
- `src/component/UseJsx.jsx`
- `src/component/HeroesData.jsx`
- `src/component/Kiosk.jsx`
- `src/component/OrderUp.jsx`
- `src/component/PackingList.jsx`
- `src/component/Items.jsx`
- `src/component/MovieHeroes.jsx`
- `src/main.jsx`
- `src/App.css`
- `src/index.css`

## 실행 결과
`Next`와 `Previous` 버튼을 클릭하여 이미지가 순서대로 변경되며, 마지막과 첫 번째 이미지에서도 자연스럽게 순환되는 캐러셀을 확인할 수 있다.