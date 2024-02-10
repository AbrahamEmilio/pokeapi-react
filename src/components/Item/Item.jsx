import { React } from 'react'
import './Item.css'
import { Card } from '../Card/Card'

const Item = ({ name, img }) => {
    return(
        <>
            <Card name={name} img={img}/>
        </>
    )
}

export { Item }