const initialState = {
    name: 'John'
};

export const accountReducer = (state = initialState, action: { type: string, payload: string }) => {
    switch (action.type) {
        default:
            return state;
    }
}
