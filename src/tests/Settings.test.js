import React from 'react';
import {shallow} from 'enzyme';
import {Settings} from '../screens/settings.screen';

describe('Settings', () => {
    it('should render correctly', () => {
        const component = shallow(<Settings onSubmit={() => {}}/>);
        expect(component).toMatchSnapshot();
    });
});
