import React from 'react'


function Grocery({e,handleAdd,handleSub}) {
    
    return (
        <div>
            <img src={`${e.image_url}`} alt='image' />
            <div>
                <p>{e.product_name}</p>
                <p>{e.description}</p>
                <p>{e.price}</p>
            </div>

            <div>
                <div>
                    <button onClick={()=>handleSub(e.id)}>-</button>
                    <div>{e.qty}</div>
                    <button onClick={()=>handleAdd(e.id)}>+</button>
                </div>
                {e.is_available ? <button>Highstock</button>:<button>Lowstock</button>}

            </div>
                      
        </div>
    )
}

export default Grocery
