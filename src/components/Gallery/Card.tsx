import React from 'react';


type TProps = {
    title: string;
    price: number;
    image: string;
}
const Card = (props: TProps) => {
    const {title, price, image} = props;
    return (
        <div className="card">
            <div className="card-overlay">
                <h1 className="card-overlay-heading">{title}</h1>
                <p className="card-overlay-paragraph"> Price: ${price}</p>
                <button className="card-overlay-btn" type={'button'}>Order Now</button>
            </div>
            <img src={image} className={'card-img'}/>
        </div>
    );
}

export default Card;