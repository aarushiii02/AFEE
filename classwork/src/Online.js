import React, { useEffect, useState } from 'react'

const Online = () => {
    const[data,setdata]=useState([])
    const fun1=()=>{
        fetch('https://jsonplaceholder.typicode.com/users') 
    .then((res)=>res.json())
    // .then((data)=>console.log(data))
    .then((data)=>setdata(data))
    }
    useEffect(()=>{
        fun1()
    },[])

    
  return (
    <div>
    <h2>apies data fetching</h2>
    {
        data.map((input)=>{
            return(
                <h3>{input.name}</h3>
            )
        })
    }
     </div>
  )
}

export default Online
