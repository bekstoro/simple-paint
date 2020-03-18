import React from 'react';
import {shallow} from 'enzyme';
import LinearProgress from '@material-ui/core/LinearProgress';

import {CanvasComponent} from '../../../applets/canvas/canvas.component';
import {Submit} from '../../../components/submit.component';
import {Toast} from '../../../components/toast.component';
import {validationMessages} from '../../../App.constants';

const props = {
    handleNext: jest.fn(),
    setCanvasRequest: jest.fn()
};

describe('Canvas component', () => {
    it('should render correctly', () => {
        const component = shallow(<CanvasComponent {...props}/>);
        expect(component).toMatchSnapshot();
    });

    it('should render LinearProgress', () => {
        const component = shallow(<CanvasComponent {...props} isLoading={true}/>);
        expect(component.find(LinearProgress)).toHaveLength(1);
    });

    it('should call handleNext', () => {
        shallow(<CanvasComponent {...props} isSuccess={true}/>);
        expect(props.handleNext).toHaveBeenCalled();
    });

    it('should render Toast', () => {
        const component = shallow(<CanvasComponent {...props} errorMessage={validationMessages.somethingWentWrong}/>);
        expect(component.find(Toast)).toHaveLength(1);
    });

    it('should call setCanvasRequest', () => {
        const component = shallow(<CanvasComponent {...props}/>);
        component.find(Submit).at(0).simulate('click');
        expect(props.setCanvasRequest).toHaveBeenCalled();
    });
});
