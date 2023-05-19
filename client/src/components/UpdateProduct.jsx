import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'


const UpdateProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    
    const {id} = useParams()
    const navigate = useNavigate()
    //we want to get all the data from that id to display it in the update form
    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
        //axios waiting on the fetch, .THEN we set the data
        .then((res) => {
            console.log(res.data)
            //declare variable that holds data results here
            const product = res.data
            console.log(product)
        //set each item to useState
        setTitle(product.title)
        setPrice(product.price)
        setDescription(product.description)
        })
        .catch((err) => {
            console.log('this is our udpate get error: ',err)
        })
        
        //use async await which is es6 syntax to handle promises
        //tag the async keyword
        // const fetchData = async  () => {
        //     //first try it
        //     try {
        //         //hey response, await the fetch call's promise and store it ina  variable
        //         const response = await  axios.get(`http://localhost:8000/api/oneProduct/${id}`)
        //         //since its in avariable, and we awaited the promise resolved, then we set to state
        //         setProduct(response.data)
        //         //if the promise fails to resovle, if theres an err it fallls to the catch block
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
        // fetchData()

        
    }, [id]);

    const updateHandler = (e) => {
        e.preventDefault()
        let newProduct = {title, price, description}
        axios.put(`http://localhost:8000/api/updateProduct/${id}`, newProduct)
        .then((res) => {
            console.log("this is the udpate Handler", res)
            navigate('/allProducts')
        }) 
        .catch((err) => { 
            console.log("this is the update error: ", err)
        })
        
    }

    return (
        <div>
            <h1>Update Product</h1>
            <hr />
            <form  onSubmit={updateHandler}>
                <div className="mb-3">
                    <div className='form'>
                        <label >Title:</label>
                        <input className='form-control' type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                        <hr />
                        <label >Price $:</label>
                        <input className='form-control' type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                        <hr />
                        <label >Description:</label>
                        <input className='form-control' type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                        <hr />
                        
                        <button type="submit" className="btn btn-dark">Update Product</button> | <Link to={'/allProducts'} className="btn btn-secondary">Abort</Link>
                    </div>
                    
                </div>
            </form>
            
        </div>
    )
}

export default UpdateProduct