import React from 'react'
import styles from './Grocery.module.css'

function Grocery({data1}) {
    
    return (
        
        <div className={styles.main_1}>
            <img src={data1.image_url} alt='img' width='120' height='120'/>
            <div className={styles.box1}>
                <p>{data1.product_name}</p>
                <p>{data1.description}</p>
                <p>{data1.price}</p>
                {data1.is_available ? <button style={{backgroundColor:'red'}}>High Stock</button>:<button style={{backgroundColor:'blue'}}>Low Stock</button>}
            </div>

        </div>
    )
}

export default Grocery
