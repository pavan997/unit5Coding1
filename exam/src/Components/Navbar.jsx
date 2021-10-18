import React from 'react'
import Grocery from './Grocery'
import data from './data.json';
import {v4 as uuid} from 'uuid';

function Navbar() {
    const [items,setItems] = React.useState(data);
    
    return (
        <div>
            {items.map((item,id)=>{
                return <Grocery key={id} data1={item} />
            })}
            
        </div>

    );
}

export default Navbar
