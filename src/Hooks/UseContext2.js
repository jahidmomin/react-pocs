import React from 'react'
import MyContext from '../context/MyProvider';

export default function UseContext2() {

   let ref=React.useContext(MyContext);

  return (
    <div>
        <h2>{ref.state}</h2>
    </div>
  )
}
