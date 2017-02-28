class Result {
    constructor(state, body = {}, statusCode = 200) {
        this.statusCode = statusCode;
        this.state = state;
        this.body = body;
    }
}
module.exports = Result;