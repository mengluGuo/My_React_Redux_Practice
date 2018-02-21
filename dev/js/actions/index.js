export const selectCharacter = (character) => {
    return {
        type: 'CHARACTER_SELECT',
        payload: character
    };
}