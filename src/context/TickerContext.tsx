import React, { ReactNode, useState } from "react";

interface TickerContextValue{
  isTickerOpened: boolean;
  toggle(): void;
}

interface TickerProviderProps {
  children: ReactNode
}

export const TickerContext = React.createContext({} as TickerContextValue);

export const TickerProvider = ({children}: TickerProviderProps) => {
  const [isTickerOpened, setIsTickerOpened] = useState(false);

  const toggle = () => setIsTickerOpened( prev => !prev);

  return(
    <TickerContext.Provider value={{
      isTickerOpened,
      toggle
    }}>
      {children}
    </TickerContext.Provider>
  )
}

