import React, {FunctionComponent} from 'react';

const Hero: FunctionComponent<{
    text: string;
}> = ({text, ...props}) => {
    return <div className='bg-white h-screen flex flex-col justify-center items-center' {...props}>
        <h1 className="lg:text-9xl md:text-7xl sm-text-5xl text-3xl font-black mb-14">
            {text}
        </h1>
    </div>
}

export default Hero;
