import React from 'react'
import SendClient from './component/sendClient'
import SendServer from './component/sendServer'
import { revalidateTag } from 'next/cache';
async function page() {
    const apiUrl = "https://659ed0b147ae28b0bd36c151.mockapi.io/api/v1/users";
    const fetchData = await fetch(apiUrl, {
        cache: "no-cache",
        next: {
            tags: ["product"]
        }
    })
    const data = await fetchData.json()
    const addUsers = async (e) => {
        "use server"
        const product = e.get("username")?.toString()
        const newProduct = {
            product
        }
        const postDta = await fetch("https://659ed0b147ae28b0bd36c151.mockapi.io/api/v1/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        revalidateTag("product")
    }
    return (
        <div className=' h-full w-full bg-slate-300 flex items-center justify-center'>
            <div>
                {data?.map((e) => {
                    return <div key={e.id}>
                        {e.product}
                    </div>
                })}
            </div>
            <form action={addUsers}>
                <div>
                    <h1>Add users</h1>
                </div>
                <div>
                    <input type='text' name='username' placeholder='Add users' />
                </div>
                <button  className=' p-3 bg-blue-500 text-white'>Add user</button>
            </form>
        </div>
    )
}

export default page