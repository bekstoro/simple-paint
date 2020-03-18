import React from 'react';
import {shallow} from 'enzyme';

import {Toast} from '../../components/toast.component';

describe('Toast component', () => {
    it('should render correctly', () => {
        const component = shallow(<Toast/>);
        expect(component).toMatchSnapshot();
    });
});
