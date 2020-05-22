import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [data, getData] = useState( [] );


  useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(result => getData(result.data))

  }, [])
  

  return (
    <div className="container">
        <ul>
          {
            data.map(todo => (
             <li key={todo.id}>
               {todo.title}
             </li> 
            ))
          }
        </ul>
    </div>
  );
}

export default App;
