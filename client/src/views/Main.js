import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Main = () => {
    const [message, setMessage] = useState("Retrieving Payload...")
    useEffect(() => {
        axios.get('http://localhost:8000/api')
        .then(res=>setMessage(res.data.message))
        console.log('This is our Index Test Page')
    }, []);
    console.log(message)
    
    return(
        <div>
                <h1>This is from the back end: {message}</h1>
                <br/>
                <button type="submit" className="btn btn-dark"><Link to={'/allProducts'}>Go to Dash</Link></button>
            </div>
        )
}

    
    export default Main