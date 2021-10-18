import React from 'react'
import Grocery from './Grocery'
import Data from './Data'

function Navbar() {
    return (
        <div>
            <div>this is navbar</div>
            <div>cart</div>

            <Grocery props={Data}/>
        </div>

    )
}

export default Navbar
