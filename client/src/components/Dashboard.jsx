import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


//useEffect, axios, useState, navigation

const Dashboard = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
            .then((res) => {
                console.log('This is our dash get request: ', res.data)
                setProducts(res.data)
            })
            .catch((err) => {
                console.log("This is the dash catch error: ", err)
            })
    }, []);

    return (
        <div>
            <h1>Product Dashboard</h1>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>{
                    products.map((product,i) => {
                        return (
                            <tr key={i}>
                        <td><Link to={`/oneProduct/${product._id}`} className='btn btn-secondary' >Go to</Link></td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td><Link to={`/updateProduct/${product._id}`} className='btn btn-dark' >Edit</Link> |  
                        <Link to={`/deleteProduct/${product._id}`} className='btn btn-danger' >Delete</Link></td>
                    </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <p> 
                <Link className="btn btn-dark" to={'/create'} >Add Product</Link> 
            </p> 
        </div>
    )
}


export default Dashboard