// nesting child CompA=>CompB=>CompC ... to send props if there is more nesting , 
//thats too much difficult so use contextAPI

import React from "react";
const usernameContext=React.createContext("Hello");//"Hellow is default value"
const Userprovider=usernameContext.Provider;
const Userconsumer=usernameContext.Consumer;
export {Userprovider,Userconsumer}

// provider send props
// consumer recive props, as a parameter of a function 