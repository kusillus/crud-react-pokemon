import React from 'react'
const cNavbar = (props) => (
    <nav className="navbar navbar-dark example-nav">
        <a className="navbar-brand" href="#">
            <span className="text-white">
                {props.title.name}
            </span>   
            
        </a>
    </nav>
)

export default cNavbar