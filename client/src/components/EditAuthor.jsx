import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const NewAuthor = props => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const getAuthor = () => {
        axios.get(`http://localhost:8000/api/authors/${props._id}`)
            .then( res => {
                console.log(res.data)
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
            })
            .catch( err => console.log(err));
    }

    useEffect(()=>{
        getAuthor();
    },[]);

    const editAuthor = e =>{
        e.preventDefault();
        const author = {firstName, lastName}; 
        axios.put(`http://localhost:8000/api/authors/${props._id}`, author)
            .then( res => 
                console.log(res.data),
                navigate("/")
            )
            .catch(err => console.log(err));
    }


    return(
        <>
            <h1>New Activity</h1>
            <div>
                <p>Add Activity</p>
            </div>
            <div>
                <form onSubmit={ editAuthor }> 
                    <input type="text"  placeholder="Enter First Name" onChange={e=> setFirstName(e.target.value)} value={firstName}/>
                    <input type="text"  placeholder="Enter Last Name" onChange={e=> setLastName(e.target.value)} value={lastName}/>
                    <button type="submit"  className="button is-info">Add Author</button>
                </form>
            </div>
        </>
    )
}

export default NewAuthor;