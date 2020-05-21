import React from 'react';
import { Link } from '@reach/router';


const Nav = props => {
    return (
        <nav>
            <div>
                <Link to="/" className="navbar-item"></Link>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/new">New</Link>
                </div>

                <div>
                    <div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;