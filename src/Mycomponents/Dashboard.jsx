import React from 'react'
import { useNavigate } from 'react-router-dom'


function Dashboard() {
  const navigate= useNavigate(); 
  return (
    <div>
      This is from Dashboard 
      <br />
      <button  onClick={()=> navigate("/home")} 
        className='cursor-pointer'
        >Click here to go Home</button>
      
    </div>
  )
}

export default Dashboard



