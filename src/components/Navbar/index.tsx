import React from 'react';
import navImg1 from '../../images/nav-img-1.jpeg'
import navImg2 from '../../images/nav-img-2.jpeg'
import navImg3 from '../../images/nav-img-3.jpeg'
import MenuItem from "./MenuItem";


const Navbar = () => {

    const items: { title: string }[] = [
        {title: 'Home'},
        {title: 'About us'},
        {title: 'Gallery'},
        {title: 'Reservation'},
        {title: 'Services'},
        {title: 'Contact'},
    ];
    return (
        <nav className={'navbar'}>
            <input type="checkbox" id="check" className="checkbox" hidden={true}/>
            <div className="hamburger-menu">
                <label htmlFor="check" className={'menu'}>
                    {[...new Array(3)]
                        .map((_, index) => (<div key={index} className={`menu-line menu-line-${index+1}`}/>))}
                </label>
            </div>
            <div className="navbar-navigation">
                <div className="navbar-navigation-left">
                    <img src={navImg1} className={'left-img left-img-1'}/>
                    <img src={navImg2} className={'left-img left-img-2'}/>
                    <img src={navImg3} className={'left-img left-img-3'}/>
                </div>
                <div className="navbar-navigation-right">
                    <ul className="nav-list">
                        {items.map((item, index) => (<MenuItem key={index}{...item}/>))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;