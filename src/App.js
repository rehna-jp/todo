// import { CiCirclePlus } from "react-icons/ci";
// import { CiSearch } from "react-icons/ci";
// import { MdDelete } from "react-icons/md";
import React from "react";
import "./App.css";
import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <Counter />
    </>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <div class="container">
//         <h2>CHORES</h2>
//         <hr></hr>
//         <div class="search">
//           <input type="text" placeholder="Search Your Lists" ></input>
//           <div class="icon"><CiSearch fontSize="1.5rem"/></div>

//         </div>
//         <div class="task">
//          Today's tasks
//           <CiCirclePlus  fontSize="1.5rem"/>

//         </div>
//         <div class="mail">
//           Pick up mail
//           <MdDelete fontSize="1.3rem" />
//         </div>
//         <div class="workout">
//          Work out for 30min
//          <MdDelete fontSize="1.3rem" />
//         </div>
//         <div class="design">
//           Design homescreen of app
//           <MdDelete fontSize="1.3rem" />
//         </div>
//         <div class="react">
//           Learn react js
//           <MdDelete fontSize="1.3rem" />
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
