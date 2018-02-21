import React from 'react';
import CharacterList from '../containers/character-list';
import CharacterDetail from '../containers/character-detail';
require('../../scss/style.scss');

const App = () => {
    return (
        <div>
            <h2>Characters:</h2>
            <CharacterList/>
            <h2>Cast Details:</h2>
            <CharacterDetail/>
        </div>
    );
}

export default App;