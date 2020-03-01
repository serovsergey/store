import React, {createContext, useReducer} from 'react';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
        case 'SET_AUTH_DATA':
            return {...state, auth: action.payload };

        case 'RESET_AUTH_DATA':
            return {...state, auth: undefined};

        case 'SET_USER_DATA':
            return {...state, user: action.payload };

        default:
            console.log('deault', action)
            throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }