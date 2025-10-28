// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
import viteLogo from '/Vitejs-logo.svg'
import nature from '/nature.jpg'
import reactLogo from './assets/react.svg'
import Child from './Child.jsx'
import StoringData,{SecondComponent} from './StoringData.jsx'
import List from './List.jsx'
import InputStoring from './InputStoring.jsx'
function App() {
  return (
    <div>
      {/* < StoringData />
      <SecondComponent /> */}
      {/* <List /> */}
      <InputStoring/>
      {/* <h1>Hello World</h1>
      <p>HI</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
        width="25%"
        alt="React Logo" />
      <img src={viteLogo} alt="" />
      <img src={nature} width="50%" alt="" />
      <img src={reactLogo} width="25%" alt="" />
      <Child name="Ram" age="23" />
      <Child name="Ravi" age="34" />
      <Child name="Rampaul" age="45" />
      <Child name="Ramu" age="56" /> */}
    </div>
  )
}
export default App
