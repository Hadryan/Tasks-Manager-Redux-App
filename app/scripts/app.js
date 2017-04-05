import {
    createStore
} from 'redux'
import loginView from './login_view.js'
import appView from './app_view.js'
import postUser from './server_requests.js'
import getPost from './get_posts.js'


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

            case "LOGGED_IN":
              console.log('I did log in!');
              var newUser = action.user
              if (newUser === ''|| action.email === '' || action.password === ''){
                alert('Complete Form')
              } else {
                postUser(store, action.email, action.password);
                // getPosts(store)
                return Object.assign({}, state, {
                  user: newUser,
                  view: appView
                })
              }

              case "AUTHENTICATED":
              console.log('My token saved');
              var userToken = action.userToken;
              return Object.assign({}, state, {
                userToken: userToken
              })



            default:
                return state;

        }
    }

    console.log(appReducer);

    const store = createStore(appReducer);

    const render = function() {
        let state = store.getState();
        $('#app').html(state.view(store));
          console.log(state);
    }

    store.subscribe(render)

    store.dispatch({
        type: "TESTING",
    });
}
