import React from 'react';
import {Provider} from 'react-redux';
import {mount, shallow} from 'enzyme';
import Stepper from '@material-ui/core/Stepper';

import {Settings} from '../../screens/settings.screen';
import {mockFunction, mockStore} from '../mock-data';

describe('Settings screen', () => {
    it('should render correctly', () => {
        const component = shallow(<Settings onSubmit={mockFunction}/>);
        expect(component).toMatchSnapshot();
    });

    it('should render Stepper', () => {
        const component = mount(<Provider store={mockStore}><Settings/></Provider>);
        expect(component.find(Stepper)).toHaveLength(1);
    });
});
