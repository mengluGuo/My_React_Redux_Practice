import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectCharacter} from "../actions/index";


class CharacterList extends Component{

    createListItems(){
       return this.props.characters.map((character) => {
           return (
               <li
                   key={character.id} onClick={() => this.props.selectCharacter(character)}
               >
                   {character.characters}
               </li>
           );
       });
    }

    render() {
        return (
          <ul>
              {this.createListItems()}
          </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        characters: state.characters,
    };
}

function matchActionToProps(dispatch) {
    return bindActionCreators({selectCharacter: selectCharacter}, dispatch);
}

export default connect(mapStateToProps, matchActionToProps)(CharacterList);