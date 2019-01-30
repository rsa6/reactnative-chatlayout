import * as React from 'react';

export interface AppContextInterface {
  data: string;
}

const ctxt: any = React.createContext<AppContextInterface | null>(null);
// export const AppContextProvider = ctxt.Provider;
// export const AppContextConsumer = ctxt.Consumer;
export const AppContext = ctxt;
