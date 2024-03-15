import React from 'react'
import Card from './Card'
import '../styles/top-card-list.css'

import {generate as id} from 'shortid'

const cardListData = [
    {
        name: "Product",
        icon: "images/products.png"
    },
    {
        name: "Orders",
        icon: "images/order1.png"
    }
]

function TopCardList() {
    return (
        <section className="top-card">
        <div className="wrapper">

            <div className='grid'>
                {
                    cardListData.map((cardData)=> <Card key={id} {...cardData}/>)
                }
            </div>
        </div>
</section>
    )
}

export default TopCardList