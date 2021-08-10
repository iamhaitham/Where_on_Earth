import React,{ useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import BookerForm from '../components/BookerForm';

const BookerPage = () => {
    const [errors, setErrors]=useState([]);
    const TheBooker = booker => {
        
        axios.post('http://localhost:8000/api/agencies', booker)
            .then(res=>{
                // navigate("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
        
    return (
        <div>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <BookerForm onSubmitProp ={TheBooker}/>
        </div>
    )
}

export default BookerPage
