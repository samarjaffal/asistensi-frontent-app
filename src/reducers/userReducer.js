export const userReducer = (users = [], action) => {
    const { type, payload } = action;

    switch (type) {

        case '@users/list':
            return payload

        case '@users/created':
            return [...users, action.payload]

        case '@users/updated':
            return users.map((user) => {
                if (user.id === payload.id) {
                    return {
                        ...user,
                        ...payload,
                    };
                } else {
                    return user;
                }
            });

        case '@users/deleted':
            return users.filter(({ id }) => id !== payload.id);

        default:
            return users;
    }
}