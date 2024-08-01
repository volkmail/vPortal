import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

const StoreProvider = (props: StoreProviderProps) => (
  <Provider store={createReduxStore(props.initialState)}>
    {props.children}
  </Provider>
);

export { StoreProvider };
