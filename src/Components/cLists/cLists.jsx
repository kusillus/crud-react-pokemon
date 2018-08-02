import React from 'react'
import './cLists.css'

const cLists = (props) => (
    <ul className="list-group">
        {
            props.dataList.map(item => (
                <li className="list-group-item d-flex justify-content-between" key={item.id}>
                    <span>
                        <img className="icon-img mr-2" src={props.dataImg.url} alt=""/>
                        <span className="text-uppercase">{item.name}</span>
                        <span className="badge badge-primary badge-pill ml-2">{item.move}</span>
                    </span>
                    <span>
                        <button type="button" className="btn " onClick={()=>props.clonePkmn(item.id)}>Clonar</button>
                        <button type="button" className="btn " onClick={()=>props.editPkmn(item.id)}>Edit</button>
                        <button type="button" className="btn " onClick={()=>props.deletePkmn(item.id)}>Delete</button>
                    </span>
                    
                </li>
            ))
        }
    </ul>
)

export default cLists