
import './App.css'
import { useState } from 'react';
import {puppyList} from './data.js'



function App() {

  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null);

  console.log("puppyList: ", puppyList);
  

  return (
    <>
      <div className="App">
      { 
   puppies.map((puppy) => {
     return (<p onClick={handleClick} key={puppy.id}>
      {puppy.name}</p>)
   })
}
{featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}

       </div>
    </>
  )
}

export default App
