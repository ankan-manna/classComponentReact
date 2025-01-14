import React from "react";
const usernameContext=React.createContext("Hello");//"Hellow is default value"
const Nameprovider=usernameContext.Provider;
const Nameconsumer=usernameContext.Consumer;
export {Nameprovider,Nameconsumer}
