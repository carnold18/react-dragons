import React, { Component } from 'react';

class Home extends Component{

    state = {
        searchTerm: ''
    }

    filterDragons = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    searchDragons = (event) => {
        const allDragons = this.props.dragons
        return allDragons.filter( dragon =>{
          return dragon.name.includes(this.state.searchTerm)
        })
        // event.preventDefault()
        // let dragonName = event.target.children[0].value
        // let foundDragon = this.state.dragons.find(dragon => {return dragon.name === dragonName})
        // this.setState({
        //   dragons: [foundDragon]
        // })
      }

    render() {
        // Note how style attributes are now passed as object instead of a string!!!
        console.log(this.props.searchDragons)
        return (
            
            <div style={{float:'left',width:'40%', padding:'5%', backgroundColor:'#00ffd8'}}>
                <h1>Home</h1>
                {/* <form onSubmit={event => this.props.searchDragons(event)}> */}
                     <input type="text" placeholder="Send Draggy To War..." style={{float: 'center', width:'100%'}} onChange={this.filterDragons}></input>
                     {/* <button>Submit</button> */}
                {/* </form> */}
                {this.searchDragons().map(dragon => (
                    {/* this.props.searchDragons.includes(dragon.name)  */}
                    ? (
                    <div onClick={event => this.props.handleClick(dragon)}>
                        <h2 key={dragon.id}>{dragon.name}</h2>
                        <img src={dragon.image} alt="" width="80%"></img>
                    </div>) : null
                ))}
            </div>
        )
    }

}



export default Home;