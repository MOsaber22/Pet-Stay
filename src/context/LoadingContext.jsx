import { createContext, useState } from "react";
import { RotatingLines } from 'react-loader-spinner'

export const loadingContext = createContext();

export const LoadingContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
  const loading = () => {
    return (
      <RotatingLines
        height={80}
        width={80}
        radius={9}
        color="grey"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  };
  return (
    <loadingContext.Provider value={{loading, isLoading, setIsLoading}}>
      {children}
    </loadingContext.Provider>
  );
};
