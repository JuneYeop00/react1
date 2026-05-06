// import UseJsx from "./component/UseJsx";
// import ParentComp from "./component/ParentComp"
// import NameCard from "./component/NameCard";
// import PackingList from "./component/PackingList"
// import MovieHeroes from "./component/MovieHeroes"
// import Kiosk from "./component/Kiosk"

import Button from "./component/Button";
import handleClick from "./component/Handle";
import Toolbar from "./component/ToolBar";
import ButtonCom from "./component/ButtonCom"


// export default function App() {
//   return (
//     <>
//       <PackingList/>
//       {/* <MovieHeroes/> */}
//       {/*<Kiosk/>*/}
//     </>
//   )
// }  




export default function App() {
    return (
      <div>
        <ButtonCom handle={handleClick} message="안녕하세요">
          버튼 클릭
        </ButtonCom>
      </div>
    )
}


