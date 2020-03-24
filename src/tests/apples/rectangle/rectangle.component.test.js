import React from 'react';
import {shallow} from 'enzyme';
import LinearProgress from '@material-ui/core/LinearProgress';

import {RectangleComponent} from '../../../applets/rectangle/rectangle.component';
import {Toast} from '../../../components/toast.component';
import {validationMessages} from '../../../App.constants';

const props = {
    handleNext: jest.fn(),
    setRectangleRequest: jest.fn()
};

describe('Rectangle component', () => {
    it('should render correctly', () => {
        const component = shallow(<RectangleComponent {...props}/>);
        expect(component).toMatchSnapshot();
    });

    it('should render LinearProgress', () => {
        const component = shallow(<RectangleComponent {...props} isLoading={true}/>);
        expect(component.find(LinearProgress)).toHaveLength(1);
    });

    it('should render Toast', () => {
        const component = shallow(<RectangleComponent {...props} errorMessage={validationMessages.somethingWentWrong}/>);
        expect(component.find(Toast)).toHaveLength(1);
    });
});
