import { getDatabase, ref, set, remove } from "firebase/database";  // Added remove function
import './App.css';
import { app } from "./Firebase";

const db = getDatabase(app);

function App() {
  
  // Function to put data into Firebase database
  const putData = () => {
    set(ref(db, 'users/mith'), {
      id: 1,
      name: "mithlesh sing",
      age: 21,
    });
  }

  // Function to delete data from Firebase database
  const deleteData = () => {
    remove(ref(db, 'users/mith'));  // Removing data at 'users/mith' path
  }

  return (
    <>
      <h1>hi my name is mithlesh</h1>
      <button onClick={putData}>put data</button>
      <button onClick={deleteData}>delete data</button>  {/* Button to trigger the deleteData function */}
    </>
  );
}

export default App;
