import React from 'react';

import aboutUs from '../../images/about-us-img.png'
import Stars from "./Stars";

const AboutUs = (props: any) => {


    return (
        <section className={'about-us'}>
            <div className="about-us-left">
                <img src={aboutUs}/>
            </div>
            <div className="about-us-right">
                <h1 className="main-heading">About Us</h1>
                <h3 className="sub-heading">Introduce to Georgian Dishes</h3>

                <Stars/>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                </p>
                <Stars/>
                <button className="main-btn">Read More</button>

            </div>

        </section>
    );
};


export default AboutUs;