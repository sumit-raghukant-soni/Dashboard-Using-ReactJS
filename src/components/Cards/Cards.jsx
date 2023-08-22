import Card from '../Card/Card'
import React from 'react'
import { CardsData } from '../../Data/data'
import './Cards.css'
import '../Card/Card.css'
const Cards = () => {
  return (
    <div className='Cards'>
        {CardsData.map((card, id)=>{
            return(
                <div className="parentContainer">
                    <Card
                    title = {card.title}
                    color = {card.color}
                    barValue = {card.barValue}
                    value = {card.value}
                    png = {card.png}
                    series = {card.series}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards