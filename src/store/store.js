import { createStore, combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';

const reducers = combineReducers({
    auth: authReducer // Tengo una propiedad atuh que es manejada por mi authReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //https://github.com/zalmoxisus/redux-devtools-extension#usage
);
// El createStore recibe un reducer y por eso le mando authReducer que es mi reducer y todo estaria bien pero,
// El problema es que createStore solo recibe un reducer no puede recibir varios y por eso uso combineReducers
// export el store en el punto mas alto de mi app, pero no en el index