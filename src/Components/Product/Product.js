// import axios from 'axios';
import React/*, {Component}*/ from 'react';
import { withRouter } from 'react-router-dom';
import './Product.css'

function Product(props) {
    let { id, name, price, img } = props.product;

    return (
      <div className='product-flex'>
        <img src={img} alt={name}/>
        <div className='large-media-flex'>
          <div className='description-flex'>
            <p >{name}</p>
            <p >${price}</p>
          </div>
          <div className='product-button-flex'>
            <button onClick={_ => props.deleteProductFn(id)}>Delete</button>
            <button onClick={_ => props.history.push(`/edit/${id}`)}>Edit</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default withRouter(Product);


// class Product extends Component{

//     render(){

//         return(
//             <div className='product-flex'>
//                 <div>
//                     <img src={this.props.product.img} alt={this.props.product.name}/>
//                 </div>
//                 <div >
//                     <div className='description-flex'>
//                         <p>{this.props.product.name}</p>
//                         <p>${this.props.product.price}</p>
//                     </div>     
//                     <div className='product-button-flex'>
//                         <button onClick={()=> this.props.deleteProductFn(this.props.product.id)}>Delete</button>
//                         <button onClick={()=> this.props.history.push(`/edit/${this.props.product.id}`)}>Edit</button>
//                         {/* console.log(this.props) */}
//                     </div>
//                 </div>
//             </div>
//         )
//         }
// };
// export default Product;