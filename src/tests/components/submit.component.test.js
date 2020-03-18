import React from 'react';
import {shallow} from 'enzyme';

import {Submit} from '../../components/submit.component';

describe('Submit component', () => {
    it('should render correctly', () => {
        const component = shallow(<Submit onClick={() => {}}/>);
        expect(component).toMatchSnapshot();
    });
});
