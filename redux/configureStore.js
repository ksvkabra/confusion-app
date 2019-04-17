import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { dishes } from './dishes';
import { promotions } from './promotions';
import { comments } from './comments';
import { leaders } from './leaders';
import { favorites } from './favorites';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers ({
            dishes,
            comments,
            promotions,
            leaders,
            favorites
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}