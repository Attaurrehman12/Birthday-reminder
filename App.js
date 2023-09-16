import React, { useState } from 'react'
import List from './components/List'
import './App.css';
import Data from './components/Data';
function App() {
  const [people , setPeople] = useState (Data)
  return (
  <main>
    <section className='container'>
      <h3>{people.length} Birthdays Today</h3>
      <List people={people}/>
      <button onClick={()=>setPeople([])}>Clear All</button>
    </section>
  </main>
  )
}

export default App