import React ,{useState,useEffect} from 'react'

function App() {
  const [data,setData]=useState([{}])
 
useEffect(()=>{
const getBackendDetails= async()=>{
const response=await fetch("/members")
const jsondata= await response.json()
setData(jsondata)
console.log(data)
}
getBackendDetails();
},[])

  return (
    <div>
     <h1> hello Guys Welcome to React world</h1>
     <p>Happy Diwaali</p>
    </div>
  )
}

export default App

