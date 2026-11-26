import React from 'react'
import cardStyle from "./card.module.css"

console.log(cardStyle)
const Card = () => {
    return (
        <div className={cardStyle.para}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt deleniti enim, facilis, aut est velit laboriosam delectus corrupti distinctio alias minima cumque sunt. Reiciendis ea nostrum totam. Vitae, laudantium magni?</p>
        </div>
    )
}

export default Card