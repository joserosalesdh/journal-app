import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';
import { uiReducer } from '../reducers/uiReducer';
import { notesReducer } from '../reducers/notesReducer';
//Thunk es un middleware encargado de hacer esa parte especificamente, es perfecto para acciones asincronas 

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; //https://github.com/zalmoxisus/redux-devtools-extension#usage

const reducers = combineReducers({
    auth: authReducer, // Tengo una propiedad auth que es manejada por mi authReducer
    ui: uiReducer,
    notes: notesReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //https://github.com/zalmoxisus/redux-devtools-extension#usage
);
// El createStore recibe un reducer y por eso le mando authReducer que es mi reducer y todo estaria bien pero,
// El problema es que createStore solo recibe un reducer no puede recibir varios y por eso uso combineReducers
// export el store en el punto mas alto de mi app, pero no en el index

