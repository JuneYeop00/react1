import reactLogo from './assets/react.svg'

function Profile () {
  return(
    <>
      <img className="button-icon" src={reactLogo} alt="" />
    </>
  )
}


export default function App() {
  return(
    <Profile/>
  )
}
