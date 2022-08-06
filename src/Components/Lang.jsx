import React from 'react'
import { Link } from 'react-router-dom'

const Lang = (props) => {
    return (
        <div className="card">
            <div className="card_header">
                <Link to={props.url}>
                    <img src={props.img} alt="" />
                </Link>
            </div>

        </div>
    )
}

export default Lang