import { useState } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import './App.css';

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db, "user/piyush"), {
      id: 1,
      name: "piyush",
      age: 21,
    });
  };

  return (
    <div className="app">
      <h1>firebase</h1>
      <button onClick={putData}>put data</button>
    </div>
  );
}

export default App;
