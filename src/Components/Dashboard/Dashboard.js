import React from 'react';
import Product from '../Product/Product'


const Dashboard = props => {
    const mappedInventory = props.inventory.map( (el,i) => (
        <Product
            key={i}
            product={el}
            getInventoryFn={props.getInventoryFn}/>
    ))
        return(
            <div>
                <h1>Dashboard</h1>
                <div>
                    {mappedInventory}   
                </div>
            </div>
        )
    

}
export default Dashboard;


