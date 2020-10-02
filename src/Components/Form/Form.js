import React, {Component} from 'react';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            imageInput: '',
            productNameInput: '',
            priceInput: null
        }
    }
    handleImageInput = (val) => {
        this.setState({imageInput: val})
    }
    handleProductNameInput = (val) => {
        this.setState({productNameInput: val})
    }
    handlePriceInput = (val) => {
        this.setState({priceInput: val})
    }
    // addToInventory = () => {
    //     this.props.SOMETHINGFN(this.state.imageInput, this.state.productNameInput, this.state.priceIput);
    //     this.clearForm();
    // }
    clearForm = () => {
        this.setState({imageInput: ''})
        this.setState({productNameInput: ''})
        this.setState({priceInput: null})

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