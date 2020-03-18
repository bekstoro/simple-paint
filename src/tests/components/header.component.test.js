import React from 'react';
import {mount, shallow} from 'enzyme';
import Link from '@material-ui/core/Link';

import {Header} from '../../components/header.component';

describe('Header component', () => {
    it('should render correctly', () => {
        const component = shallow(<Header/>);
        expect(component).toMatchSnapshot();
    });

    it('should render one Link', () => {
        const component = mount(<Header/>);
        expect(component.find(Link)).toHaveLength(1);
    });
});
