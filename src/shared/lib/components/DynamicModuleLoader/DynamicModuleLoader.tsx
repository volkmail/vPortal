import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer;
};

type ReducersListEntry = [StateSchemaKeys, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;

  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(
      ([reducerKey, reducer]: ReducersListEntry) => {
        store.reducerManager.add(reducerKey, reducer);
        dispatch({ type: `@INIT ${reducerKey} reducer` });
      },
    );

    return () => {
      if (removeAfterUnmount) {
        Object.keys(reducers).forEach((reducerKey: StateSchemaKeys) => {
          store.reducerManager.remove(reducerKey);
          dispatch({ type: `@DESTROY ${reducerKey} reducer` });
        });
      }
    };
  }, []);

  return <div>{children}</div>;
};

export { DynamicModuleLoader };
