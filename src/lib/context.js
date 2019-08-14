import React from 'react';

const RouterContext = React.createContext(null);

export function useRouter() {
  return React.useContext(RouterContext);
}

export { RouterContext };
