import React from 'react';

const state = {
    number:0,
    authToken:"Askfh6y6",
    sessionId:"aa",
    isAuthenticated:false
};

const NumberContext = React.createContext(state.number);

export default NumberContext;