import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product'
import './Dashboard.css'


class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
          inventory: [],
        }
        this.getInventory = this.getInventory.bind(this)
    }
    componentDidMount(){
        this.getInventory();
    }
      
    getInventory(){
        axios
        .get('/api/inventory')
        .then(res => {this.setState({inventory: res.data})})
        .catch(err => console.log(err));
    }
   
    deleteProduct = (id) => {
        axios
        .delete(`/api/deleteProduct/${id}`)
        .then(res => {this.getInventory();
        })
        .catch(err => console.log('axios error', err))
    }
    render(){

    const mappedInventory = this.state.inventory.map( (el,i) => (
        <Product
            key={i}
            product={el}
            getInventoryFn={this.props.getInventoryFn}
            deleteProductFn={this.deleteProduct}
            />
    ))
        return(
            <div className='dashboard-flex'>
                <div>
                    {mappedInventory}   
                </div>
            </div>
        )
        }

}
export default Dashboard;


