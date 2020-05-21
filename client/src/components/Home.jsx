import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const Home = props => {

    const [authors, setAuthors] = useState([]);
    const fetchActivities = () =>{
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthors(res.data))
            .catch(err =>console.log(err));
    }

    useEffect(()=>{
        fetchActivities();
    },[])

    const remove = _id => {
        axios.delete(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                fetchActivities();
            })
            .catch(err =>console.log(err));
    }


    return (
        <div>
            <div className="column">
                <h1>Favorite Authors</h1>
                <div>
                    <h1>Authors</h1>
                </div>
                {   
                    authors.map(a => 
                        <article  key = {a._id}>
                                <h1>{a.lastName}, {a.firstName}</h1>
                                <Link to={"/edit/"+a._id}>Edit</Link>
                                <br/>
                                <a href="#" onClick={ e => remove(a._id) }>Delete</a>
                        </article>
                    )
                }   
            </div>
        </div>
    )
}

    export default Home;