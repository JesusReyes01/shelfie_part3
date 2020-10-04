import React, { Component } from 'react';
import axios from 'axios';
import './Form.css'

export default class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: null,
        name: '',
        price: 0,
        img: '',
        edit: false
      }
    }
    componentDidUpdate(oldProps) {
        let { id, name, price, img } = this.props.product;
        if (oldProps.product.id !== this.props.product.id) {
          this.setState({ id, name, price, img, edit: true });
        }
      }

    imageInput = (val) => {
        this.setState({img: val})
    }
    nameInput = (val) => {
        this.setState({name: val})
    }
    priceInput = (val) => {
        val = +val;
        this.setState({price: val})
    }
    addToInventory(){
        let {name,price,img} = this.state;
        let product = {name, price, img};
        
        axios.post('/api/product', product)
        .then(res => {
          this.props.getInventoryFn();
          this.clearForm();
        })
        .catch(err => console.log('axios error', err))
      }

    clearForm = () => {
        this.setState({id: null})
        this.setState({name: ''})
        this.setState({price: 0})
        this.setState({img: ''})

    }
    render(){
        return(
            <div className='form'>
                <div>
                    <p>ImageURL</p>
                    <input value={this.state.img} onChange={e => this.imageInput(e.target.value)}/>
                    <p>Product Name:</p>
                    <input value={this.state.name} onChange={e => this.nameInput(e.target.value)}/>
                    <p>Price:</p>
                    <input value={this.state.price} onChange={e => this.priceInput(e.target.value)}/>
                </div>
                <div className='button-flex'>
                    <button onClick={() => this.clearForm()}>Cancel</button>
                    {this.state.id
                        ? <button onClick={() => this.handleEdit()}>Submit Changes</button>
                        : <button onClick={() => this.addToInventory()}>Add to Inventory</button>
                    }
                    
                    
                </div>
            </div>

        )
    }

};