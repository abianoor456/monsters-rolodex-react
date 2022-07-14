
import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.componenet';
import SearchBox from './components/search-box/search-box.component';
class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: []
    }
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const body = await response.json()
    await this.setState(() => { return { monsters: body } })
  }

  onSearchChange = async (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    await this.setState(() => {
      return { searchField }
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchField))

    return (
      <div className="App" >
        <h1 className='app-tile'></h1>
        <SearchBox onChangeHandler={onSearchChange} placeHolder='search monsters' className='monster-list-search-box' />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;
