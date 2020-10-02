import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            price: null,
            img: ''
        }
        this.addToInventory = this.addToInventory.bind(this)
    }
    handleImageInput = (val) => {
        this.setState({img: val})
    }
    handleProductNameInput = (val) => {
        this.setState({name: val})
    }
    handlePriceInput = (val) => {
        this.setState({price: val})
    }
    // newProduct = {name: this.state.name, price: this.state.price, img: this.state.img}
    addToInventory = () => {
        let {name,price,img} = this.state;
        let product = {name, price, img}
        
        axios.post('/api/product', product)
        .then(res => {
            this.clearForm();
            this.props.getProductFn();
        })
        .catch(err => console.log(err));
      }

    clearForm = () => {
        this.setState({img: ''})
        this.setState({name: ''})
        this.setState({price: null})

    }
    render(){
        return(
            <div>
                <div>
                    <input onChange={e => this.handleImageInput(e.target.value)}></input>
                    <input onChange={e => this.handleProductNameInput(e.target.value)}></input>
                    <input onChange={e => this.handlePriceInput(e.target.value)}></input>
                </div>
                <div>
                    <button onClick={() => this.clearForm()}>Cancel</button>
                    <button onClick={() => this.addToInventory()}>Add to Inventory</button>
                </div>
            </div>

        )
    }

};