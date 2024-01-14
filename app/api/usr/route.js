import { NextResponse } from "next/server";
import axios from "axios";
export async function POST(request) {

    const data = await request.json();
    const res = await fetch("http://localhost:3002/api/v1/auth/lg", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    });
    
    const contentType = res.headers.get("content-type");
    
    if (contentType && contentType.includes("application/json")) {
        const resp = await res.json();
        return NextResponse.json(resp);
    } else {
        console.error("Unexpected response format:", contentType);
        return NextResponse.json({ message: "Unexpected response format from the server" });
    }
    
}


/*

    
        const res = await fetch("http://localhost:3002/api/v1/auth/lg", {
            method: "POST",
            headers: {
                "content-type": "Application/json"
            },
            body: {
                email: "omrfhgdh@gmail.com",
                password: "hjkhjkghjl4864"
            }

        })
        const resp = await res.json()

*/