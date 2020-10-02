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
      inventory: [{name: 'dummyname', price: 9, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60L"}]
      // {name: 'dummyname', price: 9, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60L"}
    }
  }
  componentDidMount(){
    axios.get('/api/inventory')
    .then(res => {
      this.setState({inventory: res.data})
    })
    .catch(err => console.log(err));
  }
  

  render(){
    return (
      <div className="App">
        <Header />
        <Dashboard 
          inventory ={this.state.inventory} 
          getProductFn={this.getProduct}/>
        <Form />
      </div>
    );

  }
}

export default App;
