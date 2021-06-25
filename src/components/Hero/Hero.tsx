import React, {FunctionComponent, ReactNode} from 'react';
import {motion} from "framer-motion";

const Hero: FunctionComponent<{
    text: string;
    children: ReactNode;
}> = ({text, children, ...props}) => {
    return <div className='bg-white h-screen flex flex-col justify-center items-center' {...props}>
        <motion.h1
                initial={{scale: .75, y: -250, opacity: 0}}
                animate={{scale: 1.25, color: '#ff2994', y: -50, opacity: 1}}
                className="lg:text-9xl md:text-7xl sm-text-5xl text-3xl font-black mb-14">
            {text}
        </motion.h1>
        <motion.div
                initial={{opacity: .75}}
                animate={{opacity: 1}}
                className='w-2/12 flex justify-between'>
            {children}
        </motion.div>
    </div>
}

export default Hero;
