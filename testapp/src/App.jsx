import React,{Component} from 'react';
import './App.css';

import {Cardlist}  from './Components/Card-List/cardlist.component'


class App extends Component {
  constructor(){
    super()

    this.state = {
      monsters : [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(members => this.setState({monsters : members}))
  }  

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    console.log(filteredMonsters)
    console.log(this.state.monsters)
    return(      
      <div className="App">
        <input type='search' placeholder='search monster' onChange={e => this.setState({searchField : e.target.value})}/>
        <Cardlist monsters={filteredMonsters} />     
      </div>
    );
  }
}

export default App;
