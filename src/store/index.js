import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import {rootReducer} from './reducers'
import {rootSaga} from './saga'

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

export const store = createStore(rootReducer, composeWithDevTools(middleware));

sagaMiddleware.run(rootSaga);
