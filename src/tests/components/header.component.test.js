import React from 'react';
import {shallow} from 'enzyme';

import {Header} from '../../components/header.component';

describe('Header component', () => {
    it('should render correctly', () => {
        const component = shallow(<Header/>);
        expect(component).toMatchSnapshot();
    });
});
