export const logged = (user) => {
    return {
        type: '@auth/logged',
        payload: user
    }
}