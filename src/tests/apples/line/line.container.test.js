import React from 'react';
import {shallow} from 'enzyme';

import {Line} from '../../../applets/line';
import {mockFunction, mockStore} from '../../mock-data';

describe('Line component', () => {
    it('should render correctly', () => {
        const component = shallow(<Line store={mockStore} handleNext={mockFunction}/>);
        expect(component).toMatchSnapshot();
    });
});
