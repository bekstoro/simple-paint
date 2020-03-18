import React from 'react';
import {shallow} from 'enzyme';
import LinearProgress from '@material-ui/core/LinearProgress';

import {LineComponent} from '../../../applets/line/line.component';
import {Submit} from '../../../components/submit.component';
import {Toast} from '../../../components/toast.component';
import {validationMessages} from '../../../App.constants';

const props = {
    handleNext: jest.fn(),
    setLineRequest: jest.fn()
};

describe('Line component', () => {
    it('should render correctly', () => {
        const component = shallow(<LineComponent {...props}/>);
        expect(component).toMatchSnapshot();
    });

    it('should render LinearProgress', () => {
        const component = shallow(<LineComponent {...props} isLoading={true}/>);
        expect(component.find(LinearProgress)).toHaveLength(1);
    });

    it('should call handleNext', () => {
        shallow(<LineComponent {...props} isSuccess={true}/>);
        expect(props.handleNext).toHaveBeenCalled();
    });

    it('should render Toast', () => {
        const component = shallow(<LineComponent {...props} errorMessage={validationMessages.somethingWentWrong}/>);
        expect(component.find(Toast)).toHaveLength(1);
    });

    it('should call setLineRequest', () => {
        const component = shallow(<LineComponent {...props}/>);
        component.find(Submit).at(0).simulate('click');
        expect(props.setLineRequest).toHaveBeenCalled();
    });
});
