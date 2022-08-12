import React from 'react';
import { Link } from 'react-router-dom';
const Lang = (props) => (
    <div className="cardt" >
        <div className="card_header">
            <Link to={props.url}>
                <img src={props.img} alt="" />
            </Link>
        </div>
        <h3>{props.name}</h3>
    </div>
)


export default Lang;