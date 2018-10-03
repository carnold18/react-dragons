import React, { Component } from 'react';
import War from './War';
import Home from './Home';

class App extends Component {

  constructor() {
    super();
    this.state = {
      dragons: [],
      warDragons: [],
      input: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/dragons")
      .then(response => response.json())
      .then(data => {
          this.setState({dragons: data})
      })
  }

  handleClick = (dragon) => {
    // console.log(dragon)
    var index = this.state.dragons.indexOf(dragon);
      if (index > -1) {
      this.state.dragons.splice(index, 1);
    }
      this.setState({
        warDragons: [...this.state.warDragons, dragon]
      })
    // console.log(this.state)
  }

  handleClick2 = (dragon) => {
    var index = this.state.warDragons.indexOf(dragon);
      if (index > -1) {
      this.state.warDragons.splice(index, 1);
    }
      this.setState({
        dragons: [...this.state.dragons, dragon]
      })
  }

  searchDragons = (event) => {
    event.preventDefault()
    let dragonName = event.target.children[0].value
    let foundDragon = this.state.dragons.find(dragon => {return dragon.name === dragonName})
    this.setState({
      dragons: [foundDragon]
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <Home dragons={this.state.dragons} handleClick={this.handleClick} searchDragons={this.searchDragons}/>
        <War warDragons={this.state.warDragons} handleClick2={this.handleClick2}/>
      </div>
    );
  }
}

export default App;
