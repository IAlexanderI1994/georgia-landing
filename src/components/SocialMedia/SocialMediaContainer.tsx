import React from 'react';
import SocialMediaItem from "./SocialMediaItem";

type TProps = {
    items: Array<{ class: string; link: string }>


}
const SocialMediaContainer = (props: TProps) => {
    return (
        <ul className="social-media">
            {props.items.map(item => (<SocialMediaItem {...item}/>))}
        </ul>
    );
}

export default SocialMediaContainer;