const initialState = {
    clipPage: {
        clipList: [],
        notification: {
            error: false,
            msg: ''
        },
        page: 0,
        pageNum: 0
    },

    welcomePage: {
        presentationClip: {},
        notification: {
            error: false,
            msg: ''
        }
    },
    common :{
        partnersLogo:[],
        notification: {
            error: false,
            msg: ''
        }
    }
};
export default initialState;