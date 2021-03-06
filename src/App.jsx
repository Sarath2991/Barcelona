import React,{Component} from 'react';
import './App.css';

import {Cardlist}  from './Components/Card-List/cardlist.component'
import { Searchbox } from './Components/Searchbox/Search-box.component';


class App extends Component {
  constructor(){
    super()

    this.state = {
      monsters : [],
      searchField: ''
    }
  }

  handlechange = (e) => (
    this.setState({searchField:e.target.value})
  )

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(members => this.setState({monsters : members}))
  }  

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(      
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox 
          placeholder='search monster'
          handlechange={this.handlechange}/>       
        <Cardlist monsters={filteredMonsters} />     
      </div>
    );
  }
}

export default App;
