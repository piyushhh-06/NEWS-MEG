import React, { useState } from 'react'
import { Navbar } from './Components/Navbar';
import { NewsBoard } from './Components/NewsBoard';

export const App = () => {
  const [category, setCategory] = useState("General");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App;