import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { useNavigate } from 'react-router';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
}

const StoreProvider = (props: StoreProviderProps) => {
  const navigate = useNavigate();
  return (
    <Provider store={createReduxStore(props.initialState, navigate)}>
      {props.children}
    </Provider>
  );
};

export { StoreProvider };
