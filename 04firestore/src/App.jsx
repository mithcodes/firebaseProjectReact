import { useState } from 'react'
import {getFirestore,collection,addDoc,getDoc,doc,where,query,getDocs} from "firebase/firestore"
import './App.css'
import {app} from "./firebase"

const firestore=getFirestore(app)
function App() {

const writeData=async()=>{
 const result=await addDoc(collection(firestore,'cities'),{
    name:'delhi',
    pincode:'1234',
    lat:123,
    long:456,

  })
  console.log("result",result)
}



const makeSubcollection=async ()=>{
const subdata=await addDoc(collection(firestore,'cities/OrfGNtaKw4ZAB2inZpYX/places'),{
 name:'this is place govindpur',
 desc:'awsome' ,
 date:Date.now(),
})
console.log(subdata)
}


const getDocument=async()=>{
  const ref=doc(firestore,"cities","OrfGNtaKw4ZAB2inZpYX")
  
  const snap=await getDoc(ref)
  console.log(snap.data());
}




   const getDocumentsByQuery=async()=>{
    const collectionRef=collection(firestore,"users");
    const q=query(collectionRef.withConverter("ismale","==".true));
   const snapshot= await getDocs(q)
   snapshot.forEach((data)=>console.log(data.data))
   }

  return (
    <>
    <button onClick={writeData}>put data</button>
     <button onClick={makeSubcollection}>put sub data</button>
     <button onClick={getDocument}>get document </button>
     <button onClick={getDocumentsByQuery}>get document by query</button>
    </>
  )
}

export default App
