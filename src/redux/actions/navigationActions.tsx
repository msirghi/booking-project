export const navigationActions = {
    NAVIGATE_TO_NEW_SCREEN: 'NAVIGATE_TO_NEW_SCREEN'
};

export const navigateToNewScreen = (payload: string) => {
    return {
        type: navigationActions.NAVIGATE_TO_NEW_SCREEN,
        payload
    }
};
