import React from 'react';

type TProps = {
    class: string;
    link: string;
}
const SocialMediaItem = (props: TProps) => {
    const {link, class: className} = props;
    return (
        <li className={'social-media-item'}>
            <a href={link} className="social-media-link"><i className={className}/></a>
        </li>
    );
}

export default SocialMediaItem;