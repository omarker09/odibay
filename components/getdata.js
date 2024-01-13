import React from 'react'

async function getdata() {
    const url = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const t = url.json()
    console.log(t);
}

export default getdata