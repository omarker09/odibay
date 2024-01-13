
import React from 'react';
import { useParams } from 'next/navigation';
import Product from '@/componnent-sm/product';
// https://jsonplaceholder.typicode.com/todos/


const PageId = async ({ params }) => {


    const url = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const tojson = await url.json()

    return (
        <div>
           
                <div key={tojson.userId}>
                    <span>user : {tojson.userId}</span>
                    <span>id : {tojson.id}</span>
                    <span>title : {tojson.title}</span>
                    <span>Iscompleted : {tojson.completed}</span>
                </div>
        
        </div>

    )
}

/*



*/
export default PageId