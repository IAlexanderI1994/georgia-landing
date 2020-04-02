import React from 'react';
import SocialMediaContainer from "../SocialMedia/SocialMediaContainer";

const Footer = () => {

    const links: Array<{ class: string; link: string }> = [
        {
            class: 'fab fa-facebook-square',
            link: '#'
        }, {
            class: 'fab fa-instagram',
            link: '#'
        }, {
            class: 'fab fa-google-plus-square',
            link: '#'
        }, {
            class: 'fab fa-youtube',
            link: '#'
        },
    ];
    return (
        <footer className={'footer'}>
            <div className="footer-header">
                <a href="#" className="logo"><i className="fas fa-utensils"></i> </a>
                <div>
                    <h1 className="main-name">Georgia</h1>
                    <p className="sub-name">Restaurant</p>
                </div>
            </div>
            <div className="footer-social-media">
                <SocialMediaContainer items={links}/>
            </div>
            <div className="footer-copyright">
                <p className="footer-copyright-paragraph">
                    &copy; Copyright. Restaurant "Georgia". All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;