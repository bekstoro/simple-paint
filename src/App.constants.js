export const minCanvasHeight = 20;
export const minCanvasWidth = 20;
export const maxCanvasHeight = 100;
export const maxCanvasWidth = 100;

export const defaultFillColor = '#f44336';
export const minFillHeight = 1;
export const minFillWidth = 1;

export const defaultLineX1 = 1;
export const defaultLineX2 = 1;
export const defaultLineY1 = 1;
export const defaultLineY2 = 4;

export const defaultRectangleX1 = 3;
export const defaultRectangleX2 = 7;
export const defaultRectangleY1 = 3;
export const defaultRectangleY2 = 7;

export const projectTitle = 'Simple Paint';
export const githubUrl = 'http://github.com/bekstoro/simple-paint';

export const validationMessages = {
    canvasHeight: `Height is required field, it should be greater than ${minCanvasHeight} and less than ${maxCanvasHeight}`,
    canvasWidth: `Width is required field, it should be greater than ${minCanvasWidth} and less than ${maxCanvasWidth}`,
    invalidColor: 'Invalid color',
    fillHeightRule: (canvasHeight) => `Height is required field, it should be greater than 0 and less than canvas height: ${canvasHeight}`,
    fillWidthRule: (canvasWidth) => `Width is required field, it should be greater than 0 and less than canvas width: ${canvasWidth}`,
    point1IsOutOfCanvas: 'Point 1 is out of canvas',
    point2IsOutOfCanvas: 'Point 2 is out of canvas',
    pointsAreEqual: 'Points are equal',
    requiredField: 'This field is required',
    shouldBeEqualByXYCoordinates: 'Should be equal by X or Y coordinates',
    shouldNotBeEqualByXYCoordinates: 'Should not be equal by X or Y coordinates',
    somethingWentWrong: 'Something went wrong'
};

export const messages = {
    newLineAdded: 'New line is added',
    newRectangleAdded: 'New rectangle is added'
};
