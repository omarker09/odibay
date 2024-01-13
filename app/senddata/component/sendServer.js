import React from 'react'
import SendClient from './sendClient'
function SendServer({ user, emil, msg, rea }) {
    const url = "https://00b37660-22f0-4d13-8a09-a32020e6c26b-00-1pdwr4sviwhyq.janeway.replit.dev/nothing/hi/vi/auth/createArticle/submit"
    const data = {
        name: user,
        email: emil,
        message: msg
    }
    if (rea === true) {
        fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),  // body data type must match "Content-Type" header
        })
            .then((resp) => {
               
            })
            .catch((err) => {
                console.log(err);
            })
    } else {

    }
    return (
        <div>
            <p>user : {user}</p>
            <p>emil : {emil}</p>
            <p>msg : {msg}</p>
            <p>ready : {rea}</p>
        </div>
    )
}

export default SendServer