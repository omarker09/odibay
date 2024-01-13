
import React from 'react';
import Product from '@/componnent-sm/product';
// https://jsonplaceholder.typicode.com/todos/
import ClientComp from './clientComp';


const GetServerData = async ({children}) => {
    const url = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const tojson = await url.json()

    return (
        <div>
            {tojson.length === 0 ? <div>loading ....</div> :
                tojson?.map((e) => {
                    return <div key={e.userId}>
                        <span>user : {e.userId}</span>
                        <span>id : {e.id}</span>
                        <span>title : {e.title}</span>
                        <span>Iscompleted : {e.completed}</span>
                        {children}
                        <ClientComp id={e.id} />
                    </div>
                })
            }

        </div>

    )

}

/*

    <div>
      {tojson.length === 0 ? <div>loading ....</div> :
        tojson?.map((e) => {
          return <div key={e.userId}>
            <span>user : {e.userId}</span>
            <span>id : {e.id}</span>
            <span>title : {e.title}</span>
            <span>Iscompleted : {e.completed}</span>
          </div>
        })
      }

    </div>

*/
export default GetServerData;