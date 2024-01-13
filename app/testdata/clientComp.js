
import React from 'react';
import Link from 'next/link';
// https://jsonplaceholder.typicode.com/todos/



const ClientComp =  (props) => {

  return (
    <div>
      <Link  href={`http://localhost:3000/testdata/${props.id}`}>View</Link>
    </div>
  )
}
export default ClientComp;
