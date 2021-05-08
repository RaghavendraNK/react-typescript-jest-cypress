import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

export const MockProvider = (props: { children: JSX.Element }): JSX.Element => {
    const mockstore = configureStore();
    let store = mockstore();
    return <Provider store={store}>{props.children}</Provider>;
};
