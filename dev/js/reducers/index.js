import {combineReducers} from 'redux';
import CharactersReducer from './reducer-characters';
import ActiveCharacterReducer from './reducer-active-character';

const allReducers = combineReducers({
    characters: CharactersReducer,
    activeCharacter: ActiveCharacterReducer
});

export default allReducers;