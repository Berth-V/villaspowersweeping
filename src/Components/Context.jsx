import {useState, createContext} from 'react';
export const Context = createContext();

export const Data = ({children}) => {
  const [isLogoAnimationCompleted, setisLogoAnimationCompleted] =
    useState(false);
  return (
    <Context.Provider
      value={{isLogoAnimationCompleted, setisLogoAnimationCompleted}}
    >
      {children}
    </Context.Provider>
  );
};
