class Result {
    constructor(body = {}, statusCode = 200) {
        this.statusCode = statusCode;
        this.body = body;
    }
}
module.exports = Result;