import {navigationActions} from "../actions/navigationActions";

const initialState = {
    activeScreen: 'booking'
};

export const navigationReducer = (state = initialState, action: { type: string, payload: string }) => {
    switch (action.type) {
        case navigationActions.NAVIGATE_TO_NEW_SCREEN:
            return {...state, activeScreen: action.payload}
        default:
            return state;
    }
}
