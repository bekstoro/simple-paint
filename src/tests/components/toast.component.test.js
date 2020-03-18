import React from 'react';
import {shallow} from 'enzyme';
import MuiAlert from '@material-ui/lab/Alert';

import {Toast} from '../../components/toast.component';

describe('Toast component', () => {
    it('should render correctly', () => {
        const component = shallow(<Toast/>);
        expect(component).toMatchSnapshot();
    });

    it('should render one MuiAlert', () => {
        const component = shallow(<Toast/>);
        expect(component.find(MuiAlert)).toHaveLength(1);
    });
});
