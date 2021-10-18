import React from 'react'
import styles from './Grocery.module.css'

function Grocery({data1}) {
    
    return (
        
        <div>
            <div className={styles.box1}>
                <p>{data1.product_name}</p>
                <p>{data1.description}</p>
            </div>

        </div>
    )
}

export default Grocery
