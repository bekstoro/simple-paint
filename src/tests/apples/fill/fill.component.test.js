import React from 'react';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';

import {Fill} from '../../../applets/fill';

const configureMockStore = configureStore();

const initialState = {
    fill: {
        color: '',
        errorMessage: '',
        height: 0,
        isLoading: false,
        isSuccess: false,
        width: 0
    }
};

const store = configureMockStore(initialState);

describe('Fill component', () => {
    it('should render correctly', () => {
        const component = shallow(<Fill store={store} handleNext={() => {}}/>);
        expect(component).toMatchSnapshot();
    });
});
