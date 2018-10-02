import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {saveState, loadState} from './localstorage';

export default function configureStore(initialState = {}) {
    // check if something is there in the localstorage
    var persistedData = loadState();
    var store =  createStore(
        rootReducer,
        persistedData,
        applyMiddleware(thunk)
    );

    store.subscribe(()=>{
        saveState(store.getState());
    });

    return store;
}