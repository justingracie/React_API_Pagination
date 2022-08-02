import { useEffect, useState } from "react";
import React from "react";



export const HelloWorld = () =>{
    const URL = 'https://randomuser.me/api/?results=100'
    const [user, setUser] = useState(null)
    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await fetch(URL)
                const data = await response.json()
                setUser(data.results)
                console.log(data.results)
            }catch (error){
                console.log("there seems to be an error", error)
            }
        }

            getUser()
        }, [])
    return(

        <>
            <h1 className="body">List of Users:</h1>
            {user ? 
                <div className="body">
                    {user.map((info, idx)=>{
                        return(
                            <div key={idx}>
                                <p>{info.name.first} {info.name.last} <strong>Age:</strong> {info.dob.age} <strong>Location:</strong> {info.location.country} <strong>Gender:</strong> {info.gender}</p>

                            </div>
                        )
                    })}
                </div>
                : <h3>Loading</h3>}
        </>
        
    )
}   