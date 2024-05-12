import { useState } from 'react'


import './App.css'

import {Button} from "../lib"
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     
      <div className="card">
      <div className="flex w-max gap-4">
      <Button color="blue">color blue</Button>
      <Button color="red">color red</Button>
      <Button color="green">color green</Button>
      <Button color="amber">color amber</Button>
    </div>
        
      </div>
     
    </>
  )
}

export default App

