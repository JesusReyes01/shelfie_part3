import React,{Component} from 'react';
import {HashRouter} from 'react-router-dom'
// import axios from 'axios'
import Header from './Components/Header/Header';
import routes from './routes' 

import './App.css';



class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     inventory: [],
  //     currentProduct: ''
  //   }
  //   this.getInventory = this.getInventory.bind(this)
  //   this.editSelected = this.editSelected.bind(this)
  // }
  // componentDidMount(){
  //   this.getInventory();
  // }
  
  // getInventory(){
  //   axios.get('/api/inventory')
  // .then(res => {
  //   this.setState({inventory: res.data})
  // })
  // .catch(err => console.log(err));
  // }

  // editSelected(product){
  //   this.setState({currentProduct: product})
  // }
  


  render(){

    return (
      <HashRouter>
        <div className="App">
          <Header />
          {routes}
          <div >
            {/* <Form 
              product={this.state.currentProduct}
              getInventoryFn={this.getInventory}
              editSelectedFn={this.editSelected}/>
            <Dashboard 
              inventory ={this.state.inventory}
              getInventoryFn={this.getInventory}
              editSelectedFn={this.editSelected}/> */}
          </div>
          
        </div>
      </HashRouter>
    );

  }
}

export default App;