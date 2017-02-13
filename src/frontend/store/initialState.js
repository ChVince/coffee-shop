const initialState = {
    welcomePage: {
        articles: [],
        page: 0,
        spinner: false,
        pageNum: 1,
        notification: {
            error: false,
            msg: ''
        }
    },
};
export default initialState;