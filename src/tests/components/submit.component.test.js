import React from 'react';
import {mount, shallow} from 'enzyme';
import Button from '@material-ui/core/Button';

import {Submit} from '../../components/submit.component';

const onNext = jest.fn();

describe('Submit component', () => {
    it('should render correctly', () => {
        const component = shallow(<Submit onNext={onNext}/>);
        expect(component).toMatchSnapshot();
    });

    it('should render one Button', () => {
        const component = mount(<Submit onNext={onNext}/>);
        expect(component.find(Button)).toHaveLength(1)
    });

    it('should call onNext', () => {
        const component = mount(<Submit onNext={onNext}/>);
        component.find(Button).at(0).simulate('click');
        expect(onNext).toHaveBeenCalled();
    });
});
