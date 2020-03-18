import React from 'react';
import {shallow} from 'enzyme';
import LinearProgress from '@material-ui/core/LinearProgress';

import {FillComponent} from '../../../applets/fill/fill.component';
import {Submit} from '../../../components/submit.component';
import {Toast} from '../../../components/toast.component';
import {validationMessages} from '../../../App.constants';

const props = {
    handleNext: jest.fn(),
    setFillRequest: jest.fn()
};

describe('Fill component', () => {
    it('should render correctly', () => {
        const component = shallow(<FillComponent {...props}/>);
        expect(component).toMatchSnapshot();
    });

    it('should render LinearProgress', () => {
        const component = shallow(<FillComponent {...props} isLoading={true}/>);
        expect(component.find(LinearProgress)).toHaveLength(1);
    });

    it('should call handleNext', () => {
        shallow(<FillComponent {...props} isSuccess={true}/>);
        expect(props.handleNext).toHaveBeenCalled();
    });

    it('should render Toast', () => {
        const component = shallow(<FillComponent {...props} errorMessage={validationMessages.somethingWentWrong}/>);
        expect(component.find(Toast)).toHaveLength(1);
    });

    it('should call setFillRequest', () => {
        const component = shallow(<FillComponent {...props}/>);
        component.find(Submit).at(0).simulate('click');
        expect(props.setFillRequest).toHaveBeenCalled();
    });
});
