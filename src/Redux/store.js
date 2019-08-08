import { createStore } from 'redux';
import rootReduser from './reducers/rootReducer';

const initialState = {};

const store = createStore(
    rootReduser, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;