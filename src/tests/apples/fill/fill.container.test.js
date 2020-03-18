import React from 'react';
import {shallow} from 'enzyme';

import {Fill} from '../../../applets/fill';
import {mockFunction, mockStore} from '../../mock-data';

describe('Fill component', () => {
    it('should render correctly', () => {
        const component = shallow(<Fill store={mockStore} handleNext={mockFunction}/>);
        expect(component).toMatchSnapshot();
    });
});
