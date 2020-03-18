import React from 'react';
import {shallow} from 'enzyme';

import {Rectangle} from '../../../applets/rectangle';
import {mockFunction, mockStore} from '../../mock-data';

describe('Rectangle component', () => {
    it('should render correctly', () => {
        const component = shallow(<Rectangle store={mockStore} handleNext={mockFunction}/>);
        expect(component).toMatchSnapshot();
    });
});
