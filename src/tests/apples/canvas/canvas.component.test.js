import React from 'react';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';

import {Canvas} from '../../../applets/canvas';

const configureMockStore = configureStore();

const initialState = {
    canvas: {
        width: 0,
        height: 0,
        isFailed: false,
        isLoading: false
    }
};

const store = configureMockStore(initialState);

describe('Canvas component', () => {
    it('should render correctly', () => {
        const component = shallow(<Canvas store={store} handleNext={() => {}}/>);
        expect(component).toMatchSnapshot();
    });
});
