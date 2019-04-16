import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { dishes } from './dishes';
import { promotions } from './promotions';
import { comments } from './comments';
import { leaders } from './leaders';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers ({
            dishes,
            comments,
            promotions,
            leaders
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}