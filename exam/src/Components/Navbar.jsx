import React from 'react'
import Grocery from './Grocery'
import data from './data.json';
import {v4 as uuid} from 'uuid';

function Navbar() {
    const [items,setItems] = React.useState(data);
    
    return (
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,30%)',gridGap:'2% 13%'}}>
            {items.map((item,id)=>{
                return <Grocery key={id} data1={item} />
            })}
            
        </div>

    );
}

export default Navbar
