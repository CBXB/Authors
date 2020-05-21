import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const NewAuthor = props => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const addAuthor = e => {
        e.preventDefault();
        const Author = {firstName,lastName};
        axios.post("http://localhost:8000/api/authors", Author)
            .then( res => 
                console.log(res),
                navigate("/")
            )
            .catch( err => console.log(err));
    }

    return(
        <>
            <h1>New Activity</h1>
            <div>
                <p>Add Activity</p>
            </div>
            <div>
                <form onSubmit = { addAuthor }> 
                    <input type="text" placeholder="Enter First Name" onChange={e=> setFirstName(e.target.value)}/>
                    <input type="text" placeholder="Enter Last Name" onChange={e=> setLastName(e.target.value)}/>
                    <button type="submit" className="button is-info">Add Author</button>
                </form>
            </div>
        </>
    )
}

export default NewAuthor;