import React from 'react';
import {Provider} from 'react-redux';
import {mount, shallow} from 'enzyme';

import {Settings} from '../screens/settings.screen';
import {App} from '../App';
import {mockStore} from './mock-data';

describe('App', () => {
    it('should render correctly', () => {
        const component = shallow(<App/>);
        expect(component).toMatchSnapshot();
    });

    it('should render Settings', () => {
        const component = mount(<Provider store={mockStore}><App/></Provider>);
        expect(component.find(Settings)).toHaveLength(1);
    });
});
