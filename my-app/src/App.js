import React from 'react';
import './App.css';
import {ToDoList} from "./component/toDoList/toDoList.js";
function App() {
  return (
  <main>
    <ToDoList />
    <section id="doneList">
      
    </section>
    <section id="wheelSection">

    </section>
  </main>
  );
}

export default App;
