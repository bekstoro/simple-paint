import React from 'react';
import {shallow} from 'enzyme';

import {Canvas} from '../../../applets/canvas';
import {mockFunction, mockStore} from '../../mock-data';

describe('Canvas component', () => {
    it('should render correctly', () => {
        const component = shallow(<Canvas store={mockStore} handleNext={mockFunction}/>);
        expect(component).toMatchSnapshot();
    });
});
