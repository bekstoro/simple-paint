import React from 'react';
import {mount, shallow} from 'enzyme';

import {Board} from '../../screens/board.screen';
import {mockStore} from '../mock-data';


describe('Board screen', () => {
    it('should render correctly', () => {
        const component = shallow(<Board store={mockStore}/>);
        expect(component).toMatchSnapshot();
    });

    it('should render table', () => {
        const component = mount(<Board store={mockStore}/>);
        expect(component.find('table')).toHaveLength(1);
    });
});
