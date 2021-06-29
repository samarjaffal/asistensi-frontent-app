export const authReducer = (state = {}, action) => {
    if (action.type === '@auth/logged') {
        return { ...action.payload }
    }

    return state;
}