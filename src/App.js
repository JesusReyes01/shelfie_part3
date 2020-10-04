import React,{Component} from 'react';
import axios from 'axios'
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import './App.css';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: [],
      currentProduct: ''
    }
    this.getInventory = this.getInventory.bind(this)
    this.editSelected = this.editSelected.bind(this)
  }
  componentDidMount(){
    this.getInventory();
  }
  
  getInventory(){
    axios.get('/api/inventory')
  .then(res => {
    this.setState({inventory: res.data})
  })
  .catch(err => console.log(err));
  }

  editSelected(product){
    this.setState({currentProduct: product})
  }
  


  render(){

    return (
      <div className="App">
        <Header />
        <div className='body-flex'>
          <Form 
            product={this.state.currentProduct}
            getInventoryFn={this.getInventory}
            editSelectedFn={this.editSelected}/>
          <Dashboard 
            inventory ={this.state.inventory}
            getInventoryFn={this.getInventory}
            editSelectedFn={this.editSelected}/>
        </div>
        
      </div>
    );

  }
}

export default App;