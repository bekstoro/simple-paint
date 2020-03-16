export const minCanvasWidth = 20;
export const minCanvasHeight = 20;
export const maxCanvasWidth = 100;
export const maxCanvasHeight = 100;

export const githubUrl = 'http://github.com/bekstoro/simple-paint';

export const validationMessages = {
    canvasHeight: `Height is required field, it should be more than ${minCanvasHeight} and less than ${maxCanvasHeight}`,
    canvasWidth: `Width is required field, it should be more than ${minCanvasWidth} and less than ${maxCanvasWidth}`,
    coordinatesFieldRule: 'Coordinates are required, it should be within canvas area',
    requiredField: 'This field is required'
};
