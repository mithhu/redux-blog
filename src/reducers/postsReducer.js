export default () => {
    switch (action.type) {
        case "FETCH_POSTS":
            return action.payload;
        default:
            return state;
    }
};
