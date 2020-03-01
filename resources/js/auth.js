import { useContext } from "react";
import axios from 'axios';
//import { useAuth } from "./context/auth_old";
import { store } from './store'

export default function useAuth(){
    const globalState = useContext(store);
    const { dispatch } = globalState;

    const login = (email, password, remember_me = 1) => {
        //console.log('login (email=', email, ', password=', password, ')')        
        return new Promise((resolve, reject) => {
            if(!email || !password) {
                reject(new Error('Login details are not complete'));
            }
            else {
                axios
                    .post('api/login', {
                        email,
                        password,
                        remember_me
                    })
                    .then((result) => {
                        localStorage.setItem('auth', JSON.stringify(result.data));
                        //console.log('logged in succesfully')
                        dispatch({type: 'SET_AUTH_DATA', payload: result.data});
                        resolve(result.data);
                    })
                    .catch((e) => {
                        console.log(e);
                        reject(e);
                    })
            }
        })        
    }

    const loadTokenFromStorage = () => {
        const tokenDataStr = localStorage.getItem("auth");
        if(tokenDataStr) {
            try {
                const tokenData = JSON.parse(tokenDataStr);
                dispatch({type: 'SET_AUTH_DATA', payload: tokenData});
                //console.log('login information loaded from LocalStorage')
                return tokenData.token;
            }
            catch (e) { 
                console.log(e);
                localStorage.removeItem('auth');
                return null;
            }
        }
    }

    const logout = () => {
        return new Promise((resolve, reject) => {
            let token;
            if(globalState.state.auth) token = globalState.state.auth.token;
            else token = loadTokenFromStorage();
            if(token) {
                axios
                    .post('api/logout', null, {headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        'Authorization': `Bearer ${token}`}
                    })
                    .then((result)=>{
                        localStorage.removeItem('auth');
                        dispatch({type: 'RESET_AUTH_DATA'});
                        resolve();
                    })
                    .catch((e) => {
                        console.log(e);
                        reject(e);
                    })
            }
            else reject(new Error('Token not found'))
        })
    }

    const loadUserData = () => {
        //console.log('loadUserData')
        return new Promise((resolve, reject) => {
            let token;
            if(globalState.state.auth) token = globalState.state.auth.token;
            else token = loadTokenFromStorage();
            //console.log('token', token)
            if(token) {
                axios
                    .get('api/user', {headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        'Authorization': `Bearer ${token}`}
                    })
                    .then((result) => {
                        dispatch({type: 'SET_USER_DATA', payload: result.data});
                        //console.log('user_data=', result)
                        resolve(result.data);
                    })
                    .catch((e) => {
                        console.log(e);
                        if (e.response.status === 401) {
                            dispatch({type: 'RESET_AUTH_DATA'});
                            localStorage.removeItem('auth');
                        }
                        reject(e);
                    })
            }
            else reject(new Error('Not logged in'));
            
        })
    }

    return {login, logout, loadUserData};
}