import { Link } from 'react-router-dom';
import './Card.css'

export const Card = ({ id, title, price, address, date, img }) => {
    return (
        <Link to={`/product/${id}`} class="card">
            <div class="card--img">
                <img src={img} alt={title} />
            </div>
            <h5 class="card--title">{title}</h5>
            <strong class="card--price">{price}</strong>
            <div class="card--desc-box">
                <span class="card--desc">{address}</span>
                <span class="card--desc">{date}</span>
            </div>
        </Link>
    )
}