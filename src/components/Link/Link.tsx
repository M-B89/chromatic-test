import React, {FunctionComponent} from 'react';

const Link: FunctionComponent<{
    text: string;
    url: string;
    classNames?: string;
}> = ({text, classNames, url, ...props}) => {
    const classes = 'transition duration-500 ease-in-out hover:underline ' + classNames
    return <a
            href={url}
            className={classes}
            {...props}>
        {text}
    </a>
}

export default Link;

