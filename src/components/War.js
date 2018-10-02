import React, { Component } from 'react'

class War extends Component{

    render(){
        // Note how style attributes are now passed as object instead of a string!!!
        return (
            <div style={{float:'left', width:'40%', padding:'5%', backgroundColor:'#f98181'}}>
                <h1>War</h1>
                {this.props.warDragons.map(dragon => (
                <div onClick={event => this.props.handleClick2(dragon)} >
                    <h2 key={dragon.id}>{dragon.name}</h2>
                    <img src={dragon.image} alt="" width="80%"></img>
                </div>
            ))}
            </div>
        )
    }

}

export default War