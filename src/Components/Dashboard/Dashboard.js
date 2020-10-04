import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product'
import './Dashboard.css'


class Dashboard extends Component {
    // constructor(props){
    //     super(props);
        
    // }

    deleteProduct = (id) => {
        axios
        .delete(`/api/deleteProduct/${id}`)
        .then(res => {
            this.props.getInventoryFn();
        })
        .catch(err => console.log('axios error', err))
    }
    render(){

    const mappedInventory = this.props.inventory.map( (el,i) => (
        <Product
            key={i}
            product={el}
            getInventoryFn={this.props.getInventoryFn}
            deleteProductFn={this.deleteProduct}
            editSelectedFn={this.props.editSelectedFn}/>
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

}
export default Dashboard;


