import React from 'react';

type TProps = {
    title: string
}
const MenuItem = (props: TProps) => {
    const {title} = props;
    return (
        <li className="nav-list-link">
            <a href="#" className={'nav-list-link'}>{title}</a>
        </li>
    );
}

export default MenuItem;