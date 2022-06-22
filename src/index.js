import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, combineReducers }  from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'



const changeUser = (name) => ({
  type: 'CHANGE_NAME',
  payload: name
})

export const userAction = (name) => (dispatch) => { 
 dispatch(changeUser(name))
}




const user = {
  name: 'steve',
  email: 'steve@gmail.com',
  phone: '055555'
}

const initialState = {
  itemName: 'phone',
  brand: 'Samsung'
}
function userReducer(state = user, action) {
  switch(action.type) {
    case 'GET_NAME':
      return state.name
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload
      }

    default:
      return state
  }
}

function shoppingReducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_ITEM':
      return state.item
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: shoppingReducer
})

const store =  createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
       <App />
    </Provider>
);

