export default function(state = null, action){
    switch (action.type){
        case 'CHARACTER_SELECT':
            return action.payload;
            break;
    }
    return state;
}