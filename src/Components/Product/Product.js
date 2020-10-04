// import axios from 'axios';
import React, {Component} from 'react';

class Product extends Component{
    // constructor(props){
    //     super(props);
        
    // }

    // deleteProduct = (id) => {
    //     axios
    //     .delete(`/api/deleteProduct/${id}`)
    //     .then(res => {
    //         this.props.getInventoryFn();
    //     })
    //     .catch(err => console.log('axios error', err))
    // }

    render(){
    
        return(
            <div className='product-flex'>
                <div>
                    <img src={this.props.product.img} alt={this.props.product.name}/>
                </div>
                <div>
                    <div>
                        <span>{this.props.product.name}</span>
                        <span>${this.props.product.price}</span>
                    </div>
                    <div>
                        <button onClick={()=> this.props.editSelectedFn(this.props.product)}>Edit</button>
                        <button onClick={()=> this.props.deleteProductFn(this.props.product.id)}>Delete</button>
                    </div>
                    
                </div>


            </div>
        )
        }

};
export default Product;