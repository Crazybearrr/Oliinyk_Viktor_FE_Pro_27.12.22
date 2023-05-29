import { createStore, compose, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import todos from '../reducers';

const stringMiddleware = () => (next) => (action) =>{
    if (typeof action === 'string') {
         return next({
            type: next
        })
    }
    return next(action)
}

const store = createStore(
                        todos,
                        compose(
                            applyMiddleware(ReduxThunk, stringMiddleware),
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                            ));

export default store