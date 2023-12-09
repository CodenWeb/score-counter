export const Reducer = (state, action) => {
    switch(action.payLoad) {
        case 'busStops': {
        return action.payLoad.length < 1 ? {...state, noStopFound: true} : { ...state, busStops: action.payLoad, noStopFound: false } 
        }
        case 'handleOne': {
            return {...state, player1: state.player1 + 1}
        }
        case 'handleTwo': {
            return {...state, player2: state.player2 + 1}
        }
        case 'handleOneMinus': {
            return {...state, player1: state.player1 - 1}
        }
        case 'handleTwoMinus': {
            return {...state, player2: state.player2 - 1}
        }
        case 'reset': {
            return {...state, player1: 0, player2: 0,}
        }
        default: 
        return state
    }
};


export const initialState =  JSON.parse(localStorage.getItem('score')) || {'player1': 0, 'player2': 0, };