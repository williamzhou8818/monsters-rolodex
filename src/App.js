import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { Route, Link, Switch} from 'react-router-dom';

import About from './pages/about';

import './App.css';
class App extends Component { 
  constructor() {

    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
      fetch('/users')
        .then(response => response.json())
          .then(users => this.setState({ monsters: users }));
      
  }

  render() {

    const { monsters, searchField} =  this.state;
    const  filteredMonsters = monsters.filter(monster => 
           monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())    
      )
    return (
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        <Link to='/monsters-rolodex/about'>About</Link>
        <SearchBox 
            placeholder='search monsters'
            handleChange={e =>  this.setState({ searchField: e.target.value })}
         />
        <CardList monsters={filteredMonsters} />
        <Switch>
          <Route  path="/monsters-rolodex/about" component={About} />
        </Switch>
      </div>
    )
  }
}


export default App;