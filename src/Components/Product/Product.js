import React, {Component} from 'react';

class Product extends Component{
    render(){
    
        return(
            <div className='product-flex'>
                <img src={this.props.product.img} alt={this.props.product.name}/>
                <span>{this.props.product.name}</span>
                <span>${this.props.product.price}</span>
            </div>
        )
        }

};
export default Product;