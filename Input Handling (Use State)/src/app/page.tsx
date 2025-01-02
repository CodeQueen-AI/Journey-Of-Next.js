'use client'
import { useState } from "react"
const page = () => {
  const [name , setName] = useState('Ali')

  const value = () => {
    setName ('Codequeeen')
  }
  return (
    <div>
      <p>{name}</p>
      <button onClick={value}>Change the Name</button>
    </div>
  )
}

export default page



