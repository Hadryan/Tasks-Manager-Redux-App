import {
    createStore
} from 'redux'
import loginView from './login_view.js'


export default function app() {
    console.log(createStore(function(state = [], action) {
        return state;
    }));

    let initialState = {
        user: '',
        todos: [],
        view: loginView
    }

    const appReducer = function(state, action) {
        if (state === undefined) {
            state = initialState;
        }
        switch (action.type) {
            case "TESTING":
                console.log("It works!");
                console.log(state);
                return state

            default:
                return state;

        }
    }

    console.log(appReducer);

    const store = createStore(appReducer);

    const render = function() {
        let state = store.getState();
        $('#app').html(state.view(store));
    }

    store.subscribe(render)

    store.dispatch({
        type: "TESTING",
    });
}
