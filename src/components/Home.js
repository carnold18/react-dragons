import React, { Component } from 'react';

class Home extends Component{

    render() {
        // Note how style attributes are now passed as object instead of a string!!!
        return (
        <div style={{float:'left',width:'40%', padding:'5%', backgroundColor:'#00ffd8'}}>
            <h1>Home</h1>
            {this.props.dragons.map(dragon => (
                <div onClick={event => this.props.handleClick(dragon)}>
                    <h2 key={dragon.id}>{dragon.name}</h2>
                    <img src={dragon.image} alt="" width="80%"></img>
                </div>
            ))}
        </div>
        )
    }

}



export default Home;