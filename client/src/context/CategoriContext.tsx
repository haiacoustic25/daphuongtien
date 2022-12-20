import React, { createContext, useState } from 'react';

const INIT_STATE = '';

export const CategoriContext = createContext<any>(INIT_STATE);

const CategoriProvider = ({ children }: { children: any }) => {
  const [value, setValue] = useState();
  const handleSetValue = (value: any) => {
    setValue(value);
  };
  const context = { value, handleSetValue };
  return <CategoriContext.Provider value={context}>{children}</CategoriContext.Provider>;
};

export default CategoriProvider;
