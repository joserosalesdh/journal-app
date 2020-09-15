import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import AuthRouter from './AuthRouter';
import JournalScreen from '../components/journal/JournalScreen';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {

        firebase.auth().onAuthStateChanged(async (user) => {

            if (user?.uid) {  //user?.uid 245 min 5:15
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true); // Estoy autenticado? SI

                dispatch(startLoadingNotes(user.uid));
            } else { //Caso contrario
                setIsLoggedIn(false); // No estoy autenticado
            }

            setChecking(false); //quiere decir que ya tengo la respuesta, ya termine el check

        });

    }, [dispatch, setChecking, setIsLoggedIn]) //Pongo el dispatch en las dependencias asi no me tira el warning de la consola

    if (checking) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isLoggedIn}

                    />
                    <PrivateRoute
                        exact path="/"
                        component={JournalScreen}
                        isAuthenticated={isLoggedIn}
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>

        </Router>
    )
}

export default AppRouter
