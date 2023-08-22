import React from 'react'
import MyContext from '../context/MyProvider';

export default function () {
    let ref=React.useContext(MyContext);

    return (
      <div>
          <h3>{ref.state}</h3>
      </div>
    )
}
