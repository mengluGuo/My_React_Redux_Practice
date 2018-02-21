import React, {Component} from 'react';
import {connect} from 'react-redux';

class CharacterDetails extends Component{

    render(){
        if(!this.props.character){
            return(<h4>Select a character...</h4>)
        }

        return (
            <div>
                <img src={this.props.character.photo} height='20%' width='20%'></img>
                <h3>Performer: {this.props.character.performer}</h3>
                <h3>Occupation: {this.props.character.occupation}</h3>
                <h3>Description: <br/> {this.props.character.description}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        character: state.activeCharacter
    };
}

export default connect(mapStateToProps)(CharacterDetails);