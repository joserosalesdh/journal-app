import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        name: 'Maria',
        email: 'josesito@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(name, email, password, password2)

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }

    }
    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('name is required'))
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'))
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password should be at least 6 characters and match each other'))
            return false;
        }
        dispatch(removeError());
        return true;

    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>

                {
                    msgError &&
                    (<div className="auth__alert-error">
                        {msgError}
                    </div>)
                }

                <input
                    value={name}
                    onChange={handleInputChange}
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                />
                <input
                    value={email}
                    onChange={handleInputChange}
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                />
                <input
                    value={password}
                    onChange={handleInputChange}
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                <input
                    value={password2}
                    onChange={handleInputChange}
                    className="auth__input"
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                />

                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Register
                </button>

                <Link
                    to="/auth/login"
                    className="link "
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}

export default RegisterScreen
