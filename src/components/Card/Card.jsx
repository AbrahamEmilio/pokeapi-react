import { React } from 'react'
import './Card.css'

const Card = ({ name, img }) => {
    return(
        <>
            <div className="card">
                <img src={img} alt="" />
                <h2 className="title">{name}</h2>
                <p className="tipo"></p>
            </div>
        </>
    )
}

export { Card }