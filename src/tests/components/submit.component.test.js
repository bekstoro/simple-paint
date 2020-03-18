import React from 'react';
import {mount, shallow} from 'enzyme';
import Button from '@material-ui/core/Button';

import {Submit} from '../../components/submit.component';

const onClick = jest.fn();

describe('Submit component', () => {
    it('should render correctly', () => {
        const component = shallow(<Submit onClick={onClick}/>);
        expect(component).toMatchSnapshot();
    });

    it('should render one Button', () => {
        const component = mount(<Submit onClick={onClick}/>);
        expect(component.find(Button)).toHaveLength(1)
    });

    it('should call onClick', () => {
        const component = mount(<Submit onClick={onClick}/>);
        component.find(Button).at(0).simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
});
