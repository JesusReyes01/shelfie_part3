import React from 'react';
import Product from '../Product/Product'
import './Dashboard.css'


const Dashboard = props => {
    const mappedInventory = props.inventory.map( (el,i) => (
        <Product
            key={i}
            product={el}
            getInventoryFn={props.getInventoryFn}/>
    ))
        return(
            <div className='dashboard-flex'>
                <h1>Dashboard</h1>
                <div>
                    {mappedInventory}   
                </div>
            </div>
        )
    

}
export default Dashboard;


