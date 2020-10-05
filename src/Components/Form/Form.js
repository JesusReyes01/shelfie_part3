import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './Form.css'

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        price: 0,
        img: '',
        edit: false
      }
    }

    componentDidMount() {
      let { id } = this.props.match.params;
      if (id) {
        axios.get(`/api/product/${id}`)
          .then(res => {
            // console.log(res.data[0].name)
            this.setState({name: res.data[0].name, price: res.data[0].price, img: res.data[0]. img, edit: true })
          })
      }
    }


    componentDidUpdate(oldProps) {
        if (this.props.match.path !== oldProps.match.path) {
          this.setState({ name: '', price: 0, img: ''});
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
            this.props.history.push('/')
        })
        .catch(err => console.log('axios add inventory error', err))
    }



    updateProduct(){
        let { name,price,img} = this.state;
        let {id} = this.props.match.params
        let product = {name, price, img};
        
        axios.put(`/api/updateProduct/${id}`, product)
        .then(res => {
          this.clearForm();
        })
        .catch(err => console.log('axios error', err))
    }

    clearForm() {
        if (this.props.match.params.id) {
          this.props.history.push('/');
        } else {
          this.setState({
            name: '',
            price: 0,
            img: '',
            edit: false
          })
        }
      }
    render(){
        return(
            <div className='form'>
                <div>

                {this.state.img
                        ? <img src={this.state.img} alt={this.state.name} className ='form-image'/>
                        : <h1>NO IMAGE</h1>
                    }


                    <p>ImageURL</p>
                    <input value={this.state.img} onChange={e => this.imageInput(e.target.value)}/>
                    <p>Product Name:</p>
                    <input value={this.state.name} onChange={e => this.nameInput(e.target.value)}/>
                    <p>Price:</p>
                    <input value={this.state.price} onChange={e => this.priceInput(e.target.value)}/>
                </div>
                <div className='button-flex'>
                    <button onClick={() => this.clearForm()}>Cancel</button>
                    
                    {this.state.edit
                        ? <button onClick={() => this.updateProduct()}>Submit Changes</button>
                        : <button onClick={() => this.addToInventory()}>Add to Inventory</button>
                    }
                    
                    
                </div>
            </div>

        )
    }

};
export default withRouter(Form);