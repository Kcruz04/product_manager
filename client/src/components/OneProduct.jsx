import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const OneProduct = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams()

    useEffect(() => {
        // axios.get(`http://localhost:8000/api/oneProduct/${id}`)
        // .then(res => setProduct(res.data))
        // .catch(err => console.log('this is our get one error: ',err))
        //axios waiting on the fetch, .THEN we set the data

        //use async await which is es6 syntax to handle promises
        //tag the async keyword
        const fetchData = async  () => {
            //first try it
            try {
                //hey response, await the fetch call's promise and store it ina  variable
                const response = await  axios.get(`http://localhost:8000/api/oneProduct/${id}`)
                //since its in avariable, and we awaited the promise resolved, then we set to state
                setProduct(response.data)
                //if the promise fails to resovle, if theres an err it fallls to the catch block
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()

        
    }, [id]);

    return (
        <div>
            <h1>Product Details</h1>
            <hr />
            <fieldset>
                <h3>Product Name: </h3>
                <h4>{product.title}</h4> 
                <hr />
                <h3>Product Pirce:</h3>
                <h4>${product.price}</h4>
                <hr />
                <h3>Product Description: </h3> 
                <h4>{product.description}</h4>
                <hr />
            </fieldset><br />
            <p> <Link className="btn btn-outline-dark" to={'/allProducts'} >Dashboard</Link></p>
                    
                
        </div>
    )
}

export default OneProduct
