import React, {FunctionComponent, ReactNode} from 'react';
import styles from './Box.module.scss'

const Box: FunctionComponent<{ children: ReactNode }> = ({children}) => {
    return <div className={styles.Box}>
        <h1>Headline of Box</h1>
        {children}
    </div>
}

export default Box;
