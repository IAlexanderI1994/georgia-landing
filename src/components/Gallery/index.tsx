import React from 'react';
import image1 from '../../images/gallery/gallery-img-1.jpeg'
import image2 from '../../images/gallery/gallery-img-2.jpeg'
import image3 from '../../images/gallery/gallery-img-3.jpeg'
import image4 from '../../images/gallery/gallery-img-4.jpeg'
import image5 from '../../images/gallery/gallery-img-5.jpeg'
import image6 from '../../images/gallery/gallery-img-6.jpeg'
import Card from "./Card";

const Gallery = () => {

    const cards = [
        {
            title: 'First',
            price: 30,
            image: image1
        },
        {
            title: 'Second',
            price: 20,
            image: image2
        },
        {
            title: 'Third',
            price: 45,
            image: image3
        },
        {
            title: 'Fourth',
            price: 25,
            image: image4
        },
        {
            title: 'Fifth',
            price: 35,
            image: image5
        },
        {
            title: 'Six',
            price: 15,
            image: image6
        },

    ];

    return (
        <section className={'gallery'}>
            <div className="cards-wrapper">
                {cards.map(card => (<Card {...card}/>))}
            </div>
        </section>
    );
}

export default Gallery;