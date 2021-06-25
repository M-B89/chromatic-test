import {motion} from 'framer-motion';
import React, {FunctionComponent, ReactNode} from 'react';

const BASE_BUTTON = 'transition duration-500 ease-in-out rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg'
const CONTAINED_BUTTON = `${BASE_BUTTON} bg-green-400 border border-green-400 text-white hover:bg-green-700`
const OUTLINED_BUTTON = `${BASE_BUTTON} border border-green-400 text-green-400 hover:border-green-700`

const Button: FunctionComponent<{
    className?: string;
    outlined?: boolean;
    children: ReactNode;
}> = ({className, outlined, children, ...props}) => {
    const classNames = outlined ? OUTLINED_BUTTON:CONTAINED_BUTTON;
    return <motion.button
            initial={{scale: .8}}
            animate={{scale: 1}}
            className={classNames}{...props}>
        {children}
    </motion.button>
}

export default Button;
