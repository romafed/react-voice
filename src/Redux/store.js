import { createStore } from 'redux';
import rootReduser from './reducers/rootReducer';

const initialState = {};

const store = createStore(
    rootReduser, initialState
);

export default store;