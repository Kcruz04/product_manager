import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link} from 'react-router-dom';


const ProductForm = () => {
    
    //Keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [productData, setProductData] = useState({
        title:'',
        price:'',
        description:''
    })

    //Instanciate useNagivate
    const navigate = useNavigate()
    
    //need handler to handle data from form
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        axios.post('http://localhost:8000/api/create', {
            title,
            price,
            description
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        setProductData()
        navigate('/allProducts')
    }


    return (
        <div>
            <h1>Create a Product</h1>
            <form onSubmit={onSubmitHandler} >
                <div className="mb-3">
                    <div className='form'>
                        <label >Title:</label>
                        <input className='form-control' type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                        <label >Price $:</label>
                        <input className='form-control' type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                        <label >Description:</label>
                        <input className='form-control' type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                        <br />
                        <button type="submit" className="btn btn-dark">Add Product</button> <Link to={'/allProducts'} className="btn btn-secondary">Home</Link>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default ProductForm;